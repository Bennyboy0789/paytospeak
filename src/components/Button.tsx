import Link from "next/link";
import type { ComponentProps } from "react";

const variants = {
  primary: "rounded-full bg-accent font-semibold uppercase tracking-wide text-accent-foreground shadow-amber hover:brightness-110",
  secondary: "rounded-full border border-border font-semibold uppercase tracking-wide text-foreground hover:border-accent",
  tertiary: "font-semibold text-primary hover:text-foreground",
} as const;

const sizes = {
  md: "px-7 py-3.5 text-sm",
  sm: "px-5 py-2.5 text-sm",
} as const;

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
};

export function ButtonLink({ variant = "primary", size = "md", className = "", children, ...props }: ButtonLinkProps) {
  return (
    <Link
      {...props}
      className={`inline-flex items-center justify-center gap-2 transition ${variants[variant]} ${variant === "tertiary" ? "" : sizes[size]} ${className}`}
    >
      {children}
      {variant === "tertiary" && <span aria-hidden="true">&rarr;</span>}
    </Link>
  );
}
