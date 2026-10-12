// Import every blog post from the Wix site (paidtospeak.biz) into MDX.
//
//   node scripts/wix-import/blog.mjs            fetch missing posts, then convert all
//   node scripts/wix-import/blog.mjs --offline  convert from .cache/wix only
//
// Writes:
//   src/content/posts/<slug>.mdx              post body
//   src/assets/images/posts/<slug>/*.jpg      hero + inline images, resized
//   src/content/posts/wix.generated.ts        post metadata (title, date, hero)
//   src/lib/wix-post-redirects.json           old Wix path -> new path
//   .cache/wix/import-report.json             warnings for docs/WIX-MIGRATION.md
//
// Copy rules from CLAUDE.md are applied to post text: no em dashes, no emoji,
// no exclamation marks. Everything else is Kevin's original wording.

import fs from "node:fs";
import path from "node:path";
import { parse } from "node-html-parser";
import sharp from "sharp";
import { mapWixHref, newSlug } from "./links.mjs";
import { cleanText } from "./text.mjs";

const ROOT = path.resolve(import.meta.dirname, "../..");
const CACHE = path.join(ROOT, ".cache/wix");
const POSTS_HTML = path.join(CACHE, "posts");
const IMG_CACHE = path.join(CACHE, "media");
const OUT_MDX = path.join(ROOT, "src/content/posts");
const OUT_IMG = path.join(ROOT, "src/assets/images/posts");
const SITE = "https://www.paidtospeak.biz";
const offline = process.argv.includes("--offline");
const MAX_W = 1280;
const VIDEO_OVERRIDES = JSON.parse(fs.readFileSync(path.join(import.meta.dirname, "video-overrides.json"), "utf8"));

const report = { posts: 0, images: 0, youtube: 0, wixVideos: [], files: [], unhandled: [], emptyPosts: [], renamed: {} };

// ---------------------------------------------------------------- fetching

async function fetchText(url, tries = 5) {
  for (let i = 1; i <= tries; i++) {
    const res = await fetch(url);
    const text = await res.text();
    if (res.ok && !text.includes('data-hook="too-many-requests-page"')) return text;
    await new Promise((r) => setTimeout(r, i * 8000));
  }
  throw new Error(`Failed after ${tries} tries: ${url}`);
}

async function postUrls() {
  const xml = await fetchText(`${SITE}/blog-posts-sitemap.xml`);
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]).filter((u) => u.includes("/single-post/"));
}

async function cachedPost(wixSlug) {
  // Posts carried over from Kevin's older blog have dated slugs ("2017/07/25/x").
  const file = path.join(POSTS_HTML, `${wixSlug.replaceAll("/", "__")}.html`);
  const ok = (t) => t.includes('data-hook="post-description"');
  if (fs.existsSync(file) && ok(fs.readFileSync(file, "utf8"))) return fs.readFileSync(file, "utf8");
  if (offline) return null;
  const html = await fetchText(`${SITE}/single-post/${wixSlug}`);
  fs.writeFileSync(file, html);
  await new Promise((r) => setTimeout(r, 1500));
  return ok(html) ? html : null;
}

/** Original-resolution Wix media URL from any resized variant. */
function mediaOriginal(src) {
  const m = src.match(/https:\/\/static\.wixstatic\.com\/media\/([^/?#]+)/);
  return m ? `https://static.wixstatic.com/media/${m[1]}` : null;
}

async function downloadMedia(url) {
  const name = url.split("/").pop().replace(/[^\w.~-]/g, "_");
  const file = path.join(IMG_CACHE, name);
  if (!fs.existsSync(file)) {
    if (offline) return null;
    const res = await fetch(url);
    if (!res.ok) return null;
    fs.writeFileSync(file, Buffer.from(await res.arrayBuffer()));
  }
  return file;
}

/** Resize to MAX_W and write as JPEG (or PNG when it has transparency). Returns the file name. */
async function saveImage(src, slug, base) {
  const url = mediaOriginal(src);
  if (!url) return null;
  const raw = await downloadMedia(url);
  if (!raw) return null;
  const dir = path.join(OUT_IMG, slug);
  fs.mkdirSync(dir, { recursive: true });
  try {
    const img = sharp(raw, { animated: false }).rotate();
    const meta = await img.metadata();
    const resized = img.resize({ width: MAX_W, withoutEnlargement: true });
    const alpha = meta.hasAlpha && meta.format === "png";
    const name = `${base}.${alpha ? "png" : "jpg"}`;
    const out = path.join(dir, name);
    if (!fs.existsSync(out)) {
      await (alpha ? resized.png({ compressionLevel: 9, palette: true }) : resized.flatten({ background: "#000103" }).jpeg({ quality: 74, mozjpeg: true })).toFile(out);
    }
    report.images++;
    return name;
  } catch (err) {
    report.unhandled.push({ slug, kind: "image-decode", src: url, error: String(err.message) });
    return null;
  }
}

// ---------------------------------------------------------------- inline text

const MDX_ESCAPE = /([\\`*_[\]<>{}])/g;
const esc = (s) => s.replace(MDX_ESCAPE, "\\$1");

/** Flatten inline HTML into runs of text with formatting flags. */
function runs(node, fmt = {}, out = []) {
  for (const child of node.childNodes) {
    if (child.nodeType === 3) {
      // Wix keeps soft line breaks as literal newlines inside text.
      child.text.split("\n").forEach((part, i) => {
        if (i) out.push({ br: true });
        out.push({ text: part, ...fmt });
      });
      continue;
    }
    if (child.nodeType !== 1) continue;
    const tag = child.rawTagName?.toLowerCase();
    if (tag === "br") out.push({ br: true });
    else if (tag === "strong" || tag === "b") runs(child, { ...fmt, bold: true }, out);
    else if (tag === "em" || tag === "i") runs(child, { ...fmt, italic: true }, out);
    else if (tag === "a") runs(child, { ...fmt, href: mapWixHref(child.getAttribute("href") ?? "", report) }, out);
    else if (tag === "svg" || tag === "button") continue;
    else runs(child, fmt, out);
  }
  return out;
}

function renderRuns(list) {
  // Clean text per run, then merge neighbours with identical formatting.
  const merged = [];
  for (const r of list) {
    if (r.br) {
      merged.push(r);
      continue;
    }
    const text = cleanText(r.text);
    if (!text) continue;
    const prev = merged.at(-1);
    if (prev && !prev.br && prev.bold === r.bold && prev.italic === r.italic && prev.href === r.href) prev.text += text;
    else merged.push({ ...r, text });
  }
  let out = "";
  let i = 0;
  while (i < merged.length) {
    const r = merged[i];
    if (r.br) {
      out += "\\\n";
      i++;
      continue;
    }
    if (r.href) {
      let inner = "";
      const href = r.href;
      while (i < merged.length && !merged[i].br && merged[i].href === href) inner += fmt(merged[i++]);
      const label = inner.trim();
      if (!label) continue;
      const lead = inner.match(/^\s*/)[0];
      const trail = inner.match(/\s*$/)[0];
      out += `${lead}[${label}](${href})${trail}`;
      continue;
    }
    out += fmt(r);
    i++;
  }
  return out
    .replace(/[ \t]+/g, " ")
    .replace(/ ([,.;:?])/g, "$1")
    .replace(/(\\\n\s*)+$/g, "")
    .trim();
}

function fmt(r) {
  const body = esc(r.text);
  if (!r.bold && !r.italic) return body;
  const m = body.match(/^(\s*)([\s\S]*?)(\s*)$/);
  if (!m[2]) return body;
  const mark = r.bold && r.italic ? "***" : r.bold ? "**" : "*";
  return `${m[1]}${mark}${m[2]}${mark}${m[3]}`;
}

const inline = (node) => renderRuns(runs(node));

/** Escape characters that would start a block construct at the beginning of a line. */
const guardLineStart = (s) => s.replace(/^(\s*)([#>+-]|\d+[.)])(\s)/gm, "$1\\$2$3");

// ---------------------------------------------------------------- blocks

const FILENAME_CAPTION = /^(img|dsc|image|photo|screen ?shot|untitled)?[-_ ]?\d[\w-]*$|\.(jpe?g|png|gif|webp)$/i;

async function convertBody(root, slug, wixSlug, heroMedia) {
  const lazyVideos = structuredClone(VIDEO_OVERRIDES);
  const blocks = [];
  const imports = [];
  let imgCount = 0;
  let firstImage = true;

  const addImage = async (img, caption) => {
    const src = img.getAttribute("src") ?? "";
    const original = mediaOriginal(src);
    if (firstImage && original && original === heroMedia) {
      firstImage = false;
      return; // already shown as the post's hero
    }
    firstImage = false;
    const name = await saveImage(src, slug, String(++imgCount));
    if (!name) return;
    const id = `img${imgCount}`;
    imports.push(`import ${id} from "@/assets/images/posts/${slug}/${name}";`);
    const alt = cleanText(img.getAttribute("alt") ?? "");
    const cap = caption && !FILENAME_CAPTION.test(caption.trim()) ? cleanText(caption) : "";
    const altAttr = alt && !FILENAME_CAPTION.test(alt) ? alt : cap;
    blocks.push(`<PostImage src={${id}} alt=${JSON.stringify(altAttr)}${cap ? ` caption=${JSON.stringify(cap)}` : ""} />`);
  };

  async function walk(node, listDepth = 0) {
    for (const el of node.childNodes) {
      if (el.nodeType !== 1) continue;
      const tag = el.rawTagName?.toLowerCase();
      const hook = el.getAttribute("data-hook") ?? "";

      if (/^h[1-6]$/.test(tag)) {
        const text = inline(el);
        // Headings are already bold, so drop Wix's bold markers inside them.
        if (text) blocks.push(`${Number(tag[1]) <= 2 ? "##" : "###"} ${text.replace(/\\\n/g, " ").replace(/\*{2,3}/g, "")}`);
      } else if (tag === "p") {
        const text = inline(el);
        if (text) blocks.push(guardLineStart(text));
      } else if (tag === "ul" || tag === "ol") {
        blocks.push(listMarkdown(el, tag === "ol", 0));
      } else if (tag === "blockquote") {
        const text = inline(el);
        if (text) blocks.push(text.split("\\\n").map((l) => `> ${l.trim()}`).join("\n>\n"));
      } else if (hook === "figure-VIDEO" || hook.includes("video-player")) {
        const html = el.toString();
        const yt = html.match(/(?:ytimg\.com|youtube\.com)\/vi\/([\w-]{11})/) || html.match(/(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([\w-]{11})/);
        const mp4 = html.match(/https:\/\/video\.wixstatic\.com\/video\/[^"']+\.mp4/);
        if (yt) {
          blocks.push(`<YouTube id="${yt[1]}" />`);
          report.youtube++;
        } else if (mp4) {
          blocks.push(`<PostVideo src="${mp4[0]}" />`);
          report.wixVideos.push({ slug, src: mp4[0] });
        } else if (lazyVideos[wixSlug]?.length) {
          blocks.push(`<YouTube id="${lazyVideos[wixSlug].shift()}" />`);
          report.youtube++;
        } else report.unhandled.push({ slug, kind: "video", html: html.slice(0, 300) });
      } else if (hook.includes("gallery") && el.querySelectorAll("img").length > 1 && !hook.includes("media-cell")) {
        for (const fig of el.querySelectorAll("figure")) {
          const img = fig.querySelector("img");
          if (img) await addImage(img, fig.querySelector("figcaption")?.text);
        }
      } else if (tag === "figure" && el.querySelector("img")) {
        await addImage(el.querySelector("img"), el.querySelector("figcaption")?.text);
      } else if (tag === "a" && hook.startsWith("button-viewer")) {
        const label = cleanText(el.text);
        const href = mapWixHref(el.getAttribute("href") ?? "", report);
        if (label && href) blocks.push(`<PostButton href=${JSON.stringify(href)}>${esc(label)}</PostButton>`);
      } else if (hook.startsWith("divider")) {
        blocks.push("---");
      } else if (tag === "iframe") {
        report.unhandled.push({ slug, kind: "iframe", src: el.getAttribute("src") });
      } else {
        await walk(el, listDepth);
      }
    }
  }

  function listMarkdown(list, ordered, depth) {
    const lines = [];
    let n = 0;
    for (const li of list.childNodes) {
      if (li.nodeType !== 1 || li.rawTagName?.toLowerCase() !== "li") continue;
      const nested = li.querySelectorAll(":scope > ul, :scope > ol");
      const clone = parse(li.toString()).firstChild;
      for (const sub of clone.querySelectorAll("ul, ol")) sub.remove();
      const text = inline(clone).replace(/\\\n/g, " ");
      const indent = "   ".repeat(depth);
      if (text) lines.push(`${indent}${ordered ? `${++n}.` : "-"} ${text}`);
      for (const sub of nested) lines.push(listMarkdown(sub, sub.rawTagName.toLowerCase() === "ol", depth + 1));
    }
    return lines.join("\n");
  }

  await walk(root);
  return { imports, blocks: blocks.filter((b) => b.trim()) };
}

// ---------------------------------------------------------------- per post

function description(text, title) {
  let t = cleanText(text ?? "").replace(/\s+/g, " ").trim();
  // Wix often starts the excerpt with the title itself; drop that repeat.
  const norm = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
  if (norm(t).startsWith(norm(title))) {
    const words = title.split(/\s+/).length;
    t = t.split(" ").slice(words).join(" ").replace(/^[\s.,:;?-]+/, "");
    if (t.length < 40) t = "";
  }
  if (t.length <= 160) return t;
  const cut = t.slice(0, 157);
  return `${cut.slice(0, cut.lastIndexOf(" "))}...`;
}

function cleanTitle(title) {
  return cleanText(title).replace(/[.\s]+$/, (m) => (m.includes("...") ? "..." : "")).trim();
}

async function convertPost(wixSlug, slugs) {
  const html = await cachedPost(wixSlug);
  if (!html) {
    report.emptyPosts.push(wixSlug);
    return null;
  }
  const ld = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
    .map((m) => {
      try {
        return JSON.parse(m[1]);
      } catch {
        return null;
      }
    })
    .find((j) => j?.["@type"] === "BlogPosting");
  if (!ld) {
    report.emptyPosts.push(wixSlug);
    return null;
  }

  let slug = newSlug(wixSlug);
  while (slugs.has(slug)) slug += "-2";
  slugs.add(slug);
  if (slug !== wixSlug) report.renamed[wixSlug] = slug;

  const dom = parse(html);
  const body = dom.querySelector('[data-hook="post-description"]');
  const heroMedia = ld.image?.url ? mediaOriginal(ld.image.url) : null;
  const hero = heroMedia ? await saveImage(ld.image.url, slug, "hero") : null;
  const { imports, blocks } = await convertBody(body, slug, wixSlug, heroMedia);

  const mdx = [...(imports.length ? [imports.join("\n"), ""] : []), blocks.join("\n\n"), ""].join("\n");
  fs.writeFileSync(path.join(OUT_MDX, `${slug}.mdx`), mdx);
  report.posts++;

  return {
    slug,
    wixSlug,
    title: cleanTitle(ld.headline ?? wixSlug),
    description: description(ld.description, cleanTitle(ld.headline ?? wixSlug)),
    date: (ld.datePublished ?? "").slice(0, 10),
    updated: (ld.dateModified ?? "").slice(0, 10),
    hero,
  };
}

// ---------------------------------------------------------------- main

fs.mkdirSync(POSTS_HTML, { recursive: true });
fs.mkdirSync(IMG_CACHE, { recursive: true });
fs.mkdirSync(OUT_IMG, { recursive: true });

const wixSlugs = offline
  ? fs.readdirSync(POSTS_HTML).filter((f) => f.endsWith(".html")).map((f) => f.slice(0, -5).replaceAll("__", "/"))
  : (await postUrls()).map((u) => u.split("/single-post/")[1]);

const only = process.argv.find((a) => a.startsWith("--only="))?.slice(7).split(",");
const todo = only ? wixSlugs.filter((s) => only.includes(s)) : wixSlugs.sort();
const slugs = new Set();
const metas = [];
for (const [i, wixSlug] of todo.entries()) {
  try {
    const meta = await convertPost(wixSlug, slugs);
    if (meta) metas.push(meta);
  } catch (err) {
    report.unhandled.push({ slug: wixSlug, kind: "post", error: String(err.stack ?? err) });
  }
  if ((i + 1) % 25 === 0) console.log(`  ${i + 1}/${todo.length}`);
}
metas.sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug));

// Metadata module: static image imports give next/image dimensions and blur placeholders.
const ts = [
  "// Generated by scripts/wix-import/blog.mjs from the Wix blog. Do not edit by hand:",
  "// fix the importer and re-run it, or move a post out of this file to edit it.",
  'import type { PostMeta } from "./index";',
  ...metas.filter((m) => m.hero).map((m, i) => `import hero${i} from "@/assets/images/posts/${m.slug}/${m.hero}";`),
  "",
  "export const wixPosts: PostMeta[] = [",
  ...(() => {
    let h = 0;
    return metas.map((m) => {
      const image = m.hero ? `, image: { src: hero${h++}, alt: "" }` : "";
      return `  { slug: ${JSON.stringify(m.slug)}, title: ${JSON.stringify(m.title)}, description: ${JSON.stringify(m.description)}, date: ${JSON.stringify(m.date)}${image} },`;
    });
  })(),
  "];",
  "",
].join("\n");
fs.writeFileSync(path.join(OUT_MDX, "wix.generated.ts"), ts);

const redirects = metas.map((m) => ({ source: `/single-post/${m.wixSlug}`, destination: `/blog/${m.slug}` }));
fs.writeFileSync(path.join(ROOT, "src/lib/wix-post-redirects.json"), `${JSON.stringify(redirects, null, 2)}\n`);
// Re-host files that posts link to (PDFs and similar) under public/files.
const FILES = path.join(ROOT, "public/files");
fs.mkdirSync(FILES, { recursive: true });
for (const f of report.files) {
  const out = path.join(FILES, f.name);
  if (fs.existsSync(out) || offline) continue;
  const url = f.url.startsWith("http") ? f.url : `https://${f.url}`;
  const res = await fetch(url);
  if (res.ok) fs.writeFileSync(out, Buffer.from(await res.arrayBuffer()));
  else f.error = res.status;
}

fs.writeFileSync(path.join(CACHE, "import-report.json"), `${JSON.stringify(report, null, 2)}\n`);

console.log(
  `Imported ${report.posts} posts, ${report.images} images, ${report.youtube} YouTube embeds, ${report.wixVideos.length} Wix-hosted videos, ${report.files.length} files. ` +
    `Empty: ${report.emptyPosts.length}. Unhandled: ${report.unhandled.length}.`,
);
