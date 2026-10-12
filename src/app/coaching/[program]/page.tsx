import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProgramPage } from "@/components/ProgramPage";
import { getProgram, programs } from "@/content/programs";
import { programMetadata } from "@/lib/program-metadata";

export function generateStaticParams() {
  return programs.filter((p) => p.href.startsWith("/coaching/")).map((p) => ({ program: p.href.split("/")[2] }));
}

export async function generateMetadata({ params }: PageProps<"/coaching/[program]">): Promise<Metadata> {
  const program = getProgram(`/coaching/${(await params).program}`);
  return program ? programMetadata(program) : {};
}

export default async function CoachingProgramPage({ params }: PageProps<"/coaching/[program]">) {
  const program = getProgram(`/coaching/${(await params).program}`);
  if (!program) notFound();
  return <ProgramPage program={program} />;
}
