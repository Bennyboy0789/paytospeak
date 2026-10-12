import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { ApplyForm } from "@/components/ApplyForm";
import { Heading } from "@/components/Heading";
import { Container, Eyebrow } from "@/components/Section";
import { StageLights } from "@/components/StageLights";
import { apply } from "@/content/apply";
import { calendly } from "@/content/programs/types";
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
          <div className="enter mt-10 border-t border-border pt-8" style={delay(600)}>
            <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">{apply.values.heading}</h2>
            <p className="mt-3 font-display text-xl font-bold tracking-tight">{apply.values.items.join(" · ")}</p>
            <p className="mt-2 text-sm text-muted-foreground">{apply.values.note}</p>
          </div>
          <dl className="enter mt-8 grid gap-5 text-sm sm:grid-cols-2" style={delay(650)}>
            <div>
              <dt className="text-muted-foreground">{apply.contact.emailLabel}</dt>
              <dd className="mt-1">
                <a href={`mailto:${apply.contact.email}`} className="link-draw font-semibold text-primary">
                  {apply.contact.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-muted-foreground">{apply.contact.callLabel}</dt>
              <dd className="mt-1">
                <a href={calendly.strategy} target="_blank" rel="noopener" className="link-draw font-semibold text-primary">
                  {apply.contact.callCta}
                </a>
              </dd>
            </div>
          </dl>
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
