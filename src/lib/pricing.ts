// Accessors + aggregates over the verified pricing stores. Server-only reads of
// generated data (src/data/pricing/*.ts) — no client bundle, no layout shift.
//
// Comparability is config-driven (COMPARABLE_KEYS), not special-cased per
// serviceKey: only STANDARD rows whose serviceKey is in the comparable set feed
// numeric compare/sort/aggregation. intro/floor/package + membership rows never
// distort a "typical cost" figure. See
// wiki/centurion/gtm/vitalityscout-pricing-pipeline.md §2.

import { ClinicPrice } from './pricing-types';
import { DEXA_PRICING } from '@/data/pricing/dexa-pricing';
import { LABS_PRICING } from '@/data/pricing/labs-pricing';
import { WEIGHTLOSS_PRICING } from '@/data/pricing/weightloss-pricing';

export interface CityPricingStats {
  n: number;       // distinct clinics with a standard dexa-scan price
  median: number;  // median of per-clinic cheapest standard scan
  low: number;     // cheapest clinic
  high: number;    // most expensive clinic
}

// Every verified pricing store, merged for per-clinic lookups. Clinic ids are
// globally unique across verticals (Foundation #1), so a merge never collides.
const ALL_PRICING: ClinicPrice[] = [...DEXA_PRICING, ...LABS_PRICING, ...WEIGHTLOSS_PRICING];

// serviceKeys whose STANDARD rows are numerically comparable / aggregatable.
// Per-vertical single-service keys: dexa-scan (DEXA), lab-panel + single-test
// (labs). membership + package + other-lab are deliberately excluded — they are
// bundles/subscriptions/consults, not apples-to-apples unit prices.
//
// The GLP-1 program keys are deliberately NOT here: monthly recurring program
// prices must never pool with one-time unit prices, and must split by
// meds-included status. They aggregate only through getGlp1ProgramStats below.
const COMPARABLE_KEYS = new Set<string>(['dexa-scan', 'lab-panel', 'single-test']);

// A numerically comparable row: standard price on a comparable serviceKey.
function isComparable(p: ClinicPrice): boolean {
  return p.priceType === 'standard' && COMPARABLE_KEYS.has(p.serviceKey);
}

// DEXA store restricted to its comparable rows (only dexa-scan qualifies there).
function isStandardDexa(p: ClinicPrice): boolean {
  return p.serviceKey === 'dexa-scan' && isComparable(p);
}

// All pricing rows for one clinic (keyed by stable entity id), across stores.
export function getClinicPricing(clinicId: string): ClinicPrice[] {
  return ALL_PRICING.filter((p) => p.clinicId === clinicId);
}

// The single headline standard DEXA-scan price for a clinic (cheapest, when a
// clinic publishes more than one). Undefined when the clinic has no verified
// standard scan price — the caller then falls back to the estimate.
export function getStandardDexaPrice(clinicId: string): ClinicPrice | undefined {
  const rows = getClinicPricing(clinicId).filter(
    (p) => isStandardDexa(p) && typeof p.low === 'number',
  );
  if (rows.length === 0) return undefined;
  return rows.reduce((a, b) => ((a.low ?? Infinity) <= (b.low ?? Infinity) ? a : b));
}

// intro/floor dexa-scan rows — rendered ONLY with their qualifier ("first
// visit", "starting at"), never as the headline price.
export function getQualifiedDexaPrices(clinicId: string): ClinicPrice[] {
  return getClinicPricing(clinicId).filter(
    (p) => p.serviceKey === 'dexa-scan' && (p.priceType === 'intro' || p.priceType === 'floor'),
  );
}

function statsFromClinicMap(perClinic: Map<string, number>): CityPricingStats | null {
  const values = Array.from(perClinic.values()).sort((a, b) => a - b);
  const n = values.length;
  if (n === 0) return null;
  const mid = Math.floor(n / 2);
  const median = n % 2 ? values[mid] : (values[mid - 1] + values[mid]) / 2;
  return { n, median, low: values[0], high: values[n - 1] };
}

function cheapestStandardByClinic(rows: ClinicPrice[]): Map<string, number> {
  const perClinic = new Map<string, number>();
  for (const p of rows) {
    if (!isStandardDexa(p) || typeof p.low !== 'number') continue;
    const cur = perClinic.get(p.clinicId);
    if (cur === undefined || p.low < cur) perClinic.set(p.clinicId, p.low);
  }
  return perClinic;
}

// City aggregate over the passed clinic set. Null when no clinic in the set has
// a standard dexa-scan price; callers gate the visible line on n >= 3.
export function getCityPricingStats(clinicIds: string[]): CityPricingStats | null {
  const ids = new Set(clinicIds);
  const rows = DEXA_PRICING.filter((p) => ids.has(p.clinicId));
  return statsFromClinicMap(cheapestStandardByClinic(rows));
}

// National aggregate over every standard dexa-scan row in the store.
export function getNationalDexaStats(): CityPricingStats | null {
  return statsFromClinicMap(cheapestStandardByClinic(DEXA_PRICING));
}

// Most-recent asOf among the standard dexa-scan rows (national when clinicIds
// is omitted). Drives the "verified {Month} {Year}" freshness stamp.
export function getStandardDexaAsOf(clinicIds?: string[]): string | undefined {
  const ids = clinicIds ? new Set(clinicIds) : null;
  let latest: string | undefined;
  for (const p of DEXA_PRICING) {
    if (ids && !ids.has(p.clinicId)) continue;
    if (!isStandardDexa(p)) continue;
    if (!latest || p.asOf > latest) latest = p.asOf;
  }
  return latest;
}

// --- Labs (at-home lab testing) ---------------------------------------------
// The labs comparison surfaces two shapes: à-la-carte panel/test prices (the
// comparable set) and membership/subscription prices (never numerically
// compared — see §2). A provider may publish one, both, or neither.

// Flagship à-la-carte panel for a labs provider: the cheapest standard lab-panel
// (a fair "panels from" figure), falling back to the cheapest comparable
// single-test when the provider lists no panel. Undefined for
// membership/consult-only providers, which publish no à-la-carte panel.
export function getLabsFlagshipPanel(clinicId: string): ClinicPrice | undefined {
  const comparable = getClinicPricing(clinicId).filter(
    (p) => isComparable(p) && typeof p.low === 'number',
  );
  if (comparable.length === 0) return undefined;
  const panels = comparable.filter((p) => p.serviceKey === 'lab-panel');
  const pool = panels.length ? panels : comparable;
  return pool.reduce((a, b) => ((a.low ?? Infinity) <= (b.low ?? Infinity) ? a : b));
}

// Representative membership/subscription price for a labs provider: the cheapest
// standard membership row, falling back to the cheapest intro membership (shown
// with its qualifier). Undefined when the provider sells no membership.
export function getLabsMembership(clinicId: string): ClinicPrice | undefined {
  const rows = getClinicPricing(clinicId).filter(
    (p) => p.serviceKey === 'membership' && typeof p.low === 'number',
  );
  if (rows.length === 0) return undefined;
  const standard = rows.filter((p) => p.priceType === 'standard');
  const pool = standard.length ? standard : rows;
  return pool.reduce((a, b) => ((a.low ?? Infinity) <= (b.low ?? Infinity) ? a : b));
}

// --- Weight-loss / GLP-1 programs -------------------------------------------
// GLP-1 program prices are MONTHLY RECURRING and never comparable to one-time
// prices, to non-month units, or across meds-included status. They are kept out
// of COMPARABLE_KEYS and aggregated only here, through a dedicated stat that
// SPLITS by whether the medication is included. A first-month hook (intro), a
// "starting at" floor, and a multi-month package are all excluded from the
// monthly-standard pool. See the weightloss batch Gate-P1 audit + §2.

const GLP1_PROGRAM_KEYS = new Set<string>([
  'semaglutide-program',
  'tirzepatide-program',
  'glp1-program',
]);

// A qualifying monthly program row: a program serviceKey, steady-state standard
// price, priced per month. intro/floor/package and non-month units never feed
// the aggregate — a hook or a multi-month bundle is not a monthly rate.
function isStandardMonthlyProgram(p: ClinicPrice): boolean {
  return (
    GLP1_PROGRAM_KEYS.has(p.serviceKey) &&
    p.priceType === 'standard' &&
    p.unit === 'month' &&
    typeof p.low === 'number'
  );
}

// Which meds-included bucket a program row belongs to. The buckets never mix: a
// $199/mo membership-only price and a $199/mo meds-included price are not the
// same product, and an indeterminate row is neither.
type MedsBucket = 'medsIncluded' | 'medsExtra' | 'unknown';
function medsBucket(p: ClinicPrice): MedsBucket {
  if (p.medsIncluded === true) return 'medsIncluded';
  if (p.medsIncluded === false) return 'medsExtra';
  return 'unknown';
}

export interface Glp1GroupStat {
  n: number;       // distinct clinics with a qualifying monthly-standard price in this bucket
  median: number;  // median of per-clinic cheapest qualifying price
  low: number;
  high: number;
}
export interface Glp1ProgramStats {
  medsIncluded: Glp1GroupStat;  // price includes the medication (the headline group)
  medsExtra: Glp1GroupStat;     // membership-only; medication billed separately
  unknown: { n: number };       // page did not state meds inclusion — counted, never priced
}

function groupStat(perClinic: Map<string, number>): Glp1GroupStat {
  const values = Array.from(perClinic.values()).sort((a, b) => a - b);
  const n = values.length;
  if (n === 0) return { n: 0, median: 0, low: 0, high: 0 };
  const mid = Math.floor(n / 2);
  const median = n % 2 ? values[mid] : (values[mid - 1] + values[mid]) / 2;
  return { n, median, low: values[0], high: values[n - 1] };
}

// GLP-1 program aggregate over the passed clinic set (national when omitted),
// SPLIT by meds-included status. Each bucket uses ONE representative price per
// clinic — the cheapest qualifying monthly-standard row — so a clinic that
// lists several program prices counts once. Callers gate the meds-included line
// on n >= 3 and the meds-billed-separately split line on n >= 2.
export function getGlp1ProgramStats(clinicIds?: string[]): Glp1ProgramStats {
  const ids = clinicIds ? new Set(clinicIds) : null;
  const buckets: Record<MedsBucket, Map<string, number>> = {
    medsIncluded: new Map(),
    medsExtra: new Map(),
    unknown: new Map(),
  };
  for (const p of WEIGHTLOSS_PRICING) {
    if (ids && !ids.has(p.clinicId)) continue;
    if (!isStandardMonthlyProgram(p)) continue;
    const bucket = buckets[medsBucket(p)];
    const low = p.low as number;
    const cur = bucket.get(p.clinicId);
    if (cur === undefined || low < cur) bucket.set(p.clinicId, low);
  }
  return {
    medsIncluded: groupStat(buckets.medsIncluded),
    medsExtra: groupStat(buckets.medsExtra),
    unknown: { n: buckets.unknown.size },
  };
}

// Latest asOf among qualifying monthly-standard program rows (national when
// clinicIds omitted) — drives the "verified {Month} {Year}" freshness stamp.
export function getGlp1ProgramAsOf(clinicIds?: string[]): string | undefined {
  const ids = clinicIds ? new Set(clinicIds) : null;
  let latest: string | undefined;
  for (const p of WEIGHTLOSS_PRICING) {
    if (ids && !ids.has(p.clinicId)) continue;
    if (!isStandardMonthlyProgram(p)) continue;
    if (!latest || p.asOf > latest) latest = p.asOf;
  }
  return latest;
}

// The single headline monthly program price for a clinic card: the cheapest
// qualifying monthly-standard program row. Undefined when the clinic publishes
// no steady-state monthly program price — the card then keeps its estimate.
export function getGlp1ProgramPrice(clinicId: string): ClinicPrice | undefined {
  const rows = getClinicPricing(clinicId).filter(isStandardMonthlyProgram);
  if (rows.length === 0) return undefined;
  return rows.reduce((a, b) => ((a.low ?? Infinity) <= (b.low ?? Infinity) ? a : b));
}

// intro/floor program rows for a clinic — rendered ONLY with their qualifier
// ("intro offer", "starting price"), never as the headline.
export function getGlp1QualifiedPrices(clinicId: string): ClinicPrice[] {
  return getClinicPricing(clinicId).filter(
    (p) =>
      GLP1_PROGRAM_KEYS.has(p.serviceKey) &&
      (p.priceType === 'intro' || p.priceType === 'floor'),
  );
}

// Cheapest consult / visit fee for a clinic — a secondary line on the card,
// rendered by the caller ONLY when the clinic also has a headline program price
// (a consult fee alone is not program pricing).
export function getGlp1ConsultFee(clinicId: string): ClinicPrice | undefined {
  const rows = getClinicPricing(clinicId).filter(
    (p) => p.serviceKey === 'consult-fee' && typeof p.low === 'number',
  );
  if (rows.length === 0) return undefined;
  return rows.reduce((a, b) => ((a.low ?? Infinity) <= (b.low ?? Infinity) ? a : b));
}

// Deterministic, locale-free formatting (SSR-stable, no hydration/CLS drift).
const MONTHS_ABBR = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const MONTHS_LONG = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export function formatPrice(n: number): string {
  return '$' + (Number.isInteger(n) ? String(n) : n.toFixed(2));
}

export function formatAsOfMonth(iso: string, long = false): string {
  const [year, month] = iso.split('-');
  const idx = parseInt(month, 10) - 1;
  const name = (long ? MONTHS_LONG : MONTHS_ABBR)[idx] ?? month;
  return `${name} ${year}`;
}
