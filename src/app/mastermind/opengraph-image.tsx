import { mastermind } from "@/content/programs/mastermind";
import { programCard, ogAlt, ogContentType, ogSize } from "@/lib/og";

export const alt = ogAlt;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return programCard(mastermind);
}
