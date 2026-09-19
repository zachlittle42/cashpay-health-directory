# Growth baseline — September 17, 2026

**The ED page has broken out on Bing. Google has not indexed that page.** Protect and improve the existing ED URL, make provider choice useful, and measure referrals before expanding the content inventory.

This is a live, read-only API baseline collected September 17, using the existing reporting service account, Bing Webmaster API, and PostHog aggregate queries. No configuration was changed, no indexing request was submitted, and no contact records or credentials were retained. Machine-readable evidence: [baseline JSON](growth/baseline-2026-09-17.json).

## Acquisition evidence

| Metric | Current | Prior | Exact window |
|---|---:|---:|---|
| Bing search clicks | **936** | 349 | Aug 19–Sep 15 vs Jul 22–Aug 18; 28 daily entries each |
| Bing search impressions | **36,714** | 26,577 | Same daily windows |
| Google search clicks | **0** | 1 | Aug 18–Sep 14 vs Jul 21–Aug 17; final data |
| Google search impressions | **644** | 558 | Same Google windows |
| Google average position | 52.52 | 67.04 | Mix of all queries; not a matched-query improvement measure |

Google totals come from dimensionless Search Analytics requests. Do not sum query rows to reconstruct totals: anonymized queries are omitted, and page/query aggregation can differ. A current search-engine click is not a confirmed human visit, qualified lead, or booking.

### The existing ED page is the first growth engine

Bing's four current weekly buckets are **Aug 21, Aug 28, Sep 4, Sep 11**; the comparison buckets are **Jul 24, Jul 31, Aug 7, Aug 14**. These provider-defined weekly labels are not the daily windows above.

| Existing page | Current clicks | Current impressions | Position | Prior clicks / impressions |
|---|---:|---:|---:|---:|
| Online ED treatment | **247** | **2,992** | **4.37** | **7 / 1,014** |
| Ro weight-loss cost | 34 | 5,551 | 6.00 | — |
| LASIK cost | 26 | 788 | 7.00 | — |
| Allergy testing cost | 19 | 362 | 3.26 | — |
| MRI without insurance | 12 | 1,997 | 5.00 | 38 / 2,364 |
| Function Health review | 12 | 8,756 | 7.00 | 18 / 5,407 |
| Full-body MRI cost | 3 | 524 | 5.61 | 10 / 509 |
| Quest vs Labcorp | 2 | 72 | 4.17 | 2 / 146 |

The ED page's observed Bing CTR rose from **0.69% to 8.26%** across those four-bucket comparisons. This is evidence of traction, not proof that a specific earlier edit caused the increase. Preserve its URL and core intent while improving verified pricing, prescription requirements, comparison usefulness, and provider handoff.

Observed current Bing queries include:

| Query | Clicks | Impressions | Position |
|---|---:|---:|---:|
| order ed pills online | 14 | 71 | 3.25 |
| ed treatment online | 10 | 30 | 2.00 |
| ed online treatment | 8 | 25 | 2.76 |
| cheapest online ed treatment | 5 | 31 | 3.42 |
| sildenafil online | 3 | 7 | 2.00 |

These are query-sample counts, not search volumes. Bing's query report does not cover all page traffic; some unrelated query rows even report more clicks than impressions. Page totals and site totals are stronger anchors. Do not infer market size, causal uplift, or a forecast from the query sample.

## Google inspection findings

Twelve priority URLs were inspected on September 17. **Six were indexed, five discovered but not indexed, and one unknown.** This is a deliberate sample, not a whole-site index estimate.

| URL | Google inspection state | Last crawl, where reported |
|---|---|---|
| / | Submitted and indexed | Aug 24 |
| /guides/online-ed-treatment | **Discovered – currently not indexed** | Not reported |
| /mens-health | **Unknown to Google** | Not reported |
| /guides/mri-cost-without-insurance | **Discovered – currently not indexed** | Not reported |
| /guides/full-body-mri-scan-cost | **Discovered – currently not indexed** | Not reported |
| /guides/at-home-lab-testing-guide | Submitted and indexed | Jul 28 |
| /guides/quest-vs-labcorp-pricing | Submitted and indexed | Aug 21 |
| /guides/cheapest-blood-test-panels | Submitted and indexed | Aug 29 |
| /guides/blood-test-without-a-doctor | **Discovered – currently not indexed** | Not reported |
| /guides/function-health-review | **Discovered – currently not indexed** | Not reported |
| /labs | Submitted and indexed | Aug 25 |
| /dexa-scans | Submitted and indexed | Sep 14 |

The indexed sample has correct self canonicals, allowed indexing/robots states, and successful fetch status. Discovered pages reference the submitted sitemap but have no reported crawl. This establishes an inclusion gap; it does not identify its cause or prove a site-wide penalty.

Next: verify live 200 status, canonicals and robots for the affected URLs; strengthen relevant crawlable links from indexed hubs; preserve existing URLs; improve substantive provider/price evidence; re-inspect this same sample after deployment and report state transitions. Requesting indexing in Search Console, if used, is a separate manual action and does not guarantee inclusion.

Bing's latest crawl record is **September 13: 792 indexed URLs, 150 crawled pages, zero reported crawl errors**. Bing includes variants and legacy URLs; this count is neither Google's index count nor a count of canonical sitemap entries.

## Analytics and conversion baseline

PostHog's exact window is **September 10 00:00 UTC through September 17 00:00 UTC, exclusive**.

- Site: **1,220 pageviews**, **1,047 distinct pageview identifiers**, **1,169 sessions**.
- ED page: **784 pageviews**, **704 distinct identifiers**.
- Pageview referrers: Bing 833; DuckDuckGo 105; Yahoo 42; Google 14; direct 191. These are pageview referrers, not first-touch attribution.
- Only automatic events appeared: pageview, pageleave, autocapture. **No custom provider/contact conversion events were observed.**
- GA4 reports **14 users, 17 pageviews, 15 sessions** for September 10–16 in America/Chicago. Its date boundary differs from PostHog's UTC boundary. The large discrepancy still requires a tag/consent audit; its full cause has not been established.

Distinct identifiers do not equal verified people. Historic PostHog behavior did not consistently honor consent. The sprint changes consent handling, DNT/GPC, automatic capture, and event sanitization. **After verified deployment, start a new consented PostHog baseline. Do not compare its raw denominator or event rates directly to this pre-cutover file.** GSC and Bing remain independent acquisition anchors.

Provider clicks, successfully received contacts, qualified leads, booked care, and revenue are **unavailable, not zero**. An analytics event is not proof of care delivery. Previous August MRI captures had page-source labels but did not establish organic attribution, qualification, or booking. At collection time no production contact-delivery backend was confirmed; forms must not claim a delivered inquiry without one.

## Ranked content and product backlog

| Rank | Work | Measured reason | Done when |
|---|---|---|---|
| 1 | Improve the **existing ED comparison and provider handoff** | 247 Bing clicks; 784 weekly PostHog pageviews; commercial medication queries | Verified total-cost comparisons and clear provider CTAs work on mobile; consented provider_click is validated; no unsupported affiliation claim |
| 2 | Resolve **Google discovery/inclusion** for ED and the two MRI guides | All three are discovered but unindexed despite Bing traffic | Live technical checks and relevant indexed-hub links verified; same URL inspection sample rerun; actual state changes reported |
| 3 | Recover **MRI-without-insurance** usefulness and referral flow | 1,997 Bing impressions, 12 clicks vs 38 prior; 0.60% CTR | Body-part/contrast/facility cost distinctions and practical provider choice verified; one measured handoff path exists |
| 4 | Deepen **Quest vs Labcorp** and the indexed **labs/cheap panels** cluster | Quest 72 Bing impressions at 4.17; Google indexes Quest, cheap panels, labs | Like-for-like test basket, order requirements and source dates verified; relevant guide-to-provider links tracked |
| 5 | Assess a **narrow ED subtopic** only after the main-page funnel works | Ordering/cheapest/sildenafil terms have actual impressions | Query-to-page mapping shows a distinct unmet intent; expand the main page first where intent overlaps; avoid near-duplicate guides |
| 6 | Rework **Function Health** around comparison intent | 8,756 impressions but only 12 clicks; mostly brand navigation; Google not indexed | Use brand impressions separately; verify actual comparison demand and a useful neutral decision path before expansion |

MRI's lower CTR is an observation, not a diagnosis: review the current SERP, intent and snippet before attributing it to titles. Do not delete or redirect broad groups of pages solely because this sample has no clicks.

ED is the priority because observed demand now supports it. MRI and labs are the next experiments, not equal-volume publishing mandates. LASIK and allergy pages deserve a later commercial-fit review because they already earn clicks. New city grids remain outside this sprint.

## Weekly scorecard

Read GSC and Bing first, using the same fixed-length windows and retaining their separate date boundaries. Compare ED, MRI and labs by page. Record Google inspection transitions without extrapolating the sample.

For the funnel, keep separate counts for consented provider clicks, operationally received contacts, provider-accepted/qualified leads, confirmed bookings and revenue. Only compute a rate when numerator and denominator share period, scope and consent basis. Do not divide consented PostHog events by all search-engine clicks and call it a conversion rate.

Run the checked-in aggregate summarizer:

~~~sh
node scripts/growth/summarize-baseline.mjs docs/growth/baseline-2026-09-17.json
~~~

Collection instructions and exact read-only request shapes are in [the reporting runbook](../scripts/growth/README.md). The current JSON deliberately retains aggregates only.
