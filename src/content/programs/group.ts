import { calendly, type Program } from "./types";

/** Group coaching: the 5-Week Challenge ("Paid to $peak in 5 Weeks") plus the in-person group formats. */
export const group: Program = {
  href: "/coaching/group",
  name: "Group coaching",
  card: "Paid to $peak in 5 Weeks: a cohort that works through Kevin’s five-module model together, with a live Q&A with Kevin every week.",
  meta: {
    title: "Group coaching: Paid to $peak in 5 Weeks",
    description:
      "Kevin Snyder’s 5-Week Challenge: five weekly 90-minute live Q&A sessions, the full Paid to $peak Online Course, and a cohort of speakers working through the same model.",
  },
  eyebrow: "Group coaching",
  headline: { lead: "Five weeks, five modules,", highlight: "one cohort." },
  sub: "The 5-Week Challenge is Kevin’s group coaching program. You work through his Paid to $peak model one module a week, bring your questions to a live 90-minute Q&A, and build your speaking business alongside other speakers doing the same work.",
  blocks: [
    {
      kind: "text",
      heading: "How the 5-Week Challenge works",
      body: [
        "For five weeks, Kevin is your coach. Each week focuses on one module of his Paid to $peak model, the same framework behind his book and online course, and ends with a live group Q&A built around your questions.",
        "You get the full Paid to $peak Online Course before the first session, so you can watch each module ahead of time and send your questions in advance. Kevin also shares templates, samples and scripts that aren’t in the book or the course.",
        "You join a cohort: a group of speakers who start together and finish together. You can connect with and support each other during the five weeks and after. Kevin calls it a community within a community, and he considers it essential.",
        "It’s for speakers at any level, brand new, emerging or seasoned, who are committed to building paid speaking into their business. Not feeling ready is fine. Getting you ready is the point.",
        "Kevin runs the program twice a year as “Paid to $peak in 5 Weeks,” and offers a TEDx version as well.",
      ],
    },
    {
      kind: "list",
      heading: "What you’ll learn",
      intro: "Kevin’s Paid to $peak framework teaches you how to:",
      items: [
        "Prepare your business and your mindset",
        "Design and deliver a strong speech",
        "Find paid speaking opportunities",
        "Verify and identify organizations that can pay",
        "Set your speaking fee",
        "Use the strategies Kevin has used to build and grow his own speaking business",
      ],
    },
    {
      kind: "steps",
      heading: "The five modules",
      intro: "One module a week. Each module has a free worksheet, on the resources page at /resources.",
      steps: [
        {
          title: "Module 1: Where to start",
          body: "The many ways to get paid, why great speakers solve problems, how to differentiate yourself, and discovering your call to action.",
        },
        {
          title: "Module 2: Developing your program",
          body: "Debunking speaker myths, the elements of your program, creating a speaker one-page, designing your presentation, and finding places to practice.",
        },
        {
          title: "Module 3: Finding speaking opportunities",
          body: "Finding speaking gigs, outreach, speaking to students, getting referrals, and branding yourself.",
        },
        {
          title: "Module 4: Getting paid",
          body: "Going from free to fee, knowing when to charge, setting your speaking fee, the three-tiered speaking proposal, and a five-step process for contracts.",
        },
        {
          title: "Module 5: Consistent paid bookings",
          body: "Staying motivated, finding the right support and a mentor, showing client appreciation, and setting realistic goals.",
        },
      ],
    },
    {
      kind: "options",
      heading: "Two ways to join",
      intro: "Both options include the full course and every live session. Plus adds one-on-one time with Kevin.",
      options: [
        {
          name: "Basic",
          format: "Group cohort, five weekly sessions",
          summary: "The full group program: the course, the live Q&As and the cohort.",
          includes: [
            "A cohort community of speakers working through the program together",
            "Five weekly 90-minute live Q&A sessions with Kevin on Zoom",
            "Send questions in advance or ask them live",
            "Recordings of every session",
            "The full Paid to $peak Online Course",
            "Three months of Kevin’s Speaker Mastermind",
            "Bonus templates, samples and scripts not included in the online course",
          ],
        },
        {
          name: "Plus",
          format: "Everything in Basic, with 1:1 coaching",
          summary: "Kevin works with you one-on-one and reviews your materials. Places are limited because of the 1:1 calls.",
          includes: [
            "Everything in Basic",
            "Two 1:1 coaching sessions with Kevin",
            "Kevin’s Paid to $peak Webinar Series",
            "Kevin’s TEDx training videos and templates, plus an additional session",
            "Virtual studio training, plus an additional group session",
            "A Speaker Assessment: Kevin reviews your speaker website, demo video, program information and more",
            "The Paid to $peak Sailing Retreat: a half day with Kevin on his 40-foot sailboat, six people in total",
            "A full year of the Speaker Mastermind",
          ],
        },
      ],
    },
    {
      kind: "text",
      heading: "Schedule",
      body: [
        "Cohorts meet once a week for five weeks. Each session is a full 90 minutes live with Kevin on Zoom. Sessions have run on Wednesdays at 12 p.m. Eastern (9 a.m. Pacific), unless a better time emerges for the cohort or Kevin’s speaking calendar changes.",
        "Can’t make a session? Every session is recorded, and you can send your questions in advance so Kevin can answer them during the Q&A.",
        "After the final session, you continue with Kevin’s Speaker Mastermind for ongoing support. Ask Kevin when the next cohort starts.",
      ],
    },
    {
      kind: "steps",
      heading: "How to enroll",
      steps: [
        {
          title: "Talk to Kevin about the next cohort",
          body: "Book a strategy session to ask about dates, the difference between Basic and Plus, and whether the program fits where you are.",
        },
        {
          title: "Confirm your seat",
          body: "Pay in full, or pay a deposit and arrange a payment plan.",
        },
        {
          title: "Get set up",
          body: "Once your seat is confirmed, you receive an email with access to the online course and details on how to prepare for the first session.",
        },
        {
          title: "Prepare for Module 1",
          body: "Read or listen to the Preface and Module 1 of Kevin’s book, PAID to $PEAK, and work through the free Module 1 worksheet.",
        },
      ],
    },
    {
      kind: "options",
      heading: "In-person group formats",
      intro: "Kevin has also run the Paid to $peak model as in-person events for small groups.",
      options: [
        {
          name: "Paid to $peak Intensive",
          format: "Two full days in person, once a year",
          summary:
            "Two full days working directly with Kevin in person on the strategies, insider knowledge and systems for getting booked and getting paid. A hands-on experience for five people who want to launch or accelerate a speaking business.",
          includes: [
            "Two full days with Kevin, in person",
            "A group of five people",
            "Follow-up coaching after the event",
            "The Paid to $peak Online Course",
            "Resources from The Vault, Kevin’s library of templates and samples",
          ],
        },
        {
          name: "Paid to $peak Academy",
          format: "One-day seminar, once a year",
          summary:
            "One full, live day that walks you through the fundamentals of building a speaking business, face to face with a group of speakers who are committed to the same goal.",
          includes: [
            "A full day of live teaching on the whole process",
            "A cohort community of fellow attendees",
            "Two hours of personalized coaching to review your materials and plan how to find speaking opportunities",
          ],
        },
      ],
    },
    {
      kind: "faq",
      heading: "Questions",
      items: [
        {
          q: "What is a cohort?",
          a: "The group of speakers who go through each 5-Week Challenge together. You start together and finish together, and you can connect with and support each other during the program and after.",
        },
        {
          q: "What if I don’t feel ready?",
          a: "That’s the point of the program. Five weeks of focused work with Kevin is designed to get you ready.",
        },
        {
          q: "What if I can’t make a live session?",
          a: "Every session is recorded. Send your questions in advance and Kevin will answer them during the Q&A.",
        },
        {
          q: "How long are the live sessions, and when are they?",
          a: "A full 90 minutes live with Kevin on Zoom. Questions sent in advance are queued by priority, and he takes questions live too. Sessions have run on Wednesdays at 12 p.m. Eastern (9 a.m. Pacific) unless a better time emerges for the cohort.",
        },
        {
          q: "How are the sessions structured?",
          a: "Week 1 focuses on Module 1, week 2 on Module 2, and so on. You get the whole online course in advance, so you can watch each module before its Q&A and send questions ahead. The live session focuses on your questions.",
        },
        {
          q: "Do I have enough time to be ready for the next cohort?",
          a: "Yes. Each week focuses on one module so you understand the concepts. Review the module, do your best to work on it, and you’ll have questions to bring. You also learn from the rest of the cohort.",
        },
        {
          q: "How do I prepare for the first session?",
          a: "Read or listen to the Preface and Module 1 of PAID to $PEAK (in print, eBook or audiobook) and work through the Module 1 worksheet, free on the resources page. You get more details after you enroll.",
        },
        {
          q: "Is this only for professional speakers?",
          a: "No. It’s for anyone, at any level of speaking experience, who isn’t satisfied with their current results and wants to grow their paid speaking. Brand new or seasoned, what matters is where you want to be.",
        },
        {
          q: "How many people are in a cohort?",
          a: "It depends. Plus is limited to a smaller number of people because it includes 1:1 calls with Kevin.",
        },
        {
          q: "Are payment plans available?",
          a: "Yes. Pay a deposit and arrange a plan with Kevin. Full payment is due by the third session.",
        },
        {
          q: "Can I pay now for a later cohort?",
          a: "Yes. You can confirm your place in a future cohort now.",
        },
        {
          q: "What if I need one-on-one help?",
          a: "Kevin offers 1:1 coaching alongside the group program. See the 1:1 options on the coaching page, then book a strategy session to talk them through.",
        },
      ],
    },
  ],
  cta: { label: "Book a strategy session", href: calendly.strategy },
  wixPrices: [
    "PLUS $2,500 (PayPal form KQK4XBJ79MXFC on /5weekchallenge)",
    "BASIC $1,500 (PayPal form KQK4XBJ79MXFC on /5weekchallenge)",
    "Payment plan deposit $250 (PayPal form KQK4XBJ79MXFC on /5weekchallenge)",
    "Group coaching $1,500 or $2,500 (current coaching options chart PNG on /coachingoptions)",
    "5-Week Group Program $3,500, shown with a \"$10,000+ value\" (2019 chart PDF on /1-on-1-coaching)",
    "5-week program normal price $3,450, discount $1,750 through November 20 (2017 events page /copy-of-coaching-services)",
    "Paid to $peak Group Academy $1,500, held quarterly (2021 chart PDF on /copy-of-1-1-coaching-options)",
    "Paid to $peak Intensive $4,500 for the 2-day in-person experience (current coaching options chart PNG on /coachingoptions)",
    "Paid to SPEAK Academy (one day) normal price $775, discount $495 through November 20, includes 2 hours coaching (/copy-of-coaching-services)",
    "Paid to $peak Academy event shown as a \"$999 value\" (2019 chart PDF on /1-on-1-coaching)",
  ],
  sources: [
    "/5weekchallenge",
    "/copy-of-coaching-services",
    "/5weekchallengeondemand",
    "/5-week-challenge-basic-2023",
    "/5-week-challenge-on-demand-plus-2023",
    "/5weekchallengeplus2025",
  ],
  todo: [
    "Confirm this program is still offered and its current format.",
    "Is the 5-Week Challenge still run twice a year? Older Wix pages said quarterly. When does the next cohort start, and is Wednesday at 12 p.m. Eastern still the slot?",
    "Confirm the Basic and Plus inclusions. Wix text gives Basic 3 months of the Speaker Mastermind; the Plus graphic says a full year. Which is current?",
    "Is the Sailing Retreat still part of Plus? Are the virtual studio and TEDx add-on sessions still included?",
    "Are payment plans still offered, with full payment due by session three? Who handles enrollment and payment plans now (Wix named Sarah Edwards)?",
    "Is there still a TEDx version of the 5-Week Challenge? If so, how does it differ?",
    "Is the Paid to $peak Intensive (two days in person, five people, once a year) still offered? Where is it held?",
    "Is the one-day Paid to $peak Academy retired? It last appeared on the 2017 events page and the 2021 chart.",
    "The Wix page promised a “GUARANTEE” and refunds if you had no paid engagements. Those are not carried over. What is the actual refund policy?",
    "Does the referral reward (a thank-you payment plus a donation to a charity of the referrer’s choice) still run? It is not shown here.",
    "The two 5-Week Challenge YouTube videos (aIcIPqnF6_c, 9rtIrL5TfaQ) are not embedded because they likely describe the old guarantee. Approve them as they are, or re-record?",
    "The free module worksheets are referenced on /resources but are not in public/files yet. Approve hosting the five module PDFs and the Module 1 Word file.",
  ],
};
