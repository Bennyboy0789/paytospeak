import type { StaticImageData } from "next/image";
import firstEdition from "@/assets/images/book-paid-to-speak-first-edition.jpg";

/**
 * Paid to $peak 2.0.
 *
 * COVER SWAP — the one edit: when the real cover arrives, add it to
 * src/assets/images/ and set `cover` below to the import, e.g.
 *
 *   import cover from "@/assets/images/paid-to-speak-2-cover.jpg";
 *   ...
 *   cover: cover,
 *
 * While `cover` is null the site renders a typographic placeholder cover.
 */
const cover: StaticImageData | null = null;

export const book = {
  title: "Paid to $peak 2.0",
  plainTitle: "Paid to Speak 2.0",
  cover,
  meta: {
    title: "Paid to Speak 2.0 — the new book from Dr. Kevin C. Snyder",
    description:
      "Paid to $peak 2.0: systems and strategies behind a speaking career, from Dr. Kevin C. Snyder, CSP. Get notified when it’s out.",
  },
  hero: {
    eyebrow: "Coming soon",
    sub: "The systems and strategies behind a speaking career — from someone who’s been booked 1,500 times.",
    notifyHeading: "Get notified when it’s out",
    notifyBody: "Leave your email and you’ll hear when the book is available.",
  },
  // TODO(kc): request the outline to build a "What's inside" section. Until then,
  // the page ships without it (per docs/CONTENT.md).
  firstEdition: {
    eyebrow: "Where it started",
    image: firstEdition,
    imageAlt: "Cover of PAID to $PEAK: How to Become a Professional Speaker, by Dr. Kevin C. Snyder",
    // DRAFT(kc): confirm how 2.0 relates to the first book before launch.
    body: "Kevin first wrote about the speaking business in PAID to $PEAK: How to Become a Professional Speaker. Paid to $peak 2.0 is his new book on the systems and strategies behind a speaking career.",
  },
} as const;
