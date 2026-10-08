import type { Metadata } from "next";
import Image from "next/image";
import { BookCover } from "@/components/BookCover";
import { JsonLd } from "@/components/JsonLd";
import { Container, Eyebrow, Section } from "@/components/Section";
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

export default function BookPage() {
  const { hero, firstEdition } = book;
  return (
    <>
      <JsonLd data={jsonLd} />

      <section aria-labelledby="book-title" className="relative overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 size-[44rem] translate-x-1/3 -translate-y-1/3 rounded-full bg-accent/10 blur-3xl" />
        <Container className="relative grid items-center gap-14 py-16 md:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:gap-24 lg:py-28">
          <div className="order-2 md:order-1">
            <Eyebrow>{hero.eyebrow}</Eyebrow>
            <h1 id="book-title" className="mt-6 font-display text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
              {book.title}
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/80">{hero.sub}</p>

            <div className="mt-12 max-w-xl border-t border-border pt-10">
              <h2 className="font-display text-2xl font-black tracking-tight">{hero.notifyHeading}</h2>
              <p className="mt-2 text-muted-foreground">{hero.notifyBody}</p>
              <div className="mt-6">
                <SubscribeForm list="book" submitLabel="Notify me" />
              </div>
            </div>
          </div>
          <div className="order-1 mx-auto w-full max-w-[17rem] md:order-2 md:max-w-none">
            <BookCover priority />
          </div>
        </Container>
      </section>

      <Section tone="card" labelledBy="first-edition-title" className="border-t border-border">
        <div className="grid items-center gap-10 sm:grid-cols-[10rem_1fr] lg:grid-cols-[12rem_1fr] lg:gap-16">
          <Image
            src={firstEdition.image}
            alt={firstEdition.imageAlt}
            placeholder="blur"
            sizes="12rem"
            className="w-40 rounded-sm shadow-[0_30px_60px_-25px_rgb(0_0_0/0.9)] lg:w-48"
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
