import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ButtonLink } from "@/components/Button";
import { Heading } from "@/components/Heading";
import { Placeholder } from "@/components/Placeholder";
import { Container, Eyebrow, Section } from "@/components/Section";
import { StageLights } from "@/components/StageLights";
import { YouTube } from "@/components/YouTube";
import { programs } from "@/content/programs";
import type { Program, ProgramBlock } from "@/content/programs/types";

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;
const external = (href: string) => /^https?:\/\//.test(href);
const isFile = (href: string) => href.startsWith("/files/");
const linkProps = (href: string) => (external(href) ? { target: "_blank", rel: "noopener" } : {});

/** A program carried over from the Wix site. Content lives in src/content/programs/. */
export function ProgramPage({ program }: { program: Program }) {
  const { eyebrow, headline, sub, investment, photo, blocks, cta, todo } = program;
  const others = programs.filter((p) => p.href !== program.href);

  return (
    <>
      <section aria-labelledby="program-title" className="hero-scope relative -mt-18 overflow-hidden pt-18">
        <StageLights preset="hero" />
        <Container className="hero-out relative py-20 lg:py-32">
          <nav aria-label="Breadcrumb" className="enter text-sm text-muted-foreground">
            <Link href="/coaching" className="link-draw hover:text-foreground">
              Ways to work with Kevin
            </Link>
            <span aria-hidden="true" className="mx-2">
              /
            </span>
            <span aria-current="page" className="text-foreground/80">
              {program.name}
            </span>
          </nav>
          <div className="enter mt-10" style={delay(60)}>
            <Eyebrow>{eyebrow}</Eyebrow>
          </div>
          <Heading as="h1" id="program-title" size="page" headline={headline} animate className="mt-7 max-w-5xl" />
          <p className="enter mt-8 max-w-2xl text-lg leading-relaxed text-foreground/80 lg:text-xl" style={delay(450)}>
            {sub}
          </p>
          <div className="enter mt-10 flex flex-wrap items-center gap-4" style={delay(600)}>
            <ButtonLink href={cta.href} {...linkProps(cta.href)} magnetic>
              {cta.label}
            </ButtonLink>
            <p className="text-sm text-muted-foreground">{investment ?? "Pricing is shared on the call."}</p>
          </div>
        </Container>
      </section>

      {photo && (
        <Container className="pb-4">
          <div className="reveal-clip parallax relative aspect-[16/9] overflow-hidden rounded-3xl border border-border lg:aspect-[21/9]">
            <Image src={photo.src} alt={photo.alt} fill placeholder="blur" sizes="(min-width: 1280px) 80rem, 100vw" className="object-cover" />
          </div>
        </Container>
      )}

      {blocks.map((block, i) => (
        <Section key={i} tone={i % 2 ? "card" : "background"} compact>
          <Block block={block} />
        </Section>
      ))}

      <Section>
        <div className="reveal border-beam rounded-[2rem] bg-card p-8 text-center sm:p-12 lg:p-16">
          <Eyebrow className="justify-center">Next step</Eyebrow>
          <Heading size="small" headline={{ lead: "Talk it through", highlight: "with Kevin." }} className="mx-auto mt-6 max-w-2xl" />
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-foreground/80">
            A short call to see where you are, whether this is the right fit, and which option suits your goals and budget.
          </p>
          <ButtonLink href={cta.href} {...linkProps(cta.href)} className="mt-10">
            {cta.label}
          </ButtonLink>
        </div>

        {todo.length > 0 && (
          <div className="mt-16">
            <Placeholder title="Carried over from the Wix site: Kevin to confirm">
              <ul className="list-disc space-y-1 pl-5">
                {todo.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </Placeholder>
          </div>
        )}
      </Section>

      <Section tone="card" labelledBy="more-title">
        <div className="reveal">
          <Eyebrow>More ways to work with Kevin</Eyebrow>
          <h2 id="more-title" className="sr-only">
            More ways to work with Kevin
          </h2>
        </div>
        <ProgramGrid items={others} className="mt-10" />
      </Section>
    </>
  );
}

/** Cards linking to every program page. Used on /coaching and at the foot of each program. */
export function ProgramGrid({ items = programs, className = "" }: { items?: readonly Program[]; className?: string }) {
  return (
    <ul className={`reveal-stagger grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ${className}`}>
      {items.map((p) => (
        <li key={p.href}>
          <Link
            href={p.href}
            data-spotlight
            className="glow-card spotlight group relative flex h-full flex-col rounded-2xl border border-border bg-background p-7 transition duration-500 ease-out-expo hover:-translate-y-1"
          >
            <span className="font-display text-xl font-black tracking-tight transition-colors group-hover:text-primary">{p.name}</span>
            <span className="mt-3 flex-1 leading-relaxed text-foreground/75">{p.card}</span>
            <span className="mt-6 text-sm font-semibold text-primary">
              Learn more <span aria-hidden="true">&rarr;</span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

function BlockHeading({ heading, intro }: { heading?: string; intro?: string }) {
  if (!heading && !intro) return null;
  return (
    <div className="reveal max-w-3xl">
      {heading && <h2 className="font-display text-3xl font-black tracking-tight text-balance lg:text-5xl">{heading}</h2>}
      {intro && <p className="mt-5 text-lg leading-relaxed text-foreground/80">{intro}</p>}
    </div>
  );
}

function Block({ block }: { block: ProgramBlock }) {
  switch (block.kind) {
    case "text":
      return (
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <BlockHeading heading={block.heading} />
          <div className="reveal space-y-6 text-lg leading-relaxed text-foreground/85">
            {block.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      );

    case "list":
      return (
        <>
          <BlockHeading heading={block.heading} intro={block.intro} />
          <ul className="reveal-stagger mt-10 grid gap-x-10 gap-y-5 md:grid-cols-2">
            {block.items.map((item) => (
              <li key={item} className="flex gap-4 text-lg leading-relaxed">
                <span aria-hidden="true" className="mt-3 h-px w-5 shrink-0 bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </>
      );

    case "options":
      return (
        <>
          <BlockHeading heading={block.heading} intro={block.intro} />
          <div className={`reveal-stagger mt-12 grid gap-5 ${block.options.length > 2 ? "lg:grid-cols-3" : "md:grid-cols-2"}`}>
            {block.options.map((o) => (
              <article key={o.name} data-spotlight className="glow-card spotlight flex flex-col rounded-3xl border border-border bg-background p-8 lg:p-10">
                <h3 className="font-display text-2xl font-black tracking-tight">{o.name}</h3>
                {o.format && <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-accent">{o.format}</p>}
                {o.price && <p className="mt-5 font-display text-4xl font-black tracking-tight">{o.price}</p>}
                {o.summary && <p className="mt-4 leading-relaxed text-foreground/80">{o.summary}</p>}
                {o.guarantee && <p className="mt-5 border-l-2 border-accent pl-4 font-semibold leading-relaxed">{o.guarantee}</p>}
                {o.includes.length > 0 && (
                  <ul className="mt-6 space-y-3 border-t border-border pt-6">
                    {o.includes.map((item) => (
                      <li key={item} className="flex gap-3 leading-relaxed text-foreground/85">
                        <svg aria-hidden="true" viewBox="0 0 20 20" className="mt-1 size-4 shrink-0 text-accent" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                          <path d="m4 10.5 4 4 8-9" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </>
      );

    case "steps":
      return (
        <>
          <BlockHeading heading={block.heading} intro={block.intro} />
          <ol className="mt-12 border-t border-border">
            {block.steps.map((s, i) => (
              <li key={s.title} data-spotlight className="reveal spotlight group grid grid-cols-[4rem_1fr] gap-4 border-b border-border py-8 lg:grid-cols-[6rem_1fr] lg:px-4">
                <span aria-hidden="true" className="numeral font-display text-4xl font-black leading-none tracking-tight lg:text-5xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-xl font-black tracking-tight lg:text-2xl">{s.title}</h3>
                  <p className="mt-2 text-lg leading-relaxed text-foreground/75">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </>
      );

    case "videos":
      return (
        <>
          <BlockHeading heading={block.heading} intro={block.intro} />
          <div className={`mt-6 grid gap-6 ${block.videos.length > 1 ? "md:grid-cols-2" : "max-w-4xl"}`}>
            {block.videos.map((v) => (
              <figure key={v.youtubeId} className="reveal">
                <YouTube id={v.youtubeId} title={v.title} />
                <figcaption className="mt-3 text-sm text-muted-foreground">{v.title}</figcaption>
              </figure>
            ))}
          </div>
        </>
      );

    case "downloads":
      return (
        <>
          <BlockHeading heading={block.heading} intro={block.intro} />
          <ul className="reveal-stagger mt-10 grid gap-4 md:grid-cols-2">
            {block.files.map((f) => (
              <li key={f.href}>
                <a
                  href={f.href}
                  {...linkProps(f.href)}
                  className="group flex h-full items-start gap-4 rounded-2xl border border-border bg-background p-6 transition-colors hover:border-accent/60"
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="mt-0.5 size-6 shrink-0 text-accent" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={isFile(f.href) ? "M12 4v11m0 0-4-4m4 4 4-4M5 20h14" : "M5 12h14m0 0-5-5m5 5-5 5"} />
                  </svg>
                  <span>
                    <span className="font-semibold transition-colors group-hover:text-primary">{f.label}</span>
                    {f.note && <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">{f.note}</span>}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </>
      );

    case "faq":
      return (
        <>
          <BlockHeading heading={block.heading ?? "Questions"} />
          <div className="mt-10 divide-y divide-border border-y border-border">
            {block.items.map((item) => (
              <details key={item.q} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-lg font-bold tracking-tight lg:text-xl">
                  {item.q}
                  <span aria-hidden="true" className="text-2xl text-accent transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-3xl text-lg leading-relaxed text-foreground/80">{item.a}</p>
              </details>
            ))}
          </div>
        </>
      );
  }
}
