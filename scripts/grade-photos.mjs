// One colour grade across the site's photography, so photos from different rooms, cameras and
// lighting read as one shoot. Baked into the files (no CSS filter cost at runtime).
//
//   node scripts/grade-photos.mjs                 grade every photo in PHOTOS, in place
//   node scripts/grade-photos.mjs --preview <dir> write graded copies to <dir>, touch nothing
//
// It always grades from the untouched original, never from an already graded file. On the first
// run each original is copied to .cache/photo-originals/ (local, not in git; git history has
// them too). To add a photo later: drop it in, add it to PHOTOS, run the script.
//
// The grade, in order:
//   1. White balance: pull each photo partway toward neutral (gray world, capped), so tungsten
//      ballrooms and daylight sit closer together. Deliberately blue stage light stays blue.
//   2. Colour: everything a little calmer, and the loudest colours (magenta shirts, saturated
//      stage washes) pulled in the most.
//   3. Tone: deeper blacks, a gentle S-curve, highlights that roll off instead of clipping.
//   4. Split tone from the brand: a trace of amber in the highlights, blue in the shadows.
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(import.meta.dirname, "..");
const originals = path.join(root, ".cache/photo-originals");

const PHOTOS = [
  "src/assets/images/hero-stage-plate.jpg",
  "src/assets/images/hero-kevin-cutout.webp",
  "src/assets/images/kevin-stage-ballroom.jpg",
  "src/assets/images/kevin-student-selfie.jpg",
  "src/assets/images/kevin-view-from-stage.jpg",
  "src/assets/images/kevin-with-audience-member.jpg",
  ...fs
    .readdirSync(path.join(root, "src/assets/images/stage"))
    .filter((f) => f.endsWith(".jpg"))
    .map((f) => `src/assets/images/stage/${f}`),
];

// The home hero is one photo split into two layers. Both must get the exact same white balance,
// or Kevin would sit in a different light from the room around him.
const SHARED_BALANCE = { "src/assets/images/hero-kevin-cutout.webp": "src/assets/images/hero-stage-plate.jpg" };

const args = process.argv.slice(2);
const previewDir = args[0] === "--preview" ? path.resolve(args[1]) : null;

const clamp = (x) => (x < 0 ? 0 : x > 1 ? 1 : x);
const smooth = (x) => x * x * (3 - 2 * x);

async function readOriginal(rel) {
  const keep = path.join(originals, rel);
  if (!fs.existsSync(keep)) {
    fs.mkdirSync(path.dirname(keep), { recursive: true });
    fs.copyFileSync(path.join(root, rel), keep);
  }
  const { data, info } = await sharp(keep).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  return { data, info };
}

/** Per-channel gains toward neutral, from the midtones of the opaque pixels. */
function balance({ data }) {
  const sum = [0, 0, 0];
  let n = 0;
  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3] < 250) continue;
    const r = data[i] / 255, g = data[i + 1] / 255, b = data[i + 2] / 255;
    const l = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    if (l < 0.15 || l > 0.85) continue;
    sum[0] += r; sum[1] += g; sum[2] += b; n++;
  }
  if (!n) return [1, 1, 1];
  const mean = sum.map((s) => s / n);
  const gray = (mean[0] + mean[1] + mean[2]) / 3;
  // 35% of the way to neutral, and never more than 8% on any channel. A strong blue cast is a
  // stage wash someone chose, so those only get a nudge. Warm tungsten rooms get the full pull.
  const washed = mean[2] > mean[0] && gray / mean[0] - 1 > 0.15;
  const strength = washed ? 0.12 : 0.35;
  return mean.map((m) => Math.min(1.08, Math.max(0.92, 1 + (gray / m - 1) * strength)));
}

function grade({ data }, gains) {
  const out = Buffer.from(data);
  for (let i = 0; i < data.length; i += 4) {
    let r = clamp((data[i] / 255) * gains[0]);
    let g = clamp((data[i + 1] / 255) * gains[1]);
    let b = clamp((data[i + 2] / 255) * gains[2]);

    // Colour: calmer overall, loud colours pulled in hardest.
    let l = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    const chroma = Math.max(r, g, b) - Math.min(r, g, b);
    const sat = 0.9 / (1 + 0.9 * Math.max(0, chroma - 0.32));
    r = l + (r - l) * sat;
    g = l + (g - l) * sat;
    b = l + (b - l) * sat;

    // Tone: deeper blacks, gentle S, soft highlight shoulder.
    const tone = (x) => {
      x = clamp((x - 0.018) / 0.982);
      x = x + 0.28 * (smooth(x) - x);
      return x > 0.86 ? 0.86 + (x - 0.86) * 0.72 : x;
    };
    r = tone(r);
    g = tone(g);
    b = tone(b);

    // Split tone: blue into the shadows, amber into the highlights.
    l = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    const sh = (1 - l) ** 3;
    const hi = l ** 3;
    r += -0.012 * sh + 0.024 * hi;
    g += 0.002 * sh + 0.009 * hi;
    b += 0.022 * sh - 0.02 * hi;

    out[i] = Math.round(clamp(r) * 255);
    out[i + 1] = Math.round(clamp(g) * 255);
    out[i + 2] = Math.round(clamp(b) * 255);
  }
  return out;
}

const gainsFor = {};
for (const rel of PHOTOS) {
  const img = await readOriginal(rel);
  const source = SHARED_BALANCE[rel];
  const gains = source ? (gainsFor[source] ?? balance(await readOriginal(source))) : balance(img);
  gainsFor[rel] = gains;

  const { width, height } = img.info;
  const pixels = sharp(grade(img, gains), { raw: { width, height, channels: 4 } });
  const dest = previewDir ? path.join(previewDir, rel) : path.join(root, rel);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  if (rel.endsWith(".webp")) await pixels.webp({ quality: 86, alphaQuality: 100, effort: 6 }).toFile(dest);
  else await pixels.removeAlpha().jpeg({ quality: 82, mozjpeg: true }).toFile(dest);

  const before = fs.statSync(path.join(originals, rel)).size;
  const after = fs.statSync(dest).size;
  console.log(`${rel}  gains ${gains.map((x) => x.toFixed(3)).join("/")}  ${Math.round(before / 1024)} KB -> ${Math.round(after / 1024)} KB`);
}
