import audienceCheering from "@/assets/images/stage/audience-cheering.jpg";
import { calendly, type Program } from "./types";

/**
 * Speaker Mastermind: Kevin's monthly community for speakers.
 * Source: the /mastermind sales page as Kevin rewrote it in October 2026, and his Mastermind graphics.
 * /welcometomastermind is the member onboarding page (sources only). It exposes a private
 * Zoom room and Facebook group: never publish either.
 */
export const mastermind: Program = {
  href: "/mastermind",
  name: "Speaker Mastermind",
  card: "An affordable, ongoing community for speakers at every level: a monthly 90-minute live coaching and Q&A with Kevin, speaking opportunities and peer support.",
  meta: {
    title: "Speaker Mastermind",
    description:
      "Dr. Kevin C. Snyder’s Paid to $peak Speaker Mastermind: a monthly 90-minute live coaching and Q&A on Zoom, a private community of speakers, and shared speaking opportunities. $50 a month or $475 a year.",
  },
  eyebrow: "Speaker Mastermind",
  headline: { lead: "Don’t build your speaking business", highlight: "alone." },
  sub: "Whether you want your first paid engagement, extra income from speaking part-time, or to grow an established career, you deserve a community that supports your goals. Connect. Grow. Inspire. Get booked. Get paid.",
  investment: "$50 a month or $475 a year. Complimentary for Kevin’s coaching clients.",
  photo: { src: audienceCheering, alt: "Conference attendees in matching shirts cheering and filming on their phones during one of Kevin’s keynotes" },
  blocks: [
    {
      kind: "text",
      heading: "A rising tide lifts every speaker",
      body: [
        "Professional speaking can be challenging, isolating and frustrating. That’s why Kevin created the Paid to $peak Speaker Mastermind: an affordable, ongoing community for speakers at all levels who want to learn, connect, improve their skills, discover opportunities, and get paid to speak.",
        "Each month the group comes together to ask questions, exchange ideas, share speaking opportunities, celebrate wins and help one another move forward.",
        "You don’t have to speak full time to make a meaningful impact, or to get paid for your message.",
      ],
    },
    {
      kind: "list",
      heading: "What you receive as a member",
      items: [
        "A monthly live “ask me anything” coaching and Q&A with Kevin: 90 minutes on Zoom, with questions sent in advance getting priority",
        "Calls for speakers, conference announcements and speaking opportunities shared with the group",
        "Exclusive resources: speaker tips, helpful resources, training and insights from Kevin’s experience",
        "A supportive community of like-minded speakers for feedback, encouragement and accountability",
        "Monthly meeting recaps with key takeaways, shared resources and action steps",
        "Recordings of every session, so you can catch up on your own schedule",
      ],
    },
    {
      kind: "text",
      heading: "Why Kevin believes community matters",
      body: [
        "Kevin has been part of a professional speaker mastermind group for more than eight years. The relationships, feedback, encouragement and shared experience have been invaluable to his speaking. That’s the kind of community he wants to create for you.",
        "When he started speaking, he had no speaker community, no one sharing speaking opportunities, no accountability or support network, no peers to trade ideas and feedback with, and no behind-the-scenes insight from meeting planners. He figured everything out on his own, assumed asking for help was a sign of weakness, and nearly quit more than once.",
        "Looking back, a supportive community of speakers could have saved him years of frustration, costly mistakes and missed opportunities. Community is essential. It’s also an accelerator.",
      ],
    },
    {
      kind: "options",
      heading: "How to join",
      intro: "Monthly memberships can be cancelled any time. Annual memberships are paid up front.",
      options: [
        {
          name: "Monthly",
          format: "Billed monthly, cancel any time",
          price: "$50 a month",
          summary: "Every live session, the private community, recordings and recaps.",
          includes: ["Monthly live coaching and Q&A with Kevin", "The private online community", "Recordings and monthly recaps"],
        },
        {
          name: "Annual",
          format: "Paid once a year",
          price: "$475 a year",
          summary: "All the same benefits as monthly, at a saving compared with paying month to month.",
          includes: ["Everything in the monthly membership", "A saving on twelve monthly payments"],
        },
        {
          name: "Coaching clients",
          format: "Included with qualifying programs",
          price: "Complimentary",
          summary: "Speaker Mastermind membership is included for qualifying Paid to $peak coaching clients.",
          includes: ["Included with Kevin’s qualifying coaching programs", "See the options on the coaching page"],
        },
      ],
    },
    {
      kind: "faq",
      heading: "Frequently asked questions",
      items: [
        {
          q: "When do we meet?",
          a: "Once a month for a 90-minute live coaching and Q&A session on Zoom. Questions submitted in advance get priority.",
        },
        {
          q: "What if I can’t attend live?",
          a: "No problem. Recordings and meeting recaps are posted in the private community, so you can watch and learn on your own schedule.",
        },
        {
          q: "Do I have to be an existing coaching client?",
          a: "No. The Speaker Mastermind is open to anyone who wants to improve their speaking, explore paid opportunities, and connect with other speakers.",
        },
        {
          q: "Do I need to want a full-time speaking career?",
          a: "Not at all. Whether your goal is one paid engagement, a few each year, part-time income or a full-time speaking career, you’re welcome.",
        },
        {
          q: "Where does the community connect?",
          a: "In a private online community, where members connect between meetings, ask questions, exchange ideas, and share resources and speaking opportunities.",
        },
        {
          q: "How does payment work?",
          a: "Memberships are processed through PayPal with automatic billing, and other credit card arrangements are available. Monthly memberships can be cancelled any time. Annual memberships are paid up front.",
        },
        {
          q: "What happens after I join?",
          a: "Once your membership is confirmed, you receive instructions for joining the private community and the upcoming sessions.",
        },
      ],
    },
  ],
  cta: { label: "Talk to Kevin about the Mastermind", href: calendly.strategy },
  wixPrices: [
    "Monthly $50, cancel any time; Annual $475; complimentary for Kevin's qualifying coaching clients (2026 \"Speaker Mastermind Enrollment Options\" graphic and PayPal DFUGW699GBHFY / J9KKN2HJ6Q2PG on /mastermind). Shown on the page.",
    "Older: \"Trial Speaker Mastermind Group - $19\" (/copy-of-paid-to-usdpeak-book); \"MASTERMIND GROUP $999\" (2019 chart PDF)",
    "25% Mastermind discount offered with the Vault bonus bundle (/vault)",
    "Member referral reward: \"$49 for every member you refer who pays an annual membership\" (/welcometomastermind). Not rendered.",
  ],
  sources: ["/mastermind", "/welcometomastermind"],
  todo: [
    "Join buttons: Wix uses PayPal subscription buttons. Until payments are wired, this page sends people to a strategy session. Link the PayPal buttons directly instead?",
    "Where do current members find the Zoom link, the schedule and the community now that /welcometomastermind will redirect here? That page publishes the private Zoom room and Facebook group, so send them by email instead.",
  ],
};
