# AGENTS.md — Paid to $peak

Repo guidance for AI coding agents (Claude Code, Codex, Cursor) working in this repository.

## What this is

Marketing site for **Paid to $peak**, the speaker-coaching brand of **Dr. Kevin C. Snyder**
(paidtospeak.biz). It is a **sibling site** to kevincsnyder.com and must read as the same
brand — same typography, same color system, same tone. Only the logo lockup differs.

This is a **marketing site**, not an app. There is no database, no auth, no user accounts.
Content is authored in-repo and shipped via Git.

## Stack

- **Next.js 16.4** (App Router, `src/app`) — read `node_modules/next/dist/docs/` before
  writing code; this major version differs from training data.
- **React 19.3**, **TypeScript**, **Tailwind CSS v4** (CSS-first config, no `tailwind.config.js`).
- **Vercel** for hosting. Push to `main` → production. PRs → preview deploys.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # must pass before any PR
npm run lint
```

## Brand rules — non-negotiable

Full detail in `docs/BRAND.md`. The short version:

| Token | Value |
|---|---|
| Background | `#010407` (near-black) |
| Primary | `#00A8E6` (blue) |
| Accent | `#F7A224` (amber) |
| Body type | Inter |
| Display type | Inter Tight |

- **Never** invent a new accent color. Blue and amber on near-black is the brand — matched to the live kevincsnyder.com.
- **Never** use emoji as UI decoration.
- Headlines are sentence-case and confident. No exclamation marks.
- Copy speaks to *aspiring and emerging speakers*, not to event planners.

## Content ownership

`docs/CONTENT.md` holds the canonical copy. **Do not paraphrase it.** If copy is missing
or contradictory, write `TODO(kc):` and leave it — do not invent biographical claims,
credentials, testimonials, or client names. Kevin is a real person with real credentials
(CSP, AS); fabricating one is a liability.

## Definition of done

1. `npm run build` passes clean.
2. No TypeScript `any` introduced.
3. Every page renders at 375px, 768px, and 1440px without horizontal scroll.
4. All images have meaningful `alt` text.
5. Lighthouse mobile: Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95.
6. No layout shift on image load (explicit `width`/`height` or `fill` + `sizes`).

Checking 3 locally: `npm run build && npx next start -p 3100`, then
`npm run check:viewports -- / /coaching /book /about /blog /apply` (add `--shots <dir>`
for full-page screenshots). In Git Bash prefix with `MSYS_NO_PATHCONV=1`, or the `/`
route arguments get rewritten into Windows paths.

## Before launch

- No `<Placeholder` left in `src/` — each one is a visible TODO(kc) block.
- No `DRAFT(kc)` left unreviewed (see the end of `docs/CONTENT.md`).
- The placeholder blog post (`src/content/posts/placeholder.mdx`) is deleted.
- `offer` in `src/content/coaching.ts` is filled in.
- Apply form has a real destination (`applyAction` in `src/app/actions.ts`).

## Pitfalls

- **Tailwind v4** has no `tailwind.config.js`. Theme tokens live in `@theme` inside
  `src/app/globals.css`. Adding a config file silently does nothing.
- **Next.js 16** deprecates several App Router patterns from v14/v15. Check the bundled docs.
- Never commit `.env.local`. Secrets are set in the Vercel dashboard.
- Image optimization: use `next/image` with remote patterns configured in `next.config.ts`;
  a bare `<img>` to an external host will fail the build or ship unoptimized.

## Escalation

Anything ambiguous about brand, pricing, or claims → surface it, do not guess.
See `docs/HANDOFF.md` for the full brief and open questions.
