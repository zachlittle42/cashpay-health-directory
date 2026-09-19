# VitalityScout reporting migration — September 17, 2026

The existing VitalityScout daily and weekly schedules were verified live and retained. Four reporting prompt files were updated locally and on the worker September 17. A September 18 follow-up incorporated the user's PostHog release decision. No schedule was created or changed, no workflow was triggered, and no worker reload or external message was sent.

## Verified schedule

Read-only Hatchet registration returned both entries as enabled:

| Name | Workflow | Registered UTC expression | Pacific time during daylight time |
| --- | --- | --- | --- |
| `cmo-seo-daily-cron` | `cmo-seo-daily` | `45 13 * * *` | Daily 6:45 am |
| `cmo-seo-weekly-cron` | `cmo-seo-weekly` | `30 3 * * MON` | Sunday 8:30 pm |

These workflows serve VitalityScout specifically, including GA4 property `525308720` and PostHog site `vitality-web`. Fixed UTC schedules shift Pacific wall-clock time when daylight saving time ends. Definitions remain in `~/Documents/agent-os/workflows/src/setup-cron-cmo-seo.ts` and `src/tasks/cmo-seo/workflow.ts`.

## Prompt files and delivery

Local root: `/Users/zachlittle/Documents/AgentKasten/agents/cmo/seo/`.

Worker root: `/home/zlitte/Documents/AgentKasten/agents/cmo/seo/`, resolving to `/mnt/c/Users/zlitt/Documents/AgentKasten/agents/cmo/seo/`.

Only these relative files changed:

| File | Verified local and worker SHA-256 |
| --- | --- |
| `runs/pull-leads.md` | `284e4a5715037e97d93bd8844f462726f24502df5ef1966539e6d4897b4ae5f9` |
| `runs/pull-traffic.md` | `b88e1038488263110ffb7b4ac04cb544d49a712b64dbcbb7f80e2c39f62bbffd` |
| `runs/synthesize.md` | `06cf398d112fe9eb68cfdc8a5807bd3c2e713ab87fc0e159a45fc4813fdcf34e` |
| `AGENT.md` | `6bd10d78ff9f4e8b8850854d3370f7a65c324b4ef59c27ac38a2f2bb93cf1912` |

Obsidian Sync had not propagated the edits during verification. Every worker file still matched the original local baseline. A guarded copy rechecked all original hashes, saved backups, and replaced only these four files at `2026-09-17T23:43:46Z`. A second guarded copy at `2026-09-18T11:05:31Z` updated traffic, synthesis and agent context for the PostHog release decision. The table records the final matching local/worker hashes. Original versions remain in the worker's `~/.local/state/vitalityscout-prompt-migrations/20260917T234346Z/`; pre-follow-up versions are in sibling `20260918T110531Z/`, with the same relative names.

The existing `readSeoPrompt` loader reads `runs/*.md` per task. Prompt changes therefore require no new workflow or runtime deployment. The next scheduled report's output has not been exercised by this migration.

## Measurement changes and remaining verification

The prompts distinguish provider actions, consented contact submissions, operational contacts, provider-accepted or qualified leads, bookings, and revenue. They remove email identity and contact PII from analytics queries, deduplicate canonical contacts inside aggregate queries, preserve separate first/last acquisition models, and report unavailable values as null. Verified Bing or Google evidence can justify an editorial opportunity.

The user selected PostHog for this release after the Google stream's automatic measurement settings could not be changed with the available account permissions. The prompts read the current [measurement release decision](../growth-measurement.md) and require verified deployed status. Once the release is deployed with `NEXT_PUBLIC_ENABLE_GOOGLE_ANALYTICS` absent or not exactly `true`, they label GA4/GTM collection paused and its new acquisition metrics unavailable, not zero traffic or a credential failure. They use GSC/Bing plus consented PostHog pageviews/journeys, retain historical GA4 separately, and require current evidence before treating Google as re-enabled.

Events tagged `utm_medium=qa` **or** `utm_campaign=growth_sprint_qa` are excluded from human funnel metrics across current, prior and rollup windows. QA delivery evidence can verify instrumentation separately. A GA4 report unable to apply the equivalent exclusion must retain that limitation.

This timestamp records **prompt delivery, not website deployment**. Reporting still requires the actual production revision and cutover evidence, observed schema-v2 event delivery, and complete comparable periods. Historical reports remain unchanged and separate from schema-v2 journey counts. Contact delivery and downstream commercial stages require their own verified operational source; no contact was submitted by this migration, and no commercial outcome was inferred.

The dated [baseline](baseline-2026-09-17.json) remains intact. Follow the [reporting contract](../../scripts/growth/README.md) when refreshing it.
