import { notFound } from "next/navigation";
import { getProgram, programs } from "@/content/programs";
import { programCard, ogAlt, ogContentType, ogSize } from "@/lib/og";

export const alt = ogAlt;
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return programs.filter((p) => p.href.startsWith("/coaching/")).map((p) => ({ program: p.href.split("/")[2] }));
}

export default async function Image({ params }: { params: Promise<{ program: string }> }) {
  const program = getProgram(`/coaching/${(await params).program}`);
  if (!program) notFound();
  return programCard(program);
}
