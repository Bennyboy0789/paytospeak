import { ProgramPage } from "@/components/ProgramPage";
import { mastermind } from "@/content/programs/mastermind";
import { programMetadata } from "@/lib/program-metadata";

export const metadata = programMetadata(mastermind);

export default function Page() {
  return <ProgramPage program={mastermind} />;
}
