/**
 * Kevin's 2026 "Paid to $peak Coaching Options" chart (Drive: Graphics/PAID to $PEAK Coaching
 * Options Chart (3).png, also on Wix /coachingoptions), rebuilt as data for a real table.
 * Keep it in step with his chart: same programs, same rows, same prices.
 */
export type ComparePlan = {
  name: string;
  tagline: string;
  href: string;
  format: string;
  bestFor: string;
  price: string;
  priceNote: string;
};

export const comparePlans: ComparePlan[] = [
  {
    name: "Paid to $peak On Demand",
    tagline: "Online course and webinar series",
    href: "/on-demand",
    format: "Self-paced online",
    bestFor: "Flexible, affordable learning at your own pace",
    price: "$497",
    priceNote: "One-time payment",
  },
  {
    name: "Group coaching",
    tagline: "The 5-Week Challenge",
    href: "/coaching/group",
    format: "Live virtual, 5 weeks",
    bestFor: "Focused group support and accountability",
    price: "$1,500 or $2,500",
    priceNote: "Basic or Plus",
  },
  {
    name: "1:1 coaching",
    tagline: "5-session and 10-session options",
    href: "/coaching#how",
    format: "Private, virtual or in person",
    bestFor: "Personalized, one-on-one guidance and strategy",
    price: "$7,500 or $12,500",
    priceNote: "5 or 10 sessions, with a guarantee for paid speaking opportunities",
  },
  {
    name: "Paid to $peak Intensive",
    tagline: "2-day in-person experience",
    href: "/coaching/group",
    format: "In person, 2 days",
    bestFor: "A deep dive, with hands-on coaching and implementation",
    price: "$4,500",
    priceNote: "2-day in-person experience",
  },
  {
    name: "TEDx speaker training",
    tagline: "Prepare, apply and deliver",
    href: "/coaching/tedx",
    format: "Self-paced plus 1:1 support",
    bestFor: "Preparing and delivering a TEDx talk",
    price: "$350 to $7,500",
    priceNote: "On demand plus 1:1 coaching",
  },
];

/** One row per feature; one boolean per plan, in comparePlans order. */
export const compareFeatures: { feature: string; has: [boolean, boolean, boolean, boolean, boolean] }[] = [
  { feature: "Video training modules", has: [true, true, true, true, true] },
  { feature: "Live group coaching calls", has: [false, true, true, false, false] },
  { feature: "Private 1:1 coaching sessions", has: [false, false, true, false, true] },
  { feature: "In-person coaching (2 days)", has: [false, false, false, true, false] },
  { feature: "TEDx-specific training", has: [false, false, false, false, true] },
  { feature: "Templates, tools and resources (The Vault)", has: [true, true, true, true, true] },
  { feature: "Tip sheets and downloadable guides", has: [true, true, true, true, true] },
  { feature: "The Paid to $peak Online Course", has: [true, true, true, true, false] },
  { feature: "Follow-up coaching after the program", has: [false, false, true, true, false] },
  { feature: "Speaker Assessment and feedback", has: [false, true, true, true, true] },
  { feature: "Marketing, booking and business strategy", has: [false, false, true, true, false] },
  { feature: "Contract review and customization", has: [false, false, true, true, false] },
  { feature: "Presentation development support", has: [false, true, true, true, true] },
  { feature: "Accountability and an action plan", has: [false, true, true, true, true] },
  { feature: "Networking and peer support", has: [false, true, true, true, false] },
  { feature: "Speaker Mastermind Group", has: [false, true, true, true, false] },
  { feature: "Ongoing email support", has: [true, true, true, true, true] },
  { feature: "Access to future updates", has: [true, true, true, true, true] },
  { feature: "Bonus: the PAID to $PEAK book, eBook and print", has: [true, true, true, true, true] },
];
