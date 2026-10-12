import { ProgramPage } from "@/components/ProgramPage";
import { vault } from "@/content/programs/vault";
import { programMetadata } from "@/lib/program-metadata";

export const metadata = programMetadata(vault);

export default function Page() {
  return <ProgramPage program={vault} />;
}
