import { calendly, type Program } from "./types";

/** TEDx speaker coaching: online course, coaching bundle, and the TEDx Intensive. */
export const tedx: Program = {
  href: "/coaching/tedx",
  name: "TEDx speaker coaching",
  card: "Find TEDx opportunities, apply well, and prepare your talk, through a self-paced course, a coaching bundle, or a full intensive.",
  meta: {
    title: "TEDx speaker coaching",
    description:
      "TEDx coaching from Dr. Kevin C. Snyder, CSP: how to find TEDx events, apply and follow up, and prepare your talk. Self-paced training, a 1:1 bundle, or the TEDx Intensive.",
  },
  eyebrow: "TEDx coaching",
  headline: { lead: "Your idea worth spreading,", highlight: "on a TEDx stage." },
  sub: "Whether you’re looking for your first TEDx opportunity or you’ve been selected and need to build the talk, Kevin coaches you through finding events, applying, and preparing to deliver.",
  blocks: [
    {
      kind: "text",
      heading: "Why TEDx",
      body: [
        "Kevin believes in TED’s mission: ideas worth spreading. Like any professional talk on a stage or in a training room, a TEDx talk should share content that makes people better.",
        "Watching TED talks has helped Kevin personally and professionally, and your talk can do the same for the people who hear it. Done for the right reasons, speaking on a TEDx stage changes the speaker and the audience.",
        "Don’t pursue TEDx only for credibility, exposure or a demo video. Those are real benefits for a professional speaker, but they’re byproducts. If you’re authentic about your idea worth spreading and it fits TED’s mission, Kevin will give you his time and experience to learn the process, find opportunities, get your application right and prepare your talk.",
        "TEDx is selective. Follow the process, submit properly, prepare properly, and do the work.",
      ],
    },
    {
      kind: "list",
      heading: "Questions Kevin helps you answer",
      items: [
        "How do you get selected for TEDx?",
        "What criteria are TEDx organizers looking for?",
        "Do you submit an application, or do they find you?",
        "You’re applying but not getting selected. Why?",
        "What is your idea worth spreading, and how do you develop one?",
        "How should you prepare for a TEDx talk?",
        "Once your talk is published, how can you help it spread?",
      ],
    },
    {
      kind: "list",
      heading: "What the training covers",
      items: [
        "The difference between TED and TEDx",
        "Why TED’s mission matters when you apply and shape your talk",
        "The one thing you need to get crystal clear about",
        "What TEDx organizers are looking for, and what they aren’t",
        "How to find TEDx speaking opportunities",
        "How to apply, how to be found, and how to follow up",
      ],
    },
    {
      kind: "options",
      heading: "Three ways to work with Kevin on TEDx",
      intro: "Start with the self-paced course, add private coaching, or work with Kevin from search to stage.",
      options: [
        {
          name: "Online TEDx training",
          format: "Self-paced, on demand",
          summary:
            "A training video that walks you through how to become a TEDx speaker: what organizers look for, how to prepare, how to find TEDx events, and how to apply and be found.",
          includes: [
            "The on-demand TEDx training video",
            "A sample TEDx application to prepare you for any submission",
            "A TEDx tracking spreadsheet to stay organized and follow up properly",
            "A sample outreach message to TEDx organizers",
            "A recorded TEDx webinar where Kevin answers questions",
          ],
        },
        {
          name: "TEDx coaching bundle",
          format: "Two private 1:1 sessions",
          summary: "For the committed future TEDx speaker who wants Kevin’s eyes on their idea and application.",
          includes: ["Two private 1:1 coaching sessions with Kevin", "The full online TEDx training and its templates"],
        },
        {
          name: "TEDx Intensive",
          format: "Up to 10 coaching sessions",
          summary:
            "Kevin’s signature TEDx program, for the aspiring TEDx speaker who is serious about getting selected and delivering a strong talk. Once you’re selected, it covers crafting your talk and preparing the right way.",
          includes: [
            "Up to 10 coaching sessions with Kevin",
            "Access to Kevin between sessions",
            "Kevin’s review of your work, with feedback",
            "The full online TEDx training",
            "Payment plans can be arranged",
            "A 5-session version is available on a tighter budget, with more limited time from Kevin between sessions",
          ],
        },
      ],
    },
    {
      kind: "downloads",
      heading: "Free download",
      files: [
        {
          label: "Sample TEDx speaker application",
          href: "/files/Sample_TEDx_Application.pdf",
          note: "See the kind of questions TEDx organizers ask before you write your own.",
        },
      ],
    },
    {
      kind: "text",
      heading: "A note on TED",
      body: [
        "Kevin has no affiliation with the TED organization and is not compensated in any way by TED or any TEDx event. His training and coaching share his own insights and experience with TEDx.",
        "The aim is for you to feel inspired, equipped and confident about becoming a TEDx speaker and preparing your talk.",
      ],
    },
    {
      kind: "text",
      heading: "Why Kevin coaches",
      body: [
        "When Kevin started speaking, he never asked for help. He saw coaching as a sign of weakness. Realizing that asking for wisdom from people who have done it before is a sign of strength changed his speaking. He had to let his ego go.",
        "Not sure which option fits? Book a TEDx consult and talk it through with Kevin.",
      ],
    },
  ],
  cta: { label: "Book a TEDx consult", href: calendly.tedx },
  wixPrices: [
    "Option 1 Online TEDx training course $297 (/tedxspeakercoaching, paid via paypal.me/PassionProjectLLC)",
    "Option 2 TEDx Bundle Coaching Session $697 (/tedxspeakercoaching, \"purchase\" link goes to calendly.com/snyder/tedx)",
    "Option 3 TEDx Intensive Program $7,500, payment plans can be arranged (/tedxspeakercoaching)",
    "TEDx Intensive reduced to 5 sessions $2,450, payment plans can be arranged (/tedxspeakercoaching)",
    "TEDx Speaker Training $350 to $5,000, on-demand plus 1:1 coaching (current coaching options chart PNG on /coachingoptions)",
    "TEDx Coaching Program $499 for three 45-minute sessions (2021 chart PDF on /copy-of-1-1-coaching-options)",
    "TEDx Coaching Program $499 (2019 chart PDF on /1-on-1-coaching)",
    "Strategy Session \"$100 discussion fee\", applied to the coaching program (/tedxspeakercoaching)",
    "TEDx Speaker training course shown as a \"$350 value\" (Pro Speaker mentorship tier on /mentorshipforspeakers)",
  ],
  sources: ["/tedxspeakercoaching", "/tedxtraining"],
  todo: [
    "Confirm this program is still offered and its current format.",
    "Which options remain: the online TEDx course, the 2-session bundle, the 10-session TEDx Intensive, and the 5-session version? Is the 2021 format (three 45-minute sessions) retired?",
    "Verify your TEDx experience so the page can state it: how many TEDx talks (Wake Forest and Cape May?), the TEDxRaleigh lead organizer or curator role, and how many TEDx events and speakers you have coached (Wix says both “dozens” and “hundreds”).",
    "OK to feature your TEDxCapeMay talk (YouTube GbJaPqqV3A4)? It covers sensitive personal subject matter, so it is not embedded yet.",
    "Wix linked your most recent TEDx talk to the book PURE Vulnerability. Want that story on this page?",
    "Is the strategy session for TEDx free, or does it carry the discussion fee (credited to coaching) that this Wix page described?",
    "The selection “GUARANTEE” and refund promise for the TEDx Intensive (and for 1:1 clients) are not carried over. What is the actual refund policy?",
    "Course buyers reached the training on the password-protected /tedxtraining page. Where should purchasers access it after the move?",
    "Keep the Wix-hosted intro video (“How to become a TEDx speaker”, 2:37)? It must be downloaded before Wix is cancelled.",
  ],
};
