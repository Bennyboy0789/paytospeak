// Rewrites links found in Wix content so they point at the new site.
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "../..");
// Old Wix page path -> new path. Shared with next.config.ts redirects.
const pageMap = Object.fromEntries(
  JSON.parse(fs.readFileSync(path.join(ROOT, "src/lib/wix-page-redirects.json"), "utf8")).map((r) => [r.source, r.destination]),
);

// Which linked files are re-hosted, renamed, or pointed elsewhere (privacy, third-party copyright).
const filePolicy = JSON.parse(fs.readFileSync(path.join(import.meta.dirname, "files-policy.json"), "utf8"));

export function newSlug(wixSlug) {
  // Dated slugs from Kevin's older blog ("2017/07/25/x") keep just the last part.
  const s = decodeURIComponent(wixSlug.split("/").filter(Boolean).pop() ?? "")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return s || "post";
}

/** Wix-hosted files (PDFs, docs) are re-hosted under /files/. */
export function fileName(url) {
  const last = decodeURIComponent(url.split("?")[0].split("/").pop() ?? "file");
  return last.replace(/[^\w.-]+/g, "-");
}

export function mapWixHref(raw, report) {
  let href = raw.trim().replace(/&amp;/g, "&");
  if (!href) return "";

  // Google Calendar / Gmail wrap links in a redirect.
  const google = href.match(/^https?:\/\/(?:www\.)?google\.com\/url\?q=([^&]+)/);
  if (google) href = decodeURIComponent(google[1]);

  if (/^(mailto|tel):/i.test(href)) return href;

  // Files uploaded to Wix or MailChimp; both disappear if those accounts close.
  if (/(paidtospeak\.biz\/_files\/ugd\/|static\.wixstatic\.com\/ugd\/|\.usrfiles\.com\/ugd\/|mcusercontent\.com\/[^/]+\/files\/)/.test(href)) {
    const original = fileName(href);
    if (filePolicy.link[original]) return filePolicy.link[original];
    const name = filePolicy.rename[original] ?? original;
    if (!report.files.some((f) => f.name === name)) report.files.push({ url: href, name });
    return `/files/${name}`;
  }

  const own = href.match(/^(?:https?:\/\/)?(?:www\.)?paidtospeak\.biz(\/[^?#]*)?([?#].*)?$/i);
  const pathOnly = own ? own[1] || "/" : href.startsWith("/") ? href.split(/[?#]/)[0] : null;
  if (pathOnly === null) return href;

  const p = pathOnly.replace(/\/+$/, "") || "/";
  const post = p.match(/^\/(?:single-post|post)\/(.+)$/);
  if (post) return `/blog/${newSlug(post[1])}`;
  if (p === "/" || p === "/home") return "/";
  if (p === "/blog") return "/blog";
  if (pageMap[p]) return pageMap[p];
  report.unmappedLinks ??= [];
  if (!report.unmappedLinks.includes(p)) report.unmappedLinks.push(p);
  return p;
}
