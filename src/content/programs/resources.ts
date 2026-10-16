import allHands from "@/assets/images/stage/all-hands-balloons.jpg";
import type { Headline } from "../shared";
import type { Program } from "./types";

/**
 * Free downloads. Carried over from /bookfiles (the book-buyer resource page) and
 * /worksheets (the "FREE Module Worksheets" nav item, password-protected on Wix).
 *
 * Only free, public documents are linked here. Not published, and why
 * (full list in the migration notes):
 * - Book-buyer perks (audiobook MP3s, eBook files): gated deliverables, and lost (404).
 * - Webinar and NSA Speakers Academy slide decks and recordings: paid deliverables.
 * - Vault samples with client names or event branding (slide decks, book
 *   customization samples), and Vault templates Kevin hasn't cleared (speaker
 *   storyboard, phone script, evaluation form).
 * - The sample coaching program PDF: it states a "GUARANTEED" $2,500 engagement,
 *   which the site can't carry. The original also prints a home address.
 * - Third-party documents (Toastmasters handbook, SpeakerFlow report).
 */
export const resources: Program = {
  href: "/resources",
  name: "Free resources",
  card: "Worksheets, checklists and real samples from Kevin’s speaking business. Free to download, no sign-up.",
  meta: {
    title: "Free resources for speakers",
    description:
      "Free downloads from Dr. Kevin C. Snyder, CSP: PAID to $PEAK module worksheets, a speaking business checklist, a virtual studio equipment list, and a sample TEDx application.",
  },
  eyebrow: "Free resources",
  headline: { lead: "Free tools", highlight: "for speakers." } satisfies Headline,
  sub: "Worksheets, checklists and real samples from Kevin’s own speaking business. No sign-up. Download what you need, fill it in, and use it as you build.",
  photo: { src: allHands, alt: "Kevin on stage at a company all-hands meeting, arms raised, with balloons and a large screen", position: "38% 50%" },
  blocks: [
    {
      kind: "downloads",
      id: "worksheets",
      heading: "Module worksheets",
      intro:
        "One worksheet for each module of Kevin’s first book, PAID to $PEAK: How to Become a Professional Speaker. Read the module, then work through the questions.",
      files: [
        {
          label: "Module 1: Where to start",
          href: "/files/PAID_to_PEAK_Module_1_Worksheet.pdf",
          note: "Your goals, what sets you apart, your stories and your call to action. PDF.",
        },
        {
          label: "Module 1: Where to start (Word)",
          href: "/files/PAID_to_PEAK_Module_1_Worksheet.docx",
          note: "The same questions in an editable Word file.",
        },
        {
          label: "Module 2: Developing your program",
          href: "/files/PAID_to_PEAK_Module_2_Worksheet.pdf",
          note: "Your audience, your featured presentation, learning outcomes, bio and practice plan. PDF.",
        },
        {
          label: "Module 3: Speaking opportunities",
          href: "/files/PAID_to_PEAK_Module_3_Worksheet.pdf",
          note: "Target industries, the associations that serve them, their events and calls for programs. PDF.",
        },
        {
          label: "Module 4: Getting PAID to $PEAK",
          href: "/files/PAID_to_PEAK_Module_4_Worksheet.pdf",
          note: "When to charge, how to set your fee, and the steps from inquiry to payment. PDF.",
        },
        {
          label: "Module 5: Getting consistent bookings",
          href: "/files/PAID_to_PEAK_Module_5_Worksheet.pdf",
          note: "A look back at your progress, and the people who will support you. PDF.",
        },
      ],
    },
    {
      kind: "downloads",
      heading: "Checklists and templates",
      intro: "Practical tools Kevin built for his own business and for the speakers he coaches.",
      files: [
        {
          label: "Speaking business checklist",
          href: "/files/Speaking_Business_Checklist.pdf",
          note: "A one-page check on whether your speaking is set up like a business. PDF.",
        },
        {
          label: "Virtual studio equipment list",
          href: "/files/Virtual_Studio_Equipment_List.pdf",
          note: "Kevin’s equipment list for a virtual speaking studio, in three options for different budgets. PDF.",
        },
        {
          label: "Speech review feedback form",
          href: "/files/Speech_Review_Feedback_Form.pdf",
          note: "A point-by-point form for getting useful feedback on a speech. PDF.",
        },
        {
          label: "Sample TEDx application",
          href: "/files/Sample_TEDx_Application.pdf",
          note: "A basic TEDx application, so you can draft your answers before you approach events. PDF.",
        },
      ],
    },
    {
      kind: "videos",
      heading: "Sample demo videos",
      intro: "Examples of the demo and promo videos Kevin uses to market his keynotes.",
      videos: [
        { youtubeId: "q5LNbKujTGU", title: "Sample demo video: Kevin’s sizzle reel" },
        { youtubeId: "9a1ntEqX3ns", title: "Sample demo video: speaking highlights" },
        { youtubeId: "YiT--6L_Hc8", title: "Sample event promo video" },
      ],
    },
    {
      kind: "downloads",
      heading: "Keep going",
      files: [
        { label: "The book", href: "/book", note: "The worksheets go with Kevin’s first book, PAID to $PEAK. The book page also has news of Paid to $peak 2.0." },
        { label: "The blog", href: "/blog", note: "Years of Kevin’s articles on fees, outreach, TEDx and virtual speaking." },
        {
          label: "Coaching application",
          href: "/files/Coaching_Application.pdf",
          note: "The questions Kevin asks before coaching starts. You can also apply online. PDF.",
        },
      ],
    },
  ],
  cta: { label: "Get the worksheets", href: "#worksheets" },
  closing: {
    headline: { lead: "Want a second set of eyes", highlight: "on your plan?" },
    body: "Kevin will tell you honestly where you are and what to do next. It starts with a short application.",
    cta: { label: "Apply for coaching", href: "/apply" },
  },
  wixPrices: [
    "The Vault pitch on /bookfiles: “You’ll also receive $2,500+ in discounts”, “1-year access to my Association Directory ($899 value)”, “Two 30-minute coaching calls ($249 value)”, “5 recorded webinars I have personally purchased ($225 value)”.",
    "Speaking Business Checklist PDF (published): “Is your speaking set up like a business to earn $1,500, $2,500, and $3,500+ per speech?” (fee framing, not a price).",
    "Virtual Studio Equipment List PDF (published): budget options under $1,000, $1,500 to $2,250, and over $4,500, plus 2021 Amazon prices per item.",
    "Sample coaching program PDF (not linked here): “Your investment 12,500 / 7,250”, “Total value 22,000+ / 10,000+”, “$2,500 speaking engagement < 6 months GUARANTEED”.",
  ],
  sources: ["/bookfiles", "/worksheets"],
  todo: [
    "Confirm this page’s content is current.",
    "The worksheets and the checklist ask readers to save and email them to Kevin@KevinCSnyder.com, and the checklist offers a complimentary coaching call for sending your score. Do you still want them sent to you, and is that offer still open?",
    "The virtual studio equipment list is from September 2021 and links to Amazon products (amzn.to short links) with 2021 prices. Is there a newer version? Are any of those affiliate links that need a disclosure?",
    "The sample one-sheets and the introduction for Kevin (linked from older blog posts) are not listed here because they include client names and logos, named testimonials, a phone number and figures that aren’t on the verified list (1,150 organizations, all 50 states, “only speaker in the world” in 2022, a Guinness attempt). OK to list them here as samples, or do you have current versions?",
    "The CAMPUSPEAK one-sheet is co-branded with the bureau and shows their contact details. Do you have their OK to share it?",
    "The sample coaching program PDF is not linked here because it includes an outcome guarantee. Can you send a version without it (and without your home address)?",
    "/bookfiles also shared these Vault samples: the completed Speaker Storyboard, the phone script for inquiries, the evaluation form for list building, slide decks and book customization samples. Which, if any, should be free here? The decks and customization samples show client names, so they would need new versions.",
    "The audiobook MP3s and eBook files for book buyers were on the old kevincsnyder.com and are gone. Do you still want to give buyers those files, and where should they live?",
    "Are the three sample demo and promo videos still the ones you want to show?",
  ],
};
