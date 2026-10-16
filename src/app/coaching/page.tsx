import type { Metadata } from "next";
import Image from "next/image";
import type { CSSProperties } from "react";
import ballroom from "@/assets/images/kevin-stage-ballroom.jpg";
import viewFromStage from "@/assets/images/kevin-view-from-stage.jpg";
import { ButtonLink } from "@/components/Button";
import { CompareTable } from "@/components/CompareTable";
import { Credentials } from "@/components/Credentials";
import { Heading } from "@/components/Heading";
import { Pillars } from "@/components/Pillars";
import { Placeholder } from "@/components/Placeholder";
import { ProgramGrid } from "@/components/ProgramPage";
import { Container, Eyebrow, Section } from "@/components/Section";
import { StageLights } from "@/components/StageLights";
import { YouTube } from "@/components/YouTube";
import { coaching, type Offer } from "@/content/coaching";
import { applyHref } from "@/lib/site";

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export const metadata: Metadata = {
  title: coaching.meta.title,
  description: coaching.meta.description,
  alternates: { canonical: "/coaching" },
};

const { hero, fit, pillars, how, why, apply } = coaching;

export default function CoachingPage() {
  return (
    <>
      <section aria-labelledby="coaching-title" className="hero-scope relative -mt-18 overflow-hidden pt-18">
        <StageLights preset="hero" />
        <Container className="hero-out relative grid items-center gap-14 py-16 lg:grid-cols-[1.05fr_1fr] lg:gap-20 lg:py-32">
          <div>
            <div className="enter">
              <Eyebrow>{hero.eyebrow}</Eyebrow>
            </div>
            <Heading as="h1" id="coaching-title" size="hero" headline={hero.headline} animate className="mt-7" />
            <p className="enter mt-8 max-w-xl text-lg leading-relaxed text-foreground/80 lg:text-xl" style={delay(450)}>
              {hero.sub}
            </p>
            <div className="enter mt-10 flex flex-wrap gap-4" style={delay(600)}>
              <ButtonLink href={applyHref} magnetic className="w-full sm:w-auto">
                {apply.cta}
              </ButtonLink>
              <ButtonLink href="#how" variant="secondary" magnetic className="w-full sm:w-auto">
                {how.eyebrow}
              </ButtonLink>
            </div>
          </div>
          <figure className="enter" style={delay(250)}>
            <div className="zoom-on-hover relative aspect-[4/5] overflow-hidden rounded-3xl border border-border sm:aspect-[4/3] lg:aspect-[4/5]">
              <Image
                src={viewFromStage}
                alt="Kevin on stage, seen from behind, facing a full ballroom audience"
                fill
                priority
                placeholder="blur"
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="ken-burns object-cover lg:object-[12%_center]"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
            </div>
            <figcaption className="mt-4 text-sm text-muted-foreground">{hero.imageCaption}</figcaption>
          </figure>
        </Container>
      </section>

      <Credentials />

      {/* Kevin's coaching options chart */}
      <Section labelledBy="compare-title">
        <div className="reveal flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <Eyebrow>Coaching options</Eyebrow>
            <Heading id="compare-title" headline={{ lead: "Choose the best path", highlight: "for your speaking goals." }} className="mt-5" />
          </div>
          <p className="max-w-sm text-muted-foreground">
            Coaching in 1:1, group and online formats. Kevin can also customize coaching to work with your budget.
          </p>
        </div>
        <p className="mt-10 hidden text-sm text-muted-foreground sm:block lg:hidden">Scroll the table sideways to compare every option.</p>
        <div className="mt-10 sm:mt-4 lg:mt-12">
          <CompareTable />
        </div>
      </Section>

      {/* Fit */}
      <Section tone="card" labelledBy="fit-title" className="border-y border-border">
        <div className="reveal max-w-3xl">
          <Eyebrow>{fit.eyebrow}</Eyebrow>
          <Heading id="fit-title" headline={fit.headline} className="mt-5" />
        </div>
        <div className="reveal-stagger mt-14 grid items-start gap-5 lg:grid-cols-[1.25fr_1fr]">
          <div data-spotlight className="glow-card spotlight rounded-3xl border border-accent/40 bg-card p-8 lg:p-12">
            <h3 className="font-display text-2xl font-black tracking-tight">This is for you if</h3>
            <ul className="mt-6 space-y-5">
              {fit.yes.map((line) => (
                <li key={line} className="flex gap-4 text-lg leading-relaxed">
                  <Mark kind="yes" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
          <div data-spotlight className="glow-card spotlight rounded-3xl border border-border p-8 lg:p-12 [--spot-color:rgb(0_168_230/0.07)]">
            <h3 className="font-display text-2xl font-black tracking-tight text-foreground/80">Probably not a fit if</h3>
            <ul className="mt-6 space-y-5">
              {fit.no.map((line) => (
                <li key={line} className="flex gap-4 leading-relaxed text-muted-foreground">
                  <Mark kind="no" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Pillars */}
      <Section labelledBy="pillars-title">
        <div className="reveal max-w-3xl">
          <Eyebrow>{pillars.eyebrow}</Eyebrow>
          <Heading id="pillars-title" headline={pillars.headline} className="mt-5" />
        </div>
        <div className="mt-12">
          <Placeholder title="Confirm the coaching pillars">
            <p>These four are working placeholders from the content doc. Kevin to confirm, rename, or replace them.</p>
          </Placeholder>
        </div>
        <div className="mt-10">
          <Pillars items={pillars.items} layout="rows" />
        </div>
      </Section>

      {/* How it works */}
      <Section id="how" tone="card" labelledBy="how-title" className="scroll-mt-20 border-t border-border">
        <div className="reveal">
          <Eyebrow>{how.eyebrow}</Eyebrow>
          <Heading id="how-title" headline={how.headline} className="mt-6" />
        </div>
        <div className="mt-12">{how.offer ? <OfferDetails offer={how.offer} /> : <OfferPlaceholder />}</div>
      </Section>

      {/* Why Kevin */}
      <section aria-labelledby="why-title" className="relative overflow-hidden border-y border-border bg-ink">
        <div className="parallax relative h-72 overflow-hidden sm:h-96 lg:absolute lg:inset-y-0 lg:left-0 lg:h-auto lg:w-1/2">
          <Image src={ballroom} alt="Kevin speaking to a ballroom audience, arms raised" fill placeholder="blur" sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover object-[62%_center] lg:object-[76%_center]" />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink to-transparent lg:bg-gradient-to-l lg:via-transparent lg:via-30%" />
        </div>
        <Container className="relative py-16 lg:py-32">
          <div className="reveal lg:ml-auto lg:w-1/2 lg:pl-20">
            <Eyebrow>{why.eyebrow}</Eyebrow>
            <Heading id="why-title" headline={why.headline} className="mt-5" />
            <p className="mt-6 text-lg leading-relaxed text-foreground/80">{why.body}</p>
            <ButtonLink href="/about" variant="tertiary" className="mt-8">
              Read Kevin’s story
            </ButtonLink>
            <YouTube id="SfJs07T5fNw" title="Kevin’s coaching philosophy and how he helps speakers succeed" />
          </div>
        </Container>
      </section>

      {/* Apply */}
      {/* Every program carried over from the Wix site */}
      <Section tone="card" labelledBy="programs-title" className="border-b border-border">
        <div className="reveal max-w-3xl">
          <Eyebrow>More ways to work with Kevin</Eyebrow>
          <Heading id="programs-title" headline={{ lead: "Group, TEDx, on demand,", highlight: "and more." }} className="mt-6" />
        </div>
        <ProgramGrid className="mt-12" />
      </Section>

      <Section labelledBy="apply-title">
        <div className="reveal border-beam rounded-[2rem] bg-card px-7 py-16 text-center lg:px-14 lg:py-24">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[inherit]">
            <div className="absolute -bottom-40 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-2xl">
            <Eyebrow className="justify-center">{apply.eyebrow}</Eyebrow>
            <Heading id="apply-title" headline={apply.headline} className="mt-5" />
            <p className="mt-6 text-lg leading-relaxed text-balance text-foreground/80">{apply.body}</p>
            <ButtonLink href={applyHref} className="mt-10" magnetic>
              {apply.cta}
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}

function Mark({ kind }: { kind: "yes" | "no" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className={`mt-1.5 size-5 shrink-0 ${kind === "yes" ? "text-accent" : "text-muted-foreground"}`} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      {kind === "yes" ? <path d="M4 10.5l4 4 8-9" /> : <path d="M5 5l10 10M15 5L5 15" />}
    </svg>
  );
}

function OfferPlaceholder() {
  return (
    <Placeholder title="Program structure: the highest-priority open question">
      <p>One program or tiers? One-on-one, group cohort, self-paced, or a ladder? Price points, length, cadence?</p>
      <p>
        When confirmed, fill in <code className="font-mono text-foreground">offer</code> in{" "}
        <code className="font-mono text-foreground">src/content/coaching.ts</code>. One tier renders as a single panel; several render
        side by side.
      </p>
    </Placeholder>
  );
}

// Long include lists show this many, with the rest behind a disclosure.
const SHOWN = 6;

function OfferDetails({ offer }: { offer: Offer }) {
  // Priced programs lead, side by side; the lighter options follow in a row of their own.
  const lead = offer.tiers.filter((t) => t.price);
  const more = offer.tiers.filter((t) => !t.price);
  return (
    <div>
      <p className="max-w-3xl text-lg leading-relaxed text-pretty text-muted-foreground">{offer.format}</p>
      <div className={`mt-8 grid gap-6 ${lead.length > 1 ? "md:grid-cols-2" : ""}`}>
        {lead.map((tier) => (
          <Tier key={tier.name} tier={tier} />
        ))}
      </div>
      {more.length > 0 && (
        <>
          <p className="mt-16 text-xs font-semibold uppercase tracking-[0.22em] text-accent">Shorter options</p>
          <div className={`mt-6 grid gap-6 ${more.length > 2 ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2"}`}>
            {more.map((tier) => (
              <Tier key={tier.name} tier={tier} compact />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function Tier({ tier, compact }: { tier: Offer["tiers"][number]; compact?: boolean }) {
  const shown = tier.includes.slice(0, SHOWN);
  const rest = tier.includes.slice(SHOWN);
  const cta = tier.cta ?? { label: "Apply", href: applyHref };
  const external = /^https?:\/\//.test(cta.href);
  return (
    <article data-spotlight className={`glow-card spotlight flex flex-col rounded-3xl border border-border bg-background hover:-translate-y-1 ${compact ? "p-7 lg:p-8" : "p-8 lg:p-10"}`}>
      <h3 className={`font-display font-black tracking-[-0.01em] text-balance ${compact ? "text-xl lg:text-2xl" : "text-2xl"}`}>{tier.name}</h3>
      {tier.price ? (
        <p className="mt-4 font-display text-4xl font-black tracking-tight">
          {tier.price}
          {tier.cadence && <span className="ml-2 font-sans text-base font-medium tracking-normal text-muted-foreground">{tier.cadence}</span>}
        </p>
      ) : (
        tier.cadence && <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-balance text-accent">{tier.cadence}</p>
      )}
      <p className="mt-4 leading-relaxed text-pretty text-foreground/80">{tier.summary}</p>
      {tier.guarantee && <p className="mt-5 border-l-2 border-accent pl-4 font-semibold leading-relaxed">{tier.guarantee}</p>}
      <ul className="mt-6 space-y-3 border-t border-border pt-6">
        {shown.map((item) => (
          <IncludeItem key={item} item={item} />
        ))}
      </ul>
      {rest.length > 0 && (
        <details className="group mt-3">
          <summary className="flex cursor-pointer list-none items-center gap-2 py-2 text-sm font-semibold text-primary [&::-webkit-details-marker]:hidden">
            <span className="group-open:hidden">See everything included ({rest.length} more)</span>
            <span className="hidden group-open:inline">Show less</span>
          </summary>
          <ul className="mt-3 space-y-3">
            {rest.map((item) => (
              <IncludeItem key={item} item={item} />
            ))}
          </ul>
        </details>
      )}
      <div className="mt-auto pt-8">
        <ButtonLink href={cta.href} variant={compact ? "secondary" : "primary"} {...(external ? { target: "_blank", rel: "noopener" } : {})}>
          {cta.label}
        </ButtonLink>
      </div>
    </article>
  );
}

function IncludeItem({ item }: { item: string }) {
  return (
    <li className="flex gap-3">
      <Mark kind="yes" />
      <span>{item}</span>
    </li>
  );
}
