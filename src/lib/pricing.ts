// Accessors + aggregates over the verified pricing store. Server-only reads of
// generated data (src/data/pricing/*.ts) — no client bundle, no layout shift.
//
// Aggregates count STANDARD dexa-scan prices only, one representative (cheapest
// published) price per clinic, so intro/floor/package rows never distort the
// "typical cost" figure. See wiki/centurion/gtm/vitalityscout-pricing-pipeline.md.

import { ClinicPrice } from './pricing-types';
import { DEXA_PRICING } from '@/data/pricing/dexa-pricing';

export interface CityPricingStats {
  n: number;       // distinct clinics with a standard dexa-scan price
  median: number;  // median of per-clinic cheapest standard scan
  low: number;     // cheapest clinic
  high: number;    // most expensive clinic
}

function isStandardDexa(p: ClinicPrice): boolean {
  return p.priceType === 'standard' && p.serviceKey === 'dexa-scan';
}

// All pricing rows for one clinic (keyed by stable entity id).
export function getClinicPricing(clinicId: string): ClinicPrice[] {
  return DEXA_PRICING.filter((p) => p.clinicId === clinicId);
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
