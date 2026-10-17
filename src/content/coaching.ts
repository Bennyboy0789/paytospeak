import { calendly } from "./programs/types";
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
  tiers: {
    name: string;
    price?: string;
    cadence?: string;
    summary: string;
    guarantee?: string;
    includes: string[];
    /** The tier's button. Defaults to "Apply" on /apply. */
    cta?: { label: string; href: string };
  }[];
};

export const coaching = {
  meta: {
    title: "Speaker coaching",
    description:
      "Coaching for aspiring and emerging speakers from Dr. Kevin C. Snyder, CSP: positioning, materials, outreach, and delivery.",
  },

  hero: {
    eyebrow: "Coaching",
    headline: { lead: "Work with", highlight: "Kevin." } satisfies Headline,
    // DRAFT(kc): new copy — tone only, no claims. Review with Kevin.
    sub: "Coaching for speakers who are good in the room and ready to build the business behind the talk, from someone who has spent more than 25 years doing exactly that.",
    imageCaption: "The view Kevin works toward with every speaker he coaches.",
  },

  // DRAFT(kc): new copy written for this build. Tone and framing only; no facts.
  fit: {
    eyebrow: "Who this is for",
    headline: { lead: "Honest about the fit.", highlight: "Before you apply." } satisfies Headline,
    yes: [
      "You’ve spoken at work, at a conference, in your community, and people told you it landed.",
      "You want speaking to be part of how you earn a living, not something you do once a year.",
      "You’re willing to do the unglamorous half: materials, outreach, follow-up.",
      "You want direct feedback, including the parts that are hard to hear.",
    ],
    no: [
      "You want results without doing the work. Kevin’s guarantees depend on you doing it.",
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
    // Carried over from the Wix 1:1 coaching pages (/copy-of-1-1-coaching-options-1,
    // /copy-of-1-1-coaching-options, /1-on-1-coaching) and the sample program PDF they link to.
    // Prices and the guarantee are from Kevin's 2026 coaching options chart ($7,500 or $12,500,
    // "with guarantee for PAID speaking opportunities"); shown per Ben, 2026-10-15. The chart
    // has no hourly, Speaker Assessment or Speech Review rates, so those stay off the page.
    // Older Wix figures: 10-session $15,000 / $7,500; 5-session $7,250 / $10,500; hourly $125 per
    // 30 min / $249 / $250; 3-hour bundle $475 / $499 / $650; Speaker Assessment $499 / $379.
    // TODO(kc): the terms of the 1:1 guarantee (what qualifies, the time frame, the refund).
    offer: {
      format:
        "One-on-one coaching with Kevin, virtual or in person, personalized to your speaking goals. Together you review your materials, refine your message, identify speaking opportunities that pay, and build a plan to grow your speaking business.",
      tiers: [
        {
          name: "10-session program",
          price: "$12,500",
          cta: { label: "Apply for 10 sessions", href: "/apply?program=10-session" },
          cadence: "Ten sessions",
          summary:
            "Kevin’s most complete 1:1 program, for speakers who are all in. Ten sessions, weekly or every other week, customizing his five-module Paid to $peak model into your own speaking business, with Kevin reviewing your work between every session. Plan on 2 to 3 hours of assignments a week.",
          guarantee: "Includes Kevin’s guarantee for paid speaking opportunities.",
          includes: [
            "Ten 1:1 sessions, weekly or every other week",
            "A written recap after each session with action steps and feedback",
            "Access to Kevin between sessions for questions",
            "2 to 3 hours of Kevin’s time between sessions reviewing your work",
            "A Speaker Assessment of everything you have",
            "Help developing your signature story, keynote or workshop",
            "Identifying your target markets and the organizations in them that pay speakers",
            "A marketing strategy for your speaking business",
            "Guidance on outreach, leads and inquiry responses, so you see exactly how Kevin would reply",
            "Behind the scenes: listen in on Kevin’s prospect calls and join him at live or virtual keynotes",
            "TEDx speaker training, plus additional coaching",
            "A year of The Vault and Kevin’s Association Directory",
            "The Paid to $peak Online Course and Webinar Series",
            "Speaker Mastermind and Speaking Professionally Toastmasters membership",
            "Resources for finishing, publishing and promoting your book",
          ],
        },
        {
          name: "5-session program",
          price: "$7,500",
          cta: { label: "Apply for 5 sessions", href: "/apply?program=5-session" },
          cadence: "Five sessions",
          summary:
            "The same personal approach in a shorter program, weekly or every other week, with more limited access to Kevin between sessions and shorter access to the included resources.",
          guarantee: "Includes Kevin’s guarantee for paid speaking opportunities.",
          includes: [
            "Five 1:1 sessions with Kevin",
            "Kevin’s review of your work between sessions",
            "Limited access to Kevin between sessions",
            "A Speaker Assessment",
            "TEDx speaker training",
            "The Paid to $peak Online Course",
            "Time-limited access to The Vault, the Speaker Mastermind and other resources",
          ],
        },
        {
          // Non-breaking hyphen, so the name never breaks as "3-" / "hour".
          name: "Hourly coaching and 3‑hour bundles",
          cadence: "One hour, or a bundle of three",
          cta: { label: "Book an hour", href: calendly.hourly },
          summary: "Focused, flexible time with Kevin on whatever you need most, without committing to a full program.",
          includes: [
            "Book a single hour or a 3-hour bundle",
            "Bring any part of your speaking business: your signature story, materials, marketing or target groups",
            "Learn what event organizers need and how to go from free to fee",
            "Kevin’s review of your materials and access to his templates",
            "Ask anything you want",
          ],
        },
        {
          name: "Speaker Assessment",
          cadence: "Written review and a coaching call",
          cta: { label: "Apply for an assessment", href: "/apply?program=assessment" },
          summary:
            "For speakers who aren’t getting consistent bookings. Kevin reviews all your materials from a meeting planner’s point of view and shows you what to change.",
          includes: [
            "Your marketing materials",
            "Your website and demo video",
            "Your speech outline",
            "Your outreach emails",
            "Your proposals and contracts",
            "Anything else you want feedback on",
            "A written assessment with recommendations and samples",
            "A coaching call to talk through the recommendations",
          ],
        },
        {
          name: "Speech Review",
          cadence: "Booked as hourly coaching",
          cta: { label: "Book a speech review", href: calendly.hourly },
          summary:
            "Have a high-stakes speech coming up? Kevin helps you prepare properly and deliver it well, so you make the most of the opportunity.",
          includes: [
            "Preparation for one upcoming presentation",
            "Coaching on your content and delivery",
            "Booked at the hourly coaching rate",
          ],
        },
      ],
    } as Offer | null,
  },

  why: {
    eyebrow: "Why Kevin",
    headline: { lead: "Coached by someone", highlight: "still doing the work." } satisfies Headline,
    // DRAFT(kc): framing copy; every fact in it is from the verified list.
    body: "Kevin has spent more than 25 years on professional stages: corporate, college, and youth audiences. He is an NSA Certified Speaking Professional and a Toastmasters Accredited Speaker, one of only nine people worldwide to hold both. The advice you get is what he does on Monday.",
  },

  // DRAFT(kc): new copy, logged in docs/CONTENT.md. Every fact is from this page's own offer
  // and Kevin's coaching options chart (src/content/compare.ts).
  // TODO(kc): add "How does the guarantee work?" once Kevin gives the 1:1 guarantee terms.
  faq: {
    eyebrow: "Questions",
    headline: { lead: "Good questions", highlight: "to ask first." } satisfies Headline,
    items: [
      {
        q: "What does coaching cost?",
        a: "The 10-session program is $12,500 and the 5-session program is $7,500. Group coaching is $1,500 or $2,500, and Paid to $peak On Demand is $497. Hourly coaching and 3-hour bundles are booked directly on Kevin’s calendar. Kevin can also customize coaching to work with your budget.",
      },
      {
        q: "How much time does it take?",
        a: "Sessions run weekly or every other week. In the 10-session program, plan on 2 to 3 hours of assignments a week between sessions.",
      },
      {
        q: "Is it virtual or in person?",
        a: "One-on-one coaching works either way. Group coaching is live and virtual, over five weeks.",
      },
      {
        q: "How is 1:1 coaching different from the online course?",
        a: "The course is self-paced: you work through the Paid to $peak modules on your own. In 1:1 coaching Kevin applies the same model to your own speaking business, reviews your work between sessions and gives you direct feedback. Both the 10-session and 5-session programs include the course.",
      },
      {
        q: "Which option is right for me?",
        a: "Start with the comparison at the top of this page. If you’re still not sure, that’s what a strategy session is for: Kevin will tell you what fits.",
      },
    ],
  },

  apply: {
    eyebrow: "Apply",
    headline: { lead: "Tell Kevin", highlight: "where you are." } satisfies Headline,
    body: "A few questions about your speaking so far, and what you want from it next.",
    cta: "Apply for coaching",
  },
} as const;
