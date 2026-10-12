import { ProgramPage } from "@/components/ProgramPage";
import { resources } from "@/content/programs/resources";
import { programMetadata } from "@/lib/program-metadata";

export const metadata = programMetadata(resources);

export default function Page() {
  return <ProgramPage program={resources} />;
}
