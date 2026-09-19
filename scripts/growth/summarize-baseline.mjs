#!/usr/bin/env node
/**
 * Print a scorecard from a sanitized aggregate baseline. No network or writes.
 * Usage: node scripts/growth/summarize-baseline.mjs docs/growth/baseline-2026-09-17.json
 */
import { readFileSync } from 'node:fs';

const filename = process.argv[2];
if (!filename) {
  console.error('Usage: node scripts/growth/summarize-baseline.mjs <aggregate-baseline.json>');
  process.exit(1);
}
let data;
try {
  data = JSON.parse(readFileSync(filename, 'utf8'));
} catch {
  console.error('Unable to read a valid aggregate baseline JSON file.');
  process.exit(1);
}
if (data.schemaVersion !== 1 || !data.google?.currentWindow || !data.bing?.currentDailyWindow) {
  console.error('Unsupported or incomplete baseline schema; expected schemaVersion 1.');
  process.exit(1);
}
const number = value => typeof value === 'number' && Number.isFinite(value)
  ? value.toLocaleString('en-US')
  : 'unavailable';
const percentChange = (current, previous) =>
  typeof current === 'number' && typeof previous === 'number' && previous > 0
    ? ((current / previous - 1) * 100).toFixed(1) + '%'
    : 'unavailable';
const window = value => value.startDate + '–' + value.endDate;
const google = data.google;
const bing = data.bing;
console.log('VitalityScout growth scorecard — ' + data.asOfDate);
console.log('Google ' + window(google.currentWindow) + ': ' + number(google.currentTotals.clicks) + ' clicks / ' + number(google.currentTotals.impressions) + ' impressions.');
console.log('Google prior ' + window(google.priorWindow) + ': ' + number(google.priorTotals.clicks) + ' clicks / ' + number(google.priorTotals.impressions) + ' impressions.');
console.log('Bing ' + window(bing.currentDailyWindow) + ': ' + number(bing.currentDailyWindow.clicks) + ' clicks / ' + number(bing.currentDailyWindow.impressions) + ' impressions.');
console.log('Bing prior ' + window(bing.priorDailyWindow) + ': ' + number(bing.priorDailyWindow.clicks) + ' clicks / ' + number(bing.priorDailyWindow.impressions) + ' impressions; clicks changed ' + percentChange(bing.currentDailyWindow.clicks, bing.priorDailyWindow.clicks) + '.');
console.log('Bing page bucket labels: ' + bing.currentWeeklyBucketDates.join(', ') + '.');
for (const path of ['/guides/online-ed-treatment', '/guides/mri-cost-without-insurance', '/guides/quest-vs-labcorp-pricing']) {
  const page = bing.currentPages.find(row => row.path === path);
  const prior = bing.priorPriorityPages.find(row => row.path === path);
  console.log(path + ': ' + number(page?.clicks) + ' clicks / ' + number(page?.impressions) + ' impressions; position ' + number(page?.position) + '; prior ' + number(prior?.clicks) + ' clicks.');
}
console.log('Google priority URL inspection (selected sample only):');
for (const row of google.inspectionSample ?? []) {
  console.log('  ' + row.path + ': ' + row.coverageState);
}
console.log('PostHog ' + data.posthog.window.startInclusive + ' to ' + data.posthog.window.endExclusive + ' exclusive: ' + number(data.posthog.pageviews) + ' pageviews; ' + number(data.posthog.pageviewDistinctIds) + ' distinct IDs.');
console.log('GA4 ' + data.ga4.startDate + '–' + data.ga4.endDate + ' (' + data.ga4.timeZone + '): ' + number(data.ga4.pageviews) + ' pageviews.');
console.log('Commercial counts:');
for (const [label, field] of [['provider clicks', 'providerClicks'], ['received contacts', 'contactsReceived'], ['qualified leads', 'qualifiedLeads'], ['booked appointments', 'bookedAppointments'], ['revenue', 'revenue']]) {
  console.log('  ' + label + ': ' + number(data.commercial[field]));
}
console.log('Comparability: Bing page buckets differ from its daily totals. GA4 and PostHog zones differ. Consent changes require a fresh consented analytics baseline; no cross-system conversion rate is calculated.');
