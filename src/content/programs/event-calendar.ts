import ballroomHands from "@/assets/images/stage/ballroom-hands-raised.jpg";
import { calendly, type Program } from "./types";

/**
 * Paid Event Calendar: a monthly subscription to speaking engagement leads.
 * Source: /paideventcalendar1 (built in 2021; stale details dropped).
 */
export const eventCalendar: Program = {
  href: "/event-calendar",
  name: "Paid Event Calendar",
  card: "A monthly subscription to leads on conferences and events that hire speakers, with the contacts who do the booking.",
  meta: {
    title: "Paid Event Calendar",
    description:
      "Dr. Kevin C. Snyder’s Paid Event Calendar: a monthly list of conferences and events that hire speakers, with event details and the contacts who book them.",
  },
  eyebrow: "Event calendar",
  headline: { lead: "Find the events", highlight: "that book speakers." },
  sub: "The Paid Event Calendar is a monthly subscription to leads on conferences, expos and trainings that hire speakers, with the people who do the booking. Cancel any time.",
  photo: { src: ballroomHands, alt: "Kevin among the tables of a packed ballroom as audience members raise their hands", position: "62% 50%" },
  blocks: [
    {
      kind: "text",
      heading: "Let the opportunities come to you",
      body: [
        "Finding the right events is one of the slowest parts of building a speaking business. The calendar does that research for you each month, so your time goes into outreach.",
        "Many of these events book more than one speaker: keynotes, breakouts, workshops and general sessions. Most happen every year, so if you miss one this year, it comes around again.",
        "It works for speakers at any stage, from just starting out to seasoned professional, and it pairs with Module 3 of Paid to $peak, which covers finding speaking opportunities and outreach.",
      ],
    },
    {
      kind: "list",
      heading: "What you get for each event",
      items: [
        "Event name, website and date",
        "Host organization information",
        "Contact information",
        "The event agenda",
        "Everything delivered in an Excel spreadsheet",
      ],
    },
    {
      kind: "options",
      heading: "Three levels",
      intro: "Every subscriber sees the name of every event on the month’s calendar. Your level sets how many come with full details and contacts.",
      options: [
        {
          name: "Standard",
          format: "Monthly, cancel any time",
          summary: "A starting point for outreach.",
          includes: ["25 speaking engagement leads with contacts each month", "Every event name on the month’s calendar"],
        },
        {
          name: "Silver",
          format: "Monthly, cancel any time",
          summary: "More leads for a steady outreach routine.",
          includes: ["100 speaking engagement leads with contacts each month", "Every event name on the month’s calendar"],
        },
        {
          name: "Premium",
          format: "Monthly, cancel any time",
          summary: "The whole calendar.",
          includes: ["Every speaking engagement lead with contacts on the month’s calendar", "Every event name on the month’s calendar"],
        },
      ],
    },
    {
      kind: "faq",
      items: [
        {
          q: "Does a listing mean I’ll be booked?",
          a: "No. The calendar gives you the events and the people who do the booking. Getting booked depends on your outreach and your fit.",
        },
        {
          q: "What if I’m just starting out?",
          a: "Even better. The calendar is built for speakers at every level, from just starting out to seasoned professional.",
        },
        {
          q: "What if I’m not ready to reach out yet?",
          a: "Feeling “not ready” holds more speakers back than anything else. Every speaker has room to improve. If you want clarity on your next steps first, book a coaching call with Kevin.",
        },
        {
          q: "What if I missed an event?",
          a: "Most of these events are held every year, so it will come around again.",
        },
        {
          q: "How do I know if a group is a fit?",
          a: "Reach out anyway. Some organizations want a speaker from outside their industry to open their conference. Let them decide whether you’re a fit.",
        },
        {
          q: "Is there a free trial?",
          a: "No. The Standard level is there as a low-cost way to start, and you can cancel any time.",
        },
        {
          q: "Can I change my level or cancel?",
          a: "Yes, any time. And if your outreach isn’t getting replies, Kevin is glad to look at a sample and suggest changes.",
        },
        {
          q: "How should I contact the organizations on the list?",
          a: "Paid to $peak includes samples of how Kevin does outreach, and the Vault has more of his outreach and follow-up templates.",
        },
        {
          q: "Are events sorted by location or date?",
          a: "No. Each month brings a new mix of events that are seeking speakers.",
        },
        {
          q: "Can I choose which events I get contacts for?",
          a: "No. You see every event name on the month’s calendar, with full details and contacts for the number of leads your level includes.",
        },
        {
          q: "Do the contacts come in a spreadsheet?",
          a: "Yes. You get the spreadsheet for the number of events your level includes.",
        },
        {
          q: "What if my virtual delivery isn’t ready?",
          a: "Speaking Professionally Toastmasters is a good place to practice and get feedback. Kevin’s free virtual studio equipment list is on the Resources page, and he can help you plan your setup.",
        },
        {
          q: "Have a question that isn’t answered here?",
          a: "Email Kevin at Kevin@KevinCSnyder.com.",
        },
      ],
    },
  ],
  cta: { label: "Talk to Kevin", href: calendly.strategy },
  wixPrices: [
    "PREMIUM $150/mo, SILVER $75/mo, STANDARD $25/mo, cancel any time (/paideventcalendar1, PayPal 4WDY6PK6J22MW, TKRQCSKY6YBQU, J5ZT6TVKMKS72)",
    "FAQ: \"We did create a $25 monthly subscription to provide a low-entry price point\" (/paideventcalendar1)",
  ],
  sources: ["/paideventcalendar1"],
  todo: [
    "Confirm this program is still offered and its current format.",
    "The Wix page dates from 2021. Is the calendar still updated every month?",
    "Confirm the lead counts per level: Standard 25, Silver 100, Premium the full list (Wix said 200 to 230+). How many events are on a typical month’s calendar today?",
    "Where does the event and contact data come from? We need to know before describing it further.",
    "How do current subscribers receive each month’s spreadsheet, and does anything change for them when the Wix site goes away?",
    "Is the Paid Event Calendar the same as the “Association Directory” offered in the Vault bonus bundle?",
    "Do you want the sample event list back? Wix showed about 180 association conferences by name; we left them out because the list is from 2021.",
    "The explainer video on Wix (6:48) is Wix-hosted and will disappear. Upload it to YouTube if you want it on this page.",
  ],
};
