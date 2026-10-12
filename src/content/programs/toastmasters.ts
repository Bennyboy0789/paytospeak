import type { Headline } from "../shared";
import { calendly, type Program } from "./types";

/**
 * Toastmasters. Carried over from /accred (Accredited Speaker page), the two host
 * pages /toastmasterskeynote and /toastmasterkeynotesponsor, and the club page
 * /copy-of-speaking-professionally-toast. /spt and /speakingprofessionallytoastmasters
 * were members-only club pages on Wix (no public content); they redirect here.
 *
 * Keynote booking belongs to kevincsnyder.com, so this page only points there.
 * The lower half of /accred repeated the coaching page (Speech Review, Speaker
 * Assessment, comparison chart, program cards); that lives on /coaching now.
 */
export const toastmasters: Program = {
  href: "/toastmasters",
  name: "Toastmasters",
  card: "For Toastmasters thinking about going pro: the Accredited Speaker program, a club for speakers building a business, and coaching for the next step.",
  meta: {
    title: "Toastmasters and the Accredited Speaker program",
    description:
      "Dr. Kevin C. Snyder is a Toastmasters International Accredited Speaker. Interviews on the Accredited Speaker program, the Speaking Professionally Toastmasters club, and coaching for Toastmasters going pro.",
  },
  eyebrow: "Toastmasters",
  headline: { lead: "For Toastmasters", highlight: "thinking about going pro." } satisfies Headline,
  sub: "Kevin is a Toastmasters International Accredited Speaker and an NSA Certified Speaking Professional, one of only nine people worldwide to hold both. Here’s what he shares with fellow Toastmasters.",
  blocks: [
    {
      kind: "text",
      heading: "The Accredited Speaker designation",
      body: [
        "Accredited Speaker is a professional speaking designation from Toastmasters International. Kevin holds it, and he has hosted conversations about the program for Toastmasters who are considering it.",
        "Below is his Accredited Speaker keynote, an interview about how he got there, and two conversations he hosted for anyone thinking about applying.",
      ],
    },
    {
      kind: "videos",
      heading: "Kevin’s Accredited Speaker keynote",
      videos: [
        { youtubeId: "zisYulotgmw", title: "Kevin’s Accredited Speaker keynote (Toastmasters International)" },
        { youtubeId: "cXW5WZmwy-U", title: "Meet Accredited Speaker Kevin Snyder, interviewed by Radhi Spear" },
      ],
    },
    {
      kind: "videos",
      heading: "Thinking about applying?",
      intro:
        "If you’re considering the Accredited Speaker program, start with these. Kevin asks the people who run it, and the people who’ve earned it, what it takes.",
      videos: [
        { youtubeId: "0yF4nyLAYxQ", title: "Kevin talks with the Accredited Speaker program co-chairs, Rochelle Rice and Greg Wood" },
        { youtubeId: "np9WkZaF6S8", title: "Accredited Speakers Forrest Tuff and Paul Artale share tips on applying" },
      ],
    },
    {
      kind: "list",
      heading: "Speaking Professionally Toastmasters",
      intro:
        "A Toastmasters club for aspiring and working professional speakers, built around practice, feedback and the business of speaking. Current Toastmasters and non-Toastmasters are both welcome, whether you’re just starting out or already speaking professionally. The club meets online on the first Tuesday of each month, 12:00 to 1:30 p.m. Eastern.",
      items: [
        "A peer group of speakers who are serious about growing a speaking business",
        "Open to all levels and types of speakers",
        "Practice opportunities in a safe space every month",
        "Group feedback to strengthen your speeches",
        "The chance to learn from the feedback other members get",
        "A private Facebook group between meetings, where members post videos for feedback and share speaking opportunities",
        "Business education topics at each meeting",
      ],
    },
    {
      kind: "text",
      heading: "Hosting a Toastmasters event?",
      body: [
        "As his calendar allows, Kevin speaks for Toastmasters Districts and special Toastmasters events. While he’s in town, he can also deliver a keynote or training workshop for a local company a day or two before or after.",
        "There’s also a keynote sponsor option. A company sponsors Kevin’s keynote at the Toastmasters event, and Kevin delivers a separate keynote or training program for that company before or after it. The sponsor is recognized during the event, and someone from the company can introduce Kevin.",
        "Keynote bookings are handled on Kevin’s speaking site, kevincsnyder.com.",
      ],
    },
    {
      kind: "downloads",
      heading: "Links",
      files: [
        {
          label: "Book Kevin to speak",
          href: "https://kevincsnyder.com",
          note: "Keynotes for Toastmasters Districts, events and sponsors, at kevincsnyder.com.",
        },
        {
          label: "Speaking Professionally Toastmasters",
          href: "https://7012881.toastmastersclubs.org/",
          note: "The club’s website.",
        },
        {
          label: "The Accredited Speaker program",
          href: "https://www.toastmasters.org/membership/accredited-speaker",
          note: "Requirements and how to apply, on toastmasters.org.",
        },
        {
          label: "Toastmasters Magazine, January 2023",
          href: "https://toastmasterscdn.azureedge.net/medias/files/department-documents/magazine/magazine-pdfs/2023-magazine-pdfs/magazine-january-2023-s.pdf",
          note: "The issue Kevin appeared in. PDF from Toastmasters International.",
        },
        {
          label: "The Toastmasters Podcast, episode 220",
          href: "https://www.toastmasterspodcast.com/posts/-220-introducing-dr-kevin-c-snyder-toastmasters-newest-accredited-speaker.html",
          note: "“Introducing Dr. Kevin C. Snyder, Toastmasters’ Newest Accredited Speaker.”",
        },
      ],
    },
    {
      kind: "text",
      heading: "Ready to speak for a fee?",
      body: [
        "Toastmasters gives you the reps. Getting paid to speak takes a business behind the talk: a clear message, the right materials, and a way to reach the people who book speakers.",
        "Kevin hired a coach himself after years of trying to do it all alone. If you’re coachable and serious about speaking, start with a strategy session and talk through where you are.",
      ],
    },
  ],
  cta: { label: "Book a strategy session", href: calendly.strategy },
  wixPrices: [
    "/accred (lower half, copied from the coaching page): Speaker Assessment “Only $499”; Speech Review “at an hourly coaching rate”.",
    "/copy-of-speaking-professionally-toast: club benefit “Over $2,500 in professional speaking resources” (value claim).",
    "Proposal PDF d46abc_87309f… (not published): “Full-year membership” in Speaking Professionally Toastmasters “($1,000 value)”.",
    "Sample coaching program PDF: “Inclusion in Speaking Professionally Toastmasters (included for 6 months) 300”.",
  ],
  sources: [
    "/accred",
    "/toastmasterskeynote",
    "/toastmasterkeynotesponsor",
    "/copy-of-speaking-professionally-toast",
    "/spt",
    "/speakingprofessionallytoastmasters",
  ],
  todo: [
    "Confirm this page’s content is current.",
    "Wix says you were the 90th Accredited Speaker in program history and the only person to earn it in 2022 (the host pages say “the only Toastmaster in the world”). Can you confirm both, and the year? Until then the page only says you’re an Accredited Speaker.",
    "Is Speaking Professionally Toastmasters still meeting online on the first Tuesday of each month, 12:00 to 1:30 p.m. Eastern? Is 7012881.toastmastersclubs.org still its website, and is the Facebook group still active?",
    "What is your role in the club (founder, officer, member)? Should the page say so?",
    "The club page promised members a bundle of professional speaking resources with a dollar value attached. What are they, and do members still get them? (Not shown.)",
    "Do you still speak for Toastmasters Districts and offer the keynote sponsor arrangement? Which kevincsnyder.com page should hosts use? (The old /hire-kevin/ link is dead.)",
    "OK to name Rochelle Rice, Greg Wood, Forrest Tuff, Paul Artale and Radhi Spear in the video captions? Their program roles date from 2022 and 2023.",
    "Confirm the January 2023 Toastmasters Magazine and podcast episode 220 feature you, and send any newer Toastmasters press.",
    "Wix says you hired a coach yourself after years of doing it alone. OK to say that here? (The income results that followed on Wix are not shown.)",
    "Should the host greeting videos (_pB9wyiHk6A, LFaamslKOFg), the keynote sponsor explainer (Q8wH7YbEbCA) and your demo video (EPovfra-xgk) move to kevincsnyder.com?",
  ],
};
