// Pricing types for the VitalityScout price-verification pipeline (Phase 3).
//
// A ClinicPrice is stored SEPARATELY from clinic rows (src/data/pricing/*.ts),
// keyed by the stable entity `id` (never slug), and generated from a reviewed
// extraction batch by scripts/ingest/pricing/merge_to_ts.py. Every price
// carries a verbatim citation and an asOf date so nothing renders without
// provenance. See wiki/centurion/gtm/vitalityscout-pricing-pipeline.md §2.

export type PriceType = 'standard' | 'intro' | 'floor' | 'package';
export type PriceSource = 'clinic-site' | 'call' | 'claimed' | 'estimate';

export interface ClinicPrice {
  clinicId: string;            // Foundation #1 entity id, from scripts/ingest/id_map.json
  serviceKey: string;          // 'dexa-scan' | 'rmr-test' | 'body-comp-package' | ...
  serviceLabel?: string;       // human program/panel name as printed ("Semaglutide monthly membership", "Comprehensive Health Panel")
  display: string;             // "$85/scan" — human-facing, verbatim-formatted
  low?: number;                // numeric compare/sort; intro/floor never populate the headline
  high?: number;
  unit?: string;               // 'scan' | 'month' | 'test' | 'package'
  priceType: PriceType;        // probe-driven: intro/floor render only WITH a qualifier
  medsIncluded?: boolean;      // GLP-1 memberships (med included vs not); unused for DEXA
  source: PriceSource;
  citation: { url: string; quote: string };  // verbatim span, REQUIRED for clinic-site
  confidence: number;          // 0-1
  asOf: string;                // ISO date; drives freshness + display month
}
