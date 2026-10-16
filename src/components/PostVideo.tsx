"use client";

import { useLayoutEffect, useRef } from "react";

/**
 * Video file that was uploaded to Wix. TODO(kc): these play from Wix's servers and
 * stop working when the Wix account closes; re-host them (YouTube) before then.
 * See docs/WIX-MIGRATION.md.
 */
export function PostVideo({ src }: { src: string }) {
  const video = useRef<HTMLVideoElement>(null);

  // Next keeps pages you navigate away from mounted but hidden (React <Activity>);
  // pause so the video doesn't keep playing from a page you can't see.
  useLayoutEffect(() => {
    const el = video.current;
    return () => el?.pause();
  }, []);

  return (
    <video ref={video} src={src} controls preload="none" playsInline className="mt-8 aspect-video w-full rounded-2xl border border-border bg-card">
      <a href={src}>Download the video</a>
    </video>
  );
}
