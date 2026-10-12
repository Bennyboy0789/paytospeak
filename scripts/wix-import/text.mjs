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
