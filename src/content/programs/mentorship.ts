import { calendly, type Program } from "./types";

/** Mentorship: monthly Pro Speaker, Emerging and Aspiring levels. */
export const mentorship: Program = {
  href: "/coaching/mentorship",
  name: "Mentorship",
  card: "Regular sessions with Kevin where you set the agenda. For speakers with some experience, or who have finished one of his coaching programs.",
  meta: {
    title: "Mentorship for speakers",
    description:
      "Monthly mentorship with Dr. Kevin C. Snyder, CSP. You set the agenda: your materials, your talk, your outreach. Three levels, from one session a month to three.",
  },
  eyebrow: "Mentorship",
  headline: { lead: "Mentorship is", highlight: "different from coaching." },
  sub: "Mentorship gives you regular time with Kevin to ask whatever you need, on an agenda you set. It’s built for speakers who already have some experience, or who have finished one of Kevin’s coaching programs and want continued support.",
  blocks: [
    {
      kind: "text",
      heading: "Mentorship or coaching?",
      body: [
        "As John Crosby put it, mentoring is “a brain to pick, an ear to listen, and a push in the right direction.”",
        "Mentorship gives you touchpoints with Kevin to ask any questions you have. The agenda of each session is whatever you want to talk about.",
        "Coaching is more structured. It follows Kevin’s Paid to $peak process step by step, with sessions scheduled weekly, every other week or monthly, and Kevin reviews your work between sessions. He offers one-on-one, group, virtual studio and TEDx coaching.",
        "New to speaking? Start with one of Kevin’s 1:1 coaching programs, which walk you through his process and help you set up your speaking business first.",
      ],
    },
    {
      kind: "options",
      heading: "Three levels",
      intro: "Every level is monthly. Choose by how much time with Kevin you want, and whether you want his review of your work between sessions.",
      options: [
        {
          name: "Pro Speaker",
          format: "Up to 3 sessions a month",
          summary: "For serious speakers who are fully committed to launching and growing a speaking business.",
          includes: [
            "Up to three mentorship sessions a month, typically 60 to 90 minutes",
            "Kevin’s review of your work between sessions, up to two hours in total",
            "Touchpoint access to Kevin for quick questions and guidance between sessions",
            "Use the time as you wish: work samples, your speech outline and presentation design, finding paid engagements, target audiences, TEDx and more",
            "Kevin can mentor your inquiry responses and your outreach to associations and meeting planners",
            "After three months: Kevin’s TEDx speaker training course, The Vault (a private Google Drive of what Kevin uses in his own speaking business) and the Paid to $peak Online Course",
          ],
        },
        {
          name: "Emerging",
          format: "Up to 2 sessions a month",
          summary: "For newer and emerging speakers who want to move faster on a budget.",
          includes: [
            "Up to two mentorship sessions a month, typically 60 to 90 minutes",
            "You decide the agenda: questions, your speech and presentation design, paid engagements, TEDx and more",
            "Kevin reviews your work and gives feedback in the moment, during the session",
            "No review of work between sessions",
          ],
        },
        {
          name: "Aspiring",
          format: "1 session a month",
          summary:
            "For speakers who want a consistent touchpoint with Kevin for questions, support and accountability, on a limited budget.",
          includes: [
            "One 50-minute mentorship session a month",
            "You decide the agenda",
            "No review of work or touchpoint access outside the session",
            "Kevin recommends reading his book, PAID to $PEAK, and bringing your questions to each session",
          ],
        },
      ],
    },
    {
      kind: "list",
      heading: "Terms",
      items: [
        "Three-month minimum agreement",
        "Customized options are available. Talk to Kevin about what you need.",
        "An application is required for all coaching and mentoring programs. After you book your first call, Kevin sends a short form to get to know you and your speaking goals.",
        "Kevin doesn’t offer free coaching. The first call is to explore which option fits.",
      ],
    },
    {
      kind: "text",
      heading: "How Kevin mentors",
      body: [
        "Kevin treats his mentees’ and coaching clients’ speaking businesses as if they were his own. He’s passionate about helping speakers because, when he started, he had nothing.",
      ],
    },
    {
      kind: "videos",
      heading: "See Kevin on stage",
      videos: [{ youtubeId: "9a1ntEqX3ns", title: "Speaking highlights from Dr. Kevin Snyder" }],
    },
  ],
  cta: { label: "Book a strategy session", href: calendly.strategy },
  wixPrices: [
    "PRO SPEAKER $997/mo (PayPal WWZ559J85AF36 on /mentorshipforspeakers)",
    "EMERGING $497/mo (PayPal 4ZVX8EZNGV3AQ on /mentorshipforspeakers; button mapping inferred from order)",
    "ASPIRING $249/mo (PayPal NYQQECV927CMJ on /mentorshipforspeakers; button mapping inferred from order)",
    "Pro Speaker bonus: TEDx Speaker training course \"$350 value\" and The Vault \"$750 value\" (/mentorshipforspeakers)",
  ],
  sources: ["/mentorshipforspeakers"],
  todo: [
    "Confirm this program is still offered and its current format.",
    "Are the three levels (Pro Speaker, Emerging, Aspiring) and their session counts and lengths still current?",
    "Is the three-month minimum still the rule?",
    "Does Pro Speaker still include the TEDx course, The Vault and the Online Course after three months?",
    "Application order: Wix said you book a call first and then get the application. The new site has /apply. Which comes first?",
    "Keep the Wix-hosted mentorship intro video (5:06)? It must be downloaded before Wix is cancelled.",
  ],
};
