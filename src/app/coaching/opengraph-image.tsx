import { coaching } from "@/content/coaching";
import { ogCard, ogAlt, ogContentType, ogSize } from "@/lib/og";

export const alt = ogAlt;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogCard({
    eyebrow: coaching.hero.eyebrow,
    headline: coaching.hero.headline,
    photo: "kevin-view-from-stage.jpg",
    focusX: 0.25,
  });
}
