import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { RegistryFrame, RegistryRows, formatAsOf } from '@/components/registries/RegistryFrame';
import RegistryFilter from '@/components/registries/RegistryFilter';
import {
  REGISTRY_SLUGS, getRegistry, regionSummaries, regionSummary, formatCount, categoryLabel, profiledRowIds,
  categorySplit, districtSummaries, rowsForDistrict, NO_DISTRICT,
} from '@/lib/registries';
import { gridRobots } from '@/lib/indexability';

const SITE = 'https://vitalityscout.com';

// Only category lists above the district-split threshold get district pages.
export function generateStaticParams() {
  return REGISTRY_SLUGS.flatMap((destination) =>
    regionSummaries(destination)
      .filter((r) => r.split)
      .flatMap((r) =>
        Object.keys(r.byCategory)
          .filter((category) => categorySplit(destination, r.regionSlug, category))
          .flatMap((category) =>
            districtSummaries(destination, r.regionSlug, category).map((d) => ({ destination, region: r.regionSlug, category, district: d.slug })),
          ),
      ),
  );
}

function load(params: { destination: string; region: string; category: string; district: string }) {
  const reg = getRegistry(params.destination);
  const summary = reg && regionSummary(params.destination, params.region);
  if (!reg || !summary || !categorySplit(params.destination, params.region, params.category)) return null;
  const d = districtSummaries(params.destination, params.region, params.category).find((x) => x.slug === params.district);
  if (!d) return null;
  return { reg, summary, d };
}

export function generateMetadata({ params }: { params: { destination: string; region: string; category: string; district: string } }): Metadata {
  const l = load(params);
  if (!l) return { title: 'Not found' };
  const { reg, summary, d } = l;
  const { config, meta } = reg;
  const label = categoryLabel(config.slug, params.category);
  const title = `${label} in ${d.district}, ${summary.region}: ${formatCount(d.count)} on the government list (${config.displayName}, ${formatAsOf(meta.asOf).replace(/ \d+,/, '')})`;
  const description = `All ${formatCount(d.count)} ${label.toLowerCase()} in ${d.district}, ${summary.region}, on the ${config.listName} as of ${formatAsOf(meta.asOf)}, with addresses and phone numbers as the regulator publishes them.`;
  const url = `${SITE}/destinations/${config.slug}/directory/${summary.regionSlug}/${params.category}/${d.slug}`;
  const robots = d.district === NO_DISTRICT ? { robots: { index: false, follow: true } } : gridRobots(d.count);
  return { title: { absolute: title }, description, alternates: { canonical: url }, openGraph: { title, description, url }, ...robots };
}

export default function DistrictPage({ params }: { params: { destination: string; region: string; category: string; district: string } }) {
  const l = load(params);
  if (!l) notFound();
  const { reg, summary, d } = l;
  const { config, meta } = reg;
  const base = `/destinations/${config.slug}/directory`;
  const rows = rowsForDistrict(config.slug, summary.regionSlug, params.category, d.slug);
  const info = config.categories.find((c) => c.slug === params.category);
  const label = info?.label ?? params.category;
  const profiled = profiledRowIds(config.slug);
  const profiledHere = rows.filter((r) => profiled.has(r.id)).length;
  const siblings = districtSummaries(config.slug, summary.regionSlug, params.category).filter((x) => x.slug !== d.slug && x.district !== NO_DISTRICT).slice(0, 12);

  return (
    <RegistryFrame
      registry={reg}
      crumbs={[
        { label: 'Directory', href: base },
        { label: summary.region, href: `${base}/${summary.regionSlug}` },
        { label, href: `${base}/${summary.regionSlug}/${params.category}` },
        { label: d.district },
      ]}
      eyebrow={`${config.displayName} directory · ${summary.region} · ${label}`}
      title={`${label} in ${d.district}, ${summary.region}`}
      intro={
        <p>
          <strong>{formatCount(rows.length)}</strong> {label.toLowerCase()} in {d.district} appear on the {config.listName} as of {formatAsOf(meta.asOf)}.
          {info?.blurb && <> {info.blurb}</>}
          {profiledHere > 0 && <> {profiledHere} of these rows belong to a provider with a researched profile on the <Link href={`/destinations/${config.slug}#clinics`} className="font-medium text-purple-700 hover:underline">{config.displayName} guide</Link>.</>}
        </p>
      }
    >
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-5xl">
          <nav aria-label="Other districts" className="mb-6 flex flex-wrap gap-2 text-sm">
            {siblings.map((x) => (
              <Link key={x.slug} href={`${base}/${summary.regionSlug}/${params.category}/${x.slug}`} className="rounded-full border border-gray-200 bg-white px-3 py-1 text-gray-800 hover:border-purple-300 hover:text-purple-700">
                {x.district} <span className="text-gray-400">{formatCount(x.count)}</span>
              </Link>
            ))}
            <Link href={`${base}/${summary.regionSlug}/${params.category}`} className="rounded-full border border-purple-200 bg-purple-50 px-3 py-1 font-medium text-purple-800 hover:underline">All districts</Link>
          </nav>
          <RegistryFilter listId="rows" total={rows.length} />
          <RegistryRows registry={reg} rows={rows} listId="rows" profiled={profiled} />
        </div>
      </section>
    </RegistryFrame>
  );
}
