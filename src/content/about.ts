import type { Headline } from "./shared";

// Coaching-framed story. Built only from the verified facts in docs/CONTENT.md;
// every gap is a TODO(kc). Do not copy the keynote bio from kevincsnyder.com.
export const about = {
  meta: {
    title: "About Kevin",
    description:
      "Dr. Kevin C. Snyder — CSP, AS, 20 years on stage — and why he now coaches aspiring and emerging speakers.",
  },
  hero: {
    eyebrow: "About Kevin",
    headline: {
      lead: "A kid who didn’t believe in himself",
      highlight: "became a speaker a million people saw.",
    } satisfies Headline,
    sub: "Kevin’s path wasn’t a straight line, and that’s exactly why he can teach it.",
  },
  chapters: [
    {
      eyebrow: "The early years",
      title: "The kid who didn’t believe in himself.",
      body: ["Kevin grew up in North Carolina. As a child he struggled with depression, and believing in himself did not come easily."],
      todo: "Request Kevin’s own account of his childhood — the details he’s comfortable sharing on a coaching site.",
    },
    {
      eyebrow: "The unlikely turn",
      title: "A game show, a stage, and a question about belief.",
      body: ["The road from there ran through a television game-show win, a professional speaking career, and research into belief itself."],
      todo: "Game show name and year; how he got from there to the stage; what his belief research covers.",
    },
    {
      eyebrow: "The framework",
      title: "ShiftThinker™.",
      body: ["Out of 20 years on stage, Kevin built the ShiftThinker™ framework — the thinking behind the talks he gives."],
      todo: "One or two sentences on ShiftThinker™ in Kevin’s words.",
    },
    {
      eyebrow: "The teaching",
      title: "Why he coaches.",
      body: [
        "Kevin has spoken to more than 1,500 audiences across corporate, college, and youth markets. He is an NSA Certified Speaking Professional and a Toastmasters Accredited Speaker — one of only nine people worldwide to hold both.",
        "Now he coaches aspiring and emerging speakers on the system behind that career.",
      ],
      todo: "Why Kevin coaches, in his words.",
    },
  ],
  keynoteLink: { text: "Booking Kevin for a keynote? That’s on", label: "kevincsnyder.com" },
  cta: { headline: { lead: "Ready to", highlight: "work together?" } satisfies Headline, label: "See the coaching program" },
} as const;
