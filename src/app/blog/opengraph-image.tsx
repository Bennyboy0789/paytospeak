import { ogCard, ogAlt, ogContentType, ogSize } from "@/lib/og";

export const alt = ogAlt;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogCard({
    eyebrow: "The blog",
    headline: { lead: "Notes on the", highlight: "speaking business." },
    photo: "stage/stage-wave.jpg",
    focusX: 0.5,
  });
}
