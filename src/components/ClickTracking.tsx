"use client";

import { useEffect } from "react";
import { track } from "@/lib/track";

/** Where on the page a click happened: the labelled section it's in, or the landmark. */
function locationOf(el: Element) {
  const area = el.closest("section[aria-labelledby], aside[aria-labelledby], article[aria-labelledby], header, footer, nav");
  return area?.getAttribute("aria-labelledby") ?? area?.tagName.toLowerCase() ?? "page";
}

/** One click listener for the whole site, so no component has to know about analytics. */
export function ClickTracking() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target instanceof Element ? e.target : null;
      const summary = target?.closest("[data-faq] summary");
      if (summary && !summary.parentElement?.hasAttribute("open")) {
        track("faq_open", { question: summary.textContent?.trim().slice(0, 100) ?? "" });
        return;
      }
      const link = target?.closest("a");
      if (!link) return;
      const url = new URL(link.href, window.location.href);
      const location = locationOf(link);
      if (url.hostname.endsWith("calendly.com")) track("calendly_click", { link: url.pathname, location });
      else if (url.protocol === "mailto:") track("email_click", { location });
      else if (url.pathname.startsWith("/files/")) track("file_download", { file: url.pathname.split("/").pop() ?? "" });
      else if (url.origin === window.location.origin && url.pathname === "/apply")
        track("apply_click", { program: url.searchParams.get("program") ?? "", location });
      else if (link.className.includes("rounded-full"))
        track("cta_click", { label: link.textContent?.trim().slice(0, 60) ?? "", href: url.pathname + url.hash, location });
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);
  return null;
}
