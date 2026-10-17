// Verified facts only — see "Verified facts (safe to use)" in docs/CONTENT.md.
// kevincsnyder.com is the master for facts (Ben, 2026-10-16); where this file and it disagree, it wins.
import type { StaticImageData } from "next/image";
import toastmasterMagazine from "@/assets/images/featured-toastmaster-magazine.png";
import tedxCapeMay from "@/assets/images/featured-tedx-capemay.png";
import tedxWakeForestU from "@/assets/images/featured-tedx-wakeforestu.png";
import toastmastersPodcast from "@/assets/images/featured-toastmasters-podcast.png";
import anheuserBusch from "@/assets/images/clients/anheuser-busch.png";
import bankOfAmerica from "@/assets/images/clients/bank-of-america.png";
import bcbs from "@/assets/images/clients/bcbs.png";
import duke from "@/assets/images/clients/duke.png";
import msu from "@/assets/images/clients/msu.png";
import nar from "@/assets/images/clients/nar.png";
import prudential from "@/assets/images/clients/prudential.png";
import purdue from "@/assets/images/clients/purdue.png";
import toshiba from "@/assets/images/clients/toshiba.png";
import usaf from "@/assets/images/clients/usaf.png";
import utAustin from "@/assets/images/clients/ut-austin.png";

export const stats = [
  // kevincsnyder.com home page: "25+ years on stage".
  { value: "25+", label: "years on stage" },
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

/**
 * Organizations Kevin has spoken for, from kevincsnyder.com/resources/past-clients, recoloured to
 * white for the dark strip. Logos with their own filled background (Caterpillar, SHRM, Orkin)
 * are left out because they don't survive the recolour. `className` evens out optical size.
 */
// `phone: false` drops a logo on phones, so the row stays short there.
export const spokenFor: { name: string; logo: StaticImageData; className: string; phone?: false }[] = [
  { name: "Bank of America", logo: bankOfAmerica, className: "h-10" },
  { name: "Prudential", logo: prudential, className: "h-7" },
  { name: "Toshiba", logo: toshiba, className: "h-4" },
  { name: "Anheuser-Busch", phone: false, logo: anheuserBusch, className: "h-7" },
  { name: "BlueCross BlueShield", logo: bcbs, className: "h-8" },
  { name: "U.S. Air Force", logo: usaf, className: "h-11" },
  { name: "National Association of Realtors", phone: false, logo: nar, className: "h-8" },
  { name: "Duke University", logo: duke, className: "h-9" },
  { name: "Purdue University", logo: purdue, className: "h-8" },
  { name: "Michigan State University", phone: false, logo: msu, className: "h-11" },
  { name: "The University of Texas at Austin", logo: utAustin, className: "h-9" },
];

/** Audiences by market, from kevincsnyder.com/resources/past-clients. */
export const audiencesByMarket = [
  { value: "640+", label: "corporate" },
  { value: "420+", label: "higher education" },
  { value: "180+", label: "associations" },
  { value: "260+", label: "K-12 and youth" },
] as const;

export type Headline = { lead: string; highlight?: string };
