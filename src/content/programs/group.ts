import blueStage from "@/assets/images/stage/blue-stage-wide.jpg";
import { calendly, type Program } from "./types";

/**
 * Group coaching: the 5-Week Challenge ("Paid to $peak in 5 Weeks") plus the 2-day in-person Intensive.
 * Source: /5weekchallenge as Kevin rewrote it in October 2026, and his 2026 coaching options chart.
 */
export const group: Program = {
  href: "/coaching/group",
  name: "Group coaching",
  card: "The 5-Week Challenge: Kevin’s group program, offered twice a year, with live weekly coaching and his paid speaking guarantee.",
  meta: {
    title: "Group coaching: the 5-Week Challenge",
    description:
      "Kevin Snyder’s 5-Week Challenge: live weekly group coaching, the full Paid to $peak Online Course, a cohort of speakers, and Kevin’s paid speaking engagement guarantee. Offered twice a year.",
  },
  eyebrow: "Group coaching",
  headline: { lead: "Accept the Challenge. Follow the process.", highlight: "Get paid." },
  sub: "Offered only twice a year, the 5-Week Challenge is Kevin’s group coaching program: an affordable alternative to private 1:1 coaching, with a 1:1 option included. It teaches you how to find, book and earn paid speaking engagements with his Paid to $peak framework.",
  investment: "$1,500 or $2,500. Payment plans available.",
  photo: { src: blueStage, alt: "Kevin speaking on a large blue-lit conference stage with three screens behind him" },
  blocks: [
    {
      kind: "text",
      heading: "Why it’s called the 5-Week Challenge",
      body: [
        "Follow the process, do the work between sessions, and Kevin guarantees you will book paid speaking engagements within six months. He challenges you to prove him wrong.",
        "The Paid to $peak framework behind it was developed through 1,500+ audiences and more than a million people reached. It’s based on Kevin’s book, PAID to $PEAK: the course gives you the roadmap, and the live coaching sessions help you put it into action.",
        "You also get live weekly coaching sessions with Q&A, recordings with evergreen access, practical templates, useful resources, and a supportive community of fellow speakers.",
      ],
    },
    {
      kind: "text",
      heading: "Not feeling ready? Good.",
      body: [
        "That’s exactly why Kevin offers the 5-Week Challenge: to get you ready. You don’t have to have everything figured out. You just have to be committed to taking action.",
        "For five weeks, Kevin personally coaches, guides and supports you. He answers your questions, helps you get past obstacles, and shares insider strategies and bonus resources you won’t find in his book or online course.",
        "Because the Challenge runs only twice a year, there’s no reason to put your speaking goals on hold. Your next paid speaking engagement could be closer than you think.",
      ],
    },
    {
      kind: "list",
      heading: "Who should accept the Challenge",
      intro: "Whether you’re new to speaking, building momentum or already experienced, the Challenge is for anyone serious about turning their message into income. You’ll learn how to:",
      items: [
        "Identify organizations with speaking budgets",
        "Set your speaking fee with confidence",
        "Turn your expertise into a profitable speaking business",
        "Find, book and earn paid speaking engagements",
      ],
    },
    {
      kind: "options",
      heading: "Two ways to accept the Challenge",
      intro: "Both include the full course and every live session. Plus adds one-on-one time with Kevin.",
      options: [
        {
          name: "Basic",
          format: "Group cohort, five weekly sessions",
          price: "$1,500",
          summary: "The full group program: the course, the live coaching and the cohort.",
          guarantee: "Do the work and book paid speaking engagements within six months, or get a refund.",
          includes: [
            "The entire Paid to $peak Online Course",
            "A weekly group coaching session with Q&A",
            "Recordings of each session",
            "The Paid to $peak Speaker Mastermind",
            "Extra templates, samples and scripts",
          ],
        },
        {
          name: "Plus",
          format: "Everything in Basic, with 1:1 coaching",
          price: "$2,500",
          summary: "Kevin works with you one-on-one and reviews your materials. Places are limited because of the 1:1 calls.",
          guarantee: "Do the work and book paid speaking engagements within six months, or get a refund.",
          includes: [
            "Everything in Basic",
            "Two 1:1 coaching sessions with Kevin",
            "The Paid to $peak Webinar Series",
            "TEDx training videos and templates",
            "A Speaker Assessment: Kevin reviews your speaking materials, such as your presentation information, website, demo video and program",
            "And more",
          ],
        },
      ],
    },
    {
      kind: "text",
      heading: "Upcoming cohort",
      body: [
        "Session 1: Monday, November 2. Session 2: Monday, November 9. Session 3: Monday, November 16. Session 4: Monday, November 23. Session 5: Monday, November 30.",
        "Each session is a full 90 minutes live with Kevin on Zoom, Mondays at 12 p.m. Eastern (9 a.m. Pacific), unless a better time emerges for the cohort.",
        "Can’t make a session? That’s fine. Every session is recorded, and you can send your questions in advance so Kevin can answer them during the Q&A.",
        "After the final session on November 30, you continue with Kevin’s Speaker Mastermind and coaching sessions for ongoing support.",
      ],
    },
    {
      kind: "videos",
      heading: "Hear it from Kevin",
      videos: [
        { youtubeId: "aIcIPqnF6_c", title: "Learn more about the PAID to $PEAK 5-Week Challenge" },
        { youtubeId: "9rtIrL5TfaQ", title: "Details about the PAID to $PEAK 5-Week Challenge" },
      ],
    },
    {
      kind: "steps",
      heading: "How to enroll",
      steps: [
        {
          title: "Accept the Challenge",
          body: "Picture paid speaking engagements on your calendar this fall and next spring. Not sure Basic or Plus is right? Book a strategy session and talk it through with Kevin.",
        },
        {
          title: "Confirm your seat",
          body: "Pay in full, or pay a deposit and request a payment plan. Full payment is due by the third session.",
        },
        {
          title: "Get set up",
          body: "Once your seat is confirmed, you receive an email with access to the online course, how to prepare for session one, and more.",
        },
        {
          title: "Prepare for Module 1",
          body: "Read or listen to the Preface and Module 1 of Kevin’s book, PAID to $PEAK, and work through the free Module 1 worksheet.",
        },
      ],
    },
    {
      kind: "steps",
      heading: "The five modules",
      intro: "One module a week. Each module has a free worksheet on the resources page.",
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
      heading: "Prefer to work in person?",
      intro: "Kevin’s most immersive and comprehensive coaching experience.",
      options: [
        {
          name: "Paid to $peak Intensive",
          format: "Two full days in person",
          price: "$4,500",
          summary:
            "Two full days working directly with Kevin in person to learn proven strategies, insider knowledge and systems to get booked and get paid. A deep dive, with hands-on coaching and implementation.",
          includes: [
            "Two full days with Kevin, in person",
            "Follow-up coaching after the program",
            "The Paid to $peak Online Course",
            "Templates, tools and resources from The Vault",
            "Marketing, booking and business strategy",
            "Contract review and customization",
            "The Speaker Mastermind",
          ],
        },
      ],
    },
    {
      kind: "faq",
      heading: "Questions",
      items: [
        {
          q: "What are the guarantee details?",
          a: "If you do the work, you get results. Doing the work means completing all the checklists at the end of each module and taking the complimentary follow-up 1:1 coaching session with Kevin. If you do all of that and don’t have a paid speaking engagement within six months, you get a refund. Kevin compares it to a gym membership: if you don’t do the work, don’t expect results.",
        },
        {
          q: "What is a cohort?",
          a: "The group of speakers who go through each 5-Week Challenge together. You start together and finish together, and you can connect with and support each other during the Challenge and after. It’s a community within a community.",
        },
        {
          q: "What if I don’t feel ready?",
          a: "That’s the entire point. The 5-Week Challenge is designed to get you ready.",
        },
        {
          q: "What if I can’t make the weekly live sessions?",
          a: "Every session is recorded. Send your questions in advance and Kevin will answer them during the Q&A.",
        },
        {
          q: "How long are the live sessions, and when are they?",
          a: "A full 90 minutes live with Kevin on Zoom. Questions sent in advance are queued by priority, and he takes questions live too. Unless a better time emerges for the cohort, sessions are on Mondays at 12 p.m. Eastern (9 a.m. Pacific).",
        },
        {
          q: "How are the sessions structured?",
          a: "Week 1 focuses on Module 1, week 2 on Module 2, and so on. You get the whole online course in advance, so you can watch each module before its Q&A and send questions ahead. The live session focuses on your questions.",
        },
        {
          q: "Do I have enough time to be ready for the next cohort?",
          a: "Yes. Each week focuses on one module so you understand the concepts. Review the module, do your best to work on it, and you’ll have questions to bring. You also learn from others in the cohort.",
        },
        {
          q: "How do I prepare for the first session?",
          a: "The first session focuses on Module 1 of PAID to $PEAK, available in print, eBook and audiobook. Read or listen to the Preface and Module 1 and work through the Module 1 worksheet, free on the resources page. You get more details after you enroll.",
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
          a: "Yes. Pay a deposit and request a payment plan. Full payment must be made by the third session.",
        },
        {
          q: "Can I pay now to lock in the price for a later cohort?",
          a: "Yes. Smart.",
        },
        {
          q: "Is it tax deductible?",
          a: "Professional coaching and education may qualify as tax-deductible business expenses. Ask your CPA or tax advisor whether that applies to you.",
        },
        {
          q: "Is there a referral reward?",
          a: "Yes. Refer someone who enrolls in the 5-Week Challenge and you receive $150, and Kevin donates $100 to a charity of your choice in your honor: $250 in rewards for every referral who enrolls.",
        },
        {
          q: "What if I need one-on-one help?",
          a: "Kevin offers 1:1 coaching alongside the group program. Review the 1:1 options on the coaching page, then book a strategy session to talk them through.",
        },
      ],
    },
  ],
  cta: { label: "Book a strategy session", href: calendly.strategy },
  wixPrices: [
    "Group coaching $1,500 or $2,500 (2026 coaching options chart on /coachingoptions). Shown on the page as Basic and Plus.",
    "PLUS $2,500, BASIC $1,500, payment plan deposit $250 (PayPal form KQK4XBJ79MXFC on /5weekchallenge)",
    "Paid to $peak Intensive $4,500 for the 2-day in-person experience (2026 coaching options chart). Shown on the page.",
    "Older: 5-Week Group Program $3,500 with a \"$10,000+ value\" (2019 chart PDF); normal price $3,450, discount $1,750 (2017 events page)",
    "Older: Paid to $peak Group Academy $1,500, held quarterly (2021 chart PDF); one-day Academy $775, discount $495 (2017 events page). Not on the 2026 chart, so not shown.",
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
    "Payment: Wix sends deposits through PayPal and payment-plan requests to Sarah Edwards (Info@Inspiractivesolutions.com). Until payments are wired, the page sends people to a strategy session. Is that right, and should Sarah be named?",
    "Where and how often is the 2-day in-person Intensive held, and how many people per group?",
    "Is there still a TEDx version of the 5-Week Challenge? The /coaching copy says there is.",
  ],
};
