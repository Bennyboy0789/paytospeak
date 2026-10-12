import { ProgramPage } from "@/components/ProgramPage";
import { toastmasters } from "@/content/programs/toastmasters";
import { programMetadata } from "@/lib/program-metadata";

export const metadata = programMetadata(toastmasters);

export default function Page() {
  return <ProgramPage program={toastmasters} />;
}
