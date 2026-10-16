import colorScreen from "@/assets/images/stage/stage-color-screen.jpg";
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
  sub: "Whether you’re delivering virtual keynotes, leading online workshops, recording videos or podcasts, or meeting prospective clients online, your setup reflects your professionalism. It can be the difference between getting overlooked and getting booked.",
  photo: { src: colorScreen, alt: "Kevin on a stage washed in rainbow light, pointing out to the audience", position: "66% 50%" },
  blocks: [
    {
      kind: "text",
      heading: "Look professional. Stand out. Get booked.",
      body: [
        "Professional virtual presentations take more than a webcam and a bookshelf background. Think professional lighting, crystal-clear audio, multiple camera angles, an engaging backdrop, and the confidence to present standing up.",
        "You don’t need to spend a fortune. One paid speaking engagement could cover the entire investment in your studio. Kevin’s did.",
        "And here’s something you might not expect: Kevin’s virtual studio consistently helps him land in-person speaking engagements, too.",
      ],
    },
    {
      kind: "text",
      heading: "From amateur to professional: how Kevin built his studio",
      body: [
        "During the 2020 pandemic, Kevin’s speaking business changed overnight. Every in-person engagement he had for that year was cancelled.",
        "Like many speakers, he struggled with virtual presentations at first. His lighting, background, camera angles and overall setup were far from professional, and he didn’t even have a Zoom account until 2020. Looking back, he’s embarrassed by it. Had he acted sooner, his speaking business, virtual and in person, would have rebounded faster.",
        "Then he realized virtual events weren’t going away. They would stay after the pandemic as another opportunity and revenue stream. To compete for virtual engagements, he needed to look and present like a professional, and he treated it as a learning curve: walking his talk, with the growth mindset he teaches in his keynotes.",
        "He studied other studio setups, hired a virtual studio coach and followed their step-by-step advice. He turned one corner of a room at home into a dedicated studio. His first DIY shiplap backdrop cost less than $250 and took about five hours to build. He started with one camera, then added professional lighting, audio, a second camera angle and an ATEM Mini video switcher. The multi-camera view became a game changer.",
        "He started recording short clips from his ShiftThinker™ keynote and posting them on YouTube and social media. Soon after, he landed a $7,500 virtual training series contract that paid for the studio. Then another virtual engagement, then a hybrid one, and another.",
        "Meeting planners, executives and schools consistently told him he had the best setup of all the speakers they were considering. He has also recorded two audiobooks in the studio instead of paying for studio time.",
        "What took him nearly two isolating, frustrating months to figure out, he can help you do in a fraction of the time.",
      ],
    },
    {
      kind: "downloads",
      heading: "Free equipment list",
      intro: "Not sure what equipment to buy or where to start? Kevin put together three virtual studio equipment packages for different budgets, including one for less than $1,000, so you avoid costly mistakes.",
      files: [
        {
          label: "Equipment list for setting up your virtual speaking studio",
          href: "/files/Virtual_Studio_Equipment_List.pdf",
          note: "Three budget options, with recommended equipment, pricing and purchasing links.",
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
          title: "Not sure where to start? Book a strategy session",
          body: "A complimentary Paid to $peak strategy session to talk through your studio goals and vision. It’s a brief introductory conversation to explore your needs, not a coaching session.",
        },
        {
          title: "Get Kevin’s recommendation",
          body: "Based on that conversation, Kevin recommends which coaching option and which of the three studio packages fits you best.",
        },
        {
          title: "Already know you need coaching?",
          body: "Jump straight in and book a 1-hour coaching session or a 3-hour bundle to plan and build your studio with Kevin.",
        },
      ],
    },
    {
      kind: "videos",
      heading: "Studio tutorials",
      intro: "See Kevin’s studio and how he runs it.",
      videos: [
        { youtubeId: "_ZmSE_7jLOo", title: "Virtual studio demo" },
        { youtubeId: "eVrwfhnhTxQ", title: "How to set up a home virtual studio: create a professional space, select equipment, and bring it together" },
        { youtubeId: "CHI2K1GmH2Y", title: "How to use and record with the ATEM Mini switcher: how Kevin switches between camera angles" },
      ],
    },
    {
      kind: "videos",
      heading: "Bonus: tech tips for in-person speaking",
      intro: "Your technology matters at in-person events too. Kevin shares practical tech tips, equipment recommendations and behind-the-scenes strategies to help you avoid surprises and present professionally onsite.",
      videos: [
        { youtubeId: "QTXC0rOxOKs", title: "Speaker tips: how to set yourself up for success before your speaking engagement" },
        { youtubeId: "mj5zhnEYUTw", title: "How to use your laptop as a confidence (downstage) monitor" },
        { youtubeId: "lSUxn0Sju8I", title: "How to set up your own confidence monitor" },
        { youtubeId: "F0DBL_BrIls", title: "Screen behind you? How to always look toward your audience" },
        { youtubeId: "VX8Ca4RyZhQ", title: "What’s inside Kevin’s tech travel bag for in-person events" },
        { youtubeId: "a2IKuienk9g", title: "Onsite speaking tips" },
      ],
    },
  ],
  cta: { label: "Book a studio session", href: calendly.virtualStudio },
  investment: "Coaching by the hour or in a 3-hour bundle. The strategy session is complimentary.",
  wixPrices: [
    "No rates on the October 2026 /virtualandtechsolutions rewrite. Earlier: $250/hour or $650 for a 3-hour bundle (/virtualandtechsolutions)",
    "$249/hour or $475 for a 3-hour bundle (older version, /copy-of-virtual-studio-setup)",
    "15-minute Strategy Session described as complimentary (both pages)",
  ],
  sources: ["/virtualandtechsolutions", "/copy-of-virtual-studio-setup", "/studioquestionandanswer"],
  todo: [
    "Hourly and 3-hour bundle rates for studio coaching: your October rewrite removed them. Publish $250 an hour and $650 for three hours, or leave rates for the call?",
    "Keep the Wix-hosted virtual studio video (7:25) and the studio progression photos? Both must be downloaded before Wix is cancelled.",
    "The “How to Set up a Virtual Studio” live Q&A replay on /studioquestionandanswer is a private YouTube link for purchasers. Where should buyers find it now?",
  ],
};
