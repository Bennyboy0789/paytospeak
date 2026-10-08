# Content — Paid to $peak

**Canonical copy lives here.** Components read from `src/content/*.ts`, which mirrors
this file. If the two disagree, **this file wins**.

---

## Rules for the agent

1. Kevin gave explicit license to rewrite his old Wix copy for tone and clarity.
   Use it. His current site is 2-3 years stale and he knows it.
2. That license does **not** extend to facts. Never invent, inflate, or estimate a
   credential, award, client name, testimonial, audience size, or booking count.
3. Missing fact you need? Write `TODO(kc): <what you need>` in place and continue.
4. `ShiftThinker™` — always with the trademark symbol, always capitalized exactly.

### Verified facts (safe to use)

- Dr. Kevin C. Snyder — keynote speaker, author, coach
- **CSP** — NSA Certified Speaking Professional
- **AS** — Toastmasters International Accredited Speaker
- One of only **nine people worldwide** holding both CSP and AS
- **20 years** speaking professionally
- **1,500+** audiences, **1M+** people reached
- Four books: *Think Differently*, *PURE Vulnerability*, *PAID to $PEAK*, *Speechless*
- Fifth book in progress: *Paid to $peak 2.0* (systems & strategies for speakers)
- Coaches aspiring and emerging speakers
- ~2,000 opted-in subscribers to a bi-weekly speaker-tip email
- Involved with NSA (National Speakers Association)
- Grew up in North Carolina; speaks across corporate, college, and youth markets

### NOT verified — do not use

- Any specific coaching price, tier, or enrollment count
- Any testimonial quote or named client
- Specific income or booking results attributed to coaching
- The Paid to $peak logo **vector** file (not yet received — a raster copy was pulled from the Wix site, see `docs/BRAND.md`)

---

## Home page

### Hero
**Eyebrow:** SPEAKER COACHING
**Headline:** You have a message. Let's get it booked.
**Sub:** Kevin Snyder has spent 20 years on stage — 1,500+ audiences, a million people.
He now coaches aspiring and emerging speakers on the system behind it.
**Primary CTA:** Apply for coaching
**Secondary CTA:** See how it works

> `TODO(kc):` Confirm hero headline direction. Alternative under review:
> "Build a speaking career, not just a great talk."

### Section — The problem
**Eyebrow:** WHY SPEAKERS STALL
**Headline:** Great talks don't get booked. Systems do.

Three points:
1. **You're invisible.** You're excellent in the room and absent online. Planners
   can't find you, so they never call.
2. **You have no materials.** No speaker sheet, no demo reel, no site that does your
   work justice. Every opportunity starts from zero.
3. **You don't know the business.** Speaking is a craft *and* an industry. Nobody
   teaches the second half.

### Section — The shift
**Eyebrow:** THE SYSTEM
**Headline:** What changes when you work with Kevin.

> `TODO(kc):` Confirm the coaching program's actual pillars/steps. Do not invent
> a numbered framework for the coaching offer — the ShiftThinker™ framework is a
> *content* framework for talks, not a coaching curriculum. These are placeholders.

1. **Positioning** — a clear lane, a sharp message, an identity planners remember.
2. **Materials** — the site, the sheet, the reel, the talk descriptions, done properly.
3. **Outreach** — a repeatable process for getting in front of the people who book.
4. **Delivery** — the stagecraft that turns a good talk into a booked career.

### Section — About (coaching-framed)
**Eyebrow:** ABOUT KEVIN
**Headline:** A kid who didn't believe in himself became a speaker a million people saw.

From childhood depression to television game-show winner to keynote speaker and
belief researcher — Kevin's path wasn't a straight line, and that's exactly why he
can teach it. He built the ShiftThinker™ framework from 20 years on stage and turned
it into a system other speakers can learn.

**CTA:** Read Kevin's story

> Note: this must **not** duplicate the keynote bio on kevincsnyder.com. Same person,
> different frame — here he's a *teacher*, there he's a *performer*.

### Section — Book (Paid to $peak 2.0)
**Eyebrow:** NEW BOOK
**Headline:** Paid to $peak 2.0

Systems and strategies for turning what you know into a speaking career.

**CTA:** Get notified when it's out

> `TODO(kc):` Cover art. Placeholder + one-file swap required.

### Section — Newsletter
**Eyebrow:** STAY SHARP
**Headline:** Speaker tips, every other week.
Kevin sends one practical idea for building a speaking career. No fluff.

---

## Coaching page

**Eyebrow:** COACHING
**Headline:** Work with Kevin.

> `TODO(kc):` **Program structure is unknown.** This is the highest-priority open
> question in the build. Options: a single 1:1 engagement, a group cohort, a
> self-paced course, or a tiered ladder. Do not invent a structure — build the
> page template with a clearly-marked `TODO(kc)` block and a commented-out shape
> for tiers so it can be filled in the moment Kevin confirms.

**Placeholder section headings:**
- Who this is for
- What we work on
- How it works
- Apply

**Apply CTA:** Apply for coaching

---

## Books — Paid to $peak 2.0 page

Standalone page. Cover placeholder, swappable in one file.

**Eyebrow:** COMING SOON
**Headline:** Paid to $peak 2.0
**Sub:** The systems and strategies behind a speaking career — from someone who's
been booked 1,500 times.

**Notify form:** email capture → MailChimp.

> `TODO(kc):` Outline is ~1/3 drafted. Request the outline to build the "What's
> inside" section. Until then, ship without it.

---

## About page

> `TODO(kc):` Request his existing bio assets from kevincsnyder.com and any
> long-form story copy. Coaching-framed rewrite of the keynote bio; do not
> duplicate it verbatim.

Sections:
1. The early years — the kid who didn't believe in himself
2. The unlikely turn — game show, stage, research
3. The framework — ShiftThinker™
4. The teaching — why he coaches

---

## Blog

**Eyebrow:** THE BLOG
**Headline:** Notes on the speaking business.

> `TODO(kc):` Kevin has 5 written posts + thumbnails from the previous vendor.
> Content not yet received. Build the index and post template; seed with one
> clearly-marked placeholder post in `src/content/posts/`.

**Cadence:** Kevin intends to post weekly.

---

## Contact / Apply

> `TODO(kc):` Which fields? Minimum assumed below. Confirm whether applications
> should route to email, MailChimp, or a form service.

**Headline:** Tell Kevin where you are.
Fields: name, email, "Where are you with speaking right now?" (textarea —
reworded from "where you are in your speaking journey"; "journey" is banned),
link to a talk or your site (optional).

---

## Global

### Nav
- Coaching
- The Book
- About
- Blog
- **Apply** (button)

### Footer
- Paid to $peak logo
- Parent-brand line: "Paid to $peak is the coaching practice of Dr. Kevin C. Snyder."
- Links: Coaching · The Book · About · Blog · Contact
- Link to kevincsnyder.com (parent site)
- Social: Facebook, X, LinkedIn, Instagram (reuse his handles from kevincsnyder.com)
- `TODO(kc):` Confirm contact email and phone to display — kevincsnyder.com shows
  `kevin@kevincsnyder.com` and `+1 (919) 633-9931`. Confirm these are the right
  ones for the coaching brand, or whether there's a separate address.

---

## Draft copy written during the build — `DRAFT(kc)`

Kevin's license to rewrite covers tone and structure, so the build filled these
gaps with new copy. **None of it introduces a fact** — every claim is from the
verified list above. All of it needs Kevin's read before launch. Search the code
for `DRAFT(kc)` to find each instance.

### Coaching page
**Hero sub:** Coaching for speakers who are good in the room and ready to build the
business behind the talk — from someone who has spent 20 years doing exactly that.
**Image caption:** The view Kevin works toward with every speaker he coaches.

**Who this is for** — *Honest about the fit. Before you apply.*
- This is for you if:
  - You've spoken — at work, at a conference, in your community — and people told you it landed.
  - You want speaking to be part of how you earn a living, not something you do once a year.
  - You're willing to do the unglamorous half: materials, outreach, follow-up.
  - You want direct feedback, including the parts that are hard to hear.
- Probably not a fit if:
  - You want a guaranteed number of bookings. Nobody can honestly promise that.
  - You want a script handed to you. Kevin helps you find your message, not borrow his.
  - You aren't ready to put your talk in front of real audiences yet.

**What we work on headline:** Four parts of a speaking career. All of them, properly.

**Why Kevin** — *Coached by someone still doing the work.*
Kevin has spent 20 years on professional stages — corporate, college, and youth
audiences. He is an NSA Certified Speaking Professional and a Toastmasters
Accredited Speaker — one of only nine people worldwide to hold both. The advice
you get is what he does on Monday.

**Apply panel:** A short application so Kevin can see where you are and what you need next.

### Book page
**Notify:** Leave your email and you'll hear when the book is available.
**Where it started:** Kevin first wrote about the speaking business in *PAID to
$PEAK: How to Become a Professional Speaker*. Paid to $peak 2.0 is his new book on
the systems and strategies behind a speaking career.
`TODO(kc):` confirm how 2.0 relates to the first book. (Subtitle is from the
first edition's cover on kevincsnyder.com.)

### About page
Each chapter carries one or two sentences built only from verified facts, plus a
visible `TODO(kc)` asking for Kevin's own account:
1. **The kid who didn't believe in himself.** Grew up in North Carolina; childhood depression.
2. **A game show, a stage, and a question about belief.** `TODO(kc):` show name, year, research detail.
3. **ShiftThinker™.** `TODO(kc):` one or two sentences in Kevin's words.
4. **Why he coaches.** Credentials + "Now he coaches aspiring and emerging speakers
   on the system behind that career." `TODO(kc):` why, in his words.

### Blog post footer
Want Kevin in your corner? Coaching for aspiring and emerging speakers.

