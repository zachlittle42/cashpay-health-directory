# Vercel Analytics restore — September 21, 2026

Restores unconditional Vercel Web Analytics and Speed Insights after the September 19 release had gated both behind analytics consent. Shipped as PR #51 (`996713a`). This verifies instrumentation, not human traffic.

## Why

The consent gate shipped in `b1e6e6b` and first served production in deployment `dpl_G2AmgjG7edcLZZxDKdSJQZjaKMjR` (`b7750c3`), Ready **2026-09-19T20:01:14Z**. Vercel Web Analytics counts read through the REST count endpoint on September 21:

| Window (UTC) | Visitors | Pageviews |
| --- | ---: | ---: |
| Aug 23 – Sep 22 (30 days) | 4,272 | 5,493 |
| Sep 13 – Sep 20 (7 days) | 1,401 | 1,894 |
| Sep 20 – Sep 22 (2 days) | 2 | 2 |

Bing Webmaster reported 143 search clicks on September 19 and 19 on September 20, and Web Analytics usage sat near 5,500 of the 50,000-event Hobby allowance. The drop was measurement coverage, not traffic. The count endpoint rounds `since`/`until` to UTC day boundaries and needs millisecond timestamps; single-day windows return zeros and must not be read as empty days.

## Production rollout

Deployment `dpl_3Qv1ULT68nfsUCV5e9g7LunfsobH` (`996713a`, target production) was created 2026-09-22T04:43:38.668Z, reached Ready **2026-09-22T04:47:56.710Z**, and was aliased to `https://vitalityscout.com` at 04:47:56.955Z.

Use **2026-09-22T04:48:00Z** as the conservative end of the Vercel coverage gap. September 22 is partial; **September 23** is the first complete UTC day of restored coverage.

## Live verification

Before the restore (2026-09-22T03:57Z, production still serving `d39bb2a`): a fresh browser visit with no `vs_consent` cookie exposed no `window.va`, injected no Vercel script, and made no request to `/_vercel/*`, PostHog or Google.

After the restore, a fresh load of `/guides/online-ed-treatment?utm_source=internal&utm_medium=qa&utm_campaign=vercel_restore_qa&private=redacted#private` with no `vs_consent` cookie:

- The consent banner displayed the new copy ("Anonymous, cookieless traffic counts always run…") with the "Basic only" and "Allow analytics" choices.
- `GET /_vercel/insights/script.js` 200 and `GET /_vercel/speed-insights/script.js` 200.
- `POST /_vercel/insights/view` 200 with body `{"o":"https://vitalityscout.com/guides/online-ed-treatment","sv":"0.1.3","sdkn":"@vercel/analytics/react","sdkv":"1.6.1","ts":1790052552216,"r":""}`. No query string, fragment, UTM value or sentinel appeared.
- No PostHog or Google request was made; `window.gtag` was undefined.

After selecting "Basic only" (`vs_consent=denied`) and a client-side navigation to `/guides`:

- `POST /_vercel/insights/view` 200 with body `{"o":"https://vitalityscout.com/guides","sv":"0.1.3","sdkn":"@vercel/analytics/react","sdkv":"1.6.1","ts":1790052582424}`.
- `POST /_vercel/speed-insights/vitals` 200. The Speed Insights project toggle has been off since 2026-09-16T00:00Z, so whether Vercel retains that beacon is unverified; the Speed Insights dashboard is the only check.
- Still no PostHog or Google request.

A separate consented visit from the same QA browser at about 04:48Z (a `vs_consent=granted` cookie left by an earlier check) produced one PostHog pageview and one GA4 `page_view`, both carrying `utm_campaign=vercel_restore_qa`. Treat everything tagged `utm_medium=qa` or `utm_campaign=vercel_restore_qa` as test activity where the reporting surface supports the filter; Vercel's chart cannot apply that filter, so its September 22 count includes these QA pageviews.

## Reporting boundaries

Vercel is the broadest browser instrument (JavaScript-executing, non-blocking visits), not all visitors; GSC and Bing clicks remain the independent acquisition denominator. Do not compare Vercel counts across 2026-09-19T20:01:14Z – 2026-09-22T04:48:00Z with earlier or later days. PostHog keeps its September 19 19:54 UTC boundary and GA4 its 23:22 UTC boundary; do not sum instruments.
