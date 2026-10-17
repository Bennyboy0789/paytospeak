export const site = {
  name: "Paid to $peak",
  /** Plain-text name for screen readers, alt text, and search. See docs/BRAND.md. */
  plainName: "Paid to Speak",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://paidtospeak.biz").replace(/\/$/, ""),
  description:
    "Speaker coaching from Dr. Kevin C. Snyder, CSP. 25+ years on stage, now teaching aspiring and emerging speakers the system behind a booked career.",
  parent: {
    name: "Dr. Kevin C. Snyder",
    url: "https://kevincsnyder.com",
  },
  // As kevincsnyder.com lists them, the master for facts (Ben, 2026-10-16).
  contact: { email: "kevin@kevincsnyder.com", phone: "+1 (919) 633-9931", tel: "+19196339931" },
  social: [
    { label: "Facebook", href: "https://www.facebook.com/KevinCSnyderSpeaker" },
    { label: "Instagram", href: "https://www.instagram.com/KevinCSnyder/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/kevincsnyderspeaker/" },
    // Linked from kevincsnyder.com and the Wix site footer.
    { label: "X", href: "https://x.com/kevincsnyder" },
  ],
} as const;

export const nav = [
  { label: "Coaching", href: "/coaching" },
  { label: "The Book", href: "/book" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
] as const;

export const applyHref = "/apply";
