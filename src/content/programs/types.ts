import type { StaticImageData } from "next/image";
import type { Headline } from "../shared";

/**
 * A program page carried over from the Wix site (docs/WIX-MIGRATION.md).
 * Copy is Kevin's own Wix copy, tidied to the house rules in CLAUDE.md:
 * no em dashes, no emoji, no exclamation marks. Prices and Kevin's own guarantees come
 * from his 2026 coaching charts and pages, and are shown as he wrote them (Ben, 2026-10-15).
 */
export type Program = {
  /** URL path, e.g. "/coaching/tedx". */
  href: string;
  /** Short name for cards, footer links and breadcrumbs. */
  name: string;
  /** One or two sentences for the "Ways to work with Kevin" cards. */
  card: string;
  meta: { title: string; description: string };
  eyebrow: string;
  headline: Headline;
  sub: string;
  /** One line beside the hero button, e.g. "$297 to $7,500. Payment plans available." */
  investment?: string;
  /** An action photo of Kevin beside the hero (under it on phones). `position` is the CSS object-position. */
  photo?: { src: StaticImageData; alt: string; position?: string };
  blocks: ProgramBlock[];
  cta: { label: string; href: string };
  /** Overrides for the closing "Next step" card, for pages that don't sell anything. */
  closing?: { headline?: Headline; body?: string; cta?: { label: string; href: string } };
  /**
   * Every price seen on Wix, with where it was seen. A record only: the prices shown on
   * the page are `investment` and each option's `price`, from Kevin's 2026 charts.
   */
  wixPrices: string[];
  /** Old Wix paths this page's content came from (each redirects here). */
  sources: string[];
  /** Open questions for Kevin. Rendered as a TODO(kc) note on the page. */
  todo: string[];
};

/** `id` makes a block an in-page link target, e.g. a hero button to "#worksheets". */
export type ProgramBlock = { id?: string } & (
  | { kind: "text"; heading?: string; body: string[] }
  | { kind: "list"; heading?: string; intro?: string; items: string[] }
  | { kind: "options"; heading?: string; intro?: string; options: ProgramOption[] }
  /** `catalogue` lays the items out as unnumbered cards, for lists that aren't a sequence. */
  | { kind: "steps"; heading?: string; intro?: string; catalogue?: boolean; steps: { title: string; body: string }[] }
  | { kind: "videos"; heading?: string; intro?: string; videos: { youtubeId: string; title: string }[] }
  /** Files under /files show a download icon; any other link shows an arrow. */
  | { kind: "downloads"; heading?: string; intro?: string; files: { label: string; href: string; note?: string }[] }
  | { kind: "faq"; heading?: string; items: { q: string; a: string }[] }
  /** Kevin's speaker-tips sign-up. `source` tags where it came from (MailChimp, analytics). */
  | { kind: "subscribe"; source: string }
);

export type ProgramOption = {
  name: string;
  /** e.g. "Five 60-minute sessions" or "Monthly, 3-month minimum". */
  format?: string;
  /** As Kevin's current chart shows it, e.g. "$697" or "$3,500 to $7,500". */
  price?: string;
  /** A line set apart under the summary, for a guarantee Kevin makes on this option. */
  guarantee?: string;
  summary?: string;
  includes: string[];
  /** What this option leaves out. Shown muted, with a dash rather than a check. */
  excludes?: string[];
  /** The option's own button. Defaults to the program's `cta`. */
  cta?: { label: string; href: string };
};

/** Kevin's booking links, as used on the Wix site. */
export const calendly = {
  strategy: "https://calendly.com/snyder/paidtospeak",
  tedx: "https://calendly.com/snyder/tedx",
  tedxIntensive: "https://calendly.com/snyder/tedxintensive",
  virtualStudio: "https://calendly.com/snyder/virtualstudiocoaching",
  hourly: "https://calendly.com/snyder/hourlycoaching",
  threeHour: "https://calendly.com/snyder/3-hour-bundle",
} as const;
