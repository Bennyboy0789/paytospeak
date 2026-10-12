"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * Click-to-load YouTube embed. Shows the video's thumbnail until played, so a
 * post with several videos doesn't load several YouTube players up front.
 */
export function YouTube({ id, title = "YouTube video" }: { id: string; title?: string }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="relative mt-8 aspect-video overflow-hidden rounded-2xl border border-border bg-card">
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
          <Image src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt="" fill sizes="(min-width: 768px) 48rem, 100vw" className="object-cover opacity-80 transition duration-500 group-hover:opacity-100" />
          <span className="absolute left-1/2 top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-accent text-accent-foreground shadow-amber transition-transform duration-500 ease-out-expo group-hover:scale-110">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="ml-1 size-6" fill="currentColor">
              <path d="M8 5.5v13a.5.5 0 0 0 .77.42l10.2-6.5a.5.5 0 0 0 0-.84L8.77 5.08A.5.5 0 0 0 8 5.5Z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
