# Brand — Paid to $peak

Paid to $peak is the **coaching brand of Dr. Kevin C. Snyder**. It is not a separate
identity. Treat it as a sub-brand that inherits the parent's visual system and swaps
only its logo lockup.

**Parent brand:** kevincsnyder.com — near-black, cinematic, electric blue + amber,
stage photography.

> Tokens below were pulled from the **live** kevincsnyder.com stylesheet
> (`/assets/styles-CMp3SVWE.css`, October 2026). An earlier draft of this file
> described navy + gold; that was wrong and does not match the parent site.
> If the parent site changes, re-pull from the live site — never from staging.

---

## Name

- Display name: **Paid to $peak** — with the dollar sign, matching the logo.
- Plain-text name: **Paid to Speak** — use in `alt`, `aria-label`, and anywhere a
  screen reader or search engine reads the name. "$peak" reads aloud as
  "dollar peak" and doesn't match searches for "speak".
- Domain: **paidtospeak.biz**. (`paytospeak.biz` does not exist. The repo and the
  staging subdomain keep their old `paytospeak` names — those are infrastructure,
  not brand.)

---

## Color

Defined once, in `src/app/globals.css` under `@theme`. Never hardcode hex values in
components — always reference the token. Names mirror the parent site's tokens so
the two codebases read the same.

| Token | Hex | Use |
|---|---|---|
| `--color-background` | `#010407` | Page background |
| `--color-ink` | `#000103` | Deepest band, footer |
| `--color-card` | `#040A11` | Cards, raised sections |
| `--color-secondary` | `#0E1721` | Elevated surfaces, hover fills |
| `--color-muted` | `#0B121A` | Quiet fills, inputs |
| `--color-foreground` | `#F6F9FC` | Primary text |
| `--color-muted-foreground` | `#95A0AB` | Secondary text |
| `--color-primary` | `#00A8E6` | **Blue.** Highlighted headline phrases, links, focus ring |
| `--color-accent` | `#F7A224` | **Amber.** Primary CTAs, rules, key emphasis |
| `--color-accent-foreground` | `#140801` | Text on amber |
| `--color-border` | `rgb(255 255 255 / 0.10)` | Card and divider borders |
| `--color-input` | `rgb(255 255 255 / 0.12)` | Form field borders |

**Contrast (WCAG, on `background`):**

| Pair | Ratio | |
|---|---|---|
| `foreground` | 19.5:1 | AAA |
| `muted-foreground` | 7.7:1 | AAA |
| `primary` blue | 7.6:1 | AAA |
| `accent` amber | 9.9:1 | AAA |
| `accent-foreground` on `accent` | 9.5:1 | AAA |

The Paid to $peak logo's own colors (blue `#056BDA`, amber rule `#F4B13E`) sit
inside this system already; that's why the two brands read as one. On the dark site
the logo uses `#0676F2` — the exact blue of Kevin's own logo on kevincsnyder.com
(4.8:1 on `background`) — so the two marks match side by side. Logo colors live in
the SVG files only; they are not theme tokens.

---

## Typography

Loaded via `next/font/google`, self-hosted, no layout shift. Same pairing and
weights as the parent site.

| Role | Family | Weight | Notes |
|---|---|---|---|
| Display / headlines | **Inter Tight** | 900 (`font-black`) | `tracking-tight`, `leading-[1.05]`, `text-balance` |
| Hero headline | **Inter Tight** | 900 | `tracking-tighter`, `leading-[0.9]` |
| Body | **Inter** | 400 / 500 | `leading-relaxed`, `text-foreground/80` for long copy |
| Eyebrow / label | **Inter** | 600 | UPPERCASE, `tracking-widest`, `text-xs` |

**Scale (parent site's breakpoints):**
- Hero: `text-5xl sm:text-6xl lg:text-7xl xl:text-8xl`
- H2: `text-4xl lg:text-5xl` (up to `lg:text-6xl` for section openers)
- H3: `text-xl lg:text-2xl`
- Body: `text-lg` in intros, `text-base` elsewhere

**Headline pattern:** sentence case, short, one key phrase highlighted in
`text-primary`. This is the parent site's signature move — use it, but once per
headline at most. Example:

> You already have the story. **Now build the system.**

Not ALL CAPS (except eyebrows and buttons).

---

## Voice

Kevin is a 20-year stage veteran who coaches speakers. He is warm, direct, and
generous — the guy who tells you the truth because he wants you booked.

**Sounds like:**
> You already have a story worth hearing. What you're missing is a system for
> getting it in front of the people who book speakers.

**Does not sound like:**
> 🚀 Unlock your speaking potential today! Transform your life with our
> proven 7-step framework!

**Rules:**
- No emoji.
- No exclamation marks.
- No "unlock," "transform," "elevate," "game-changer," "journey."
- Second person. Talk to the reader.
- Confidence over hype. He doesn't need to oversell — he's booked 1,500+ times.
- Never promise outcomes (bookings, income, fame). Describe the system and the work.

---

## Components

Matched to the parent site's live markup.

### Buttons
- **Primary:** amber fill (`bg-accent text-accent-foreground`), `rounded-full`,
  `uppercase tracking-wide font-semibold text-sm`, `px-7 py-3.5`, soft amber glow
  shadow, `hover:brightness-110`.
- **Secondary:** transparent, 1px `border-border`, `rounded-full`, foreground text;
  border shifts to amber on hover.
- **Tertiary:** text + arrow, `text-primary`.
- Never a gradient fill.

### Cards
- `bg-card` on `bg-background`, 1px `border-border`.
- `rounded-2xl`, `p-7` (`lg:p-8`). Feature panels: `rounded-3xl p-8 lg:p-14`.
- Hover: border shifts toward amber, `transition-colors`.

### Section rhythm
- Vertical padding: `py-20` mobile → `py-28`/`py-32` desktop.
- Alternate `background` / `card` / `ink` bands to separate sections.
- Eyebrow label above every major section headline.

### Focus
- Visible focus ring in `primary` blue, 2px, offset from the element.

---

## Logo

**Source:** the current Wix site. Original saved at
`docs/reference/paid-to-speak-logo-wix-original.jpg` (872×744 JPG).

That file is not usable as-is: white background (the site is dark), no vector,
and the tagline "Launch a successful speaking business!" is baked in (it breaks
the no-exclamation rule).

Rebuilt as SVG, without the tagline. Same mark, not a redesign:
- Wordmark set in **Raleway 900** ("TO" in Raleway 500), letters converted to
  outlines, slightly tightened — the closest match to the original (Montserrat
  was compared and is too wide). Microphone redrawn as a vector "I".
- `public/logo-paidtospeak.svg` — horizontal, for the header.
- `public/logo-paidtospeak-stacked.svg` — stacked with amber rule, for the footer
  and anywhere square-ish.
- Both are generated by `npm run logo` (`scripts/logo/generate.mjs`) — edit the
  script, not the SVGs.
- `<Logo />` in `src/components/Logo.tsx` is the only place the files are referenced;
  its `alt` is "Paid to Speak".
- `TODO(kc):` ask Kevin for the original vector source; if it exists, it replaces
  our rebuild in one file, zero components.

Parent logo for reference: `docs/reference/kevincsnyder-logo.png`.

**Do not use** the book mockup on the Wix site (`PAID to $PEAK` 3D cover): it is an
unpurchased Fiverr preview with watermarks.

---

## Photography

Reuse Kevin's existing stage and portrait photography where available —
consistency with kevincsnyder.com is the goal. Coaching sections work better with
**candid, instructional** imagery (Kevin teaching, at a whiteboard, mid-conversation)
than with keynote-stage shots.

All images: `next/image`, explicit dimensions, meaningful `alt`.
