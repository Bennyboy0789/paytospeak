import { calendly, type Program } from "./types";

/** Virtual studio and tech coaching: studio setup coaching, the free equipment list, and tech-tip videos. */
export const virtualStudio: Program = {
  href: "/coaching/virtual-studio",
  name: "Virtual studio coaching",
  card: "Set up a professional home studio on your budget, and pick up the tech habits Kevin uses when he presents in person.",
  meta: {
    title: "Virtual studio and tech coaching",
    description:
      "Coaching from Kevin Snyder on setting up a professional virtual speaking studio, plus a free equipment list with three budget options and tech tips for presenting in person.",
  },
  eyebrow: "Virtual studio and tech coaching",
  headline: { lead: "Present like a professional,", highlight: "on screen and on stage." },
  sub: "Planners who hire virtual speakers expect a professional setup. Kevin helps you plan and build a home studio that fits your budget, and shares the tech habits he relies on when he presents in person.",
  blocks: [
    {
      kind: "text",
      heading: "What planners expect",
      body: [
        "To be hired and paid as a virtual speaker, you need to present professionally. That means standing up, no screen share, no bookshelf backdrop, good lighting, good sound and upgraded equipment.",
        "Your studio matters for in-person work too. It shapes how planners see you long before you walk into their room.",
        "Setting up his own studio took Kevin nearly two months. Knowing what he knows now, he can help you set yours up in a day.",
      ],
    },
    {
      kind: "text",
      heading: "How Kevin built his studio",
      body: [
        "When in-person events stopped in March 2020, Kevin started where most speakers did: a virtual background and no real plan. Looking back, he’s embarrassed by it, and he wishes he had acted sooner.",
        "Once it was clear virtual events were here to stay, he treated a studio as an investment in his business. He turned one corner of a spare room into a dedicated space and built a simple, clean shiplap backdrop himself, a DIY project that took about five hours on a small budget.",
        "His first studio videos used a single camera angle. He later upgraded to a switcher and a multi-camera setup. Today, speakers ask him about his studio after almost every virtual presentation: how he designed it, what equipment he bought, and how it all works.",
      ],
    },
    {
      kind: "downloads",
      heading: "Free equipment list",
      intro: "Start here. Kevin’s list lays out three budget options for a virtual speaking studio, so you buy the right equipment the first time.",
      files: [
        {
          label: "Equipment list for setting up your virtual speaking studio",
          href: "/files/Virtual_Studio_Equipment_List.pdf",
          note: "Three budget options, with pricing and a link for every item.",
        },
      ],
    },
    {
      kind: "steps",
      heading: "How studio coaching works",
      steps: [
        {
          title: "Download the equipment list",
          body: "Look through the three budget options so you know where you’re starting from.",
        },
        {
          title: "Book a 15-minute strategy session",
          body: "This isn’t a coaching call. It’s a short conversation about where you are with your studio and what your speaking goals are.",
        },
        {
          title: "Get Kevin’s recommendation",
          body: "Based on that conversation, Kevin recommends which of the three studio options fits you best.",
        },
        {
          title: "Book your coaching",
          body: "If you decide to go ahead, schedule a 1-hour coaching session or a 3-hour bundle to plan and build your studio with Kevin. He can also discuss options for setting up your equipment onsite.",
        },
      ],
    },
    {
      kind: "videos",
      heading: "Studio tutorials",
      intro: "See Kevin’s studio and how he runs it.",
      videos: [
        { youtubeId: "_ZmSE_7jLOo", title: "Virtual studio demo" },
        { youtubeId: "eVrwfhnhTxQ", title: "How to set up a home virtual studio" },
        { youtubeId: "CHI2K1GmH2Y", title: "How to use and record with the ATEM Mini switcher" },
      ],
    },
    {
      kind: "videos",
      heading: "Tech tips for presenting in person",
      intro: "The setup Kevin uses when he presents onsite, so the technology works for you instead of against you.",
      videos: [
        { youtubeId: "mj5zhnEYUTw", title: "How to use your laptop as a confidence (downstage) monitor" },
        { youtubeId: "lSUxn0Sju8I", title: "How to set up your own confidence monitor" },
        { youtubeId: "F0DBL_BrIls", title: "Screen behind you? How to always look toward your audience" },
        { youtubeId: "VX8Ca4RyZhQ", title: "What’s inside Kevin’s tech travel bag for in-person events" },
        { youtubeId: "a2IKuienk9g", title: "Onsite speaking tips" },
      ],
    },
  ],
  cta: { label: "Book a virtual studio session", href: calendly.virtualStudio },
  wixPrices: [
    "$250/hour or $650 for a 3-hour bundle (/virtualandtechsolutions)",
    "$249/hour or $475 for a 3-hour bundle (older version, /copy-of-virtual-studio-setup)",
    "15-minute Strategy Session described as complimentary (both pages)",
  ],
  sources: ["/virtualandtechsolutions", "/copy-of-virtual-studio-setup", "/studioquestionandanswer"],
  todo: [
    "Confirm this program is still offered and its current format.",
    "Current rates: the two Wix versions show different hourly and 3-hour bundle rates. Which are right?",
    "Which booking link should this page use? The current Wix page sends the strategy session to calendly.com/snyder/paidtospeak and coaching to /hourlycoaching and /3-hour-bundle; the older page used /virtualstudiocoaching.",
    "Do you still offer onsite equipment setup? It appears only on the older Wix page.",
    "Is the equipment list (three budget options) still current, or does it need an update?",
    "Keep the Wix-hosted virtual studio video (7:25) and the studio progression photos? The video must be downloaded before Wix is cancelled.",
    "The “How to Set up a Virtual Studio” live Q&A replay on /studioquestionandanswer is a private YouTube link for purchasers. Where should buyers find it now?",
  ],
};
