import type { Metadata } from "next";
import type { Program } from "@/content/programs/types";

export function programMetadata(program: Program): Metadata {
  return {
    title: program.meta.title,
    description: program.meta.description,
    alternates: { canonical: program.href },
  };
}
