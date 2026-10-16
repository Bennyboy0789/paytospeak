import blueCurtain from "@/assets/images/stage/stage-blue-curtain.jpg";
import { calendly, type Program } from "./types";

/**
 * Paid to $peak online course (BASIC and PLUS) and the webinar series.
 * Marketing page only: the course and webinars stay wherever Kevin hosts them (no LMS).
 * Sources: /onlinecourse (canonical), /onlinecoursedetails, /webinarseriesvideos (canonical),
 * /overview, /copy-of-webinar-series-overview. Purchaser pages are listed in `sources` only.
 */
export const onDemand: Program = {
  href: "/on-demand",
  name: "On-demand training",
  card: "The Paid to $peak online course and webinar series: Kevin’s five-module system on video, plus recorded webinars on the business side of speaking. Watch on your own schedule.",
  meta: {
    title: "On-demand course and webinars",
    description:
      "The Paid to $peak online course and webinar series from Dr. Kevin C. Snyder, CSP: five video modules and recorded webinars on building a paid speaking business, on your own schedule.",
  },
  eyebrow: "On demand",
  headline: { lead: "Kevin’s system,", highlight: "on your schedule." },
  sub: "The Paid to $peak online course walks you through Kevin’s speaking business model in five video modules. The webinar series goes deeper on the parts most speakers have to learn the hard way. Watch when you want, where you want, as often as you want.",
  photo: { src: blueCurtain, alt: "Kevin on stage in front of a blue curtain, arms out mid-story", position: "50% 30%" },
  blocks: [
    {
      kind: "text",
      heading: "Built on the book",
      body: [
        "The online course is built on Kevin’s book, PAID to $PEAK: How to Become a Professional Speaker, and works alongside it. Every video is on demand, so you move through it at your own pace.",
        "Kevin’s view is simple. A goal is step one. Step two is finding the system that closes the gap between where you are and where you want to be. Step three is applying it. The course is that system, laid out module by module.",
        "It’s for speakers, coaches, trainers and consultants who want to use the platform to grow their business, whether you’re new to speaking or already presenting professionally.",
      ],
    },
    {
      kind: "list",
      heading: "What the framework teaches you",
      items: [
        "How to prepare yourself and your business",
        "How to design a powerful speech",
        "How to find paid speaking opportunities",
        "How to verify which organizations can pay",
        "How to build a part-time or full-time speaking business",
      ],
    },
    {
      kind: "steps",
      heading: "The five modules",
      intro: "Each module has its own videos, checklist and slide deck. Here’s what each one covers.",
      steps: [
        {
          title: "Module 1: Where to start",
          body: "Where to begin, the many ways speakers get paid, why great speakers solve problems, how to differentiate yourself, and how to find your call to action.",
        },
        {
          title: "Module 2: Developing your program",
          body: "Debunking speaker myths, the elements of your program, how to create a speaker one-page, tips for designing your presentation, and how to find practice opportunities.",
        },
        {
          title: "Module 3: Finding speaking opportunities",
          body: "Finding speaking gigs, how to do outreach, speaking to students, how to get referrals, and branding yourself.",
        },
        {
          title: "Module 4: Getting Paid to $peak",
          body: "Going from free to fee, knowing when to charge, how to set your speaking fee, the three-tiered speaking proposal, and Kevin’s five-step process for contracts.",
        },
        {
          title: "Module 5: Consistent paid bookings",
          body: "Staying motivated, finding the right support, ideas for showing client appreciation, finding a mentor, and setting realistic goals.",
        },
      ],
    },
    {
      kind: "options",
      heading: "Two ways to take the course",
      intro: "Basic gives you the full course. Plus adds Kevin’s TEDx and virtual studio training and a place in his Speaker Mastermind.",
      options: [
        {
          name: "Basic",
          format: "Self-paced, on demand",
          summary: "The complete five-module course with the materials that go with it.",
          includes: [
            "Video access to all five modules",
            "A checklist for each module",
            "A slide deck for each module",
            "Paid to $peak book files",
            "Bonus downloadable files from the book",
            "A coaching call with Kevin when you finish",
          ],
        },
        {
          name: "Plus",
          format: "Self-paced, on demand",
          summary: "Everything in Basic, with extra training and community.",
          includes: [
            "Everything in Basic",
            "TEDx speaker training video",
            "A sample TEDx application and tracking spreadsheet",
            "Virtual studio training",
            "Membership in Kevin’s Speaker Mastermind",
          ],
        },
      ],
    },
    {
      kind: "videos",
      heading: "Start with the orientation",
      intro: "Two orientation videos from the course, plus Kevin’s overview of the book and course. If you only watch one, watch the full orientation.",
      videos: [
        { youtubeId: "OB41BkcG5Io", title: "Full orientation (28 min)" },
        { youtubeId: "HBc509T3hYw", title: "Short orientation (13 min)" },
        { youtubeId: "QeGtQgt3bu0", title: "How to become a professional speaker: an overview of the book and online course" },
      ],
    },
    {
      kind: "steps",
      heading: "The Paid to $peak webinar series",
      catalogue: true,
      intro: "Recorded webinars from Kevin’s virtual studio on the business of speaking: how to launch into paid speaking, run the business, and get the most from every contract. The webinars are 60-minute recordings, and most come with the slide deck so you can follow along and take notes. Buy a single webinar or the whole series. The full series includes a 30-minute one-on-one coaching call with Kevin.",
      steps: [
        {
          title: "How to become a paid professional speaker",
          body: "An overview of the whole Paid to $peak process: how Kevin launched into professional speaking and how he runs his speaking business today.",
        },
        {
          title: "How to become a TEDx speaker",
          body: "What it takes to prepare a TEDx submission, and how to find TEDx speaking opportunities.",
        },
        {
          title: "How to find paid speaking opportunities",
          body: "Kevin’s process for finding the events that hire and pay speakers.",
        },
        {
          title: "How to become a published author and leverage books in speaking contracts",
          body: "You don’t need a book to start speaking. Kevin explains why a book matters once you want to be paid consistently, and how he builds books into his speaking contracts.",
        },
        {
          title: "Backend systems Kevin uses in his speaking business",
          body: "The systems that hold Kevin’s speaking business together, many of them free. Kevin calls this one of the most important videos he has shared.",
        },
        {
          title: "How to maximize your speaking fee in proposals and contracts",
          body: "Maximizing your fee isn’t upselling. It’s adding value. Kevin shows how he offers meeting planners three options in every speaking proposal.",
        },
        {
          title: "Paid speaking opportunities at colleges",
          body: "College speaking is where Kevin started. How to find speaking opportunities at colleges and universities, schools and educator conferences.",
        },
        {
          title: "How to set up a virtual studio on a budget",
          body: "Backdrop, lighting, sound, video and a multi-camera ATEM Mini switcher, shown from in front of the camera and behind it. For every level of tech comfort. Kevin’s equipment list is included.",
        },
        {
          title: "How to set your speaking fee",
          body: "Knowing when to start charging, and how to decide what to charge.",
        },
        {
          title: "How to use and record with the ATEM Mini switcher",
          body: "A virtual studio extra: the Pro and Standard versions side by side, covering recording, multiview, picture in picture, and every HDMI input and output. Useful if you’re thinking of buying one or wrestling with the one you have.",
        },
        {
          title: "Show and tell: virtual home studios with Mike Mooney",
          body: "A virtual studio extra: Kevin and Mike Mooney, who both started with almost no tech knowledge, walk you through their home studios. Camera angles, space, backdrops, the learning curve, and where to start.",
        },
      ],
    },
    {
      kind: "text",
      heading: "Not ready for the course yet?",
      body: [
        "The module worksheets that go with the book are free on the Resources page. Work through Module 1 and you’ll know quickly whether you want the full course.",
        "If you’ve already been through Paid to $peak and want one-on-one feedback, Kevin’s coaching and mentorship programs pick up where the course leaves off.",
      ],
    },
  ],
  cta: { label: "Talk to Kevin", href: calendly.strategy },
  wixPrices: [
    "Online course: PLUS $450, BASIC $350 (/onlinecourse and /onlinecoursedetails page text, PayPal Smart Buttons: PLUS(+) Course 450 USD, Basic Course 350 USD)",
    "Online course: \"$497 One-Time Payment\" (current coaching comparison chart image on /coachingoptions)",
    "Online course: \"On Demand PAID to $PEAK course ($499)\" (sample 1:1 coaching program PDF)",
    "Webinar series: single webinar $50.00 each, nine titles (/webinarseriesvideos, /overview, /copy-of-webinar-series-overview PayPal PM3N69ZJUS8EG)",
    "Webinar series: all recordings plus a 30-minute 1:1 coaching call $250.00 (same PayPal button)",
    "Course referral reward: $100 per referral ($50 to the referrer, $50 to a charity) (/onlinecourse). Not rendered.",
  ],
  sources: [
    "/onlinecourse",
    "/onlinecoursedetails",
    "/webinarseriesvideos",
    "/overview",
    "/copy-of-webinar-series-overview",
    "/webinarseries",
    "/webinarcolleges",
    "/copy-of-use-on-demand-course-1",
    "/trainings",
    "/ondemand",
    "/paidplus",
    "/onlinespeakingcourse",
    "/webinars",
  ],
  todo: [
    "Confirm this program is still offered and its current format.",
    "Where do past buyers of the course (Basic and Plus) and the webinar series reach their videos now that the Wix purchaser pages (/ondemand, /paidplus, /trainings, /onlinespeakingcourse, /webinars, /webinarseries, /webinarcolleges) will redirect here? An email with the links would work.",
    "Where will new buyers watch the course, and is access still unlimited? This site won’t host it.",
    "Confirm what Plus includes today (TEDx training video, sample TEDx application and tracking spreadsheet, virtual studio training, Speaker Mastermind), and that the Mastermind is still running.",
    "Confirm the coaching call on finishing the course, and the 30-minute call included with the full webinar series.",
    "Confirm the module topic lists. They come from the five “What you’ll learn” columns on /onlinecourse.",
    "Is half of every webinar series purchase still donated to the Foundation of HOPE? If so, we can add that back with a link.",
    "Are any webinars missing or retired? The Wix list names nine webinars plus two virtual studio videos (ATEM Mini, Mike Mooney show and tell).",
    "Are the webinar recordings on YouTube unlisted? Can any be shown publicly as a sample?",
    "Is the course referral reward still running?",
  ],
};
