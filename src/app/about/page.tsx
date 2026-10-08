import type { Metadata } from "next";
import Image from "next/image";
import ballroom from "@/assets/images/kevin-stage-ballroom.jpg";
import studentSelfie from "@/assets/images/kevin-student-selfie.jpg";
import { ButtonLink } from "@/components/Button";
import { Heading } from "@/components/Heading";
import { Placeholder } from "@/components/Placeholder";
import { Container, Eyebrow, Section } from "@/components/Section";
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
      <section aria-labelledby="about-title">
        <Container className="py-16 lg:py-28">
          <Eyebrow>{about.hero.eyebrow}</Eyebrow>
          <Heading as="h1" id="about-title" size="page" headline={about.hero.headline} className="mt-6 max-w-5xl" />
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-foreground/80">{about.hero.sub}</p>
        </Container>
      </section>

      <Section tone="card" className="border-y border-border">
        <ol className="space-y-20 lg:space-y-28">
          {about.chapters.map((chapter, i) => (
            <li key={chapter.eyebrow}>
              <article className="grid gap-6 lg:grid-cols-[14rem_1fr] lg:gap-16">
                <div>
                  <span aria-hidden="true" className="font-display text-6xl font-black tracking-tight text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">{chapter.eyebrow}</p>
                </div>
                <div className="max-w-2xl">
                  <h2 className="font-display text-3xl font-black tracking-tight text-balance lg:text-4xl">{chapter.title}</h2>
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
                <div className="relative mt-20 aspect-[16/9] overflow-hidden rounded-3xl border border-border lg:mt-28 lg:aspect-[21/9]">
                  <Image src={photos[i].src} alt={photos[i].alt} fill placeholder="blur" sizes="(min-width: 1152px) 72rem, 100vw" className="object-cover" />
                </div>
              )}
            </li>
          ))}
        </ol>
      </Section>

      <Section labelledBy="about-cta-title">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <Heading id="about-cta-title" headline={about.cta.headline} />
          <ButtonLink href="/coaching">{about.cta.label}</ButtonLink>
        </div>
        <p className="mt-12 border-t border-border pt-8 text-muted-foreground">
          {about.keynoteLink.text}{" "}
          <a href={site.parent.url} className="text-primary underline underline-offset-4 hover:text-foreground">
            {about.keynoteLink.label}
          </a>
          .
        </p>
      </Section>
    </>
  );
}
