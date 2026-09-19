# Google Analytics reactivation — September 19, 2026

The owner authorized Google Analytics reauthentication after choosing PostHog for the initial growth release. The reopened browser was already authenticated to VitalityScout property `525308720`, web stream `13643622976`, measurement ID `G-FLPFRH1862`.

## Account setting

Enhanced Measurement was disabled through the authenticated Google Analytics UI. An independent Admin API read at **2026-09-19T23:12:31.956Z** confirmed `streamEnabled` false (the API omits default-false fields). Individual feature preferences remain stored but the stream-level feature is off. No account permissions, credentials, linked destinations, or advertising settings were changed.

The site's explicit `send_page_view: false` configuration and consented route events remain responsible for pageviews. See Google's [Enhanced Measurement documentation](https://support.google.com/analytics/answer/9216061?hl=en) and [manual pageview guidance](https://developers.google.com/analytics/devguides/collection/ga4/views).

## Controlled build verification

- All **19** growth regression tests passed.
- A production build with `NEXT_PUBLIC_ENABLE_GOOGLE_ANALYTICS=true` and the existing GA4 measurement ID passed compilation, TypeScript, lint and all **930** static pages. Existing provider-data lint warnings remain unchanged.
- A localhost browser test used `utm_source=internal`, `utm_medium=qa`, `utm_campaign=growth_sprint_qa` and harmless query/fragment sentinels.
- Before consent: no Google scripts or observed Google requests.
- After consent: exactly two `page_view` events for the ED and BlueChew guides and one Hims `provider_click`; all Google collection requests returned HTTP 204. The second request batched two events, so HTTP request counts are not event counts.
- Neither query nor fragment sentinel appeared in the Google collection payload. Page locations contained only the canonical origin and path. The sole Google loader was direct `gtag.js` for `G-FLPFRH1862`; no GTM container loaded.
- After selecting Necessary only, a further internal navigation produced no Google collection request. The test tab and local server were closed.
- The GA4 realtime reporting API at **23:18:08.072 UTC** returned two pageviews and one provider click, matching the controlled test. Aggregate realtime totals are corroborating evidence, not independently identified human demand.

## Production rollout

The production environment flag was set to the exact value `true`. Deployment `dpl_CivQuCgcXuhTQcx6QXJp5o64YvWi` rebuilt the existing `b7750c3` source with that flag, reached Ready and was verified assigned to `https://vitalityscout.com`.

A separate browser check on the public domain used the same explicit QA campaign and fresh harmless sentinels. It observed no Google loader before consent, then only the direct GA4 loader after consent. Exactly these three events were sent, and both collection requests returned HTTP 204:

| Event | Path | Provider |
| --- | --- | --- |
| `page_view` | `/guides/online-ed-treatment` | — |
| `provider_click` | `/guides/online-ed-treatment` | `hims` |
| `page_view` | `/guides/bluechew-cost` | — |

All three payloads contained the QA campaign, canonical page locations without queries/fragments, and none of the checked contact keys (`email`, `name`, `message`, `condition`). Neither sentinel appeared. The browser returned to Necessary only and navigated to the clean homepage afterward; no further Google collection request was observed. The QA tab was closed and the authenticated Analytics dashboard was left open.

At **2026-09-19T23:21:47.918Z**, GA4 realtime reported four pageviews and two provider clicks across the local and public checks. A separate PostHog aggregate restricted to schema version 2, `vitality-web`, the QA campaign and timestamps after 23:20 UTC returned exactly two pageviews and one provider click from the public check. These verify both transports; they are test activity, not leads or traffic growth.

Use **2026-09-19T23:22:00Z** as the conservative GA4 reporting boundary, not an assertion of the exact deployment instant. September 20 is the first complete UTC day after reactivation; GA4 reports must also retain their property reporting timezone.

## Reporting boundaries

PostHog remains an independent consented funnel source, with its existing September 19 **19:54 UTC** boundary. Google has its separate **23:22 UTC** reactivation boundary. Keep the earlier paused period and legacy coverage separate; do not sum GA4 and PostHog counts as additional people or actions.

Exclude `utm_medium=qa` or `utm_campaign=growth_sprint_qa` where the reporting surface supports these fields. If a GA4 report cannot apply the equivalent exclusion, label potential QA inclusion rather than silently treating tests as human demand. No contact, booking or revenue event was tested or inferred.
