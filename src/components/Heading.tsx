import type { CSSProperties } from "react";
import type { Headline } from "@/content/shared";

const sizes = {
  hero: "text-[clamp(3rem,10.5vw,8.5rem)] leading-[0.9] tracking-tight",
  page: "text-[clamp(2.75rem,8vw,6.25rem)] leading-[0.92] tracking-tight",
  section: "text-4xl leading-[1.02] tracking-tight lg:text-6xl",
  small: "text-3xl leading-[1.05] tracking-tight lg:text-5xl",
} as const;

type HeadingProps = {
  headline: Headline;
  as?: "h1" | "h2" | "h3";
  size?: keyof typeof sizes;
  id?: string;
  className?: string;
  /** Words rise into place on load. For above-the-fold headings only. */
  animate?: boolean;
};

/** Brand headline: Inter Tight black, with one phrase in blue (docs/BRAND.md). */
export function Heading({ headline, as: Tag = "h2", size = "section", id, className = "", animate }: HeadingProps) {
  const highlightClass = "text-primary [text-shadow:0_0_40px_rgb(0_168_230/0.35)]";

  if (animate) {
    const lead = headline.lead.split(" ");
    const highlight = headline.highlight?.split(" ") ?? [];
    return (
      <Tag id={id} className={`font-display font-black text-balance ${sizes[size]} ${className}`}>
        {lead.map((w, i) => (
          <Word key={`l${i}`} i={i} word={w} />
        ))}
        {highlight.length > 0 && (
          <span className={highlightClass}>
            {highlight.map((w, i) => (
              <Word key={`h${i}`} i={lead.length + i} word={w} />
            ))}
          </span>
        )}
      </Tag>
    );
  }

  return (
    <Tag id={id} className={`font-display font-black text-balance ${sizes[size]} ${className}`}>
      {headline.lead}
      {headline.highlight && (
        <>
          {" "}
          <span className={highlightClass}>{headline.highlight}</span>
        </>
      )}
    </Tag>
  );
}

function Word({ word, i }: { word: string; i: number }) {
  return (
    <>
      <span className="word-mask">
        <span className="word" style={{ "--i": i } as CSSProperties}>
          {word}
        </span>
      </span>{" "}
    </>
  );
}
