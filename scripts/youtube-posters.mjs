// Records the sharpest thumbnail YouTube has for every video on the site, so <YouTube>
// never asks for one that doesn't exist (a 404 in the console for each miss).
// maxresdefault (1280px) exists only for HD uploads; sddefault (640px) is missing on some
// older videos; hqdefault (480px) always exists.
//
// Run after adding videos:  node scripts/youtube-posters.mjs
// Writes src/content/youtube-posters.json. Videos not in the file fall back to hqdefault.
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const out = path.join(root, "src/content/youtube-posters.json");

function* files(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) yield* files(p);
    else if (/\.(tsx?|mdx)$/.test(e.name)) yield p;
  }
}

// youtubeId: "…" in content files, <YouTube id="…"> in pages and posts.
const ids = new Set();
for (const f of files(path.join(root, "src"))) {
  const text = fs.readFileSync(f, "utf8");
  for (const m of text.matchAll(/youtubeId:\s*"([\w-]{11})"|<YouTube[^>]*\bid=["{]+([\w-]{11})/g)) ids.add(m[1] ?? m[2]);
}

const exists = async (id, name) => (await fetch(`https://i.ytimg.com/vi/${id}/${name}.jpg`, { method: "HEAD" })).ok;

const posters = {};
const list = [...ids].sort();
for (let i = 0; i < list.length; i += 8) {
  await Promise.all(
    list.slice(i, i + 8).map(async (id) => {
      if (await exists(id, "maxresdefault")) posters[id] = "maxresdefault";
      else if (await exists(id, "sddefault")) posters[id] = "sddefault";
    }),
  );
}

const sorted = Object.fromEntries(Object.keys(posters).sort().map((k) => [k, posters[k]]));
fs.writeFileSync(out, `${JSON.stringify(sorted, null, 2)}\n`);
const counts = Object.values(posters).reduce((c, v) => ({ ...c, [v]: (c[v] ?? 0) + 1 }), {});
console.log(`${list.length} videos: ${counts.maxresdefault ?? 0} maxres, ${counts.sddefault ?? 0} sd, ${list.length - Object.keys(posters).length} hq only`);
