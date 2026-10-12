import { eventCalendar } from "./event-calendar";
import { group } from "./group";
import { mastermind } from "./mastermind";
import { mentorship } from "./mentorship";
import { onDemand } from "./on-demand";
import { resources } from "./resources";
import { speakerPackage } from "./speaker-package";
import { tedx } from "./tedx";
import { toastmasters } from "./toastmasters";
import type { Program } from "./types";
import { vault } from "./vault";
import { virtualStudio } from "./virtual-studio";

/** Every program carried over from the Wix site, in the order they're listed on /coaching. */
export const programs: readonly Program[] = [
  group,
  tedx,
  mentorship,
  virtualStudio,
  speakerPackage,
  onDemand,
  vault,
  mastermind,
  eventCalendar,
  toastmasters,
  resources,
];

export function getProgram(href: string) {
  return programs.find((p) => p.href === href);
}
