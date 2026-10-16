import { resources } from "@/content/programs/resources";
import { programCard, ogAlt, ogContentType, ogSize } from "@/lib/og";

export const alt = ogAlt;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return programCard(resources);
}
