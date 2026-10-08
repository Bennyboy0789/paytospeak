// Verified facts only — see "Verified facts (safe to use)" in docs/CONTENT.md.
// Anything not on that list does not go in this file.

export const stats = [
  { value: "20", label: "years speaking professionally" },
  { value: "1,500+", label: "audiences" },
  { value: "1M+", label: "people reached" },
] as const;

export const credentials = {
  csp: "NSA Certified Speaking Professional",
  as: "Toastmasters International Accredited Speaker",
  rarity: "One of only nine people worldwide to hold both.",
} as const;

export type Headline = { lead: string; highlight?: string };
