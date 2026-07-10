import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import { CATEGORIES } from '@/lib/types';
import { HORMONE_STATES } from '@/lib/hormone-clinic-types';
import { WEIGHTLOSS_STATES } from '@/lib/weightloss-clinic-types';
import { getCitiesWithClinics, getHormoneClinicsByState } from '@/data/hormone-clinics-index';
import { getWeightLossCitiesWithClinics, getWeightLossClinicsByState } from '@/data/weightloss-clinics-index';
import { DEXA_STATES } from '@/lib/dexa-clinic-types';
import { getDexaCitiesWithClinics, getDexaClinicsByState } from '@/data/dexa-clinics-index';
import { MEDSPA_STATES } from '@/lib/medspa-clinic-types';
import { getMedspaCitiesWithClinics, getMedspaClinicsByState } from '@/data/medspa-clinics-index';
import { MIN_CLINICS_FOR_INDEX } from '@/lib/indexability';
import { BAYAREA_REGIONS } from '@/lib/bayarea-clinics-data';
import { SOCAL_REGIONS } from '@/lib/socal-clinics-data';

const baseUrl = 'https://vitalityscout.com';

// Grid pages (weight-loss / hormone-therapy / dexa-scans / med-spa) below
// MIN_CLINICS_FOR_INDEX are noindexed by their own template's generateMetadata,
// so the sitemap must not advertise them either (a sitemap should never list a
// noindexed URL). The threshold is imported from @/lib/indexability so the
// sitemap and the templates can never drift apart.

// Routes that exist as static pages but should NOT be advertised to crawlers
// (utility/landing pages with no SEO value or that intentionally stay out of the index).
const EXCLUDED_STATIC_ROUTES = new Set<string>([
  '/beta',
  '/centurioncoach',
  '/search',
  // Deindexed (noindex,follow) — kept live + crawlable but out of the index and
  // the sitemap. Persona/section duplicates that collapse onto an already-served
  // money vertical (/lose-weight → /glp1 + /weight-loss, /balance-hormones →
  // /trt + /hormone-therapy) and the two static entry points of the pruned
  // traditional-healthcare family (its dynamic pages are dropped below).
  '/lose-weight',
  '/balance-hormones',
  '/traditional-healthcare',
  '/traditional-healthcare/california',
]);

// Destinations enumerated by destinations/[destination] generateStaticParams.
// Kept in sync with the DESTINATIONS map in that route's data.
const DESTINATION_SLUGS = [
  'mexico',
  'turkey',
  'south-korea',
  'thailand',
  'india',
  'costa-rica',
  'spain',
  'czech-republic',
  'panama',
  'colombia',
  'cayman-islands',
  'dubai',
  'brazil',
  'hungary',
];

// ---------------------------------------------------------------------------
// 1. STATIC ROUTE AUTO-DISCOVERY
// ---------------------------------------------------------------------------
// Walk src/app at build time and collect every directory that contains a
// page.tsx AND whose path has no dynamic ('[...]') segment. This auto-includes
// every guide, faq, hub, longevity/* static page, stem-cells/*, local-clinics
// static, traditional-healthcare/california, etc. — so new static pages are
// picked up automatically and the sitemap can never go stale again.
function discoverStaticRoutes(appDir: string): string[] {
  const routes: string[] = [];

  function walk(dir: string, urlPath: string) {
    let entries: fs.Dirent[];
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch {
      return;
    }

    // A directory is a route if it has a page file and the path is fully static.
    const hasPage = entries.some(
      (e) => e.isFile() && /^page\.(tsx|ts|jsx|js)$/.test(e.name),
    );
    if (hasPage && !urlPath.includes('[')) {
      routes.push(urlPath === '' ? '/' : urlPath);
    }

    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      const name = entry.name;
      // Skip Next.js route groups '(group)', private '_dir', and api routes.
      if (name.startsWith('_') || name === 'api') continue;
      const childUrl = name.startsWith('(')
        ? urlPath // route groups don't add a path segment
        : `${urlPath}/${name}`;
      walk(path.join(dir, name), childUrl);
    }
  }

  walk(appDir, '');
  return routes;
}

// Hardcoded fallback: the known-good static surface. Used only if the fs walk
// throws (so a build never fails on sitemap generation).
const STATIC_ROUTE_FALLBACK: string[] = [
  '/',
  '/telehealth',
  '/local-clinics',
  '/local-clinics/bay-area',
  '/local-clinics/southern-california',
  '/medical-tourism',
  '/traditional-healthcare',
  '/traditional-healthcare/california',
  '/longevity',
  '/longevity/california',
  '/longevity/florida',
  '/longevity/new-york',
  '/longevity/texas',
  '/guides',
  '/faq',
  '/faq/glp1',
  '/faq/hair-transplant',
  '/faq/labs',
  '/faq/medical-tourism',
  '/hormone-therapy',
  '/weight-loss',
  '/stem-cells',
  '/stem-cells/mexico',
  '/stem-cells/panama',
  '/stem-cells/usa',
];

function priorityForStatic(route: string): number {
  if (route === '/') return 1;
  // Top-level hubs get the highest non-home priority.
  const depth = route.split('/').filter(Boolean).length;
  if (depth === 1) return 0.9;
  if (depth === 2) return 0.8;
  return 0.7;
}

// ---------------------------------------------------------------------------
// 2 + 3. DYNAMIC ROUTE ENUMERATION (data-backed, never emits dead URLs)
// providers/[slug] are omitted (prerendered but non-directory). Grid state/city
// URLs below MIN_CLINICS_FOR_INDEX clinics are omitted to match the templates'
// thin-content noindex, so the sitemap never advertises a noindexed URL.
// ---------------------------------------------------------------------------
function buildDynamicUrls(): string[] {
  const urls: string[] = [];

  // [category] — every key in CATEGORIES renders a page (incl. "coming soon").
  for (const category of Object.keys(CATEGORIES)) {
    urls.push(`/${category}`);
  }

  // providers/[slug] are intentionally NOT enumerated here. All 315 are now
  // prerendered (see providers/[slug] generateStaticParams) and self-canonical,
  // but they carry unique editorial rather than directory-grid value, so they
  // stay out of the sitemap to keep crawl budget on the money pages.

  // destinations/[destination]
  for (const slug of DESTINATION_SLUGS) {
    urls.push(`/destinations/${slug}`);
  }

  // traditional-healthcare/* and health-systems/[slug] are intentionally NOT
  // enumerated. The whole family is deindexed (noindex,follow via the
  // traditional-healthcare/layout.tsx and the health-systems/[slug] metadata)
  // after a near-zero-demand GSC read, so the sitemap must not advertise it. The
  // static hub + /traditional-healthcare/california are dropped via
  // EXCLUDED_STATIC_ROUTES above; the dynamic state / CA region / health-system
  // pages simply are not pushed here.

  // local-clinics/bay-area/[region] + southern-california/[region]
  for (const region of BAYAREA_REGIONS) {
    urls.push(`/local-clinics/bay-area/${region.slug}`);
  }
  for (const region of SOCAL_REGIONS) {
    urls.push(`/local-clinics/southern-california/${region.slug}`);
  }

  // hormone-therapy/[state] + [state]/[city]. State + city URLs with < 3 clinics
  // are noindexed by the template, so skip them here too (city.count is the
  // clinic count for that city).
  for (const state of HORMONE_STATES) {
    if (getHormoneClinicsByState(state.slug).length >= MIN_CLINICS_FOR_INDEX) {
      urls.push(`/hormone-therapy/${state.slug}`);
    }
    // getCitiesWithClinics returns [] for unwired states → no dead URLs.
    for (const city of getCitiesWithClinics(state.slug)) {
      if (city.count < MIN_CLINICS_FOR_INDEX) continue;
      urls.push(`/hormone-therapy/${state.slug}/${city.citySlug}`);
    }
  }

  // weight-loss/[state] + [state]/[city]
  for (const state of WEIGHTLOSS_STATES) {
    if (getWeightLossClinicsByState(state.slug).length >= MIN_CLINICS_FOR_INDEX) {
      urls.push(`/weight-loss/${state.slug}`);
    }
    // getWeightLossCitiesWithClinics returns [] for unwired states → no dead URLs.
    for (const city of getWeightLossCitiesWithClinics(state.slug)) {
      if (city.count < MIN_CLINICS_FOR_INDEX) continue;
      urls.push(`/weight-loss/${state.slug}/${city.citySlug}`);
    }
  }

  // dexa-scans/[state] + [state]/[city]
  for (const state of DEXA_STATES) {
    if (getDexaClinicsByState(state.slug).length >= MIN_CLINICS_FOR_INDEX) {
      urls.push(`/dexa-scans/${state.slug}`);
    }
    // getDexaCitiesWithClinics returns [] for unwired/empty states → no dead URLs.
    for (const city of getDexaCitiesWithClinics(state.slug)) {
      if (city.count < MIN_CLINICS_FOR_INDEX) continue;
      urls.push(`/dexa-scans/${state.slug}/${city.citySlug}`);
    }
  }

  // med-spa/[state] + [state]/[city]. Only wired states (with >=1 shippable
  // city) have a real page — the [state] route notFound()s otherwise. City
  // pages are already pre-filtered to >= 3 clinics by getMedspaCitiesWithClinics,
  // but keep the guard explicit so the threshold lives in one place.
  for (const state of MEDSPA_STATES) {
    const medspaCities = getMedspaCitiesWithClinics(state.slug);
    if (medspaCities.length === 0) continue;
    if (getMedspaClinicsByState(state.slug).length >= MIN_CLINICS_FOR_INDEX) {
      urls.push(`/med-spa/${state.slug}`);
    }
    for (const city of medspaCities) {
      if (city.count < MIN_CLINICS_FOR_INDEX) continue;
      urls.push(`/med-spa/${state.slug}/${city.citySlug}`);
    }
  }

  return urls;
}

function priorityForDynamic(route: string): number {
  const depth = route.split('/').filter(Boolean).length;
  if (depth <= 1) return 0.8; // /[category]
  if (depth === 2) return 0.7; // /providers/x, /destinations/x, /tc/state, /health-systems/x
  return 0.6; // city-level + region-level leaves
}

// ---------------------------------------------------------------------------
// SITEMAP
// ---------------------------------------------------------------------------
export default function sitemap(): MetadataRoute.Sitemap {
  // No lastModified is emitted anywhere. A single identical new Date() stamped on
  // every URL was training Google to ignore the field; an absent lastmod is the
  // honest signal until we track real per-URL modification times.

  // 1. Static routes (auto-discovered, with a hardcoded fallback if fs throws).
  let staticRoutes: string[];
  try {
    const appDir = path.join(process.cwd(), 'src', 'app');
    const discovered = discoverStaticRoutes(appDir);
    staticRoutes = discovered.length > 0 ? discovered : STATIC_ROUTE_FALLBACK;
  } catch {
    staticRoutes = STATIC_ROUTE_FALLBACK;
  }
  staticRoutes = staticRoutes.filter((r) => !EXCLUDED_STATIC_ROUTES.has(r));

  // 2 + 3. Dynamic routes (data-backed). Guard so a data error never breaks the build.
  let dynamicRoutes: string[] = [];
  try {
    dynamicRoutes = buildDynamicUrls();
  } catch {
    dynamicRoutes = [];
  }

  // De-dupe across static + dynamic (a route should only appear once).
  const seen = new Set<string>();
  const entries: MetadataRoute.Sitemap = [];

  for (const route of staticRoutes) {
    if (seen.has(route)) continue;
    seen.add(route);
    entries.push({
      url: `${baseUrl}${route === '/' ? '' : route}`,
      changeFrequency: 'weekly',
      priority: priorityForStatic(route),
    });
  }

  for (const route of dynamicRoutes) {
    if (seen.has(route)) continue;
    seen.add(route);
    entries.push({
      url: `${baseUrl}${route}`,
      changeFrequency: 'monthly',
      priority: priorityForDynamic(route),
    });
  }

  return entries;
}
