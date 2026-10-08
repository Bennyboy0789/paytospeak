import type { Metadata } from "next";
import Image from "next/image";
import type { CSSProperties } from "react";
import ballroom from "@/assets/images/kevin-stage-ballroom.jpg";
import studentSelfie from "@/assets/images/kevin-student-selfie.jpg";
import { ButtonLink } from "@/components/Button";
import { Heading } from "@/components/Heading";
import { Placeholder } from "@/components/Placeholder";
import { Container, Eyebrow, Section } from "@/components/Section";
import { StageLights } from "@/components/StageLights";
import { about } from "@/content/about";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: about.meta.title,
  description: about.meta.description,
  alternates: { canonical: "/about" },
};

// Photos placed between chapters, by chapter index.
const photos: Record<number, { src: typeof ballroom; alt: string }> = {
  1: { src: ballroom, alt: "Kevin speaking to a ballroom audience, arms raised" },
  3: { src: studentSelfie, alt: "Kevin taking a selfie with a student in front of a packed gymnasium audience" },
};

export default function AboutPage() {
  return (
    <>
      <section aria-labelledby="about-title" className="relative -mt-18 overflow-hidden pt-18">
        <StageLights preset="hero" />
        <Container className="relative py-20 lg:py-36">
          <div className="enter">
            <Eyebrow>{about.hero.eyebrow}</Eyebrow>
          </div>
          <Heading as="h1" id="about-title" size="page" headline={about.hero.headline} animate className="mt-7 max-w-6xl" />
          <p className="enter mt-10 max-w-2xl text-xl leading-relaxed text-foreground/80" style={{ "--d": "900ms" } as CSSProperties}>
            {about.hero.sub}
          </p>
        </Container>
      </section>

      <Section tone="card" className="border-y border-border">
        <ol className="chapters relative space-y-24 lg:space-y-36">
          <li aria-hidden="true" className="absolute inset-y-0 left-[1.75rem] hidden w-px bg-border lg:block">
            <span className="draw-y absolute inset-0 bg-gradient-to-b from-accent via-accent to-primary" />
          </li>
          {about.chapters.map((chapter, i) => (
            <li key={chapter.eyebrow}>
              <article className="reveal grid gap-6 lg:grid-cols-[16rem_1fr] lg:gap-16">
                <div className="lg:sticky lg:top-32 lg:self-start lg:pl-16">
                  <span aria-hidden="true" className="numeral fill-in-view font-display text-7xl font-black leading-none tracking-tight lg:text-8xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">{chapter.eyebrow}</p>
                </div>
                <div className="max-w-2xl">
                  <h2 className="font-display text-3xl font-black tracking-tight text-balance lg:text-5xl">{chapter.title}</h2>
                  {chapter.body.map((para) => (
                    <p key={para} className="mt-5 text-lg leading-relaxed text-foreground/85">
                      {para}
                    </p>
                  ))}
                  <div className="mt-8">
                    <Placeholder title="Story detail needed">
                      <p>{chapter.todo}</p>
                    </Placeholder>
                  </div>
                </div>
              </article>
              {photos[i] && (
                <div className="reveal-clip parallax relative mt-24 aspect-[16/9] overflow-hidden rounded-3xl lg:mt-36 lg:aspect-[21/9]">
                  <Image src={photos[i].src} alt={photos[i].alt} fill placeholder="blur" sizes="(min-width: 1280px) 80rem, 100vw" className="object-cover" />
                </div>
              )}
            </li>
          ))}
        </ol>
      </Section>

      <Section labelledBy="about-cta-title">
        <div className="reveal flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <Heading id="about-cta-title" headline={about.cta.headline} />
          <ButtonLink href="/coaching" magnetic>
            {about.cta.label}
          </ButtonLink>
        </div>
        <p className="mt-12 border-t border-border pt-8 text-muted-foreground">
          {about.keynoteLink.text}{" "}
          <a href={site.parent.url} className="text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground">
            {about.keynoteLink.label}
          </a>
          .
        </p>
      </Section>
    </>
  );
}
