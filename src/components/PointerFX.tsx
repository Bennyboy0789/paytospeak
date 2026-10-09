"use client";

import { useEffect } from "react";

/*
 * One document-level pointer listener for every hover effect that tracks the cursor:
 *   [data-spotlight]  sets --mx / --my (px) — used by .spotlight and .glow-card
 *   [data-tilt]       sets --rx / --ry (deg) on the element — used by .book-3d
 *   [data-magnetic]   nudges the element toward the cursor, up to 8px
 * Mouse and trackpad only, and nothing at all under prefers-reduced-motion.
 */
export function PointerFX() {
  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const still = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || still.matches) return;

    let frame = 0;
    let last: PointerEvent | null = null;
    let magnet: HTMLElement | null = null;
    let tilted: HTMLElement | null = null;

    const release = (el: HTMLElement | null, props: string[]) => {
      props.forEach((p) => el?.style.removeProperty(p));
    };

    const update = () => {
      frame = 0;
      if (!last) return;
      const { clientX: x, clientY: y } = last;
      const target = last.target instanceof Element ? last.target : null;

      const spot = target?.closest<HTMLElement>("[data-spotlight]");
      if (spot) {
        const r = spot.getBoundingClientRect();
        spot.style.setProperty("--mx", `${x - r.left}px`);
        spot.style.setProperty("--my", `${y - r.top}px`);
      }

      const tilt = target?.closest<HTMLElement>("[data-tilt]") ?? null;
      if (tilt !== tilted) release(tilted, ["--rx", "--ry"]);
      tilted = tilt;
      if (tilt) {
        const r = tilt.getBoundingClientRect();
        const px = (x - r.left) / r.width - 0.5;
        const py = (y - r.top) / r.height - 0.5;
        tilt.style.setProperty("--ry", `${(px * 22).toFixed(2)}deg`);
        tilt.style.setProperty("--rx", `${(-py * 14).toFixed(2)}deg`);
      }

      const mag = target?.closest<HTMLElement>("[data-magnetic]") ?? null;
      if (mag !== magnet) release(magnet, ["translate"]);
      magnet = mag;
      if (mag) {
        const r = mag.getBoundingClientRect();
        const dx = (x - (r.left + r.width / 2)) / (r.width / 2);
        const dy = (y - (r.top + r.height / 2)) / (r.height / 2);
        mag.style.setProperty("translate", `${(dx * 8).toFixed(1)}px ${(dy * 6).toFixed(1)}px`);
      }
    };

    const onMove = (e: PointerEvent) => {
      last = e;
      if (!frame) frame = requestAnimationFrame(update);
    };
    const onLeave = () => {
      release(magnet, ["translate"]);
      release(tilted, ["--rx", "--ry"]);
      magnet = tilted = null;
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return null;
}
