import Link from 'next/link';
import type { ReactNode } from 'react';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import { JourneyRail } from '@/components/destinations/JourneyRail';
import { ExternalLink, ShieldCheck } from 'lucide-react';
import type { Registry, RegistryRow } from '@/lib/registries';
import { formatCount, groupByDistrict, clinicAnchor, districtSlug } from '@/lib/registries';

const SITE = 'https://vitalityscout.com';

export function formatAsOf(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number);
  const date = new Date(Date.UTC(y, (m || 1) - 1, d || 1));
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', ...(d ? { day: 'numeric' } : {}), timeZone: 'UTC' });
}

export interface Crumb { label: string; href?: string }

export function RegistryFrame({
  registry, crumbs, eyebrow, title, intro, children, schemas = [],
}: {
  registry: Registry; crumbs: Crumb[]; eyebrow: string; title: string; intro: ReactNode; children: ReactNode; schemas?: object[];
}) {
  const { config, meta } = registry;
  const hubHref = `/destinations/${config.slug}`;
  const dirHref = `${hubHref}/directory`;
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Medical Tourism', item: `${SITE}/medical-tourism` },
      { '@type': 'ListItem', position: 3, name: config.displayName, item: `${SITE}${hubHref}` },
      ...crumbs.map((c, i) => ({ '@type': 'ListItem', position: 4 + i, name: c.label, ...(c.href ? { item: `${SITE}${c.href}` } : {}) })),
    ],
  };
  return (
    <main className="min-h-screen bg-white">
      {[breadcrumb, ...schemas].map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <Navigation />
      <SidebarShell>
        <nav aria-label="Breadcrumb" className="border-b border-gray-100 px-4 py-3">
          <ol className="mx-auto flex max-w-5xl flex-wrap items-center gap-1 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-purple-700 hover:underline">Home</Link></li>
            <li aria-hidden>›</li>
            <li><Link href="/medical-tourism" className="hover:text-purple-700 hover:underline">Medical Tourism</Link></li>
            <li aria-hidden>›</li>
            <li><Link href={hubHref} className="hover:text-purple-700 hover:underline">{config.displayName}</Link></li>
            {crumbs.map((c) => (
              <li key={c.label} className="contents">
                <span aria-hidden>›</span>
                {c.href ? <Link href={c.href} className="hover:text-purple-700 hover:underline">{c.label}</Link> : <span className="font-medium text-gray-900" aria-current="page">{c.label}</span>}
              </li>
            ))}
          </ol>
        </nav>

        <div className="px-4 pt-6">
          <div className="mx-auto max-w-5xl">
            <JourneyRail currentPath={dirHref} destinationSlug={config.slug} />
          </div>
        </div>

        <header className="px-4 pb-6 pt-6">
          <div className="mx-auto max-w-5xl">
            <p className="text-xs font-bold uppercase tracking-wide text-purple-700">{eyebrow}</p>
            <h1 className="mt-1 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h1>
            <div className="mt-3 max-w-3xl text-gray-700">{intro}</div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-900">
                <p className="flex items-center gap-2 font-semibold"><ShieldCheck className="h-4 w-4" aria-hidden /> What being on this list means</p>
                <p className="mt-1">{config.means}</p>
              </div>
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
                <p className="font-semibold">What it does not mean</p>
                <p className="mt-1">{config.doesNotMean}</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Source: {meta.source}, as published {formatAsOf(meta.asOf)}.{' '}
              <a href={config.lookup.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-medium text-purple-700 hover:underline">
                Official lookup <ExternalLink className="h-3.5 w-3.5" aria-hidden />
              </a>
              {' · '}
              <Link href={config.verifyGuideHref} className="font-medium text-purple-700 hover:underline">How to verify a clinic yourself</Link>
              {' · '}
              <Link href={`${hubHref}#clinics`} className="font-medium text-purple-700 hover:underline">Researched profiles</Link>
            </p>
          </div>
        </header>

        {children}

        <MedicalDisclaimer />
        <div className="mx-auto max-w-5xl px-4 pb-12 text-xs text-gray-500">
          <p>
            This directory reproduces the official list without additions or omissions and is refreshed when the regulator republishes it. Facility names are shown as the regulator publishes them. A facility that is not listed may have been authorized after {formatAsOf(meta.asOf)}, may operate under a different legal name, or may not be authorized at all. Always confirm with the official lookup and ask the facility for its certificate before paying. VitalityScout has no commercial relationship with any facility listed here.
          </p>
        </div>
      </SidebarShell>
      <Footer />
    </main>
  );
}

export function RegistryRows({
  registry, rows, listId, profiled,
}: { registry: Registry; rows: RegistryRow[]; listId: string; profiled: Map<string, string> }) {
  const groups = groupByDistrict(rows);
  const hubHref = `/destinations/${registry.config.slug}`;
  return (
    <div id={listId}>
      {groups.length > 1 && (
        <nav aria-label="Districts" className="mb-6 flex flex-wrap gap-2 text-xs">
          {groups.map((g) => (
            <a key={g.district} href={`#${listId}-${districtSlug(g.district)}`} className="rounded-full border border-gray-200 bg-white px-2.5 py-1 text-gray-700 hover:border-purple-300 hover:text-purple-700">
              {g.district} <span className="text-gray-400">{g.rows.length}</span>
            </a>
          ))}
        </nav>
      )}
      <div className="space-y-8">
        {groups.map((g) => (
          <section key={g.district} data-district id={`${listId}-${districtSlug(g.district)}`} className="scroll-mt-28">
            <h2 className="mb-3 text-lg font-bold text-gray-900">{g.district} <span className="text-sm font-normal text-gray-500">{formatCount(g.rows.length)}</span></h2>
            <ul className="divide-y divide-gray-100 rounded-xl border border-gray-200 bg-white">
              {g.rows.map((r) => {
                const profile = profiled.get(r.id);
                return (
                  <li key={r.id} data-search={fold(`${r.name} ${r.district} ${r.address} ${r.typeLabel}`)} className="px-4 py-3 text-sm">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                      <p className="font-semibold text-gray-900">
                        {r.website ? <a href={r.website} target="_blank" rel="noopener noreferrer nofollow" className="hover:text-purple-700 hover:underline">{r.name}</a> : r.name}
                      </p>
                      <p className="text-xs text-gray-500">{r.typeLabel}</p>
                    </div>
                    <p className="mt-0.5 text-gray-600">{r.address}{r.phone ? ` · ${r.phone}` : ''}</p>
                    {profile && (
                      <Link href={`${hubHref}#${clinicAnchor(profile)}`} className="mt-1 inline-flex items-center gap-1 rounded-full bg-purple-50 px-2 py-0.5 text-xs font-medium text-purple-800 hover:underline">
                        Researched profile: {profile}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}

export function fold(s: string): string {
  return s.replace(/ı/g, 'i').replace(/İ/g, 'I').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}
