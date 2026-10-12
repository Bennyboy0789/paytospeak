# paidtospeak.biz (Wix): page inventory and migration map

Prepared 2026-10-12 for the Next.js rebuild (repo `paytospeak`). Read-only audit: nothing in the repo was changed.

**Sources used**
- The 33 extracted pages in `scratchpad/wix/pages/*.txt` (plus the `*.html`).
- Each page's Wix component JSON, fetched from the `siteassets.parastorage.com ... module=thunderbolt-features` URL listed in each page's LINKS section. This JSON holds data the text extract misses: video player sources, button labels and targets, image alt/file names, HTML-embed URLs, and document file names. Saved copies: `.cache/wix/wixjson/*.json`.
- The HTML embeds (PayPal forms, MailChimp form): `scratchpad/wixembeds/`.
- Every `/_files/ugd/` PDF/DOCX linked from the 33 pages, downloaded and text-extracted: `.cache/wix/dl-pdfs/` (36 files, 31 unique).
- Pricing/graphic images viewed at reduced size: `.cache/wix/dl-imgs/`.
- YouTube titles from YouTube oEmbed. Link status from live HEAD/GET checks on 2026-10-12.

**Quoting conventions.** Text in quotes is verbatim from the Wix page, including Wix's typos and stray spaces (for example "Y ou'll"). HTML entities are decoded. "[verified]" means the claim is on the verified-facts list in `docs/CONTENT.md`. "[NOT VERIFIED]" means it isn't on that list and must not go on the new site until Kevin confirms it.

---

## 0. Site-wide findings (read first)

### 0.1 Boilerplate repeated on every page (recorded once)
- **Header nav (desktop menu), in order.** Home · BLOG · Speaker Coaching (`/coachingoptions`) [1:1 Speaker Coaching `/copy-of-speaker-coaching`, Group Coaching `/5weekchallenge`, TEDx Speaker Coaching `/tedxspeakercoaching`, Virtual Studio and Tech Coaching `/virtualandtechsolutions`] · Speciality Programs `/speciality-programs` [Mentorship Program `/mentorshipforspeakers`, "The Vault" `/vault`, Speaker Mastermind `/mastermind`] · Online Trainings [PAID to $PEAK Online Course `/onlinecourse`, PAID to $PEAK Webinar Series `/webinarseriesvideos`] · #1 Book! `/copy-of-paid-to-peak-print-book` [Print book details: PAID to $PEAK `/printbook`, FREE Module Worksheets `/worksheets`] · Contact `/contact-kevin` · More.
- **Footer.** "Kevin@KevinCSnyder.com" (mailto) · "www.KevinCSnyder.com" · "www.PAIDtoSPEAK.biz" · "Connect with me on your social of choice:" "@KevinCSnyder". Social links: https://twitter.com/kevincsnyder, https://www.linkedin.com/in/kevincsnyderspeaker, https://www.instagram.com/kevincsnyder/, https://www.facebook.com/KevinCSnyderSpeaker.
- **Images common to all 33 pages** (logo plus social icons; skip). `d46abc_9c8cd7c960d04de0b184d2984e0c51c0~mv2.png` is the header logo (the raster logo already in `docs/reference/`). Also `d46abc_760eba0632ca40e9b265ba492926f207~mv2.png`, `d46abc_8d9c017e6f5e4381a59f3f599ad889d2~mv2.jpg`, `d46abc_2531bcff811e4e5cb03ae3b6420218cf~mv2.jpg`, and four generic Wix social icons (`9c4b521d...`, `48a2a42b...`, `8d689333...`, `e316f544...`).
- **"More programs" card grid, repeated on about 12 pages.** It reuses the same images and blurbs:
  - TEDx: "Learn how to apply, be selected and/or prepare for a TEDx speech that should change your life + speaking business!" (`TEDx speaker.jpg`, d46abc_0cd123de2a564e5bb78b50318c3e7c8c)
  - Mastermind: "Connect with an incredible peer group of speakers throughout the month + LIVE Q&A with me directly + webinar each month" (`mastermind for website pricing.jpg`, d46abc_04e3ff16f5cd43f2bc9ec0159f4c3622)
  - The VAULT: "Over $20,000 in resources that I personally use in my own speaking business. Use samples and templates I've created!" (`vault.jpg`, d46abc_f09fed22ebb447bc8a8808ee784e0ced)
  - PAID Event Calendar: "STOP wasting time on events that don't pay! My event calendar gives you access to up to 200 events each month that hire speakers!" (`event calendar.jpg`, d46abc_c6636e9b337c44ca9882d254afa2bbdb). **Bug:** this image links to `/tedxspeakercoaching` on every page.
  - Speaking Professionally Toastmasters: "Elevate and improve your in-person and virtual speaking presence and skill set with our unique club of speakers!" (`profe speaking toatmasters.jpg`, d46abc_b8742306eef64e549a0e30cd6327c27d)
  - Virtual Studio Coaching: "Serious about speaking but don't have a virtual studio? Let me help you create a budget-friendly studio that WOWs!" (`virtual studio consult.jpg` d46abc_6178a4c466aa4fcbafec8b12dff3ac7f, and `use budget options.jpg` d46abc_87e7c9dc7ae74f62bb47febe4e699d57)
  - Ultimate Speaker Package: "Don't have a professional DEMO VIDEO, SPEAKER PACKET, WEBSITE OR BOOK? Let me help. My Ultimate Speaker Package provides it all for you." (`Kevin Snyder Ultimate Speaker Package.jp`, d46abc_177df8dbe4834fd6b97d23e550fd5195)

### 0.2 The Wix site has 53 pages, not 33
All 33 pages are in `pages-sitemap.xml`, so they are indexed. The Wix page registry (master JSON) lists 20 more pages that are not in the sitemap. They still need redirects, and two of them (`/vault`, `/mastermind`) are top-level nav items for real products. Section 4 covers them.
- **Public but hidden (9):** `/about-1` (the home page's own slug, a duplicate of `/`), `/vault`, `/mastermind`, `/welcome` ("Open 'The Vault'" purchaser page), `/welcometomastermind`, `/interview`, `/localheroes`, `/studioquestionandanswer`, `/thankyou` (PayPal return page).
- **Password-protected or members-only (14, server returns no page content):** `/worksheets` (**linked in the main nav as "FREE Module Worksheets", so a nav item is broken for visitors**), `/trainings`, `/ondemand`, `/paidplus`, `/onlinespeakingcourse`, `/tedxtraining`, `/webinars`, `/speakeracademy`, `/spt`, `/speakingprofessionallytoastmasters` (requireLogin), `/5weekchallengeondemand`, `/5-week-challenge-basic-2023`, `/5-week-challenge-on-demand-plus-2023`, `/5weekchallengeplus2025`.
- **Blog.** `blog-posts-sitemap.xml` lists **269** `/single-post/<slug>` URLs (2017-04 to 2026-06) and one category URL (`/blog/categories/speech-preparation-checklist`). The repo already shows a blog import in progress (`src/content/posts/*.mdx`, `src/lib/wix-post-redirects.json`, `/single-post/:slug` to `/blog/:slug` in `src/lib/redirects.ts`). `src/lib/wix-page-redirects.json` is currently `[]`; section 6 provides its contents.
- **Wix already has redirects of its own.** For example, `/paidtospeakbook` 301s to `/printbook`, but `/paid-to-speak-book` (linked from two pages) is a 404. Ask Kevin, or export from the Wix dashboard, for the full Wix redirect list so those old URLs are kept too.

### 0.3 MailChimp (resolves HANDOFF open question 4, pending Kevin's confirmation)
- `/blog` embeds a classic MailChimp form: `action="//PaidToSpeak.us15.list-manage.com/subscribe/post?u=582f61ffcde9864d894978277&id=4d90b7541c"`, with required fields EMAIL and FNAME. Heading: "Sign me up for receiving PAID to SPEAK speaker tips!" So the **datacenter is us15, account u=582f61ffcde9864d894978277, audience id 4d90b7541c**.
- `/` (home) embeds MailChimp's connected-site script: `https://chimpstatic.com/mcjs-connected/js/users/582f61ffcde9864d894978277/bb7c5d775e179a6f45d7e3c39.js` (the same account; likely a pop-up form).

### 0.4 Contact data found
- Kevin@KevinCSnyder.com (everywhere).
- Sarah Edwards (assistant), Info@Inspiractivesolutions.com / Info@InspirActiveSolutions.com (5weekchallenge, welcometomastermind).
- Business name: "Passion Project LLC" (PayPal.me payee; Amazon seller "Passion Project"; check payee in the sample program PDF).
- **No phone number appears on any page.**
- **PRIVACY:** the sample 1:1 coaching program PDF (`d46abc_5bb83ca695cc470787125c92df396555.pdf`, the same file as `...2653ab786d644a0884a06bcf17788f01.pdf`) prints a **personal mailing address** on page 6: "Kevin Snyder / [home address redacted]". That PDF is **already copied into the repo** as `public/files/Private_PAID_to_PEAK_Coaching_Program.pdf`. Do not publish it unredacted without Kevin's OK.
- **PRIVACY:** two more publicly linked files name individuals. `d46abc_87309f5032cb4b80a953141482556001.pdf` is a personalized proposal addressed to "Paul" (linked from /5weekchallenge as "Kevin's 1:1 coaching programs"). The file behind `d46abc_f68d604cb7404dad9bd385863873d1d7.pdf` is named "Coaching Program June 2019 for Beka.pdf". Neither should be re-hosted.
- Calendly event types in use: `calendly.com/snyder/paidtospeak` (the main "Strategy Session"; about 40 links), `/snyder/tedx`, `/snyder/tedxintensive`, `/snyder/virtualstudiocoaching`, `/snyder/hourlycoaching`, `/snyder/3-hour-bundle`, `/snyder/mastermindvaultcoaching` (hidden pages), and `calendly.com/snyder`. All returned 200.

### 0.5 Every product/program found, with every price seen (prices conflict; see the questions)
| Product | Prices seen on Wix (source) |
|---|---|
| 1:1 coaching, 10-session | "$7,500 or $12,500" for 5/10-session (current chart PNG on /coachingoptions); "$12,500" (2021 chart PDF and sample-program PDF); "$15,000" (proposal PDF to "Paul"); "$7500" "PRIVATE 1-ON-1 PROGRAM" (2019 chart) |
| 1:1 coaching, 5-session | "$7,250" (2021 chart and sample PDF); "$10,500" (Paul PDF); "$7,500" (current chart) |
| Hourly / 3-hour bundle | "$125 30 min blocks" (2021 chart); "$249 (hour) or $499 (3-hour bundle)" (2019 chart); "$249/hour or $475 for a 3-hour bundle" (copy-of-virtual-studio-setup); "$250/hour or $650 for a 3-hour bundle" (virtualandtechsolutions) |
| Speaker Assessment | "Only $499" (1-on-1-coaching, accred, copy-of-1-1-coaching-options); "Value : $699 Only $379!" (2017 events page) |
| Speech Review | "at an hourly coaching rate" (no figure) |
| Group coaching: 5-Week Challenge / "PAID to $PEAK in 5 Weeks!" | PayPal form: "PLUS $2,500.00 USD", "BASIC $1,500.00 USD", "Payment Plan deposit $250.00 USD"; chart: "$1,500 or $2,500"; 2019 chart "$3500"; 2017: "NORMAL PRICE : $3,450 ... Discount Price through November 20 : $1,750!"; 2021 chart "PAID TO $PEAK GROUP ACADEMY $1500 (held quarterly)" |
| PAID to $PEAK Intensive (2 days in person, 5 people) | "$4,500 2-Day In-Person Experience" (chart PNG) |
| PAID to SPEAK Academy (1-day seminar) | "NORMAL PRICE : $775 Discount Price Through November 20 : $495! (includes 2 hours coaching)" (2017); "PAID to $PEAK Academy event ($999 value)" (2019 chart) |
| TEDx coaching | "Option 1: Online TEDx training course ($297)"; "Option 2: TEDx Bundle Coaching Session ($697)"; "Option 3: TEDx Intensive Program ... ($7,500 - payment plans can be arranged)"; reduced 5-session version "($2,450 - payment plans can be arranged)"; chart "$350 – $5,000"; 2021 chart "TEDx COACHING PROGRAM $499 (3) 45 min"; 2019 chart "$499" |
| Mentorship | "PRO SPEAKER ... $997/mo", "EMERGING ... $497/mo", "ASPIRING ... $249/mo", "3-month minimum agreement" |
| Ultimate Speaker Package | Option 1 STARTER / Option 2 SERIOUS / Option 3 PROFESSIONAL. No prices published ("schedule a complimentary call to discuss options and pricing") |
| PAID to $PEAK Online Course (On Demand) | "** Access the PLUS course for $450. ** Access the BASIC course for $350!" (PayPal: "PLUS(+) Course! - 450 USD Basic Course - 350 USD"); chart "$497 One-Time Payment"; sample PDF "On Demand PAID to $PEAK course ($499)" |
| Webinar Series | "Single Webinar: ... $50.00 USD" each (9 titles); "ALL Webinar Recordings + 30 minute 1:1 coaching session $250.00 USD" |
| The Vault (hidden /vault) | "'The Vault' without $4,500+ in value \| $799", "'The Vault' including $4,500+ in value \| $999" |
| Speaker Mastermind (hidden /mastermind) | "Monthly \| $50", "Annual \| $475", "Complimentary for Kevin's coaching clients"; "Trial Speaker Mastermind Group - $19" (audiobook page); 2019 chart "MASTERMIND GROUP $999" |
| PAID Event Calendar | "PREMIUM ... $150/mo", "SILVER ... $75/mo", "STANDARD ... $25/mo" |
| Book: PAID to $PEAK (Amazon) | Amazon eBook ASIN B083RD2TWS, print ISBN 1505436265. On-site PayPal: "Purchase Audiobook - $9", "Bundle (audio, eBook + autographed print) - $29", "Autographed print - $19 (includes ship)" |
| Speaking Professionally Toastmasters (club) | no price on page; "Full-year membership ... ($1,000 value)" in Paul PDF |
| PAID to $PEAK Sailing Retreat | "1/2 day with Kevin on his 40 ft sailboat! -- 6 people total!" (5-Week PLUS bonus) |
| Strategy Session | "complimentary" on most pages; TEDx page: "Your $100 discussion fee will be applied to your coaching program" |

### 0.6 Outcome guarantees and income promises (all conflict with "no outcome promises"; none can be carried over as written)
Quoted in full in each page section. Pages with explicit guarantees: `/5weekchallenge`, `/contact-kevin`, `/onlinecourse`, `/onlinecoursedetails`, `/tedxspeakercoaching`, `/copy-of-coaching-services`, plus the current coaching chart image ("with guarantee for PAID speaking opportunities"). Income or fee promises also appear on the home, book, coaching, ultimate, mentorship, event calendar, and vault pages. Note the internal contradiction: the sample coaching agreement PDF says "our coaching program is non-refundable", while several pages promise refunds.

---

## 1. Duplicate groups and canonical choice

| Group | Pages | Canonical | Notes |
|---|---|---|---|
| A. Coaching overview | `/coachingoptions` (nav "Speaker Coaching"), `/copy-of-speaker-coaching` (nav "1:1 Speaker Coaching"), `/copy-of-1-1-coaching-options-1`, `/copy-of-1-1-coaching-options`, `/1-on-1-coaching`; the lower half of `/accred` repeats the same content | **URL: `/coachingoptions`. Copy source: `/copy-of-1-1-coaching-options-1`** (newest revision 1918, the fullest wording, and the only one describing the 5/10-session program and the Intensive) | `/coachingoptions` and `/copy-of-speaker-coaching` are word-for-word identical (only the button ids differ). `/copy-of-1-1-coaching-options` is the 2021-era version with the Speech Review, Speaker Assessment, comparison PDF and card grid. `/1-on-1-coaching` is the 2019-era version (linked from the home button) |
| B. Online course | `/onlinecourse` (nav), `/onlinecoursedetails` | **`/onlinecourse`** | Identical except the first sentence |
| C. Webinar series | `/webinarseriesvideos` (nav), `/overview`, `/copy-of-webinar-series-overview`, `/webinarseries`, `/webinarcolleges` | **`/webinarseriesvideos`** (public sales page) | `/overview` and `/copy-of-webinar-series-overview` are sales-page variants with the overview video embedded. `/webinarseries` ("Webinar Series - FULL") and `/webinarcolleges` ("Scroll down for your purchased video(s)") are **purchaser delivery pages** |
| D. Book | `/copy-of-paid-to-peak-print-book` (nav "#1 Book!"), `/printbook` (nav "Print book details"), `/copy-of-paid-to-usdpeak-book` (audiobook/eBook bundle) | **`/printbook`** (Wix's own `/paidtospeakbook` redirect points here) | The first two are identical. The third is a 2020 audiobook-launch variant with PayPal buttons |
| E. Book files / resources | `/bookfiles`, `/copy-of-use-on-demand-course-1` | **`/bookfiles`** | The second adds NSA Speakers Academy recordings and slide decks (a purchaser/attendee page) |
| F. Virtual studio | `/virtualandtechsolutions` (nav), `/copy-of-virtual-studio-setup` | **`/virtualandtechsolutions`** | The copy is an older version (Wix title "Academy Group Coaching" is wrong; older rates) |
| G. Toastmasters | `/accred`, `/toastmasterskeynote`, `/toastmasterkeynotesponsor` | **`/accred`** | The two keynote pages are host/sponsor variants of the same content |

---

## 2. Page-by-page inventory (33 pages)

Status key: **NAV** = linked from the main menu · **LINKED** = linked from other pages only · **ORPHAN** = no internal link found (reachable via the sitemap, emails or old posts) · **DUP** · **STALE** · **PURCHASER** = post-purchase delivery page.

---

### 2.1 `/` (home.txt). Title: "Home | template"
- **Status:** NAV, live. The same page is also served at `/about-1` (hidden duplicate slug).
- **Purpose:** Front door. Book plus coaching pitch, links to the 1:1 program, TEDx, Mastermind and The Vault.
- **Content:**
  - "Ready to i mpact your audience for positive change , make a difference and some $$$ doing it?"
  - "Watch my demo video below for my own speaking samples! Is this what you want to do?" Video: YouTube `OGl8ZRA2e6c` ("Demo video | Dr. Kevin Snyder | Motivational Keynote Speaker | Certified Speaking Professional"). A second player: `SfJs07T5fNw` ("Overview of coaching options for how to become a professional speaker").
  - Bullets: "Learn how to launch your speaking business" / "Develop your signature speech" / "Learn how to find organizations that pay" / "Understand what meeting planners need".
  - Story: "When I first started speaking, I struggled. I had no strategy, no roadmap, and didn't ask for help. I floundered, made countless mistakes, and nearly quit more times than I care to admit!" "Knowing what I know now, after presenting to 1,500+ audiences in all 50 states and internationally, I would have done things VERY differently!" (1,500+ [verified]; "all 50 states and internationally" [NOT VERIFIED])
  - Book: "CLICK HERE TO PURCHASE AMAZON'S # 1 BOOK ON PROFESSIONAL SPEAKING" [NOT VERIFIED "#1"]. "I wrote PAID to $PEAK: How to Become a Professional Speaker to give aspiring speakers the blueprint I wish I'd had when I started." "Inside, I share my proven strategies to build your foundation, develop a powerful presentation, identify your ideal audiences, and turn your message into PAID speaking engagements." "My goal is simple : Help you avoid the mistakes I made, shorten your learning curve, and build a successful speaking business with confidence."
  - Button "REVIEW KEVIN'S 1:1 COACHING PROGRAM" links to `/1-on-1-coaching`.
  - "Below are some of my most popular coaching services beyond 1:1 coaching. I'm happy to speak with you and explore which is the best fit to ensure you achieve your speaking goals. Click here to schedule ." (Calendly paidtospeak)
  - TEDx card: "Learn how to apply, be selected and/or prepare for a TEDx speech that should change your life + speaking business!" "Learn More"
  - Mastermind card: "Monthly LIVE Q&A with Kevin directly + Call for Speakers announcements + Connect with an incredible peer group of speakers." (links `/mastermind`)
  - The VAULT card: "You'll receive all the tools, templates, samples an strategies that Kevin uses in his own speaking business! Don't create this on your own - no need!" (links `/vault`)
  - MailChimp connected-site embed (see 0.3).
- **Notable images:**
  - `d46abc_ee3b8fe980ce44b9967ce8212f61e7dc~mv2.png` "Kevin's 1,500+ Trusted Organizations.png": logo wall headed "A few of the 1,500+ organizations Kevin has spoken" (UCF, Robert Half, Michigan State, American Red Cross, Fidelity Bank, CAT, Disney, IBM, Duke, NC State, Lowe's, FedEx, P&G, TEDx, jetBlue, Toshiba and others). Client names [NOT VERIFIED].
  - `d46abc_e62286e3d1804153a01b24a41d306d28~mv2.png`: stat band "25+ YEARS ON STAGE / 1,500+ AUDIENCES / 1,000,000+ PEOPLE / 50+ STATES SPOKEN", and "Kevin is one of only nine speakers worldwide to hold both the Certified Speaking Professional™ (CSP) and Accredited Speaker (AS) designations- the highest earned credentials awarded by the National Speakers Association and Toastmasters International." (**"25+" conflicts with the verified "20 years"**; "50+ states" [NOT VERIFIED])
  - `d46abc_3b1ce836131c43c3988975680755e4db~mv2_d_3500_3988_s_4_2.png` "1.png": 3D book mockup of PAID to $PEAK. **It carries a Fiverr watermark, so it can't be reused.**
  - `d46abc_f9cd17e9447c401586c6ab7b92479018~mv2.jpg`: Kevin on stage, church auditorium (also on the book's first-edition cover).
  - `d46abc_08f00f16603b48c69e5b094c14214851~mv2.jpg` "Dr_edited.jpg": "PAID to $PEAK MASTERMIND GROUP" banner, "YOUR MESSAGE HAS POWER. YOUR VOICE DESERVES A STAGE. Let's grow your influence—together!" (looks AI-generated).
  - `d46abc_f0bda59268494824b0198f4812ee5a98~mv2.jpg`: "THE VAULT / Use my templates for your own! / All the tools, templates and strategies for your own speaking business!" (looks AI-generated).
  - `d46abc_a2ff077b5c1f4e0da2f873d80e67d3b4~mv2.jpg`: TEDx Speaker Coaching card.
  - `d46abc_13ef08e8ebae407ca920a582a3e478ed~mv2.jpg` "Photo grid 4 speaker coaching.jpg".
  - `d46abc_855e2e3895be485ea453f4b5eb7ef7dd~mv2.jpg` "Paid to Speak Zoom BG.jpg".
- **Problems:**
  - Typos: "i mpact", "an strategies", "# 1".
  - The "PURCHASE AMAZON'S #1 BOOK" link points to `https://www.paidtospeak.biz` (itself), not Amazon.
  - Promise: "Follow the roadmap, take action, and you could be pursuing your first PAID speaking engagements before you even finish the book!"
  - "25+ years" claim.
- **Destination:** `/` (existing). Carry over: the four bullets as "what you'll learn" ideas, the story paragraph (rewritten), book teaser and Amazon link, demo-video idea (pending video approval). Logo wall only if Kevin confirms the names. No redirect needed. Add `/about-1` to `/`.

---

### 2.2 `/blog` (blog.txt). Title: "BLOG | template"
- **Status:** NAV, live. 27 pages of posts (`/blog/page/2` ... `/blog/page/27`).
- **Purpose:** Wix blog index. Recent posts: "How I Landed My Largest Speaking Engagement Yet in 2026", "The #1 way I prepare every keynote—and how it leads to more PAID speeches!", "Join me behind-the-scenes for one of these upcoming keynotes (3 spots only)", "Selecting Your Most Ideal Target Audience?", "Read my takeaways from attending one of the world's most ELITE speaking conferences!" ("I just returned from the CSP/CPAE Summit..."), "Insider Tips for Landing a TEDx Talk".
- **Embeds:** MailChimp form (see 0.3).
- **Problems:** Post titles use emoji ("🎤"); strip them on import. HANDOFF says "5 written posts", but Wix has 269.
- **Destination:** `/blog` (existing). `/blog/page/:n` goes to `/blog` (or `/blog/page/:n` if the new pagination matches). Posts are handled by the in-progress import.

---

### 2.3 `/coachingoptions` (coachingoptions.txt). Title: "1:1 Coaching Options" (Wix menu label "Speaker Coaching")
- **Status:** NAV, live. **Canonical URL of duplicate group A.**
- **Purpose:** Overview of all coaching formats with a strategy-session CTA.
- **Content (verbatim):**
  - "Watch this short video to learn about my coaching philosophy and how I help speakers succeed. Then explore the programs below and take your next step!" Video: YouTube `SfJs07T5fNw`.
  - "Friends, I've achieved every speaking goal I could have possibly ever dreamed of, but I wouldn't be where I am today as a professional speaker without the coaches who have guided me, challenged me, and held me accountable."
  - "After years of struggling on my own, coaching changed everything! It helped me gain focus, avoid costly mistakes, and earn thousands more in my first year."
  - "My coaching investment paid for itself almost immediately, and within a year, I had built a six-figure speaking business!" [NOT VERIFIED]
  - "Today, I'm passionate about helping other speakers achieve their own success."
  - "My 1:1 coaching availability is limited, but if you're coachable, have grit, and are passionate about inspiring audiences, I'd love to learn more about you and get our caoching in que!"
  - "Ready to take your speaking to the next level? Click here to speak with me ." "I have numerous coaching programs in 1:1, group and online formats. I also customize coaching to work with your budget."
  - 1:1: "My 1:1 speaker coaching is personalized to YOU and your speaking goals! Together, we'll review your materials, refine your message, identify profitable speaking opportunities, and develop strategies to grow your speaking business."
  - Group: "Twice a year, I offer "PAID to $PEAK in 5 Weeks!" — an interactive group coaching program designed to help aspiring speakers build and grow their speaking businesses. I offer a TEDx version as well!"
  - Intensive: "Imagine two (2) full days working directly with me IN-PERSON to learn proven strategies, insider secrets, and systems to get booked and get PAID! You'll also receive follow-up coaching, my PAID to $PEAK Online Course, and more!"
  - TEDx: "Dream of speaking on a TED or TEDx stage? My own TEDx Talk catapulted my speaking business and my most recent resulted in over $100,000 in speaking fees already!" [NOT VERIFIED; income claim]
  - On Demand: "PAID to $PEAK On-Demand offers self-paced Online Courses, Webinars, and TEDx Speaker Training, complete with video tutorials, downloadable templates, and practical resources."
  - CTA (twice): "Unsure which coaching option is best for you or have questions? Let's discuss!" / "CLICK HERE TO SCHEDULE A STRATEGY SESSION" (both to `calendly.com/snyder/paidtospeak`).
- **Images:**
  - `d46abc_3c6e7481929a4cebad23938221490dad~mv2.png` "Paid to $peak Coaching Options Chart.png". **This is the most current price chart:** "Coaching Options. Choose the best path for your speaking goals."
    - Columns: PAID to $PEAK ON DEMAND ("ONLINE COURSE + WEBINAR SERIES", "Self-Paced Online", "$497 One-Time Payment"); GROUP COACHING ("5-WEEK CHALLENGE", "Live Virtual (5 Weeks)", "$1,500 or $2,500 Group Coaching Options (5-Week Program)"); 1:1 COACHING ("5-SESSION AND 10-SESSION OPTIONS with guarantee for PAID speaking opportunities", "Private (Virtual or In-Person)", "$7,500 or $12,500 5-Session or 10-Session Options (with guarantee for PAID speaking opportunities)"); PAID to $PEAK INTENSIVE ("2-DAY IN-PERSON EXPERIENCE", "$4,500 2-Day In-Person Experience"); TEDx SPEAKER TRAINING ("Self-Paced + 1:1 Support", "$350 – $5,000 TEDx Speaker Training (On-Demand + 1:1 Coaching)").
    - Feature rows: Video Training Modules, Live Group Coaching Calls, Private 1:1 Coaching Sessions, In-Person Coaching (2 Days), TEDx-Specific Training, Templates, Tools & Resources (The Vault), Tip Sheets & Downloadable Guides, Access to PAID to $PEAK Online Course, Follow-Up Coaching After Program, Speaker Assessment & Feedback, Marketing, Booking & Business Strategy, Contract Review & Customization, Presentation Development Support, Accountability & Action Plan, Networking & Peer Support, Speaker Mastermind Group, Ongoing Email Support, Access to Future Updates, "BONUS: PAID to $PEAK Book (eBook + Print Copy)".
    - Tagline: "Proven Strategies. Practical Tools. Real Results." "INVESTMENT (payment plans available)".
  - `d46abc_62a901c8591a439382825291cc040e28~mv2.png`: the same stat band as home ("25+ YEARS ON STAGE", ... "one of only nine speakers worldwide").
  - `d46abc_8f4adf64ae1a457386d2a15e1be5da1f~mv2.png` "Kevin Snyder 4.png" (portrait).
  - Program logos: `d46abc_6bfc8ed43cdb4511825fc54746e059fc~mv2.png` "Paid to $peak_ 5 Week Challenge.png", `d46abc_a40fd5b8f5b64c9691cd9926cf559101~mv2.jpg` "Paid to $peak Intensive Logo_edited.jpg", `d46abc_4e5bd594b65a462a95140547e2cbc94d~mv2.jpg` (TEDx card), `d46abc_54e4ca88daea45cea76676faf401d80a~mv2.png` "Paid to $peak On-Demand.png", `d46abc_793ee19273e84515bc7f462f3c4d44c4~mv2.png` "1_1 Speaker Coaching Spotlight".
  - `d46abc_b4678d4be1eb4261bfdf8b82c54858f7~mv2.gif` "Leadership Gif".
- **Problems:**
  - Typo: "caoching in que" (queue).
  - Income claims: six-figure, $100,000, "earn thousands more".
  - The chart image promises "guarantee for PAID speaking opportunities".
  - Two identical CTA blocks.
- **Destination:** **`/coaching`** (existing). Use the comparison table *structure* as the `coaching.how.offer` ladder once Kevin confirms prices. Drop the guarantee wording.

### 2.4 `/copy-of-speaker-coaching` (copy-of-speaker-coaching.txt). Title: "1:1 Coaching Options" (menu "1:1 Speaker Coaching")
- **Status:** NAV, **DUP of `/coachingoptions` (text identical, same images, same video `SfJs07T5fNw`).**
- **Destination:** 301 to `/coaching`.

### 2.5 `/copy-of-1-1-coaching-options-1` (copy-of-1-1-coaching-options-1.txt). Title: "1:1 Coaching Options" (Wix name "Copy of 1:1 Coaching Options")
- **Status:** ORPHAN, DUP draft, but **the newest and fullest copy** (Wix revision 1918, vs 1917 for /coachingoptions). Use it as the copy source.
- **Content beyond /coachingoptions (verbatim):**
  - 1:1: "Choose from flexible 3-hour coaching bundles or my comprehensive 5-session or 10-session program , which includes additional resources, incentives, and ongoing support to accelerate your success!"
  - Group: "Twice a year, I offer "PAID to $PEAK in 5 Weeks!" — an interactive group coaching program designed to help aspiring speakers build and grow their speaking businesses using my proven PAID to $PEAK model. I offer a TEDx version as well!" "You'll learn alongside other motivated speakers, benefit from peer support and accountability, and gain direct access to me through weekly live coaching sessions and Q&A. Get enrolled when the next cohort begins!"
  - Intensive: "Imagine two (2) full days working directly with me IN-PERSON to learn proven strategies, insider secrets, and systems to get booked and get PAID!" "Offered once a year, the PAID to $PEAK Intensive is an exclusive, hands-on coaching experience for five (5) people to launch/accelerate their speaking business." "You'll also receive follow-up coaching, my PAID to $PEAK Online Course, and 'The Vault' resources!"
  - TEDx: "...my most recent resulted in over $100,000 in speaking fees already!" "I've delivered several TEDx Talks, coached speakers for numerous TEDx events, and even served as the lead organizer of a major TEDx event." "My TEDx coaching will help you find TEDx opportunities, get selected and deliver your life-changing TEDx talk!"
  - On Demand: "Learn to get booked and get PAID—anytime, anywhere, at your own pace!" "PAID to $PEAK On-Demand offers self-paced Online Courses, Webinars, and TEDx Speaker Training, complete with video tutorials, downloadable templates, and practical resources." "Perfect for aspiring speakers seeking affordable, flexible training to grow their speaking business! On-Demand resources are also included in all 1:1 Speaker Coaching."
- **Images:** the same as /coachingoptions, including the price chart PNG.
- **Problems:** "caoching in que"; the same claims as 2.3.
- **Destination:** 301 to `/coaching` (copy source for it).

### 2.6 `/copy-of-1-1-coaching-options` (copy-of-1-1-coaching-options.txt). Title: "1:1 Coaching Options" (Wix name "Coaching Options")
- **Status:** LINKED (only from `/toastmasterkeynotesponsor`'s "Visit Kevin's Speaker Coaching Options Here"). DUP, older (2021-era).
- **Content (verbatim, unique bits):**
  - Philosophy: "Friends, I would not be where I am today as a speaker without the coach I hired to guide me, support me, hold me accountable and answer questions weekly." "I struggled for years doing it all on my own before finally realizing I could benefit having guidance from someone who had already paved the way before me." "Coaching helped me get out of my own way, be more accountable, be more focused and earn thousands more in the first year alone. Coaching immediately paid for itself and one year later I had a 6-figure speaking business." "I do not have the time to coach everyone that applies to work with me. If you are coachable, have grit, and are passionate about speaking to inspire audiences, then your first step is to schedule a Strategy Session with me."
  - Formats: "One-on-one coaching allows for personal review of your work, feedback of your speaking materials, specific guidance for your paid target industries, suggestions on your speaking business, and much, much more! I provide 3-hour coaching bundles as well as a full comprehensive coaching program with numerous additional incentives." / "Quarterly, I host a group coaching program that guides you through the proven PAID to SPEAK model. You'll start and stop alongside other aspiring speakers in a cohort group coaching frame..." / "Held once a year, the PAID to SPEAK Academy is a one(1)-day seminar event leading you through the entire process for developing a successful speaking business..." / "Desire to speak on the TED or TEDx stage? My TEDx video catapulted my speaking business. I've been a speaker for TEDx, served as a Speaker Coach for many other TEDx events, and even been head organizer for TEDxRaleigh..." [TEDxRaleigh NOT VERIFIED] / "PAID to SPEAK is available On Demand as well as various other training workshops. My online courses are self-paced program leading you through the PAID to SPEAK modules... This online course is ideal for those on a limited budget starting off."
  - **"All 1:1 Coaching Options Include ..."**: "Crafting your signature story", "Learning my business model", "1-on-1 time with me", "My review of your materials", "Access to my templates", "Learning what organizers need", "Guidance on your marketing", "How to go from FREE to FEE", "... ask anything you want!", "Identify 5+ target groups".
  - "If you already know you're "all in" and fully committed to professional speaking, then my 5-session or 10-session Intensive Coaching Program is what you need. Click here to view all that's included in my sample 1:1 speaker coaching program ." (PDF `d46abc_5bb83ca695cc470787125c92df396555.pdf`, see section 5)
  - **Speech Review:** "Have an upcoming "high stakes" speech and want to make the most of it to ensure spin-off speaking business? I provide "Speech Reviews" at an hourly coaching rate where I help you prepare properly and deliver an upcoming presentation." Button "Book Your Speech Review" (mailto with subject "I'm a serious speaker and am interested in your speaker assessment!", the wrong subject for a speech review).
  - **Speaker Assessment:** "Speaker Assessments are ideal for anyone who is not getting consistent speaking gigs. I'll review all your material and share constructive ideas from a meeting planner perspective!" "Speaker Assessments include my review of ... your marketing materials / your website and video / your speech outline / your outreach emails / your proposals and contracts / ... anything you'd like feedback on!" "After my review of all your speaking materials, I'll provide a written assessment and include recommendations and samples showing you how to book more speaking business. You'll also receive a complimentary coaching call to discuss my recommendations." "Note : Don't have these items above? Consider coaching to help you develop them!" **"Only $499"** "... a small investment in your business to make thousands more each contract!" Button "Book Your Speaker Assessment" (mailto).
  - Card grid (0.1), plus "Don't have a professional DEMO VIDEO, SPEAKER PACKET, WEBSITE OR BOOK? Let me help. My Ultimate Speaker Package provides it all for you."
- **Downloads:** button "Click here to download the comparison chart below" leads to `d46abc_4bd026bb54af4ffcb3b733a655665bd4.pdf` ("NO Deal. Coaching Programs 2021.pdf"; image copy `d46abc_5fe78b3d5a8f4375865aab4bb3ae25e6~mv2.jpg`). Prices: PRIVATE 10 SESSION "$12,500 ($22,000+ value)", PRIVATE 5 SESSION "$7,250 ($12,000+ value)", PAID TO $PEAK GROUP ACADEMY "$1500 (held quarterly)", TEDx COACHING "$499 (3) 45 min", HOURLY "$125 30 min blocks". Footnote: "** Important Note : You are investing in yourself and future to build a business. I'll show you how to position your speaking fees starting out to be $2,500+ per speech and build into $10,000+..."
- **Video:** Wix-hosted `d46abc_1713bcb78ae1488986b7e4ca4c691aa0` (3:22, autoplay/loop/muted, untitled) plus YouTube `SfJs07T5fNw`.
- **Gallery images:** `d46abc_0b09bf9ef25044878534b0a7ab257b2a~mv2.jpg`, `d46abc_24fefd6a4152463fa1b9e01ab55f11db~mv2.jpg`, `d46abc_b8571e9982bf45c7ad340abecb6b238c~mv2_d_1378_1378_s_2.jpg`. Card images: `d46abc_12d9cf0bfe274795be96dc8099b2d16d~mv2.png` (stock "Group Coaching" hands image with a third-party logo, **don't reuse**), `d46abc_9777c491324a4227b3a79883dc3faca0~mv2.jpg` ("How to Become a TEDx Speaker", Kevin at TEDxWakeForestU), `d46abc_6719620f56734291b526ec4867bc2275~mv2.jpeg`, `d46abc_d9f96ad1ded9410b9e77c1a7e5dc4724~mv2.jpg`.
- **Problems:** stale (2021 chart); "Speaker Assessment" mailto subject reused for Speech Review; income promise "make thousands more each contract".
- **Destination:** 301 to `/coaching`. Carry the "All 1:1 options include" list, Speech Review and Speaker Assessment as add-on services on `/coaching` (price TBC).

### 2.7 `/1-on-1-coaching` (1-on-1-coaching.txt). Title: "Coaching | template"
- **Status:** LINKED (home button "REVIEW KEVIN'S 1:1 COACHING PROGRAM"). DUP/STALE (2019-era).
- **Content (verbatim, unique bits):**
  - "Before hiring my first speaker coach, I struggled to figure everything out on my own. I made mistakes, wasted time, and nearly gave up!"
  - "Coaching changed everything. It taught me how to treat speaking like a business, helped me earn thousands more in my first year, and gave me strategies I still use today."
  - "In fact, my first PAID speaking engagement after coaching covered the entire coaching investment!"
  - "So whether you're just getting started or ready to take your speaking business to the next level, you don't have to figure it out alone."
  - "I've been where you are. Let me help you avoid the mistakes I made, accelerate your growth, and turn your message into PAID speaking engagements."
  - "STOP struggling. START speaking."
  - "Explore my coaching options below and let's get you moving forward!" Heading: "Coaching Services for Speakers".
  - Same format paragraphs as 2.6 (1:1, quarterly group, yearly Academy, TEDx/TEDxRaleigh). Online course: "The PAID to SPEAK Online Course is a self-paced program leading you through the PAID to SPEAK modules. Watch the video tutorials when, where, and how often you want. Alongside videos, you'll have tip sheets and downloadable documents guiding you like a personal coach. This online course is ideal for those on a limited budget starting off."
  - The same "All 1:1 Coaching Options Include ..." list.
  - "Contact me for a complimentary call to customize a coaching program specifically for you, your budget and your goals."
  - Speech Review and Speaker Assessment blocks, "Only $499".
- **Download:** "Click here to download the coaching program comparison chart below" leads to `d46abc_f68d604cb7404dad9bd385863873d1d7.pdf` ("Coaching Program June 2019 for Beka.pdf"; also shown as image `d46abc_8a445847ef3448289b190cceb007edc3~mv2_d_10200_13200_s_6_4_3.jpg`). Prices: "PRIVATE 1-ON-1 PROGRAM $7500 ($20,000+ value)", "5-WEEK GROUP PROGRAM $3500 ($10,000+ value)", "HOURLY MENTORING $249 (hour) or $499 (3-hour bundle)", "TEDx COACHING PROGRAM $499", "MASTERMIND GROUP $999". Lists "PAID to $PEAK Academy event ($999 value)", "Book writing templates ($799 value)", "Book Promotion/Customized Books guides ($499 value)", "PAID to $PEAK Sailing Retreat (1/2 day charter)", "Speaker Assessment of all your material ($499 value)", "Access to "The Vault" ... ($3,499 value)", "Association Directory access ... ($2,499 value)", "Introduction to two (2) of my speaker bureaus". Footer: "Just one speaking gig would recoop any investment AND be a lifetime of knowledge!"
- **Images:**
  - `d46abc_09f4786585fa41e5a541b64a2b602b9e~mv2.jpg`: casual portrait of Kevin seated on a stone bench (good About-page candidate).
  - `d46abc_00d08cd7e5fe47df9e01b8d453870001~mv2.jpg`: collage of Kevin speaking (ballroom, gym selfie, stage).
  - `d46abc_802f413c97984b11b7154755a68da99d~mv2.jpg`: ballroom photo with the quote "You can change without growth but you cannot grow without change. And this is true in life, leadership, and in business." (Dr. Kevin C Snyder).
  - Gallery `0b09bf9e…`, `24fefd6a…`, `b8571e99…`; `12d9cf0b…` (stock, don't reuse); `6719620f…`, `9777c491…`, `d9f96ad1…`.
- **Problems:** "recoop"; claim "my first PAID speaking engagement after coaching covered the entire coaching investment"; a file named after a person; stale prices.
- **Destination:** 301 to `/coaching`.

---

### 2.8 `/5weekchallenge` (5weekchallenge.txt). Title: "PAID to SPEAK 5 Week Challenge" (menu "Group Coaching")
- **Status:** NAV, live, partly STALE (the session dates are past; the year isn't stated). An image is named "5 Week Challenge Plus 2025.jpg", and the Amazon link timestamp is June 2025. June 3 to July 1 Wednesdays match both 2020 and 2026.
- **Purpose:** Sales page for the group coaching cohort (BASIC / PLUS), with FAQ and PayPal enrollment.
- **Content (verbatim):**
  - Hero: "Accept the "5-Week Challenge" and I'll GUARANTEE you'll land PAID speaking engagements!" "Follow the process and results will flow ." "I stand behind my 'PAID to $PEAK' speaking business model and will help you make it your own. ~ Kevin"
  - "The PAID to $PEAK 5-Week Challenge will transform your understanding of the professional speaking industry, literally show you how to find PAID speaking engagements and provide a supportive community in just 5 sessions! In both a group setting and included 1:1 coaching sessions with Kevin directly, you'll have Kevin as your guide and mentor walking you through his entire PAID to $PEAK framework that has enabled him to speak for over 1,000,000 people throughout 1,500 audiences in all 50 states and several countries." (1M and 1,500 [verified]; states/countries [NOT VERIFIED])
  - "Here's where the "Challenge" comes in ... as long as you do the work and SHOW UP, Kevin stands behind his content, guidance and support resources that you will start earning PAID speaking engagements within the next six(6) months. For those of you in the 'Plus' program, we'll REFUND your $$$ if you don't have Fall PAID engagements! The 'Plus' program allows Kevin to personally work with you 1:1 and review your materials in two(2) coaching sessions."
  - "Accept the "Challenge" and you will have PAID speaking engagements on your Fall calendar."
  - "The 5-Week Challenge is an acute period of time where you have access to Kevin in a weekly LIVE group Q&A to guide you through his process and answer your questions about earning PAID speaking engagements. The 'Plus' version also provides additional 1:1 coaching."
  - "You also are part of a special cohort community to connect with other speakers, learn from them and have the opportunity for ongoing support and community. (Note: Community is essential!)"
  - "Y ou'll receive Kevin's entire PAID to $PEAK Online Course ( click here for details ) and each week of the 5-Week Challenge will focus on a particular Module leaving no stone unturned! Kevin's course is based on his #1 and best-selling book for speakers, PAID to $PEAK , which outlines his speaking business model and how he has landed PAID speaking engagements."
  - "Not feeling ready ? Good! The point of Kevin's 5-Week Challenge is to Get You Ready!" "If you are committed to your speaking though, then accept the challenge! It's an acute period of time where Kevin will be your coach for 5-weeks - guiding, supporting and answering your questions along the way to ensure you GET RESULTS ! Plus, he'll be sharing extras NOT included in the book and online course." "Committed to the Challenge ? What's it costing you NOT taking the Challenge?"
  - **Inclusions, BASIC:** "The PAID to $PEAK 5-Week Challenge Consists : Entire PAID to $PEAK Online Course ! / Weekly group coaching session - LIVE Q&A! / Recordings of each session / 3-month PAID to $PEAK Mastermind / Extra templates, samples and scripts". Image `d46abc_0a1d15d780224f9c96c7a57235c24439~mv2.jpg`: "OPTION 1 BASIC Package: Group cohort community / Weekly 90-minute Q&A / Total of 5 Q&A's with Kevin! / Questions live and in advance / Recordings of all sessions / PAID to $PEAK Online Course / Speaker Mastermind (3 months) / +++ bonus templates NOT included in the PAID to $PEAK Online Course!"
  - **Inclusions, PLUS:** "1:1 coaching sessions w/ Kevin directly (2 sessions) / Kevin's PAID to $PEAK Webinar Series / Kevin's TEDx training videos + templates / Speaker Assessment where Kevin reviews your speaker website, demo video, program info, etc.! / PAID to $PEAK Sailing Retreat (1/2 day with Kevin on his 40 ft sailboat! -- 6 people total!) / .... and more!". Image `d46abc_654f55cf1cf54f73b8f320f965c7cced~mv2.jpg` ("5 Week Challenge Plus 2025.jpg"): "Option 2 PLUS Package. Everything from Option 1, plus: Two(2) 1:1 Coaching Calls w/ Kevin / Kevin's PAID to $PEAK Webinar Series / Kevin's TEDx training + addt'l session / Virtual training + addt'l session (group) / Speaker Assessment from Kevin / PAID to $PEAK Sailing Retreat / Full year of Speaker Mastermind" (**the text says a 3-month Mastermind for BASIC; the image says a full year for PLUS**).
  - "The 5-Week Challenge is ideal for anyone - whether brand new(er) to speaking, emerging or already seasoned - who is committed to earning PAID speaking engagements!"
  - Guarantee: "No risk guarantee ! We are so confident in what we've created that if you do the work, Kevin guarantees you will start to "earn" PAID speaking engagements within six(6) months like he did nearly 20 years ago. For those in the 'Plus' program, we'll refund your $$$ if you do not have Fall engagements. Yes, "GUARANTEE" is a strong word! You WILL have PAID engagements!"
  - Framework: "Kevin's PAID to $PEAK framework will teach you (a) how to prepare your business and mindset, (b) how to design and deliver an incredibly powerful speech, (c) how to find PAID speaking opportunities, (d) how to verify and identify organizations who can pay, (e) how to set speaking fee and (f) all the secrets and strategies he has used to build and grow his speaking business over the years!"
  - Videos: "Watch Kevin's SHORT video about the 5-Week Challenge!" YouTube `aIcIPqnF6_c` ("Learn more about the PAID to $PEAK 5-Week Challenge!"); "Watch Kevin's FULL video about the 5-Week Challenge!" YouTube `9rtIrL5TfaQ` ("Details about the PAID to $PEAK 5-Week Challenge!").
  - **How to Enroll:** "1. Accept the Challenge and envision PAID speaking engagements this Fall! 2. Confirm your seat by either (a)making payment in full or (b)deposit and request a payment plan. After payment, we'll set up your access prior to the program beginning." "Note : If you desire a payment plan, make a deposit payment and then contact Sarah Edwards at Info@Inspiractivesolutions.com with your desired payment plan arrangement." "* once your seat is confirmed, you'll receive an email with more details including access to the Online Course, how to prepare for session #1 and more!"
  - **Schedule:** "UPCOMING COHORT SCHEDULE * Session 1: Wednesday, June 3 / Session 2: Wednesday, June 10 / Session 3: Wednesday, June 17 / Session 4: Wednesday, June 24 / Session 5: Wednesday, July 1" "** Sessions are scheduled for Wednesday's @ 12pm EST unless Kevin's speaking calendar changes." "** Can't make a session? That's OK! Each session is recorded and we also invite your question(s) upfront which Kevin can address and integrate into the Q&A each session!" "** After July 1 final session, you'll have access to Kevin's Speaker Mastermind for continued support!"
  - **Payment:** "You have 2 options with the 5-Week Challenge: (1) BASIC or (2) PLUS!!" "Payment plans available ( click here ) to inquire." PayPal embed (`d46abc_e4e6858e9db54d4ced3091a3b502405b.html`, hosted_button_id **KQK4XBJ79MXFC**), "5-Week Challenge" dropdown: "PLUS $2,500.00 USD", "BASIC $1,500.00 USD", "Payment Plan deposit $250.00 USD".
  - "This is your moment to accelerate your speaking and earn PAID speaking engagements! Remember our GUARANTEE you will earn PAID speaking engagements . Also, keep in mind that all expenses for coaching/education should be considered business expenses - i.e. tax deductions! (consult your CPA/tax advisor)"
  - **Referral:** "Know Someone Who Wants to Speak? Refer the 5-Week Challenge to them and receive $250 ! That's right! You'll receive a $150 referral 'thank you' and another $100 donation in your honor will be made to a charity of your choice -- that's $250 total for every referral who takes action."
  - **FAQ (verbatim):**
    - "What is a cohort ?" "The cohort is the group of individuals banded together for each 5-Week Challenge. We will start together and end together! The additional benefit of cohorts is that you can connect with and support others within the cohort during the 5-Week Challenge and after! It's a community within a community."
    - "What if I don't feel ready ?" "That's the entire point! The 5-Week Challenge will Get YOU Ready! Wouldn't it be nice to no longer feel that way?"
    - "What if I cannot make the weekly LIVE Q&A group sessions during the 5-week period ?" "All Q&A's will be recorded. You can send your questions in advance for them to be answered during the Q&A!"
    - "How long and when are the LIVE Q&A group sessions ?" "Full 90 minutes live with Kevin Snyder via Zoom. We'll ask for your questions in advance and que them in priority. We'll also take questions LIVE. Unle ss a better time emerges for the cohort, sessions are scheduled on Wednesdays (June 3 - July 1) at 12 pm EST / 9 am PST."
    - "Do I have enough time to be ready for the next cohort ?" "Yes. Remember the entire point of the 5-Week Challenge is to Get YOU Ready! Each week has a focus on a specific Module so you understand CONCEPTS. As long as you review the Module and do your best to work on it, you should have questions. You will also learn from others."
    - "How to prepare for the 1st session ?" "We will focus on Module 1 of PAID to $PEAK! Get your copy here on Amazon -- available in print, eBook and audiobook formats. Read/listen to the Preface and Module 1 from the book and work through the Module 1 worksheet ( click here for worksheet ). After you enroll you will receive more details."
    - "What is the structure for the LIVE Q&A sessions ?" "Week 1 Q&A will focus on Module 1. Week 2 focuses on Module 2, etc. You'll receive the entire Online Course in advance so that you can watch each Module before the Q&A and share your questions in advance! The LIVE Q&A will focus on your questions!"
    - "Is this just for professional speakers ?" "It's for ANYONE at any level of speaking experience who isn't satisfied with their current results and wants to grow in their PAID speaking potential. Whether you are brand new to speaking or have seasoned experience, what's important is where you want to be."
    - "What are the guarantee details ?" "If you do the work, you will get results! If you don't do the work, then don't expect to get results. It's really no different than a gym membership friends! If you do the work, meaning you complete all the checklists successfully at the end of each Module and take advantage of the follow up 1:1 complimentary coaching session with Kevin (yes, complimentary!) but do not have a PAID speaking engagement, we'll send you a refund."
    - "Are payment plans accepted ?" "Yes, but full payment must be made by session #3. Click here to inquire about payment plans ."
    - "Can I pay NOW to lock in the price for a later cohort ?" "YES. Smart."
    - "How many individuals are in a cohort ?" "It depends. The PLUS program will be limited to a certain number of people since it includes 1:1 coaching calls from Kevin. See below for a comparison of Option 1 and Option 2!"
    - "What if I need some 1:1 help ?" "Absolutely. Just reach out to Sarah Edwards or Kevin directly ( click here ) and they can set up a time to explore 1:1 coaching options. Please review Kevin's 1:1 coaching programs here first - click here!"
    - "Have other questions ? Click here to send us an email!"
  - **Module outline** (titles link to free worksheets): "Module 1: Where to start?", "Module 2: Developing your program", "Module 3: Finding speaking opportunities", "Module 4: Getting PAID to $PEAK!", "Module 5: Consistent PAID bookings". "What you'll learn : ... Where to start? / ... Numerous ways to get PAID / ... Great speakers solve problems / ... How to differentiate yourself / ... Discovering your Call to Action / ... Debunking speaker myths / ... The elements of your program / ... How to create a Speaker One Page / ... Tips to design your presentation / ... How to find practice opportunities / ... finding speaking gigs / ... how to outreach / ... speaking to students / ... how to get referrals / ... branding yourself / ... Going from FREE to FEE! / ... Knowing when to charge / ... How to set your speaking fee / ... 3-tiered speaking proposal / ... 5-step process for contracts / ... Tips for staying motivated / ... How to find the right support / ... Ideas to show client appreciation / ... Finding a mentor / ... Setting realistic goals"
- **Links/files:**
  - Amazon eBook https://www.amazon.com/How-Become-Professional-Speaker-SPEAK-ebook/dp/B083RD2TWS
  - Module 1 Word worksheet `d46abc_1ba9e3220ea544e6ae77d92e2e05e75e.docx` ("MODULE 1 Questions. WORD.docx")
  - Module PDFs (M1 `69611132…`, M2 `f8311a01…`, M3 `067fb79e…`, M4 `7364ccd3…`, M5 `536d001c…`)
  - **`d46abc_87309f5032cb4b80a953141482556001.pdf`, the "Paul" proposal (privacy)**
  - mailto links with prefilled subjects to "Sarah / Kevin"
- **Images:** `d46abc_89d0d30c214f44dc8820baef903acbce~mv2.jpg` "5 Week Challenge logo.jpg"; `d46abc_f7c5dc85d65c4119bf0c98988b306d13~mv2.jpg` "Speaking collage.jpg"; `d46abc_5046ed259c754c3e823297171283dbdd~mv2.jpg` (book plus PAID to $PEAK module target graphic with an "#1 amazon.com BEST SELLER" seal); `d46abc_00d6c7dcae8543c0a920e9c8b73f47e7~mv2.gif` "Beka GIF.gif"; module photo tiles `026a3789…`, `c456f90a…`, `47f17c74…`, `7be8d085…`, `f7ae889b…`.
- **Problems:**
  - Multiple guarantees and refund promises (quoted above), all to be dropped.
  - "#1 and best-selling" [NOT VERIFIED].
  - "nearly 20 years ago" (vs 20+ elsewhere).
  - Stale dates.
  - Typos: "que", "Wednesday's", "Y ou'll", "Unle ss".
  - Inconsistent Mastermind length (3 months vs full year).
  - The PLUS "Sailing Retreat" may be discontinued.
  - Third-party assistant email.
- **Destination:** **New page `/coaching/group`** ("PAID to $PEAK in 5 Weeks" / 5-Week Challenge). Keep: format, cadence (5 weekly 90-minute live Q&As on Zoom, recorded), BASIC/PLUS inclusions, module outline, FAQ (minus the guarantee Q), payment-plan policy (if still true). Enrollment CTA is "Apply"/"Ask about the next cohort" until the PayPal phase.

---

### 2.9 `/tedxspeakercoaching` (tedxspeakercoaching.txt). Title: "TEDx Speaker Coaching | template"
- **Status:** NAV, live; the most-linked internal page (from 15 pages).
- **Purpose:** TEDx coaching sales page with three options.
- **Content (verbatim):**
  - "Desire to speak on the TED or TEDx stage? Need help applying for TEDx events? Been selected for TEDx but need help crafting your speech and delivering it? Watch my short intro video !" (Wix video `d46abc_b425addca7fb4cf2a15697f0cbd29a9d`, 2:37, "How to become a TEDx speaker")
  - "Friends, welcome to my TEDx Speaker Training! 3 options for you to consider."
  - "My experience with TEDx is as a speaker for several events, TEDx event organizer, Speaker Coach for several TEDx events and a Speaker Coach for dozens of TEDx speakers individually."
  - "I believe in the mission of TED - ideas worth spreading . Just like a professional speech on a stage or in a training room, I believe in sharing content that makes people better."
  - "I'm passionate about TED talks because watching various talks has helped me in so many ways - personally and professionally. I've been told my TEDx talks have done the same for others as well. Your future talk will be no different. You will change lives. I'm honored to be part of your TEDx speaking journey."
  - "W hether you are just startin g out to find TEDx speaking opportunities OR you are preparing for your upcoming talk, you are in the right spot!"
  - "Follow my guidance and there is no reason why you should not also be a TEDx speaker. You just go tta do the work. And if you're one of my 1:1 coaching clients, I GUARANTEE your success to be selected on that prestigious TEDx stage. View my TEDx and PAID to $PEAK coaching options below. I've spoken on the TEDx stage twice, been a major TEDx event organizer and worked with dozens of TEDx events and speakers..."
  - "B oth my TEDx talks have not only helped launch my speaking business and book sales, but both have changed my life and my family. My most recent TEDx talk became a catalyst for a new book, PURE Vulnerability , that was published the same week as TED finally released my talk!" (PURE Vulnerability [verified book]; links purevulnerability.com, which is **dead**, and Amazon B0BQWR6KT2)
  - Topics covered: "the difference between TED and TEDx / why TED's mission matters when applying and curating a a speech / what ONE thing you need to get crystal clear about / what TEDx event organizers are and are NOT looking for / insights on how to find TEDx speaking opportunities / tips when applying / how to apply ... and follow up! / ... and more!"
  - Button: "My TEDx Intensive Program GUARANTEES you get selected as a TEDx speaker!" (calendly tedxintensive)
  - Disclaimer (keep): "Please note: Other than being a multi-TEDx speaker, former TEDx event organizer and a TEDx speaker coach, I have no affiliation with the TED organization. I am not compensated in any way by TED or any TEDx event. My training and coaching programs offer my insights through experiences with TEDx..."
  - Questions list: "... but do you know how to get selected for TEDx? / ... what criteria are TEDx organizers looking for? / ... do you submit an application or do they find you? / ... are you applying but not getting selected? / ... what is your "idea worth spreading?" Or how do you develop one? / ... how should you prepare for a TEDx talk? / .... once your TEDx is published, how can you help make it go viral?"
  - "*** MY PROMISE *** Enroll in my TEDx Intensive Program and I GUARANTEE your selection as a TEDx speaker! If not, I'll refund your money. I'm that confident in my TEDx coaching and resources provided to you."
  - **Options:**
    - "Option 1: Online TEDx training course ($297) This is an On Demand training video walking you through how to become a TEDx speaker... You will also receive (a) a sample TEDx application that prepares you for any TEDx submission, (b) TEDx tracking spreadsheet to stay organized and ensure you follow up properly, (c) sample outreach message to TEDx organizers and (d) a recent TEDx webinar where Kevin answered questions all things TEDx! Click here to purchase ." (`http://paypal.me/PassionProjectLLC`) "Caution: without this training, how much time and $$$ will you spend trying to figure it out your own? Ekkk! $297 for this type of training will ensure you achieve your TEDx speaking goals..."
    - "Option 2: TEDx Bundle Coaching Session ($697) This includes two(2) private 1:1 coaching sessions with Kevin directly PLUS the Online TEDx training (option 1). Ideal for the committed future TEDx speaker! Click here to purchase ." (`calendly.com/snyder/tedx`)
    - "Option 3: TEDx Intensive Program This is Kevin's signature coaching program that GUARANTEES your selection and preparation as a TEDx speaker! ... The program includes up to 10 coaching sessions, access to Kevin in between sessions, Kevin's review of your work and feedback, AND the Online TEDx training. To inquire about payment plans, email Kevin@KevinCSnyder.com . Click here for more information on the TEDx Intensive Program . ($7,500 - payment plans can be arranged)"
    - "** Note: for those with budget constraints, respectfully, the TEDx Intensive Program can be reduced from 10 sessions to 5 sessions; however, there is no GUARANTEE with this program to be selected as a TEDx speaker. You will receive access and feedback in between sessions, but Kevin's time will be limited. ($2,450 - payment plans can be arranged). Click here to purchase ." (no separate link captured)
  - "If you have questions or would like to discuss which coaching option is the best for you, schedule a Strategy Session directly here , Please note: this is not a free coaching session; rather, it's a session to explore coaching. Your $100 discussion fee will be applied to your coaching program because we value commitment and your time as much as ours, respectfully."
  - "My experience with TEDx : TEDx speaker at several events / served as a Speaker Coach for numerous TEDx events / coached dozens of speakers to learn how to find TEDx speaking opportunities and prepare their application! / served as Lead Organizer (i.e. Curator) for TEDxRaleigh" [NOT VERIFIED]
  - "My first TEDx video accelerated my speaking business several years ago. I still have meeting planners frequently tell me they've seen my TEDx speech." "Even though there are over 2,000 TEDx events each year , speaking at TEDx is extremely selective!"
  - "I am passionate about helping speakers! When I first started speaking, I never asked for help. I viewed coaching as a sign of weakness. However, once I realized that asking for help and wisdom from others who have paved the way before is a sign of STRENGTH, my speaking catapulted into new heights! I simply had to let my ego go."
- **Videos/links:** YouTube `GbJaPqqV3A4` ("Recovery from depression, eating disorder and sexual assault as a male | Kevin Snyder | TEDxCapeMay", TEDx Talks channel); Wix video `b425addc…`. Calendly `/snyder/tedxintensive`, `/snyder/tedx`, `/snyder/paidtospeak`, `/snyder`.
- **Images:** slides `d46abc_3ee33f6ca68a460b88b73b32d0ded68a~mv2.jpg`, `d46abc_0092366d4df34f348b46f668857e8510~mv2.jpg`, `d46abc_f957ba87be6343b5b8188f235f730abf~mv2.jpg`, `d46abc_99ad0fdbc68046cbac6c7f63f24d5cf4~mv2.jpg`, `d46abc_f46e7cc749294daba3aab0319fbb0f79~mv2.jpg`; PURE Vulnerability cover `d46abc_d367880e5722452cb9d10c28dc185b27~mv2.jpg`; `d46abc_af53214e515342fc890d9fa3b2507a20~mv2.jpg` (TEDx thumbnail); `d46abc_61822e7ccc9a49cbb66a52f77e7b6d3f~mv2.jpg` (headshot logo); `d46abc_9e4e1680b4e34098975793f5e85ccb40~mv2.jpg`.
- **Problems:**
  - Selection guarantees and the refund promise (quoted).
  - Inconsistent counts: "spoken on the TEDx stage twice" vs "several TEDx Talks" vs "multi-TEDx"; "dozens" vs "hundreds" (webinar page).
  - The $100 strategy-session fee contradicts "complimentary" elsewhere.
  - purevulnerability.com is dead.
  - Typos: "a a speech", "go tta", "W hether", "startin g", "fo r", "vide o", "Ekkk!".
  - The Option 2 "purchase" link is actually Calendly.
- **Destination:** **New page `/coaching/tedx`.** Keep: the three options (prices TBC), what's included, the TED-affiliation disclaimer, the question list, the experience list (once verified). Drop the guarantees. The TEDxCapeMay talk is sensitive personal subject matter, so ask Kevin before featuring it.

---

### 2.10 `/virtualandtechsolutions` (virtualandtechsolutions.txt). Title: "Virtual and Tech Solutions" (menu "Virtual Studio and Tech Coaching")
- **Status:** NAV, live; STALE in parts (pandemic framing, "March 2020").
- **Purpose:** Virtual-studio coaching offer, free equipment-list lead magnet, tech-tip videos.
- **Content (verbatim):**
  - "Need help with your VIRTUAL set up to position yourself professionally? What about technology tips while presenting IN-PERSON to set yourself up for success? You're in the right place..."
  - "To be hired and PAID as a virtual speaker, they will expect you to present professionally! This means standing UP, no screenshare, no bookshelf backdrop, good lighting, sound and upgraded equipment." "And if you want to present yourself professionally for IN-PERSON speaking engagements, you need to have a virtual studio set up!" "Your speaking fee for one engagement should pay for your entire studio."
  - "FREE DOWNLOAD! Download 3 budget options to set up your virtual studio. Option #1 equipment less than $1,000! I've included pricing for every item and specific links so you purchase the correct items." (PDF `d46abc_0462e79e3ac9408b842e65a4cae052ad.pdf`, "Updated. Equipment List for Setting up Your Virtual Speaking Studio.pdf"; already in the repo as `public/files/d46abc_f5af3d1bde414d47bc6c5517f50414d1.pdf`, same content)
  - "Setting up my virtual studio took nearly 2 months. Knowing what I know now, I can help you set yours up in one day!"
  - "New Tutorial Video ! "How to Use and Record with the ATEM Mini Switcher"" (YouTube `CHI2K1GmH2Y`) and ""How to Set Up a Home Virtual Studio"" (`eVrwfhnhTxQ`).
  - Studio story (March 2020, shiplap DIY "only 5 hours and < $250", single camera, then switcher/multi-view): "The deposit check alone from this one speaking engagement paid for the entire studio!" "Again, my first speaking engagement after building my studio was $7,500. This paid for the entire studio! I would not have earned the speaking engagement otherwise. They told me I had the best set up of the speakers they were considering." "I have received IN-PERSON speaking engagements because of the professionalism of my virtual studio as well."
  - Offer: "Click below to schedule a complimentary 15-minute Strategy Session to talk through where you are currently at in building your virtual studio and what your speaking goals are. This is not a free coaching call; rather, it's a base conversation to explore how I can help you set up your virtual home studio." "During our 15-minute session, I'll make an option recommendation based on our discussion and then we'll schedule an official coaching session if you decide to move forward. **My rates are $250/hour or $650 for a 3-hour bundle.**"
  - Buttons: "Click here for a 15-minute Strategy Session to discuss my Virtual Studio Coaching" (Calendly paidtospeak), "Book a 1-hour virtual studio coaching session" (`calendly.com/snyder/hourlycoaching`), "Book my 3-hour virtual studio coaching bundle" (`calendly.com/snyder/3-hour-bundle`).
  - "What about tech tips for presenting IN-PERSON? Check out these videos below..."
- **Videos:**
  - Wix `d46abc_4854a1aa28b6427ea574b5aab7e41023` (7:25)
  - YouTube `_ZmSE_7jLOo` "Virtual Studio Demo --- Kevin Snyder"; `eVrwfhnhTxQ`; `CHI2K1GmH2Y`
  - `mj5zhnEYUTw` "HUGE TIP for professional speakers! How to use your laptop as a confidence (downstage) monitor"
  - `VX8Ca4RyZhQ` "See what's inside my tech travel bag for IN-PERSON speaking engagements..."
  - `F0DBL_BrIls` "Speaker Tip: Screen behind you? Need notes? How to always look TOWARD your audience!"
  - `lSUxn0Sju8I` "Professional Speaking Tip: How to set up your own 'confidence monitor'..."
  - `a2IKuienk9g` "Level UP your speaking! Onsite speaking tips..."
- **Images:** studio progression photos `d46abc_7d709893b3c94a259c7799f1ccc11238~mv2.jpg` ("TLI Virtual Delivery"), `09fc07b8…` "studio 2", `e329da71…` "studio 3", `a175573f…` "studio 4", `2b0e13ba…` "studio 5", `5295acd2…` "studio 6", `c7926704…` "studio 7", `9ab5f7df…` "Virtual Studio", `241c19d6…` "studio 8"; `87e7c9dc…` "use budget options.jpg".
- **Problems:**
  - Typos: "I clearly had not clue", "unused bonus home" (room).
  - Income anecdote ($7,500), and "Your speaking fee for one engagement should pay for your entire studio".
  - Pandemic-era framing.
- **Destination:** **New page `/coaching/virtual-studio`** (offer plus the free equipment-list download plus the tech-tip videos as click-to-load YouTube). If Kevin has dropped virtual-studio coaching, fold the free download and tips into `/resources`.

### 2.11 `/copy-of-virtual-studio-setup` (copy-of-virtual-studio-setup.txt). Title: "Academy Group Coaching | template" (wrong title)
- **Status:** ORPHAN, DUP (older version of 2.10).
- **Unique content:** "My first speaking engagement after upgrading was $7,500. This paid for the entire studio!" "There's not a day that goes by where I'm not asked by other speakers how I designed my studio..." "I am honored to help others, but based on the demand of inquiries and my family commitments, I no longer offer complimentary consulting or open Q&A..." **Older rates:** "My rates are $249/hour or $475 for a 3-hour bundle. I can also provide options to set your equipment up onsite." Buttons: Calendly paidtospeak; "Click here to bypass above and schedule your actual coaching session!" (`calendly.com/snyder/virtualstudiocoaching`).
- **Files:** older equipment list `d46abc_4ddc87d9b7df421f9d180891734a006f.pdf` (also linked via `d46abc86-fd79-45b1-9145-cd2ccdfee651.usrfiles.com/ugd/...`). Its text says: "Within 2 weeks of setting up my virtual studio and making outreach, I had four virtual keynote engagements and workshops booked..."
- **Problems:** wrong page title; superseded rates; pandemic-era.
- **Destination:** 301 to `/coaching/virtual-studio`. Archive the old equipment list (superseded).

---

### 2.12 `/speciality-programs` (speciality-programs.txt). Title: "Speciality Programs | template"
- **Status:** NAV (menu parent). Thin hub page.
- **Content (verbatim):** "Launching a successful speaking business can quickly become overwhelming. I know first hand and I nearly quit on numerous occasions." "That's why having specialty resources proven to save you time, money and frustration is so important - see below!" "These resources are what I personally use in my own speaking business and what I share with my 1:1 speaker coaching clients. You can subscribe to them a la carte OR receive all of them included with any of my 1:1 speaker coaching programs - click here to be directed to my 1:1 coaching program options ." Then the card grid (0.1).
- **Images:** `d46abc_5d6f4258668048ff8d080eed61fbd91f~mv2.jpg` ("headshot1 CVP.jpg").
- **Problems:** "Speciality" (UK spelling, inconsistent with "specialty" in the copy); "click here ... 1:1 coaching program options" links to the **home page**; the event-calendar image links to TEDx.
- **Destination:** 301 to `/coaching`. The "a la carte or included with 1:1" message becomes the intro to a "More ways to work with Kevin" section on `/coaching`.

### 2.13 `/mentorshipforspeakers` (mentorshipforspeakers.txt). Title: "Mentorship Program | template"
- **Status:** NAV, live.
- **Content (verbatim):**
  - "MENTORSHIP PROGRAMS. Mentorship is different than coaching." ""Mentoring is a brain to pick, an ear to listen, and a push in the right direction." – John Crosby"
  - "MENTORSHIP: My mentorship program offers you touchpoints with me to ask any questions you desire. The agenda of our sessions is whatever you'd like to talk about! Ideal mentorship clients are those who already have some experience in speaking OR those who have completed one of my PAID to $PEAK coaching programs and desire continued support. If you are new to speaking, I recommend you consider one of my 1:1 coaching programs that walks you through my process and helps you set up your speaking business first."
  - "COACHING: Coaching is more structured through my PAID to $PEAK process with regularly scheduled weekly, bi-weekly or monthly sessions. We use our time together to follow my step-by-step model that structures your speaking business. I invest time to review your work in between coaching sessions." "I offer one-on-one individualized speaker coaching, group speaker coaching, virtual studio coaching and TEDx speaker coaching options."
  - "You are welcome to contact me for a complimentary consult to explore which option is the best fit for your speaking goals. Click here to schedule , but please review my mentorship and coaching options first. I do not offer free coaching."
  - "Note : I do not work with everyone and an application is required for all coaching and mentoring programs. After you book your first session below, I will send you a short application form that helps me get to know you and understand your speaking goals and aspirations." (supports the `/apply` model)
  - **PRO SPEAKER, $997/mo:** "Serious speakers envisioning to make $5,000+ per speech!" "Up to 3 mentorship sessions/month + Kevin's review of your work in between sessions (up to 2 hours total) AND 'touchpoint' access with Kevin for immediate quick questions and guidance." "During mentor sessions, utilize Kevin's time as you wish. Mentor sessions are typically 60 - 90 minutes. You set the agenda! Kevin can review samples of your work, provide feedback on speech outline and presentation design, give advice for finding PAID speaking engagements, help you with target audiences, TEDx speaking and much more. Kevin can also mentor inquiry responses and your outreach to associations and meeting planners." "After 3 months, we will also send you Kevin's TEDx Speaker training course ($350 value) IN ADDITION to a private GoogleDrive with " The Vault!" ($750 value) which includes everything Kevin uses in his own speaking business + Kevin's PAID to $PEAK Online Course ." "This option is ideal for serious speakers who are FULLY committed to launching and growing their speaking businesses to $3,500 PER SPEECH + landing a TEDx talk!" "Book Now" (PayPal **WWZ559J85AF36**)
  - **EMERGING, $497/mo:** "Serious / budget conscious speaker" "Up to 2 mentorship sessions/month. This option does not provide Kevin's review of work in between sessions (see PRO Speaker option) but he can provide immediate feedback during your session. Mentor sessions are typically 60 - 90 minutes." "During sessions, you decide the agenda!..." "This option is ideal for newer and emerging speakers wanting to accelerate their speaking ore quickly." (PayPal **4ZVX8EZNGV3AQ**, inferred by order)
  - **ASPIRING, $249/mo:** "Aspiring / budget conscious speaker" "1 mentorship session/month. This option does NOT provide Kevin's review of work in between or any touchpoint access outside of the sessions..." "Mentor sessions are 50 minutes. You decide the agenda!" "This option is ideal for speakers who desire a consistent touchpoint with Kevin to get questions answered, support and accountability. This option is also ideal for speakers with a limited budget, respectfully." "Highly recommend you purchase a copy of Kevin's book, PAID to $PEAK..." (PayPal **NYQQECV927CMJ**, inferred by order)
  - "Not sure? Click here to schedule a complimentary call to discuss options"
  - **"AGREEMENT TERMS - 3-month minimum agreement - Customized options can be available."**
  - "PERSPECTIVE - My mentorship and coaching is designed to get you to the $5,000+ level per speech! My speaking fees currently begin at $10,500 and go to $20,000 per speech. How much is it costing you NOT having those results? I treat my mentees and coaching clients as if their speaking business was my own." "- Lastly, any business investment should be considered a legitimate "business expense" and tax deduction..." "I am passionate about helping speakers. When I first started I had nothing."
  - Card grid, Ultimate Speaker Package blurb.
- **Videos/images:** Wix video `d46abc_02094897ac9a4b66bb0049887955ab25` (5:06); YouTube `9a1ntEqX3ns` ("Speaking highlights from Dr. Kevin Snyder"); photos `d46abc_b4d245cd24f1431f856938cd2761a852~mv2.jpg` ("Professional 4.JPG"), `d46abc_1033ea7bc87943078ac40de4535593a5~mv2.jpg`, `d46abc_c81db575451f4fa38a2aa046984e52a7~mv2.jpg`.
- **Problems:**
  - Fee claims ("$10,500 ... $20,000 per speech") [NOT VERIFIED, income].
  - "$5,000+" vs "$3,500 PER SPEECH" in the same tier.
  - "ore quickly".
  - Four "Book Now" buttons for three tiers (two point to the same PRO button).
- **Destination:** **New page `/coaching/mentorship`** (or a section of `/coaching` if Kevin prefers fewer pages). Keep: mentorship vs coaching distinction, three tiers, 3-month minimum, the application requirement.

### 2.14 `/ultimate` (ultimate.txt). Title: "Ultimate Speaker Package | template"
- **Status:** LINKED (from 7 pages), live.
- **Content (verbatim):**
  - "The REALITY IS ... You don't need a professional website to speak, but you need one to get PAID . You don't need a demo video to speak, but you need one to get PAID . You don't need a speaker packet to speak, but you need one to get PAID . You don't need a book to speak, but you need one ... to get PAID well !"
  - "So what's it costing you not having any of these? Likely thousands! I can help."
  - "Whether you're new or hungry to take it to the next level, you must have a professional website, demo video, marketing packet AND a book. There's no debate about this. I've been speaking professionally for 20 years and have worked with hundreds of speaker bureaus, agencies, meeting planners and executives who book speakers." (20 years [verified]; "hundreds of speaker bureaus" [NOT VERIFIED])
  - "Meeting planners who pay speakers $3,500 - $10,000 per speech will never even consider speakers who do not have a website and demo video, at minimum."
  - "Over the past several months I have been working with my designers, videographers and publishers that do my own work to create 3 different "One-Stop-Shop" packages that provide you with a speaker website, demo video, marketing packet and even a published book! They have agreed to offer incredible rates only to the speakers I personally refer to them - i.e. you."
  - "When I first started speaking, all I had was $22 on a debit card."
  - "To even be considered by an executive or a conference planner, they would ask to see is your website and demo video. Within 15 seconds of reviewing your video and demo, they will have already made a decision..."
  - **Packages (from images):**
    - Option 1 STARTER Package (`d46abc_4fed1c4e8a6c407ea85a770d505aaf83~mv2.jpg`): "3 Coaching + 2 PM Sessions / Landing Page Website / 1-2 min Demo Video / Marketing Packet (2 pages) / Book Publishing (print ready files) / Speaker Mastermind Membership".
    - Option 2 SERIOUS Package (`d46abc_45823a0710504dfea8148bf5e9dc6acb~mv2.jpg`): "3 Coaching + 2 PM Sessions / Upgraded Website + Blog / 2-3 min Demo Video + Studio Time / Marketing Packet (4 pages) / Book Publishing (basic formatting incl.) / Speaker Mastermind Membership / PAID to $PEAK Digital Course".
    - Option 3 PROFESSIONAL Package (`d46abc_f85e5185cc504eb398e3d9a023ffe50c~mv2.jpg`): "5 Coaching + 5 PM Sessions / Premium Speaker Website / 3-5 min Demo Video + Onsite Event / Marketing Packet (<6 pages) / Book Publishing (basic form, cover, minor edit) / Speaker Mastermind Membership / PAID to $PEAK Digital Course / "The Vault" access - 2.0!".
  - **How it works:** "1. Schedule a complimentary session with me to discuss options above as well as availability. None of these options are One Size Fits All! There is a chance your package investment could be even less... Also, if you already have an item listed, then your package will be discounted." "IMPORTANT NOTES: * Payment plans can be arranged. * Any investment you make in your business should also be considered a business expense... * Due to time availability and scope of work, I only work with 5 clients at a time. We will likely need to schedule your projects weeks, if not months, out..." "Finally, all packages begin with coaching and project management sessions. I will not be passing the baton for you to my designers and videographers until you are ready... I will be handling all the project management details for you which is why their fees are less than what they would charge other clients!"
  - CTA (x2): "CLICK HERE to schedule a complimentary call to discuss options and pricing".
- **Video:** Wix `d46abc_4df02c7d0de943388bba150f6f353f26` (5:00, "Watch this overview of the Ultimate Speaker Package!").
- **Images:** header `d46abc_9c15abb6f6ea40459311a054cefdf003~mv2.jpg`; infographic `d46abc_e4d62347c898499593bae962a3079da7~mv2.jpg` ("Kevin Snyder Paid to Speak Infograph").
- **Problems:** "Likely thousands ... each week!", "Your first major speaking engagement could pay for the entire speaker package"; "PAID to $PEAK Digital Course" naming is inconsistent with "Online Course"/"On Demand"; no prices.
- **Destination:** **New page `/coaching/speaker-package`** if still offered (ask Kevin); otherwise archive and 301 to `/coaching`.

### 2.15 `/paideventcalendar1` (paideventcalendar1.txt). Title: "PAID Event Calendar | template"
- **Status:** LINKED (from 4 pages), STALE (built for 2021: "2021 looks to be mostly virtual").
- **Content (verbatim):**
  - "Just ONE EVENT would pay for an entire year's subscription!" "Let PAID speaking opportunities come to you!" "My PAID Event Calendar is a monthly subscription giving you access to 200+ events per month that hire speakers! Cancel at any time."
  - "You'll receive : Event name, website & date / Host organization info / Contact info / Event agenda / ... and more!!"
  - "Many of these events will have more than one opportunity as they will be looking for keynotes, breakouts, workshops, and general session speakers ... and have budgets ."
  - Two long sample-event lists (about 180 association conferences, for example "IFMA Facility Fusion Conference & Expo", "Texas Bankers Association Annual Convention", "ATD International Conference & Exposition"; full list in `pages/paideventcalendar1.txt`).
  - **Tiers:** "PREMIUM Includes an excel list of all 200 - 230+ PAID speaking engagement leads and contacts each month. Cancel any time. $150/mo" (PayPal **4WDY6PK6J22MW**, two buttons); "SILVER Includes an excel list of 100 PAID speaking engagement leads and contacts each month. Cancel any time. $75/mo" (**TKRQCSKY6YBQU**); "STANDARD Includes an excel list of 25 PAID speaking engagement leads and contacts each month. Cancel any time. $25/mo" (**J5ZT6TVKMKS72**).
  - **FAQ (questions verbatim; answers condensed, full text in the source file):** "Are these guaranteed events to hire you?" ("...guarantees these events hire speakers at the time of being added to our database. It does not guarantee you will be booked to speak..."); "What if I'm just starting out in speaking?"; "What if I'm not ready to reach out yet?"; "What if I missed out on an event?" ("...these events are held annually..."); "How do I know if some groups are a fit?" (cites "the International Erosion Control Association hired me as a keynote speaker"); "Is there a free trial?" ("No... We did create a $25 monthly subscription..."); "Are these virtual events or face-to-face?" ("2021 looks to be mostly virtual... My new contract has already saved me $20,000+ in speaking fees..."); "Are these events you've spoken at personally?"; "Which option do you recommend for speakers just starting out?" ("Go BIG or go home!..."); "How much do these events pay?" ("Some events might be $1,500 - $2,500 and some could be $10,000+..."); "Can you change your subscription level?"; "Can a subscriber unsubscribe at any time if they aren't seeing results?"; "As a speaker, what are best practices for sending communications to these contacts?"; "Are these events arranged by location or date?"; "Can you query all the events and just pick the events you want?"; "Can you provide the contact info in an excel spreadsheet?"; "What if I don't have a virtual studio or have virtual delivery ready?"
  - "Have a question I did not answer? Send an email to Kevin@KevinCSnyder.com and I'll do my best to respond within 24 hours."
- **Video/images:** Wix video `d46abc_72d1a5490efd4076bbef2cda8df7a6e6` (6:48). Images `d46abc_6420c5133d2f4a5eb9711660fb34bac8~mv2.jpg`, `d46abc_fa030404475e4b7eb134b0ba363f3efc~mv2.jpg`, `d46abc_201968efc0124d09ad89f212d9f3f2a5~mv2.jpg`; promo `c6636e9b…` ("NEW PAID TO $PEAK Event Calendar ... Access to 200+ events each month that pay speakers!", a June 2020 Google Calendar screenshot).
- **Problems:**
  - Stale (2021).
  - Dead links: `kevincsnyder.com/client-summary/` (404); `/speakingprofessionallytoastmasters` (members-only).
  - "Just ONE EVENT would pay for an entire year's subscription" (ROI promise).
  - Possibly third-party data resale (where does the lead data come from?).
- **Destination:** If still sold, **new page `/event-calendar`**; otherwise **archive** and 301 to `/coaching`. Recommendation: ask Kevin; default to archive.

---

### 2.16 `/onlinecourse` (onlinecourse.txt). Title: "PAID to $PEAK Online Course"
- **Status:** NAV, live. Canonical of group B.
- **Purpose:** Sales page for the self-paced PAID to $PEAK course, BASIC and PLUS.
- **Content (verbatim):**
  - "I'm thrilled to launch my first-ever PAID to $PEAK Online Course!" "The course is based on my best-selling and #1 book, " PAID to $PEAK: How to Become a Professional Speaker. " Conference events and trainings are back and meeting planners/conference organizers are seeking speakers! My system will show you how get PAID speaking engagements!"
  - "All videos from this online course are On Demand, so watch when you want, where you want and as much as you want!"
  - "If you know me well this might surprise you, but I do not believe we just automatically rise to the level of our goals. Nope. Rather, we fall to the level of our systems." "Step #1 is having a goal. Step #2 is identifying the system to filll the gap and achieve it. Step #3 is applying the system. This why I am so 'confidently passionate' about my PAID to $PEAK book, online course and speaker coaching programs. They are all based on a proven system..."
  - "...my PAID to $PEAK framework will teach you (a) how to prepare yourself, (b) how to design an incredibly powerful speech, (c) how to find PAID speaking opportunities, (d) how to verify organizations who can pay, and (e) how to build a part-time or full-time speaking business!"
  - "My PAID to $PEAK Online Course is ideal for speakers, coaches, trainers and consultants who ALL can use the speaking platform to maximize business!"
  - "My PAID to $PEAK process outlines a proven system that has allowed me to present for over 1,000,000 people through 1,150+ audiences in all 50 states and several countries . I've been speaking for over 20 years now." (**1,150+ conflicts with the verified 1,500+**)
  - **Inclusions:** "In my PAID to $PEAK Online Course, you will earn : - Unlimited video access to all 5 Modules - Checklists for each Module - Slide deck for each Module - Complimentary PAID to $PEAK book files - Downloadable files inside PAID to $PEAK - Complimentary Coaching Call upon completion". "PAID to $PEAK PLUS+ includes TEDx speaker training, V irtual studio training, my Speaker Mastermind Group and more!" Images: `d46abc_fe2c1ae561fc4dbbb7aa98141daabed8~mv2.jpg` ("PAID to $PEAK On Demand BASIC: Unlimited video access to all 5 Modules / Checklists for each Module / Slide deck for each Module / Complimentary PAID to $PEAK book files / BONUS downloadable files from PAID to $PEAK / Complimentary coaching call upon completion"); `d46abc_64926ba429b6425cae524bee15f9e40f~mv2.jpg` ("Consider upgrading to PAID to $PEAK On Demand PLUS! All features from basic / TEDx training video / Sample TEDx application + tracking spreadsheet / Speaker Mastermind Group / Virtual Studio Training / More exclusive community"); option cards `d46abc_4457cc3c81414efaa80c0a96fe3b95dc~mv2.jpg` (BASIC), `d46abc_1494f146ef9648c6af7d46b7c25f8525~mv2.jpg` (PLUS).
  - Guarantee: "My Commitment to YOU about the Quality of the PAID to $PEAK Online Course : I'm so confident in my program that if you do the work and follow each Module, I guarantee you will 'earn' PAID speaking opportunities by the time you complete this online program. If not, we will refund your money." "After working with 100+ speakers at various levels, the ones who completed the program had 100% success. I expect for you the same..."
  - Bio claim: "The proof is in the puddin' friends ! ... Within 6 months, I was able to replace my full-time salary as a Dean of Students. One year later, I was earning 6-figures and speaking fees averaging $3,500+! Not to impress you, but rather impress upon you that the process I teach you works when applied!" [NOT VERIFIED]
  - Module outline (same as 2.8), with module titles linking to the free worksheet PDFs.
  - Videos: "Watch a short orientation video below from the online course. Short Orientation Video (13 min)" YouTube `HBc509T3hYw` ("Short Promo Video - 13 minutes"); "Full Orientation Video (28 min) - RECOMMENDED -" `OB41BkcG5Io` ("Orientation video").
  - **Pricing:** "Time to take A.C.T.ion and achieve your speaking goals! You have TWO Options with my Online Course -- (1) BASIC or (2) PLUS ! Pricing for PAID to $PEAK Online Course ! ** Access the PLUS course for $450. ** Access the BASIC course for $350!" PayPal Smart Buttons embed (`d46abc_e9307c3bd3bdd6c450f4bfe222b7b654.html`): "PAID to $PEAK Online Course! PLUS(+) Course! - 450 USD Basic Course - 350 USD" (Venmo enabled).
  - "Remember my GUARANTEE -- do the work and achieve $2,500 results or your $$ back!"
  - **Referral:** "Know Someone Who Wants to Speak? Refer this course and receive $100 ! That's right! You'll receive a $50 referral 'thank you' and another $50 donation in your honor will be made to a charity of your choice -- that's $100 total for every referral who takes action."
  - "Feeling stuck or need some help ? Below are some of my most popular coaching services. My private 1:1 coaching programs include ALL of them ( click here to see what a sample private coaching program looks like ) OR select the service below a la carte..." (PDF `d46abc_2653ab786d644a0884a06bcf17788f01.pdf` = the sample program PDF)
  - Mastermind card variant: "Connect with an incredible peer group of speakers + LIVE Q&A with me directly + speaking opportunities + partner + more!"
- **Images:** `d46abc_38a50f2210584a83a90ead8cc0a23749~mv2.jpg` ("Paid to Speak Model Stand Alone.jpg": the five-module target graphic); slides `d46abc_ea94d041930246348ae405db81f99fb2~mv2.jpg`, `d46abc_9c96ca7b5cd64996b77a27efc9a8e532~mv2.jpg`; `d46abc_2088d4a1034147419182e87673561951~mv2.jpg` ("headshot1 CVP.jpg"); `d46abc_c525928807774315870722dfca917c09~mv2.jpg` ("2022 thumbnail").
- **Problems:**
  - Guarantees and refunds; "100% success"; "$2,500 results".
  - 1,150+ vs 1,500+.
  - "first-ever ... launch" and "Conference events and trainings are back" (post-COVID stale).
  - Typos: "filll", "This why", "V irtual".
  - The link on the book title goes to the home page.
- **Destination:** **New page `/on-demand`** (marketing only: what the course covers, BASIC vs PLUS, orientation video as click-to-load). **No LMS:** the course itself stays wherever Kevin hosts it (protected Wix pages `/ondemand`, `/paidplus` today; see 4). Purchase CTA deferred to the PayPal phase.

### 2.17 `/onlinecoursedetails` (onlinecoursedetails.txt). Title: "PAID to $PEAK Online Course" (Wix name "Online Course details: PAID to $PEAK")
- **Status:** ORPHAN, DUP of 2.16. The only difference is the first line: "PAID to $PEAK is now an Online Course that supplements the book!" (vs "I'm thrilled to launch my first-ever...").
- **Destination:** 301 to `/on-demand`.

---

### 2.18 `/webinarseriesvideos` (webinarseriesvideos.txt). Title: "Webinar Series" (Wix name "PAID to $PEAK Webinar Series")
- **Status:** NAV, live. Canonical of group C (public sales page).
- **Content (verbatim):**
  - "Welcome to my PAID to $PEAK Webinar Series!" "Videos within my PAID to $PEAK webinar series provide a comprehensive overview of my speaking business, how to launch into PAID professional speaking and how to maximize speaking fee." "Each video is a 60-minute recording in my virtual studio walking you through the content and process. I'll be adding MORE webinars to this collection below. Currently available are the following videos:"
  - Titles: "How to Become a PAID Professional Speaker (PAID to $PEAK overview)", "How to Become a TEDx Speaker", "How to Find PAID Speaking Opportunities", "How to Become a Published Author and Leverage Books in Speaking", "Backend Systems I use in my Speaking Business", "How to Maximize Speaking FEE in proposals and contracts", "PAID Speaking Opportunities at COLLEGES", "How to Set Up a Virtual Studio on a Budget!", "How to Set Speaking and Knowing WHEN and WHAT to Charge!"
  - Charity: "Bu t first ... thank you for supporting the Foundation of HOPE. 50% of your purchase of this webinar series goes directly to support a wonderful non-profit that I'm supporting - the Foundation of HOPE." "The Foundation of HOPE is a 501(c)(3) nonprofit that provides seed grant funding for research on mental illness. As someone who battled depression as a teenager, I believe in the mission and purpose of the Foundation of HOPE." "*** Why does the Foundation of HOPE matter to me? Because I battled through depression as a teenager. I'm lucky to be alive. My background is why I felt inspired and called to speak." "Watch my most recent TEDx talk, PURE Vulnerability..." (YouTube `GbJaPqqV3A4`)
  - "You can purchase an individual video or you can purchase the enti re Webinar Series. Remember, 5 0% of your payment is donated to the Foundation of HOPE! Thank you ;)" "** If you purchase the entire Webinar Series, I'll include a 30 minute 1:1 coaching call as additional support and appreciation."
  - **Per-webinar descriptions (keep for /on-demand):**
    - "How to Become a PAID Professional Speaker: PAID to $PEAK Overview. Here's an overview of my entire PAID to $PEAK process and how I launched into professional speaking and continue to run my speaking business."
    - "How to Find TEDx Speaking Engagements and Speak on the TEDx Stage. Learn what it takes to prepare a TEDx submission and how to find TEDx speaking opportunities! I've been honored to speak multiple times for TEDx, organized a premier TEDx event, served as a Speaker Coach for multiple TEDx events and coached hundreds of speakers on TEDx."
    - "How to Become a Published Author ... and leverage books with your speaking contracts! A book is not required to start speaking, but I feel it's required if you want to get PAID consistently and maximize your speaking fee!..."
    - "Backend Systems I use in my Speaking Business -- one of my most important videos! This is one of the most important videos I've ever shared because it's the SYSTEMS I use in my speaking business which serve as the GLUE holding everything together..."
    - "How to MAXIMIZE Speaking FEE in proposals and contracts. Maximizing speaking fee is not about UP-selling. Rather, it's about adding more value in your speaking contracts... Options 1, 2 and 3 in a speaking proposal... earn 20-30% MORE!"
    - "How to find PAID Speaking Opportunities at Colleges and Universities. College speaking is my roots --- it's where my speaking started... I've presented for over 500 colleges and universities, high schools and various educator groups and conferences..." [NOT VERIFIED]
    - "How to Set UP a Virtual Studio ... on a budget! (My equipment list included). I nothing NOTHING about virtual studio set up or equipment prior to the pandemic..."
    - "How to Use and Record with the ATEM Mini Switcher! (Pro versus Standard)..."
    - "'Show and Tell' Virtual Home Studio: Mike Mooney and Kevin Snyder. THE Mike Mooney and I take you behind-the-scenes..." (timestamped chapter list "1:30 -- Mike explains..." through "25:30 -- Mike's advice...")
  - **PayPal embed** (`d46abc_75e3360738c27fa4ed6641d19655361d.html`, hosted_button_id **PM3N69ZJUS8EG**, dropdown "Webinar Series USE"): "Single Webinar: How to Become a PAID Speaker $50.00 USD / ALL Webinar Recordings + 30 minute 1:1 coaching session $250.00 USD / Single Webinar: How to Become a TEDx Speaker $50.00 USD / Single Webinar: How to Find PAID Speaking Opportunities $50.00 USD / Single Webinar: How to Become an Author/Leverage Books! $50.00 USD / Single Webinar: Backend Systems I use in my Speaking Business $50.00 USD / Single Webinar: How to Maximize Speaking FEE $50.00 USD / Single Webinar: PAID Speaking Opportunities @ Colleges $50.00 USD / Single Webinar: How to Set up a Virtual Studio $50.00 USD / Single Webinar: How to Set Speaking FEE! $50.00 USD".
  - Slide-deck links on every webinar (see section 5): `ff8670ad…`, `e080cf56…`, `eee82e27…`, `534c2013…`, `6b0d8355…`, `896012a0…`.
- **Images:** `d46abc_0f9207d76eae422a97d0a72d68058bef~mv2.jpg` ("WEBINAR SERIES LOGO"); `d46abc_71d0f3db52014d3f8705e613449d9a92~mv2.jpg` ("PAID to SPEAK overview. June 7"); `69aa162c…` Slide2, `c71dd684…` Slide3, `cfee67f6…` Backend, `fa86f7bc…` Slide5, `765daa9c…` Slide6, `b138ed06…` Slide7, `5257d6f8…` ATEM, `9e6bf0ac…` Mooney; `61822e7c…` headshot logo; `6f0665a2…`; `9e4e1680…`; `af53214e…`.
- **Problems:**
  - **The paid slide decks are linked publicly on the sales page.**
  - Typos: "I nothing NOTHING", "fist impressions", "Bu t", "enti re", "5 0%", "presentat ion"; "How to Set Speaking and Knowing..." is missing "FEE".
  - "hundreds of speakers on TEDx" vs "dozens" elsewhere.
  - 50% charity donation claim (still true?).
- **Destination:** **`/on-demand`** (Webinar Series section: titles plus one-line descriptions, price TBC, Foundation of HOPE note if still true). Decks are not linked publicly.

### 2.19 `/overview` (overview.txt). Title: "Webinar Series" (Wix name "Webinar Series: overview")
- **Status:** ORPHAN, DUP of 2.18, with the overview video `QeGtQgt3bu0` embedded ("How to become a professional speaker: An overview of my book, PAID to $PEAK, and online course!") and links to `/onlinecourse` and `/tedxspeakercoaching`. Text otherwise matches `/copy-of-webinar-series-overview`.
- **Destination:** 301 to `/on-demand`.

### 2.20 `/copy-of-webinar-series-overview` (copy-of-webinar-series-overview.txt). Title: "Webinar Series" (Wix name "Copy of Webinar Series: Overview")
- **Status:** ORPHAN, DUP (the overview image links to `QeGtQgt3bu0`; the PayPal embed is present).
- **Destination:** 301 to `/on-demand`.

### 2.21 `/webinarseries` (webinarseries.txt). Title: "Webinar Series" (Wix name "Webinar Series - FULL")
- **Status:** ORPHAN, **PURCHASER page** (it embeds all of the paid videos).
- **Unique content:** a longer intro: "In these videos you will learn: the business of speaking and what people don't see, insights to improve your speaking and better impact audiences, how to position yourself as a professional speaker rather than just a FREE speaker, the criteria I use to find consistent PAID speaking engagements, techniques to identify right target audiences who actually hire speakers, how to speak on the TEDx stage ... and leverage that talk, the process to publish a book ... and position your books with any speaking engagement to maximize 'value' and increase contracts, ... and much, much more!!" "My goal is to raise $30,000 minimum for the Foundation of HOPE each year." [NOT VERIFIED] Donation link `https://event.racereach.com/walk-for-hope/donate_user/4243`.
- **Videos (paid deliverables, YouTube):** `QeGtQgt3bu0` (overview), `g5eSRpnqFNo` ("Learn how to Become a TEDx Speaker and Speak on the TEDx stage"), `2DVPRd8Fcns` ("How to Become a Published Author and Leverage Books in Speaking Contracts"), `5iosbz7mJ_0` ("Backend Systems I use in my Speaking Business"), `lLadAEfi9MY` ("How to Maximize Speaking Fee ..."), `1zb5jdecaGI` ("How to find PAID Speaking Opportunities at Colleges!"), `eVrwfhnhTxQ` (home virtual studio), `CHI2K1GmH2Y` (ATEM Mini), `91j0ox1hpzk` (Mike Mooney show-and-tell), plus `GbJaPqqV3A4` (TEDx). Note: `eVrwfhnhTxQ` and `CHI2K1GmH2Y` are also embedded publicly on `/virtualandtechsolutions`.
- **Destination:** **archive** (no LMS). 301 to `/on-demand` *after* Kevin confirms how past buyers will reach their videos (for example, an email with the unlisted YouTube links).

### 2.22 `/webinarcolleges` (webinarcolleges.txt). Title: "Webinar Series" (Wix name "Webinar Series: College")
- **Status:** ORPHAN, **PURCHASER page** for the single "Colleges" webinar: "Scroll down for your purchased video(s) below ! They will be auto-playing so you can find the video(s) quickly." Embeds `1zb5jdecaGI`.
- **Destination:** archive; 301 to `/on-demand` (same caveat as 2.21).

### 2.23 `/copy-of-use-on-demand-course-1` (copy-of-use-on-demand-course-1.txt). Title: "Copy of USE On Demand Course | template"
- **Status:** ORPHAN, **PURCHASER/attendee page** (NSA Speakers Academy, via NSA Carolinas; image `d46abc_72b2a740486c440daec99109aac8c725~mv2.jpg` "NSA Carolinas.jpg"). STALE (session dates "Sept 12", "Sept 26", "Oct 10", "Oct 24", "Nov 21", year unknown).
- **Content:** "Links below to access/download session recordings, slide decks, Module worksheets and book resources included in the NSA Speakers Academy". Per module: Worksheet / Recording / Slide Deck (files in section 5). "BONUS : See Module 4 slide deck for additional resources added including: Sample welcome video for national conference (as referenced in option 3) / Sample customized book interior (as referenced in proposal option 3) / Sample inquiry response (BombBomb video + email) / Special link to subscribe to BombBomb video service / Sample BombBomb email videos / " Speech Preparation Checklist " / " Virtual Studio Equipment List " (includes budget option less than $1,000)". It then repeats the `/bookfiles` audiobook, eBook and samples list.
- **Recordings on Google Drive:**
  - M1 https://drive.google.com/file/d/1BH2B8ZMjBkrL5w48fGdgnK-J__uSa69u/view
  - M2 https://drive.google.com/file/d/1ExVIBvkkaNMNPNZqB1FNigJ1VLCSTmSw/view
  - M3 https://drive.google.com/file/d/1OUC1DaY7CD7zyWt6zy782LvrGImApMjV/view
  - M4 is wrapped in an **email-tracking redirect** `https://quaxel1.net/v1/t/c/.../kevin%40kevincsnyder.com/?https://drive.google.com/file/d/1mDMkRsw_GP06g7iZ-x33QJFVhnkSZHvc/view`
  - M5 is a folder: https://drive.google.com/drive/folders/1arQ8RuqHaFVVpa_jnTiwOz9wxA7bK_Hl
- **Problems:**
  - Paid/attendee materials are publicly reachable.
  - Tracking-link wrapper (exposes Kevin's email in the URL).
  - All kevincsnyder.com WordPress files are 404.
  - Typo "everone".
- **Destination:** **archive** (docs only); 301 to `/on-demand`.

---

### 2.24 `/copy-of-paid-to-peak-print-book` (copy-of-paid-to-peak-print-book.txt). Title: "#1 Book! | template"
- **Status:** NAV ("#1 Book!"), DUP of `/printbook` (text identical; one button lacks `rel`).
- **Destination:** 301 to `/book`. Content is under 2.25.

### 2.25 `/printbook` (printbook.txt). Title: "Print book details: PAID to $PEAK | template"
- **Status:** NAV, live. Canonical of group D.
- **Content (verbatim):**
  - "#1 BEST SELLER & TOP RATED book for Speakers on Amazon!" [NOT VERIFIED] "Available in all formats and as an Online Course!"
  - "When I started speaking, I had no strategy. I wasn't even that great at speaking ... which is why I floundered and nearly quit on numerous occasions. However, knowing what I know now , and after speaking to over 1,000,000 people in all 50 states and around the world , I would have done things much differently if I had a coach or speaking mentor."
  - "I wrote "PAID to SPEAK" to outline my proven process and strategy to help you design your presentation, find the right audience, and learn the fundamentals helping you get PAID for speaking! If you follow the steps in this book, you should have speaking gigs lined up by the time you finish reading it. What took me 14 years to learn should take you 4 months!"
  - "Click here to get your copy!" (Amazon eBook `B083RD2TWS`; a second button goes to the print edition `1505436265`)
  - "Applying the model I outline in PAID to SPEAK , my speaking business exploded - 11 keynotes in 6 months! The outline of my book is below:"
  - **Book contents:** "Module 1: Where to start?" (defining your goals / types of PAID formats / what differentiates you / your signature story / your call to action / speaker myths); "Module 2: Developing your program" (what you need / your 'One page' / your presentation / practice opportunities); "Module 3: Speaking opportunities" (finding speaking gigs / how to outreach / speaking to students / how to get referrals / branding yourself); "Module 4: How to get PAID to SPEAK!" (from FREE to FEE / how to maximize value / knowing their budget / psychology of your fee / template proposals, contracts and invoices!); "Module 5: Getting consistent bookings" (staying motivated / finding support / client appreciation / finding a mentor / achieving your goals).
  - "Now available as an Online Course!! Click here for more info !" (`/onlinecourse`)
  - "IMPORTANT BONUS Purchase your Amazon copy from " Passion Project " seller and your book will be autographed. You will also include a complimentary coaching call when leaving an Amazon review."
- **Images:**
  - `d46abc_586f4f9972bc41a1a8e3a8b3c53c8657~mv2.gif` "PAID to SPEAK smaller.gif" (animated book cover; links to Amazon)
  - `d46abc_6b70a349179b46ff810e355bbb0c9f35~mv2.jpg` "Kevin Snyder Paid to Speak Infograph"
  - `d46abc_b7288c7c7f7f4c9bbd0b0286b9ad6c37~mv2.jpg` "paid to speak excerpt"
  - `d46abc_9938345cef6d4c78b59f19827f6b77c3~mv2.jpg` and `d46abc_5d0c648bf8ee4ea58ec54a15adb93fd6~mv2.jpg` ("How to Become a Professional Speaker: PAID to SPEAK!" title-slide photos)
  - `d46abc_75cb5e5212eb4688b009eb1e72be1ce1~mv2.jpg` "online course USE USE"
  - `d46abc_3b1ce836…` (Fiverr-watermarked mockup, don't reuse)
  - speaking photos `44d9b60c…` "IMG-6331", `262bdd32…` "5Q7A6510", `ff637b2d…` "watch my tedx talk", `688b0fd8…` "ALIGN18-2170", `8e1e1888…` "14", `b79aac3a…` "IMG_6534", `afd6dfe2…` "ALIGN18-2018", `fdc1bcb9…` "IMG_6541", `d1ff1291…` "DSC_0231"
  - module tiles `026a3789…`, `c456f90a…`, `47f17c74…`, `7be8d085…`, `f7ae889b…`
- **Problems:**
  - Outcome promises: "you should have speaking gigs lined up by the time you finish reading it", "What took me 14 years to learn should take you 4 months!"
  - "#1 BEST SELLER" [NOT VERIFIED]; "all 50 states and around the world"; "11 keynotes in 6 months".
  - "PAID to SPEAK" vs "PAID to $PEAK" naming.
  - Review-for-coaching-call incentive (Amazon review policy risk).
- **Destination:** **`/book`** (existing). Add a "first edition" section beside the 2.0 notify form: Amazon links (print plus eBook; audiobook if live), the 5-module outline, "Get the free module worksheets" (to `/resources`). The repo's `book.firstEdition` already references this book.

### 2.26 `/copy-of-paid-to-usdpeak-book` (copy-of-paid-to-usdpeak-book.txt). Title: "Audiobook / eBook Bundle | template"
- **Status:** ORPHAN, STALE (2020 audiobook launch).
- **Content:** "Now in audiobook, eBook and print formats!" "I've never been good with waiting, so while I 'impatiently' wait for Audible to sync the MP3 book files to my Amazon page, you can purchase the audiobook files at a special launch rate! Each file is an MP3 that you can listen to at your own leisure." It then repeats the `/printbook` copy and outline. **"Options for ordering ... Purchase Audiobook - $9 / Bundle (audio, eBook + autographed print) - $29 / Trial Speaker Mastermind Group - $19 / Autographed print - $19 (includes ship)"** (PayPal LJDZUM72WDT4U, 9FRPE5YZE6CAE, EBM9VHXWFABVL, WXBHXHFFEP97G respectively).
- **Images:** front cover `d46abc_939722dae28543ca91a6609a4898333c~mv2_d_2455_3035_s_4_2.jpg` ("front cover.jpg", the real cover; useful for the first-edition section), plus the same photos as 2.25.
- **Destination:** 301 to `/book`. Ask Kevin whether to keep the autographed-copy option (PayPal phase).

### 2.27 `/bookfiles` (bookfiles.txt). Title: "Audiobook, eBook and PDF files | template"
- **Status:** ORPHAN (book-buyer resource page; the URL is likely printed in or emailed with the book). Mostly broken: every kevincsnyder.com file link is now 404.
- **Content:**
  - Audiobook (MP3s, all 404): "Recommendations Before Beginning" (`Retail-Segment.mp3`), "Author's Preface. Part 1", "Author's Preface. Part 2", "Overview of each Module" (`Introduction.mp3`), "Module 1. Where to Start", "Module 2. Developing Your Program", "Module 3. Finding Speaking Opportunities and Getting Found", "Module 4. Getting PAID to $PEAK", "Module 5. Getting PAID $PEAKING Bookings Consistently", "Bonus Module. How to Write and Publish Your Book in 90 Days".
  - eBook files (404): "PDF copy", "MOBI file (Kindle - Amazon)", "EPUB file (everone else!)", "PDF version (eReaders can now import PDF)".
  - "Click Module titles below to download FREE worksheets to help work through the book!" (M1-M5 PDFs, live)
  - Module bullet list (variant: "... defining your goals / ... types of PAID speaking / ... what differentiates you / ... crafting a signature story / ... your Call to Action / ... speaker myths / ... submitting proposals / ... creating Speaker One Page / ... designing your program / ... practice opportunities / ... finding speaking gigs / ... how to outreach / ... speaking to students / ... how to get referrals / ... branding yourself / ... from FREE to FEE / ... knowing what to charge / ... criteria for when to charge / ... template proposals, contracts and invoices! / ... staying motivated / ... finding support / ... client appreciation / ... finding a mentor / ... achieving your goals").
  - "See below for samples and resources from the book as well as additional services..." Samples: "Kevin's Virtual Speaker Packet" (kevincsnyder.com WordPress PDF, 404), "Sample Presentation Slide Deck" (x2), "Speaking Business Checklist", "Speaker Storyboard (completed)", "Speech Review Form", "Phone Script Template", "Book Customization Samples", "Sample Demo Video #2" (`9a1ntEqX3ns`), "Sample Demo Video #1" (`q5LNbKujTGU`, "Dr. Kevin Snyder sizzle reel and professional speaking demo video"), "Sample Event Promo Video" (`YiT--6L_Hc8`, "Kevin Snyder, keynote speaker, for upcoming SHRM conferences and events"), "Image of Sample Invoice (page 1)", "Kevin's Lead Tracker Image", "Sample Evaluation for List Building", "Additional Image of Sample Proposal (page 1)", "Image of Sample Proposal (page 4)", "Sample Three-Tier Options", "Image of Sample Proposal (page 1)", "Sample AV Checklist" (links to kevincsnyder.com/for-meeting-planners/, 404).
  - **The Vault pitch:** "Above are just some examples of what I've included into a new resource I've called " The Vault " … " The Vault " provides samples of my… Speaking proposals, speaking agreements and invoices / Program descriptions and learning outcomes / Presentation handouts / Presentation Power Points / Marketing "One Pages" (i.e. speaker marketing flier) / Signature speech outline (i.e. "Speaking Storyboard") / Evaluations that successfully build my prospect lists / Completed pre-event questionnaires from clients / Demo video storyboard outline to create your own / Customization timelines / Phone scripts to help you close the deal / TEDx speaker application / A/V checklist / Speech preparation checklist / Sample speech inquiries and my responses / Outreach emails to prospects / … and much, much more!" "You'll also receive $2,500+ in discounts! 1-year access to my Association Directory ($899 value) / 1-time behind-the-scenes access w/ me on a call or onsite speech / Two 30-minute coaching calls ($249 value) / 25% discount on additional coaching calls / 5 recorded webinars I have personally purchased ($225 value)" "Click here to access "The Vault!""
  - **TESTIMONIAL:** ""The resources Kevin provides are fantastic! didn't know how to outreach or talk with meeting planners until I got access to 'The Vault." I followed Kevin's phone script and then used his 3-tiered speaking proposal and earned my first $2,500 speaking engagement! Best investment I could have made in my speaking business!" ~ Brittany Stephens" [NOT VERIFIED; contains an income result]
- **Images:** `d46abc_c649c700994542d5ac0328b4d134bd7b~mv2.jpg` (Vault, links to /vault); `46cf6818…` "LOGO USE USE" (Speaking Professionally Toastmasters, links to the club site); `87e7c9dc…` (links to the free virtual studio download post); document images listed in section 5.
- **Problems:**
  - All audiobook/eBook/packet/AV-checklist links are 404 (they pointed at the old WordPress kevincsnyder.com).
  - Paid-ish samples are public.
  - Typo "everone".
  - The testimonial has a missing capital ("didn't").
- **Destination:** **New page `/resources`** for the free worksheets and the free public samples Kevin approves. The audiobook/eBook files are **archive** (they were buyer perks; re-hosting them would be a gated deliverable). 301 `/bookfiles` to `/resources`.

---

### 2.28 `/contact-kevin` (contact-kevin.txt). Title: "Contact | template"
- **Status:** NAV, live.
- **Content (verbatim):**
  - "I look forward to reading your message. If you are inquiring about speaker coaching, review my sample 1:1 coaching programs here . Once you review options, click here to view my availability to schedule a 1:1 meeting to discuss coaching options."
  - **"I stand behind my system and my coaching philosophy so much that I guarantee you will earn a $2,500 speaking engagement within your first 6 months."** (guarantee and income promise)
  - Form fields: "Name *", "Email *", "Subject *", "Message *" (all required); button "send".
  - Button "View speaker coaching options here" (links to the **home page**, not coaching).
  - "If you already know you're "all in" and fully committed to professional speaking, then my 5-session or 10-session Intensive Coaching Program is what you need. Click here to view all that's included in my sample 1:1 speaker coaching program ." (sample program PDF)
  - "After reviewing the program details, click here to schedule a 1:1 Strategy Session to discuss how to get started."
  - **"My coaching values and philosophy: Authenticity | Trust | Partnership | Commitment | Accountability. In order for us to work together, we must both be aligned to these core values."**
  - "If you desire speaking for the $$$, I'm not a fit. If you're in this to make a difference, I'll be your biggest raving fan and I'll show you the way."
- **Media:** background video is Wix stock (`11062b_e12e778250c54ec0aa0d967b228e9cc3`, skip). Images: `d46abc_8fb5ae266f9f4d26adb68aa039aced40~mv2.jpg` ("PAID to $PEAK.jpg"), `d46abc_a2c4876da4514c439517f5c8c17281f8~mv2.jpg`, `d46abc_348681429d0a4ff982072abce914d5c4~mv2.gif` ("FINAL PICS GIF"), `b4678d4b…gif`, `586f4f99…gif`.
- **Problems:**
  - The guarantee.
  - "View speaker coaching options here" points to home.
  - Irony: "If you desire speaking for the $$$, I'm not a fit" on a site whose brand is "PAID to $PEAK".
- **Destination:** **`/apply`** (existing). Carry over the five values ("Authenticity | Trust | Partnership | Commitment | Accountability") and the "make a difference" line as fit copy on `/apply` or the `/coaching` "Who this is for". The general contact email goes in the footer (TODO(kc) already exists).

### 2.29 `/copy-of-coaching-services` (copy-of-coaching-services.txt). Title: "Upcoming Events | template"
- **Status:** ORPHAN, **STALE (2017)**.
- **Content:**
  - "Friday & Saturday November 10 & 11" "On Friday, November 10, I'm honored to be the keynote speaker for NSA Carolinas' Speaker School! LIVE and in person, I'll be teaching my successful PAID to SPEAK business model... If you're committed to taking your speaking business to the next level in 2018, attend this event. What I learned about speaking in 15 years is what you'll learn in one short evening! As an added bonus, on Saturday, I'll be facilitating another session on how to get selected as a TEDx Speaker!" (link `nsacarolinas.org/2017-speaker-school/`, 404)
  - 5-week program: "Cohort starting December 4th and another January 15! Only 10 students per program! ... NORMAL PRICE : $3,450 . Discount Price through November 20 : $1,750!" "You'll make your $$ back on your first contract and have a lifetime of knowledge! I guarantee it ." Inclusions: "weekly group coaching call / open access to me ... ask anything! / I'll coach you through inquiries / my personal review of your materials / learn & develop what organizers need! / craft your signature story / identify target groups who PAY! / guidance on your marketing / access to my demo video tips / introduction to 2 of my bureaus" plus "access to all my templates / weekly 1-on-1 coaching call with me".
  - Academy: "December 9. Experience PAID to SPEAK in ONE INTENSIVE DAY! ... PLUS, I'll include two( 2) hours of personalized coaching... Only twenty (20) students per Academy ... NORMAL PRICE : $775 Discount Price Through November 20 : $495! (includes 2 hours coaching)"
  - Speaker Assessment: "Value : $699 Only $379!"
- **Problems:** stale dates and prices; guarantee; the `/paid-to-speak-book` link is 404; the Academy button uses the 5-week mailto subject.
- **Destination:** **archive.** 301 to `/coaching/group`.

### 2.30 `/copy-of-speaking-professionally-toast` (copy-of-speaking-professionally-toast.txt). Title: "Speaking Professionally Toastmasters | template"
- **Status:** ORPHAN (the menu cards link to the external club site instead).
- **Content (verbatim):**
  - "Our Mission: To help aspiring and current professional speakers build a speaking business by providing practice opportunities, feedback and business education topics each meeting."
  - "Benefits of Speaking Professionally Toastmasters: 1. Membership with other like-minded speakers serious about growing their speaking businesses 2. Open to all levels and types of speakers 3. Speaking practice opportunities + additional speaking opportunities in a safe space each month 4. Receive group feedback to strengthen speeches 5. Hear and learn from feedback given to others 6. Access to private Facebook page to engage with other members and request/share feedback 7. Over $2,500 in professional speaking resources!"
  - "We welcome current Toastmasters as well as non-Toastmasters. We also welcome speakers from various levels whether you are just starting out in speaking or you already have professional speaking experience."
  - **Schedule:** "We meet virtually on the 1st Tuesday of each month from 12:00pm - 1:30pm EST. Additional engagement in between meetings through our Facebook group where members post videos for feedback, share speaking opportunities, and much more."
  - ""If you're not practicing your speaking, you're not getting any better. Our club is the place to practice, refine, and improve!""
  - "Speaking Professionally Toastmasters will provide you with safe, constructive practice opportunities in a peer group setting as well as business education to help you drastically improve your virtual speaking abilities and earn paid speaking engagements."
  - Buttons: "Visit our club website" / "Visit Speaking Professionally Toastmasters website" (https://7012881.toastmastersclubs.org/; www.speakingprofessionallytoastmasters.com redirects there; live).
- **Images:** `d46abc_844bde887ae94fa7a9c72211bad88c3b~mv2.jpg` ("LOGO 2025.jpg", club logo).
- **Destination:** Section on **`/toastmasters`** (club card, schedule, outbound link), also linked from `/resources`. 301 to `/toastmasters`.

### 2.31 `/accred` (accred.txt). Title: "Toastmasters"
- **Status:** ORPHAN (likely shared with Toastmasters audiences). STALE (2022 framing).
- **Content (verbatim):**
  - "Dr. Kevin Snyder was honored to receive the prestigious Accredited Speaker designation from Toastmasters International, becoming the 90th Accredited Speaker in program history. He was the only person in the world to receive this award in 2022." (AS [verified]; "90th" and "only person ... in 2022" [NOT VERIFIED])
  - "Below is his keynote speech from the Convention and more resources about the Accredited Speaker designation." (YouTube `zisYulotgmw`, "2022 Accredited Speaker Program: Kevin Snyder", Toastmasters International channel)
  - "If you would like to invite Kevin to speak for your Toastmasters District or company, see below and inquire here !" (kevincsnyder.com/hire-kevin/, **404**) "As his speaking calendar allows, Kevin ocassionally speaks for Toastmasters Districts and special Toastmasters events... While onsite for your event, Kevin could also speak with your local company or another organization!" (YouTube `_pB9wyiHk6A`, "Inquire about me speaking for your next event!")
  - "Be sure to subscribe to Kevin's 'Speaker Tips' newsletter on this website..."
  - Interviews: "In this video, Kevin interviews the Co-Chairs for the Accredited Speaker program - Rochelle Rice (CSP and DTM) and Greg Wood (DTM)." (`0yF4nyLAYxQ`) "In this video, Kevin interviews other Accredited Speakers who share insights and tips about applying - Forrest Tuff (DTM) and Paul Artale (DTM)." (`np9WkZaF6S8`) "In this video, Kevin is interviewed by First Vice President Radhi Spear about his journey to becoming an Accredited Speaker, his advice for other Toastmasters, and more." (`cXW5WZmwy-U`, "Meet Accredited Speaker Kevin Snyder | Toastmasters International")
  - Press: Toastmasters Magazine January 2023 PDF (image `d46abc_b01aeb1f6486477abd49948fad80259e~mv2.jpg`, link to toastmasterscdn ... magazine-january-2023-s.pdf, live); Toastmasters Podcast episode 220 "Introducing Dr. Kevin C. Snyder, Toastmasters' Newest Accredited Speaker" (image `d46abc_be57be7dd3454339854bcd6f8ee292fa~mv2.jpg`, live).
  - Books: "To view Kevin's books on Amazon, scan the QR code below or visit amazon.com/author/kevincsnyder" (QR `d46abc_fd2a3e94c2644475948a5ba28da71375~mv2.png`, promo `d46abc_ec812f631e624466be80fd4d357951df~mv2.jpg`). TEDx tile (kevincsnyder.com/kevins-tedx-talk/, **404**); PURE Vulnerability tile (bit.ly/PUREVulnerability, which resolves to Amazon 1956543074).
  - Lower half duplicates the 2.6 coaching content: philosophy, "Schedule a complimentary session...", comparison chart PDF (2021), sample program PDF, Speech Review, Speaker Assessment "Only $499", card grid, Wix video `1713bcb7…`, YouTube `SfJs07T5fNw`.
- **Problems:** dead links (hire-kevin, kevins-tedx-talk); "ocassionally"; unverified "90th"/"only person"; the keynote-booking purpose belongs to kevincsnyder.com.
- **Destination:** **New page `/toastmasters`** (canonical of group G): the AS designation story (once verified), the interview videos as an AS resource for aspiring Toastmasters speakers, press links, the Speaking Professionally Toastmasters club, a coaching CTA, and "Booking Kevin for your District? That's on kevincsnyder.com". If Kevin would rather not have this page, 301 to `/about`.

### 2.32 `/toastmasterskeynote` (toastmasterskeynote.txt). Title: "Toastmasters keynote"
- **Status:** ORPHAN (sent to Toastmasters hosts). Meta description: "We're thrilled to have Dr. Kevin Snyder, Accredited Speaker, keynote at our upcoming event!"
- **Unique content:** "I am truly honored to speak at your upcoming Toastmasters event! Special thanks and recognition to your planning team for the enormous behind-the-scenes effort!" "My speaking career includes motivational keynotes and leadership training workshops for over 1,000,000 people and 1,150 audiences around the world. My clients include professional organizations, associations and youth audiences..." "Last year I was humbled to be the only Toastmaster in the world who received the prestigious Accredited Speaker designation from Toastmasters International." "BONUS: I can also make myself available to deliver one of my motivational keynotes or training workshops for your company 1-2 days before or after your Toastmasters event..." Buttons "Watch Kevin's Demo Video" (`EPovfra-xgk`, "NEW Demo Video and Speaking Reel for Dr. Kevin Snyder") and "Kevin's Keynote @ TI Convention" (`zisYulotgmw`). Video `LFaamslKOFg` ("So thrilled to be speaking at your upcoming event!"). "Fellow Toastmasters, I would not be where I am today as a speaker without the coach I hired..." Button "Learn more about Kevin's Speaker Coaching Program" (to /coachingoptions). The rest is the same as /accred.
- **Problems:** "1,150 audiences" vs 1,500; "Last year" (relative date, stale); dead hire-kevin link.
- **Destination:** 301 to `/toastmasters`.

### 2.33 `/toastmasterkeynotesponsor` (toastmasterkeynotesponsor.txt). Title: "Toastmasters Keynote Sponsor"
- **Status:** ORPHAN. Meta description: "Might your company sponsor our hopeful keynote speaker for our upcoming event? We're trying to host Dr. Kevin Snyder, Accredited Speaker but need your help! As a sponsor, Kevin will provide a separate training program for your company on a different date just before or after our event!"
- **Unique content:** "We're trying to make it work for me to speak at your upcoming Toastmasters event!..." "KEYNOTE SPONSOR OPPORTUNITY: If your company would like to sponsor my keynote for the Toastmasters event, I will also deliver one of my motivational keynotes or training programs for your company separately. I would deliver my program to your company before or after the Toastmasters event. Your company will also receive keynote sponsor recognition during the Toastmasters event and you or a representative from your company can introduce me." "Watch my video below explaining the Keynote Sponsor opportunity!" (YouTube `Q8wH7YbEbCA`, "KEYNOTE SPONSOR Opportunity for your next event!") Buttons "Watch Kevin's DEMO VIDEO" (`EPovfra-xgk`), "Watch Kevin's Accredited Speaker Keynote" (`zisYulotgmw`), "Visit Kevin's Speaker Coaching Options Here" (to `/copy-of-1-1-coaching-options`).
- **Destination:** 301 to `/toastmasters`. The sponsor model is a keynote-booking offer, so the fuller version belongs on kevincsnyder.com. Keep a one-line mention on `/toastmasters` only if Kevin wants it.

---

## 3. Testimonials found (all [NOT VERIFIED]; CONTENT.md says no testimonial quotes until confirmed)
1. **Brittany Stephens** (`/bookfiles`): ""The resources Kevin provides are fantastic! didn't know how to outreach or talk with meeting planners until I got access to 'The Vault." I followed Kevin's phone script and then used his 3-tiered speaking proposal and earned my first $2,500 speaking engagement! Best investment I could have made in my speaking business!" ~ Brittany Stephens"
2. **Tristan Cole** (hidden `/vault` and `/welcome`, not among the 33): ""Kevin, I followed your speaking proposal template and not only got my first PAID speaking engagement, but I earned a speaking fee DOUBLE what I would have charged otherwise. "The Vault" has already paid for itself 5x over! I finally feel like I know what I'm doing know. Thank you!" ~ Tristan Cole"

No other text testimonials exist on the 33 pages; I checked the graphics on the coaching, home and book pages. Both quotes state income results, so even if they're real, they need Kevin's consent and probably a results disclaimer.

---

## 4. Pages outside the 33 that must not be lost (from the Wix page registry)

| URL | Status | What it is | Key content | Destination |
|---|---|---|---|---|
| `/vault` | Public, NAV item | The Vault sales page | Template library ("worth over $20,000"). **"'The Vault' without $4,500+ in value \| $799"**, **"'The Vault' including $4,500+ in value \| $999"**. "Membership and access to "The Vault" is for one year period of time... Payments are non-refundable". Bonus option: "Two 1:1 coaching calls (30 minutes each)... 1-year access to my Association Directory... Unlimited access to PAID to $PEAK Webinar Series... Digital TEDx training video(s) + templates... 25% discount on membership in Speaker mastermind Group". Claim: "NEW Speaking Agreement which has protected me from sending back $25,000 in force majeure speaking cancelations". Testimonial: Tristan Cole. PayPal embed `d46abc_24b2c0544248403f4bf650994caf53d3.html` | **New `/vault`** (if still sold), else `/on-demand#vault` |
| `/mastermind` | Public, NAV item | Speaker Mastermind sales page | Inclusions: "Monthly LIVE Q & A group session with Kevin + recording (Zoom)** / Membership in a private community / Speaking opportunities + Call for Speaker announcements / Community with other like-minded speakers to connect / Ability to request feedback and create accountability/support groups / Behind-the-scenes communications between Kevin and meeting planners". "90 minute group Q&A". **"Complimentary for Kevin's coaching clients", "Monthly \| $50", "Annual \| $475"** (PayPal DFUGW699GBHFY, J9KKN2HJ6Q2PG). PDF `d46abc_7dcf671820e84b78be248481b86b3523.pdf`. Book covers incl. *Speechless* and *Think Differently* (Amazon B008XAQHWY) | **New `/mastermind`** (if still running) |
| `/welcome` | Public, PURCHASER | "Open 'The Vault'" | Wix video `d46abc_472d4b893c3e49708ca72ef123f73f66` (12:51 Vault walkthrough). Says access is a Google Drive link sent by email. Calendly `mastermindvaultcoaching` | archive; 301 to `/vault` |
| `/welcometomastermind` | Public, PURCHASER | Mastermind onboarding | **Exposes a private Zoom room `[private Zoom link redacted]` and Facebook group `[private Facebook group redacted]`**. "first Monday of each month" 12:00-12:30 Q&A; "$49 for every member you refer" | archive; 301 to `/mastermind` |
| `/interview` | Public | Recording page: "Interview and Q&A with a Speakers Agent" (YouTube `d_Incm8qzjY`) | "This page will be available for one week and then removed." Resource recap incl. "Purchase your copy through the Amazon Seller named "Passion Project" and you receive a complimentary Strategy Session with Kevin after reading the book - value $250!" | 301 to `/blog/live-interview-and-q-a-with-a-speakers-agent` (post exists in the import) or `/blog` |
| `/localheroes` | Public | Recording: "LOCAL HEROES interview and Q&A with Teresa Gitomer and Kevin Snyder" (`TOmKiRyJBe4`) | Same recap as /interview | 301 to `/blog` |
| `/studioquestionandanswer` | Public, PURCHASER | Replay of "How to Set up a Virtual Studio - LIVE Q&A" (`jwVWIYG0LwA`, YouTube "[Private Link]") | Bonus videos `zwie3mJn2Ew` (NASPO keynote), `_ZmSE_7jLOo` | 301 to `/coaching/virtual-studio` |
| `/thankyou` | Public | PayPal return page | "We review each and every payment transaction. You will receive a separate email with information about your purchase within 12 hours." Claim: "one of my most popular demo videos that has helped me obtain over $250,000 in speaking engagements". Videos `zwie3mJn2Ew`, `_ZmSE_7jLOo`, `SfJs07T5fNw`, `q5LNbKujTGU`, `1SE9Qa4KXs8` (TEDx Wake Forest "The Ripple Effect") | 301 to `/` (Kevin must update PayPal return URLs; currently live buttons return here) |
| `/about-1` | Public | Home page's own slug | duplicate of `/` | 301 to `/` |
| `/worksheets` | **Protected, but in the main nav** ("FREE Module Worksheets") | Probably the free worksheet page | | 301 to `/resources` |
| `/trainings` (Training Videos), `/ondemand` (Online Course Access), `/paidplus` (Online Course PLUS+ Access), `/onlinespeakingcourse` (On Demand Course), `/webinars` (Webinars for Purchase) | Protected, PURCHASER | Course and webinar delivery | | 301 to `/on-demand` (after the buyer-access plan) |
| `/tedxtraining` (TEDx Training) | Protected, PURCHASER | TEDx course delivery | | 301 to `/coaching/tedx` |
| `/5weekchallengeondemand` (2021), `/5-week-challenge-basic-2023`, `/5-week-challenge-on-demand-plus-2023`, `/5weekchallengeplus2025` | Protected, PURCHASER | Cohort replay pages | | 301 to `/coaching/group` |
| `/speakeracademy` (Speaker Academy) | Protected | | | 301 to `/coaching` |
| `/spt` (SPT Members), `/speakingprofessionallytoastmasters` (requireLogin) | Protected | Speaking Professionally Toastmasters member pages | | 301 to `/toastmasters` |
| `/single-post/*` (269), `/post/*`, `/blog/categories/*`, `/blog/page/*` | Blog | | | handled by `src/lib/redirects.ts`; add `/blog/page/:n` |
| Known old aliases: `/paidtospeakbook` (Wix 301 to /printbook), `/paid-to-speak-book` (404, still linked) | | | | 301 both to `/book` |

---

## 5. Downloadable files and videos to download or re-host

Legend: **Gated?** Y = a paid/purchaser deliverable (re-hosting it publicly gives it away; hosting it behind a login would be LMS-like, which is out of scope). P = semi-public sample ("part of The Vault" but linked publicly). N = free lead magnet / public marketing. **In repo** = an identical file already exists in `public/files/`.

### 5.1 Wix-hosted documents (`https://www.paidtospeak.biz/_files/ugd/<id>`), 36 links, 31 unique files (local copies in `.cache/wix/dl-pdfs/`)
| File id | What it is | Linked from | Size | Gated? | Notes |
|---|---|---|---|---|---|
| d46abc_69611132c45b4b83a7df91656b08a895.pdf | Module 1 worksheet ("MODULE 1 QUESTIONS") | bookfiles, 5weekchallenge, onlinecourse(+details), copy-of-use-on-demand | 106 KB | N | keep, `/resources` |
| d46abc_f8311a014a2b477398bbeaca627a1548.pdf (= …4c4ad5542e604fa0965c6e6318eca48e.pdf) | Module 2 worksheet | same | 110 KB | N | keep one |
| d46abc_067fb79e61a841e7a6af7b87f9bd85aa.pdf (= …a0b0950f17174177b14bf84eb4c26eaa.pdf) | Module 3 worksheet | same | 130 KB | N | keep one |
| d46abc_7364ccd342eb499fb90ea064c5c333ea.pdf (= …fa17530d31ef4f1d8294f3ca1cec6772.pdf) | Module 4 worksheet | same | 107 KB | N | keep one |
| d46abc_536d001ced6f479eab9c19decbe90ac1.pdf (= …07b0538a28754f14b85dbc6df69ca09b.pdf) | Module 5 worksheet | same | 143 KB | N | keep one |
| d46abc_1ba9e3220ea544e6ae77d92e2e05e75e.docx | "MODULE 1 Questions. WORD.docx" (editable M1) | 5weekchallenge | 86 KB | N | keep |
| d46abc_68e03161ce554eb78eb61e6f83082747.pdf | "SPEAKING BUSINESS CHECKLIST" (quiz: "Is your speaking set up like a business to earn $1,500, $2,500, and $3,500+ per speech?") | bookfiles, use-on-demand | 100 KB | N | **In repo** (`Speaking_Business_Checklist.pdf` and two hash-named copies) |
| d46abc_0462e79e3ac9408b842e65a4cae052ad.pdf | "Updated. Equipment List for Setting up Your Virtual Speaking Studio" | virtualandtechsolutions | 561 KB | N | **In repo** (`d46abc_f5af3d1bde414d47bc6c5517f50414d1.pdf`) |
| d46abc_4ddc87d9b7df421f9d180891734a006f.pdf | Older equipment list | copy-of-virtual-studio-setup | 509 KB | N | superseded, archive |
| d46abc_b9501af58f25451f96c06a238f3a2c9d.pdf | Speaker Storyboard Outline (completed sample) | bookfiles, use-on-demand | 218 KB | P | Kevin decides |
| d46abc_f562e221d06b4e5cace87c98f44d8a01.pdf | Speech Review Feedback form | bookfiles, use-on-demand | 194 KB | P | Kevin decides |
| d46abc_32c761019c844fea955754aae6b98ab8.pdf | Phone Script for Inquiries | bookfiles | 412 KB | P (Vault item) | Kevin decides |
| d46abc_4cf7be418b78445989b5618ae2ae5eb1.pdf | Sample Evaluation for List Building | bookfiles | 180 KB | P | Kevin decides |
| d46abc_faa6dd123a654c7b8d33950d9aef4fd5.pdf | Book Customization Samples (customized books for organizations) | bookfiles, use-on-demand | 1.6 MB | P | check for client names |
| d46abc_3c28acf327784377b2d0a523a774014d.pdf | Sample Presentation Slide Deck | bookfiles, use-on-demand | 10 MB | P | check for client branding |
| d46abc_65c3140ef5ea457c97390db5482c2703.pdf | Sample Presentation Slide Deck ("Keynote Speaker Kevin Snyder, Ed.D. #ASETS18") | bookfiles | 6.6 MB | P | check for client branding |
| d46abc_ff8670ad1a114439a5550403b62cdc5d.pdf | Webinar deck: PAID to $PEAK Overview | webinar pages | 20 MB | Y | archive |
| d46abc_e080cf569f714fe3a84cf0cc2c8190ce.pdf | Webinar deck: Become a TEDx Speaker | webinar pages | 9.2 MB | Y | archive |
| d46abc_eee82e278875461f96fa820b72551118.pdf | Webinar deck: Published Author | webinar pages | 5.3 MB | Y | archive |
| d46abc_534c201332af4b6ea9b08c99c735428e.pdf | Webinar deck: Backend Systems (first slide lists the June 7/21/28 and July 5 webinar dates) | webinar pages | 11 MB | Y | archive |
| d46abc_6b0d8355a0ac4874b2229c15e8ee6b8e.pdf | Webinar deck: Maximize Speaking Fee | webinar pages | 14 MB | Y | archive |
| d46abc_896012a0cdf24e59a8707f2b58bdf7ab.pdf | Webinar deck: PAID speaking at Colleges | webinar pages | 8.2 MB | Y | archive |
| d46abc_90815a9fc25b495eb80f19c1a69e4bc6.pdf | NSA Speakers Academy Module 1 deck | copy-of-use-on-demand-course-1 | 4.8 MB | Y | archive |
| d46abc_27d2446a975f4c55b6542cf46dedf0b4.pdf | NSA Academy Module 2 deck | same | 10.7 MB | Y | archive |
| d46abc_47f589ca5ec04654a1198579d1659ce9.pdf | NSA Academy Module 3 deck | same | 10 MB | Y | archive |
| d46abc_68a66c13e85545738e047c1fb5e92d61.pdf | NSA Academy Module 4 deck ("$HOW ME THE MONEY!!") | same | 8.8 MB | Y | archive |
| d46abc_b4e9e3fb02fc4630b13d90c02488451f.pdf | NSA Academy Module 5 deck ("Consistent PAID Bookings") | same | 11.8 MB | Y | archive |
| d46abc_5bb83ca695cc470787125c92df396555.pdf (= …2653ab786d644a0884a06bcf17788f01.pdf) | Sample 1:1 coaching program agreement and philosophy (6 pp; 10-session inclusions; "Coaching Program Investment Breakdown" $12,500 / $7,250; "Payment Terms * can be divided in up to 3 payments"; "Credit card/online payments preferred. We'll send you a PayPal link or Venmo for payment."; "non-refundable") | accred, contact-kevin, copy-of-1-1-coaching-options, onlinecourse | 495 KB | N (marketing) | **In repo as `Private_PAID_to_PEAK_Coaching_Program.pdf`. Contains the home address; redact before publishing** |
| d46abc_87309f5032cb4b80a953141482556001.pdf | Personalized proposal to "Paul" ($15,000 / $10,500; "if you'd like to pay in full by check, I'll even knock off $500") | 5weekchallenge | 4.4 MB | N | **do not re-host (privacy)**; its content is the newest program description, so useful as a source |
| d46abc_4bd026bb54af4ffcb3b733a655665bd4.pdf | "NO Deal. Coaching Programs 2021.pdf" chart | accred, copy-of-1-1-coaching-options | 315 KB | N | archive (stale prices) |
| d46abc_f68d604cb7404dad9bd385863873d1d7.pdf | "Coaching Program June 2019 for Beka.pdf" chart | 1-on-1-coaching | 270 KB | N | archive (stale; named after a person) |

Repo files with no match among the 33 pages (they came from blog posts): `2023_State_of_Industry.pdf`, `Coaching_Application.pdf`, `SAMPLE_Private_PAID_to_PEAK_Coaching_Program.pdf`, several hash-named PDFs, `How_to_Claim_Your_Complimentary_Coaching_Call.mp3`, `Retail_Segment.mp3`. Note that `Retail_Segment.mp3` matches the name of the lost audiobook file "Recommendations Before Beginning".

### 5.2 Wix-hosted videos (must be downloaded; they disappear when Wix is cancelled)
URL pattern: `https://video.wixstatic.com/video/<id>/<quality>/mp4/file.mp4` (qualities 1080p/720p/480p/360p; the Wix JSON advertises 1080p unless noted).
| Video id | Duration | Page(s) | What it is | Gated? |
|---|---|---|---|---|
| d46abc_b425addca7fb4cf2a15697f0cbd29a9d | 2:37 | tedxspeakercoaching | TEDx coaching intro ("How to become a TEDx speaker") | N |
| d46abc_4df02c7d0de943388bba150f6f353f26 | 5:00 | ultimate | "Watch this overview of the Ultimate Speaker Package!" | N |
| d46abc_4854a1aa28b6427ea574b5aab7e41023 | 7:25 | virtualandtechsolutions | virtual studio video (untitled) | N |
| d46abc_02094897ac9a4b66bb0049887955ab25 | 5:06 | mentorshipforspeakers | mentorship intro (untitled) | N |
| d46abc_72d1a5490efd4076bbef2cda8df7a6e6 | 6:48 | paideventcalendar1 | Event Calendar explainer (untitled) | N |
| d46abc_1713bcb78ae1488986b7e4ca4c691aa0 (360p only) | 3:22 | accred, copy-of-1-1-coaching-options, toastmasterskeynote, toastmasterkeynotesponsor | autoplay loop beside the coaching section (untitled) | N |
| d46abc_472d4b893c3e49708ca72ef123f73f66 (720p) | 12:51 | hidden /welcome | Vault walkthrough | Y |
| 11062b_e12e778250c54ec0aa0d967b228e9cc3 | n/a | contact-kevin background | Wix stock footage | skip |

### 5.3 Google Drive recordings (paid NSA Academy; Kevin owns them; no re-host needed, just record them)
1BH2B8ZMjBkrL5w48fGdgnK-J__uSa69u (M1), 1ExVIBvkkaNMNPNZqB1FNigJ1VLCSTmSw (M2), 1OUC1DaY7CD7zyWt6zy782LvrGImApMjV (M3), 1mDMkRsw_GP06g7iZ-x33QJFVhnkSZHvc (M4), folder 1arQ8RuqHaFVVpa_jnTiwOz9wxA7bK_Hl (M5). Gated: Y.

### 5.4 Files already lost (were hosted on the old WordPress kevincsnyder.com; all 404 on 2026-10-12)
Linked from `/bookfiles` and `/copy-of-use-on-demand-course-1`. All were book-buyer perks (gated: Y). Kevin needs to supply them if he wants them kept anywhere.
- `wp-content/uploads/2020/05/` MP3s: `Retail-Segment.mp3`, `Authors-Preface.-Part-1.mp3`, `Authors-Preface.-Part-2.mp3`, `Introduction.mp3`, `Module-1.-Where-to-Start-1.mp3`, `Module-2.-Developing-Your-Program.mp3`, `Module-3.-Finding-Speaking-Opportunities-and-Getting-Found.mp3`, `Module-4.-Getting-PAID.mp3`, `Module-5.-Getting-PAID-Bookings-Consistently.mp3`, `Bonus-Module.-How-to-Write-and-Publish-Your-Book-in-90-Days.mp3`
- eBooks: `PAID-to-PEAK-eBook.mobi`, `PAID-to-PEAK-eBook.epub`, `PAID-to-PEAK.pdf`
- `wp-content/uploads/2020/08/Kevin-Snyder-Speaker-Packet-2.pdf`
- Pages: `/hire-kevin/`, `/kevins-tedx-talk/`, `/client-summary/`, `/for-meeting-planners/` (the Sample AV Checklist pointed there)

### 5.5 Wix images used as documents (Vault samples; check for client names before any reuse; gated: P)
`d46abc_2bbc960863eb4dcc9dde2f3da00bf70f~mv2.jpg` (Invoice), `d46abc_2e74072bb355494083860978bdd78444~mv2.jpg` (Kevin's GIG tracking and payments, "Lead Tracker"), `d46abc_b64612feaead42bc83c1f748f68b2ff4~mv2.jpg` (Sample Speaking Agreement. Books), `d46abc_1413e8d1b8ac4f82b61e74e695507cb7~mv2.jpg` (Sample Speaking Agreement copy 2 p3), `d46abc_657b871a1ad048bfbb21464a9ef84757~mv2.jpg` (Sample Speaking Proposal. Global p2, "Three-Tier Options"), `d46abc_f209be506c6c4f0aa65563efa567dbfd~mv2.jpg` (Speaking Agreement).

### 5.6 YouTube videos referenced (YouTube stays the host; no re-hosting needed. HANDOFF: "Do not embed third-party players until confirmed". Use click-to-load as the blog does.)
Public marketing:
- `OGl8ZRA2e6c` Demo video (home)
- `SfJs07T5fNw` "Overview of coaching options..." (coaching pages, home, accred, toastmasters)
- `EPovfra-xgk` "NEW Demo Video and Speaking Reel"
- `q5LNbKujTGU` sizzle reel
- `9a1ntEqX3ns` "Speaking highlights"
- `YiT--6L_Hc8` SHRM promo
- `9rtIrL5TfaQ` / `aIcIPqnF6_c` (5-Week Challenge)
- `HBc509T3hYw` / `OB41BkcG5Io` (course orientation)
- `QeGtQgt3bu0` (book and course overview)
- `GbJaPqqV3A4` (TEDxCapeMay, TEDx channel)
- `1SE9Qa4KXs8` (TEDx Wake Forest, /thankyou)
- `zisYulotgmw` (2022 AS keynote, TI channel)
- `cXW5WZmwy-U` (TI interview)
- `0yF4nyLAYxQ`, `np9WkZaF6S8` (AS interviews)
- `_pB9wyiHk6A`, `LFaamslKOFg`, `Q8wH7YbEbCA` (Toastmasters host/sponsor)
- `_ZmSE_7jLOo`, `eVrwfhnhTxQ`, `CHI2K1GmH2Y`, `mj5zhnEYUTw`, `VX8Ca4RyZhQ`, `F0DBL_BrIls`, `lSUxn0Sju8I`, `a2IKuienk9g` (virtual studio / tech tips)
- `zwie3mJn2Ew` (NASPO keynote)
- `d_Incm8qzjY`, `TOmKiRyJBe4` (interviews)

Paid deliverables (webinar series): `g5eSRpnqFNo`, `2DVPRd8Fcns`, `5iosbz7mJ_0`, `lLadAEfi9MY`, `1zb5jdecaGI`, `91j0ox1hpzk`. Plus `jwVWIYG0LwA` ("[Private Link]" studio Q&A replay). Their visibility (unlisted vs public) is unknown; ask Kevin.

### 5.7 PayPal buttons and forms in use (record only; do not wire; for the later PayPal phase)
| Product | Button / form |
|---|---|
| 5-Week Challenge (PLUS $2,500 / BASIC $1,500 / deposit $250) | hosted_button_id KQK4XBJ79MXFC (embed form) |
| Webinar Series (10 options, $50 single / $250 all) | PM3N69ZJUS8EG (embed form) |
| Online Course (PLUS $450 / BASIC $350) | PayPal Smart Buttons JS SDK (client-id `AQeT3KoNjwsrfTCawNyOFrkLwPigKYbcNyeIRoFbdhJ5vot4PaUAupU1xL4I5c58rlrJi_DOqHu_F6u5`, Venmo enabled) |
| Mentorship PRO / EMERGING / ASPIRING | WWZ559J85AF36 / 4ZVX8EZNGV3AQ / NYQQECV927CMJ (tier mapping inferred from button order) |
| Event Calendar PREMIUM / SILVER / STANDARD | 4WDY6PK6J22MW / TKRQCSKY6YBQU / J5ZT6TVKMKS72 |
| Audiobook $9 / Bundle $29 / Trial Mastermind $19 / Autographed print $19 | LJDZUM72WDT4U / 9FRPE5YZE6CAE / EBM9VHXWFABVL / WXBHXHFFEP97G |
| TEDx Option 1 ($297) | http://paypal.me/PassionProjectLLC |
| Mastermind monthly / annual (hidden page) | DFUGW699GBHFY / J9KKN2HJ6Q2PG |
| The Vault (hidden page) | embed `d46abc_24b2c0544248403f4bf650994caf53d3.html` |

All PayPal returns land on `/thankyou`, which will 301 to `/` after the cutover. Kevin should update the return URLs in PayPal.

---

## 6. Proposed sitemap for the new site

Existing routes are kept; new routes are marked NEW. The redirect sources listed are old Wix paths.

```
/                          (existing)   <- /, /about-1, /thankyou
/coaching                  (existing; hub: 1:1 5/10-session, hourly + 3-hr bundle,
                                         Speaker Assessment, Speech Review, Intensive,
                                         comparison table, "More ways to work with Kevin")
                                        <- /coachingoptions, /copy-of-speaker-coaching,
                                           /copy-of-1-1-coaching-options, /copy-of-1-1-coaching-options-1,
                                           /1-on-1-coaching, /speciality-programs, /speakeracademy,
                                           (/ultimate and /paideventcalendar1 if those offers are retired)
  /coaching/group          NEW  (5-Week Challenge / "PAID to $PEAK in 5 Weeks")
                                        <- /5weekchallenge, /copy-of-coaching-services,
                                           /5weekchallengeondemand, /5-week-challenge-basic-2023,
                                           /5-week-challenge-on-demand-plus-2023, /5weekchallengeplus2025
  /coaching/tedx           NEW          <- /tedxspeakercoaching, /tedxtraining
  /coaching/mentorship     NEW          <- /mentorshipforspeakers
  /coaching/virtual-studio NEW          <- /virtualandtechsolutions, /copy-of-virtual-studio-setup,
                                           /studioquestionandanswer
  /coaching/speaker-package NEW (if still offered)  <- /ultimate
/on-demand                 NEW  (Online Course BASIC/PLUS + Webinar Series; marketing only, no LMS)
                                        <- /onlinecourse, /onlinecoursedetails, /webinarseriesvideos,
                                           /overview, /copy-of-webinar-series-overview, /webinarseries,
                                           /webinarcolleges, /copy-of-use-on-demand-course-1,
                                           /trainings, /ondemand, /paidplus, /onlinespeakingcourse, /webinars
/vault                     NEW (if still sold)        <- /vault (same path), /welcome
/mastermind                NEW (if still running)     <- /mastermind (same path), /welcometomastermind
/event-calendar            NEW (only if still sold; otherwise -> /coaching)  <- /paideventcalendar1
/resources                 NEW  (free downloads: 5 module worksheets + M1 .docx, Speaking Business
                                 Checklist, Virtual Studio Equipment List, any approved samples;
                                 Speaking Professionally Toastmasters link)
                                        <- /bookfiles, /worksheets
/toastmasters              NEW  (Accredited Speaker story + AS interview videos + press +
                                 Speaking Professionally Toastmasters club + coaching CTA;
                                 keynote booking -> kevincsnyder.com)
                                        <- /accred, /toastmasterskeynote, /toastmasterkeynotesponsor,
                                           /copy-of-speaking-professionally-toast, /spt,
                                           /speakingprofessionallytoastmasters
/book                      (existing; add a "first edition" section)
                                        <- /copy-of-paid-to-peak-print-book, /printbook,
                                           /copy-of-paid-to-usdpeak-book, /paidtospeakbook, /paid-to-speak-book
/about                     (existing; reuse portrait d46abc_09f4786585fa41e5a541b64a2b602b9e and verified facts)
/blog, /blog/[slug]        (existing)   <- /blog, /blog/page/:n, /single-post/:slug, /post/:slug,
                                           /blog/categories/:c, /interview, /localheroes
/apply                     (existing; also the contact page)   <- /contact-kevin
```
**New routes: 10** (`/coaching/group`, `/coaching/tedx`, `/coaching/mentorship`, `/coaching/virtual-studio`, `/coaching/speaker-package`, `/on-demand`, `/resources`, `/toastmasters`, plus `/vault` and `/mastermind`). `/event-calendar` is an 11th, only if Kevin still sells it.

**Smaller fallback IA** (if Kevin wants fewer pages): fold mentorship, virtual studio and speaker package into `/coaching` sections with anchors, fold vault and mastermind into `/on-demand`, and drop `/toastmasters` (redirect those pages to `/about`). That leaves 4 new routes: `/coaching/group`, `/coaching/tedx`, `/on-demand`, `/resources`.

**Nav proposal:** Coaching (dropdown: 1:1 · Group · TEDx · Mentorship · Virtual Studio) · On Demand · The Book · About · Blog · **Apply** (button). Footer: Resources · Toastmasters · Mastermind · Vault · Contact.

---

## 7. Redirect table (all 33 pages)

Every old URL gets a permanent (301) redirect. `/` and `/blog` keep their paths.

| # | Old path | New path | Why |
|---|---|---|---|
| 1 | `/` | `/` | same |
| 2 | `/blog` | `/blog` | same |
| 3 | `/coachingoptions` | `/coaching` | canonical coaching overview |
| 4 | `/copy-of-speaker-coaching` | `/coaching` | identical duplicate |
| 5 | `/copy-of-1-1-coaching-options-1` | `/coaching` | draft duplicate |
| 6 | `/copy-of-1-1-coaching-options` | `/coaching` | 2021 version |
| 7 | `/1-on-1-coaching` | `/coaching` | 2019 version |
| 8 | `/speciality-programs` | `/coaching` | hub of add-ons |
| 9 | `/5weekchallenge` | `/coaching/group` | group program |
| 10 | `/copy-of-coaching-services` | `/coaching/group` | 2017 group/academy events |
| 11 | `/tedxspeakercoaching` | `/coaching/tedx` | TEDx |
| 12 | `/mentorshipforspeakers` | `/coaching/mentorship` | mentorship |
| 13 | `/virtualandtechsolutions` | `/coaching/virtual-studio` | virtual studio |
| 14 | `/copy-of-virtual-studio-setup` | `/coaching/virtual-studio` | older duplicate |
| 15 | `/ultimate` | `/coaching/speaker-package` (or `/coaching` if retired) | package |
| 16 | `/paideventcalendar1` | `/event-calendar` (or `/coaching` if retired) | subscription |
| 17 | `/onlinecourse` | `/on-demand` | course |
| 18 | `/onlinecoursedetails` | `/on-demand` | duplicate |
| 19 | `/webinarseriesvideos` | `/on-demand` | webinar sales page |
| 20 | `/overview` | `/on-demand` | duplicate |
| 21 | `/copy-of-webinar-series-overview` | `/on-demand` | duplicate |
| 22 | `/webinarseries` | `/on-demand` | purchaser page (after the buyer-access plan) |
| 23 | `/webinarcolleges` | `/on-demand` | purchaser page |
| 24 | `/copy-of-use-on-demand-course-1` | `/on-demand` | NSA Academy materials |
| 25 | `/copy-of-paid-to-peak-print-book` | `/book` | book |
| 26 | `/printbook` | `/book` | book |
| 27 | `/copy-of-paid-to-usdpeak-book` | `/book` | audiobook bundle |
| 28 | `/bookfiles` | `/resources` | book files and worksheets |
| 29 | `/contact-kevin` | `/apply` | contact/apply |
| 30 | `/accred` | `/toastmasters` (or `/about`) | AS page |
| 31 | `/toastmasterskeynote` | `/toastmasters` (or `/about`) | host page |
| 32 | `/toastmasterkeynotesponsor` | `/toastmasters` (or `/about`) | sponsor page |
| 33 | `/copy-of-speaking-professionally-toast` | `/toastmasters` (or `/resources`) | club page |

Ready-to-paste contents for `src/lib/wix-page-redirects.json`. It uses the primary targets and also covers the hidden pages from section 4. Swap the conditional targets once Kevin answers.
```json
[
  { "source": "/about-1", "destination": "/" },
  { "source": "/thankyou", "destination": "/" },
  { "source": "/coachingoptions", "destination": "/coaching" },
  { "source": "/copy-of-speaker-coaching", "destination": "/coaching" },
  { "source": "/copy-of-1-1-coaching-options-1", "destination": "/coaching" },
  { "source": "/copy-of-1-1-coaching-options", "destination": "/coaching" },
  { "source": "/1-on-1-coaching", "destination": "/coaching" },
  { "source": "/speciality-programs", "destination": "/coaching" },
  { "source": "/speakeracademy", "destination": "/coaching" },
  { "source": "/5weekchallenge", "destination": "/coaching/group" },
  { "source": "/copy-of-coaching-services", "destination": "/coaching/group" },
  { "source": "/5weekchallengeondemand", "destination": "/coaching/group" },
  { "source": "/5-week-challenge-basic-2023", "destination": "/coaching/group" },
  { "source": "/5-week-challenge-on-demand-plus-2023", "destination": "/coaching/group" },
  { "source": "/5weekchallengeplus2025", "destination": "/coaching/group" },
  { "source": "/tedxspeakercoaching", "destination": "/coaching/tedx" },
  { "source": "/tedxtraining", "destination": "/coaching/tedx" },
  { "source": "/mentorshipforspeakers", "destination": "/coaching/mentorship" },
  { "source": "/virtualandtechsolutions", "destination": "/coaching/virtual-studio" },
  { "source": "/copy-of-virtual-studio-setup", "destination": "/coaching/virtual-studio" },
  { "source": "/studioquestionandanswer", "destination": "/coaching/virtual-studio" },
  { "source": "/ultimate", "destination": "/coaching/speaker-package" },
  { "source": "/paideventcalendar1", "destination": "/event-calendar" },
  { "source": "/onlinecourse", "destination": "/on-demand" },
  { "source": "/onlinecoursedetails", "destination": "/on-demand" },
  { "source": "/webinarseriesvideos", "destination": "/on-demand" },
  { "source": "/overview", "destination": "/on-demand" },
  { "source": "/copy-of-webinar-series-overview", "destination": "/on-demand" },
  { "source": "/webinarseries", "destination": "/on-demand" },
  { "source": "/webinarcolleges", "destination": "/on-demand" },
  { "source": "/copy-of-use-on-demand-course-1", "destination": "/on-demand" },
  { "source": "/trainings", "destination": "/on-demand" },
  { "source": "/ondemand", "destination": "/on-demand" },
  { "source": "/paidplus", "destination": "/on-demand" },
  { "source": "/onlinespeakingcourse", "destination": "/on-demand" },
  { "source": "/webinars", "destination": "/on-demand" },
  { "source": "/welcome", "destination": "/vault" },
  { "source": "/welcometomastermind", "destination": "/mastermind" },
  { "source": "/copy-of-paid-to-peak-print-book", "destination": "/book" },
  { "source": "/printbook", "destination": "/book" },
  { "source": "/copy-of-paid-to-usdpeak-book", "destination": "/book" },
  { "source": "/paidtospeakbook", "destination": "/book" },
  { "source": "/paid-to-speak-book", "destination": "/book" },
  { "source": "/bookfiles", "destination": "/resources" },
  { "source": "/worksheets", "destination": "/resources" },
  { "source": "/contact-kevin", "destination": "/apply" },
  { "source": "/accred", "destination": "/toastmasters" },
  { "source": "/toastmasterskeynote", "destination": "/toastmasters" },
  { "source": "/toastmasterkeynotesponsor", "destination": "/toastmasters" },
  { "source": "/copy-of-speaking-professionally-toast", "destination": "/toastmasters" },
  { "source": "/spt", "destination": "/toastmasters" },
  { "source": "/speakingprofessionallytoastmasters", "destination": "/toastmasters" },
  { "source": "/interview", "destination": "/blog/live-interview-and-q-a-with-a-speakers-agent" },
  { "source": "/localheroes", "destination": "/blog" },
  { "source": "/blog/page/:n", "destination": "/blog" }
]
```
Notes:
- `/vault` and `/mastermind` keep their paths, so they get no redirect unless those pages aren't built. In that case add `/vault` and `/mastermind` going to `/on-demand`.
- Drop the `/blog/page/:n` rule if the new blog paginates at the same URLs. The repo has a `src/app/blog/page` directory, so check.
- Until a target page exists, either build a stub or point the rule at `/coaching` so no redirect lands on a 404.

---

## 8. Questions for Kevin (priority order)

1. **What do you still sell in 2026?** Please confirm or retire each of: 1:1 5-session and 10-session; hourly and 3-hour bundle; Speaker Assessment; Speech Review; 5-Week Challenge (BASIC/PLUS); PAID to $PEAK Intensive (2-day, 5 people); one-day PAID to SPEAK Academy; TEDx online course, TEDx bundle, TEDx Intensive (10 and 5 session); Mentorship (PRO/EMERGING/ASPIRING); Ultimate Speaker Package; On Demand course (BASIC/PLUS); Webinar Series; The Vault; Speaker Mastermind; PAID Event Calendar; Sailing Retreat; Speaking Professionally Toastmasters.
2. **Current prices.** The site shows conflicting figures (section 0.5). Which are current? For example: 10-session at $12,500 or $15,000; 5-session at $7,250, $7,500 or $10,500; On Demand at $350/$450 or $497; hourly at $125/30 min, $249 or $250/hour; 3-hour bundle at $475, $499 or $650; TEDx at "$350 – $5,000" vs $297/$697/$2,450/$7,500.
3. **Guarantees and refunds.** The new site can't carry outcome promises. Confirm dropping every "GUARANTEE" (5-Week Challenge, course, TEDx selection, "$2,500 speaking engagement within your first 6 months"). What is the actual refund policy? The agreement PDF says "non-refundable".
4. **Testimonials.** Are Brittany Stephens and Tristan Cole real clients who agreed to be quoted? Do you have other testimonials, with permission?
5. **Facts to verify before use:**
   - 90th Accredited Speaker, and the only one in 2022
   - "25+ years" (verified: 20)
   - 1,150 vs 1,500+ audiences
   - "all 50 states" / "50+ states"
   - "#1 Amazon best seller"
   - "over 500 colleges and universities"
   - TEDx: how many talks (Wake Forest and Cape May?), and the TEDxRaleigh curator/lead organizer role
   - "coached dozens/hundreds" of TEDx speakers
   - "$100,000 in fees" from TEDx
   - fee range "$10,500 to $20,000"
   - six figures within a year; former Dean of Students; former meeting planner
   - the client logo wall
6. **Buyers' access.** Past purchasers reach webinars, the course, the Vault, the Mastermind and the 5-Week replays through Wix pages, mostly password-protected. The new site won't host gated content (no LMS). Where should those deliverables live: email plus unlisted YouTube, Google Drive, or a course platform? When is it safe to redirect those URLs?
7. **Lost files.** The audiobook MP3s, eBook files (PDF/MOBI/EPUB) and the Speaker Packet were on the old WordPress kevincsnyder.com and are now 404. Do you have the originals, and do you still want to provide them?
8. **Privacy.** Can we publish a redacted version of the sample coaching program PDF (it shows your home address)? It's already in the repo as `public/files/Private_PAID_to_PEAK_Coaching_Program.pdf`. Remove the "Paul" proposal and the "for Beka" chart from public links.
9. **Toastmasters content.** Keep a `/toastmasters` page on paidtospeak.biz (AS designation, interviews, the club), or move host/sponsor material to kevincsnyder.com and redirect to `/about`? Is Speaking Professionally Toastmasters still meeting "1st Tuesday of each month from 12:00pm - 1:30pm EST"?
10. **Strategy session.** Complimentary, or a "$100 discussion fee" (TEDx page)? Which Calendly event types should stay (`paidtospeak`, `tedx`, `tedxintensive`, `virtualstudiocoaching`, `hourlycoaching`, `3-hour-bundle`, `mastermindvaultcoaching`)?
11. **MailChimp.** Is audience `4d90b7541c` (us15) the "speaker tips" list for the new opt-in? Single or double opt-in?
12. **Assistant contact.** Is Sarah Edwards (Info@InspirActiveSolutions.com) still your assistant, and should she appear anywhere? Is Kevin@KevinCSnyder.com the right public email? (No phone number appears on the Wix site.)
13. **Book (first edition).** Keep selling it alongside 2.0 (Amazon print 1505436265, eBook B083RD2TWS, audiobook)? Is the "Passion Project" autographed-copy offer still running? The "complimentary coaching call for an Amazon review" offer risks breaching Amazon's review policy; drop it?
14. **Charity and referral offers.** Is the 50% webinar donation to the Foundation of HOPE still true? What about the $250 / $100 / $49 referral rewards?
15. **Videos.** Which Wix-hosted videos (section 5.2) should we download and keep? Is it OK to show YouTube videos as click-to-load embeds on program pages? Are the webinar YouTube videos unlisted?
16. **PayPal interim.** Until the payments phase, should program pages say "Apply / talk to Kevin", or link to the existing PayPal buttons as plain outbound links (no integration)?
17. **Wix redirects.** Please export the existing Wix 301 list (Settings > SEO > URL redirects) so old aliases like `/paidtospeakbook` keep working.
