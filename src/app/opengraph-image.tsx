import { home } from "@/content/home";
import { ogCard, ogAlt, ogContentType, ogSize } from "@/lib/og";

export const alt = ogAlt;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogCard({
    eyebrow: home.hero.eyebrow,
    headline: home.hero.headline,
    photo: "stage/stage-mic-hands-up.jpg",
    focusX: 0.6,
  });
}
