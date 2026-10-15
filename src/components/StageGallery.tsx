import Image from "next/image";
import type { CSSProperties } from "react";
import { type StagePhoto, stagePhotos } from "@/content/stage";

/**
 * Two rows of Kevin's action photos drifting in opposite directions, like the credentials
 * marquee. Each row is rendered twice for the loop; the second copy is hidden from assistive
 * tech, so every photo is announced once. Hover pauses a row; reduced motion holds them still.
 */
export function StageGallery({ className = "" }: { className?: string }) {
  return (
    <div className={`space-y-4 lg:space-y-6 ${className}`}>
      {stagePhotos.map((row, r) => (
        <div key={r} className="marquee relative overflow-hidden">
          <div
            className="marquee-track"
            style={{ "--marquee-duration": `${90 + r * 15}s`, animationDirection: r ? "reverse" : "normal" } as CSSProperties}
          >
            <Row photos={row} label={r === 0 ? "Kevin on stage" : "Kevin’s audiences"} />
            <Row photos={row} hidden />
          </div>
        </div>
      ))}
    </div>
  );
}

function Row({ photos, label, hidden = false }: { photos: StagePhoto[]; label?: string; hidden?: boolean }) {
  return (
    <ul aria-label={hidden ? undefined : label} aria-hidden={hidden || undefined} className="flex shrink-0 gap-4 pr-4 lg:gap-6 lg:pr-6">
      {photos.map((p) => (
        <li key={p.alt} className="zoom-on-hover relative aspect-[3/2] h-44 shrink-0 overflow-hidden rounded-2xl border border-border sm:h-56 lg:h-72">
          <Image src={p.src} alt={hidden ? "" : p.alt} fill placeholder="blur" sizes="(min-width: 1024px) 27rem, (min-width: 640px) 21rem, 17rem" className="object-cover" />
        </li>
      ))}
    </ul>
  );
}
