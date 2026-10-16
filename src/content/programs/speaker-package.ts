import stageTruss from "@/assets/images/stage/stage-truss.jpg";
import { calendly, type Program } from "./types";

/** The Ultimate Speaker Package: website, demo video, marketing packet and book, with Kevin managing the project. */
export const speakerPackage: Program = {
  href: "/coaching/speaker-package",
  name: "Ultimate Speaker Package",
  card: "A speaker website, demo video, marketing packet and published book, made by the team behind Kevin’s own materials, with Kevin coaching you and managing the project.",
  meta: {
    title: "Ultimate Speaker Package",
    description:
      "A speaker website, demo video, marketing packet and published book, produced by the designers, videographers and publishers Kevin Snyder uses, with Kevin coaching and managing the project.",
  },
  eyebrow: "Ultimate Speaker Package",
  headline: { lead: "Everything planners ask to see,", highlight: "in one package." },
  sub: "A speaker website, a demo video, a marketing packet and a published book, made by the designers, videographers and publishers who do Kevin’s own work. Kevin coaches you through it and manages the project from start to finish.",
  photo: { src: stageTruss, alt: "Kevin speaking on a stage framed by lighting truss, audience in the foreground", position: "62% 50%" },
  blocks: [
    {
      kind: "text",
      heading: "Why these four",
      body: [
        "You don’t need a professional website to speak, but you need one to get paid. The same goes for a demo video and a speaker packet. And a book helps you get paid well.",
        "Many new speakers never get considered, because they don’t have what meeting planners and conference organizers need to book them. When a planner looks at your website and demo video, they decide quickly whether to learn more or stop watching.",
        "Maybe you already have a website or a demo video, but it isn’t speaker quality, or it hasn’t been updated in the past two years. You’re being compared with other speakers, so your materials need to represent you at a professional level.",
      ],
    },
    {
      kind: "text",
      heading: "One team, managed by Kevin",
      body: [
        "Kevin worked with the designers, videographers and publishers who produce his own materials to build three one-stop packages. They offer special rates to the speakers Kevin refers to them.",
        "Kevin handles the project management for you, so your website, demo video, marketing packet and book are completed efficiently and professionally, without you shopping around for each one.",
      ],
    },
    {
      kind: "options",
      heading: "Three packages",
      intro: "Each package is a starting point. None of them is one size fits all.",
      options: [
        {
          name: "Starter",
          includes: [
            "3 coaching sessions and 2 project management sessions",
            "Landing page website",
            "1 to 2 minute demo video",
            "Two-page marketing packet",
            "Book publishing (print-ready files)",
            "Speaker Mastermind membership",
          ],
        },
        {
          name: "Serious",
          includes: [
            "3 coaching sessions and 2 project management sessions",
            "Upgraded website with a blog",
            "2 to 3 minute demo video, plus studio time",
            "Four-page marketing packet",
            "Book publishing, including basic formatting",
            "Speaker Mastermind membership",
            "The Paid to $peak Online Course",
          ],
        },
        {
          name: "Professional",
          includes: [
            "5 coaching sessions and 5 project management sessions",
            "Premium speaker website",
            "3 to 5 minute demo video, plus filming at a live event",
            "Marketing packet of up to six pages",
            "Book publishing, including basic formatting, a cover and a light edit",
            "Speaker Mastermind membership",
            "The Paid to $peak Online Course",
            "Access to The Vault, Kevin’s library of templates and samples",
          ],
        },
      ],
    },
    {
      kind: "steps",
      heading: "How it works",
      steps: [
        {
          title: "Talk it through with Kevin",
          body: "Book a call to go over the packages and Kevin’s availability. You’ll discuss your speaking goals, where you are now, and what you need to launch and grow.",
        },
        {
          title: "Shape the package around you",
          body: "If you already have one of the items, your package is adjusted to leave it out. Payment plans can be arranged.",
        },
        {
          title: "Start with coaching and project management",
          body: "Every package begins with coaching and project management sessions. Kevin doesn’t hand you to his designers and videographers until you’re ready and have the information they need.",
        },
        {
          title: "Kevin manages the production",
          body: "Kevin handles the project management details with the designers, videographers and publishers while your materials are made.",
        },
      ],
    },
    {
      kind: "text",
      heading: "Good to know",
      body: [
        "Because of the scope of the work, Kevin takes on a small number of package clients at a time, so projects are often scheduled weeks or months out.",
      ],
    },
  ],
  cta: { label: "Book a strategy session", href: calendly.strategy },
  wixPrices: [
    "No prices published. Wix said \"schedule a complimentary call to discuss options and pricing\" and that a package is discounted if you already have an item (/ultimate)",
  ],
  sources: ["/ultimate"],
  todo: [
    "Confirm this program is still offered and its current format.",
    "Are the three packages (Starter, Serious, Professional) and their contents still current?",
    "Do you still work with the same designers, videographers and publishers, and do they still offer reduced rates to speakers you refer?",
    "Is the “Paid to $peak Digital Course” in these packages the same as the Paid to $peak Online Course?",
    "How many package clients do you take at a time now? Wix said five.",
    "Keep the Wix-hosted package overview video (5:00) and the three package graphics? The video must be downloaded before Wix is cancelled.",
  ],
};
