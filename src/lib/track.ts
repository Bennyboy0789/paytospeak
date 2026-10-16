/*
 * Conversion events for GA4. A no-op until NEXT_PUBLIC_GA_ID is set (src/components/Analytics.tsx
 * loads gtag only then). Every event carries the page it happened on.
 *
 *   apply_submit     the application form sent             { program }
 *   subscribe        an email sign-up went through          { list, source }
 *   calendly_click   a booking link                         { link, location }
 *   apply_click      a link to /apply                       { program, location }
 *   cta_click        any other button-styled link           { label, href, location }
 *   file_download    a worksheet or PDF under /files        { file }
 *   email_click      a mailto link                          { location }
 *   faq_open         an FAQ question opened                 { question }
 */
type Gtag = (command: "event", name: string, params: Record<string, string>) => void;

export function track(name: string, params: Record<string, string> = {}) {
  const gtag = (window as Window & { gtag?: Gtag }).gtag;
  gtag?.("event", name, { page: window.location.pathname, ...params });
}
