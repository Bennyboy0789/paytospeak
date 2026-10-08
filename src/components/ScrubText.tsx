import type { CSSProperties } from "react";
import type { Headline } from "@/content/shared";

type ScrubTextProps = {
  headline: Headline;
  as?: "h2" | "p";
  id?: string;
  className?: string;
};

/**
 * A statement that lights up word by word as it scrolls through the viewport
 * (globals.css .scrub / .scrub-word). Without scroll-driven animation support,
 * or with reduced motion, it is plain, fully visible text.
 */
export function ScrubText({ headline, as: Tag = "h2", id, className = "" }: ScrubTextProps) {
  const words = [
    ...headline.lead.split(" ").map((w) => ({ w, hi: false })),
    ...(headline.highlight?.split(" ").map((w) => ({ w, hi: true })) ?? []),
  ];
  const span = 40; // % of the cover range over which the whole line lights up
  return (
    <Tag id={id} className={`scrub font-display font-black text-balance ${className}`}>
      {words.map(({ w, hi }, i) => {
        const start = 18 + (i / words.length) * span;
        const style = { animationRange: `cover ${start.toFixed(1)}% cover ${(start + 10).toFixed(1)}%` } as CSSProperties;
        return (
          <span key={i}>
            <span className={`scrub-word ${hi ? "text-primary" : ""}`} style={style}>
              {w}
            </span>{" "}
          </span>
        );
      })}
    </Tag>
  );
}
