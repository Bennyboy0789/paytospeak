# Paid to $peak — Build Handoff

**Client:** Dr. Kevin C. Snyder
**Site:** paidtospeak.biz (speaker-coaching brand: **Paid to $peak**)
**Name note:** earlier drafts said "Pay to Speak" / paytospeak.biz — that domain does not exist. Repo and staging keep the `paytospeak` name.
**Repo:** github.com/Bennyboy0789/paytospeak
**Staging:** paytospeak.stagmkt.dev
**Owner:** Ben Jarosz / Stag Marketing
**Source of truth:** this directory. Read `AGENTS.md` first, then `BRAND.md`, then `CONTENT.md`.

---

## 1. The one-paragraph brief

Rebuild **paidtospeak.biz** — currently a bloated Wix site — as a fast, modern Next.js site
that reads as the **coaching arm of kevincsnyder.com**. Same brand, same typography, same
color system; only the *Paid to $peak* logo differs. The site sells Kevin's speaker-coaching
program to **aspiring and emerging speakers** and feeds his MailChimp audience list. It is
NOT a page for event planners looking to book a keynote — that's kevincsnyder.com's job.

**Primary conversion:** coaching program application.
**Secondary conversion:** newsletter opt-in ("speaker tips").

---

## 2. Why this project exists (client context — read it, it explains every decision)

Kevin is a 20-year professional keynote speaker (CSP + AS — two of only nine people
worldwide holding both). He hired a web company **11 months ago** and the site still isn't
live. Their process: reverted his edits repeatedly (a round of edits regressed to a version
**three months old**), lost a page and denied it existed until he produced screen video,
passed him to an outsourced team without telling him, and refused to get on a call.

**The relationship is ending.** Kevin hired us to take over hosting/management, and
separately commissioned this build.

**This matters for design because Kevin's bar is not "looks nice."** He has been
handing a vendor his own design direction for nearly a year and getting it back wrong.
What he wants is to be *led* — to be shown a considered point of view instead of
inheriting the job of art-directing his own vendor. Every opinionated, well-reasoned
design decision in this build is the actual deliverable. Generic-but-clean is a failure.

He said, verbatim: *"I don't know what I don't know. I'm so close to my website now that
there's blind spots."* He's formally a designer himself (20 years) — so the work has to
be genuinely good, not vendor-good.

---

## 3. Reference implementation — kevincsnyder.com

**Brand unity is the explicit client requirement.** His words:

> *"If you could align with that kind of design, which does align with my overall
> Kevin C. Snyder, I would love to have paytospeak.biz aligned with my speaking tab
> on kevincsnyder.com... I want the Kevin C. Snyder brand to be consistent. And
> Pay to Speak is my coaching brand of kevincsnyder.com now. So the only thing
> different would be my Pay to Speak logo."*

So: **study kevincsnyder.com and match it.** Specifically match:

- Typography scale and the Inter / Inter Tight pairing
- Near-black + blue + amber color system (pulled from the live site — see `BRAND.md`)
- Button treatment, card treatment, section rhythm
- The overall "cinematic keynote" feel — dark, confident, high-contrast

Do NOT copy the site wholesale. The audiences differ (planners/attendees vs. aspiring
speakers), so the *information architecture* differs. Match the **visual language**.

> **Known issue in the reference:** the staging version of kevincsnyder.com
> (kcstaging3.klevurideas.com) still carries stale Open Graph images pointing at a
> `*.r2.dev` bucket — that's a vendor artifact, not a design choice. Don't inherit it.
> Also note kevincsnyder.com and its staging build have **drifted apart** (different
> copy and different CSS/JS bundles for the same pages). Do not treat the staging
> site as authoritative for copy.

---

## 4. Scope

### In scope
1. Home page
2. Coaching program page(s) — the core offer
3. **Paid to $peak 2.0 book page** — standalone, with placeholder cover. Kevin's book
   outline exists and is ~1/3 drafted; release is ~1-2 months out. This page must be
   live before the book is, and the cover must be swappable in one edit.
4. About / Kevin's story (coaching-framed — *not* a duplicate of the keynote bio)
5. Blog index + post template (content authored in-repo)
6. Newsletter opt-in, wired to MailChimp
7. Contact / apply form

### Out of scope (and do not add)
- Course/LMS functionality — no video hosting, no progress tracking, no gated lessons
- Payments. Kevin uses PayPal today. Payment integration is a later, separate phase —
  do not wire a payment provider in this build.
- Anything requiring a database.
- Rebuilding kevincsnyder.com. That's a separate engagement.

---

## 5. Content rules

**`docs/CONTENT.md` is the canonical copy.** Kevin's existing Wix copy is 2-3 years old
and he explicitly gave us license to rewrite it:

> *"Don't stick to my copy. My copy is from two or three years ago. I haven't really
> touched my Wix site. So it's time that you do."*

That license covers **tone, structure, and clarity**. It does **not** cover facts.

**Hard rules:**
- Never invent a credential, award, client name, testimonial, or booking count.
- If a specific number or claim isn't in `CONTENT.md`, write `TODO(kc):` and move on.
- Preserve `ShiftThinker™` exactly, with its trademark symbol, wherever it appears.
- Kevin's credentials that ARE verified and may be used: CSP (NSA Certified Speaking
  Professional), AS (Toastmasters Accredited Speaker), 20 years on stage, the
  ShiftThinker™ framework, four books (*Think Differently*, *PURE Vulnerability*,
  *PAID to $PEAK*, *Speechless*).

---

## 6. Technical requirements

- **Static-first.** Every page should be statically rendered. No client components
  unless interactivity genuinely requires it.
- **Tailwind v4, CSS-first.** Theme tokens in `@theme` in `src/app/globals.css`.
  There is no `tailwind.config.js` — creating one does nothing.
- **Next.js 16.4.** Read `node_modules/next/dist/docs/` before writing App Router code.
- **Images:** `next/image` only, with explicit dimensions or `fill` + `sizes`.
  Configure any remote host in `next.config.ts` under `images.remotePatterns`.
- **Fonts:** `next/font/google` for Inter + Inter Tight. Self-hosted, no layout shift.
- **SEO:** per-page `metadata` exports. Canonical URLs. `sitemap.ts` and `robots.ts`.
  JSON-LD `Person` + `Organization` schema on the home page.
- **Accessibility:** semantic landmarks, keyboard-navigable, visible focus states,
  AA contrast minimum. This is a gate, not a nice-to-have — see `AGENTS.md`.
- **Analytics:** leave a documented slot for GA4. Do not hardcode a measurement ID;
  read from `process.env.NEXT_PUBLIC_GA_ID` and render nothing if unset.
- **Env vars:** `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_GA_ID`, `MAILCHIMP_*` (see
  `.env.local.example`). Never commit `.env.local`.

---

## 7. Design direction

Kevin's site is dark, high-contrast, and cinematic — stage photography, blue and amber accents,
generous vertical rhythm. Paid to $peak should feel like **the same world, one room over**:
still premium and confident, but warmer and more instructional, because the reader is
a peer learning a craft rather than an attendee being sold a keynote.

**Aim for:** the credibility of a 20-year stage veteran who has clearly done this a
hundred times, talking to someone at the start of the road.

**Avoid:** generic "course landing page" energy — stock-photo handshakes, gradient
hero buttons, three-column icon grids, fake urgency.

The single most important page is the **coaching program page**. It has to make an
aspiring speaker believe that Kevin's system is the reason his peers get booked.

---

## 8. Open questions — resolve with Ben before shipping

These are marked `TODO(kc):` in the content file. Do not guess.

1. **Coaching offer structure** — is there one program or tiers? Price points?
2. **Paid to $peak logo** — raster copy pulled from the Wix site (`docs/reference/`); we rebuild
   it as SVG. Still ask Kevin for the vector source — it must drop in as a one-file swap.
3. **Book cover** — *Paid to $peak 2.0* has no cover yet. Placeholder needed,
   designed to be replaced in one file.
4. **MailChimp** — list ID, and whether opt-in is single or double.
5. **Existing video** — Kevin has coaching video from ~2022. He may want to reuse it.
   Do not embed third-party players until confirmed.
6. **Blog** — Kevin has 5 written posts + thumbnails from the previous vendor.
   Content not yet received. Build the template; seed with one placeholder post.

---

## 9. Working agreement

- Until launch, commit and push straight to `main` (Ben, 2026-10-08). After
  launch: build on a branch, open a PR, Ben reviews before merge.
- Never deploy to a live domain. Staging is `paytospeak.stagmkt.dev`.
- If a decision is genuinely ambiguous and blockable, stop and ask — do not
  pick a direction and build 12 files on top of it.
- Commit messages: imperative, scoped (`feat:`, `fix:`, `chore:`).
