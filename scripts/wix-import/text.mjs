// House copy rules (CLAUDE.md) applied to imported Wix text:
// no em dashes, no emoji, no exclamation marks. Spacing is preserved so that
// inline runs can still be joined.

// Emoji and pictographs, but never the ©, ® and ™ signs (ShiftThinker™).
const EMOJI = /(?![©®™])[\p{Extended_Pictographic}\u{1F1E6}-\u{1F1FF}\u{1F3FB}-\u{1F3FF}⃣️‍]/gu;

export function cleanText(input) {
  let s = input.replace(/ /g, " ").replace(EMOJI, "");

  // Dashes used as punctuation: em dash anywhere, spaced en dash, spaced double hyphen.
  s = s
    .replace(/^\s*[—–]\s*/g, "") // leading attribution dash
    .replace(/\s*—+\s*/g, ", ")
    .replace(/\s+–\s+/g, ", ")
    .replace(/\s+--+\s+/g, ", ");

  // Exclamation marks become full stops ("?!" keeps the question mark).
  s = s
    .replace(/\?+!+|!+\?+/g, "?")
    .replace(/!+(?=\s*[.,;:)"'”’])/g, "")
    .replace(/!+/g, ".");

  // Tidy punctuation the replacements can leave behind.
  return s
    .replace(/,\s*([,.;:?])/g, "$1")
    .replace(/([.?])\s*,/g, "$1")
    .replace(/(^|[^.])\.\.(?!\.)/g, "$1.");
}

// HTML entities left in Wix's JSON-LD and meta fields ("Q&amp;A", "&quot;", "&#010;").
const ENTITIES = { amp: "&", quot: '"', apos: "'", lt: "<", gt: ">", nbsp: " ", hellip: "…", rsquo: "’", lsquo: "‘", rdquo: "”", ldquo: "“", mdash: "—", ndash: "–" };

export function decodeEntities(s) {
  return s.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (m, e) => {
    if (e[0] !== "#") return ENTITIES[e.toLowerCase()] ?? m;
    const n = e[1] === "x" || e[1] === "X" ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10);
    return Number.isFinite(n) ? String.fromCodePoint(n) : m;
  });
}

// Sentences Kevin's pasted text ran together ("feature.Every TEDx event").
// Only after a lower-case letter and real punctuation, before a capitalised
// word, and never inside a URL, an email address or a domain.
const JOINED = /([a-z)])([.?!])([A-Z][a-z])/g;
const LINKISH = /[/@]|www\.|\.(com|biz|org|net|us|io)\b/i;

export function fixJoins(s) {
  return s.replace(/\S+/g, (tok) => (LINKISH.test(tok) ? tok : tok.replace(JOINED, "$1$2 $3")));
}

// Kevin often opens a paragraph with "**" or "***" as a call-out marker. In
// MDX they arrive escaped (\*\*) and show up as literal asterisks. Strip a run
// of two or more at the start of a line (and a matching run closing a
// "*** Heading ***" line); single asterisks are bullets or footnotes and stay.
const STARS = String.raw`(?:\\\*){2,}`; // two or more escaped asterisks
const LEAD_MARK = new RegExp(String.raw`^(> |#{2,3} )?(\*{1,3})?(${STARS})(\*{1,3}(?=\s))?[ \t]+`, "gm");
const TRAIL_MARK = new RegExp(String.raw`[ \t]+${STARS}$`, "gm");

export function stripMarkers(md) {
  return md
    .replace(LEAD_MARK, (m, prefix = "", open = "", _run, close) => `${prefix}${close ? "" : open}`)
    .replace(TRAIL_MARK, "");
}

/** A post that uses "**" as a footnote reference ("$249/person**") keeps its markers. */
export const usesFootnoteMarks = (md) => new RegExp(String.raw`\w${STARS}`).test(md);
