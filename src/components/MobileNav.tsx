"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { applyHref, nav } from "@/lib/site";

// Native <details> disclosure: works without JS. The client part only exists so the
// menu closes after navigating (keyed on the pathname, the element remounts closed).
export function MobileNav() {
  const pathname = usePathname();
  return (
    <details key={pathname} className="group md:hidden">
      <summary className="flex size-11 cursor-pointer list-none items-center justify-center rounded-full border border-border [&::-webkit-details-marker]:hidden">
        <span className="sr-only">Menu</span>
        <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 group-open:hidden" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
        <svg aria-hidden="true" viewBox="0 0 24 24" className="hidden size-5 group-open:block" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </summary>
      <nav aria-label="Main" className="absolute inset-x-0 top-full border-b border-border bg-background px-5 pb-8 pt-4">
        <ul className="flex flex-col">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className="block border-b border-border py-4 font-display text-2xl font-bold tracking-tight aria-[current=page]:text-primary"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href={applyHref}
          className="mt-6 flex justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-accent-foreground"
        >
          Apply
        </Link>
      </nav>
    </details>
  );
}
