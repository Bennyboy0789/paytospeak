import Link from "next/link";
import { compareFeatures, comparePlans } from "@/content/compare";

// The 1:1 column is Kevin's featured option, as on his chart.
const FEATURED = 2;

/**
 * Kevin's coaching options chart as a real table. On narrow screens the table scrolls
 * sideways inside its own frame (the page never does) with the feature column pinned.
 */
export function CompareTable() {
  const cell = (i: number) => (i === FEATURED ? "bg-accent/[0.07]" : "");
  return (
    <div
      role="region"
      aria-labelledby="compare-caption"
      tabIndex={0}
      className="reveal overflow-x-auto rounded-3xl border border-border bg-card focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
    >
      <table className="w-full min-w-[54rem] sm:min-w-[60rem] border-collapse text-left text-sm">
        <caption id="compare-caption" className="sr-only">
          Kevin’s coaching options compared: format, who each is for, what’s included, and the investment
        </caption>
        <thead>
          <tr className="align-bottom">
            <td className="sticky left-0 z-10 w-36 bg-card p-5 sm:w-56" />
            {comparePlans.map((p, i) => (
              <th key={p.name} scope="col" className={`w-44 border-l border-border p-5 ${cell(i)}`}>
                <Link href={p.href} className="link-draw block font-display text-lg font-black leading-tight tracking-tight hover:text-primary">
                  {p.name}
                </Link>
                <span className="mt-1 block text-xs font-medium text-muted-foreground">{p.tagline}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-border">
            <th scope="row" className="sticky left-0 z-10 bg-card px-4 py-5 font-semibold sm:px-5">
              Format
            </th>
            {comparePlans.map((p, i) => (
              <td key={p.name} className={`border-l border-border p-5 text-foreground/85 ${cell(i)}`}>
                {p.format}
              </td>
            ))}
          </tr>
          <tr className="border-t border-border">
            <th scope="row" className="sticky left-0 z-10 bg-card px-4 py-5 font-semibold sm:px-5">
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
              <th scope="row" className="sticky left-0 z-10 bg-card px-4 py-3.5 font-medium text-foreground/85 sm:px-5">
                {row.feature}
              </th>
              {row.has.map((has, i) => (
                <td key={comparePlans[i].name} className={`border-l border-border px-5 py-3.5 text-center ${cell(i)}`}>
                  {has ? (
                    <svg viewBox="0 0 20 20" className="mx-auto size-5 text-accent" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" role="img" aria-label="Included">
                      <path d="m4 10.5 4 4 8-9" />
                    </svg>
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
            <th scope="row" className="sticky left-0 z-10 bg-card px-4 py-5 sm:px-5">
              <span className="block font-display text-xl font-black tracking-tight">Investment</span>
              <span className="mt-1 block text-xs font-medium text-muted-foreground">Payment plans available</span>
            </th>
            {comparePlans.map((p, i) => (
              <td key={p.name} className={`border-l border-border p-5 ${cell(i)}`}>
                <span className="block font-display text-2xl font-black leading-tight tracking-tight">{p.price}</span>
                <span className="mt-2 block text-xs leading-relaxed text-muted-foreground">{p.priceNote}</span>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
