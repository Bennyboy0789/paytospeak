import { calendly, type Program } from "./types";

/**
 * The Vault: Kevin's library of templates, scripts and samples.
 * Source: hidden /vault sales page. /welcome is the purchaser page (sources only).
 */
export const vault: Program = {
  href: "/vault",
  name: "The Vault",
  card: "The templates, scripts and samples Kevin uses in his own speaking business: proposals, agreements, invoices, outreach emails and more.",
  meta: {
    title: "The Vault",
    description:
      "The Vault from Dr. Kevin C. Snyder, CSP: the speaking proposals, agreements, invoices, scripts and outreach templates he uses in his own speaking business.",
  },
  eyebrow: "The Vault",
  headline: { lead: "Stop building it", highlight: "from scratch." },
  sub: "The Vault is the library of templates, scripts and samples Kevin uses in his own speaking business. Use his versions to make your own, and send proposals with confidence.",
  blocks: [
    {
      kind: "text",
      heading: "Twenty years of paperwork, ready to use",
      body: [
        "Kevin built the Vault from 20 years of speaking professionally, including the mistakes that cost him. It holds the documents behind his business: the proposals, agreements and invoices, the outreach and follow-up emails, the scripts and checklists.",
        "One of the most useful pieces is Kevin’s current speaking agreement, including its force majeure clause for cancelled events. You get a copy.",
        "Kevin used to share the Vault only with his one-on-one coaching clients. He opened it up for speakers who aren’t ready for coaching and for aspiring speakers who are serious about building the business.",
      ],
    },
    {
      kind: "list",
      heading: "Samples from Kevin’s own business",
      intro: "Real examples of what Kevin sends, uses and receives.",
      items: [
        "Speaking proposals, speaking agreements and invoices",
        "Program descriptions and learning outcomes",
        "Presentation handouts",
        "Presentation slide decks",
        "Marketing one-pages (speaker marketing fliers)",
        "Presentation introductions",
        "A signature speech outline (Kevin’s Speaking Storyboard)",
        "Evaluations that build his prospect lists",
        "Completed pre-event questionnaires from clients",
        "Demo videos",
        "A demo video storyboard outline to create your own",
        "Customization timelines",
        "Phone scripts for closing the deal",
        "A TEDx speaker application",
        "An A/V checklist",
        "A speech preparation checklist",
        "Speech inquiries and Kevin’s responses",
        "Outreach emails to prospects",
        "Follow-up email templates",
        "Customized book interiors Kevin has made for clients",
      ],
    },
    {
      kind: "list",
      heading: "Templates to make your own",
      intro: "Start from Kevin’s version instead of a blank page.",
      items: [
        "Speaking proposals, agreements and invoices (the most important ones)",
        "Signature speech outlines",
        "Marketing one-pages",
        "Responses to email inquiries",
        "Email outreach messages",
        "Follow-up messages to event planners and attendees",
        "A demo video storyboard outline",
        "Evaluations to help you build your contact list",
        "Speech preparation",
        "Phone scripts",
        "Speech evaluations",
      ],
    },
    {
      kind: "options",
      heading: "Two ways to get the Vault",
      intro: "Take the Vault on its own, or add a bonus bundle with time with Kevin and more of his training.",
      options: [
        {
          name: "The Vault",
          format: "One year of access",
          summary: "Every sample and template in the Vault.",
          includes: ["All of the samples above", "All of the templates above"],
        },
        {
          name: "The Vault with bonus bundle",
          format: "One year of access",
          summary: "Everything in the Vault, plus the bonus bundle.",
          includes: [
            "Everything in the Vault",
            "Two 30-minute one-on-one coaching calls with Kevin",
            "One year of access to Kevin’s Association Directory",
            "The Paid to $peak webinar series",
            "Kevin’s TEDx training videos and templates",
            "One behind-the-scenes session with Kevin on a prospect call or at a speech",
            "A discount on Speaker Mastermind membership",
          ],
        },
      ],
    },
    {
      kind: "steps",
      heading: "How access works",
      steps: [
        {
          title: "Talk to Kevin",
          body: "Book a short call to see whether the Vault, or the Vault with the bonus bundle, is the right fit for where you are.",
        },
        {
          title: "Get your private link",
          body: "Once you’re in, you’ll get a welcome email with a private link to everything in the Vault.",
        },
        {
          title: "Make it yours",
          body: "Your access runs for one year. Download what you need and adapt each template to your own business.",
        },
      ],
    },
  ],
  cta: { label: "Talk to Kevin about the Vault", href: calendly.strategy },
  wixPrices: [
    "\"'The Vault' without $4,500+ in value | $799\" and \"'The Vault' including $4,500+ in value | $999\" (/vault, PayPal embed d46abc_24b2c0544248403f4bf650994caf53d3.html)",
    "\"Regular investment for 'The Vault' is $999\"; payment plans \"available upon request\" (/vault)",
    "Value figures attached to the bonus items on the purchaser page (not prices): Association Directory \"$899 value\", conference recordings \"$799 value\", two coaching calls \"$500 value\", 20+ webinars \"$2000+ value\" (/welcome)",
    "Bonus: \"25% discount on membership in Speaker mastermind Group\" (/vault, /welcome)",
  ],
  sources: ["/vault", "/welcome"],
  todo: [
    "Confirm this program is still offered and its current format.",
    "Where do past Vault buyers reach their resources now that /welcome will redirect here? Wix says access is a Google Drive link sent by email; confirm existing links keep working and how buyers find the 12-minute walkthrough video (Wix-hosted, so it disappears with Wix).",
    "Which bonus list is current? /vault lists webinar series access and TEDx training; the purchaser page /welcome instead lists one year of the International Speaker Summit, keynote conference recordings and 20+ webinars Kevin purchased.",
    "What is the Association Directory? Is it the Paid Event Calendar, or something else?",
    "Confirm the terms: one year of access, payment plans on request, delivery within 12 hours of payment, and the non-refundable policy Wix states.",
    "Is the Speaker Mastermind discount still 25 percent, and is the Mastermind still running?",
    "Is the speaking agreement in the Vault still the current version, and is it fine to describe its force majeure clause?",
  ],
};
