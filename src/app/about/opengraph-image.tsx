import { about } from "@/content/about";
import { ogCard, ogAlt, ogContentType, ogSize } from "@/lib/og";

export const alt = ogAlt;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogCard({
    eyebrow: about.hero.eyebrow,
    headline: about.hero.headline,
    photo: "stage/portrait-vest.jpg",
    focusX: 0.5,
  });
}
