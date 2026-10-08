import type { Headline } from "./shared";

export type Pillar = { title: string; body: string };

/**
 * The coaching offer. `null` until Kevin confirms the structure — the page then
 * renders a TODO(kc) block in its place. When it's confirmed, fill this in; the
 * page renders one tier as a single panel and several as a ladder.
 *
 * Shape (example only — do not ship invented prices or tiers):
 *
 *   offer: {
 *     format: "One-on-one coaching",
 *     tiers: [
 *       {
 *         name: "Foundation",
 *         price: "TODO(kc)",
 *         cadence: "TODO(kc)",
 *         summary: "TODO(kc)",
 *         includes: ["TODO(kc)"],
 *       },
 *     ],
 *   },
 */
export type Offer = {
  format: string;
  tiers: { name: string; price?: string; cadence?: string; summary: string; includes: string[] }[];
};

export const coaching = {
  meta: {
    title: "Speaker coaching",
    description:
      "Coaching for aspiring and emerging speakers from Dr. Kevin C. Snyder, CSP — positioning, materials, outreach, and delivery.",
  },

  hero: {
    eyebrow: "Coaching",
    headline: { lead: "Work with", highlight: "Kevin." } satisfies Headline,
    // DRAFT(kc): new copy — tone only, no claims. Review with Kevin.
    sub: "Coaching for speakers who are good in the room and ready to build the business behind the talk — from someone who has spent 20 years doing exactly that.",
    imageCaption: "The view Kevin works toward with every speaker he coaches.",
  },

  // DRAFT(kc): new copy written for this build. Tone and framing only; no facts.
  fit: {
    eyebrow: "Who this is for",
    headline: { lead: "Honest about the fit.", highlight: "Before you apply." } satisfies Headline,
    yes: [
      "You’ve spoken — at work, at a conference, in your community — and people told you it landed.",
      "You want speaking to be part of how you earn a living, not something you do once a year.",
      "You’re willing to do the unglamorous half: materials, outreach, follow-up.",
      "You want direct feedback, including the parts that are hard to hear.",
    ],
    no: [
      "You want a guaranteed number of bookings. Nobody can honestly promise that.",
      "You want a script handed to you. Kevin helps you find your message, not borrow his.",
      "You aren’t ready to put your talk in front of real audiences yet.",
    ],
  },

  pillars: {
    eyebrow: "What we work on",
    headline: { lead: "Four parts of a speaking career.", highlight: "All of them, properly." } satisfies Headline,
    // TODO(kc): confirm the coaching program's actual pillars/steps. These are
    // placeholders from docs/CONTENT.md. ShiftThinker™ is a content framework for
    // talks, not the coaching curriculum — do not present it as one.
    items: [
      { title: "Positioning", body: "A clear lane, a sharp message, an identity planners remember." },
      { title: "Materials", body: "The site, the sheet, the reel, the talk descriptions, done properly." },
      { title: "Outreach", body: "A repeatable process for getting in front of the people who book." },
      { title: "Delivery", body: "The stagecraft that turns a good talk into a booked career." },
    ] satisfies Pillar[],
  },

  how: {
    eyebrow: "How it works",
    headline: { lead: "The program." } satisfies Headline,
    offer: null as Offer | null,
  },

  why: {
    eyebrow: "Why Kevin",
    headline: { lead: "Coached by someone", highlight: "still doing the work." } satisfies Headline,
    // DRAFT(kc): framing copy; every fact in it is from the verified list.
    body: "Kevin has spent 20 years on professional stages — corporate, college, and youth audiences. He is an NSA Certified Speaking Professional and a Toastmasters Accredited Speaker — one of only nine people worldwide to hold both. The advice you get is what he does on Monday.",
  },

  apply: {
    eyebrow: "Apply",
    headline: { lead: "Tell Kevin", highlight: "where you are." } satisfies Headline,
    body: "A short application so Kevin can see where you are and what you need next.",
    cta: "Apply for coaching",
  },
} as const;
