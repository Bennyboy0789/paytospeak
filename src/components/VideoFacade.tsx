"use client";

import Image, { type StaticImageData } from "next/image";
import { useLayoutEffect, useRef, useState } from "react";

/**
 * A self-hosted video behind a lazy-loaded still and a play button, like the YouTube embeds.
 * A plain <video poster> fetches its poster as soon as the page loads, which competed with the
 * hero photo for bandwidth and cost /coaching about half a second of LCP.
 */
export function VideoFacade({ src, poster, title }: { src: string; poster: StaticImageData; title: string }) {
  const [playing, setPlaying] = useState(false);
  const video = useRef<HTMLVideoElement>(null);

  // Next keeps pages you navigate away from mounted but hidden (React <Activity>); pause so
  // the video doesn't keep playing from a page you can't see.
  useLayoutEffect(() => {
    const el = video.current;
    return () => el?.pause();
  }, [playing]);

  return (
    <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-card">
      {playing ? (
        <video ref={video} src={src} aria-label={title} controls autoPlay playsInline className="absolute inset-0 size-full" />
      ) : (
        <button type="button" onClick={() => setPlaying(true)} aria-label={`Play: ${title}`} className="group absolute inset-0 size-full">
          <Image src={poster} alt="" fill placeholder="blur" sizes="(min-width: 1024px) 46rem, 100vw" className="object-cover transition duration-700 ease-out-expo group-hover:scale-[1.02]" />
          <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-tr from-black/55 via-transparent to-transparent" />
          <span className="absolute bottom-4 left-4 grid size-14 place-items-center rounded-full bg-accent text-accent-foreground shadow-amber transition-transform duration-500 ease-out-expo group-hover:scale-110 sm:bottom-5 sm:left-5">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="ml-0.5 size-5" fill="currentColor">
              <path d="M8 5.5v13a.5.5 0 0 0 .77.42l10.2-6.5a.5.5 0 0 0 0-.84L8.77 5.08A.5.5 0 0 0 8 5.5Z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
