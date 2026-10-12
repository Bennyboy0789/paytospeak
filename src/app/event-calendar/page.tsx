import { ProgramPage } from "@/components/ProgramPage";
import { eventCalendar } from "@/content/programs/event-calendar";
import { programMetadata } from "@/lib/program-metadata";

export const metadata = programMetadata(eventCalendar);

export default function Page() {
  return <ProgramPage program={eventCalendar} />;
}
