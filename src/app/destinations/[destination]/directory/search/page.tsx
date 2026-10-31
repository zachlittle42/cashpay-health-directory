import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { RegistryFrame, RegistryRows } from '@/components/registries/RegistryFrame';
import { getRegistry, searchRegistry, formatCount, profiledRowIds } from '@/lib/registries';
import { NOINDEX_FOLLOW } from '@/lib/indexability';

// Query-driven, so rendered per request and kept out of the index.
export const dynamic = 'force-dynamic';

export function generateMetadata({ params }: { params: { destination: string } }): Metadata {
  const reg = getRegistry(params.destination);
  return {
    title: reg ? `Search the ${reg.config.displayName} government facility list` : 'Not found',
    robots: NOINDEX_FOLLOW,
    alternates: { canonical: `https://vitalityscout.com/destinations/${params.destination}/directory` },
  };
}

export default function SearchPage({ params, searchParams }: { params: { destination: string }; searchParams: { q?: string } }) {
  const reg = getRegistry(params.destination);
  if (!reg) notFound();
  const { config } = reg;
  const base = `/destinations/${config.slug}/directory`;
  const q = (searchParams.q ?? '').toString().slice(0, 80);
  const LIMIT = 200;
  const rows = searchRegistry(config.slug, q, LIMIT);
  const profiled = profiledRowIds(config.slug);

  return (
    <RegistryFrame
      registry={reg}
      crumbs={[{ label: 'Directory', href: base }, { label: 'Search' }]}
      eyebrow={`${config.displayName} directory`}
      title={q ? `“${q}” on the ${config.displayName} government list` : `Search the ${config.displayName} government list`}
      intro={
        <p>
          {q.trim().length < 2
            ? 'Enter at least two characters of a clinic name, district or street.'
            : rows.length === 0
              ? `No facility matches “${q}”. The list uses legal entity names, so try a word from the street address on the clinic's contact page, or a shorter part of the name. A brand that cannot be found should be asked for the exact name on its authorization certificate.`
              : `${rows.length >= LIMIT ? `First ${LIMIT}` : formatCount(rows.length)} matching facilit${rows.length === 1 ? 'y' : 'ies'}, in the regulator's wording.`}
        </p>
      }
    >
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-5xl">
          <form action={`${base}/search`} method="get" className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end">
            <div className="flex-1">
              <label htmlFor="q" className="block text-sm font-semibold text-gray-900">Search again</label>
              <input id="q" name="q" type="search" defaultValue={q} required minLength={2} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200" />
            </div>
            <button type="submit" className="rounded-lg bg-purple-700 px-4 py-2 text-sm font-semibold text-white hover:bg-purple-800">Search</button>
          </form>
          {rows.length > 0 ? (
            <RegistryRows registry={reg} rows={rows} listId="rows" profiled={profiled} />
          ) : (
            <p className="text-sm text-gray-600">
              Browse instead: <Link href={base} className="font-medium text-purple-700 hover:underline">all {`${config.regionNoun}s`}</Link>, or read <Link href={config.verifyGuideHref} className="font-medium text-purple-700 hover:underline">how to verify a clinic</Link>.
            </p>
          )}
        </div>
      </section>
    </RegistryFrame>
  );
}
