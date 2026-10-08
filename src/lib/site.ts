export const site = {
  name: "Paid to $peak",
  /** Plain-text name for screen readers, alt text, and search. See docs/BRAND.md. */
  plainName: "Paid to Speak",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://paidtospeak.biz").replace(/\/$/, ""),
  description:
    "Speaker coaching from Dr. Kevin C. Snyder, CSP — 20 years on stage, now teaching aspiring and emerging speakers the system behind a booked career.",
  parent: {
    name: "Dr. Kevin C. Snyder",
    url: "https://kevincsnyder.com",
  },
  social: [
    { label: "Facebook", href: "https://www.facebook.com/KevinCSnyderSpeaker" },
    { label: "Instagram", href: "https://www.instagram.com/KevinCSnyder/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/kevincsnyderspeaker/" },
    // TODO(kc): X handle — kevincsnyder.com doesn't link one.
  ],
} as const;

export const nav = [
  { label: "Coaching", href: "/coaching" },
  { label: "The Book", href: "/book" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
] as const;

export const applyHref = "/apply";
