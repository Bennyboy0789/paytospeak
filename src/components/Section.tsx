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
    <section id={id} aria-labelledby={labelledBy} className={`${tones[tone]} py-20 lg:py-32 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="text-xs font-semibold uppercase tracking-widest text-accent">{children}</p>;
}
