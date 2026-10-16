import type { Headline } from "./shared";

/**
 * The first edition: PAID to $PEAK: How to Become a Professional Speaker.
 * Carried over from /printbook (canonical), /copy-of-paid-to-peak-print-book (identical)
 * and /copy-of-paid-to-usdpeak-book (the 2020 audiobook launch page).
 *
 * Not carried over (see the migration notes): every price; the "#1 BEST SELLER &
 * TOP RATED" claim; outcome promises ("you should have speaking gigs lined up by the
 * time you finish reading it", "What took me 14 years to learn should take you 4
 * months", "11 keynotes in 6 months"); the autographed-copy and audiobook PayPal
 * buttons and the "Passion Project" seller offer; and the complimentary coaching call
 * for leaving an Amazon review.
 *
 * Amazon links are plain product URLs built from the identifiers on Wix:
 * print ISBN 1505436265, eBook ASIN B083RD2TWS.
 */
export const firstEdition = {
  title: "PAID to $PEAK",
  subtitle: "How to Become a Professional Speaker",
  fullTitle: "PAID to $PEAK: How to Become a Professional Speaker",
  /** For metadata and alt text, where "$" reads badly. */
  plainTitle: "Paid to Speak: How to Become a Professional Speaker",
  author: "Dr. Kevin C. Snyder",
  eyebrow: "The first edition",
  headline: { lead: "The book", highlight: "where it started." } satisfies Headline,
  body: [
    "When Kevin started speaking, he had no strategy, and he nearly quit more than once. PAID to $PEAK lays out the process he learned the hard way.",
    "It walks through the business of speaking in five modules: defining your goals and your signature story, building your program, finding speaking opportunities, setting your fee, and keeping bookings consistent.",
  ],
  formats: [
    {
      format: "Print",
      href: "https://www.amazon.com/dp/1505436265",
      identifier: "ISBN 1505436265",
      label: "Get the print edition on Amazon",
    },
    {
      format: "eBook",
      href: "https://www.amazon.com/dp/B083RD2TWS",
      identifier: "ASIN B083RD2TWS",
      label: "Get the eBook on Amazon",
    },
    {
      format: "Audiobook",
      // TODO(kc): no store link on Wix. The 2020 launch page sold MP3s directly
      // while Kevin waited for Audible to list it. Is it on Audible or Amazon now?
      href: null,
      identifier: null,
      label: "Audiobook",
    },
  ],
  authorPage: "https://www.amazon.com/author/kevincsnyder",
  modules: [
    {
      number: 1,
      title: "Where to start",
      topics: [
        "Defining your goals",
        "Types of paid speaking",
        "What differentiates you",
        "Your signature story",
        "Your call to action",
        "Speaker myths",
      ],
    },
    {
      number: 2,
      title: "Developing your program",
      topics: ["What you need", "Your speaker one-page", "Your presentation", "Practice opportunities"],
    },
    {
      number: 3,
      title: "Speaking opportunities",
      topics: [
        "Finding speaking gigs",
        "How to reach out",
        "Speaking to students",
        "How to get referrals",
        "Branding yourself",
      ],
    },
    {
      number: 4,
      title: "Getting PAID to $PEAK",
      topics: [
        "From free to fee",
        "How to maximize value",
        "Knowing their budget",
        "The psychology of your fee",
        "Template proposals, contracts and invoices",
      ],
    },
    {
      number: 5,
      title: "Getting consistent bookings",
      topics: ["Staying motivated", "Finding support", "Client appreciation", "Finding a mentor", "Achieving your goals"],
    },
  ],
  worksheets: {
    href: "/resources",
    label: "Get the free module worksheets",
    note: "One worksheet for each module, free to download.",
  },
  course: {
    href: "/on-demand",
    label: "Take it as an on-demand course",
  },
  sources: ["/printbook", "/copy-of-paid-to-peak-print-book", "/copy-of-paid-to-usdpeak-book", "/paidtospeakbook", "/paid-to-speak-book"],
  // Open questions for Kevin. Not shown on the page: Ben is asking Kevin directly (2026-10-16).
  // Remove each one as it's answered. Also listed in docs/CONTENT.md under "The Book".
  todo: [
    "Confirm this page’s content is current.",
    "Do you still want to sell the first edition alongside Paid to $peak 2.0, or retire it when 2.0 comes out?",
    "Are both Amazon listings still live (print ISBN 1505436265, eBook ASIN B083RD2TWS)?",
    "Is the audiobook on Audible or Amazon? If so, send the link.",
    "Is the bonus module from the audiobook, “How to Write and Publish Your Book in 90 Days”, also in the print and eBook editions?",
    "Wix calls the book a “#1 BEST SELLER & TOP RATED book for Speakers on Amazon”. Which list, category and date? Not shown until confirmed.",
    "Is the “Passion Project” autographed-copy offer still running? It’s left out until the PayPal phase.",
    "The Wix page offered a complimentary coaching call for leaving an Amazon review. That’s left out because Amazon’s rules don’t allow incentives for reviews. OK to drop it for good?",
    "Is the on-demand course still the book in course form, and still for sale?",
    "Wix uses both “PAID to SPEAK” and “PAID to $PEAK” for this book. Which is the title on the cover?",
  ],
} as const;
