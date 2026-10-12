# Wix migration: paidtospeak.biz

Everything on the Wix site has been carried over to the new site in some form:
as a page, a section, a blog post, a re-hosted file, a redirect, or (where it
can't be published) a record in `docs/wix/` with the reason. Captured 12 October 2026.

| Wix | Count | Where it went |
|---|---|---|
| Indexed pages | 33 | 11 new program pages plus existing pages; every URL redirects |
| Hidden or password-protected pages | 20 | Redirects; buyer-only content is not published (no LMS) |
| Blog posts | 269 (2017 to 2026) | `/blog`, all posts, with images and videos |
| Blog images | 1,207 | `src/assets/images/posts/<slug>/`, resized to 1280px |
| YouTube videos | 187 in posts, more on pages | Click-to-load embeds (`<YouTube>`) |
| Wix-hosted videos | 15 | Still playing from Wix; saved locally, **need re-hosting** (below) |
| Documents | 31 unique | 17 free files in `public/files/`; the rest held back (below) |

## Source of truth

- **`docs/wix/PAGES-INVENTORY.md`** is the full page-by-page inventory: every page's
  copy (verbatim), prices, links, files, videos, problems and destination. Personal
  details (a home address, a private Zoom room and Facebook group) are redacted.
- **`docs/wix/notes-*.md`** list what each program page deliberately did not render
  and why: every guarantee quoted, value claims, unverified claims, testimonials,
  buyer-only content.
- Raw downloads (page HTML, Wix JSON, PDFs, images, videos) are in `.cache/wix/`,
  which is gitignored. It's about 3GB, mostly the Wix-hosted videos.

## Pages

| Old Wix pages | New page |
|---|---|
| `/coachingoptions`, `/copy-of-speaker-coaching`, `/copy-of-1-1-coaching-options(-1)`, `/1-on-1-coaching`, `/speciality-programs`, `/speakeracademy` | `/coaching` (1:1 options in `coaching.how.offer`, plus a grid of every program) |
| `/5weekchallenge`, `/copy-of-coaching-services`, four cohort replay pages | `/coaching/group` |
| `/tedxspeakercoaching`, `/tedxtraining` | `/coaching/tedx` |
| `/mentorshipforspeakers` | `/coaching/mentorship` |
| `/virtualandtechsolutions`, `/copy-of-virtual-studio-setup`, `/studioquestionandanswer`, `/virtualstudiocoaching` | `/coaching/virtual-studio` |
| `/ultimate` | `/coaching/speaker-package` |
| `/onlinecourse`, `/onlinecoursedetails`, `/webinarseriesvideos`, `/overview`, webinar and course buyer pages | `/on-demand` |
| `/vault`, `/welcome` | `/vault` |
| `/mastermind`, `/welcometomastermind` | `/mastermind` |
| `/paideventcalendar1`, `/paideventcalendar` | `/event-calendar` |
| `/accred`, `/toastmasterskeynote`, `/toastmasterkeynotesponsor`, `/copy-of-speaking-professionally-toast`, `/spt` | `/toastmasters` |
| `/bookfiles`, `/worksheets` | `/resources` (free downloads) |
| `/printbook`, `/copy-of-paid-to-peak-print-book`, `/copy-of-paid-to-usdpeak-book`, `/paidtospeakbook`, `/paid-to-speak-book` | `/book` (first-edition section) |
| `/contact-kevin` | `/apply` (coaching values, email, strategy-session link) |
| `/about-1`, `/thankyou` | `/` |
| `/blog`, `/single-post/*`, `/post/*`, `/blog/hashtags/*`, `/blog/categories/*` | `/blog`, `/blog/<slug>` |

Program content lives in `src/content/programs/*.ts` (typed by `types.ts`) and
renders through `src/components/ProgramPage.tsx`. Each program records its Wix
`sources`, every price seen (`wixPrices`), and open questions (`todo`, shown on
the page as a TODO(kc) block).

**Redirects:** `src/lib/redirects.ts`, fed by `src/lib/wix-page-redirects.json`
(pages) and `src/lib/wix-post-redirects.json` (the 22 posts whose slug changed).
All are permanent. Ask Kevin for Wix's own redirect list (Wix dashboard, SEO,
URL redirects) so older aliases survive too.

## Decisions (Ben, 12 Oct 2026)

- **One page per program**, so every Wix offer has a home.
- **Prices are hidden** until Kevin confirms them. Wix shows conflicting prices for
  most programs; each file keeps them all in `wixPrices`.
- **"Buy" buttons book a call** (Calendly) or go to `/apply`. No PayPal links.

## Copy rules applied

Kevin's Wix copy was tidied to `CLAUDE.md` and `docs/BRAND.md`:

- **No outcome promises.** Every guarantee is gone ("you WILL have PAID engagements",
  "$2,500 speaking engagement within 6 months", refunds tied to results).
- **No value figures or urgency.** "$20,000+ in resources" and "only 10 spots" are out.
- **No testimonials.** The two on Wix (Brittany Stephens, Tristan Cole) need Kevin's
  confirmation and the clients' consent.
- **No unverified claims:** "#1 best seller", "25+ years", "all 50 states",
  "90th Accredited Speaker" and others are listed in `docs/wix/notes-*.md`.
- **Blog posts are Kevin's words,** with three mechanical changes applied by the
  importer (`scripts/wix-import/text.mjs`): no em dashes, no emoji, no exclamation
  marks. Old posts still contain older offers and some outcome language; they're
  dated archive content, but review before launch.

## Blog import

`scripts/wix-import/blog.mjs` reads Wix's blog sitemap, converts each post to MDX,
downloads and resizes images, and writes `src/content/posts/wix.generated.ts`.

```bash
node scripts/wix-import/blog.mjs            # fetch new posts from Wix, then convert all
node scripts/wix-import/blog.mjs --offline  # reconvert from .cache/wix only
```

Re-run it just before DNS moves, to pick up anything Kevin posts on Wix in the
meantime. Supporting files:

- `links.mjs` rewrites links to old Wix pages to their new paths.
- `files-policy.json` decides which linked files are re-hosted, renamed, or pointed
  elsewhere.
- `video-overrides.json` holds four YouTube IDs Wix only loads in the browser.

## Not published, on purpose

| What | Why | Where it is |
|---|---|---|
| Sample 1:1 coaching program PDF (both versions) | One prints Kevin's home address; both promise a "GUARANTEED" $2,500 engagement | Links go to `/coaching`. Ask Kevin for a clean version |
| Proposal PDF addressed to "Paul", chart "for Beka" | Named individuals | Not re-hosted |
| SpeakerFlow 2023 report, Toastmasters AS handbook | Third-party documents | Links point to the publishers |
| Sample one-sheets, "Introduction for Kevin" | Unverified figures, client logos, one co-branded with CAMPUSPEAK | Re-hosted only because old blog posts link them; not on `/resources` |
| Buyer deliverables: course and webinar videos, slide decks, Vault contents, Mastermind Zoom link, audiobook and eBook files | Paid content; the site has no LMS or gated area | Not published. Kevin to decide where buyers get access |
| Kevin's Zoom meeting link in 3 club posts (`3-questions-i-ask-myself-after-every-speech`, `paid-to-peak-in-these-5-steps`, `summary5steps`) | Kevin published it openly for club guests, so it is kept as written. The meeting ID is his phone number | **Kevin to decide:** keep or remove |
| Event-specific Wix pages (`/interview`, `/localheroes`) | One-week recording pages | Redirect to the matching blog post or `/blog` |

## Wix-hosted videos: re-host before Wix closes

These play from `video.wixstatic.com` and stop working when the Wix account
closes. All 15 are saved in `.cache/wix/videos/<id>.mp4`; upload them to Kevin's
YouTube (unlisted is fine) and swap the embeds.

- **10 blog-post videos (8 files):** used via `<PostVideo>` in the posts listed in
  `.cache/wix/import-report.json` (`wixVideos`).
- **Page videos (not embedded on the new pages yet):** TEDx coaching intro,
  Ultimate Speaker Package overview, virtual studio, mentorship intro, Event
  Calendar explainer, the coaching-section loop, and the Vault walkthrough (buyer-only).

## Questions for Kevin

The full list is in `docs/wix/PAGES-INVENTORY.md` section 8. The ones that block launch:

1. **Offers.** Which programs are still offered, and at what prices?
2. **Refunds.** What is the real refund policy? The Wix guarantees can't carry over.
3. **Buyer access.** Where do past buyers reach their course, webinars, Vault and
   Mastermind once the Wix pages redirect?
4. **Testimonials.** Consent for testimonials, and any new ones.
5. **Unverified facts.** Confirm the claims listed in the notes.
6. **Videos.** Re-host the 15 Wix videos.
7. **MailChimp.** Is audience `4d90b7541c` (us15) the list for the new site?
