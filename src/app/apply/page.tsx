import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { ApplyForm } from "@/components/ApplyForm";
import { Heading } from "@/components/Heading";
import { Container, Eyebrow } from "@/components/Section";
import { StageLights } from "@/components/StageLights";
import { apply } from "@/content/apply";
import { credentials, stats } from "@/content/shared";

export const metadata: Metadata = {
  title: apply.meta.title,
  description: apply.meta.description,
  alternates: { canonical: "/apply" },
};

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export default function ApplyPage() {
  return (
    <section aria-labelledby="apply-title" className="relative -mt-18 overflow-hidden pt-18">
      <StageLights preset="hero" />
      <Container className="relative grid gap-14 py-16 lg:grid-cols-[1fr_1.3fr] lg:gap-24 lg:py-32">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <div className="enter">
            <Eyebrow>{apply.hero.eyebrow}</Eyebrow>
          </div>
          <Heading as="h1" id="apply-title" size="page" headline={apply.hero.headline} animate className="mt-7" />
          <p className="enter mt-8 text-lg leading-relaxed text-foreground/80" style={delay(500)}>
            {apply.hero.sub}
          </p>
          <ul className="enter mt-10 space-y-2 border-t border-border pt-8 text-sm text-muted-foreground" style={delay(650)}>
            <li>CSP &middot; AS &middot; {credentials.rarity}</li>
            <li>{stats.map((s) => `${s.value} ${s.label}`).join(" · ")}</li>
          </ul>
        </div>
        <div className="enter border-beam rounded-[2rem] bg-card p-7 sm:p-10 lg:p-12" style={delay(300)}>
          <ApplyForm />
        </div>
      </Container>
    </section>
  );
}
