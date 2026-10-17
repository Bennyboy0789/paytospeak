import type { Headline } from "./shared";

// Applications are emailed to Kevin (src/lib/email.ts; Ben, 2026-10-16).
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
    // kevincsnyder.com/coaching/apply, the master (Ben, 2026-10-16).
    sub: "This short application takes about 3 to 5 minutes. Kevin’s team responds within one business day.",
  },
  // From the Wix contact page (/contact-kevin), which now redirects here.
  values: {
    heading: "Kevin’s coaching values",
    items: ["Authenticity", "Trust", "Partnership", "Commitment", "Accountability"],
    note: "To work together, you both need to be aligned on these.",
  },
  // DRAFT(kc): the steps follow kevincsnyder.com/coaching/apply and /coaching ("we’ll set up a
  // conversation to see if coaching is the right fit").
  next: {
    heading: "What happens next",
    steps: [
      "Send the application. It takes about 3 to 5 minutes.",
      "Kevin’s team responds within one business day.",
      "You talk with Kevin to see if coaching is the right fit.",
    ],
  },
  contact: {
    email: "kevin@kevincsnyder.com",
    emailLabel: "Prefer email?",
    callLabel: "Rather talk first?",
    callCta: "Book a strategy session",
  },
  /**
   * The questions from Kevin's own coaching application at kevincsnyder.com/coaching/apply, the
   * master (Ben, 2026-10-16), in the same order and wording. Two edits for house style: the
   * exclamation marks are dropped and "Not sure yet — need help choosing" loses its dash.
   */
  fields: {
    contactHeading: "Your contact information",
    name: "Your name",
    email: "Email address",
    phone: "Phone number",
    optional: "Optional",
    level: {
      label: "Which best describes your current level of speaking to audiences?",
      options: [
        "I have not spoken much yet to audiences, but I am committed to launch now",
        "I’ve spoken a few times (mostly free or lower-paid opportunities)",
        "I’m consistently earning $2,500+ speaking engagements",
        "I’m consistently earning $10,000+ speaking engagements",
        "Other",
      ],
    },
    vision: {
      label: "What is your vision for speaking?",
      hint: "Check all that apply",
      options: [
        "Build a side income from speaking",
        "Launch a full-time speaking business",
        "Add speaking as a lead generator for my existing business",
        "Become a recognized expert / thought leader in my niche",
        "Sell more books / courses / consulting via the stage",
        "Speak at colleges, associations, or corporate events",
        "Travel and impact more people",
        "Other",
      ],
    },
    programs: {
      label: "Which coaching program(s) are you most interested in?",
      hint: "Check all that apply",
      options: [
        { value: "group", label: "PAID to $PEAK group coaching program (5-week cohort)" },
        { value: "one-on-one", label: "1-on-1 private coaching with Kevin" },
        { value: "tedx", label: "Becoming a TEDx Speaker" },
        { value: "mastermind", label: "Speaker Mastermind Group" },
        { value: "all", label: "All of these" },
        { value: "not-sure", label: "Not sure yet, need help choosing" },
      ],
      // The site's `?program=` links (the buttons on /coaching and the program pages), mapped to
      // the option they belong under. The exact program is also sent to Kevin with the application.
      fromLink: {
        "10-session": "one-on-one",
        "5-session": "one-on-one",
        assessment: "one-on-one",
        hourly: "one-on-one",
        mentorship: "one-on-one",
        "speaker-package": "one-on-one",
        "virtual-studio": "one-on-one",
        group: "group",
        intensive: "group",
        tedx: "tedx",
        mastermind: "mastermind",
      } as Record<string, string>,
    },
    challenge: "What is your biggest challenge right now as a speaker?",
    success: { label: "What would success in speaking look like for you?", year: "Next 12 months", threeYears: "Next 3 years" },
    investment: {
      label: "What level of investment are you comfortable making in your speaking business?",
      options: [
        "Under $1,000",
        "$2,500 to $5,000",
        "$5,000 to $10,000",
        "$10,000+",
        "I’m committed to speaking and willing to invest in the right program for my goals",
      ],
    },
    notes: "Is there anything else you’d like Kevin to know before reviewing your application?",
    required: "Questions marked * are required.",
    submit: "Submit application",
    // DRAFT(kc): shown after a successful send.
    sooner: "Want to talk sooner?",
  },
} as const;
