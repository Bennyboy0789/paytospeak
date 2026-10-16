import { type CSSProperties, Fragment } from "react";
import type { Headline } from "@/content/shared";

const sizes = {
  hero: "text-[clamp(3rem,10.5vw,7.5rem)] leading-[0.9] tracking-tight",
  page: "text-[clamp(2.75rem,8vw,6.25rem)] leading-[0.95] tracking-tight",
  section: "text-4xl leading-[1.02] tracking-tight lg:text-6xl",
  small: "text-3xl leading-[1.05] tracking-tight lg:text-5xl",
} as const;

type HeadingProps = {
  headline: Headline;
  as?: "h1" | "h2" | "h3";
  size?: keyof typeof sizes;
  id?: string;
  className?: string;
  /** Words rise into place on load. For above-the-fold headings only. Other headings rise line by line as they scroll in. */
  animate?: boolean;
};

/** Brand headline: Inter Tight black, with one phrase in blue (docs/BRAND.md). */
export function Heading({ headline, as: Tag = "h2", size = "section", id, className = "", animate }: HeadingProps) {
  // The glow is a filter on the whole phrase, not a text-shadow, so the word masks never clip it.
  const highlightClass = "text-primary [filter:drop-shadow(0_0_22px_rgb(0_168_230/0.45))]";

  if (animate) {
    const lead = headline.lead.split(" ");
    const highlight = words(headline.highlight);
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
      {headline.lead.split(" ").map((w, i) => (
        <Word key={`l${i}`} word={w} />
      ))}
      {headline.highlight && (
        <span className={highlightClass}>
          {words(headline.highlight).map((w, i) => (
            <Word key={`h${i}`} word={w} />
          ))}
        </span>
      )}
    </Tag>
  );
}

/**
 * The highlight's first two words travel together (a non-breaking space inside one mask),
 * so the blue phrase never starts with a lone word at the end of the line above.
 */
const NBSP = String.fromCharCode(0xa0);
const APOSTROPHE = String.fromCharCode(0x2019);

function words(phrase?: string) {
  const w = phrase?.split(" ") ?? [];
  return w.length > 2 ? [`${w[0]}${NBSP}${w[1]}`, ...w.slice(2)] : w;
}

/**
 * Inter Tight's curly apostrophe carries wide side bearings that open a visible gap at
 * display sizes ("Let ’s"), so it gets pulled in on both sides.
 */
function Apostrophes({ word }: { word: string }) {
  const parts = word.split(APOSTROPHE);
  if (parts.length === 1) return word;
  return parts.map((part, i) => (
    <Fragment key={i}>
      {i > 0 && <span className="-mx-[0.045em]">{APOSTROPHE}</span>}
      {part}
    </Fragment>
  ));
}

/** Without `i`, the word rises with its line as it scrolls into view (.word-scroll). */
function Word({ word, i }: { word: string; i?: number }) {
  return (
    <>
      <span className="word-mask">
        <span className={i === undefined ? "word-scroll" : "word"} style={i === undefined ? undefined : ({ "--i": i } as CSSProperties)}>
          <Apostrophes word={word} />
        </span>
      </span>{" "}
    </>
  );
}
