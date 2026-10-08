// Generates the Paid to $peak logo SVGs from Raleway outlines + a vector microphone.
// Usage: npm run logo   (writes to public/)
import opentype from "opentype.js";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const out = process.argv[2] ?? path.join(here, "../../public");
const heavy = opentype.loadSync(path.join(here, "fonts/Raleway-900.ttf"));
const light = opentype.loadSync(path.join(here, "fonts/Raleway-500.ttf"));

const BLUE = "#0676F2"; // parent-site logo blue (kevincsnyder.com), 4.8:1 on #010407
const AMBER = "#F7A224";
const CAP = 100; // everything is laid out so cap height = 100 units

const sizeFor = (font, cap) => (cap * font.unitsPerEm) / font.tables.os2.sCapHeight;
const r = (n) => Math.round(n * 100) / 100;

// Lay out text glyph by glyph. `slots` maps a character index to a fixed-width gap
// (used to leave room for the microphone in place of the "I").
function layout(font, text, cap, { x = 0, baseline = CAP, tracking = 0, slots = {} } = {}) {
  const size = sizeFor(font, cap);
  const scale = size / font.unitsPerEm;
  const glyphs = font.stringToGlyphs(text);
  let cursor = x;
  const parts = [];
  const slotX = {};
  glyphs.forEach((g, i) => {
    if (slots[i] !== undefined) {
      slotX[i] = cursor;
      cursor += slots[i];
    } else {
      parts.push(g.getPath(cursor, baseline, size).toPathData(2));
      cursor += g.advanceWidth * scale;
    }
    const next = glyphs[i + 1];
    if (next && slots[i] === undefined && slots[i + 1] === undefined) {
      cursor += font.getKerningValue(g, next) * scale;
    }
    if (next) cursor += tracking * size;
  });
  return { d: parts.join(""), width: cursor - x, slotX };
}

// Microphone standing in for the "I". (cx, top) = centre of the grille, top edge.
function mic(cx, top, id) {
  const hw = 24; // grille half-width
  const hh = 23; // grille half-height
  const cy = top + hh;
  const bandY = cy + hh - 2;
  const handleTop = bandY + 7;
  const handleBottom = CAP + 4;
  const meshLines = [];
  for (let i = -3; i <= 3; i++) {
    const o = i * 6.5;
    meshLines.push(`M${r(cx + o - 30)} ${r(cy - 30)}L${r(cx + o + 30)} ${r(cy + 30)}`);
    meshLines.push(`M${r(cx + o + 30)} ${r(cy - 30)}L${r(cx + o - 30)} ${r(cy + 30)}`);
  }
  return `
  <defs>
    <linearGradient id="${id}-steel" x1="0" x2="1">
      <stop offset="0" stop-color="#8A96A3"/>
      <stop offset=".35" stop-color="#F6F9FC"/>
      <stop offset=".6" stop-color="#C3CBD3"/>
      <stop offset="1" stop-color="#6B7682"/>
    </linearGradient>
    <linearGradient id="${id}-fade" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0" stop-color="#fff"/>
      <stop offset=".55" stop-color="#fff"/>
      <stop offset="1" stop-color="#fff" stop-opacity="0"/>
    </linearGradient>
    <mask id="${id}-handle-mask" maskUnits="userSpaceOnUse" x="${cx - hw}" y="${handleTop}" width="${hw * 2}" height="${handleBottom - handleTop}">
      <rect x="${cx - hw}" y="${handleTop}" width="${hw * 2}" height="${handleBottom - handleTop}" fill="url(#${id}-fade)"/>
    </mask>
    <clipPath id="${id}-grille"><rect x="${cx - hw}" y="${top}" width="${hw * 2}" height="${hh * 2}" rx="${hw}"/></clipPath>
  </defs>
  <g aria-hidden="true">
    <path mask="url(#${id}-handle-mask)" fill="url(#${id}-steel)" d="M${r(cx - 12)} ${r(handleTop)}L${r(cx + 12)} ${r(handleTop)}L${r(cx + 6.5)} ${r(handleBottom)}L${r(cx - 6.5)} ${r(handleBottom)}Z"/>
    <rect x="${r(cx - 2)}" y="${r(handleTop + 18)}" width="4" height="11" rx="2" fill="#1B232C" mask="url(#${id}-handle-mask)"/>
    <rect x="${r(cx - 15)}" y="${r(bandY)}" width="30" height="8" rx="2" fill="#4B5563"/>
    <rect x="${cx - hw}" y="${top}" width="${hw * 2}" height="${hh * 2}" rx="${hw}" fill="url(#${id}-steel)"/>
    <path clip-path="url(#${id}-grille)" d="${meshLines.join("")}" stroke="#4B5563" stroke-width="1.4" fill="none"/>
    <rect x="${cx - hw}" y="${r(cy - 2.5)}" width="${hw * 2}" height="5" fill="#9AA5B1" clip-path="url(#${id}-grille)"/>
  </g>`;
}

const TRACK = -0.012; // em; tighter than Raleway default, as in the original
const MIC_SLOT = 56;
const MIC_TOP = -14; // grille rises above the cap line, as in the original

function svg({ id, width, height, body, title }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 ${MIC_TOP - 2} ${r(width)} ${r(height)}" role="img" aria-labelledby="${id}-title">
  <title id="${id}-title">${title}</title>${body}
</svg>
`;
}

// Stacked: PAID + small "TO" on line 1, $PEAK on line 2, amber rule beneath.
function stacked() {
  const id = "pts-s";
  const line1 = layout(heavy, "PAID", CAP, { tracking: TRACK, slots: { 2: MIC_SLOT } });
  const toCap = 56;
  const to = layout(light, "TO", toCap, { x: line1.width + 14, baseline: CAP - 3, tracking: 0.04 });
  const lineGap = 20;
  const base2 = CAP * 2 + lineGap;
  const line2 = layout(heavy, "$PEAK", CAP, { baseline: base2, tracking: TRACK });
  const width = Math.max(line1.width + 14 + to.width, line2.width);
  const ruleY = base2 + 34;
  const body = `
  ${mic(line1.slotX[2] + MIC_SLOT / 2, MIC_TOP, id)}
  <path fill="${BLUE}" d="${line1.d}${to.d}${line2.d}"/>
  <rect x="0" y="${ruleY}" width="${r(width)}" height="7" fill="${AMBER}"/>`;
  return svg({ id, width, height: ruleY + 7 - MIC_TOP + 2, body, title: "Paid to Speak" });
}

// Horizontal: PAID to $PEAK on one line, for the header.
function horizontal() {
  const id = "pts-h";
  const a = layout(heavy, "PAID", CAP, { tracking: TRACK, slots: { 2: MIC_SLOT } });
  const toCap = 56;
  const to = layout(light, "TO", toCap, { x: a.width + 20, baseline: CAP - 3, tracking: 0.04 });
  const bx = a.width + 20 + to.width + 20;
  const b = layout(heavy, "$PEAK", CAP, { x: bx, tracking: TRACK });
  const width = bx + b.width;
  const body = `
  ${mic(a.slotX[2] + MIC_SLOT / 2, MIC_TOP, id)}
  <path fill="${BLUE}" d="${a.d}${to.d}${b.d}"/>`;
  // $ descends below the baseline; leave room for it.
  return svg({ id, width, height: CAP + 18 - MIC_TOP + 2, body, title: "Paid to Speak" });
}

fs.writeFileSync(path.join(out, "logo-paidtospeak.svg"), horizontal());
fs.writeFileSync(path.join(out, "logo-paidtospeak-stacked.svg"), stacked());
console.log("wrote", out);
