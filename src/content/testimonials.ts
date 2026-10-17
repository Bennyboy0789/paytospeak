import type { StaticImageData } from "next/image";
import aliPoster from "@/assets/images/testimonial-ali-ingersoll.jpg";

/*
 * Proof, taken from kevincsnyder.com, which is the master for facts and quotes (Ben, 2026-10-16).
 * Quotes are copied word for word; quotes that contain an em dash, an exclamation mark or a
 * banned word (docs/BRAND.md) are left out rather than edited.
 */

/** Coaching clients. From the "From Coaching to Speaking Career Momentum" section of kevincsnyder.com/coaching. */
export type ClientStory = {
  name: string;
  credentials: string[];
  /** Under /public. Transcoded to 720p H.264 from the master site's 1080p HEVC file, which many browsers can't play. */
  video: { src: string; poster: StaticImageData; title: string };
};

export const clientStories: ClientStory[] = [
  {
    name: "Ali Ingersoll",
    credentials: ["Ms. Wheelchair America", "Keynote Speaker", "Author"],
    video: { src: "/videos/ali-ingersoll-testimonial.mp4", poster: aliPoster, title: "Ali Ingersoll on coaching with Kevin" },
  },
];

/** Event planners on Kevin as a speaker. From the testimonials on the kevincsnyder.com home page. */
export type PlannerQuote = { quote: string; name: string; role: string };

export const plannerQuotes: PlannerQuote[] = [
  {
    quote:
      "Kevin prepared so thoroughly that many in our audience thought he worked for our organization. His ability to customize and connect made his keynote feel incredibly relevant and personal.",
    name: "Jackie Asekhauno",
    role: "Events Director, AICPA",
  },
  {
    quote: "Kevin was a true partner invested in understanding our culture and goals, and it showed on stage. Best speaker we’ve worked with.",
    name: "Janet Davis",
    role: "SHRM",
  },
  {
    quote:
      "Kevin’s humor, authenticity, and powerful storytelling were the perfect way to kick off our conference. He set the tone, energized the room, and created momentum that carried throughout the event.",
    name: "Rich Nicols",
    role: "Institute of Internal Auditors",
  },
  {
    quote:
      "Kevin’s virtual keynote felt just as engaging as an in-person presentation. His energy, connection, and ability to engage the audience were exceptional, and the feedback has been absolutely fabulous.",
    name: "Stephanie Wolf",
    role: "Prudential",
  },
];
