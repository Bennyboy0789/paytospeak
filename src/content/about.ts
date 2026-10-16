import type { Headline } from "./shared";

/**
 * A chapter of Kevin's story. `quote` is Kevin's own published wording, shown as a pull
 * quote. `todo` renders a visible TODO(kc) block; leave it off once the chapter is complete.
 */
type Chapter = {
  eyebrow: string;
  title: string;
  body: string[];
  /**
   * Click-to-play YouTube video under the text. `title` is what screen readers announce;
   * `poster` picks another YouTube still when the default frame is a poor one.
   */
  video?: { id: string; title: string; caption: string; poster?: string };
  quote?: string;
  todo?: string;
};

// Coaching-framed story. The facts are Kevin's own account (kevincsnyder.com/meet-kevin, the
// "Why I coach speakers" section of kevincsnyder.com/coaching, and his blog posts), read
// 2026-10-16 and rewritten for this site. Don't copy the keynote bio wholesale.
// DRAFT(kc): all four chapters need Kevin's read. Logged in docs/CONTENT.md.
const chapters: Chapter[] = [
  {
    eyebrow: "The early years",
    // Not a repeat of the page headline, which already says this.
    title: "Growing up in North Carolina.",
    body: [
      "Kevin grew up in North Carolina. At 12 he was diagnosed with depression and an eating disorder, and believing in himself did not come easily.",
      "Recovery started a question he has been asking ever since: how does a person come to believe in himself?",
      "In college it nearly ended there. Kevin went to the Dean of Students to withdraw, and the dean refused to sign the form. Someone else believed in him first. His own belief followed.",
    ],
    // Linked from kevincsnyder.com/meet-kevin ("The Story Kevin Almost Never Told").
    video: { id: "GbJaPqqV3A4", title: "Kevin Snyder at TEDxCapeMay", caption: "Kevin at TEDxCapeMay, telling the story he almost never told." },
  },
  {
    eyebrow: "The unlikely turn",
    title: "A game show, a stage, and a question about belief.",
    body: [
      "Then Kevin won on The Price is Right and met Bob Barker. The win became his signature story, the one meeting planners still ask him to include, and his proof that believing what’s possible changes what happens next.",
      "He built a career in Student Affairs and became a Dean of Students at High Point University. His curiosity about belief became doctoral research on belief and self-efficacy: how confidence is built, and how it turns into action.",
      "Then a student told him that his speech had saved her life. Kevin realized speaking was a calling, and in 2012 he left the dean’s office to speak full time.",
    ],
    // The upload Kevin links from his own blog (aerate2020). Original 4:3 broadcast. Its default
    // thumbnail is a vacuum cleaner; still hq2 is Kevin beside Bob Barker.
    video: {
      id: "LrKLPcPiusA",
      title: "Kevin Snyder meets Bob Barker on The Price is Right",
      caption: "Kevin with Bob Barker on The Price is Right.",
      poster: "hq2",
    },
  },
  {
    eyebrow: "The framework",
    title: "The ShiftThinker™ framework.",
    body: [
      "Out of that research and 20 years on stage, Kevin built the ShiftThinker™ Framework, the thinking behind his keynotes for corporate, college and youth audiences.",
      "A ShiftThinker™ believes boldly, thinks differently and takes meaningful action, and isn’t defined by fear, failure or self-doubt.",
    ],
    quote: "The most important story you’ll ever believe is the one you tell yourself.",
  },
  {
    eyebrow: "The teaching",
    title: "Why he coaches.",
    body: [
      "Kevin is the first to say he isn’t a natural speaker. After years of hiring speakers for his own campus events, he wanted to share his story too. He presented conference breakouts and spoke on campuses for free, and the invitations grew. Getting paid was another matter, and his biggest mistake, he says, was trying to figure it out on his own.",
      "So he hired a speaker coach to learn the business of speaking. With that guidance, structure and accountability, the paid keynotes followed.",
      "Today he has spoken to more than 1,500 audiences across corporate, college and youth markets. He is an NSA Certified Speaking Professional and a Toastmasters Accredited Speaker, one of only nine people worldwide to hold both. It’s why he wrote PAID to $PEAK, and why he coaches.",
    ],
    quote: "Most speakers don’t make it when they try to do it alone. I wish I had hired a coach much sooner.",
  },
];

export const about = {
  meta: {
    title: "About Kevin",
    description:
      "Dr. Kevin C. Snyder, CSP, AS, has spent 20 years on stage. Here is why he now coaches aspiring and emerging speakers.",
  },
  hero: {
    eyebrow: "About Kevin",
    headline: {
      lead: "A kid who didn’t believe in himself",
      // Non-breaking space keeps "a million" together.
      highlight: "became a speaker a million people saw.",
    } satisfies Headline,
    sub: "Kevin’s path wasn’t a straight line, and that’s exactly why he can teach it.",
  },
  chapters,
  keynoteLink: { text: "Booking Kevin for a keynote? That’s on", label: "kevincsnyder.com" },
  cta: { headline: { lead: "Ready to", highlight: "work together?" } satisfies Headline, label: "See the coaching program" },
} as const;
