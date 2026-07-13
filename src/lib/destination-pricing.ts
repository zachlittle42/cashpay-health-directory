// Accessors + aggregates over the verified medical-tourism pricing store
// (src/data/pricing/destination-pricing.ts). Server-only reads of generated
// data — no client bundle, no layout shift. Powers the /guides/*-prices index
// pages (Costa Rica dental, Mexico dental/implant, Mexico bariatric).
//
// Two things make this store different from the domestic DEXA/labs stores:
//   1. It is multi-currency. EUR rows (Turkey) render AS PRINTED with a small,
//      clearly-dated indicative USD conversion beside them — never bare-converted
//      into a headline number.
//   2. Comparability is defined per-published-stat, not per-serviceKey. The two
//      headline medians are the audited, published definitions from the Gate-P1
//      verdict: USD standard+package rows only, floors/intro excluded. Those
//      definitions are reproduced exactly here (getDestinationStat defaults).
// See wiki/centurion/gtm/vitalityscout-tourism-operating-model.md +
// wiki/centurion/gtm/vitalityscout-pricing-pipeline.md §2.

import { ClinicPrice, PriceType } from './pricing-types';
import { DESTINATION_PRICING } from '@/data/pricing/destination-pricing';
import { DESTINATION_CLINICS, DestinationClinicMeta } from '@/data/pricing/destination-clinics';

// Indicative EUR→USD reference used ONLY to annotate as-printed EUR prices with
// a rough dollar figure. It is deliberately a single dated constant, not a live
// rate: the conversion is a reader convenience, never an authoritative price.
const EUR_USD = 1.08;
const FX_ASOF_LABEL = 'Jul 2026';

// Deterministic, locale-free USD formatting (SSR-stable — no hydration/CLS drift,
// matching the domestic pricing lib's no-locale rule).
export function fmtUsd(n: number): string {
  return '$' + Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export interface RenderedPrice {
  display: string;         // the verbatim as-printed price string ("€2,890", "$4,900 all-in")
  conversionNote?: string; // only for non-USD rows: "≈$3,120 at Jul 2026 rates"
}

// Currency-aware render. USD (and unspecified-currency) rows show their printed
// display unchanged. EUR rows keep their printed euro display and gain a small
// indicative-dollar note; the euro figure is never overwritten by a converted
// dollar figure.
export function renderClinicPrice(p: ClinicPrice): RenderedPrice {
  if (p.currency && p.currency !== 'USD' && typeof p.low === 'number') {
    if (p.currency === 'EUR') {
      const approx = fmtUsd(p.low * EUR_USD);
      return { display: p.display, conversionNote: `≈${approx} at ${FX_ASOF_LABEL} rates` };
    }
    // Any other stated currency: show as printed, no invented conversion.
    return { display: p.display };
  }
  return { display: p.display };
}

// --- Clinic metadata -------------------------------------------------------

export function getClinicMeta(clinicId: string): DestinationClinicMeta | undefined {
  return DESTINATION_CLINICS[clinicId];
}

// Distinct clinic ids in a crawl cluster that actually have a verified price,
// sorted by clinic name for stable render order.
export function clinicIdsInCluster(cluster: string): string[] {
  const withPrices = new Set(DESTINATION_PRICING.map((p) => p.clinicId));
  return Object.keys(DESTINATION_CLINICS)
    .filter((id) => DESTINATION_CLINICS[id].cluster === cluster && withPrices.has(id))
    .sort((a, b) => DESTINATION_CLINICS[a].name.localeCompare(DESTINATION_CLINICS[b].name));
}

// --- Per-clinic price lookups ----------------------------------------------

// All verified rows for one clinic, optionally restricted to a set of serviceKeys.
export function clinicPrices(clinicId: string, serviceKeys?: string[]): ClinicPrice[] {
  const keys = serviceKeys ? new Set(serviceKeys) : null;
  return DESTINATION_PRICING.filter(
    (p) => p.clinicId === clinicId && (!keys || keys.has(p.serviceKey)),
  );
}

// The representative cell price for a clinic × serviceKey: the cheapest verified
// row for that service. Its `display` already carries any "from/starting"
// qualifier, so a floor price never reads as a clean fixed price. Undefined when
// the clinic published nothing for that service.
export function cheapestPrice(clinicId: string, serviceKey: string): ClinicPrice | undefined {
  const rows = clinicPrices(clinicId, [serviceKey]).filter((p) => typeof p.low === 'number');
  if (rows.length === 0) return undefined;
  return rows.reduce((a, b) => ((a.low ?? Infinity) <= (b.low ?? Infinity) ? a : b));
}

// --- Aggregates (published-stat definitions) -------------------------------

export interface DestinationStat {
  n: number;      // number of qualifying verified rows (per-row, not per-clinic)
  median: number;
  low: number;
  high: number;
}

// A verified-price median over the store, reproducing the audited publication
// definitions. Defaults are the locked rule: USD only, standard+package price
// types (floors/intro excluded). clusters=undefined aggregates every cluster
// (the destination-wide stat, e.g. the All-on-4 median); pass a cluster list to
// scope to one geography. Median/low/high are over the row `low` values.
export function getDestinationStat(opts: {
  serviceKey: string;
  clusters?: string[];
  priceTypes?: PriceType[];
  currency?: string;
}): DestinationStat | null {
  const priceTypes = new Set<PriceType>(opts.priceTypes ?? ['standard', 'package']);
  const currency = opts.currency ?? 'USD';
  const clusters = opts.clusters ? new Set(opts.clusters) : null;

  const lows: number[] = [];
  for (const p of DESTINATION_PRICING) {
    if (p.serviceKey !== opts.serviceKey) continue;
    if ((p.currency ?? 'USD') !== currency) continue;
    if (!priceTypes.has(p.priceType)) continue;
    if (typeof p.low !== 'number') continue;
    if (clusters) {
      const meta = DESTINATION_CLINICS[p.clinicId];
      if (!meta || !clusters.has(meta.cluster)) continue;
    }
    lows.push(p.low);
  }
  if (lows.length === 0) return null;
  lows.sort((a, b) => a - b);
  const mid = Math.floor(lows.length / 2);
  const median = lows.length % 2 ? lows[mid] : (lows[mid - 1] + lows[mid]) / 2;
  return { n: lows.length, median, low: lows[0], high: lows[lows.length - 1] };
}

// Latest asOf among rows matching a service (optionally scoped to clusters) —
// drives the "verified {Month} {Year}" freshness stamp. Falls back to the whole
// store's latest asOf when serviceKey is omitted.
export function getDestinationAsOf(serviceKey?: string, clusters?: string[]): string | undefined {
  const clusterSet = clusters ? new Set(clusters) : null;
  let latest: string | undefined;
  for (const p of DESTINATION_PRICING) {
    if (serviceKey && p.serviceKey !== serviceKey) continue;
    if (clusterSet) {
      const meta = DESTINATION_CLINICS[p.clinicId];
      if (!meta || !clusterSet.has(meta.cluster)) continue;
    }
    if (!latest || p.asOf > latest) latest = p.asOf;
  }
  return latest;
}
