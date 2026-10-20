# VitalityScout ranking strategy: state med-spa pages and evidence pages

*Prepared 2026-10-20 against `main` @ `c1a87f6`, and revised the same day after review. I have no search volumes, so there are none here. Statements marked "inference" are judgments, not measurements. The price counts in Track A were recomputed from the July 21 data using the comparable-price rule in §3.*

---

## 1. The short answer

- **Neither track will rank on Google until named people stand behind the pages, and the index stops growing.**
  - The Oct 18 audit found no technical block. It read the problem as Google judging site quality. The clearest issue is 144 pages whose structured data names a "VitalityScout Editorial Team" reviewer who never appears on the page.
  - The audit's publishing gate also applies: no net growth in indexable pages, and one URL per intent. Every new indexable URL in this plan is paired with a cut.
  - If no clinical reviewer is signed by Nov 16, pages go out with the owner as the named author and no reviewer claim.
  - Bing already ranks the site: 936 clicks in 28 days, and the ED guide sits at position 4.37. Measure there first. Whether Bing ranks new pages quickly is a hypothesis to test, not a forecast.
- **For med spas, compete on comparable price data and Texas-specific regulatory content. Skip the "near me" map results.**
  - Only Houston has comparable data today:
    - 6 clinics publish a non-member price for a product they label Botox: median $12.50/unit, range $10–$15.
    - 6–7 clinics publish a base single-session microneedling price: median $299.
  - Filler has 4 confirmed clinics, short of the 5-clinic bar.
  - Austin and San Antonio drop to 2–3 clinics once member rates and mixed-product rows are removed.
  - The single-clinic price pages and spam seen in this run's search results suggest a gap for multi-clinic, dated, source-linked prices. The search tool can't show Google's live results, so the owner checks them in week 1 (inference).
- **Go deeper in Houston before adding cities or states.**
  - Fix the city copy, and the live meta descriptions that misstate the data.
  - Ship two Houston price pages, each paired with a cut.
  - Hold off on clinic profiles, the "best of" page and dataset sales until three things are done: a data-license check, a correction form, and an attorney-reviewed template.
  - Austin, San Antonio and Florida wait on numeric gates (§5).
- **For studies and substantiation, target questions, not bare "X studies" queries.**
  - PubMed, Wikipedia and ClinicalTrials.gov own queries like "BPC-157 studies".
  - The openings are question queries: "is BPC-157 FDA approved", "BPC-157 human trials", "does NAD+ IV work".
  - In this run's tool results, startups, newsletters and spam held those queries. But Examine, Healthline, WebMD, Cleveland Clinic and Reddit never appeared in 25 queries, which points to a tool limit. On Google they probably compete (inference).
- **Evidence goes into sections of existing URLs, not new pages.** Each section carries:
  - a dated verdict
  - claims graded on a published scale
  - a study table that labels human and animal studies
  - regulatory status with links to primary documents
  - a change log
  - a visible line: "This grade is not substantiation for any product claim."
- **This 90-day window covers two evidence pieces only:** the peptide regulatory tracker and the NAD rewrite.
- **Fix the peptide guide and `/peptides` before anything links to them.**
  - The guide still says "January 2025". It calls FDA Category 2 a "finalized rule". It omits the July 2026 advisory committee review of 7 peptides. It lists doses, and its email signup promises "sourcing tips".
  - `/peptides` marks AgelessRx and others `featured: true` and calls AgelessRx a "Vetted compounding pharmacy". Its FAQ says peptides "can be prescribed off-label through a licensed clinician and a compounding pharmacy" without explaining that Category 2 substances fall outside FDA's 503A enforcement discretion.
  - `/guides/best-nad-supplement` calls NMN's status "unsettled", but FDA said on Sept 29, 2025 that NMN is not excluded from dietary supplements.
- **Don't sell claims-substantiation services, grade badges, or tracker sponsorships to anyone who sells a graded compound or a listed service.** Public grades will be quoted in ads, so the terms of use must forbid that.

---

## 2. Prerequisite: the Google trust gate

### What must be true across the whole site

| Requirement | Current state (measured) | Minimum viable version |
|---|---|---|
| A named author on every guide | 0 pages with a Person author; 335 credit Organization "VitalityScout" | The owner, named with a real bio on `/about`, as author of the guides they actually wrote or edited. A `/team/<slug>` page only once a second person exists |
| A credentialed reviewer only where review really happened | 144 invisible `reviewedBy` blocks; `/editorial-policy` says no clinical review is implied | Clinical reviewer (MD/DO or PharmD) for peptide, NAD and Botox **safety** sections. Texas-licensed health-law **attorney** for state-rules pages and clinic-facing wording; a physician can't interpret 22 TAC or the Occupations Code. Florida pages need a Florida-licensed attorney. Show a visible "Reviewed by [Name, credential] on [date], scope: [section]" line. Use `reviewedBy` markup only on pages in the review log |
| Fallback if no reviewer by **Nov 16** (end of week 4) | No candidate, no budget (`BUSINESS_PLAN.md:211` hire still unchecked) | Publish with the owner as named author (Person schema, real bio). No reviewer claim. Use the existing `/editorial-policy` wording. The state-rules explainer does not ship without an attorney |
| An Organization entity and full disclosure | No Organization node; `logo.png` referenced 22 times, returns 404 | Site-wide Organization markup with logo, `sameAs`, `contactPoint` and `publishingPrinciples`. `ownershipFundingInfo` points to `/about`, which lists every portfolio entity: Centurion Coach, Health Vault, Verdant AI Partners, the MSO and the PC. If the MSO or PC delivers cash-pay peptides, hormones, GLP-1 or aesthetics, which I can't tell from the repo, disclose that on every page that grades or vets those services |
| Honest dates | `dateModified` hardcoded (med spa: `2026-06-13`); 153 titles hardcode "2026" | `src/lib/page-dates.ts` derives the dates from data. `seo-year.ts` lands before Jan 1, 2027 |
| A policy that covers claims, not just prices | `/editorial-policy` (394 words) covers price research only | Add sections on evidence method, grading scale, literature search, conflicts of interest, corrections and disputes, and update cadence. Terms of use say grades may not be used in advertising or as substantiation |
| No net index growth | 633 indexable pages after PR #53 | A build script prints the indexable count. Each sprint ends at or below its starting count, and each new URL names the URL it replaces |

### How to build it (code)

- **`src/lib/people.ts`** holds Person records: credentials, license state and number, verification URLs, bio and review scope.
- **`src/lib/reviews.ts`** is the review log: path, reviewer id, date and scope.
- **One `<Byline>` component** draws its schema only from those two files.
- **Delete every `reviewedBy` block** that has no matching log entry.

### Why this comes first

YMYL ("Your Money or Your Life") pages are held to a higher bar for expertise and trust. Google indexed some URLs and skipped others that are technically indistinguishable, which points to trust and inventory rather than crawlability. Named people are necessary for indexing but don't guarantee it (inference).

### Bing

- Automate IndexNow on production deploys.
- Put the number and the date in titles.
- Measure each launch in Bing Webmaster Tools against the week-1 baseline.
- Bing's index feeds Copilot answers, so one-line dated verdicts with primary sources serve both.
- How fast Bing picks up new pages is a hypothesis that the week-8 gates test.

---

## 3. Track A: med spas by state and city

### Comparable-price rule (applies before any page or meta description uses a number)

- **Excluded from medians:** member, VIP, intro/new-client and minimum-unit rates. They appear in their own column on the page.
- **Neurotoxins are split by product:** Botox, Dysport, Xeomin, Jeuveau, Daxxify, and "unspecified/mixed".
  - A "Botox" median uses only rows where the clinic names Botox alone.
  - Rows like "Botox/Dysport", "Wrinkle Relaxers (Botox/Xeomin)" and "Neurotoxins" go to unspecified.
  - The price column is labeled "as listed by the clinic". The attorney confirms the trademark wording during template review.
- **Filler** counts only full 1 mL hyaluronic-acid syringes with the product named. No half syringes, and no Radiesse.
- **Microneedling** counts only a base single session. No PRP, PDRN, RF, exosome or package rows.
- **Exosome rows and any Category 2 peptide rows are never displayed**, not even outside the medians.
- **A person checks 100% of rows** on any page that puts a clinic's name next to its price. The 10% sample is for the pipeline only.
- **Live fix:** `cityBotoxPricing()` in `src/app/med-spa/[state]/[city]/page.tsx` takes each clinic's first "Botox" badge row, which can be a member rate, and prints the median as "from $X". Switch it to comparable rows, label the number "median", and suppress it below n=5.

**Recount on the July 21 data:**

| City / service | Comparable clinics | Median | Status |
|---|---|---|---|
| Houston, Botox (named, non-member) | 6 | $12.50/unit ($10–$15) | Qualifies |
| Houston, microneedling base session | 6–7 (Boss Babes "Collagen Induction Therapy" needs a label check) | $299 | Qualifies |
| Houston, filler 1 mL HA | 4 confirmed. InjectCo ("Lip Filler (Full Syringe)", $699) and Pink Beauty ("Dermal Filler (per syringe)", $450) don't name the product or size | — | Not yet. Check those two rows |
| Houston, Dysport (non-member) | 3 | — | No |
| Houston, chemical peel | Not comparable (non-medical peels through VI Peel) | — | No |
| Austin, Botox / microneedling | 3 / 3 | — | No |
| San Antonio, Botox | 2 (the other 4 are member-only rates) | — | No |
| Texas statewide, Botox | 11 of the 29 clinics with any Botox row | $12.00/unit | Restate `/guides/botox-cost-per-unit`'s n=27 |

### Which searches to target, and which to skip

| Target | Example queries | Why (tool-limited read) |
|---|---|---|
| Price per city | botox cost houston, microneedling cost houston | No multi-clinic cited comparison appeared in the results reviewed. The owner confirms on live Google and Bing in week 1 |
| Regulatory and vetting | who can inject botox in texas, how to check if a med spa is legit | Results showed law firms, B2B vendors, AmSpa and capitol.texas.gov, plus TV consumer investigations (KXAN, NewsNation, Fox 26, abc13). The gap that may exist is a primary-source, citation-grade, Texas-specific explainer. Results dominated by law firms and vendors suggest many searchers are practitioners (inference) |
| Member vs non-member pricing | med spa membership worth it | A section of `/guides/botox-cost-per-unit`, built on the separate member column, not a new URL |

**Skip:**
- "med spa near me" and map-pack queries
- neighborhood and suburb pages
- CoolSculpting by city
- Dysport-vs-Botox by city (Houston has only 3 non-member Dysport clinics)
- any city without data
- "best med spa [city]": choosing a few of 103 clinics as "best" implies the others are worse, and our criteria measure what data is available, not quality

### Page types and templates

1. **City hub** (existing `/med-spa/texas/{city}`):
   - Make the hero copy depend on actual counts. Today it says "national brands" even on Houston, which has 103 independents.
   - Show independents with comparable prices first and chains last.
   - Change "Find Locations" to "Visit website".
   - Replace the 4 rotating description templates and the default "Botox, Dermal Fillers" service lists with checked services, or drop them. That pattern is what got California noindexed.
   - Add a hub filter, "clinics that publish prices and physician details", instead of a "best of" page.
   - Add BreadcrumbList and ItemList markup.
   - Show a one-line price summary per service that links to the service page. The hub carries no full per-clinic table.
2. **City-by-service price pages:** `/med-spa/texas/houston/botox-cost` and `/med-spa/texas/houston/microneedling-cost`.
   - Contents:
     - a per-clinic table (clinic, product as listed, price, member price in its own column, source link, date checked)
     - a method note
     - a link to the Botox evidence section
   - Title is generated from data after the re-crawl, for example `Botox Cost in Houston: $12.50/unit median, 6 clinics (Oct 2026)`.
   - **URL ownership:** the service page owns "botox cost houston". `/guides/botox-cost-per-unit` owns the national "botox cost per unit" query and links down. Merge `/guides/botox-cost-guide` into it with a 301 if the week-1 baseline shows it is the weaker page. That merge counts as one of the paired cuts.
3. **Clinic profiles: not in this window.** They become eligible only after all of these:
   - the data-license gate clears
   - name, address and phone are re-derived from the clinic's site or public records
   - the correction and dispute form is live
   - an attorney has reviewed the template
   - the profile has at least 250 unique, human-written words and checked services
   Until then a clinic stays a card on the hub. When profiles are allowed, use MedicalBusiness markup with no `aggregateRating`.
4. **Texas rules explainer**, positioned as primary-source and Texas-specific, not as the only consumer resource.
   - Cite 22 TAC §169.25–169.28 (effective Jan 9, 2025) directly.
   - Say clearly that §169.28 requires the delegating physician's name and license number to be posted **on the premises**, in public areas and treatment rooms, not on the clinic's website.
   - Also cover HB 3749 (elective IV therapy, effective Sept 1, 2025), the June 2, 2025 SB 378 veto, and the TMB and Board of Nursing license lookups.
   - Red flags are generic and never sit next to named clinics.
   - Review: attorney required, plus a clinical reviewer for the safety section only. If no attorney is engaged, it doesn't ship.
5. **State hub** (`/med-spa/texas`): fix the chain-only copy, add Fort Worth, and link down.
6. **National guide:** restate the Texas comparable sample (11 clinics), split by product, add a member-rate column and a membership section, and add a med-spa section to `/price-index`.

### Data and verification pipeline (reuses the Texas process)

1. **Provenance gate (hard stop).**
   - 150 of the 200 Texas independents came from a Clay Google-Maps export (`TX_clinics_master.csv`, deduplicated by place_id). 170 rows store Google ratings.
   - The owner reads the Clay terms and any Google Maps Platform terms that apply. Until they clear, there are no profiles, no geo markup and no dataset sales.
   - Re-derive name, address and phone for every listing from the clinic's own website (the site-check step fetches it already) or from TMB and TDLR records.
   - **Delete** the `rating` and `reviewSource` fields; hiding them isn't enough.
2. **Sourcing in the repo.** Add `scripts/ingest/medspa/source_clinics.py` to record each row's origin. Seed from public records where possible, and dedupe with `mint_ids.py`.
3. **Site check.** Confirm the website returns 200. Extract services with a verbatim quote. Add suburb as its own field.
4. **Credentials.** Look up the physician's license in TMB, but only where the clinic publishes the physician's name.
   - Display wording, after attorney approval: "Dr. X, TX license #…, active per TMB lookup on [date]; we have not verified the supervision arrangement."
   - Never show an absence ("not verified", "no physician listed") on a named clinic.
5. **Pricing.**
   - Run `run_batch.py`, then the verbatim-quote filter, `classify_confidence.py`, the comparable-price rule, and the 100% human check on displayed rows.
   - Comparable rows are rare: Houston has 6 Botox clinics out of 103 independents. A metro needs 80+ independents to reach n≥5 on a single product (inference from Houston's rate).
6. **Merge.** Make `merge_to_ts.py` merge per state instead of overwriting the whole file. Replace the hardcoded state switch with a registry.
7. **One freshness rule.**
   - Re-check prices every 90 days.
   - A page is noindexed when its comparable count falls below 5 **or** its last re-check is more than 120 days old.
   - The July 21 data reaches 120 days on **Nov 18**. The re-crawl must land before then, or the live medians in the meta descriptions come down.

### Expansion order (gated; see §5)

1. **Houston** only, in this window.
2. **Austin and San Antonio:** only if a re-crawl brings each service to 5+ comparable clinics **and** the Houston gate passes.
3. **Dallas–Fort Worth:** re-source to 80+ independents. Today there are 34, which looks under-covered for the metro's size (inference).
4. **Florida:** owner decision. It starts with a "who can inject Botox in Florida" explainer reviewed by a Florida-licensed attorney, since it depends on Board of Nursing declaratory statements.
   - One search returned one AmSpa article. That isn't a read of the competition.
5. **Arizona:** later, on the same terms.

### Internal linking

- Link `/med-spa` from `/look-better` and `/price-index`.
- Link the hub to its cities, cities to service pages, and service pages to the national guide and the evidence section.
- Link the rules explainer to and from every Texas city page.
- Target: Houston goes from 6 inbound content links to 20 or more.

### Reviews, badges and links

- No third-party ratings stored or shown until provenance is clean. No `aggregateRating`. No first-party reviews.
- `/for-clinics` badges are shipped with `rel="nofollow"` or no link at all. They never depend on linking back, and referring domains from badges are not a metric. Google's spam policies list links in widely distributed badges as a link scheme.
- Earn links by pitching dated Houston price findings and the Texas rules summary to local press and trade publications.
- Launch a correction and dispute form before any new page that names a clinic. Put it on `/for-clinics`, which today has no contact path and 0 inbound links, and link it from every med-spa page. State a 10-business-day response window, which supports the Texas Defamation Mitigation Act correction process.

### Index bars

| Page | Indexed when |
|---|---|
| City hub | 5+ verified independents, 150+ unique non-template words, and copy that matches the counts |
| Service price page | 5+ distinct clinics with comparable rows, re-checked within 120 days, 100% row check passed, and the paired cut shipped |
| Rules explainer | Attorney review logged, primary citations, paired cut shipped |
| Clinic profile | Not this window. Then: provenance gate, dispute form, attorney-approved template, 250+ human-written words |
| State hub | 2+ indexable cities (existing rule) |

---

## 4. Track B: evidence and claims-substantiation content

### Content model

The layer lives in `src/lib/evidence/` and reuses the `ED_SOURCES` and `data-link-purpose="source"` pattern.

- **Study:**
  - identifiers (PMID, DOI or NCT number), title, journal, year
  - design (meta-analysis, RCT, observational, case series, animal, in vitro), species, n, duration, population, outcome
  - direction (benefit, null, harm, mixed), funding or conflict of interest, registration status
  - URL and date accessed
- **Claim:** wording that fits structure/function rules, a grade, the study ids, a "searched through" date, and the reviewer id (or "owner, no clinical review").
- **Compound or treatment:**
  - aliases
  - one regulatory row per regime (FDA approval, 503A category or bulks-list status, dietary-supplement status, WADA), each with a primary link and an "as of" date
  - a change log
  - a price module **only** for FDA-approved treatments and lawful supplements. Never for Category 2 peptides or exosome products.
- **Grade scale** on `/editorial-policy#evidence`:
  - A: consistent human RCTs or a meta-analysis
  - B: limited human RCTs
  - C: observational or uncontrolled human studies
  - D: animal or in-vitro only
  - I: insufficient or conflicting

  The scale is informed by the FTC's "competent and reliable scientific evidence" standard. Every section shows "This grade is not substantiation for any product claim", and the terms of use forbid quoting grades in advertising. There is no grade badge program.
- **Literature-search record** for each section: query strings, inclusion criteria and search date. Agents here can't fetch PubMed, FDA or TMB (WebFetch and curl are blocked; search is rationed). The owner or reviewer runs the searches and saves the primary documents to `docs/sources/`, and agents draft from those files.

### Where evidence lives (no new URLs)

| Topic | Home URL (section anchor) | This window? |
|---|---|---|
| Peptide regulatory tracker, BPC-157, TB-500 | `/guides/peptide-therapy-guide` (rebuilt at the same URL; 8 inbound links) | Yes |
| NAD+ IV | `/guides/nad-therapy-guide` | Yes |
| NMN, NR (oral) | `/guides/best-nad-supplement` | NMN status fix now; sections next window |
| Rapamycin | `/guides/rapamycin-for-longevity` | Next window |
| Urolithin A, creatine | `/supplements` | Next window, if gate E passes |

`/peptides` changes from "How to Access BPC-157 & TB-500 Safely" to a provider comparison limited to lawful, FDA-approved options. That leaves one URL per BPC-157 intent.

### Target query clusters (inference from tool-limited results; checked live in week 1)

1. **Regulatory status:** is BPC-157 FDA approved, peptides category 2, TB-500 FDA, is NMN legal.
   - The tracker's vote table covers all **7 peptides** the FDA Pharmacy Compounding Advisory Committee reviewed on July 23–24, 2026, with the use reviewed for each.
   - Secondary sources report: BPC-157 8-6 in favor (reviewed for ulcerative colitis); favorable votes for TB-500, KPV, MOTS-c, semax and epitalon; a vote against DSIP. The sources differ.
   - The table is built only from FDA meeting materials or the Federal Register, and checked by the owner or reviewer. The votes are non-binding and rulemaking is pending.
2. **Human trials:** BPC-157 human trials. Use a trials table with NCT numbers. For example, a 2025 HSS Journal review found 36 studies, 35 of them preclinical.
3. **Does it work:** does NAD+ IV therapy work. Rebuild the NAD guide around the four papers it names but doesn't link.
4. **Next window:** NMN vs NR, is urolithin A worth it, red light, microneedling, PRP.

**Skip:** bare "X studies" queries, "peptide evidence database" (it returns proteomics databases), and generic "health claim substantiation".

### How to stand out (inference)

- **Examine, Healthline, WebMD and Cleveland Clinic** probably compete on Google even though the tool didn't show them. Examine's thin coverage of compounded peptides is general knowledge I didn't verify.
- **The narrower edge:**
  - a dated one-sentence verdict
  - a published method
  - human and animal studies labeled row by row
  - regulatory status with primary links and a change log
- The peptide-vendor "evidence databases" in this run's results don't publish their methods.

### Linking to money pages without biasing the evidence

- The evidence section is finished and signed off before any commercial module is attached. The reviewer's scope is shown on the page.
- **Fix `/peptides` before anything links to it:**
  - Remove "Vetted compounding pharmacy" and `featured: true` (`src/lib/performance-products.ts`).
  - State the Category 1 vs Category 2 status accurately, with an FDA link and date.
  - Rewrite the FAQ and intro that say peptides can be compounded off-label.
- Until that's done, evidence sections link only to FDA and primary sources.
- No provider calls to action and no price modules for Category 2 or D/I-graded compounds.
- Disclose all portfolio entities wherever a grade or a vetting decision touches services they offer.
- Track evidence links and provider links separately in PostHog (`link_purpose`).

### Legal and regulatory guardrails

- **No disease claims.** Describe what was tested, not what the product does.
- **No dosing, cycling, reconstitution or sourcing content** for unapproved compounds. Remove the BPC-157 and TB-500 doses and the "sourcing tips" promise now.
- **Never apply an ingredient's grade to a brand's product.** Grades are not substantiation, and the terms say so.
- **Every regulatory statement** carries a primary link and a date.
- **Use the CLAUDE.md "Important Regulatory Notice" block** on every section about an unapproved compound.
- **FTC Endorsement Guides:** disclose material connections. Reviewers never endorse providers.
- **Reviewer contract** covers scope, conflict-of-interest declaration (including any tie to the owner's MSO or PC), and E&O insurance.
- **No tracker sponsorship** from any company that sells a graded compound or a listed service, or from a portfolio entity.

### Is a B2B claims-substantiation offer viable?

- **Buyers:** med spas, peptide and longevity telehealth clinics, and DTC supplement brands. FDA's 30 warning letters to telehealth GLP-1 marketers on Mar 3, 2026 show the pressure.
- **Competition:** this is not an open field. AmSpa (correcting the earlier draft) publishes current compliance and consumer content: the March 2026 FDA letters, the July 2026 BPC-157 vote, the 2025 Texas rule restructure, and "What to Look for in a Safe Med Spa Visit". Law firms and B2B vendors also crowd it.
- **What it would take:** a regulatory attorney (to avoid unauthorized practice of law), qualified scientists, E&O insurance, engagement letters, and a firewall from the directory.
- **Risks:**
  - liability if a client relies on our work and faces enforcement
  - conflict with rating those same clinics
  - peptide clinics are the 2026 enforcement targets
  - no SEO benefit
- **Verdict: not in the next 90 days.** Later options, in order of safety:
  1. Disclosed tracker sponsorship, only from non-conflicted sponsors.
  2. A regulatory law-firm referral partnership, after checking lawyer-advertising rules.
  3. Dataset licensing: off the table until provenance is clean. The listings are Google-derived and the price rows quote clinic text verbatim.

---

## 5. 90-day plan (Oct 20, 2026 – Jan 11, 2027)

**Fixed query list (set in week 1):**
- Med spas: botox cost houston, botox price per unit houston, microneedling cost houston, who can inject botox in texas, texas med spa rules, how to check if a med spa is legit.
- Evidence: is bpc-157 fda approved, bpc-157 human trials, peptides category 2, tb-500 fda, does nad+ iv therapy work, is nmn legal.

**Fixed 20-URL sample:**
- Control: the ED guide.
- Med spa: `/med-spa`, `/med-spa/texas`, the Houston, Austin, San Antonio and Dallas hubs.
- Botox: `/guides/botox-cost-per-unit`, `/guides/botox-cost-guide`, `/guides/botox-vs-fillers-cost`.
- Evidence and peptides: `/guides/peptide-therapy-guide`, `/peptides`, `/guides/nad-therapy-guide`, `/guides/best-nad-supplement`, `/guides/rapamycin-for-longevity`.
- Other: `/editorial-policy`, `/price-index`.
- New once live: the two Houston service pages and the Texas rules explainer.

**Indexable-URL ledger for the window:**
- Additions (up to 4): `/about`, Houston Botox, Houston microneedling, Texas rules.
- Cuts (at least 4):
  - noindex `/search` and `/beta` (audit items)
  - merge `/guides/botox-cost-guide` if the baseline supports it
  - provider profiles between 100 and 249 editorial words (count in week 1)
- Net change: zero or negative.

**Owner hours (estimates, inference):**
- baseline and live-SERP check: 3.5
- data-terms check: 1
- 100% check of live badge rows: 3 (52 clinics × 3 min)
- service-page rows: 0.5
- TMB lookups: 4.5 (52 × 5 min)
- FDA primary documents: 3
- peptide literature search: 6
- NAD literature search: 4
- reviewer and attorney sourcing: 3

That totals about 29 hours, or about 2.5 hours a week.

### Weeks 1–2 (Oct 20 – Nov 2)

| Item | Who | Depends on | Success metric |
|---|---|---|---|
| Baseline: GSC, Bing and PostHog (28 days to mid-Oct); state of each fixed query and sample URL; live Google and Bing check of the fixed queries | Owner (3.5 h) | Local credentials | Committed to `docs/growth/` |
| Indexable-count script; noindex `/search` and `/beta`; list the 100–249-word provider pool | Code | None | Count printed per build; below 633 |
| Remove 144 `reviewedBy` blocks; Organization node and logo; `/about` with owner bio and every portfolio entity disclosed | Code; owner writes bio | None | 0 unbacked `reviewedBy`; logo returns 200 |
| Correction and dispute form on `/for-clinics` (10-business-day window), linked from every med-spa page; badge code `nofollow` or unlinked | Code | None | Form live on all Texas med-spa pages |
| Comparable-price rule in `src/lib/pricing.ts`; fix `cityBotoxPricing()` | Code | None | Unit test reproduces Houston Botox n=6, $12.50 on July data; 0 "from $X" medians |
| Hub copy fixes: hero, "Find Locations", "vetted", templates and default services, independents first, BreadcrumbList and ItemList; delete rating fields | Code | None | 0 "national brands serving the metro" on Texas pages; 0 rating fields in data |
| Peptide guide emergency fix; `/peptides` fixes (featured flags, "Vetted", Category 1/2 wording, title); NMN status | Content | None | Grep finds 0 "Typical dose", "sourcing tips", "Vetted compounding pharmacy" |
| IndexNow on production deploy | Code | None | Bing submission log shows each deploy |
| Data-terms check (Clay, Google) | Owner (1 h); attorney if unclear | None | Written go/no-go in `docs/` |
| Re-crawl Texas prices; re-derive name, address and phone; fix `merge_to_ts.py` | Data (owner machine) | `ANTHROPIC_API_KEY` | `asOf` 2026-10 or later, **before Nov 18** |
| Reviewer and Texas attorney outreach; get quotes | Owner (3 h) | Budget decision | Both engaged by Nov 16, or fallback applies |

### Weeks 3–6 (Nov 3 – Nov 30)

| Item | Who | Depends on | Success metric |
|---|---|---|---|
| Nov 16 fallback decision | Owner | Outreach result | Recorded in `reviews.ts`: reviewer, or owner-only |
| `people.ts`, `reviews.ts`, `<Byline>`, `page-dates.ts` | Code | Fallback decision | Visible reviewer lines = `reviewedBy` markup; sitemap emits `lastmod` |
| `/editorial-policy` evidence and corrections sections; terms-of-use grade clause | Content; attorney reviews the clause | Attorney (clause only) | Published |
| Evidence layer components | Code | None | 0 schema citations missing from the visible list |
| Houston Botox and microneedling pages; hub summary lines; `botox-cost-guide` merge; national guide restated (11 clinics, member column, membership section) | Code and data; owner checks rows (0.5 h) | Re-crawl, comparable rule, paired cuts | 5+ comparable clinics each after check; net index count ≤ start of sprint |
| Peptide regulatory tracker with BPC-157 and TB-500 sections and a 7-peptide vote table from FDA documents | Owner (FDA 3 h, literature 6 h); content drafts | Evidence layer; saved primary documents | Every vote row cites an FDA primary document |
| TMB lookups for the 52 badge clinics (internal; not displayed yet) | Owner (4.5 h) | None | Count with an active license on record |
| Texas rules explainer | Content; attorney; clinical reviewer for safety only | Attorney engaged | Published with review logged, paired cut shipped; not published otherwise |

### Weeks 7–12 (Dec 1 – Jan 11)

| Item | Who | Depends on | Success metric |
|---|---|---|---|
| NAD IV rewrite on `/guides/nad-therapy-guide` | Owner (4 h); content | Evidence layer | Published with every named paper linked |
| Approved credential line on hub cards (only where the clinic publishes a physician) | Code | Attorney-approved wording; dispute form live | 0 absence statements on named clinics |
| Press pitches of Houston price and Texas rules findings | Owner | Pages live | Pitches sent and links earned, reported as counts with no target |
| `seo-year.ts` | Code | `page-dates.ts` | 0 mismatched title years on Jan 1 |
| **Gate H** (week 10): each Houston service page has 50+ Bing impressions in the 28 days after Bing indexes it | Owner | Baseline | Pass: Austin and San Antonio sourcing next window, if comparable n≥5. Fail: no new city or state pages; spend the next window on trust and cuts |
| **Gate E** (week 12): the peptide tracker has 100+ Bing impressions on the fixed evidence queries in 28 days | Owner | Baseline | Pass: NMN, NR and rapamycin sections next window. Fail: no new evidence sections; revisit query targets |
| Day-90 review | Owner | Fresh data | Google goal: 10+ of the 20 sample URLs indexed. If no change from baseline, stop adding page types and run the audit's unrun E-E-A-T and cannibalization lenses. Bing: clicks by page group vs week 1 |

The gate thresholds are starting points for the owner to adjust once the baseline is in.

---

## 6. What not to do

- **Don't create pages without verified independents, or fill pages with national price ranges.** Google treats that as scaled content abuse. **Don't add an indexable URL without a paired cut.**
- **Don't put member, intro or mixed-product rows in a median**, or call a mixed row "Botox".
- **Don't show prices for exosome products or Category 2 peptides.**
- **Don't store or show Google-derived ratings.** No `aggregateRating`, and no profiles, geo markup or dataset sales before the provenance gate.
- **Don't show an absence as a negative on a named clinic.** Don't call any clinic "best". Don't say "verified supervising physician" when only the license was checked.
- **Don't claim a review that didn't happen**, or name a reviewer outside their scope. No AI personas or invented credentials.
- **Don't publish dosing, cycling, reconstitution or sourcing content** for unapproved compounds. Don't route evidence readers to provider pages that misstate compounding law.
- **Don't write disease claims, or "clinically proven" from animal data.** Don't let grades serve as advertising substantiation.
- **Don't sell placement, badges, grade badges, substantiation or tracker sponsorships** to anyone who sells a graded compound or a listed service. Don't hand out followed badge links.
- **Don't publish LLM-extracted prices next to clinic names** without a 100% human check.
- **Don't change the ED guide's URL or intent.**
- **Don't buy links**, including on the hacked domains that currently rank.

---

## 7. Open decisions for the owner

1. **Reviewer and attorney budget.**
   - Clinical reviewer: MD/DO or PharmD for peptides and longevity; dermatologist or plastic surgeon for aesthetics.
   - Texas health-law attorney: rules page, clinic wording, terms clause.
   - Florida-licensed attorney, if Florida goes ahead.
   - Get quotes; I have no rates. If anyone comes from the MSO or PC side, disclose it on their reviewer page.
2. **Named author.** Confirm you will be publicly named with a real bio. That is the fallback if no reviewer is signed by Nov 16.
3. **Portfolio disclosure.** Confirm whether the MSO or PC delivers cash-pay peptides, hormones, GLP-1 or aesthetics. If so, every page that grades or vets those services discloses it.
4. **Data provenance.** Confirm the Clay and Google terms. If they don't allow republishing, re-source Texas from clinic sites and public records before any further med-spa work.
5. **Expansion.** Houston only for 90 days (recommended). Florida is funded only if gate H passes and a Florida attorney is engaged.
6. **Peptide calls to action.** Every `/peptides` entry is `direct_link` (correcting the earlier draft), so removing calls to action costs outbound clicks and any future referral deals, not current commissions. I recommend removing them from evidence content.
7. **B2B.** Shelve paid substantiation (recommended). Revisit non-conflicted sponsorship or a law-firm referral in 2027. Dataset licensing waits on provenance.

---

### Sources

- **NMN status:**
  - [Venable](https://www.venable.com/insights/publications/2025/10/fda-declares-nicotinamide-mononucleotide-is)
  - [Nutritional Outlook, Sept 30, 2025](https://www.nutritionaloutlook.com/view/fda-responds-to-citizen-petitions-on-nmn-amending-its-position-on-the-ingredient-s-status-as-a-dietary-ingredient)
  - [National Law Review](https://natlawreview.com/article/fda-determines-nmn-lawful-dietary-supplements)

  The FDA letters are dated Sept 29, 2025. NMN still requires a new dietary ingredient notification.
- **Texas rules (secondary sources):**
  - [AmSpa](https://americanmedspa.org/blog/texas-restructures-med-spa-rules)
  - [HCH Lawyers](https://hchlawyers.com/blog/2025/january/major-changes-to-texas-medical-board-rules-what-)
  - [TMLT](https://www.tmlt.org/articles/regulations-for-medical-spas-in-texas)

  The attorney checks the current 22 TAC §169.25–169.28 text before anything is published.
- **Dates cross-checked against secondary sources in the review pass:** §169.28 effective Jan 9, 2025; SB 378 veto June 2, 2025; FDA's 30 telehealth GLP-1 warning letters Mar 3, 2026; PCAC review July 23–24, 2026. Primary FDA documents still need owner verification.
- **Comparable-price counts** were recomputed from `/tmp/claude-0/-home-user-cashpay-health-directory/7cdb4e41-ce5f-5b38-abd4-c5de37c73a16/scratchpad/audit/work-strategy-medspa-assets/pricing.json` and `/tmp/claude-0/-home-user-cashpay-health-directory/7cdb4e41-ce5f-5b38-abd4-c5de37c73a16/scratchpad/audit/work-strategy-medspa-assets/independents.json`. All 490 rows are dated 2026-07-21.
---

### Verification notes (added 2026-10-20 after the plan was drafted)

Spot-checked before adoption:

- **Repo claims confirmed:**
  - `src/lib/performance-products.ts:452` labels a peptide provider a "Vetted compounding pharmacy", and several entries carry `featured: true`.
  - `/guides/peptide-therapy-guide` says "January 2025", lists "Typical dose" twice and promises "sourcing tips".
  - `/guides/best-nad-supplement` calls NMN's status "unsettled".
- **July 23–24, 2026 FDA Pharmacy Compounding Advisory Committee:**
  - The committee voted 8–6, with one abstention, to recommend adding BPC-157 (free base and acetate, evaluated for ulcerative colitis) to the 503A Bulks List.
  - The vote is advisory only. FDA still has to review the record and decide on rulemaking.
  - The seven substances reviewed were BPC-157, KPV, TB-500, MOTS-c, Semax, Epitalon and emideltide.
  - Cite FDA's own posted record, not clinic or vendor press releases. Some of those wrongly claim BPC-157 is "available now".
- **NMN:**
  - FDA letters dated Sept 29, 2025 state that NMN is *not* excluded from the dietary-supplement definition, reversing the 2022 position.
  - Niagen sued FDA over the reversal in February 2026; the outcome wasn't found. The guide should state FDA's current position **and** the pending litigation, not either one alone.
