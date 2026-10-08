import Image from "next/image";
import type { CSSProperties } from "react";
import asBadge from "@/assets/images/badge-as.png";
import cspBadge from "@/assets/images/badge-csp.png";
import { Container } from "@/components/Section";
import { credentials, stats } from "@/content/shared";

/** Proof strip: the two designations and the verified numbers. */
export function Credentials() {
  return (
    <section aria-label="Kevin’s credentials" className="relative overflow-hidden border-y border-border bg-card">
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-1/2 size-[30rem] -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
      <Container className="relative grid items-center gap-12 py-14 lg:grid-cols-[auto_1fr] lg:gap-20 lg:py-20">
        <div className="reveal flex items-center gap-5">
          <Image src={cspBadge} alt={`CSP — ${credentials.csp}`} className="size-20 transition-transform duration-700 ease-out-expo hover:-rotate-6 hover:scale-110 lg:size-24" sizes="96px" />
          <Image src={asBadge} alt={`AS — ${credentials.as}`} className="size-20 transition-transform duration-700 ease-out-expo hover:rotate-6 hover:scale-110 lg:size-24" sizes="96px" />
          <p className="max-w-[14rem] text-sm leading-snug text-muted-foreground">{credentials.rarity}</p>
        </div>
        <dl className="odometer reveal-stagger grid grid-cols-3 gap-4 sm:gap-6 lg:justify-items-end">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col lg:min-w-40">
              <dt className="order-last mt-2 text-xs uppercase leading-snug tracking-wide text-muted-foreground">{s.label}</dt>
              <dd className="font-display text-[1.75rem] font-black leading-none tracking-tight sm:text-5xl lg:text-6xl">
                <Odometer value={s.value} />
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

/**
 * Digits roll up into place as the strip scrolls into view (globals.css .digit-strip).
 * Each strip's resting transform is the real digit, so without scroll-driven
 * animation support — or with reduced motion — the true value simply shows.
 */
function Odometer({ value }: { value: string }) {
  return (
    <>
      <span className="sr-only">{value}</span>
      <span aria-hidden="true" className="inline-flex">
        {[...value].map((ch, i) =>
          /\d/.test(ch) ? (
            <span key={i} className="inline-block h-[1em] overflow-hidden">
              <span className="digit-strip flex flex-col" style={{ transform: `translateY(-${Number(ch)}em)` } as CSSProperties}>
                {"0123456789".split("").map((d) => (
                  <span key={d} className="h-[1em]">
                    {d}
                  </span>
                ))}
              </span>
            </span>
          ) : (
            <span key={i} className={ch === "+" ? "text-accent" : undefined}>
              {ch}
            </span>
          ),
        )}
      </span>
    </>
  );
}
