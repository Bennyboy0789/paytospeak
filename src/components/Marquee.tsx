import { Fragment } from "react";

// Verified facts only (docs/CONTENT.md). Decorative: the same facts are in the
// credentials strip as real text, so the ticker is hidden from assistive tech.
const items = [
  "Certified Speaking Professional",
  "20 years on stage",
  "Accredited Speaker",
  "1,500+ audiences",
  "ShiftThinker™",
  "1M+ people reached",
];

export function Marquee() {
  const row = (
    <ul className="flex shrink-0 items-center">
      {items.map((item, i) => (
        <Fragment key={item}>
          <li className={`px-8 font-display text-4xl font-black tracking-[-0.01em] whitespace-nowrap lg:px-12 lg:text-7xl ${i % 2 ? "text-transparent [-webkit-text-stroke:1.5px_rgb(246_249_252/0.35)]" : "text-foreground"}`}>
            {item}
          </li>
          <li>
            <Star />
          </li>
        </Fragment>
      ))}
    </ul>
  );

  return (
    <div aria-hidden="true" className="marquee relative overflow-hidden border-y border-border bg-ink py-8 lg:py-12">
      <div className="marquee-track">
        {row}
        {row}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink to-transparent lg:w-48" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink to-transparent lg:w-48" />
    </div>
  );
}

function Star() {
  return (
    <svg viewBox="0 0 24 24" className="size-6 text-accent lg:size-9" fill="currentColor">
      <path d="M12 0c.6 6.6 5.4 11.4 12 12-6.6.6-11.4 5.4-12 12-.6-6.6-5.4-11.4-12-12C6.6 11.4 11.4 6.6 12 0z" />
    </svg>
  );
}
