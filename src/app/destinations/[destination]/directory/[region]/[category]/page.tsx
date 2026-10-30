import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { RegistryFrame, RegistryRows, formatAsOf } from '@/components/registries/RegistryFrame';
import RegistryFilter from '@/components/registries/RegistryFilter';
import {
  REGISTRY_SLUGS, getRegistry, regionSummaries, regionSummary, rowsFor, formatCount, categoryLabel, profiledRowIds, orderedCategories,
} from '@/lib/registries';
import { gridRobots } from '@/lib/indexability';

const SITE = 'https://vitalityscout.com';

// Only regions above the split threshold get per-category pages; smaller
// regions list everything on the region page, so a category URL there would
// duplicate it.
export function generateStaticParams() {
  return REGISTRY_SLUGS.flatMap((destination) =>
    regionSummaries(destination)
      .filter((r) => r.split)
      .flatMap((r) => Object.keys(r.byCategory).map((category) => ({ destination, region: r.regionSlug, category }))),
  );
}

function load(params: { destination: string; region: string; category: string }) {
  const reg = getRegistry(params.destination);
  const summary = reg && regionSummary(params.destination, params.region);
  if (!reg || !summary || !summary.split || !summary.byCategory[params.category]) return null;
  return { reg, summary };
}

export function generateMetadata({ params }: { params: { destination: string; region: string; category: string } }): Metadata {
  const l = load(params);
  if (!l) return { title: 'Not found' };
  const { reg, summary } = l;
  const { config, meta } = reg;
  const n = summary.byCategory[params.category];
  const label = categoryLabel(config.slug, params.category);
  const title = `${label} in ${summary.region}: ${formatCount(n)} on the government list (${config.displayName}, ${formatAsOf(meta.asOf).replace(/ \d+,/, '')})`;
  const description = `All ${formatCount(n)} ${label.toLowerCase()} in ${summary.region} on the ${config.listName} as of ${formatAsOf(meta.asOf)}, grouped by district with addresses and phone numbers as the regulator publishes them.`;
  const url = `${SITE}/destinations/${config.slug}/directory/${summary.regionSlug}/${params.category}`;
  return { title: { absolute: title }, description, alternates: { canonical: url }, openGraph: { title, description, url }, ...gridRobots(n) };
}

export default function CategoryPage({ params }: { params: { destination: string; region: string; category: string } }) {
  const l = load(params);
  if (!l) notFound();
  const { reg, summary } = l;
  const { config, meta } = reg;
  const base = `/destinations/${config.slug}/directory`;
  const rows = rowsFor(config.slug, summary.regionSlug, params.category);
  const info = config.categories.find((c) => c.slug === params.category);
  const label = info?.label ?? params.category;
  const profiled = profiledRowIds(config.slug);
  const profiledHere = rows.filter((r) => profiled.has(r.id)).length;
  const siblings = orderedCategories(config.slug, Object.keys(summary.byCategory)).filter((c) => c !== params.category);

  return (
    <RegistryFrame
      registry={reg}
      crumbs={[{ label: 'Directory', href: base }, { label: summary.region, href: `${base}/${summary.regionSlug}` }, { label }]}
      eyebrow={`${config.displayName} directory · ${summary.region}`}
      title={`${label} in ${summary.region}`}
      intro={
        <p>
          <strong>{formatCount(rows.length)}</strong> {label.toLowerCase()} in {summary.region} appear on the {config.listName} as of {formatAsOf(meta.asOf)}.
          {info?.blurb && <> {info.blurb}</>}
          {profiledHere > 0 && <> {profiledHere} of these rows belong to a provider with a researched profile on the <Link href={`/destinations/${config.slug}#clinics`} className="font-medium text-purple-700 hover:underline">{config.displayName} guide</Link>.</>}
        </p>
      }
    >
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-5xl">
          <nav aria-label="Other licence types" className="mb-6 flex flex-wrap gap-2 text-sm">
            {siblings.map((c) => (
              <Link key={c} href={`${base}/${summary.regionSlug}/${c}`} className="rounded-full border border-gray-200 bg-white px-3 py-1 text-gray-800 hover:border-purple-300 hover:text-purple-700">
                {categoryLabel(config.slug, c)} <span className="text-gray-400">{formatCount(summary.byCategory[c])}</span>
              </Link>
            ))}
          </nav>
          <RegistryFilter listId="rows" total={rows.length} />
          <RegistryRows registry={reg} rows={rows} listId="rows" profiled={profiled} />
        </div>
      </section>
    </RegistryFrame>
  );
}
