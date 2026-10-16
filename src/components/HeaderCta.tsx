"use client";

import { usePathname } from "next/navigation";
import { ButtonLink } from "@/components/Button";
import { applyHref } from "@/lib/site";

/** The header's Apply button. Hidden on /apply itself, where it would point at the page you're on. */
export function HeaderCta() {
  const pathname = usePathname();
  if (pathname === applyHref) return null;
  return (
    <ButtonLink href={applyHref} size="sm" className="px-4 sm:px-5">
      Apply
    </ButtonLink>
  );
}
