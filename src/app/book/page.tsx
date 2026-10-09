import type { Metadata } from "next";
import Image from "next/image";
import type { CSSProperties } from "react";
import { BookCover } from "@/components/BookCover";
import { Heading } from "@/components/Heading";
import { JsonLd } from "@/components/JsonLd";
import { Container, Eyebrow, Section } from "@/components/Section";
import { StageLights } from "@/components/StageLights";
import { SubscribeForm } from "@/components/SubscribeForm";
import { book } from "@/content/book";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: book.meta.title },
  description: book.meta.description,
  alternates: { canonical: "/book" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Book",
  name: book.plainTitle,
  alternateName: book.title,
  author: { "@type": "Person", name: "Kevin C. Snyder", honorificPrefix: "Dr.", url: site.parent.url },
  url: `${site.url}/book`,
};

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export default function BookPage() {
  const { hero, firstEdition } = book;
  return (
    <>
      <JsonLd data={jsonLd} />

      <section aria-labelledby="book-title" className="relative -mt-18 overflow-hidden pt-18">
        <StageLights preset="hero" />
        <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 size-[44rem] translate-x-1/3 -translate-y-1/3 rounded-full bg-accent/10 blur-3xl" />
        <Container className="relative grid items-center gap-16 py-16 md:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:gap-28 lg:py-32">
          <div className="order-2 md:order-1">
            <div className="enter">
              <Eyebrow>{hero.eyebrow}</Eyebrow>
            </div>
            <Heading as="h1" id="book-title" size="hero" headline={{ lead: book.title }} animate className="mt-7" />
            <p className="enter mt-8 max-w-xl text-lg leading-relaxed text-foreground/80 lg:text-xl" style={delay(400)}>
              {hero.sub}
            </p>

            <div className="enter mt-12 max-w-xl border-t border-border pt-10" style={delay(550)}>
              <h2 className="font-display text-2xl font-black tracking-tight">{hero.notifyHeading}</h2>
              <p className="mt-2 text-muted-foreground">{hero.notifyBody}</p>
              <div className="mt-6">
                <SubscribeForm list="book" submitLabel="Notify me" />
              </div>
            </div>
          </div>
          <div className="enter order-1 mx-auto w-full max-w-[16rem] md:order-2 md:max-w-none" style={delay(200)}>
            <BookCover priority />
          </div>
        </Container>
      </section>

      <Section tone="card" labelledBy="first-edition-title" className="border-t border-border">
        <div className="reveal grid items-center gap-10 sm:grid-cols-[10rem_1fr] lg:grid-cols-[12rem_1fr] lg:gap-16">
          <Image
            src={firstEdition.image}
            alt={firstEdition.imageAlt}
            placeholder="blur"
            sizes="12rem"
            className="w-40 rounded-sm shadow-[0_30px_60px_-25px_rgb(0_0_0/0.9)] transition-transform duration-700 ease-out-expo hover:-translate-y-2 hover:-rotate-2 lg:w-48"
          />
          <div className="max-w-2xl">
            <Eyebrow>{firstEdition.eyebrow}</Eyebrow>
            <h2 id="first-edition-title" className="sr-only">
              The first book
            </h2>
            <p className="mt-5 font-display text-2xl font-bold leading-snug tracking-tight lg:text-3xl">{firstEdition.body}</p>
          </div>
        </div>
      </Section>
    </>
  );
}
