"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { CSSProperties } from "react";
import { applyHref, nav } from "@/lib/site";

// Native <details> disclosure: works without JS. The client part only exists so the
// menu closes after navigating (keyed on the pathname, the element remounts closed).
export function MobileNav() {
  const pathname = usePathname();
  return (
    <details key={pathname} className="group md:hidden">
      <summary className="relative flex size-11 cursor-pointer list-none items-center justify-center rounded-full border border-border transition-colors group-open:border-accent [&::-webkit-details-marker]:hidden">
        <span className="sr-only">Menu</span>
        <span aria-hidden="true" className="absolute h-0.5 w-5 -translate-y-1 rounded-full bg-current transition-transform duration-500 ease-out-expo group-open:translate-y-0 group-open:rotate-45" />
        <span aria-hidden="true" className="absolute h-0.5 w-5 translate-y-1 rounded-full bg-current transition-transform duration-500 ease-out-expo group-open:translate-y-0 group-open:-rotate-45" />
      </summary>
      <nav aria-label="Main" className="absolute inset-x-0 top-full h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-border bg-background px-5 pb-10 pt-6">
        <ul className="flex flex-col">
          {nav.map((item, i) => (
            <li key={item.href} className="enter" style={{ "--d": `${60 + i * 60}ms` } as CSSProperties}>
              <Link
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className="flex items-baseline justify-between border-b border-border py-5 font-display text-4xl font-black tracking-tight aria-[current=page]:text-primary"
              >
                {item.label}
                <span aria-hidden="true" className="font-sans text-xs font-semibold tracking-widest text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href={applyHref}
          className="enter mt-8 flex justify-center rounded-full bg-accent px-7 py-4 text-sm font-semibold uppercase tracking-wide text-accent-foreground shadow-amber"
          style={{ "--d": `${60 + nav.length * 60}ms` } as CSSProperties}
        >
          Apply for coaching
        </Link>
      </nav>
    </details>
  );
}
