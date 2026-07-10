// Single source of truth for the directory-grid thin-content indexability bar.
//
// A state/city clinic-grid page (weight-loss, hormone-therapy, dexa-scans,
// med-spa × [state]/[state]/[city]) is only worth indexing once it lists enough
// clinics to be genuinely useful. Below the bar it stays live and crawlable
// (follow) so its internal links still flow to the money pages, but it is kept
// out of the index and out of the sitemap.
//
// TODO(site-architecture): today this is a pure clinic-count gate. The richer
// bar described in the site-architecture doc (word count, data freshness /
// staleness, unique editorial) needs uniform per-page data plumbing that does
// not exist yet. Expand this module when that lands so every call site upgrades
// at once.

export const MIN_CLINICS_FOR_INDEX = 3;

export function gridIndexable(clinicCount: number): boolean {
  return clinicCount >= MIN_CLINICS_FOR_INDEX;
}

// `robots` directive for a below-the-bar grid page: out of the index, but still
// crawled so link equity flows through.
export const NOINDEX_FOLLOW = { index: false, follow: true } as const;

// Metadata `robots` fragment for a grid page. Returns the noindex,follow
// directive when the page is below the bar, or `undefined` when it clears the
// bar so callers can spread it and inherit the default indexable state:
//   return { title, ..., ...gridRobots(clinics.length) };
export function gridRobots(
  clinicCount: number,
): { robots: typeof NOINDEX_FOLLOW } | undefined {
  return gridIndexable(clinicCount) ? undefined : { robots: NOINDEX_FOLLOW };
}
