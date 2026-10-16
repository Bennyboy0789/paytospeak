"use client";

import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import posters from "@/content/youtube-posters.json";

// The sharpest thumbnail each video has, found ahead of time by scripts/youtube-posters.mjs
// (maxresdefault only exists for HD uploads). Anything not listed uses hqdefault, which
// always exists; a failed load also falls back to it.
const best = posters as Record<string, string>;

/**
 * Click-to-load YouTube embed. Shows the video's thumbnail until played, so a
 * post with several videos doesn't load several YouTube players up front.
 * The play button sits in the corner, clear of any title baked into the thumbnail.
 */
export function YouTube({ id, title = "YouTube video" }: { id: string; title?: string }) {
  const [playing, setPlaying] = useState(false);
  const [poster, setPoster] = useState(best[id] ?? "hqdefault");
  const box = useRef<HTMLDivElement>(null);

  // Next keeps pages you navigate away from mounted but hidden (React <Activity>), so a
  // playing video would keep sounding from a page you can't see. Hiding runs this cleanup:
  // blank the player at once to stop the sound, and go back to the thumbnail.
  useLayoutEffect(() => {
    const el = box.current;
    return () => {
      el?.querySelector("iframe")?.setAttribute("src", "about:blank");
      setPlaying(false);
    };
  }, []);

  return (
    <div ref={box} className="relative mt-8 aspect-video overflow-hidden rounded-2xl border border-border bg-card">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 size-full"
        />
      ) : (
        <button type="button" onClick={() => setPlaying(true)} aria-label={`Play: ${title}`} className="group absolute inset-0 size-full">
          <Image
            key={poster}
            src={`https://i.ytimg.com/vi/${id}/${poster}.jpg`}
            alt=""
            fill
            sizes="(min-width: 1280px) 74rem, 100vw"
            className="object-cover transition duration-700 ease-out-expo group-hover:scale-[1.02]"
            onError={() => setPoster("hqdefault")}
          />
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
