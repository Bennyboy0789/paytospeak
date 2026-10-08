import type { MDXComponents } from "mdx/types";
import Link from "next/link";

// Blog post typography. Kept here instead of a typography plugin so posts use
// exactly the brand scale from docs/BRAND.md.
const components: MDXComponents = {
  h2: (props) => <h2 className="mt-14 font-display text-3xl font-black tracking-tight text-balance" {...props} />,
  h3: (props) => <h3 className="mt-10 font-display text-xl font-bold tracking-tight" {...props} />,
  p: (props) => <p className="mt-6 text-lg leading-relaxed text-foreground/85" {...props} />,
  ul: (props) => <ul className="mt-6 list-disc space-y-3 pl-6 text-lg leading-relaxed text-foreground/85 marker:text-accent" {...props} />,
  ol: (props) => <ol className="mt-6 list-decimal space-y-3 pl-6 text-lg leading-relaxed text-foreground/85 marker:text-accent" {...props} />,
  blockquote: (props) => (
    <blockquote className="mt-8 border-l-2 border-accent pl-6 font-display text-2xl font-bold tracking-tight text-foreground" {...props} />
  ),
  a: ({ href = "", ...props }) =>
    href.startsWith("/") ? (
      <Link href={href} className="text-primary underline underline-offset-4 hover:text-foreground" {...props} />
    ) : (
      <a href={href} className="text-primary underline underline-offset-4 hover:text-foreground" {...props} />
    ),
  strong: (props) => <strong className="font-semibold text-foreground" {...props} />,
  hr: () => <hr className="my-12 border-border" />,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
