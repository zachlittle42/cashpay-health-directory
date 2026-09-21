# Google Analytics CLI and API access

This workspace uses the existing Google service account through a small, property-scoped CLI. No new credential, third-party analytics connection, or browser-token extraction is needed. Browser sign-in is separate from this machine's API authentication.

## Commands

Run from the website repository:

```sh
npm run analytics:google -- status
npm run analytics:google -- report --start 2026-09-18 --end 2026-09-18
npm run analytics:google -- realtime
npm run analytics:google -- disable-enhanced-measurement --apply
npm run test:analytics
```

The reporting commands read aggregate data. The only implemented write command sets this site's Enhanced Measurement to false and reads it back; omitting `--apply` cannot change the account. There are no deletion, access-management, credential-generation, arbitrary endpoint, or arbitrary property commands.

The fixed target is VitalityScout property `525308720`, web stream `13643622976`, measurement ID `G-FLPFRH1862`. Key-event/custom-dimension configuration can be inspected; the CLI does not create or modify those definitions.

## Authentication and roles

The CLI reuses `google-auth-library`, `dotenv`, and the existing environment configuration in `~/Documents/agent-os/workflows`. `GA_SA_KEY_FILE` must point to an existing service-account key. It does not copy credentials into the website repository or fall back to a temporary key file.

The existing principal is `centurion-ga-reader@gen-lang-client-0675479207.iam.gserviceaccount.com`. Its key was verified as stored outside temporary directories with file mode `600`. The key material is never written into logs, documentation, tests, or version control. Access tokens are refreshed by Google's auth library; normal reporting does not depend on the user's browser session.

Read commands request `analytics.readonly`. The explicit write command requests `analytics.edit`. OAuth scopes and Analytics property roles are separate: requesting an edit scope does not grant an account role. Combined future read/write clients must include both scopes, because `analytics.edit` alone is not an accepted Data API report scope.

Viewer grants reporting and configuration reads. Editor is the minimum role for Enhanced Measurement and custom-dimension changes; it cannot manage users. The proposed elevation is a direct Editor role on VitalityScout only, preserving inherited Viewer access and leaving other properties unchanged. Permission elevation has not yet been applied.

## Verification

At `2026-09-21T01:09:31.596Z` (September 20 Pacific), the existing Data API client successfully read an aggregate September 18 report for property `525308720`, with reporting timezone `America/Chicago`. The authenticated property-access screen separately showed inherited Viewer access and no direct role for this service account.

Live CLI checks also passed on September 20 Pacific: `status`, a September 18 aggregate `report`, `realtime`, and the write command's preview without `--apply`. Status confirmed the correct property/stream and Enhanced Measurement off. The preview returned `applied: false`; no account setting was changed by these checks. The current custom-dimension list is empty and the only listed key event is the preexisting `purchase` event. Neither implies an actual purchase or a configured lead conversion.

All **15** mocked CLI tests pass, covering fixed targets and scopes, argument/date validation, existing-credential loading, pagination, aggregate counts, no-write preview, minimal writes with independent readback, omitted false fields and sanitized failures. The script syntax check and full 930-page site build also passed. The write path uses the API's required snake-case field mask `stream_enabled`. Live mutation remains unverified while the property-role approval is pending.

Reports retain the separate PostHog/GA4 start times, consent coverage and QA exclusions described in the [measurement contract](../growth-measurement.md). This CLI's generic report and realtime outputs explicitly set `qaActivityExcluded: false`; they are diagnostics and cannot silently substitute for the filtered human-funnel scorecard. A successful API request does not establish human traffic growth or commercial outcomes.

## Why a CLI

The [official Google Analytics MCP](https://github.com/googleanalytics/google-analytics-mcp) exposes reporting and configuration reads with read-only authorization. Installing it would not resolve an Editor-permission requirement. This CLI uses the same official Admin/Data APIs directly and reuses authentication already provisioned for the reporting worker.

References: [Analytics roles](https://support.google.com/analytics/answer/9305587?hl=en), [report authorization](https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport), [Enhanced Measurement API](https://developers.google.com/analytics/devguides/config/admin/v1/rest/v1alpha/properties.dataStreams/updateEnhancedMeasurementSettings).
