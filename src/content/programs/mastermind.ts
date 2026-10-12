import { calendly, type Program } from "./types";

/**
 * Speaker Mastermind: Kevin's monthly peer group.
 * Source: hidden /mastermind sales page, plus the "More programs" card text used across Wix.
 * /welcometomastermind is the member onboarding page (sources only). It exposes a private
 * Zoom room and Facebook group: never publish either.
 */
export const mastermind: Program = {
  href: "/mastermind",
  name: "Speaker Mastermind",
  card: "A peer group of speakers with a monthly live Q&A with Kevin, a private community, and call-for-speaker announcements.",
  meta: {
    title: "Speaker Mastermind",
    description:
      "Dr. Kevin C. Snyder’s Speaker Mastermind: a monthly live Q&A with Kevin, a private community of speakers, speaking opportunities and accountability.",
  },
  eyebrow: "Speaker Mastermind",
  headline: { lead: "Speaking can be lonely.", highlight: "It doesn’t have to be." },
  sub: "The Speaker Mastermind is a peer group of speakers who meet with Kevin every month, share opportunities, trade feedback and hold each other accountable. It’s what you make of it.",
  blocks: [
    {
      kind: "text",
      heading: "What Kevin didn’t have",
      body: [
        "When Kevin started speaking, he had no community of other speakers. No mentor to call, no leads, no one holding him accountable, no peers to test ideas on, and no one passing along training or what meeting planners were saying behind the scenes.",
        "Looking back, he says that network would have saved him years of struggling on his own. Until you break through, speaking can be isolating and full of doubt. The Mastermind is the group he wishes he’d had.",
      ],
    },
    {
      kind: "list",
      heading: "What you get as a member",
      items: [
        "A monthly live group Q&A with Kevin on Zoom, recorded for anyone who can’t attend",
        "A monthly webinar from Kevin",
        "Membership in a private online community",
        "Speaking opportunities and call-for-speakers announcements",
        "Other speakers to connect and partner with",
        "The chance to ask for feedback and form accountability and support groups",
        "Behind-the-scenes communication between Kevin and meeting planners",
      ],
    },
    {
      kind: "steps",
      heading: "How it works",
      steps: [
        {
          title: "Join the community",
          body: "Once you join, you get access to the private community, where recordings, discussions and announcements live.",
        },
        {
          title: "Send your questions in advance",
          body: "Each month Kevin hosts a live group Q&A on Zoom. Questions sent ahead of time get priority.",
        },
        {
          title: "Catch up on the recording",
          body: "Can’t make it live? The recording is posted in the community.",
        },
        {
          title: "Put the group to work",
          body: "Ask the group for feedback, form accountability and support groups, and connect with speakers working toward the same things. The more you put in, the more you get out.",
        },
      ],
    },
    {
      kind: "faq",
      items: [
        {
          q: "Who is the Mastermind for?",
          a: "Speakers who want a community around their speaking business: people to learn from, share opportunities with, and stay accountable to between conversations with Kevin.",
        },
        {
          q: "How often does the group meet?",
          a: "Kevin hosts a live group Q&A once a month on Zoom, alongside a monthly webinar. Recordings are posted in the private community.",
        },
        {
          q: "Is it monthly or annual?",
          a: "Both. You can join month to month or for a year, and cancel any time.",
        },
        {
          q: "I’m one of Kevin’s coaching clients. Is it included?",
          a: "Yes. The Mastermind is included for Kevin’s coaching clients.",
        },
      ],
    },
  ],
  cta: { label: "Talk to Kevin about the Mastermind", href: calendly.strategy },
  wixPrices: [
    "\"Monthly | $50\" and \"Annual | $475\", both cancel any time; \"Complimentary for Kevin's coaching clients\" (/mastermind, PayPal DFUGW699GBHFY and J9KKN2HJ6Q2PG)",
    "\"Trial Speaker Mastermind Group - $19\" (/copy-of-paid-to-usdpeak-book, PayPal EBM9VHXWFABVL)",
    "\"MASTERMIND GROUP $999\" (2019 coaching chart PDF)",
    "25% Mastermind discount offered with the Vault bonus bundle (/vault)",
    "Member referral reward: \"$49 for every member you refer who pays an annual membership\" (/welcometomastermind). Not rendered.",
  ],
  sources: ["/mastermind", "/welcometomastermind"],
  todo: [
    "Confirm this program is still offered and its current format.",
    "Where do current members find the Zoom link, the Q&A schedule and the community now that /welcometomastermind will redirect here? That page publishes the private Zoom room and Facebook group, so send them by email instead.",
    "Confirm the Q&A schedule and length. /mastermind says a 90-minute group Q&A; the member page says the first Monday of each month, 12:00 to 12:30 pm.",
    "Is there still a monthly webinar? The Wix program cards say “webinar each month”; /mastermind itself only mentions the Q&A.",
    "Is the private community still a Facebook group?",
    "Is the Mastermind still included for coaching clients, in the online course Plus, and in the group program? Wix says 3 months for group Basic and a full year for group Plus.",
    "What is the PDF linked from /mastermind (d46abc_7dcf671820e84b78be248481b86b3523.pdf)? It wasn’t downloaded.",
    "Is the member referral reward still running?",
  ],
};
