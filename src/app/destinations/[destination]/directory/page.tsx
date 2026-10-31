import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Search } from 'lucide-react';
import { RegistryFrame, formatAsOf } from '@/components/registries/RegistryFrame';
import {
  REGISTRY_SLUGS, getRegistry, regionSummaries, formatCount, orderedCategories, profiledRowIds, clinicAnchor,
} from '@/lib/registries';
import { DOSSIERS } from '@/lib/destinations/dossiers';

const SITE = 'https://vitalityscout.com';

export function generateStaticParams() {
  return REGISTRY_SLUGS.map((destination) => ({ destination }));
}

export function generateMetadata({ params }: { params: { destination: string } }): Metadata {
  const reg = getRegistry(params.destination);
  if (!reg) return { title: 'Directory not found' };
  const { config, meta } = reg;
  const title = `${config.displayName} medical tourism directory: all ${formatCount(meta.total)} government-listed facilities (${formatAsOf(meta.asOf).replace(/ \d+,/, '')})`;
  const description = `Every facility on the ${config.listName}, ${formatCount(meta.total)} in total as of ${formatAsOf(meta.asOf)}, searchable by ${config.regionNoun}, district and type. What the listing means, what it does not, and how to verify a clinic before paying.`;
  const url = `${SITE}/destinations/${config.slug}/directory`;
  return { title: { absolute: title }, description, alternates: { canonical: url }, openGraph: { title, description, url } };
}

export default function DirectoryPage({ params }: { params: { destination: string } }) {
  const reg = getRegistry(params.destination);
  if (!reg) notFound();
  const { config, meta } = reg;
  const regions = regionSummaries(config.slug);
  const dossier = DOSSIERS[config.slug];
  const profiled = profiledRowIds(config.slug);
  const base = `/destinations/${config.slug}/directory`;
  const cats = orderedCategories(config.slug, Object.keys(meta.byCategory));

  const dataset = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: `${config.displayName}: ${config.listName}`,
    description: `${formatCount(meta.total)} facilities on the ${config.listName}, reproduced from the regulator's publication of ${formatAsOf(meta.asOf)} and organised by ${config.regionNoun} and facility type.`,
    url: `${SITE}${base}`,
    dateModified: meta.asOf,
    isBasedOn: config.lookup.url,
    sourceOrganization: { '@type': 'GovernmentOrganization', name: config.regulator },
    publisher: { '@type': 'Organization', name: 'VitalityScout' },
    license: 'https://creativecommons.org/publicdomain/mark/1.0/',
  };

  return (
    <RegistryFrame
      registry={reg}
      crumbs={[{ label: 'Directory' }]}
      eyebrow={`${config.displayName} · Question 2: which clinics?`}
      title={`Every government-listed medical facility in ${config.displayName}`}
      intro={
        <p>
          <strong>{formatCount(meta.total)}</strong> facilities appear on the {config.listName} as of {formatAsOf(meta.asOf)}. This is the whole field, reproduced from the regulator without ranking or omission. The {dossier ? dossier.clinics.length : 0} providers we have researched in depth are marked where they appear; they are a documented subset, not a shortlist of the only legitimate options.
        </p>
      }
      schemas={[dataset]}
    >
      {/* Search */}
      <section className="px-4 pb-8">
        <div className="mx-auto max-w-5xl">
          <form action={`${base}/search`} method="get" className="flex flex-col gap-2 rounded-2xl border border-purple-200 bg-purple-50 p-4 sm:flex-row sm:items-end">
            <div className="flex-1">
              <label htmlFor="q" className="block text-sm font-semibold text-gray-900">Check a clinic name, district or street</label>
              <input id="q" name="q" type="search" required minLength={2} placeholder={config.slug === 'turkey' ? 'e.g. Acıbadem, Şişli, Nişantaşı, Bağdat Caddesi' : 'e.g. Banobagi, Gangnam-gu, Apgujeong-ro, Severance'} className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200" />
            </div>
            <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-lg bg-purple-700 px-4 py-2 text-sm font-semibold text-white hover:bg-purple-800">
              <Search className="h-4 w-4" aria-hidden /> Search the list
            </button>
          </form>
          <p className="mt-2 text-xs text-gray-500">The list uses legal entity names. If a brand does not appear, search the street address from the clinic&apos;s contact page, then ask the clinic for the name on its certificate.</p>
        </div>
      </section>

      {/* By type */}
      <section className="px-4 pb-10">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-gray-900">By facility type</h2>
          <p className="mt-1 text-sm text-gray-600">The licence type tells you what a facility may legally do on its own premises. It is the first thing to match against the procedure you are booking.</p>
          <dl className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {cats.map((c) => {
              const info = config.categories.find((x) => x.slug === c);
              return (
                <div key={c} className="rounded-xl border border-gray-200 bg-white p-4">
                  <dt className="flex items-baseline justify-between gap-2">
                    <span className="font-semibold text-gray-900">{info?.label ?? c}</span>
                    <span className="text-lg font-bold text-purple-700">{formatCount(meta.byCategory[c])}</span>
                  </dt>
                  {info?.blurb && <dd className="mt-1 text-xs text-gray-600">{info.blurb}</dd>}
                </div>
              );
            })}
          </dl>
        </div>
      </section>

      {/* By region */}
      <section className="bg-gray-50 px-4 py-10">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-gray-900">By {config.regionNoun}</h2>
          <p className="mt-1 text-sm text-gray-600">{regions.length} {`${config.regionNoun}s`} have at least one listed facility. Open one to see every facility there, grouped by district.</p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {regions.map((r) => (
              <li key={r.regionSlug} className="rounded-xl border border-gray-200 bg-white p-4">
                <Link href={`${base}/${r.regionSlug}`} className="flex items-baseline justify-between gap-2 font-semibold text-gray-900 hover:text-purple-700 hover:underline">
                  <span>{r.region}</span>
                  <span className="text-purple-700">{formatCount(r.count)}</span>
                </Link>
                <p className="mt-1 text-xs text-gray-500">
                  {orderedCategories(config.slug, Object.keys(r.byCategory)).slice(0, 3).map((c) => `${formatCount(r.byCategory[c])} ${(config.categories.find((x) => x.slug === c)?.label ?? c).toLowerCase()}`).join(' · ')}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Researched subset */}
      {dossier && (
        <section className="px-4 py-10">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-2xl font-bold text-gray-900">The {dossier.clinics.length} providers we have researched</h2>
            <p className="mt-1 max-w-3xl text-sm text-gray-600">
              For each of these we record what is documented: registration or licence status against this list, named operating doctors and anesthesia plan, published prices, regulator or press record, and exactly how to book. {profiled.size} of them are matched to a row on this list by name; the rest trade under a brand that differs from the legal name on the register, and their profiles say so.
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {dossier.clinics.map((c) => (
                <li key={c.name}>
                  <Link href={`/destinations/${config.slug}#${clinicAnchor(c.name)}`} className="inline-block rounded-full border border-gray-200 bg-white px-3 py-1 text-sm text-gray-800 hover:border-purple-300 hover:text-purple-700">{c.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </RegistryFrame>
  );
}
