# Growth measurement contract

Implemented September 17 and released September 19, 2026. Live PostHog pageview and provider-click delivery was verified at 19:53:42 UTC; use 19:54 UTC as the conservative funnel cutover and September 20 as the first complete UTC day. See the [release evidence](growth/release-2026-09-19.md). This verifies instrumentation, not human traffic, operational contact delivery, partnerships, bookings or revenue.

## Release status: PostHog and Google Analytics

Google Analytics was re-enabled September 19 after the owner authorized browser authentication. Enhanced Measurement is now disabled for stream `G-FLPFRH1862`, the production opt-in flag is `true`, and live sanitized pageviews/provider clicks were verified alongside PostHog. Use **2026-09-19T23:22:00Z** as the conservative GA4 reporting boundary, separately from PostHog's 19:54 UTC boundary. September 20 is the first complete UTC day afterward. See the [reactivation evidence](growth/google-analytics-reactivation-2026-09-19.md); preserve GA4's property reporting timezone and do not combine counts across instruments.

The initial release used PostHog alone at the owner's request because the read-only Google reporting account could not edit Enhanced Measurement and browser access required sign-in. That paused interval remains historical coverage, not zero traffic or an account authentication failure.

Google remains disabled by default in code: `NEXT_PUBLIC_ENABLE_GOOGLE_ANALYTICS` must equal the exact string `true` before either GA4/GTM scripts, consent initialization or the event queue can run. Existing Google IDs alone do not enable it. PostHog continues independently, and Vercel Web Analytics/Speed Insights count every visit without consent (see below). Future reactivation must retain the verified Enhanced Measurement setting and controlled checks for sanitized events and duplicate pageviews. Public environment variables require rebuilding; changing the flag alone does not change a running deployment.

## Events and denominator

| Stage | Canonical event | Meaning |
| --- | --- | --- |
| Consented page visit | PostHog `$pageview`; GA4 `page_view` | A page was viewed after analytics consent. |
| Provider action | `provider_click` | A visitor activated an explicitly marked external provider link. This is not a lead or a booking. |
| Contact request | `contact_received` | The server received a valid form and the configured email service accepted its notification with a receipt ID. This is not confirmed inbox delivery, a newsletter subscription, provider acceptance, or a booking. |
| Accepted lead | External confirmation only | A named provider accepted a referral under agreed qualification rules. No automatic event is implemented or inferred. |
| Booking / payment | External confirmation only | A provider/network confirmed a booking or settled commission. No automatic event is implemented or inferred. |

Count distinct `lead_id` for `contact_received`. Historical `lead_email_capture` and `lead_inquiry` events are preserved as compatibility aliases with the same opaque `lead_id` and `legacy_alias: true`. `form_complete` and `email_capture` are diagnostic events. **Never add these event totals together to count contacts.** Earlier events may lack attribution; leave it unknown rather than assigning organic traffic from the page topic.

The canonical browser events are sent once to PostHog and, while Google is explicitly enabled, once through its configured transport. A direct `NEXT_PUBLIC_GA4_ID` takes precedence over GTM; the application does not also load a GTM container in this mode. GA4 automatic initial pageviews are disabled and route pageviews are explicit. Remote Enhanced Measurement settings are not controlled by this code. In GTM-only mode the container must map the dataLayer events and must be audited for duplicate tags and URL/form autocapture. GA4 key events and custom dimensions require account configuration; receipt of event parameters alone does not establish their availability in every report.

## Provider link contract

Use real stable identifiers, not the visible link text:

```tsx
<a href={providerUrl}
   data-provider-id="hims"
   data-category="mens-health"
   data-placement="comparison-table">
  Check current pricing
</a>
```

Attributes can live on a containing card; the link may override category/placement. Use `data-link-purpose="source"` on editorial/source links inside such cards to exclude them. Internal links, email/phone links, unmarked citations, and source links do not count as provider referrals. Primary and middle-button activations are supported. Approved referral URLs come from the separate partner configuration; this tracker never invents affiliate parameters or puts contact details in a URL.

## Attribution and privacy

The first consented landing path, external referrer **hostname**, coarse channel, last acquisition source, and safe campaign labels persist for up to 30 days with a random journey ID. Internal navigation does not overwrite the first acquisition. A subsequent tagged/external acquisition updates the last touch. Only an observed search referrer is classified organic; search query data belongs in aggregate GSC/Bing reports, not visitor records.

No full query strings, fragments, search terms, UTM term/content, email, names, messages, conditions, or form values enter funnel analytics. Analytics properties use a fixed vocabulary. PostHog automatic DOM/form capture, heatmaps, recording, person profiles, IP geolocation, and automatic raw-URL events are disabled; a final event filter removes SDK-added person/URL/referrer payloads. Google advertising signals are disabled. Analytics consent does not load Meta Pixel or grant advertising consent.

Null/denied consent and browser DNT/GPC disable funnel analytics (PostHog, Google) and attribution storage. Withdrawal stops new funnel capture, disables Google analytics, resets PostHog, and clears both current attribution and old UTM storage; it does not affect the Vercel traffic instrument described below. The page referrer policy sends only an origin. Contact requests still work without analytics consent; they simply lack analytics attribution. Consent-selected measurements must not be described as all visitors or all contacts. Compare trends within a consistent instrument and consent regime.

Vercel Web Analytics and Speed Insights are the cookieless basic-traffic instrument and are **not** consent-gated: they load for every visit, including DNT/GPC and "Basic only" visitors, and the consent banner says so. The page URL they report is reduced to the canonical origin plus pathname (no query, fragment or UTM values; paths outside the site's slug character set are dropped rather than sent). The Web Analytics script additionally sends the external referrer on the first pageview of each hard page load, as far as the referring site's referrer policy exposes it, and Vercel derives device, browser and coarse geolocation server-side; the site's sanitizer cannot alter those fields. Treat the Vercel visitors chart as the broadest browser instrument (JavaScript-executing, non-blocking visits), not as all visitors, and keep GSC/Bing clicks as the independent acquisition denominator. PostHog/GA4 describe the consented funnel. Vercel's UTM panel stays empty by design; campaign attribution lives in the consented instruments. Speed Insights reports only while its project-level toggle is on; that toggle has been off since 2026-09-16T00:00Z (a machine-shaped timestamp of unconfirmed cause; last data 2026-09-15T15:32Z), so vitals stay empty until it is re-enabled.

The consent gate shipped in `b1e6e6b` and first served production in deployment `dpl_G2AmgjG7edcLZZxDKdSJQZjaKMjR` (`b7750c3`), Ready **2026-09-19T20:01:14Z**. From then until the restore deployment, Vercel counted only consenting visitors: 1,401 visitors in the seven UTC days before September 20 versus 2 across September 20-21. Treat that interval as a Vercel coverage gap, not a traffic drop, and do not compare it against earlier or later days. The restore is pending deployment as of this edit; its production deployment id and Ready timestamp belong in `docs/growth/vercel-analytics-restore-2026-09-21.md` once verified, and that timestamp is the gap's end boundary.

## Contact delivery configuration

Required server configuration:

- `RESEND_API_KEY`: a working credential for the approved account.
- `LEAD_NOTIFICATION_EMAIL`: an explicitly chosen, valid operational inbox. No recipient is assumed.
- Optional `LEAD_FROM_EMAIL`: an approved sender in that account. Default sender is `VitalityScout <notifications@vitalityscout.com>` and requires that domain to be verified in Resend.

Until both required values exist, the form components expose no contact inputs. Email offers link to the public `/price-index`; inquiries link to the provider directory. Availability means configuration is present, not that sender verification or delivery has been externally tested.

A resolved Resend error, missing receipt ID, exception, or missing configuration is a failed submission. A PostHog event can never produce form success. Contact details go only in the operational notification body; analytics receives an opaque contact ID and consented acquisition fields after success. Repeating an unchanged submission uses the same notification idempotency key and attribution snapshot. If consent is withdrawn and a new journey starts before a retry succeeds, success telemetry is suppressed instead of connecting the old contact to that new journey. Changed form contents produce a new submission ID. No confirmation email or newsletter sequence is sent by this implementation; the UI does not promise one. Operational follow-up ownership, inbox monitoring and a newsletter process still need an owner.

## Weekly scorecard and outcome reconciliation

Report aggregate impressions/clicks/CTR/position by query and landing page from GSC and Bing, separately. In analytics report consented page visits, provider clicks by provider/placement, distinct contact requests, and attribution coverage. Use the same date window and filters for numerator and denominator. Inspect bot/internal/test filtering rather than assuming every historical analytics event was a person.

For verified provider outcomes, maintain a separate operational reconciliation table with: opaque `lead_id` or partner-issued click ID, provider, status (`accepted`, `rejected`, `booked`, `paid`), confirmation source/reference, confirmation date, settled amount/currency and refunds. Leave unknown stages blank. Do not upload contact details or medical free text to analytics. No partner postback, conversion import, paid-outcome event, or payout assumption is shipped here. Add one only when a real provider agreement and authenticated confirmation source exist.

## Verification

Run `npm run test:growth` for mocked transport, consent, attribution, privacy, event and delivery checks. No test sends email or analytics externally. Then typecheck/build, inspect the important pages on mobile/desktop, and verify configured transport receipt with consent in a controlled production check. Do not submit a real contact or send test email without an approved recipient. Record the deployment date as a measurement change; historical rates are not directly comparable to consented funnel coverage.
