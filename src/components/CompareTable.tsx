import Link from "next/link";
import { ButtonLink } from "@/components/Button";
import { compareFeatures, comparePlans } from "@/content/compare";

// The 1:1 column is Kevin's featured option, as on his chart.
const FEATURED = 2;

function Check({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={`size-5 text-accent ${className}`} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" role="img" aria-label="Included">
      <path d="m4 10.5 4 4 8-9" />
    </svg>
  );
}

function FeaturedTag() {
  return <span className="mb-2 inline-block rounded-full bg-accent px-2.5 py-0.5 text-[0.6875rem] font-semibold uppercase tracking-wide text-accent-foreground">Featured</span>;
}

/**
 * Kevin's coaching options chart. From `sm` up it's a real table that scrolls sideways
 * inside its own frame (the page never does) with the feature column pinned. On phones,
 * where a five-column table can't be read, each plan becomes its own card.
 */
export function CompareTable() {
  return (
    <>
      <CompareCards />
      <CompareGrid />
    </>
  );
}

function CompareCards() {
  return (
    <ul className="grid gap-4 sm:hidden" aria-label="Kevin’s coaching options compared">
      {comparePlans.map((p, i) => (
        <li key={p.name} className={`reveal rounded-3xl border bg-card p-6 ${i === FEATURED ? "border-accent/60" : "border-border"}`}>
          {i === FEATURED && <FeaturedTag />}
          <h3 className="font-display text-2xl font-black leading-tight tracking-[-0.01em]">{p.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>
          <p className="mt-5 font-display text-3xl font-black tracking-tight">{p.price}</p>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.priceNote}</p>
          <dl className="mt-5 grid gap-3 border-t border-border pt-5 text-sm">
            <div>
              <dt className="font-semibold">Format</dt>
              <dd className="text-foreground/80">{p.format}</dd>
            </div>
            <div>
              <dt className="font-semibold">Best for</dt>
              <dd className="text-foreground/80">{p.bestFor}</dd>
            </div>
          </dl>
          <p className="mt-5 border-t border-border pt-5 text-sm font-semibold">Includes</p>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-foreground/85">
            {compareFeatures
              .filter((row) => row.has[i])
              .map((row) => (
                <li key={row.feature} className="flex gap-3">
                  <svg aria-hidden="true" viewBox="0 0 20 20" className="mt-0.5 size-4 shrink-0 text-accent" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="m4 10.5 4 4 8-9" />
                  </svg>
                  {row.feature}
                </li>
              ))}
          </ul>
          <ButtonLink href={p.href} variant="tertiary" className="mt-6">
            See the details
          </ButtonLink>
        </li>
      ))}
    </ul>
  );
}

function CompareGrid() {
  const cell = (i: number) => (i === FEATURED ? "bg-accent/[0.07]" : "");
  return (
    // `relative` keeps the absolutely positioned sr-only labels inside the scroll frame.
    // Without it, and without the .reveal transform (reduced motion), they widen the page.
    <div
      role="region"
      aria-labelledby="compare-caption"
      tabIndex={0}
      className="reveal relative hidden overflow-x-auto rounded-3xl border border-border bg-card focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:block"
    >
      <table className="w-full min-w-[60rem] border-collapse text-left text-sm">
        <caption id="compare-caption" className="sr-only">
          Kevin’s coaching options compared: format, who each is for, what’s included, and the investment
        </caption>
        <thead>
          <tr className="align-bottom">
            <td className="sticky left-0 z-10 w-56 bg-card p-5" />
            {comparePlans.map((p, i) => (
              <th key={p.name} scope="col" className={`w-44 border-l border-border p-5 ${cell(i)}`}>
                {i === FEATURED && <FeaturedTag />}
                <Link href={p.href} className="link-draw block py-1 font-display text-lg font-black leading-tight tracking-[-0.01em] hover:text-primary">
                  {p.name}
                </Link>
                <span className="mt-1 block text-xs font-medium text-muted-foreground">{p.tagline}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-border">
            <th scope="row" className="sticky left-0 z-10 bg-card p-5 font-semibold">
              Format
            </th>
            {comparePlans.map((p, i) => (
              <td key={p.name} className={`border-l border-border p-5 text-foreground/85 ${cell(i)}`}>
                {p.format}
              </td>
            ))}
          </tr>
          <tr className="border-t border-border">
            <th scope="row" className="sticky left-0 z-10 bg-card p-5 font-semibold">
              Best for
            </th>
            {comparePlans.map((p, i) => (
              <td key={p.name} className={`border-l border-border p-5 leading-relaxed text-foreground/85 ${cell(i)}`}>
                {p.bestFor}
              </td>
            ))}
          </tr>
          {compareFeatures.map((row) => (
            <tr key={row.feature} className="border-t border-border">
              <th scope="row" className="sticky left-0 z-10 bg-card px-5 py-3.5 font-medium text-foreground/85">
                {row.feature}
              </th>
              {row.has.map((has, i) => (
                <td key={comparePlans[i].name} className={`border-l border-border px-5 py-3.5 text-center ${cell(i)}`}>
                  {has ? (
                    <Check className="mx-auto" />
                  ) : (
                    <span className="text-muted-foreground/60">
                      <span aria-hidden="true">&ndash;</span>
                      <span className="sr-only">Not included</span>
                    </span>
                  )}
                </td>
              ))}
            </tr>
          ))}
          <tr className="border-t-2 border-accent/50 align-top">
            <th scope="row" className="sticky left-0 z-10 bg-card p-5">
              <span className="block font-display text-xl font-black tracking-tight">Investment</span>
              <span className="mt-1 block text-xs font-medium text-muted-foreground">Payment plans available</span>
            </th>
            {comparePlans.map((p, i) => (
              <td key={p.name} className={`border-l border-border p-5 ${cell(i)}`}>
                <span className="block text-xs font-semibold text-foreground/70">{p.name}</span>
                <span className="mt-1 block font-display text-2xl font-black leading-tight tracking-tight">{p.price}</span>
                <span className="mt-2 block text-xs leading-relaxed text-muted-foreground">{p.priceNote}</span>
                <ButtonLink href={p.href} variant="tertiary" className="mt-3 py-1.5 text-sm">
                  Details
                </ButtonLink>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
