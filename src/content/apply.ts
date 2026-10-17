import type { Headline } from "./shared";

// Applications are emailed to Kevin (src/lib/email.ts; Ben, 2026-10-16).
// TODO(kc): which fields? Minimum assumed below.
export const apply = {
  // Shown in place of the form until applications can send (applicationsOpen() in src/lib/email.ts). Copy reused from the program pages' closing card.
  closed: {
    heading: "Start with a strategy session",
    body: "A short call to see where you are, whether this is the right fit, and which option suits your goals and budget.",
    cta: "Book a strategy session",
  },
  meta: {
    title: "Apply for coaching",
    description: "Apply for speaker coaching with Dr. Kevin C. Snyder. Tell Kevin where you are.",
  },
  hero: {
    eyebrow: "Apply",
    headline: { lead: "Tell Kevin", highlight: "where you are." } satisfies Headline,
    sub: "A few questions so Kevin can see where you are and what you need next.",
  },
  // From the Wix contact page (/contact-kevin), which now redirects here.
  values: {
    heading: "Kevin’s coaching values",
    items: ["Authenticity", "Trust", "Partnership", "Commitment", "Accountability"],
    note: "To work together, you both need to be aligned on these.",
  },
  // TODO(kc): confirm this is the right public contact email for coaching (it is the one on the Wix site).
  contact: {
    email: "Kevin@KevinCSnyder.com",
    emailLabel: "Prefer email?",
    callLabel: "Rather talk first?",
    callCta: "Book a strategy session",
  },
  fields: {
    name: "Your name",
    email: "Email",
    // Reworded from "where you are in your speaking journey" — "journey" is on the
    // banned list in docs/BRAND.md.
    stage: "Where are you with speaking right now?",
    stageHint: "Talks you’ve given, who you speak to, what’s working, what isn’t.",
    program: "What are you interested in?",
    programHint: "A best guess is fine. Kevin will tell you what fits.",
    // Keys match the `?program=` links on /coaching. Names as they appear on the site.
    programs: [
      { value: "not-sure", label: "Not sure yet" },
      { value: "10-session", label: "1:1 coaching: 10-session program" },
      { value: "5-session", label: "1:1 coaching: 5-session program" },
      { value: "group", label: "Group coaching (the 5-Week Challenge)" },
      { value: "intensive", label: "Paid to $peak Intensive" },
      { value: "mentorship", label: "Mentorship" },
      { value: "tedx", label: "TEDx speaker coaching" },
      { value: "assessment", label: "Speaker Assessment" },
      { value: "hourly", label: "Hourly coaching or a Speech Review" },
      { value: "speaker-package", label: "Ultimate Speaker Package" },
      { value: "virtual-studio", label: "Virtual studio coaching" },
    ],
    required: "Everything is required except the link.",
    link: "Link to a talk or your site",
    linkHint: "Optional",
    submit: "Send application",
    // DRAFT(kc): shown after a successful send.
    sooner: "Want to talk sooner?",
  },
} as const;
