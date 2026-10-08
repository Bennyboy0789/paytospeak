# Brand — Pay to Speak

Pay to Speak is the **coaching brand of Dr. Kevin C. Snyder**. It is not a separate
identity. Treat it as a sub-brand that inherits the parent's visual system and swaps
only its logo lockup.

**Parent brand:** kevincsnyder.com — dark, cinematic, navy + gold, stage photography.

---

## Color

Defined once, in `src/app/globals.css` under `@theme`. Never hardcode hex values in
components — always reference the token.

| Token | Hex | Use |
|---|---|---|
| `--color-navy-900` | `#06182B` | Page background, deepest surface |
| `--color-navy-800` | `#0B2A4A` | **Primary brand color.** Cards, sections |
| `--color-navy-700` | `#123A5F` | Elevated surfaces, hover states |
| `--color-gold-500` | `#C9A227` | **Accent.** CTAs, rules, key emphasis |
| `--color-gold-400` | `#E0BB4A` | Gold hover / lighter contrast on dark |
| `--color-ink-100` | `#F5F7FA` | Primary text on dark |
| `--color-ink-300` | `#B9C4D1` | Secondary text on dark |
| `--color-white` | `#FFFFFF` | Reversed text on gold |

**Contrast:** `ink-100` on `navy-800` passes AA. Gold `#C9A227` on navy `#0B2A4A` is
~6.4:1 — passes AA for normal text, but **do not** use gold text below 16px. Gold
in small sizes should be bold or paired with a dark plate.

---

## Typography

Loaded via `next/font/google`, self-hosted, no layout shift.

| Role | Family | Weight | Notes |
|---|---|---|---|
| Display / headlines | **Inter Tight** | 700–900 | Tight tracking (`-0.02em`), sentence case |
| Body | **Inter** | 400 / 500 | `leading-relaxed` |
| Eyebrow / label | **Inter** | 600 | UPPERCASE, `letter-spacing: 0.12em`, small |

**Scale (desktop → mobile):**
- Display: `clamp(2.75rem, 6vw, 4.5rem)`
- H2: `clamp(2rem, 4vw, 3rem)`
- H3: `clamp(1.25rem, 2.5vw, 1.75rem)`
- Body: `1.0625rem` → `1rem`

Headlines are **sentence case**. Not Title Case. Not ALL CAPS (except eyebrows).

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

### Buttons
- **Primary:** gold fill, navy text, `rounded-md`, generous horizontal padding.
- **Secondary:** transparent, 1px gold border, gold text.
- **Tertiary:** text + arrow, gold.
- Never a gradient. Never a drop shadow heavier than `shadow-lg`.

### Cards
- `navy-800` fill on `navy-900` page, or `navy-700` on `navy-800` section.
- 1px border at `rgba(255,255,255,0.08)`.
- `rounded-xl`. Padding generous: `p-6` mobile → `p-8` desktop.
- Hover: border shifts toward gold, `transition-colors`.

### Section rhythm
- Vertical padding: `py-20` mobile → `py-32` desktop.
- Alternate `navy-900` / `navy-800` to separate sections.
- Eyebrow label above every major section headline.

---

## Logo

**Not yet received from client.** (`TODO(kc)`)

Kevin said he'd send the Pay to Speak logo. Until then:
- Build `<Logo />` in `src/components/` reading from `public/logo-paytospeak.svg`.
- Ship a typographic placeholder: "PAY TO SPEAK" in Inter Tight 800, gold, with the
  word "TO" in `ink-300` at 70% size for the lockup detail.
- Swapping the real file must require changing **one** file, zero components.

---

## Photography

Reuse Kevin's existing stage and portrait photography where available —
consistency with kevincsnyder.com is the goal. Coaching sections work better with
**candid, instructional** imagery (Kevin teaching, at a whiteboard, mid-conversation)
than with keynote-stage shots.

All images: `next/image`, explicit dimensions, meaningful `alt`.
