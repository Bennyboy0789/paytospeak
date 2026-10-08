import Image from "next/image";
import withAudience from "@/assets/images/kevin-with-audience-member.jpg";
import stageLights from "@/assets/images/kevin-stage-lights.jpg";
import { BookCover } from "@/components/BookCover";
import { ButtonLink } from "@/components/Button";
import { Credentials } from "@/components/Credentials";
import { Heading } from "@/components/Heading";
import { JsonLd } from "@/components/JsonLd";
import { Pillars } from "@/components/Pillars";
import { Container, Eyebrow, Section } from "@/components/Section";
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

export default function Home() {
  return (
    <>
      <JsonLd data={jsonLd} />

      {/* Hero */}
      <section aria-labelledby="hero-title" className="relative overflow-hidden">
        <div className="relative h-72 sm:h-[26rem] lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[60%]">
          <Image
            src={stageLights}
            alt="Dr. Kevin C. Snyder speaking on stage, microphone in hand"
            fill
            priority
            placeholder="blur"
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover object-[78%_center]"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent lg:bg-gradient-to-r lg:from-background lg:via-background/40" />
        </div>
        <Container className="relative -mt-10 pb-20 sm:-mt-16 lg:mt-0 lg:py-40">
          <div className="max-w-3xl">
            <Eyebrow>{hero.eyebrow}</Eyebrow>
            <Heading as="h1" id="hero-title" size="page" headline={hero.headline} className="mt-6" />
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/80">{hero.sub}</p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <ButtonLink href={applyHref}>{hero.primaryCta}</ButtonLink>
              <ButtonLink href="/coaching" variant="secondary">
                {hero.secondaryCta}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <Credentials />

      {/* The problem */}
      <Section labelledBy="problem-title">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Eyebrow>{problem.eyebrow}</Eyebrow>
            <Heading id="problem-title" headline={problem.headline} className="mt-5" />
          </div>
          <ol className="border-t border-border">
            {problem.points.map((p, i) => (
              <li key={p.title} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-border py-9">
                <span aria-hidden="true" className="pt-1 font-display text-sm font-black tracking-widest text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-black tracking-tight lg:text-3xl">{p.title}</h3>
                  <p className="mt-3 text-lg leading-relaxed text-foreground/80">{p.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* The system */}
      <Section tone="card" labelledBy="system-title" className="border-y border-border">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Eyebrow>{system.eyebrow}</Eyebrow>
            <Heading id="system-title" headline={system.headline} className="mt-5" />
          </div>
          <ButtonLink href="/coaching" variant="tertiary" className="shrink-0">
            {system.cta}
          </ButtonLink>
        </div>
        {/* TODO(kc): pillars are placeholders until Kevin confirms them — see src/content/coaching.ts */}
        <div className="mt-12">
          <Pillars items={coaching.pillars.items} />
        </div>
      </Section>

      {/* About */}
      <Section labelledBy="about-title">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border">
            <Image
              src={withAudience}
              alt="Kevin on stage with an audience member, both mid-movement"
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 34rem, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <Eyebrow>{about.eyebrow}</Eyebrow>
            <Heading id="about-title" size="small" headline={about.headline} className="mt-5" />
            <p className="mt-6 text-lg leading-relaxed text-foreground/80">{about.body}</p>
            <p className="mt-6 text-sm text-muted-foreground">
              CSP &middot; AS &middot; {credentials.rarity}
            </p>
            <ButtonLink href="/about" variant="tertiary" className="mt-8">
              {about.cta}
            </ButtonLink>
          </div>
        </div>
      </Section>

      {/* Book */}
      <Section tone="ink" labelledBy="book-title" className="border-y border-border">
        <div className="grid items-center gap-12 md:grid-cols-[minmax(0,18rem)_1fr] lg:gap-20">
          <BookCover className="mx-auto max-w-[16rem] md:max-w-none" />
          <div>
            <Eyebrow>{home.book.eyebrow}</Eyebrow>
            <h2 id="book-title" className="mt-5 font-display text-4xl font-black tracking-tight lg:text-6xl">
              {book.title}
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/80">{home.book.body}</p>
            <ButtonLink href="/book" className="mt-10">
              {home.book.cta}
            </ButtonLink>
          </div>
        </div>
      </Section>

      {/* Newsletter */}
      <Section labelledBy="newsletter-title">
        <div className="rounded-3xl border border-border bg-card p-8 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16 lg:p-14">
          <div>
            <Eyebrow>{newsletter.eyebrow}</Eyebrow>
            <Heading id="newsletter-title" size="small" headline={newsletter.headline} className="mt-5" />
            <p className="mt-5 text-lg leading-relaxed text-foreground/80">{newsletter.body}</p>
          </div>
          <div className="mt-8 lg:mt-0">
            <SubscribeForm list="newsletter" submitLabel="Subscribe" />
          </div>
        </div>
      </Section>
    </>
  );
}
