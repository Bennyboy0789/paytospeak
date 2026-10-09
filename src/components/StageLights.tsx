import type { CSSProperties } from "react";

type Beam = { left: string; color: string; from: string; to: string; duration: string };

const presets = {
  // Amber key light and a blue fill, crossing — the look of the parent site's stage photography.
  hero: [
    { left: "72%", color: "rgb(247 162 36 / 0.16)", from: "-14deg", to: "4deg", duration: "13s" },
    { left: "38%", color: "rgb(0 168 230 / 0.14)", from: "10deg", to: "-6deg", duration: "17s" },
  ],
  soft: [
    { left: "82%", color: "rgb(247 162 36 / 0.1)", from: "-10deg", to: "6deg", duration: "15s" },
    { left: "18%", color: "rgb(0 168 230 / 0.09)", from: "8deg", to: "-8deg", duration: "19s" },
  ],
} satisfies Record<string, Beam[]>;

/** Decorative swaying stage beams. Place inside a `relative overflow-hidden` section. */
export function StageLights({ preset = "soft", className = "" }: { preset?: keyof typeof presets; className?: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {presets[preset].map((b) => (
        <div
          key={b.left}
          className="beam"
          style={
            {
              left: b.left,
              "--beam-color": b.color,
              "--beam-from": b.from,
              "--beam-to": b.to,
              "--beam-duration": b.duration,
            } as CSSProperties
          }
        />
      ))}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
