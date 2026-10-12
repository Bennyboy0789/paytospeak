"use client";

import { useEffect, useRef } from "react";

type Mote = { x: number; y: number; r: number; vx: number; vy: number; phase: number; speed: number };
type Beam = { el: HTMLElement; ax: number; rgb: [number, number, number] };

// The beams' conic wedge is 24deg wide (168deg to 192deg in .beam), brightest in the middle.
const HALF_WEDGE = (12 * Math.PI) / 180;

/*
 * Dust drifting through the stage beams. Motes are near invisible in the dark and catch
 * the light as they pass through a beam, picking up its colour, the way haze does on a
 * real stage. Reads each beam's live angle from its CSS animation, so the light and the
 * dust stay in step. Starts after the page is idle, pauses off screen and in background
 * tabs, and never runs under prefers-reduced-motion.
 */
export function StageHaze() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const host = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !host || !ctx || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let w = 0;
    let h = 0;
    let motes: Mote[] = [];
    let beams: Beam[] = [];
    let frame = 0;
    let visible = false;
    let started = false;

    const parseRgb = (value: string): [number, number, number] => {
      const [r = 255, g = 255, b = 255] = value.match(/[\d.]+/g)?.map(Number) ?? [];
      return [r, g, b];
    };

    const spawn = (anywhere: boolean): Mote => ({
      x: Math.random() * w,
      y: anywhere ? Math.random() * h : h + 10,
      r: 0.6 + Math.random() ** 2 * 2.2,
      vx: (Math.random() - 0.5) * 0.12,
      vy: -(0.06 + Math.random() * 0.22),
      phase: Math.random() * Math.PI * 2,
      speed: 0.4 + Math.random() * 0.8,
    });

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      w = host.clientWidth;
      h = host.clientHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      motes = Array.from({ length: Math.min(140, Math.round((w * h) / 9000)) }, () => spawn(true));
      beams = Array.from(host.querySelectorAll<HTMLElement>(".beam")).map((el) => ({
        el,
        ax: (parseFloat(el.style.left) / 100) * w,
        rgb: parseRgb(el.style.getPropertyValue("--beam-color")),
      }));
    };

    const draw = (t: number) => {
      frame = 0;
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";

      // Each beam's apex sits at its left offset, 20% above the box; its angle comes from the running sway.
      const ay = -0.2 * h;
      const reach = 1.4 * h * 0.85;
      const lit = beams.map((b) => {
        const m = new DOMMatrixReadOnly(getComputedStyle(b.el).transform);
        return { ...b, angle: Math.atan2(m.b, m.a) };
      });

      for (const m of motes) {
        m.x += m.vx + Math.sin(t / 2400 + m.phase) * 0.08;
        m.y += m.vy;
        if (m.y < -10 || m.x < -10 || m.x > w + 10) Object.assign(m, spawn(false));

        let alpha = 0.12;
        let [r, g, b] = [200, 215, 230];
        for (const beam of lit) {
          const dy = m.y - ay;
          const off = Math.abs(Math.atan2(-(m.x - beam.ax), dy) - beam.angle);
          const glow = Math.max(0, 1 - off / HALF_WEDGE) * Math.max(0, 1 - dy / reach);
          if (glow > 0) {
            alpha += glow * 1.2;
            [r, g, b] = beam.rgb.map((c, i) => Math.round(c + ([255, 240, 220][i] - c) * 0.35)) as [number, number, number];
          }
        }
        const twinkle = 0.65 + 0.35 * Math.sin(t / 700 * m.speed + m.phase);
        const a = Math.min(alpha * twinkle, 0.95);
        ctx.fillStyle = `rgb(${r} ${g} ${b} / ${a.toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2);
        ctx.fill();
        // A soft halo on the motes that are in the light.
        if (a > 0.3) {
          ctx.fillStyle = `rgb(${r} ${g} ${b} / ${(a * 0.12).toFixed(3)})`;
          ctx.beginPath();
          ctx.arc(m.x, m.y, m.r * 3.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      if (visible && !document.hidden) frame = requestAnimationFrame(draw);
    };

    const play = () => {
      if (started && visible && !document.hidden && !frame) frame = requestAnimationFrame(draw);
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      play();
    });
    const ro = new ResizeObserver(resize);
    const onVisibility = () => play();

    // Wait for the page to settle so the haze never competes with the first paint.
    const idle = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 1200));
    const cancelIdle = window.cancelIdleCallback ?? window.clearTimeout;
    const idleId = idle(() => {
      started = true;
      canvas.dataset.on = "";
      play();
    });

    resize();
    io.observe(host);
    ro.observe(host);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      cancelIdle(idleId);
      cancelAnimationFrame(frame);
      io.disconnect();
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className="haze absolute inset-0 size-full" />;
}
