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
// no exclamation marks. Everything else is Kevin's original wording, with
// mechanical clean-up only (see "Clean-up" in docs/WIX-MIGRATION.md): the
// shared Wix footer is cut (footer.mjs), titles come from the post's own
// heading, entities are decoded, run-together sentences get their space back,
// and "**" call-out markers are dropped.

import fs from "node:fs";
import path from "node:path";
import { parse } from "node-html-parser";
import sharp from "sharp";
import { mapWixHref, newSlug } from "./links.mjs";
import { stripFooter } from "./footer.mjs";
import { cleanText, decodeEntities, fixJoins, stripMarkers, usesFootnoteMarks } from "./text.mjs";

const ROOT = path.resolve(import.meta.dirname, "../..");
const CACHE = path.join(ROOT, ".cache/wix");
const POSTS_HTML = path.join(CACHE, "posts");
const IMG_CACHE = path.join(CACHE, "media");
const OUT_MDX = path.join(ROOT, "src/content/posts");
const OUT_IMG = path.join(ROOT, "src/assets/images/posts");
const SITE = "https://www.paidtospeak.biz";
const offline = process.argv.includes("--offline");
const MAX_W = 1280;
const readJson = (name) => JSON.parse(fs.readFileSync(path.join(import.meta.dirname, name), "utf8"));
const VIDEO_OVERRIDES = readJson("video-overrides.json");
// Titles for images that were really links to a YouTube video (a thumbnail with a play button baked in).
const VIDEO_TITLES = readJson("video-titles.json");
// Titles Wix itself cut short, and typos in Kevin's SEO descriptions.
const METADATA_FIXES = readJson("metadata-fixes.json");

const report = {
  posts: 0,
  images: 0,
  youtube: 0,
  wixVideos: [],
  files: [],
  unhandled: [],
  emptyPosts: [],
  renamed: {},
  footersRemoved: [],
  titleHeadingsRemoved: {},
  linkedVideoImages: [],
  headingsPromoted: [],
};

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

/**
 * Wix auto-linked two run-together sentences as if they were a domain
 * ("business.So" -> http://business.So), sometimes across a paragraph break.
 * A "domain" of a lower-case word and a capitalised one is never real, so the
 * link is dropped and the text kept.
 */
function isAutoLinkedJoin(a) {
  const host = (a.getAttribute("href") ?? "").replace(/^https?:\/\//i, "").replace(/\/$/, "");
  return /^[a-z]+\.[A-Z][a-z]*$/.test(host);
}

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
    else if (tag === "a" && isAutoLinkedJoin(child)) runs(child, fmt, out);
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
  for (const r of merged) if (!r.br) r.text = fixJoins(r.text);
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

/** Lower-case words only, for comparing text across posts and against titles. */
const norm = (s) => s.toLowerCase().replace(/[^a-z0-9$]+/g, " ").trim();
const plainOf = (node) => fixJoins(cleanText(node.text)).replace(/\s+/g, " ").replace(/^\*{2,}\s*/, "").trim();

/**
 * Convert a post body into blocks: { kind, md, sig, plain }. `sig` identifies a
 * block across posts (same text, same image, same video), which is how the
 * shared Wix footer is found. Images are saved later, in renderBlocks, so
 * footer images are never written.
 */
async function convertBody(root, slug, wixSlug, heroMedia) {
  const lazyVideos = structuredClone(VIDEO_OVERRIDES);
  const blocks = [];
  let imgCount = 0;
  let firstImage = true;
  const text = (kind, md, el, extra = {}) => {
    const plain = extra.plain ?? plainOf(el);
    blocks.push({ kind, md, sig: `t:${norm(plain)}`, ...extra, plain });
  };

  // A thumbnail linked to a YouTube video (a play button baked into the image) becomes the real embed.
  const linkedVideo = (img, caption, fromHero = false) => {
    const href = img.closest("a")?.getAttribute("href") ?? "";
    const video = href.match(/(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([\w-]{11})/)?.[1];
    if (!video) return false;
    const title = VIDEO_TITLES[video] ?? (cleanText(img.getAttribute("alt") ?? "") || (caption ? cleanText(caption) : ""));
    blocks.push({ kind: "youtube", md: `<YouTube id="${video}"${title ? ` title=${JSON.stringify(title)}` : ""} />`, sig: `y:${video}`, fromHero, linkedImage: true });
    return true;
  };

  const addImage = (img, caption) => {
    const src = img.getAttribute("src") ?? "";
    const original = mediaOriginal(src);
    if (firstImage && original && original === heroMedia) {
      firstImage = false;
      // Already shown as the post's hero. If it was the post's link to a video, keep the video.
      linkedVideo(img, caption, true);
      return;
    }
    firstImage = false;
    const n = ++imgCount; // numbered even when it becomes an embed, so other images keep their file names
    if (linkedVideo(img, caption)) return;
    const alt = cleanText(img.getAttribute("alt") ?? "");
    const cap = caption && !FILENAME_CAPTION.test(caption.trim()) ? cleanText(caption) : "";
    const altAttr = alt && !FILENAME_CAPTION.test(alt) ? alt : cap;
    blocks.push({ kind: "image", n, src, alt: altAttr, cap, sig: `i:${original ?? src}` });
  };

  async function walk(node, listDepth = 0) {
    for (const el of node.childNodes) {
      if (el.nodeType !== 1) continue;
      const tag = el.rawTagName?.toLowerCase();
      const hook = el.getAttribute("data-hook") ?? "";

      if (/^h[1-6]$/.test(tag)) {
        const t = inline(el);
        // Headings are already bold, so drop Wix's bold markers inside them.
        if (t) text("heading", `${Number(tag[1]) <= 2 ? "##" : "###"} ${t.replace(/\\\n/g, " ").replace(/\*{2,3}/g, "")}`, el, { level: Number(tag[1]) <= 2 ? 2 : 3 });
      } else if (tag === "p") {
        const t = inline(el);
        if (t) text("p", guardLineStart(t), el);
      } else if (tag === "ul" || tag === "ol") {
        const md = listMarkdown(el, tag === "ol", 0);
        if (md.trim()) text("list", md, el, { plain: el.querySelectorAll("li").map(plainOf).join(" ") });
      } else if (tag === "blockquote") {
        const t = inline(el);
        if (t) text("quote", t.split("\\\n").map((l) => `> ${l.trim()}`).join("\n>\n"), el);
      } else if (hook === "figure-VIDEO" || hook.includes("video-player")) {
        const html = el.toString();
        const yt = html.match(/(?:ytimg\.com|youtube\.com)\/vi\/([\w-]{11})/) || html.match(/(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([\w-]{11})/);
        const mp4 = html.match(/https:\/\/video\.wixstatic\.com\/video\/[^"']+\.mp4/);
        if (yt) {
          blocks.push({ kind: "youtube", md: `<YouTube id="${yt[1]}" />`, sig: `y:${yt[1]}` });
        } else if (mp4) {
          blocks.push({ kind: "video", md: `<PostVideo src="${mp4[0]}" />`, sig: `v:${mp4[0]}` });
          report.wixVideos.push({ slug, src: mp4[0] });
        } else if (lazyVideos[wixSlug]?.length) {
          const id = lazyVideos[wixSlug].shift();
          blocks.push({ kind: "youtube", md: `<YouTube id="${id}" />`, sig: `y:${id}` });
        } else report.unhandled.push({ slug, kind: "video", html: html.slice(0, 300) });
      } else if (hook.includes("gallery") && el.querySelectorAll("img").length > 1 && !hook.includes("media-cell")) {
        for (const fig of el.querySelectorAll("figure")) {
          const img = fig.querySelector("img");
          if (img) addImage(img, fig.querySelector("figcaption")?.text);
        }
      } else if (tag === "figure" && el.querySelector("img")) {
        addImage(el.querySelector("img"), el.querySelector("figcaption")?.text);
      } else if (tag === "a" && hook.startsWith("button-viewer")) {
        const label = cleanText(el.text);
        const href = mapWixHref(el.getAttribute("href") ?? "", report);
        if (label && href) blocks.push({ kind: "button", md: `<PostButton href=${JSON.stringify(href)}>${esc(label)}</PostButton>`, sig: `b:${href}|${norm(label)}` });
      } else if (hook.startsWith("divider")) {
        blocks.push({ kind: "hr", md: "---", sig: "hr" });
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
      const t = inline(clone).replace(/\\\n/g, " ");
      const indent = "   ".repeat(depth);
      if (t) lines.push(`${indent}${ordered ? `${++n}.` : "-"} ${t}`);
      for (const sub of nested) lines.push(listMarkdown(sub, sub.rawTagName.toLowerCase() === "ol", depth + 1));
    }
    return lines.join("\n");
  }

  await walk(root);
  return blocks;
}

/** Save the images a post keeps and turn blocks into the MDX file. */
async function renderBlocks(blocks, slug) {
  const imports = [];
  const out = [];
  for (const b of blocks) {
    if (b.kind === "youtube") report.youtube++;
    if (b.kind !== "image") {
      out.push(b.md);
      continue;
    }
    const name = await saveImage(b.src, slug, String(b.n));
    if (!name) continue;
    const id = `img${b.n}`;
    imports.push(`import ${id} from "@/assets/images/posts/${slug}/${name}";`);
    out.push(`<PostImage src={${id}} alt=${JSON.stringify(b.alt)}${b.cap ? ` caption=${JSON.stringify(b.cap)}` : ""} />`);
  }
  const body = out.filter((b) => b.trim());
  return [...(imports.length ? [imports.join("\n"), ""] : []), body.join("\n\n"), ""].join("\n");
}

// ---------------------------------------------------------------- per post

function description(text, title) {
  let t = cleanText(text ?? "").replace(/\s+/g, " ").trim();
  // Wix often starts the excerpt with the title itself; drop that repeat.
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

const TEXT_KINDS = new Set(["heading", "p", "quote", "list"]);
const bodyText = (blocks) => blocks.filter((b) => TEXT_KINDS.has(b.kind) && b.plain).map((b) => b.plain).join(" ");
// Letters and digits only: Wix's excerpt differs from the body in spacing, list bullets (•) and the like.
const squash = (s) => s.replace(/[^\p{L}\p{N}]+/gu, "");

/**
 * Wix builds most excerpts by gluing the first paragraphs together with no
 * space between them ("EventsThese criteria"). When the excerpt is just the
 * start of the body, rebuild it from the body; otherwise it's Kevin's own SEO
 * description, and only gets the sentence-spacing fix.
 */
function describe(post, originalBlocks) {
  const raw = decodeEntities(post.ldDescription ?? "").trim();
  let own = fixJoins(cleanText(raw)).replace(/\s+/g, " ").trim();
  // Wix cuts excerpts (usually at about 160 characters), often mid-word: end on a whole word instead.
  const last = own.match(/[\p{L}\p{N}]+$/u)?.[0];
  const partWord = last && !new RegExp(`(^|[^\\p{L}\\p{N}])${last}($|[^\\p{L}\\p{N}])`, "u").test(bodyText(originalBlocks));
  const cutByWix = !/[.?!:…)"”]$/.test(raw) && ((raw.length >= 155 && raw.length <= 161) || partWord);
  if (cutByWix && own.includes(" ")) {
    own = `${own.slice(0, own.lastIndexOf(" ")).replace(/[\s,;:]+$/, "")}...`;
  }
  const fromBody = !own || (squash(own).length >= 20 && squash(bodyText(originalBlocks)).startsWith(squash(own)));
  const text = fromBody ? "" : description(own, post.title);
  return text || description(bodyText(post.blocks), post.title);
}

/**
 * Wix shows the post title above the body, and many posts open by repeating
 * it as a heading (or a bold line). Drop that repeat. When the heading is the
 * fuller version ("7 Insider Tips for Landing a TEDx Talk" under the title
 * "Insider Tips for Landing a TEDx Talk"), it becomes the title.
 */
function dropTitleHeading(post) {
  const i = post.blocks.findIndex((b) => b.kind !== "image");
  if (i < 0 || i > 2) return;
  const b = post.blocks[i];
  const boldLine = b.kind === "p" && /^\*{2,3}[^*]+\*{2,3}$/.test(b.md.trim());
  if (b.kind !== "heading" && !boldLine) return;
  const h = norm(b.plain);
  const t = norm(post.title);
  const hw = h.split(" ").length;
  const tw = t.split(" ").length;
  let title = post.title;
  if (h === t) {
    // exact repeat
  } else if (h.includes(t) && tw >= 3 && hw <= tw + 4) {
    title = cleanTitle(b.plain);
  } else if (t.includes(h) && hw >= 4 && hw >= tw * 0.6) {
    // shorter form of the title
  } else return;
  report.titleHeadingsRemoved[post.slug] = { title: post.title, heading: b.plain, newTitle: title !== post.title ? title : undefined };
  post.title = title;
  post.blocks.splice(i, 1);
}

/** Read and convert one cached Wix post. Nothing is written yet. */
async function readPost(wixSlug, slugs) {
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
  const blocks = await convertBody(body, slug, wixSlug, heroMedia);
  // The title Wix shows on the post. JSON-LD "headline" is the SEO title,
  // which Kevin sometimes copied between posts and Wix cuts at ~100 characters.
  const shown = dom.querySelector('h1[data-hook="post-title"]')?.text.trim();

  return {
    slug,
    wixSlug,
    title: cleanTitle(shown || decodeEntities(ld.headline ?? wixSlug)),
    ldDescription: ld.description,
    date: (ld.datePublished ?? "").slice(0, 10),
    updated: (ld.dateModified ?? "").slice(0, 10),
    hero,
    blocks,
  };
}

/** Clean-up that needs the whole post: footer, title repeat, markers, excerpt. */
function finishPost(post) {
  const original = post.blocks;
  const { blocks, removed } = stripFooter(original);
  if (removed.length) report.footersRemoved.push(post.slug);
  post.blocks = blocks;
  post.title = METADATA_FIXES.titles[post.slug] ?? post.title;
  dropTitleHeading(post);
  // The page title is the h1, so a body must not open on an h3 (a skipped level). Promote its h3s.
  if (post.blocks.find((b) => b.kind === "heading")?.level === 3) {
    for (const b of post.blocks) if (b.kind === "heading" && b.level === 3) Object.assign(b, { level: 2, md: b.md.replace(/^###/, "##") });
    report.headingsPromoted.push(post.slug);
  }
  if (!post.blocks.some((b) => b.md && usesFootnoteMarks(b.md))) {
    for (const b of post.blocks) if (TEXT_KINDS.has(b.kind)) b.md = stripMarkers(b.md);
  }
  // One embed per video. A hero thumbnail's embed is only kept when the post has no other way to the video.
  const id = (b) => b.sig.slice(2);
  post.blocks = post.blocks.filter((b) => !b.fromHero || !post.blocks.some((o) => o !== b && (o.sig === b.sig || o.md?.includes(id(b)))));
  const videos = new Set();
  post.blocks = post.blocks.filter((b) => b.kind !== "youtube" || (!videos.has(b.sig) && videos.add(b.sig)));
  for (const b of post.blocks) if (b.linkedImage) report.linkedVideoImages.push({ slug: post.slug, video: id(b) });
  post.description = describe(post, original);
  for (const [from, to] of METADATA_FIXES.replace) {
    post.title = post.title.replaceAll(from, to);
    post.description = post.description.replaceAll(from, to);
  }
}

async function writePost(post) {
  finishPost(post);
  fs.writeFileSync(path.join(OUT_MDX, `${post.slug}.mdx`), await renderBlocks(post.blocks, post.slug));
  report.posts++;
  return {
    slug: post.slug,
    wixSlug: post.wixSlug,
    title: post.title,
    description: post.description,
    date: post.date,
    updated: post.updated,
    hero: post.hero,
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
const posts = [];
for (const [i, wixSlug] of todo.entries()) {
  try {
    const post = await readPost(wixSlug, slugs);
    if (post) posts.push(post);
  } catch (err) {
    report.unhandled.push({ slug: wixSlug, kind: "post", error: String(err.stack ?? err) });
  }
  if ((i + 1) % 25 === 0) console.log(`  ${i + 1}/${todo.length}`);
}

// Second pass: clean-up that needs the whole post, then write MDX and save the images each post keeps.
const metas = [];
for (const post of posts) {
  try {
    metas.push(await writePost(post));
  } catch (err) {
    report.unhandled.push({ slug: post.wixSlug, kind: "post", error: String(err.stack ?? err) });
  }
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
console.log(
  `Clean-up: Wix footer cut from ${report.footersRemoved.length} posts, title repeated as a heading in ${Object.keys(report.titleHeadingsRemoved).length}, ` +
    `${report.linkedVideoImages.length} linked video thumbnails made into embeds, h3s promoted in ${report.headingsPromoted.length}.`,
);
