"use client";

import Lenis from "lenis";
import { useEffect } from "react";

/*
 * Everything that reacts to scrolling and needs JavaScript, on one scroll listener:
 *   - Inertial wheel scrolling (Lenis), for mouse and trackpad only. Touch scrolling stays native.
 *   - On the blog, the header slides away while you scroll down and comes back as soon as you
 *     scroll up. Everywhere else it stays put, so the Apply button is always one tap away.
 *   - The marquee speeds up with scroll speed and runs backwards while you scroll up.
 * Under prefers-reduced-motion none of it runs: native scrolling, a fixed header, a steady marquee.
 */
export function ScrollFX() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const lenis = fine ? new Lenis({ autoRaf: true, lerp: 0.11, anchors: { offset: -24 } }) : null;

    const header = document.querySelector<HTMLElement>("[data-autohide]");
    let lastY = window.scrollY;
    let lastT = performance.now();
    let rate = 1;
    let direction = 1;
    let frame = 0;

    const tracks = () =>
      Array.from(document.querySelectorAll<HTMLElement>(".marquee-track"))
        .flatMap((el) => el.getAnimations())
        .filter((a): a is CSSAnimation => a instanceof CSSAnimation);

    // Ease the marquee back to its resting speed after each scroll burst.
    const settle = () => {
      const target = direction;
      rate += (target - rate) * 0.06;
      if (Math.abs(target - rate) < 0.01) rate = target;
      tracks().forEach((a) => (a.playbackRate = rate));
      frame = rate === target ? 0 : requestAnimationFrame(settle);
    };

    const onScroll = () => {
      const y = window.scrollY;
      const now = performance.now();
      const dy = y - lastY;
      const velocity = dy / Math.max(now - lastT, 1); // px per ms
      lastY = y;
      lastT = now;
      if (dy === 0) return;

      if (header) {
        const keep = !window.location.pathname.startsWith("/blog") || header.contains(document.activeElement) || header.querySelector("details[open]");
        if (y < 120 || dy < -4 || keep) delete header.dataset.hidden;
        else if (dy > 4) header.dataset.hidden = "";
      }

      direction = dy > 0 ? 1 : -1;
      const boost = Math.min(Math.abs(velocity) * 2.5, 5);
      const next = direction * (1 + boost);
      if (Math.abs(next) > Math.abs(rate) || Math.sign(next) !== Math.sign(rate)) rate = next;
      if (!frame) frame = requestAnimationFrame(settle);
    };

    // Keyboard users tabbing into the header always get it back.
    const onFocus = () => header && delete header.dataset.hidden;

    window.addEventListener("scroll", onScroll, { passive: true });
    header?.addEventListener("focusin", onFocus);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      header?.removeEventListener("focusin", onFocus);
      lenis?.destroy();
    };
  }, []);

  return null;
}
