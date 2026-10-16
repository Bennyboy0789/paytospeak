// The shared Wix footer: the promo block (book and logo-wall images, "Want to
// speak professionally?", contact lines, a YouTube reel) that Wix appended to
// most posts after Kevin's sign-off. The site renders its own end-of-post
// block, so the importer cuts it. footer.json lists the blocks it is made of.
import fs from "node:fs";
import path from "node:path";

const cfg = JSON.parse(fs.readFileSync(path.join(import.meta.dirname, "footer.json"), "utf8"));
const images = new Set(cfg.images);
const anchorImages = new Set(cfg.anchorImages);
const youtube = new Set(cfg.youtube);

const words = (b) => (b.sig.startsWith("t:") ? b.sig.slice(2) : null);
const textMatch = (w, list) => list.some((e) => w === e || (e.length >= 25 && w.startsWith(e)));
const media = (b) => (b.sig.startsWith("i:") ? b.sig.split("/").pop() : null);

function isFooter(b) {
  if (b.kind === "hr") return true;
  if (b.kind === "image") return images.has(media(b));
  if (b.kind === "youtube") return youtube.has(b.sig.slice(2));
  const w = words(b);
  return w !== null && textMatch(w, cfg.text);
}

function isAnchor(b) {
  if (b.kind === "image") return anchorImages.has(media(b));
  const w = words(b);
  return w !== null && textMatch(w, cfg.anchors);
}

/**
 * Remove the trailing run of footer blocks, but only when the run contains
 * the promo itself (an anchor), so a post that merely ends on a divider or on
 * a video Kevin chose is left alone. Kevin's "Earn greatness today. Onward and
 * upward." sign-off is kept, as a plain paragraph rather than a heading.
 */
export function stripFooter(blocks) {
  let start = blocks.length;
  while (start > 0 && isFooter(blocks[start - 1])) start--;
  const promo = blocks.slice(start).some(isAnchor);
  // Some footers carry a one-off photo in the image slot (divider, image, promo text).
  if (promo && blocks[start - 1]?.kind === "image" && blocks[start - 2]?.kind === "hr") {
    start -= 2;
    while (start > 0 && blocks[start - 1].kind === "hr") start--;
  }
  const run = blocks.slice(start);
  const removed = promo ? run.length : 0;
  const kept = removed ? blocks.slice(0, start) : blocks;
  const out = kept.map((b) =>
    b.kind === "heading" && words(b) === cfg.signOff ? { ...b, kind: "p", md: b.md.replace(/^#+\s*/, "") } : b,
  );
  return { blocks: out, removed: removed ? run : [] };
}

/** True if a block looks like part of the footer, for reporting leftovers. */
export const footerAnchor = isAnchor;
