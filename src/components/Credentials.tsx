import Image from "next/image";
import asBadge from "@/assets/images/badge-as.png";
import cspBadge from "@/assets/images/badge-csp.png";
import { Container } from "@/components/Section";
import { credentials, stats } from "@/content/shared";

/** Proof strip: the two designations and the verified numbers. */
export function Credentials() {
  return (
    <section aria-label="Kevin’s credentials" className="border-y border-border bg-card">
      <Container className="grid items-center gap-10 py-12 lg:grid-cols-[auto_1fr] lg:gap-16 lg:py-14">
        <div className="flex items-center gap-5">
          <Image src={cspBadge} alt={`CSP — ${credentials.csp}`} className="size-20 lg:size-24" sizes="96px" />
          <Image src={asBadge} alt={`AS — ${credentials.as}`} className="size-20 lg:size-24" sizes="96px" />
          <p className="max-w-[14rem] text-sm leading-snug text-muted-foreground">{credentials.rarity}</p>
        </div>
        <dl className="grid grid-cols-3 gap-4 sm:gap-6 lg:justify-items-end">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col">
              <dt className="order-last mt-1 text-xs uppercase leading-snug tracking-wide text-muted-foreground">{s.label}</dt>
              <dd className="font-display text-[1.75rem] font-black leading-none tracking-tight sm:text-4xl lg:text-5xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
