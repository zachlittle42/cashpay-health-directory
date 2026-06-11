import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import { CATEGORIES } from '@/lib/types';
import { HORMONE_STATES } from '@/lib/hormone-clinic-types';
import { WEIGHTLOSS_STATES } from '@/lib/weightloss-clinic-types';
import { getCitiesWithClinics } from '@/data/hormone-clinics-index';
import { getWeightLossCitiesWithClinics } from '@/data/weightloss-clinics-index';
import { DEXA_STATES } from '@/lib/dexa-clinic-types';
import { getDexaCitiesWithClinics } from '@/data/dexa-clinics-index';
import { ALL_PROVIDERS } from '@/lib/providers';
import { getAllStateSlugs } from '@/lib/us-healthcare-data';
import { getAllHealthSystemSlugs } from '@/lib/national-health-systems';
import {
  getAllCaliforniaRegionSlugs,
  CALIFORNIA_REGIONS,
} from '@/lib/california-healthcare-data';
import { BAYAREA_REGIONS } from '@/lib/bayarea-clinics-data';
import { SOCAL_REGIONS } from '@/lib/socal-clinics-data';

const baseUrl = 'https://vitalityscout.com';

// Routes that exist as static pages but should NOT be advertised to crawlers
// (utility/landing pages with no SEO value or that intentionally stay out of the index).
const EXCLUDED_STATIC_ROUTES = new Set<string>([
  '/beta',
  '/centurioncoach',
  '/search',
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
// ---------------------------------------------------------------------------
function buildDynamicUrls(): string[] {
  const urls: string[] = [];

  // [category] — every key in CATEGORIES renders a page (incl. "coming soon").
  for (const category of Object.keys(CATEGORIES)) {
    urls.push(`/${category}`);
  }

  // providers/[slug] — every provider across all categories. (Previously 0.)
  const providerSlugs = new Set<string>();
  for (const list of Object.values(ALL_PROVIDERS)) {
    for (const provider of list) {
      providerSlugs.add(provider.slug);
    }
  }
  for (const slug of Array.from(providerSlugs)) {
    urls.push(`/providers/${slug}`);
  }

  // destinations/[destination]
  for (const slug of DESTINATION_SLUGS) {
    urls.push(`/destinations/${slug}`);
  }

  // traditional-healthcare/[state] — 50 states from the data module.
  for (const slug of getAllStateSlugs()) {
    urls.push(`/traditional-healthcare/${slug}`);
  }

  // traditional-healthcare/california/[region]
  for (const slug of getAllCaliforniaRegionSlugs()) {
    urls.push(`/traditional-healthcare/california/${slug}`);
  }

  // traditional-healthcare/california/health-systems/[slug]
  // Mirrors that route's generateStaticParams: CA systems WITHOUT a national page.
  for (const region of CALIFORNIA_REGIONS) {
    for (const system of region.healthSystems) {
      if (!system.nationalSlug) {
        urls.push(`/traditional-healthcare/california/health-systems/${system.slug}`);
      }
    }
  }

  // health-systems/[slug] — national health systems.
  for (const slug of getAllHealthSystemSlugs()) {
    urls.push(`/health-systems/${slug}`);
  }

  // local-clinics/bay-area/[region] + southern-california/[region]
  for (const region of BAYAREA_REGIONS) {
    urls.push(`/local-clinics/bay-area/${region.slug}`);
  }
  for (const region of SOCAL_REGIONS) {
    urls.push(`/local-clinics/southern-california/${region.slug}`);
  }

  // hormone-therapy/[state] + [state]/[city]
  for (const state of HORMONE_STATES) {
    urls.push(`/hormone-therapy/${state.slug}`);
    // getCitiesWithClinics returns [] for unwired states → no dead URLs.
    for (const city of getCitiesWithClinics(state.slug)) {
      urls.push(`/hormone-therapy/${state.slug}/${city.citySlug}`);
    }
  }

  // weight-loss/[state] + [state]/[city]
  for (const state of WEIGHTLOSS_STATES) {
    urls.push(`/weight-loss/${state.slug}`);
    // getWeightLossCitiesWithClinics returns [] for unwired states → no dead URLs.
    for (const city of getWeightLossCitiesWithClinics(state.slug)) {
      urls.push(`/weight-loss/${state.slug}/${city.citySlug}`);
    }
  }

  // dexa-scans/[state] + [state]/[city]
  for (const state of DEXA_STATES) {
    urls.push(`/dexa-scans/${state.slug}`);
    // getDexaCitiesWithClinics returns [] for unwired/empty states → no dead URLs.
    for (const city of getDexaCitiesWithClinics(state.slug)) {
      urls.push(`/dexa-scans/${state.slug}/${city.citySlug}`);
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
  const lastModified = new Date();

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
      lastModified,
      changeFrequency: 'weekly',
      priority: priorityForStatic(route),
    });
  }

  for (const route of dynamicRoutes) {
    if (seen.has(route)) continue;
    seen.add(route);
    entries.push({
      url: `${baseUrl}${route}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: priorityForDynamic(route),
    });
  }

  return entries;
}
