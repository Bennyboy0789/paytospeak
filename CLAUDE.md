# CLAUDE.md

Entry point for Claude Code in this repository.

**Read these first, in order:**

1. `docs/HANDOFF.md` — the full brief, client context, scope, and open questions
2. `docs/BRAND.md` — color, type, voice, components
3. `docs/CONTENT.md` — canonical copy and the fact-verification rules
4. `AGENTS.md` — stack, definition of done, pitfalls

---

## The short version

Rebuild **paytospeak.biz** — Dr. Kevin C. Snyder's speaker-coaching site, currently on Wix.
It must look like the sibling of **kevincsnyder.com**: same navy + gold, same Inter /
Inter Tight pairing, same cinematic confidence. Only the logo lockup differs.

Stack: **Next.js 16.4 (App Router) · React 19 · TypeScript · Tailwind v4 · Vercel**

## Before you write code

```bash
npm install
npm run dev      # http://localhost:3000
```

**Next.js 16 differs from your training data.** Read the relevant guide in
`node_modules/next/dist/docs/` before writing App Router code. Same for Tailwind v4 —
there is **no** `tailwind.config.js`; theme tokens live in `@theme` inside
`src/app/globals.css`.

## Non-negotiables

- **Never fabricate facts.** No invented credentials, clients, testimonials, or
  audience numbers. Missing detail → write `TODO(kc): <what you need>` and keep going.
  Kevin is a real person with real, verifiable credentials. This is a liability line.
- **Match the parent brand.** Don't invent a new palette or type system.
- **`ShiftThinker™`** — always with the trademark symbol, exact capitalization.
- **No emoji.** No exclamation marks. No "unlock / transform / elevate / journey."
- **Don't build an LMS.** No video hosting, no gated lessons, no progress tracking.
  This is a marketing site.
- **Don't wire payments.** PayPal integration is a later, separate phase.

## Definition of done

`npm run build` passes · no `any` · renders at 375 / 768 / 1440 with no horizontal
scroll · all images have `alt` and explicit dimensions · Lighthouse mobile
Perf ≥ 90, A11y ≥ 95, SEO ≥ 95.

## Workflow

Branch → build → PR → Ben reviews → merge. **Never** deploy to a live domain.
Staging is `paytospeak.stagmkt.dev`.

If a design or content decision is ambiguous enough that you'd be building 12 files
on top of a guess — stop and ask instead.

## Useful context

Our reference for visual language is the live site:
- https://kevincsnyder.com (parent brand — match this)
- Its staging build has drifted from the live site and carries stale vendor-uploaded
  OG images; neither is authoritative for *copy*.

Kevin's current Wix site (to be replaced): https://paytospeak.biz
