# Notes: on-demand, vault, mastermind, event-calendar

Content files written (repo `paytospeak`):
- `src/content/programs/on-demand.ts` (`onDemand`, `/on-demand`)
- `src/content/programs/vault.ts` (`vault`, `/vault`)
- `src/content/programs/mastermind.ts` (`mastermind`, `/mastermind`)
- `src/content/programs/event-calendar.ts` (`eventCalendar`, `/event-calendar`)

All four use `calendly.strategy` as the CTA. No PayPal links. Every price is in `wixPrices` only. No `downloads` blocks: none of these pages' files are in `public/files/` (the worksheets and equipment list are pointed to by naming the Resources page in body copy).

Below: what Wix had that is intentionally NOT rendered, and why.

---

## 1. On-demand (`/onlinecourse`, `/onlinecoursedetails`, `/webinarseriesvideos`, `/overview`, `/copy-of-webinar-series-overview`)

**Guarantees and refunds (dropped: outcome promises)**
- "I'm so confident in my program that if you do the work and follow each Module, I guarantee you will 'earn' PAID speaking opportunities by the time you complete this online program. If not, we will refund your money."
- "After working with 100+ speakers at various levels, the ones who completed the program had 100% success. I expect for you the same..."
- "Remember my GUARANTEE -- do the work and achieve $2,500 results or your $$ back!"

**Income and results claims (dropped)**
- "Within 6 months, I was able to replace my full-time salary as a Dean of Students. One year later, I was earning 6-figures and speaking fees averaging $3,500+!"
- "They are all based on a proven system and I know can take you and your speaking to new heights!"
- Webinar: "earn 20-30% MORE!" (fee webinar); "my virtual studio investment PAID me back in dividends"; "A book is not required to start speaking, but I feel it's required if you want to get PAID consistently and maximize your speaking fee" (kept the first half and the idea, dropped the fee promise); "What's it costing you NOT having a book?"; the ATEM Mini "GAME CHANGER" line.

**Unverified claims (dropped; not on the verified list)**
- "best-selling and #1 book".
- "over 1,000,000 people through 1,150+ audiences in all 50 states and several countries" (1,150+ also conflicts with the verified 1,500+). "I've been speaking for over 20 years now" (verified is 20 years; the course page doesn't need it).
- TEDx webinar: "I've been honored to speak multiple times for TEDx, organized a premier TEDx event, served as a Speaker Coach for multiple TEDx events and coached hundreds of speakers on TEDx."
- College webinar: "I've presented for over 500 colleges and universities, high schools and various educator groups and conferences."
- Foundation of HOPE: "50% of your purchase of this webinar series goes directly to support ... the Foundation of HOPE" (moved to `todo`; may be out of date). The depression backstory and the TEDx talk video `GbJaPqqV3A4` belonged to that section and were left out with it.

**Stale or salesy copy (dropped)**
- "I'm thrilled to launch my first-ever PAID to $PEAK Online Course!", "Conference events and trainings are back..." (post-COVID), "Time to take A.C.T.ion", "This is your moment to accelerate your speaking."
- "If you know me well this might surprise you, but I do not believe we just automatically rise to the level of our goals... we fall to the level of our systems." Kept the three-step goal/system/apply idea; dropped the "fall to the level of our systems" line because it is James Clear's well-known phrasing.

**Referral program (dropped; money offer)**: "Refer this course and receive $100 ... $50 referral 'thank you' and another $50 donation". In `wixPrices` and `todo`.

**Purchaser-only content (sources only, not carried)**
- `/webinarseries` (all paid webinar videos, longer "In these videos you will learn" intro, "My goal is to raise $30,000 minimum for the Foundation of HOPE each year", donation link), `/webinarcolleges`, `/copy-of-use-on-demand-course-1` (NSA Speakers Academy recordings on Google Drive, slide decks, BombBomb bonus list), and the protected `/trainings`, `/ondemand`, `/paidplus`, `/onlinespeakingcourse`, `/webinars`.
- The six webinar slide-deck PDFs (`ff8670ad…`, `e080cf56…`, `eee82e27…`, `534c2013…`, `6b0d8355…`, `896012a0…`) linked publicly on the sales page are paid deliverables: not linked.

**Videos**
- Rendered (public marketing YouTube): `OB41BkcG5Io` (full orientation, 28 min), `HBc509T3hYw` (short orientation, 13 min), `QeGtQgt3bu0` (book and course overview).
- Not rendered (paid webinar deliverables, visibility unknown): `g5eSRpnqFNo`, `2DVPRd8Fcns`, `5iosbz7mJ_0`, `lLadAEfi9MY`, `1zb5jdecaGI`, `91j0ox1hpzk`, `eVrwfhnhTxQ`, `CHI2K1GmH2Y`.
- No Wix-hosted mp4s on these pages.

**Kept but flagged in `todo`**: unlimited access, coaching call on completion, the 30-minute call with the full webinar series, the Plus inclusions, module topic grouping (confirmed from the five separate "What you'll learn" text blocks in the Wix JSON, in module order).

---

## 2. The Vault (`/vault`; `/welcome` sources only)

**Value figures (dropped)**
- "it's worth over $20,000 in value from over 20 years of experience speaking. Your investment will be far, far less."
- "BONUS OPTION ! Receive Extra $4,500+ Value"; "not bad for $20,000+ in resources"; "The value is a solid $20,000+ in resources."
- Card text: "Over $20,000 in resources that I personally use..."

**Results and income claims (dropped)**
- "my NEW Speaking Agreement which has protected me from sending back $25,000 in force majeure speaking cancelations" (kept only that the agreement has a force majeure clause).
- "Just using my unique 3-tiered speaking proposal template should land you a $2,500 speaking engagement which would more than pay for 'The Vault' itself."
- "My proposals will not only help you get the speaking engagement confirmed, but earn more than what you'd ever think of charging."
- "get PAID speaking engagements that will last a lifetime"; "will be a gamechanger for you and your speaking business"; "Submit proposals with confidence and have the tools ... to grow your speaking business like never before" (softened to "send proposals with confidence").

**Testimonial (dropped)**: Tristan Cole, "...I earned a speaking fee DOUBLE what I would have charged otherwise. 'The Vault' has already paid for itself 5x over!..." (on `/vault` and `/welcome`).

**Other dropped**
- Personal anecdote: "I once spoke at an event where I needed to sell 2 books to afford gas to drive home" (unverified story; fine to restore if Kevin wants it).
- "I know $999 can be difficult for some..." and the tax-deduction notes ("should be considered a legitimate tax deduction ... Consult your tax advisor").
- "Payments are non-refundable" and "Payment plans can be available upon request" (terms, moved to `todo`, not rendered).
- "Within 12 hours of receiving your payment" (process detail, in `todo`).
- The bonus "25% discount" figure is rendered as "a discount" (number in `wixPrices`).

**Purchaser-only (`/welcome`, not carried)**
- Google Drive access instructions, "I'll be adding additional samples and templates over time", "You might not need everything right now...", the recommendation to have the revised 2020 book, and the different bonus list with value tags: "1-year access to my Association Directory ($899 value)", "1-year access to Int'l Speaker Summit", "Access to conference recordings from keynote speakers ($799 value)", "Two 30-minute coaching calls ($500 value)", "20+ recorded webinars I personally purchased ($2000+ value)". The bonus-list mismatch is in `todo`.
- Calendly `snyder/mastermindvaultcoaching` (buyer-only booking link): not used.
- Wix-hosted video `d46abc_472d4b893c3e49708ca72ef123f73f66` (12:51 Vault walkthrough, 720p): purchaser deliverable, not rendered; must be downloaded before Wix is cancelled.
- Vault sample images used as documents (invoice, lead tracker, agreements, proposal; section 5.5 of the inventory): not used (may contain client names).

---

## 3. Speaker Mastermind (`/mastermind`; `/welcometomastermind` sources only)

**PRIVATE LINKS (never published)**: `/welcometomastermind` exposes the Zoom room and the private Facebook group URL. Neither appears anywhere in the content file; `todo` asks Kevin to send them to members by email.

**Dropped claims and copy**
- "Luckily I made it through but most speakers don't" (unverifiable claim).
- "I wouldn't have floundered and struggled like I did for the first several years" (kept as "would have saved him years of struggling on his own", which is Kevin's own account of himself; flag if Ben prefers it out).
- PayPal and payment-method notes ("Payments are made through Paypal and automatic... We can take credit card information as well").
- 2019 chart price, trial price, member referral "$49 for every member you refer" (all in `wixPrices`).

**Purchaser-only (`/welcometomastermind`, not carried)**: Zoom and Facebook links, the "first Monday of each month, 12:00pm to 12:30pm" schedule (conflicts with the public "90 minute group Q&A"; both in `todo`), the assistant contact (Sarah Edwards, Info@InspirActiveSolutions.com), "new since just December 2019", "I would love to see this group grow to hundreds of members", the "gym membership" note, and the suggested ways to engage (feedback on video/website, partner requests, call for programs). The rendered "How it works" uses only `/mastermind` content plus the public card line "webinar each month".

**Not used**: PDF `d46abc_7dcf671820e84b78be248481b86b3523.pdf` linked from `/mastermind` (never downloaded; contents unknown, in `todo`). Book cover images (*Speechless*, *Think Differently*).

---

## 4. Paid Event Calendar (`/paideventcalendar1`)

**ROI and income claims (dropped)**
- "Just ONE EVENT would pay for an entire year's subscription!" (twice) and "ONE MONTH of leads will help you kick-start and grow your speaking! This is the fuel you need!"
- FAQ "How much do these events pay?": "Some events might be $1,500 - $2,500 and some could be $10,000+ ... the potential ROI for you is enormous." (whole question dropped)
- "This should be a GAME CHANGER for you."

**Guarantee wording (rewritten)**: "The PAID Event Calendar guarantees these events hire speakers at the time of being added to our database. It does not guarantee you will be booked..." Rewritten as "Does a listing mean I'll be booked? No..." without claiming the events are guaranteed to hire.

**Unverified or volume claims (dropped)**
- "access to 200+ events per month", "up to 200 events each month", Premium "all 200 - 230+ ... leads" (Premium rendered as "every lead on the month's calendar"; counts in `todo`). Standard 25 and Silver 100 kept: they define the tiers.
- "Below are sample events with budgets looking for speakers" and the ~180 named association conferences (stale 2021 list; third-party names; in `todo`).
- FAQ "How do I know if some groups are a fit?": dropped the named client "the International Erosion Control Association hired me as a keynote speaker" and "The majority of clients I have spoken for..." (named clients are not verified). Kept the advice.
- FAQ "Are these virtual events or face-to-face?" (dropped whole: "2021 looks to be mostly virtual" and "My new contract has already saved me $20,000+ in speaking fees").
- FAQ "Are these events you've spoken at personally?" (dropped: "I will be speaking at several of them... because of this calendar").
- FAQ "Which option do you recommend for speakers just starting out?" ("Go BIG or go home!") dropped as pushy; the "change level any time" answer is kept elsewhere.
- FAQ "What if I'm not ready": dropped "I've been speaking for 20+ years now".
- FAQ "Are events arranged by location or date?": dropped the 2021 virtual-location detail.
- "I'll do my best to respond within 24 hours" (response-time promise) dropped; email address kept.
- Tax-deduction note ("Your purchase of any business expense is a business write off").

**Videos and images**: Wix-hosted explainer `d46abc_72d1a5490efd4076bbef2cda8df7a6e6` (6:48) not rendered; must be downloaded before Wix is cancelled (in `todo`). Promo image `c6636e9b…` (June 2020 Google Calendar screenshot) and sample images not used.

**Dead links not carried**: `kevincsnyder.com/client-summary/` (404), `/speakingprofessionallytoastmasters` (members-only).

**Open risk**: where the lead data comes from (possible third-party data resale) is unknown; in `todo`.
