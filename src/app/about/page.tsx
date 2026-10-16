import type { Metadata } from "next";
import Image from "next/image";
import type { CSSProperties } from "react";
import kevinCutout from "@/assets/images/about-kevin-cutout.webp";
import ballroom from "@/assets/images/kevin-stage-ballroom.jpg";
import studentSelfie from "@/assets/images/kevin-student-selfie.jpg";
import bookSigning from "@/assets/images/stage/book-signing.jpg";
import { ButtonLink } from "@/components/Button";
import { Heading } from "@/components/Heading";
import { Placeholder } from "@/components/Placeholder";
import { Container, Eyebrow, Section } from "@/components/Section";
import { StageLights } from "@/components/StageLights";
import { YouTube } from "@/components/YouTube";
import { about } from "@/content/about";
import { applyHref, site } from "@/lib/site";

export const metadata: Metadata = {
  title: about.meta.title,
  description: about.meta.description,
  alternates: { canonical: "/about" },
};

// Photos placed between chapters, by chapter index.
const photos: Record<number, { src: typeof ballroom; alt: string }> = {
  1: { src: ballroom, alt: "Kevin speaking to a ballroom audience, arms raised" },
  2: { src: bookSigning, alt: "Kevin signing copies of his book Think Differently for a line of readers" },
  3: { src: studentSelfie, alt: "Kevin taking a selfie with a student in front of a packed gymnasium audience" },
};

export default function AboutPage() {
  return (
    <>
      <section aria-labelledby="about-title" className="hero-scope relative -mt-18 overflow-hidden pt-18">
        <StageLights preset="hero" />
        <Container className="hero-out relative grid items-center gap-14 py-20 lg:grid-cols-[1.7fr_1fr] lg:gap-16 lg:py-28">
          <div>
            <div className="enter">
              <Eyebrow>{about.hero.eyebrow}</Eyebrow>
            </div>
            <Heading as="h1" id="about-title" size="page" headline={about.hero.headline} animate className="mt-7 lg:text-[clamp(3rem,5.6vw,5.5rem)]" />
            <p className="enter mt-10 max-w-2xl text-xl leading-relaxed text-pretty text-foreground/80" style={{ "--d": "900ms" } as CSSProperties}>
              {about.hero.sub}
            </p>
          </div>
          {/* Kevin cut out of the vest portrait (stage/portrait-vest.jpg, already graded), large and
              cropped by the bottom of the section. Phones: in the flow under the text, pulled down
              through the section padding. lg: pinned to the right, from under the header to the
              section's bottom edge. object-top keeps his head in frame; the crop falls at his knees. */}
          <div className="relative mx-auto -mb-20 h-[30rem] w-full max-w-sm overflow-hidden sm:h-[36rem] sm:max-w-md lg:absolute lg:top-16 lg:right-12 lg:bottom-0 lg:mb-0 lg:h-auto lg:w-[36%] lg:max-w-none">
            <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(closest-side,rgb(0_168_230/0.2),rgb(247_162_36/0.06)_55%,transparent)]" />
            <Image
              src={kevinCutout}
              alt="Dr. Kevin C. Snyder laughing, hand on his chest, in a vest and jeans"
              fill
              loading="eager"
              fetchPriority="high"
              sizes="(min-width: 1024px) 36vw, (min-width: 640px) 28rem, 24rem"
              className="hero-subject object-cover object-top"
            />
          </div>
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
                    <p key={para} className="mt-5 text-lg leading-relaxed text-pretty text-foreground/85">
                      {para}
                    </p>
                  ))}
                  {chapter.video && (
                    <figure>
                      <YouTube id={chapter.video.id} title={chapter.video.title} poster={chapter.video.poster} />
                      <figcaption className="mt-3 text-sm text-muted-foreground">{chapter.video.caption}</figcaption>
                    </figure>
                  )}
                  {chapter.quote && (
                    <figure className="mt-10 border-l-2 border-accent pl-6">
                      <blockquote className="font-display text-2xl font-black leading-snug tracking-[-0.005em] text-balance lg:text-3xl">
                        <p>&ldquo;{chapter.quote}&rdquo;</p>
                      </blockquote>
                      <figcaption className="mt-4 text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">Kevin</figcaption>
                    </figure>
                  )}
                  {chapter.todo && (
                    <div className="mt-8">
                      <Placeholder title="Story detail needed">
                        <p>{chapter.todo}</p>
                      </Placeholder>
                    </div>
                  )}
                </div>
              </article>
              {photos[i] && (
                // From lg the photo starts at the text column, so it never cuts across the timeline rail.
                <div className="reveal-clip parallax relative mt-24 aspect-[16/9] overflow-hidden rounded-3xl lg:mt-36 lg:ml-[20rem]">
                  <Image
                    src={photos[i].src}
                    alt={photos[i].alt}
                    fill
                    placeholder="blur"
                    sizes="(min-width: 1280px) 54rem, (min-width: 1024px) calc(100vw - 26rem), 100vw"
                    className="object-cover"
                  />
                </div>
              )}
            </li>
          ))}
        </ol>
      </Section>

      <Section labelledBy="about-cta-title">
        <div className="reveal flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <Heading id="about-cta-title" headline={about.cta.headline} />
          <div className="flex flex-wrap gap-4">
            <ButtonLink href={applyHref} magnetic className="w-full sm:w-auto">
              {about.cta.label}
            </ButtonLink>
            <ButtonLink href="/coaching" variant="secondary" magnetic className="w-full sm:w-auto">
              {about.cta.secondary}
            </ButtonLink>
          </div>
        </div>
        <p className="mt-12 border-t border-border pt-8 text-muted-foreground">
          {about.keynoteLink.text}{" "}
          <a
            href={site.parent.url}
            className="text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground"
          >
            {about.keynoteLink.label}
          </a>
          .
        </p>
      </Section>
    </>
  );
}
