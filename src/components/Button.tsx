import Link from "next/link";
import type { ComponentProps } from "react";

const variants = {
  primary:
    "btn-shine rounded-full bg-accent font-semibold uppercase tracking-wide text-accent-foreground shadow-amber hover:-translate-y-0.5 hover:shadow-amber-lg",
  secondary:
    "group/btn relative isolate overflow-hidden rounded-full border border-border font-semibold uppercase tracking-wide text-foreground hover:border-accent hover:text-accent-foreground",
  tertiary: "group/btn font-semibold text-primary hover:text-foreground",
} as const;

const sizes = {
  md: "px-7 py-3.5 text-sm",
  sm: "px-5 py-2.5 text-sm",
} as const;

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  /** Drift toward the cursor (PointerFX). For hero CTAs. */
  magnetic?: boolean;
};

export function ButtonLink({ variant = "primary", size = "md", magnetic, className = "", children, ...props }: ButtonLinkProps) {
  return (
    <Link
      {...props}
      data-magnetic={magnetic || undefined}
      className={`group inline-flex items-center justify-center gap-2 transition duration-500 ease-out-expo ${variants[variant]} ${variant === "tertiary" ? "" : sizes[size]} ${className}`}
    >
      {variant === "secondary" && (
        <span
          aria-hidden="true"
          className="absolute inset-0 -z-10 origin-bottom scale-y-0 rounded-full bg-accent transition-transform duration-500 ease-out-expo group-hover/btn:scale-y-100"
        />
      )}
      {variant === "tertiary" ? <span className="link-draw pb-0.5">{children}</span> : children}
      <Arrow variant={variant} />
    </Link>
  );
}

function Arrow({ variant }: { variant: keyof typeof variants }) {
  // Tertiary links always show the arrow; filled buttons slide it in on hover.
  const motion =
    variant === "tertiary"
      ? "w-4 group-hover/btn:translate-x-1"
      : "-ml-2 w-0 opacity-0 group-hover:ml-0 group-hover:w-4 group-hover:opacity-100";
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`h-4 shrink-0 transition-all duration-500 ease-out-expo ${motion}`}>
      <path d="M2 8h11M9 4l4 4-4 4" />
    </svg>
  );
}
