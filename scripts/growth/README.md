# Growth reporting runbook

The September 17 baseline was refreshed through live, read-only APIs. It is not the older September 2 report. The JSON in docs/growth contains aggregate facts; no credentials, distinct identifiers, or contact records.

## Reproduce the local scorecard

~~~sh
node scripts/growth/summarize-baseline.mjs docs/growth/baseline-2026-09-17.json
~~~

This command is portable, uses Node built-ins only, and does not access the network or write files. Missing commercial metrics stay unavailable. It never derives a lead rate from incompatible denominators.

## Existing intended integration

Configured workspace: ~/Documents/agent-os/workflows.

- Google: src/lib/gsc-client.ts, exports searchAnalyticsQuery and listSites. Site: sc-domain:vitalityscout.com.
- GA4: src/lib/ga-client.ts, exports runReport. VitalityScout property: 525308720.
- PostHog: src/lib/posthog-client.ts, exports hogql. Scope every query to properties.$site = 'vitality-web'.
- Bing: the documented reporting workflow uses read-only GET endpoints on https://ssl.bing.com/webmaster/api.svc/json/.

The current machine ran these TypeScript modules directly under Node 26.5.0. On a runtime without native TypeScript support, use the existing workspace's installed tsx; do not install a second analytics client or copy credentials into this repository.

The existing workflows/.env supplies GSC_SA_KEY_FILE or GA_SA_KEY_FILE, BING_WMT_API_KEY, POSTHOG_HOST, POSTHOG_PROJECT_ID and POSTHOG_PERSONAL_API_KEY. Load it through its existing dotenv integration; never print it or pass a secret in command-line arguments. Read-only Search Console/GA scopes are sufficient. No credential values belong in a baseline or a commit.

The reporting clients were callable September 17. Read-only network requests required sandbox escalation on this machine. A later authentication failure is missing access, not a zero-traffic observation.

## Exact Google request shapes

Use a three-day lag, final data, equal 28-day windows. The September 17 baseline used Aug 18–Sep 14 and Jul 21–Aug 17. For each window request:

~~~json
{
  "startDate": "2026-08-18",
  "endDate": "2026-09-14",
  "dataState": "final",
  "dimensions": [],
  "rowLimit": 25000
}
~~~

Repeat with dimensions ["page"] and ["query", "page"]. Use the dimensionless response for totals. Anonymized search queries may be absent from the query report; do not reconstruct totals by summing its rows. Retain dates and dataState in the artifact.

A runnable dimensionless report, using the intended client:

~~~sh
cd "$HOME/Documents/agent-os/workflows"
node --input-type=module -e 'import "dotenv/config"; import {searchAnalyticsQuery} from "./src/lib/gsc-client.ts"; const report=await searchAnalyticsQuery("sc-domain:vitalityscout.com",{startDate:"2026-08-18",endDate:"2026-09-14",dimensions:[],rowLimit:25000,dataState:"final"}); console.log(JSON.stringify(report));'
~~~

Update dates deliberately for the next weekly run. Account access can be checked with listSites(), but retain only the VitalityScout property.

## Google URL Inspection

The existing read-only pattern is documented in ~/Documents/AgentKasten/agents/cmo/seo/tools/gsc-inspect-watch.js. Its historical URL watchlist is not this sprint's sample; use the 12 inspectionSample paths in the baseline JSON.

Authenticate with the same service account and webmasters.readonly scope, then POST a read request to https://searchconsole.googleapis.com/v1/urlInspection/index:inspect:

~~~json
{
  "inspectionUrl": "https://vitalityscout.com/guides/online-ed-treatment",
  "siteUrl": "sc-domain:vitalityscout.com"
}
~~~

Retain only path, verdict, coverageState, robotsTxtState, indexingState, pageFetchState, lastCrawlTime, canonical URLs and sitemap references. Do not call request-indexing or sitemap mutations in a reporting run. Inspect the same sample next time, keeping additions explicitly separate.

## Bing windows and aggregation

Read GetRankAndTrafficStats, GetPageStats, GetQueryStats, GetCrawlStats using BING_WMT_API_KEY in an in-process URLSearchParams value. Never log the request URL, because its query contains the key.

1. Parse each Date millisecond value and sort chronologically.
2. For site traffic, take the last 28 daily entries and prior 28; record their actual first and last dates and entry counts.
3. For page/query reports, take the last four distinct provider date buckets and prior four. Retain the exact labels, as the baseline does. Do not label these as the site daily window.
4. Aggregate duplicate page/query keys across selected buckets. Sum clicks and impressions. Compute weighted position as sum(position × impressions) / sum(impressions).
5. Keep query and page totals separate. Query coverage is incomplete; some returned rows have clicks greater than impressions. Flag these and exclude them from CTR modeling.
6. Read the latest GetCrawlStats date with InIndex, CrawledPages and CrawlErrors. InIndex is Bing-specific and can include URL variants.

The September 17 page buckets were Aug 21, Aug 28, Sep 4 and Sep 11. The daily series ended Sep 15. Never divide a page's bucket clicks by the site's daily-window clicks to calculate share.

## PostHog and GA4

PostHog uses a fixed UTC window. The baseline used timestamp >= '2026-09-10 00:00:00' and timestamp < '2026-09-17 00:00:00'. All queries filtered to properties.$site = 'vitality-web'.

Use aggregate SELECTs only:

- countIf(event = '$pageview') for pageviews.
- uniqIf(distinct_id, event = '$pageview') for a distinct-ID count, never a list of IDs.
- uniq(properties.$session_id) for the session count.
- Group count() by event for the event inventory.
- Group pageview counts by referrer host or a sanitized known public page path.
- Strip query parameters and fragments before future path grouping; retain any change in methodology.

The initial live pull removed query parameters but retained one MRI fragment variant in a separate row. Its count is preserved in this baseline rather than silently recombined with potentially overlapping distinct IDs.

No raw distinct_id, session ID, form text, email, phone, or arbitrary event-property dump belongs in the output. Never request a contact table to establish an aggregate traffic baseline.

GA4's exact body used property 525308720:

~~~json
{
  "dateRanges": [{"startDate": "2026-09-10", "endDate": "2026-09-16"}],
  "metrics": [
    {"name": "totalUsers"},
    {"name": "screenPageViews"},
    {"name": "sessions"}
  ]
}
~~~

Keep the returned GA4 reporting timezone. It was America/Chicago, which differs from the PostHog UTC window.

## Measurement cutover and lead scorecard

This baseline predates the sprint's consent/privacy changes. Live delivery was verified September 19: use `2026-09-19T19:54:00Z` as the conservative schema-v2 PostHog funnel cutover and September 20 as the first complete UTC day. See [release evidence](../../docs/growth/release-2026-09-19.md). Begin a new consented PostHog denominator; do not read lower raw counts as lost traffic without checking GSC/Bing and consent coverage. GA4 was subsequently re-enabled with sanitized explicit events and Enhanced Measurement disabled: its separate conservative boundary is `2026-09-19T23:22:00Z`. See [GA4 reactivation evidence](../../docs/growth/google-analytics-reactivation-2026-09-19.md). Keep the earlier Google pause separate, retain the GA4 reporting timezone, exclude QA where supported, and never sum GA4 and PostHog counts.

Canonical provider_click and contact_received analytics events are consented behavioral observations. Operational contact delivery, provider acceptance, bookings and revenue need their own aggregate source of truth. Keep missing values null. Do not count both canonical events and legacy aliases as separate leads.

The current production contact-delivery backend was not confirmed at collection time. A backend setup or provider partnership is separate from this read-only reporting run. Do not submit forms or manufacture a test contact to make the commercial scorecard nonzero.

Publish the next sanitized JSON under a new date, preserve this baseline, and run summarize-baseline.mjs. Record state changes and sample sizes before drawing conclusions.

## Existing report consumer migration

The website changes alone did not update the separately scheduled SEO agent. Its lead and traffic prompts initially described the old event contract. On September 17, four local and worker prompt files were migrated; both existing schedules were confirmed enabled. A September 18 follow-up applied the user's PostHog release decision, with final local/worker hashes matching. See the [migration verification](../../docs/growth/schedule-migration-2026-09-17.md). Website deployment cutover and complete telemetry coverage remain separate evidence requirements.

| Canonical signal | Required reporting fields | Meaning |
| --- | --- | --- |
| `provider_click` | `provider_id`, `destination_host`, `page_path`; configured `category` and `placement` | A consented outbound provider action, not a contact, qualified referral or booking. |
| `contact_received` | Opaque `lead_id`, `form_type`, `form_source`, `page_path` | The browser observed successful operational request acceptance. This consented event can undercount accepted requests. |
| Consented acquisition | Opaque `journey_id`, `first_landing_page`, `first_referrer_host`, `first_channel`, `last_landing_page`, `last_referrer_host`, `last_channel`; optional `utm_source`, `utm_medium`, `utm_campaign` | Sanitized first and last acquisition context. An article's form source alone does not prove organic acquisition. |

New PostHog events use `$site = 'vitality-web'` and `schema_version = 2`. Page fields contain paths without queries or fragments; referrers and destinations contain hosts. Do not request email, name, condition, message, full URLs, or email-derived identities from analytics. Export aggregate counts only, never opaque identifiers themselves.

Use only the canonical event for each scorecard stage. Deduplicate `contact_received` by `lead_id` within the reporting window; preserve the opaque ID for joins inside the query only. `lead_email_capture` and `lead_inquiry` are compatibility aliases with `legacy_alias = true` and the same `lead_id`; `email_capture` and `form_complete` are additional funnel observations, not additional contacts. Historical aliases used another identity/meaning and cannot be combined into a continuous unique-person series. Provider clicks count actions; distinct consented journeys, if reported, must be labeled separately. Never infer a conversion rate by dividing consented contacts by all GSC/Bing clicks.

Use observed `first_channel = 'organic'` for first-touch organic analytics reporting and label that attribution model. Keep first and last channel views separate. Requests without consent remain absent from behavioral analytics. Total accepted requests, provider acceptance, qualified referrals, bookings and revenue require a separately authorized operational aggregate source; unavailable values remain null.

Exclude `utm_medium = 'qa'` or `utm_campaign = 'growth_sprint_qa'` from human funnel counts, attribution and comparison windows. QA events may verify delivery separately. Record any source-specific inability to apply the exclusion; do not silently count synthetic checks as demand.

Read the current [measurement release decision](../../docs/growth-measurement.md). After verified deployment with Google collection disabled, label GA4 acquisition paused/unavailable and use GSC/Bing plus consented PostHog. An intentional Google pause is not traffic collapse. Keep historical GA4 and current PostHog as separate series; never substitute one instrument's users or journeys for the other's denominator.

The existing scheduler integration is outside this repository:

- `~/Documents/agent-os/workflows/src/setup-cron-cmo-seo.ts` defines `cmo-seo-daily-cron` and `cmo-seo-weekly-cron`. The weekly intent is Sunday 8:30 pm Pacific during daylight time, encoded at Monday 03:30 UTC; the daily intent is 6:45 am Pacific during daylight time. Fixed UTC encoding shifts local time at daylight-saving transitions.
- `~/Documents/agent-os/workflows/src/tasks/cmo-seo/workflow.ts` defines the daily and weekly DAGs. `pull-helper.ts` loads the current vault prompts at runtime. These workflows also write briefs and output-queue actions; do not trigger the whole workflow as a read-only reporting check.
- `~/Documents/AgentKasten/agents/cmo/seo/runs/pull-leads.md` was migrated from contact details in PostHog, email-derived identities and automatic organic credit for `guide_*` sources to the canonical consented contract above. Unavailable operational totals remain null.
- The sibling `pull-traffic.md` was migrated from the standing unwired `safeCapture` conclusion to verified deployment and observed canonical events. It requires the actual consent cutover and excludes QA traffic.
- Downstream `synthesize.md` now preserves dimensionless GSC totals, exact Bing bucket labels, separate measurement windows and null commercial metrics. Targeted `seo/AGENT.md` bullets match that contract. The sibling `pull-rank-tracking.md` was not edited in this prompt migration; the search aggregation guidance above still applies.

Live Hatchet registration was verified: both named schedules are enabled and match these definitions. All four migrated prompt files match between local and worker vaults; original worker files were backed up before the guarded copy. Reuse the existing schedule instead of creating an equivalent automation. No schedule mutation, workflow run or worker reload was performed. A local scorecard refresh alone does not register, run or modify a remote workflow.

At each weekly review, refresh equal search windows, recheck the fixed Google inspection sample, record deployed content and measurement changes, compare ED provider actions with the new consented denominator, and report operational stages only where a verified aggregate source exists. Preserve the dated baseline and record the next one with actual source windows and access gaps.
