// Verified facts only — see "Verified facts (safe to use)" in docs/CONTENT.md.
// Anything not on that list does not go in this file.
import type { StaticImageData } from "next/image";
import toastmasterMagazine from "@/assets/images/featured-toastmaster-magazine.png";
import tedxCapeMay from "@/assets/images/featured-tedx-capemay.png";
import tedxWakeForestU from "@/assets/images/featured-tedx-wakeforestu.png";
import toastmastersPodcast from "@/assets/images/featured-toastmasters-podcast.png";

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

/**
 * Media and stages Kevin has been featured on, each checked against its source (2026-10-15).
 * TEDxRaleigh is left out on purpose: Kevin curated it, he didn't speak at it.
 * Kevin is cleared to use the TEDx event logos (Ben, 2026-10-16). They're the events' own
 * logo files, taken from tedxwakeforestu.com and tedxcapemay.com, kept whole (tagline
 * included) and at full colour. Sized so the "TEDx" lettering matches across the two.
 */
export type FeaturedItem = {
  name: string;
  note: string;
  logo?: { src: StaticImageData; className: string };
};

export const featuredIn: FeaturedItem[] = [
  { name: "TEDxWakeForestU", note: "TEDx talk", logo: { src: tedxWakeForestU, className: "h-7 lg:h-8" } },
  { name: "TEDxCapeMay", note: "TEDx talk", logo: { src: tedxCapeMay, className: "h-9 lg:h-10" } },
  // Masthead from the January 2023 issue's cover (the magazine is titled Toastmaster, singular).
  { name: "Toastmaster magazine", note: "January 2023 feature", logo: { src: toastmasterMagazine, className: "h-[1.15rem] opacity-75 lg:h-[1.35rem]" } },
  // Wordmark from the podcast's official cover art.
  { name: "The Toastmasters Podcast", note: "Episode 220", logo: { src: toastmastersPodcast, className: "h-10 opacity-75 lg:h-12" } },
];

export type Headline = { lead: string; highlight?: string };
