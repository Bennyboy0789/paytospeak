import type { Headline } from "./shared";

export const home = {
  hero: {
    eyebrow: "Speaker coaching",
    // TODO(kc): confirm hero headline direction. Alternative under review:
    // "Build a speaking career, not just a great talk."
    headline: { lead: "You have a message.", highlight: "Let’s get it booked." } satisfies Headline,
    sub: "Kevin Snyder has spent 20 years on stage — 1,500+ audiences, a million people. He now coaches aspiring and emerging speakers on the system behind it.",
    primaryCta: "Apply for coaching",
    secondaryCta: "See how it works",
  },

  problem: {
    eyebrow: "Why speakers stall",
    headline: { lead: "Great talks don’t get booked.", highlight: "Systems do." } satisfies Headline,
    points: [
      {
        title: "You’re invisible.",
        body: "You’re excellent in the room and absent online. Planners can’t find you, so they never call.",
      },
      {
        title: "You have no materials.",
        body: "No speaker sheet, no demo reel, no site that does your work justice. Every opportunity starts from zero.",
      },
      {
        title: "You don’t know the business.",
        body: "Speaking is a craft and an industry. Nobody teaches the second half.",
      },
    ],
  },

  system: {
    eyebrow: "The system",
    headline: { lead: "What changes when you", highlight: "work with Kevin." } satisfies Headline,
    cta: "See the coaching program",
  },

  about: {
    eyebrow: "About Kevin",
    headline: {
      lead: "A kid who didn’t believe in himself",
      highlight: "became a speaker a million people saw.",
    } satisfies Headline,
    body: "From childhood depression to television game-show winner to keynote speaker and belief researcher — Kevin’s path wasn’t a straight line, and that’s exactly why he can teach it. He built the ShiftThinker™ framework from 20 years on stage and turned it into a system other speakers can learn.",
    cta: "Read Kevin’s story",
  },

  book: {
    eyebrow: "New book",
    body: "Systems and strategies for turning what you know into a speaking career.",
    cta: "Get notified when it’s out",
  },

  newsletter: {
    eyebrow: "Stay sharp",
    headline: { lead: "Speaker tips,", highlight: "every other week." } satisfies Headline,
    body: "Kevin sends one practical idea for building a speaking career. No fluff.",
  },
} as const;
