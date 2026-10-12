# Notes: /resources, /toastmasters, first-edition book (2026-10-12)

Files written:
- `src/content/programs/resources.ts` (`resources: Program`, href `/resources`)
- `src/content/programs/toastmasters.ts` (`toastmasters: Program`, href `/toastmasters`)
- `src/content/book-first-edition.ts` (`firstEdition`, `as const`)
- `scripts/wix-import/files-policy.json`: 13 rename entries added (existing entries kept)
- `public/files/`: 12 new files (copies; byte-identical to their sources, md5 checked)

Every published PDF's text was extracted with pypdf and checked for the [home address redacted]

## 1. Every Wix document and its decision

### Published on /resources

| Wix id(s) | Published as | Notes |
|---|---|---|
| d46abc_69611132c45b4b83a7df91656b08a895.pdf | `/files/PAID_to_PEAK_Module_1_Worksheet.pdf` | Clean. Asks readers to email it to Kevin (todo) |
| d46abc_1ba9e3220ea544e6ae77d92e2e05e75e.docx | `/files/PAID_to_PEAK_Module_1_Worksheet.docx` | Clean (author metadata "Kevin Snyder") |
| d46abc_f8311a014a2b477398bbeaca627a1548.pdf = d46abc_4c4ad5542e604fa0965c6e6318eca48e.pdf | `/files/PAID_to_PEAK_Module_2_Worksheet.pdf` | Identical files, both ids mapped |
| d46abc_067fb79e61a841e7a6af7b87f9bd85aa.pdf = d46abc_a0b0950f17174177b14bf84eb4c26eaa.pdf | `/files/PAID_to_PEAK_Module_3_Worksheet.pdf` | Identical, both mapped |
| d46abc_7364ccd342eb499fb90ea064c5c333ea.pdf = d46abc_fa17530d31ef4f1d8294f3ca1cec6772.pdf | `/files/PAID_to_PEAK_Module_4_Worksheet.pdf` | Identical, both mapped |
| d46abc_536d001ced6f479eab9c19decbe90ac1.pdf = d46abc_07b0538a28754f14b85dbc6df69ca09b.pdf | `/files/PAID_to_PEAK_Module_5_Worksheet.pdf` | Identical, both mapped |
| d46abc_68e03161ce554eb78eb61e6f83082747.pdf (= repo 0fdc10…, bf7e38…) | `/files/Speaking_Business_Checklist.pdf` (already in repo) | Reused. Framed around "$1,500, $2,500, and $3,500+ per speech" and offers a complimentary coaching call for emailing your score (todo) |
| d46abc_0462e79e3ac9408b842e65a4cae052ad.pdf (= repo f5af3d…) | `/files/Virtual_Studio_Equipment_List.pdf` (new copy of the repo file; name was already in the rename map) | Sep 2021 version, newest. amzn.to product links with 2021 prices; possible affiliate links (todo) |
| d46abc_f562e221d06b4e5cace87c98f44d8a01.pdf | `/files/Speech_Review_Feedback_Form.pdf` | Blank feedback form, book-branded, no names. Inventory marked P; published because it is a blank tool, not a Vault template with client content |
| d46abc_548322d9a5a646038b77ba8d02c31eae.pdf (repo, from blog) | `/files/Sample_TEDx_Application.pdf` (new copy; rename entry already existed) | Clean. Links to old /tedxspeakercoaching (redirects) |
| d46abc_887d51e8e6eb4d79b68edf75884fc780.pdf (repo, from blog) | `/files/Introduction_for_Kevin.pdf` (new copy; rename existed) | Published as requested, flagged: unverified claims (Disney, JetBlue, FedEx, USAF; 500+ colleges; all 50 states; "only speaker in the world" AS 2022; Guinness attempt), a family mention and an emoji in the doc |
| d46abc_b20cf2ff3a3843e691128e7f62b0497e.pdf (repo, from blog) | `/files/Sample_One_Sheet_Faculty_and_Staff.pdf` (new copy; rename existed) | Published as requested, flagged: named testimonials, client logo wall, phone 919-633-9931, "1,150+ organizations", "all 50 states", "best-selling author" |
| d46abc_7f5299aa0e254fa99816ccceb74f219c.pdf (repo, from blog) | `/files/Sample_One_Sheet_CAMPUSPEAK.pdf` (new copy; rename existed) | Published as requested, flagged: co-branded with the CAMPUSPEAK bureau (their P.O. box, phone, email), two named testimonials. Strongest candidate to pull if the caller treats bureau material as third-party |
| (no Wix id; from blog) `Coaching_Application.pdf` | `/files/Coaching_Application.pdf` (already in repo) | Clean |

### Not published

| Wix id(s) | Why |
|---|---|
| d46abc_5bb83ca695cc470787125c92df396555.pdf = d46abc_2653ab786d644a0884a06bcf17788f01.pdf (= repo `Private_PAID_to_PEAK_Coaching_Program.pdf`) | Home address ([home address redacted]|
| repo `SAMPLE_Private_PAID_to_PEAK_Coaching_Program.pdf` (no address) | **Deliberately left off /resources even though the brief listed it.** p5 reads "$2,500 speaking engagement < 6 months GUARANTEED!", plus prices ($12,500 / $7,250) and "Total value 22,000+". That contradicts the site's no-guarantee rule and the /coaching "Who this is for" copy ("Nobody can honestly promise that"). It is still linked 8 times from blog posts via the link policy. To add it anyway: one entry in the "Thinking about coaching?" downloads block of resources.ts |
| d46abc_87309f5032cb4b80a953141482556001.pdf | "Paul" proposal (privacy). Already link-mapped to the SAMPLE PDF |
| d46abc_f68d604cb7404dad9bd385863873d1d7.pdf | "for Beka" chart (named person; stale prices) |
| d46abc_4bd026bb54af4ffcb3b733a655665bd4.pdf | "NO Deal. Coaching Programs 2021" chart: stale prices, archive |
| d46abc_4ddc87d9b7df421f9d180891734a006f.pdf | Oct 2020 equipment list, superseded by the Sep 2021 version |
| d46abc_c227b1134f034f67887f6baf919c8c16.pdf (repo, from blog) | Dec 2020 equipment list, superseded. Its rename entry (`Virtual_Studio_Equipment_List_for_Speakers.pdf`) was already in the map, but that named file doesn't exist in `public/files/` yet; the blog import creates it on its next online run |
| d46abc_b9501af58f25451f96c06a238f3a2c9d.pdf | Speaker Storyboard (completed). Vault item ("Signature speech outline"), Kevin's own keynote content; PDF author metadata names a third party ("Tish Norman"). Kevin decides (todo) |
| d46abc_32c761019c844fea955754aae6b98ab8.pdf | Phone Script for Inquiries. Vault item ("Phone scripts"); author metadata "Tish Norman". Kevin decides (todo) |
| d46abc_4cf7be418b78445989b5618ae2ae5eb1.pdf | Evaluation for list building. Vault item; solicits testimonials. Kevin decides (todo) |
| d46abc_faa6dd123a654c7b8d33950d9aef4fd5.pdf | Book customization samples: client names (Orkin, a named Orkin executive, MPI Carolinas) |
| d46abc_3c28acf327784377b2d0a523a774014d.pdf | Sample slide deck: client event hashtags (#IPMAHR20, #NASPOAnnual), a family member's name; Vault item |
| d46abc_65c3140ef5ea457c97390db5482c2703.pdf | Sample slide deck: client event branding (#ASETS18); Vault item |
| d46abc_ff8670ad1a114439a5550403b62cdc5d.pdf, d46abc_e080cf569f714fe3a84cf0cc2c8190ce.pdf, d46abc_eee82e278875461f96fa820b72551118.pdf, d46abc_534c201332af4b6ea9b08c99c735428e.pdf, d46abc_6b0d8355a0ac4874b2229c15e8ee6b8e.pdf, d46abc_896012a0cdf24e59a8707f2b58bdf7ab.pdf | Webinar series decks: paid deliverables (Gated Y) |
| d46abc_90815a9fc25b495eb80f19c1a69e4bc6.pdf, d46abc_27d2446a975f4c55b6542cf46dedf0b4.pdf, d46abc_47f589ca5ec04654a1198579d1659ce9.pdf, d46abc_68a66c13e85545738e047c1fb5e92d61.pdf, d46abc_b4e9e3fb02fc4630b13d90c02488451f.pdf | NSA Speakers Academy decks: paid deliverables (Gated Y). The Google Drive recordings (5.3) likewise not linked |
| d46abc_2ca3fb49f7f443b087d409dd7a318dac.pdf (repo) | Toastmasters Accredited Speaker Handbook: third-party. /toastmasters links the official toastmasters.org AS page instead (same target as the existing link policy) |
| repo `2023_State_of_Industry.pdf` | SpeakerFlow report: third-party |
| repo `Retail_Segment.mp3` | Audiobook segment ("Recommendations Before Beginning"): book-buyer perk |
| repo `How_to_Claim_Your_Complimentary_Coaching_Call.mp3` | Blog-only audio about the review-for-coaching-call offer; not a resource |
| Lost WordPress files (audiobook MP3s, eBook PDF/MOBI/EPUB, Speaker Packet, AV checklist) | 404 and gated; todo asks Kevin |
| Wix images used as documents (invoice, lead tracker, speaking agreements, proposals, three-tier options: d46abc_2bbc9608…, 2e74072b…, b64612fe…, 1413e8d1…, 657b871a…, f209be50…) | Vault samples (P), likely client details; not reviewed for publication, not linked |

## 2. Page content intentionally not rendered

### /bookfiles, /worksheets -> /resources
- Audiobook and eBook file lists: buyer perks, all 404.
- "Kevin's Virtual Speaker Packet", "Sample AV Checklist": 404 on the old WordPress site.
- The Vault pitch, its inclusions and its "$2,500+ in discounts" / "$899 value" / "$249 value" / "$225 value" figures: value claims; the Vault has its own page. Figures recorded in `wixPrices`.
- Brittany Stephens testimonial: unverified, states an income result.
- Speaking Professionally Toastmasters logo tile: the club is covered on /toastmasters.
- Module bullet list: used in `book-first-edition.ts` instead.
- /worksheets: password-protected on Wix, no content; worksheets come from /bookfiles links.
- Rendered instead: three demo/promo YouTube videos from /bookfiles (q5LNbKujTGU, 9a1ntEqX3ns, YiT--6L_Hc8) with neutral captions (the SHRM promo title is not used).
- No link support in `text` blocks, so "Keep going" names the book, blog and coaching without links. Suggest a `links` block kind, or let `text` bodies carry links.

### /accred, /toastmasterskeynote, /toastmasterkeynotesponsor, /copy-of-speaking-professionally-toast -> /toastmasters
- "90th Accredited Speaker in program history", "only person in the world to receive this award in 2022", "Last year … the only Toastmaster in the world": unverified, in todo.
- "1,000,000 people and 1,150 audiences": conflicts with the verified 1,500+; not used.
- Coaching testimonial paragraph ("earn thousands more in the first year", "6-figure speaking business"): income claims. Only "Kevin hired a coach himself" kept, flagged in todo.
- The lower half of /accred (coaching philosophy, comparison chart PDF, sample program PDF, Speech Review, Speaker Assessment "Only $499", program card grid, Wix video 1713bcb7…, coaching overview SfJs07T5fNw): duplicates the coaching pages.
- Books QR code, amazon.com/author/kevincsnyder, PURE Vulnerability and TEDx tiles: books live on /book; the TEDx tile link is dead.
- "Inquire here" links to kevincsnyder.com/hire-kevin/ (404): replaced by a link to https://kevincsnyder.com.
- Host and sponsor videos (_pB9wyiHk6A, LFaamslKOFg, Q8wH7YbEbCA) and the demo video EPovfra-xgk: keynote booking material for kevincsnyder.com; the sponsor model is described in text instead. Todo asks Kevin.
- Host greeting ("I am truly honored to speak at your upcoming Toastmasters event") and the sponsor-page appeal: written for one specific host at a time.
- Club benefit "Over $2,500 in professional speaking resources" and "drastically improve … and earn paid speaking engagements": value and results claims.
- "Speaker Tips newsletter" plug: the site has its own newsletter section.
- /spt, /speakingprofessionallytoastmasters: members-only, no public content; listed as sources only.
- Links are rendered with the `downloads` block (the only block that takes hrefs), so they show a download icon. The magazine is a real PDF; the other four are web pages.

### /printbook, /copy-of-paid-to-peak-print-book, /copy-of-paid-to-usdpeak-book -> book-first-edition.ts
- "#1 BEST SELLER & TOP RATED": unverified (todo).
- "after speaking to over 1,000,000 people in all 50 states and around the world": "all 50 states" unverified; the 1M figure is verified but not needed here.
- "my proven process", "you should have speaking gigs lined up by the time you finish reading it", "What took me 14 years to learn should take you 4 months", "my speaking business exploded - 11 keynotes in 6 months": outcome and results claims.
- "IMPORTANT BONUS": autographed copies via the "Passion Project" Amazon seller, and "a complimentary coaching call when leaving an Amazon review" (incentivized reviews break Amazon's rules). Todo.
- Audiobook launch page: "Options for ordering": audiobook MP3s, the bundle (audio, eBook and autographed print), Trial Speaker Mastermind Group, autographed print, all PayPal buttons (LJDZUM72WDT4U, 9FRPE5YZE6CAE, EBM9VHXWFABVL, WXBHXHFFEP97G). Prices omitted on purpose; they're in PAGES-INVENTORY 0.5.
- Bonus audiobook module ("How to Write and Publish Your Book in 90 Days"): not listed as a book module until Kevin confirms it's in the print edition.
- Fiverr-watermarked mockup image and the module tile images: not referenced.
- Audiobook format has `href: null` until Kevin sends a store link.
- `book-first-edition.ts` isn't wired into `/book` yet (`src/content/book.ts` and `src/app/book/page.tsx` still use `book.firstEdition`). That's the caller's call.
