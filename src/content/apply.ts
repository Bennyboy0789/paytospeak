import type { Headline } from "./shared";

// TODO(kc): which fields? Minimum assumed below. Confirm whether applications
// route to email, MailChimp, or a form service (see src/app/actions.ts).
export const apply = {
  meta: {
    title: "Apply for coaching",
    description: "Apply for speaker coaching with Dr. Kevin C. Snyder. Tell Kevin where you are.",
  },
  hero: {
    eyebrow: "Apply",
    headline: { lead: "Tell Kevin", highlight: "where you are." } satisfies Headline,
    sub: "A few questions so Kevin can see where you are and what you need next.",
  },
  fields: {
    name: "Your name",
    email: "Email",
    // Reworded from "where you are in your speaking journey" — "journey" is on the
    // banned list in docs/BRAND.md.
    stage: "Where are you with speaking right now?",
    stageHint: "Talks you’ve given, who you speak to, what’s working, what isn’t.",
    link: "Link to a talk or your site",
    linkHint: "Optional",
    submit: "Send application",
  },
} as const;
