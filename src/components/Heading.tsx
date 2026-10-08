import type { Headline } from "@/content/shared";

const sizes = {
  hero: "text-5xl leading-[0.95] sm:text-6xl lg:text-7xl xl:text-8xl",
  page: "text-5xl leading-[0.95] sm:text-6xl lg:text-7xl",
  section: "text-4xl leading-[1.05] lg:text-5xl",
  small: "text-3xl leading-[1.05] lg:text-4xl",
} as const;

type HeadingProps = {
  headline: Headline;
  as?: "h1" | "h2" | "h3";
  size?: keyof typeof sizes;
  id?: string;
  className?: string;
};

/** Brand headline: Inter Tight black, with one phrase in blue (docs/BRAND.md). */
export function Heading({ headline, as: Tag = "h2", size = "section", id, className = "" }: HeadingProps) {
  return (
    <Tag id={id} className={`font-display font-black tracking-tight text-balance ${sizes[size]} ${className}`}>
      {headline.lead}
      {headline.highlight && (
        <>
          {" "}
          <span className="text-primary">{headline.highlight}</span>
        </>
      )}
    </Tag>
  );
}
