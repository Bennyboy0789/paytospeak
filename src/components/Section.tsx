import type { ReactNode } from "react";

const tones = {
  background: "bg-background",
  card: "bg-card",
  ink: "bg-ink",
} as const;

type SectionProps = {
  children: ReactNode;
  tone?: keyof typeof tones;
  id?: string;
  className?: string;
  labelledBy?: string;
};

export function Section({ children, tone = "background", id, className = "", labelledBy }: SectionProps) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`relative ${tones[tone]} py-24 lg:py-40 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 ${className}`}>{children}</div>;
}

/** Amber label above a headline, led by a short rule. */
export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent ${className}`}>
      <span aria-hidden="true" className="h-px w-8 bg-accent" />
      {children}
    </p>
  );
}
