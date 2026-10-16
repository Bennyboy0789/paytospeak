import tedxSelfie from "@/assets/images/stage/tedx-cape-may-selfie.jpg";
import { calendly, type Program } from "./types";

/** TEDx speaker coaching: online training, a coaching bundle, and the TEDx Intensive. Source: /tedxspeakercoaching and Kevin's 2026 TEDx Coaching Options chart. */
export const tedx: Program = {
  href: "/coaching/tedx",
  name: "TEDx speaker coaching",
  card: "Find TEDx opportunities, apply well, and prepare your talk, through self-paced training, a coaching bundle, or the TEDx Intensive.",
  meta: {
    title: "TEDx speaker coaching",
    description:
      "TEDx coaching from Dr. Kevin C. Snyder, CSP, a multi-TEDx speaker and TEDx organizer: find TEDx events, submit stronger applications, and craft and deliver your talk.",
  },
  eyebrow: "TEDx coaching",
  headline: { lead: "Ready to take", highlight: "the TEDx stage?" },
  sub: "Need help finding opportunities and submitting a strong TEDx application? Already selected and want coaching to deliver a talk people remember? Wherever you are, Kevin helps you take the next step with confidence.",
  investment: "$297 to $7,500. Payment plans available.",
  photo: { src: tedxSelfie, alt: "Kevin smiling and pointing to the TEDxCapeMay stage in an empty auditorium before the event" },
  blocks: [
    {
      kind: "text",
      heading: "Coached by a TEDx speaker and organizer",
      body: [
        "Kevin has delivered multiple TEDx talks, organized a TEDx event, and personally mentored dozens of aspiring and selected TEDx speakers.",
        "He believes deeply in TED’s mission: ideas change everything. TEDx talks have changed his life, grown his speaking career and inspired his book, PURE Vulnerability. He has also seen how one strong idea can move an audience.",
        "Whether you’re searching for TEDx opportunities, preparing an application or already selected to speak, Kevin offers three TEDx coaching options to help you succeed.",
      ],
    },
    {
      kind: "list",
      heading: "What you’ll discover",
      intro: "Through Kevin’s TEDx training, coaching and resources:",
      items: [
        "How to find TEDx speaking opportunities and submit stronger applications",
        "What TEDx organizers are really looking for",
        "How to identify your one big idea to pitch",
        "How to craft and deliver a compelling, memorable TEDx talk",
        "Insider strategies, common mistakes, and tips for success",
      ],
    },
    {
      kind: "text",
      heading: "TEDx is highly competitive",
      body: [
        "With 2,500+ TEDx events each year around the world, and the right preparation and strategy, your future TEDx talk can become a powerful springboard for your speaking career.",
        "A TEDx talk gives you a global platform to share your message, build your credibility, and open doors to future speaking engagements. Your idea and your story deserve to be heard.",
      ],
    },
    {
      kind: "options",
      heading: "Three TEDx coaching options",
      intro: "Find the right level of support for where you are with TEDx. Payment plans are available on every option.",
      options: [
        {
          name: "TEDx online training",
          format: "Self-paced, on demand",
          price: "$297",
          summary: "For aspiring TEDx speakers who want a step-by-step guide and resources at their own pace.",
          includes: [
            "On-demand TEDx training modules",
            "A sample TEDx application",
            "Outreach templates and scripts",
            "A TEDx tracking spreadsheet",
            "Strategies to find TEDx opportunities",
            "A bonus Q&A webinar",
          ],
        },
        {
          name: "TEDx coaching bundle",
          format: "The training plus two 1:1 sessions",
          price: "$697",
          summary: "For aspiring TEDx speakers who want personalized guidance, feedback and a stronger application strategy.",
          includes: [
            "Everything in the online training",
            "Two private 1:1 coaching sessions with Kevin",
            "Personalized application guidance",
            "Guidance on your idea pitch",
            "Ongoing support",
          ],
        },
        {
          name: "TEDx Intensive",
          format: "Up to 10 coaching sessions",
          price: "$3,500 to $7,500",
          summary: "Comprehensive coaching for committed speakers who want complete support to get selected and deliver a powerful TEDx talk with confidence.",
          guarantee: "Guaranteed TEDx selection. Kevin’s TEDx Intensive guarantees you get selected as a TEDx speaker.",
          includes: [
            "Everything in the coaching bundle",
            "Up to 10 private 1:1 coaching sessions",
            "TEDx speech development and coaching",
            "Feedback between sessions",
            "The TEDx selection guarantee",
          ],
          cta: { label: "Book an Intensive call", href: calendly.tedxIntensive },
        },
      ],
    },
    {
      kind: "text",
      heading: "Prefer a smaller investment?",
      body: [
        "A five-session coaching option is also available for a lower investment, without the TEDx selection guarantee. Book a TEDx consult and ask Kevin for details.",
      ],
    },
    {
      kind: "videos",
      heading: "Watch Kevin’s TEDx talk",
      intro: "Kevin’s TEDxCapeMay talk, the story behind his book PURE Vulnerability.",
      videos: [{ youtubeId: "GbJaPqqV3A4", title: "Recovery from depression, eating disorder and sexual assault as a male | Kevin Snyder | TEDxCapeMay" }],
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
        "Kevin is not officially affiliated with, endorsed by, or compensated by TED or any TEDx event. His independent coaching and training programs are based on his firsthand experience as a multi-TEDx speaker, TEDx event organizer and TEDx speaker coach.",
      ],
    },
  ],
  cta: { label: "Book a TEDx consult", href: calendly.tedx },
  wixPrices: [
    "TEDx Online Training $297, TEDx Coaching Bundle $697, TEDx Intensive $3,500 to $7,500, payment plans available; a five-session option for a lower investment without the selection guarantee (2026 TEDx Coaching Options infographic on /tedxspeakercoaching). Shown on the page.",
    "TEDx Speaker Training $350 to $7,500, on-demand plus 1:1 coaching (2026 coaching options chart on /coachingoptions)",
    "Older: Option 3 TEDx Intensive $7,500; 5-session version $2,450 (/tedxspeakercoaching before October 2026)",
    "Older: TEDx Coaching Program $499 for three 45-minute sessions (2021 chart PDF); $499 (2019 chart PDF)",
    "Older: Strategy Session \"$100 discussion fee\", applied to the coaching program (/tedxspeakercoaching before October 2026)",
  ],
  sources: ["/tedxspeakercoaching", "/tedxtraining"],
  todo: [
    "What are the terms of the TEDx selection guarantee: what you must do to qualify, the time frame, and what happens if a client isn’t selected?",
    "Course buyers reached the training on the password-protected /tedxtraining page. Where should purchasers access it after the move?",
    "Keep the Wix-hosted intro video (“How to become a TEDx speaker”, 2:37)? It must be downloaded before Wix is cancelled.",
  ],
};
