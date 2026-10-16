import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ButtonLink } from "@/components/Button";
import { Heading } from "@/components/Heading";
import { Newsletter } from "@/components/Newsletter";
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

type Cta = Program["cta"];

/** A program carried over from the Wix site. Content lives in src/content/programs/. */
export function ProgramPage({ program }: { program: Program }) {
  const { eyebrow, headline, sub, investment, photo, blocks, cta, closing, todo } = program;
  const others = programs.filter((p) => p.href !== program.href);
  const closingCta = closing?.cta ?? cta;

  return (
    <>
      <section aria-labelledby="program-title" className="hero-scope relative -mt-18 overflow-hidden pt-18">
        <StageLights preset="hero" />
        <Container className="hero-out relative py-16 lg:py-28">
          <div className={photo ? "grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-16" : undefined}>
            <div>
              <nav aria-label="Breadcrumb" className="enter text-sm text-muted-foreground">
                <Link href="/coaching" className="link-draw inline-block py-2 hover:text-foreground">
                  <span className="sm:hidden">Coaching</span>
                  <span className="hidden sm:inline">Ways to work with Kevin</span>
                </Link>
                <span aria-hidden="true" className="mx-2">
                  /
                </span>
                <span aria-current="page" className="text-foreground/80">
                  {program.name}
                </span>
              </nav>
              <div className="enter mt-8" style={delay(60)}>
                <Eyebrow>{eyebrow}</Eyebrow>
              </div>
              <Heading
                as="h1"
                id="program-title"
                size="page"
                headline={headline}
                animate
                className={`mt-7 ${photo ? "lg:text-[clamp(3rem,5.4vw,5rem)]" : "max-w-5xl"}`}
              />
              <p className="enter mt-8 max-w-2xl text-lg leading-relaxed text-pretty text-foreground/80 lg:text-xl" style={delay(450)}>
                {sub}
              </p>
              <div className="enter mt-10 flex flex-wrap items-center gap-x-5 gap-y-4" style={delay(600)}>
                <ButtonLink href={cta.href} {...linkProps(cta.href)} magnetic>
                  {cta.label}
                </ButtonLink>
                {investment && <p className="max-w-sm text-sm font-medium leading-relaxed text-foreground/80 sm:text-base">{investment}</p>}
              </div>
            </div>

            {photo && (
              <div className="enter relative aspect-[16/10] overflow-hidden rounded-3xl border border-border lg:aspect-[4/5]" style={delay(300)}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1280px) 34rem, (min-width: 1024px) 42vw, 100vw"
                  className="object-cover"
                  style={photo.position ? { objectPosition: photo.position } : undefined}
                />
              </div>
            )}
          </div>
        </Container>
      </section>

      {blocks.map((block, i) => (
        <Section key={i} id={block.id} tone={i % 2 ? "background" : "card"} compact className="scroll-mt-16">
          <Block block={block} cta={cta} />
        </Section>
      ))}

      <Section compact>
        <div className="reveal border-beam rounded-[2rem] bg-card px-5 py-10 text-center sm:p-12 lg:p-16">
          <Eyebrow className="justify-center">Next step</Eyebrow>
          <Heading size="small" headline={closing?.headline ?? { lead: "Talk it through", highlight: "with Kevin." }} className="mx-auto mt-6 max-w-2xl" />
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-pretty text-foreground/80">
            {closing?.body ?? "A short call to see where you are, whether this is the right fit, and which option suits your goals and budget."}
          </p>
          <ButtonLink href={closingCta.href} {...linkProps(closingCta.href)} className="mt-10">
            {closingCta.label}
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

      <Section tone="card" labelledBy="more-title" compact>
        <div className="reveal">
          <Eyebrow>Keep exploring</Eyebrow>
          <h2 id="more-title" className="mt-5 font-display text-3xl font-black tracking-tight lg:text-4xl">
            More ways to work with Kevin
          </h2>
        </div>
        <ProgramLinks items={others} className="mt-10" />
      </Section>
    </>
  );
}

/** Cards linking to every program page. Used on /coaching. */
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
            <span className="font-display text-xl font-black tracking-[-0.01em] transition-colors group-hover:text-primary">{p.name}</span>
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

/** A compact two-column list of the other programs, for the foot of each program page. */
function ProgramLinks({ items, className = "" }: { items: readonly Program[]; className?: string }) {
  return (
    <ul className={`grid border-t border-border sm:grid-cols-2 sm:gap-x-10 ${className}`}>
      {items.map((p) => (
        <li key={p.href} className="border-b border-border">
          <Link href={p.href} className="group flex items-center justify-between gap-6 py-5">
            <span>
              <span className="block font-display text-lg font-black tracking-[-0.01em] transition-colors group-hover:text-primary lg:text-xl">{p.name}</span>
              <span className="mt-1 hidden text-sm leading-relaxed text-muted-foreground sm:line-clamp-2">{p.card}</span>
            </span>
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-4 shrink-0 text-primary transition-transform duration-500 ease-out-expo group-hover:translate-x-1"
            >
              <path d="M2 8h11M9 4l4 4-4 4" />
            </svg>
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
      {intro && <p className="mt-5 text-lg leading-relaxed text-pretty text-foreground/80">{intro}</p>}
    </div>
  );
}

function Check() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="mt-1 size-4 shrink-0 text-accent"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    >
      <path d="m4 10.5 4 4 8-9" />
    </svg>
  );
}

function Block({ block, cta }: { block: ProgramBlock; cta: Cta }) {
  switch (block.kind) {
    case "text":
      return (
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <BlockHeading heading={block.heading} />
          </div>
          <div className="reveal space-y-6 text-lg leading-relaxed text-pretty text-foreground/85">
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
              <li key={item} className="flex gap-4 text-lg leading-relaxed text-pretty">
                <span aria-hidden="true" className="mt-3 h-px w-5 shrink-0 bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </>
      );

    case "options": {
      const n = block.options.length;
      const single = n === 1;
      return (
        <>
          <BlockHeading heading={block.heading} intro={block.intro} />
          <div className={`reveal-stagger mt-12 grid gap-5 ${n > 2 ? "lg:grid-cols-3" : n === 2 ? "md:grid-cols-2" : ""}`}>
            {block.options.map((o) => {
              const button = o.cta ?? cta;
              return (
                <article
                  key={o.name}
                  data-spotlight
                  className={`glow-card spotlight flex flex-col rounded-3xl border border-border bg-background p-7 sm:p-8 lg:p-10 ${single ? "lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-x-16" : ""}`}
                >
                  <div className="flex flex-col">
                    <h3 className="font-display text-2xl font-black tracking-[-0.01em]">{o.name}</h3>
                    {o.format && <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-accent">{o.format}</p>}
                    {o.price && <p className="mt-5 font-display text-4xl font-black tracking-tight">{o.price}</p>}
                    {o.summary && <p className="mt-4 leading-relaxed text-pretty text-foreground/80">{o.summary}</p>}
                    {o.guarantee && <p className="mt-5 border-l-2 border-accent pl-4 font-semibold leading-relaxed text-pretty">{o.guarantee}</p>}
                    {single && (
                      <ButtonLink href={button.href} {...linkProps(button.href)} variant="secondary" className="mt-8 hidden self-start lg:inline-flex">
                        {button.label}
                      </ButtonLink>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col">
                    {(o.includes.length > 0 || o.excludes) && (
                      <ul className={`mt-6 space-y-3 border-t border-border pt-6 ${single ? "lg:mt-0 lg:border-t-0 lg:pt-0" : ""}`}>
                        {o.includes.map((item) => (
                          <li key={item} className="flex gap-3 leading-relaxed text-foreground/85">
                            <Check />
                            <span>{item}</span>
                          </li>
                        ))}
                        {o.excludes?.map((item) => (
                          <li key={item} className="flex gap-3 leading-relaxed text-muted-foreground">
                            <span aria-hidden="true" className="mt-3 h-px w-4 shrink-0 bg-muted-foreground/60" />
                            <span>
                              <span className="sr-only">Not included: </span>
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className={`mt-auto pt-8 ${single ? "lg:hidden" : ""}`}>
                      <ButtonLink href={button.href} {...linkProps(button.href)} variant="secondary" className="w-full">
                        {button.label}
                      </ButtonLink>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </>
      );
    }

    case "steps":
      if (block.catalogue) {
        return (
          <>
            <BlockHeading heading={block.heading} intro={block.intro} />
            <ul className="reveal-stagger mt-12 grid gap-4 md:grid-cols-2">
              {block.steps.map((s) => (
                <li key={s.title} className="rounded-2xl border border-border bg-background p-6 lg:p-7">
                  <h3 className="font-display text-xl font-black tracking-[-0.01em]">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-pretty text-foreground/75">{s.body}</p>
                </li>
              ))}
            </ul>
          </>
        );
      }
      return (
        <>
          <BlockHeading heading={block.heading} intro={block.intro} />
          <ol className="mt-12 border-t border-border">
            {block.steps.map((s, i) => (
              <li
                key={s.title}
                data-spotlight
                className="reveal spotlight group grid grid-cols-[2.75rem_1fr] gap-3 border-b border-border py-7 sm:grid-cols-[4rem_1fr] sm:gap-4 sm:py-8 lg:grid-cols-[6rem_1fr] lg:px-4"
              >
                <span aria-hidden="true" className="numeral font-display text-3xl font-black leading-none tracking-tight sm:text-4xl lg:text-5xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-xl font-black tracking-[-0.01em] text-balance lg:text-2xl">{s.title}</h3>
                  <p className="mt-2 max-w-3xl text-lg leading-relaxed text-pretty text-foreground/75">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </>
      );

    case "videos": {
      const n = block.videos.length;
      // An odd number of videos leads with one full-width feature, so the grid never ends on a lone half.
      const grid = n === 1 ? "" : `md:grid-cols-2 ${n % 2 ? "md:[&>*:first-child]:col-span-2" : ""}`;
      return (
        <>
          <BlockHeading heading={block.heading} intro={block.intro} />
          <div className={`mt-6 grid gap-x-6 gap-y-4 ${grid}`}>
            {block.videos.map((v) => (
              <figure key={v.youtubeId} className="reveal">
                <YouTube id={v.youtubeId} title={v.title} />
                <figcaption className="mt-3 text-sm leading-relaxed text-pretty text-muted-foreground">{v.title}</figcaption>
              </figure>
            ))}
          </div>
        </>
      );
    }

    case "downloads":
      return (
        <>
          <BlockHeading heading={block.heading} intro={block.intro} />
          <ul className={`reveal-stagger mt-10 grid gap-4 ${block.files.length > 1 ? "md:grid-cols-2" : ""}`}>
            {block.files.map((f) => (
              <li key={f.href}>
                <a
                  href={f.href}
                  {...linkProps(f.href)}
                  className="group flex h-full items-start gap-4 rounded-2xl border border-border bg-background p-6 transition-colors hover:border-accent/60"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="mt-0.5 size-6 shrink-0 text-accent"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={isFile(f.href) ? "M12 4v11m0 0-4-4m4 4 4-4M5 20h14" : "M5 12h14m0 0-5-5m5 5-5 5"} />
                  </svg>
                  <span>
                    <span className="font-semibold transition-colors group-hover:text-primary">{f.label}</span>
                    {f.note && <span className="mt-1 block text-sm leading-relaxed text-pretty text-muted-foreground">{f.note}</span>}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </>
      );

    case "subscribe":
      return <Newsletter source={block.source} />;

    case "faq":
      return (
        <>
          <BlockHeading heading={block.heading ?? "Frequently asked questions"} />
          <Faq items={block.items} />
        </>
      );
  }
}

/** Questions and answers, each opening in place. Used by the program pages and /coaching. */
export function Faq({ items, className = "" }: { items: readonly { q: string; a: string }[]; className?: string }) {
  return (
    <div className={`mt-10 divide-y divide-border border-y border-border ${className}`}>
      {items.map((item) => (
        <details key={item.q} data-faq className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-display text-lg font-bold lg:text-xl [&::-webkit-details-marker]:hidden">
            {item.q}
            <span aria-hidden="true" className="text-2xl text-accent transition-transform duration-300 group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="-mt-2 max-w-3xl pb-6 text-lg leading-relaxed text-pretty text-foreground/80">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
