import { ProgramPage } from "@/components/ProgramPage";
import { onDemand } from "@/content/programs/on-demand";
import { programMetadata } from "@/lib/program-metadata";

export const metadata = programMetadata(onDemand);

export default function Page() {
  return <ProgramPage program={onDemand} />;
}
