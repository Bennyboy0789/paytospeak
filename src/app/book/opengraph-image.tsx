import { book } from "@/content/book";
import { ogCard, ogAlt, ogContentType, ogSize } from "@/lib/og";

export const alt = ogAlt;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogCard({
    eyebrow: book.hero.eyebrow,
    headline: { lead: "Paid to $peak 2.0", highlight: "The new book." },
    photo: "stage/stage-ballroom-chandelier.jpg",
    focusX: 0.72,
  });
}
