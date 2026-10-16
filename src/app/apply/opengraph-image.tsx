import { apply } from "@/content/apply";
import { ogCard, ogAlt, ogContentType, ogSize } from "@/lib/og";

export const alt = ogAlt;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogCard({
    eyebrow: apply.hero.eyebrow,
    headline: apply.hero.headline,
    photo: "kevin-with-audience-member.jpg",
    focusX: 0.62,
  });
}
