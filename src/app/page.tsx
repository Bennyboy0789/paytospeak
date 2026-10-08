import Image from "next/image";
import type { CSSProperties } from "react";
import withAudience from "@/assets/images/kevin-with-audience-member.jpg";
import stageLights from "@/assets/images/kevin-stage-lights.jpg";
import { BookCover } from "@/components/BookCover";
import { ButtonLink } from "@/components/Button";
import { Credentials } from "@/components/Credentials";
import { Heading } from "@/components/Heading";
import { JsonLd } from "@/components/JsonLd";
import { Marquee } from "@/components/Marquee";
import { Pillars } from "@/components/Pillars";
import { ScrubText } from "@/components/ScrubText";
import { Container, Eyebrow, Section } from "@/components/Section";
import { StageLights } from "@/components/StageLights";
import { SubscribeForm } from "@/components/SubscribeForm";
import { book } from "@/content/book";
import { coaching } from "@/content/coaching";
import { home } from "@/content/home";
import { credentials } from "@/content/shared";
import { applyHref, site } from "@/lib/site";

const { hero, problem, system, about, newsletter } = home;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${site.url}/#kevin`,
      name: "Kevin C. Snyder",
      honorificPrefix: "Dr.",
      jobTitle: "Keynote speaker, author, and speaker coach",
      url: site.parent.url,
      sameAs: site.social.map((s) => s.href),
      hasCredential: [
        { "@type": "EducationalOccupationalCredential", name: `Certified Speaking Professional (CSP)`, recognizedBy: { "@type": "Organization", name: "National Speakers Association" } },
        { "@type": "EducationalOccupationalCredential", name: `Accredited Speaker (AS)`, recognizedBy: { "@type": "Organization", name: "Toastmasters International" } },
      ],
    },
    {
      "@type": "Organization",
      "@id": `${site.url}/#org`,
      name: site.plainName,
      alternateName: site.name,
      url: site.url,
      logo: `${site.url}/logo-paidtospeak-stacked.svg`,
      description: site.description,
      founder: { "@id": `${site.url}/#kevin` },
      parentOrganization: { "@type": "Organization", name: site.parent.name, url: site.parent.url },
    },
  ],
};

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export default function Home() {
  return (
    <>
      <JsonLd data={jsonLd} />

      {/* Hero — runs under the transparent header */}
      <section
        aria-labelledby="hero-title"
        data-spotlight
        className="spotlight relative -mt-18 flex min-h-[100svh] flex-col overflow-hidden pt-18 [--spot-color:rgb(0_168_230/0.08)] [--spot-size:40rem]"
      >
        <div className="absolute inset-x-0 top-0 h-[56svh] overflow-hidden lg:inset-y-0 lg:left-auto lg:right-0 lg:h-auto lg:w-[64%]">
          <Image
            src={stageLights}
            alt="Dr. Kevin C. Snyder speaking on stage, microphone in hand"
            fill
            priority
            placeholder="blur"
            sizes="(min-width: 1024px) 64vw, 100vw"
            className="ken-burns object-cover object-[74%_center]"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/40 lg:bg-gradient-to-r lg:from-background lg:via-background/50 lg:to-transparent" />
          <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
        </div>
        <StageLights preset="hero" />

        <Container className="relative flex flex-1 flex-col justify-end pb-12 pt-[30svh] lg:justify-center lg:py-24">
          <div className="max-w-4xl">
            <div className="enter" style={delay(0)}>
              <Eyebrow>{hero.eyebrow}</Eyebrow>
            </div>
            <Heading as="h1" id="hero-title" size="hero" headline={hero.headline} animate className="mt-7" />
            <p className="enter mt-8 max-w-xl text-lg leading-relaxed text-foreground/80 lg:text-xl" style={delay(650)}>
              {hero.sub}
            </p>
            <div className="enter mt-10 flex flex-wrap items-center gap-4" style={delay(800)}>
              <ButtonLink href={applyHref} magnetic>
                {hero.primaryCta}
              </ButtonLink>
              <ButtonLink href="/coaching" variant="secondary" magnetic>
                {hero.secondaryCta}
              </ButtonLink>
            </div>
          </div>
        </Container>

        <Container className="enter-fade relative hidden items-end justify-between pb-10 lg:flex" >
          <p className="max-w-xs text-xs uppercase leading-relaxed tracking-[0.2em] text-muted-foreground">
            CSP &middot; AS &mdash; {credentials.rarity}
          </p>
          <div aria-hidden="true" className="flex flex-col items-center gap-3 text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
            Scroll
            <span className="relative h-14 w-px overflow-hidden bg-border">
              <span className="scroll-cue absolute inset-0 bg-accent" />
            </span>
          </div>
        </Container>
      </section>

      <Marquee />
      <Credentials />

      {/* The problem */}
      <Section labelledBy="problem-title">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-24">
          <div className="reveal lg:sticky lg:top-36 lg:self-start">
            <Eyebrow>{problem.eyebrow}</Eyebrow>
            <Heading id="problem-title" headline={problem.headline} className="mt-6" />
          </div>
          <ol className="border-t border-border">
            {problem.points.map((p, i) => (
              <li key={p.title} data-spotlight className="reveal spotlight group grid grid-cols-[4.5rem_1fr] gap-4 border-b border-border py-10 lg:grid-cols-[6rem_1fr] lg:px-4 lg:py-12">
                <span aria-hidden="true" className="numeral font-display text-5xl font-black leading-none tracking-tight lg:text-6xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-black tracking-tight transition-transform duration-700 ease-out-expo group-hover:translate-x-2 lg:text-4xl">{p.title}</h3>
                  <p className="mt-3 text-lg leading-relaxed text-foreground/75">{p.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* Statement + about */}
      <section aria-labelledby="about-title" className="relative overflow-hidden border-y border-border bg-ink py-24 lg:py-40">
        <StageLights />
        <Container className="relative">
          <Eyebrow>{about.eyebrow}</Eyebrow>
          <ScrubText id="about-title" headline={about.headline} className="mt-8 max-w-6xl text-[clamp(2.25rem,6vw,5.5rem)] leading-[0.98] tracking-tight" />

          <div className="mt-20 grid items-center gap-12 lg:mt-28 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
            <div className="reveal-clip parallax zoom-on-hover relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src={withAudience}
                alt="Kevin on stage with an audience member, both mid-movement"
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 40rem, 100vw"
                className="object-cover"
              />
            </div>
            <div className="reveal">
              <p className="text-xl leading-relaxed text-foreground/85 lg:text-2xl lg:leading-relaxed">{about.body}</p>
              <p className="mt-8 border-l-2 border-accent pl-5 text-sm text-muted-foreground">
                CSP &middot; AS &middot; {credentials.rarity}
              </p>
              <ButtonLink href="/about" variant="tertiary" className="mt-10 text-lg">
                {about.cta}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      {/* The system */}
      <Section tone="card" labelledBy="system-title">
        <div className="reveal flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <Eyebrow>{system.eyebrow}</Eyebrow>
            <Heading id="system-title" headline={system.headline} className="mt-6" />
          </div>
          <ButtonLink href="/coaching" variant="tertiary" className="shrink-0 self-start text-lg md:self-auto">
            {system.cta}
          </ButtonLink>
        </div>
        {/* TODO(kc): pillars are placeholders until Kevin confirms them — see src/content/coaching.ts */}
        <div className="mt-14 lg:mt-20">
          <Pillars items={coaching.pillars.items} />
        </div>
      </Section>

      {/* Book */}
      <section aria-labelledby="book-title" className="relative overflow-hidden border-y border-border bg-ink py-24 lg:py-40">
        <StageLights preset="hero" />
        <Container className="relative grid items-center gap-16 md:grid-cols-[minmax(0,20rem)_1fr] lg:gap-28">
          <BookCover className="reveal mx-auto w-full max-w-[15rem] md:max-w-none" />
          <div className="reveal">
            <Eyebrow>{home.book.eyebrow}</Eyebrow>
            <h2 id="book-title" className="mt-6 font-display text-[clamp(3rem,8vw,7rem)] font-black leading-[0.9] tracking-tight">
              {book.title}
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/80 lg:text-xl">{home.book.body}</p>
            <ButtonLink href="/book" className="mt-10" magnetic>
              {home.book.cta}
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* Newsletter */}
      <Section labelledBy="newsletter-title">
        <div className="reveal border-beam rounded-[2rem] bg-card p-8 sm:p-10 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16 lg:p-16">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[inherit]">
            <div className="absolute -right-32 -top-32 size-96 rounded-full bg-primary/15 blur-3xl" />
            <div className="absolute -bottom-40 -left-20 size-96 rounded-full bg-accent/10 blur-3xl" />
          </div>
          <div>
            <Eyebrow>{newsletter.eyebrow}</Eyebrow>
            <Heading id="newsletter-title" size="small" headline={newsletter.headline} className="mt-6" />
            <p className="mt-5 text-lg leading-relaxed text-foreground/80">{newsletter.body}</p>
          </div>
          <div className="mt-10 lg:mt-0">
            <SubscribeForm list="newsletter" submitLabel="Subscribe" />
          </div>
        </div>
      </Section>
    </>
  );
}
