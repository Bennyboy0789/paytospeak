import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { ApplyForm } from "@/components/ApplyForm";
import { ButtonLink } from "@/components/Button";
import { Heading } from "@/components/Heading";
import { Container, Eyebrow } from "@/components/Section";
import { StageLights } from "@/components/StageLights";
import { apply } from "@/content/apply";
import { calendly } from "@/content/programs/types";
import { credentials, stats } from "@/content/shared";
import { applicationsOpen } from "@/lib/email";

export const metadata: Metadata = {
  title: apply.meta.title,
  description: apply.meta.description,
  alternates: { canonical: "/apply" },
};

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export default function ApplyPage() {
  const open = applicationsOpen();
  return (
    <section aria-labelledby="apply-title" className="relative -mt-18 overflow-hidden pt-18">
      <StageLights preset="hero" />
      {/* Phones read intro, form, then the extras; from lg the intro and extras share the left column. */}
      <Container className="relative grid gap-12 py-16 lg:grid-cols-[1fr_1.3fr] lg:gap-x-24 lg:gap-y-0 lg:py-28">
        <div className="lg:col-start-1 lg:row-start-1">
          <div className="enter">
            <Eyebrow>{apply.hero.eyebrow}</Eyebrow>
          </div>
          <Heading as="h1" id="apply-title" size="page" headline={apply.hero.headline} animate className="mt-7 lg:text-[clamp(3rem,5.2vw,5rem)]" />
          <p className="enter mt-8 text-lg leading-relaxed text-pretty text-foreground/80" style={delay(500)}>
            {open ? apply.hero.sub : apply.closed.body}
          </p>
        </div>

        <div
          className="enter border-beam rounded-[2rem] bg-card p-6 sm:p-10 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-start lg:p-12"
          style={delay(300)}
        >
          {open ? (
            <ApplyForm />
          ) : (
            <div>
              <h2 className="font-display text-3xl font-black tracking-tight text-balance lg:text-4xl">{apply.closed.heading}</h2>
              <ButtonLink href={calendly.strategy} target="_blank" rel="noopener" className="mt-8 w-full sm:w-auto">
                {apply.closed.cta}
              </ButtonLink>
              <p className="mt-6 text-sm text-muted-foreground">
                {apply.contact.emailLabel}{" "}
                <a href={`mailto:${apply.contact.email}`} className="link-draw font-semibold text-primary">
                  {apply.contact.email}
                </a>
              </p>
            </div>
          )}
        </div>

        <div className="lg:col-start-1 lg:row-start-2">
          <div className="enter border-t border-border pt-8 lg:mt-10" style={delay(600)}>
            <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">{apply.values.heading}</h2>
            <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 font-display text-xl font-bold">
              {apply.values.items.map((value) => (
                <li key={value} className="flex items-center gap-2.5">
                  <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
                  {value}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm text-muted-foreground">{apply.values.note}</p>
          </div>
          {open && (
            <dl className="enter mt-8 grid gap-5 text-sm sm:grid-cols-2" style={delay(650)}>
              <div>
                <dt className="text-muted-foreground">{apply.contact.emailLabel}</dt>
                <dd>
                  <a href={`mailto:${apply.contact.email}`} className="link-draw inline-block py-1.5 font-semibold text-primary">
                    {apply.contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-muted-foreground">{apply.contact.callLabel}</dt>
                <dd>
                  <a href={calendly.strategy} target="_blank" rel="noopener" className="link-draw inline-block py-1.5 font-semibold text-primary">
                    {apply.contact.callCta}
                  </a>
                </dd>
              </div>
            </dl>
          )}
          <ul className="enter mt-10 space-y-2 border-t border-border pt-8 text-sm leading-relaxed text-pretty text-muted-foreground" style={delay(650)}>
            <li>
              {credentials.csp} and {credentials.as}. {credentials.rarity}
            </li>
            <li>{stats.map((s) => `${s.value} ${s.label}`).join(" · ")}</li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
