// Single source of truth for thin-content indexability.
//
// Two separate bars:
//   1. EXISTENCE — does a state/city grid page get generated at all? Kept at the
//      historical 3-clinic floor so no existing URL starts returning a 404.
//   2. INDEXING — is the page worth asking a search engine to index? Below the
//      bar a page stays live and crawlable (noindex,follow, so its links still
//      flow to the money pages) but is kept out of the index and the sitemap.
//
// Raised 2026-10-18 after the SEO audit (docs/seo-audit-2026-10-18.md): grid
// pages with 3–4 clinics carried roughly 33–96 unique words, single-city state
// pages near-duplicated their only city, and stale or off-mission provider
// pages diluted the index. Templates and src/app/sitemap.ts all read these
// helpers, so changing a number here moves every call site at once.

import type { Category, Provider } from './types';

// --- Grid pages (weight-loss, hormone-therapy, dexa-scans, med-spa) ----------

/** Minimum clinics for a city grid page to be generated (existence bar). */
export const MIN_CLINICS_FOR_PAGE = 3;

/** Minimum clinics for a city grid page to be indexable. */
export const MIN_CLINICS_FOR_INDEX = 5;

/** Minimum indexable cities for a state grid page to be indexable. A state with
 *  one indexable city near-duplicates that city's page, so the city ranks. */
export const MIN_INDEXABLE_CITIES_FOR_STATE = 2;

export function gridIndexable(clinicCount: number): boolean {
  return clinicCount >= MIN_CLINICS_FOR_INDEX;
}

export function stateGridIndexable(cityClinicCounts: number[]): boolean {
  return cityClinicCounts.filter(gridIndexable).length >= MIN_INDEXABLE_CITIES_FOR_STATE;
}

// `robots` directive for a below-the-bar page: out of the index, but still
// crawled so link equity flows through.
export const NOINDEX_FOLLOW = { index: false, follow: true } as const;

// Metadata `robots` fragments. Each returns the noindex,follow directive when
// the page is below its bar, or `undefined` when it clears the bar so callers
// can spread it and inherit the default indexable state:
//   return { title, ..., ...gridRobots(clinics.length) };
export function gridRobots(
  clinicCount: number,
): { robots: typeof NOINDEX_FOLLOW } | undefined {
  return gridIndexable(clinicCount) ? undefined : { robots: NOINDEX_FOLLOW };
}

export function stateGridRobots(
  cityClinicCounts: number[],
): { robots: typeof NOINDEX_FOLLOW } | undefined {
  return stateGridIndexable(cityClinicCounts) ? undefined : { robots: NOINDEX_FOLLOW };
}

// --- Provider profiles (/providers/[slug]) -----------------------------------

/** Categories outside the cash-pay care mandate (insurers, drug makers, drug
 *  databases). Their pages stay live as references but are not indexed. */
export const OFF_MISSION_PROVIDER_CATEGORIES: ReadonlySet<Category> = new Set<Category>([
  'insurance',
  'pharma',
  'drug_registry',
]);

/** Provider records not re-verified since this date show stale prices on a
 *  YMYL page and are not indexed. Bump it whenever the provider dataset is
 *  re-researched in full (last full refresh: June 2026). */
export const PROVIDER_VERIFIED_SINCE = '2025-07-01';

/** Minimum editorial words (description, take, pros/cons, services, notes) for
 *  a provider profile to be indexable. */
export const MIN_PROVIDER_EDITORIAL_WORDS = 100;

export function providerEditorialWords(provider: Provider): number {
  return [
    provider.description,
    provider.ourTake,
    provider.pricingNotes,
    provider.recoveryNotes,
    ...(provider.pros || []),
    ...(provider.cons || []),
    ...(provider.services || []),
    ...(provider.bestFor || []),
    ...(provider.includesInPackage || []),
  ]
    .filter(Boolean)
    .join(' ')
    .split(/\s+/)
    .filter(Boolean).length;
}

export function providerIndexable(provider: Provider): boolean {
  if (OFF_MISSION_PROVIDER_CATEGORIES.has(provider.category)) return false;
  if (!provider.lastVerified || provider.lastVerified < PROVIDER_VERIFIED_SINCE) return false;
  return providerEditorialWords(provider) >= MIN_PROVIDER_EDITORIAL_WORDS;
}

export function providerRobots(
  provider: Provider,
): { robots: typeof NOINDEX_FOLLOW } | undefined {
  return providerIndexable(provider) ? undefined : { robots: NOINDEX_FOLLOW };
}
