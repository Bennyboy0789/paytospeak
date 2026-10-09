"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/lib/site";

/** Desktop nav. Client-side only to mark the current page. */
export function NavLinks() {
  const pathname = usePathname();
  return (
    <ul className="flex items-center gap-9 text-sm font-medium">
      {nav.map((item) => {
        const current = pathname === item.href || pathname.startsWith(`${item.href}/`);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={current ? "page" : undefined}
              className="link-draw pb-1 text-foreground/75 transition-colors duration-300 hover:text-foreground aria-[current=page]:text-foreground"
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
