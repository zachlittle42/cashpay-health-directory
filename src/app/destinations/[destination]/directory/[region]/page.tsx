import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { RegistryFrame, RegistryRows, formatAsOf } from '@/components/registries/RegistryFrame';
import RegistryFilter from '@/components/registries/RegistryFilter';
import {
  REGISTRY_SLUGS, getRegistry, regionSummaries, regionSummary, rowsFor, formatCount, orderedCategories, profiledRowIds, groupByDistrict,
} from '@/lib/registries';
import { gridRobots } from '@/lib/indexability';

const SITE = 'https://vitalityscout.com';

export function generateStaticParams() {
  return REGISTRY_SLUGS.flatMap((destination) => regionSummaries(destination).map((r) => ({ destination, region: r.regionSlug })));
}

export function generateMetadata({ params }: { params: { destination: string; region: string } }): Metadata {
  const reg = getRegistry(params.destination);
  const summary = reg && regionSummary(params.destination, params.region);
  if (!reg || !summary) return { title: 'Not found' };
  const { config, meta } = reg;
  const title = `${summary.region}: ${formatCount(summary.count)} government-listed medical facilities (${config.displayName}, ${formatAsOf(meta.asOf).replace(/ \d+,/, '')})`;
  const description = `All ${formatCount(summary.count)} facilities in ${summary.region} on the ${config.listName} as of ${formatAsOf(meta.asOf)}, by district and licence type, with addresses and phone numbers as the regulator publishes them.`;
  const url = `${SITE}/destinations/${config.slug}/directory/${summary.regionSlug}`;
  return { title: { absolute: title }, description, alternates: { canonical: url }, openGraph: { title, description, url }, ...gridRobots(summary.count) };
}

export default function RegionPage({ params }: { params: { destination: string; region: string } }) {
  const reg = getRegistry(params.destination);
  const summary = reg && regionSummary(params.destination, params.region);
  if (!reg || !summary) notFound();
  const { config, meta } = reg;
  const base = `/destinations/${config.slug}/directory`;
  const rows = rowsFor(config.slug, summary.regionSlug);
  const cats = orderedCategories(config.slug, Object.keys(summary.byCategory));
  const profiled = profiledRowIds(config.slug);
  const profiledHere = rows.filter((r) => profiled.has(r.id)).length;
  const districts = groupByDistrict(rows);

  return (
    <RegistryFrame
      registry={reg}
      crumbs={[{ label: 'Directory', href: base }, { label: summary.region }]}
      eyebrow={`${config.displayName} directory · ${config.regionNoun}`}
      title={`${summary.region}: every government-listed medical facility`}
      intro={
        <p>
          <strong>{formatCount(summary.count)}</strong> facilities in {summary.region} appear on the {config.listName} as of {formatAsOf(meta.asOf)}, across {districts.filter((d) => d.district !== 'District not stated').length} districts.
          {profiledHere > 0 && <> {profiledHere} of these rows belong to a provider with a researched profile on the <Link href={`/destinations/${config.slug}#clinics`} className="font-medium text-purple-700 hover:underline">{config.displayName} guide</Link>.</>}
          {' '}Names are shown as the regulator publishes them.
        </p>
      }
    >
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-xl font-bold text-gray-900">By licence type</h2>
          <ul className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {cats.map((c) => {
              const info = config.categories.find((x) => x.slug === c);
              const inner = (
                <>
                  <span className="flex items-baseline justify-between gap-2 font-semibold text-gray-900"><span>{info?.label ?? c}</span><span className="text-purple-700">{formatCount(summary.byCategory[c])}</span></span>
                  {info?.blurb && <span className="mt-1 block text-xs text-gray-600">{info.blurb}</span>}
                </>
              );
              return (
                <li key={c} className="rounded-xl border border-gray-200 bg-white p-4">
                  {summary.split
                    ? <Link href={`${base}/${summary.regionSlug}/${c}`} className="block hover:text-purple-700">{inner}<span className="mt-2 block text-xs font-medium text-purple-700">Open list →</span></Link>
                    : <a href={`#cat-${c}`} className="block hover:text-purple-700">{inner}</a>}
                </li>
              );
            })}
          </ul>

          {summary.split ? (
            <div className="mt-10">
              <h2 className="text-xl font-bold text-gray-900">Districts</h2>
              <p className="mt-1 text-sm text-gray-600">{summary.region} is large enough that the list is split by licence type above. Districts with the most listed facilities:</p>
              <ul className="mt-3 flex flex-wrap gap-2 text-sm">
                {districts.slice(0, 24).map((d) => (
                  <li key={d.district} className="rounded-full border border-gray-200 bg-white px-3 py-1 text-gray-800">{d.district} <span className="text-gray-400">{formatCount(d.rows.length)}</span></li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="mt-10">
              <RegistryFilter listId="rows" total={rows.length} />
              {cats.map((c) => {
                const catRows = rows.filter((r) => r.category === c);
                const info = config.categories.find((x) => x.slug === c);
                return (
                  <div key={c} id={`cat-${c}`} className="scroll-mt-28 pb-10">
                    <h2 className="mb-1 text-2xl font-bold text-gray-900">{info?.label ?? c} <span className="text-base font-normal text-gray-500">{formatCount(catRows.length)}</span></h2>
                    {info?.blurb && <p className="mb-4 text-sm text-gray-600">{info.blurb}</p>}
                    <RegistryRows registry={reg} rows={catRows} listId={`rows-${c}`} profiled={profiled} />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </RegistryFrame>
  );
}
