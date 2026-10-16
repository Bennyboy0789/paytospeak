import type { StaticImageData } from "next/image";
import allHands from "@/assets/images/stage/all-hands-balloons.jpg";
import arenaYouth from "@/assets/images/stage/arena-youth.jpg";
import audienceCheering from "@/assets/images/stage/audience-cheering.jpg";
import audienceLaughter from "@/assets/images/stage/audience-laughter.jpg";
import ballroomHands from "@/assets/images/stage/ballroom-hands-raised.jpg";
import blueCurtain from "@/assets/images/stage/stage-blue-curtain.jpg";
import chandelier from "@/assets/images/stage/stage-ballroom-chandelier.jpg";
import colorScreen from "@/assets/images/stage/stage-color-screen.jpg";
import lodge from "@/assets/images/stage/lodge-ballroom.jpg";
import micHandsUp from "@/assets/images/stage/stage-mic-hands-up.jpg";
import selfieBallroom from "@/assets/images/stage/selfie-full-ballroom.jpg";
import shrm from "@/assets/images/stage/shrm-hands-raised.jpg";
import truss from "@/assets/images/stage/stage-truss.jpg";
import wave from "@/assets/images/stage/stage-wave.jpg";
import workshop from "@/assets/images/stage/workshop-room.jpg";
import youthWave from "@/assets/images/stage/youth-wave.jpg";

export type StagePhoto = { src: StaticImageData; alt: string };

/**
 * Kevin's action photos (Drive: "PAID to $PEAK Website (2026)/Images/Action Photos", October 2026).
 * Kevin asked for these to be used as social proof. Two rows for the filmstrip on the home page.
 * dancing-with-volunteer.jpg is left out: the home page's About photo is the same moment.
 */
export const stagePhotos: [StagePhoto[], StagePhoto[]] = [
  [
    { src: micHandsUp, alt: "Kevin walking through a conference crowd with a microphone as attendees throw their hands up" },
    { src: selfieBallroom, alt: "Kevin taking a selfie from the stage with a full ballroom audience behind him" },
    { src: arenaYouth, alt: "A packed arena of students facing a lit stage during one of Kevin’s keynotes" },
    { src: colorScreen, alt: "Kevin on a stage washed in rainbow light, pointing out to the audience" },
    { src: audienceLaughter, alt: "Audience members laughing at their tables during one of Kevin’s sessions" },
    { src: shrm, alt: "Kevin on stage at a state SHRM conference as the audience raises their hands" },
    { src: workshop, alt: "Kevin leading a workshop in a bright city meeting room, hand raised" },
    { src: wave, alt: "Kevin waving from a stage with a large lit backdrop as the audience waves back" },
  ],
  [
    { src: ballroomHands, alt: "Kevin among the tables of a packed ballroom as audience members raise their hands" },
    { src: allHands, alt: "Kevin on stage at a company all-hands meeting, arms raised, with balloons and a large screen" },
    { src: audienceCheering, alt: "Conference attendees in matching shirts cheering and filming on their phones" },
    { src: chandelier, alt: "Kevin on stage under ballroom chandeliers, arm raised to the audience" },
    { src: youthWave, alt: "Kevin on stage beside a large screen as a youth audience waves back" },
    { src: truss, alt: "Kevin speaking on a stage framed by lighting truss, audience in the foreground" },
    { src: lodge, alt: "A full banquet hall audience during one of Kevin’s talks" },
    { src: blueCurtain, alt: "Kevin on stage in front of a blue curtain, arms out mid-story" },
  ],
];
