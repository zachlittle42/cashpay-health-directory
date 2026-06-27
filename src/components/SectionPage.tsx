import Link from 'next/link';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import { NAV_GROUPS } from '@/lib/nav-tree';
import {
  Microscope, Scale, Dna, Zap, Sparkles, Stethoscope, Globe, Building2, Circle,
  ArrowRight, ShieldCheck, BadgeCheck, Tag,
} from 'lucide-react';

const ICONS: Record<string, any> = {
  Microscope, Scale, Dna, Zap, Sparkles, Stethoscope, Globe, Building2, Circle,
};

// Per-section accent — literal class strings so Tailwind JIT keeps them.
export const ACCENT = {
  blue: { grad: 'from-blue-50', chip: 'bg-blue-50 text-blue-600', text: 'text-blue-600', cta: 'bg-blue-600 hover:bg-blue-700', soft: 'bg-blue-50/60' },
  emerald: { grad: 'from-emerald-50', chip: 'bg-emerald-50 text-emerald-600', text: 'text-emerald-600', cta: 'bg-emerald-600 hover:bg-emerald-700', soft: 'bg-emerald-50/60' },
  violet: { grad: 'from-violet-50', chip: 'bg-violet-50 text-violet-600', text: 'text-violet-600', cta: 'bg-violet-600 hover:bg-violet-700', soft: 'bg-violet-50/60' },
  amber: { grad: 'from-amber-50', chip: 'bg-amber-50 text-amber-600', text: 'text-amber-600', cta: 'bg-amber-600 hover:bg-amber-700', soft: 'bg-amber-50/60' },
  rose: { grad: 'from-rose-50', chip: 'bg-rose-50 text-rose-600', text: 'text-rose-600', cta: 'bg-rose-600 hover:bg-rose-700', soft: 'bg-rose-50/60' },
  sky: { grad: 'from-sky-50', chip: 'bg-sky-50 text-sky-600', text: 'text-sky-600', cta: 'bg-sky-600 hover:bg-sky-700', soft: 'bg-sky-50/60' },
} as const;

export type AccentKey = keyof typeof ACCENT;

export interface PriceProof { label: string; value: string; anchor?: string }
export interface SectionConfig {
  id: string;            // matches a NAV_GROUPS id (drives the sub-category grid)
  slug: string;          // route, e.g. /test-diagnose
  eyebrow: string;       // small label above the H1
  title: string;         // H1
  intro: string;         // one-sentence value prop
  accent: AccentKey;
  heroStat: { value: string; label: string };
  priceProof: PriceProof[];
  featured: { title: string; desc: string; href: string; cta: string };
  guides: { title: string; href: string }[];
}

export default function SectionPage({ config }: { config: SectionConfig }) {
  const a = ACCENT[config.accent];
  const group = NAV_GROUPS.find((g) => g.id === config.id);
  const Icon = ICONS[group?.icon || 'Circle'] || Circle;
  const subsections = group?.subsections ?? [];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: config.title,
    description: config.intro,
    url: `https://vitalityscout.com${config.slug}`,
  };

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navigation />
      <SidebarShell>

        {/* Hero */}
        <section className={`relative overflow-hidden border-b border-gray-100 bg-gradient-to-b ${a.grad} to-white`}>
          <Icon className={`pointer-events-none absolute -right-8 -top-8 h-64 w-64 ${a.text} opacity-[0.06]`} strokeWidth={1.5} />
          <div className="relative mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
            <div className="grid items-center gap-8 lg:grid-cols-[1.5fr_1fr]">
              <div>
                <div className={`mb-3 inline-flex items-center gap-2 rounded-full ${a.chip} px-3 py-1 text-sm font-medium`}>
                  <Icon className="h-4 w-4" strokeWidth={2} />
                  {config.eyebrow}
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">{config.title}</h1>
                <p className="mt-4 max-w-xl text-lg leading-8 text-gray-600">{config.intro}</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a href="#browse" className={`inline-flex items-center gap-2 rounded-full ${a.cta} px-6 py-3 text-sm font-semibold text-white`}>
                    Browse {config.eyebrow} <ArrowRight className="h-4 w-4" />
                  </a>
                  <Link href={config.featured.href} className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50">
                    {config.featured.cta}
                  </Link>
                </div>
              </div>
              {/* Hero stat card */}
              <div className="rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-sm backdrop-blur">
                <div className="text-xs font-semibold uppercase tracking-wide text-gray-400">Typical cash price</div>
                <div className={`mt-1 text-4xl font-bold ${a.text}`}>{config.heroStat.value}</div>
                <div className="mt-1 text-sm text-gray-600">{config.heroStat.label}</div>
                <div className="mt-4 border-t border-gray-100 pt-4 text-xs text-gray-500">
                  Real prices, sourced from the providers we list — not &ldquo;contact us.&rdquo;
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Price-proof band */}
        <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {config.priceProof.map((p) => (
              <div key={p.label} className="rounded-xl border border-gray-200 p-4">
                <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500">
                  <Tag className={`h-3.5 w-3.5 ${a.text}`} /> {p.label}
                </div>
                <div className="mt-1.5 text-xl font-bold text-gray-900">{p.value}</div>
                {p.anchor ? <div className="mt-0.5 text-xs text-gray-500">{p.anchor}</div> : null}
              </div>
            ))}
          </div>
        </section>

        {/* Featured editorial module */}
        <section className="px-4 sm:px-6">
          <div className="mx-auto max-w-5xl">
            <Link href={config.featured.href} className={`group flex flex-col items-start gap-5 rounded-2xl border border-gray-200 ${a.soft} p-6 sm:flex-row sm:items-center sm:p-8`}>
              <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${a.chip}`}>
                <Icon className="h-7 w-7" strokeWidth={2} />
              </div>
              <div className="flex-1">
                <div className={`text-xs font-semibold uppercase tracking-wide ${a.text}`}>Start here</div>
                <h2 className="mt-1 text-xl font-bold text-gray-900">{config.featured.title}</h2>
                <p className="mt-1 text-sm text-gray-600">{config.featured.desc}</p>
              </div>
              <span className={`inline-flex shrink-0 items-center gap-1 text-sm font-semibold ${a.text}`}>
                {config.featured.cta} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </div>
        </section>

        {/* Sub-category grid (the section's nav surface) */}
        <section id="browse" className="mx-auto max-w-5xl scroll-mt-20 px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900">Browse {config.eyebrow}</h2>
          <p className="mt-2 text-gray-600">Every option in this category, grouped by what you need.</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {subsections.map((s) => (
              <div key={s.label} className="rounded-2xl border border-gray-200 bg-white p-5">
                <h3 className="mb-3 border-b border-gray-100 pb-2 text-[13px] font-bold uppercase tracking-wide text-gray-900">{s.label}</h3>
                <ul className="space-y-1.5">
                  {s.items.map((it) => (
                    <li key={it.url}>
                      <Link href={it.url} className="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900">
                        <ArrowRight className="h-3 w-3 text-gray-300" /> {it.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Supporting guides */}
        {config.guides.length > 0 && (
          <section className="border-t border-gray-100 bg-gray-50/60 px-4 py-14 sm:px-6">
            <div className="mx-auto max-w-5xl">
              <div className="mb-6 flex items-end justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Guides to read first</h2>
                <Link href="/guides" className={`text-sm font-medium ${a.text} hover:underline`}>All guides</Link>
              </div>
              <div className="grid gap-5 sm:grid-cols-3">
                {config.guides.slice(0, 3).map((g) => (
                  <Link key={g.href} href={g.href} className="group rounded-2xl border border-gray-200 bg-white p-5 transition-shadow hover:shadow-md">
                    <h3 className="font-semibold text-gray-900">{g.title}</h3>
                    <span className={`mt-3 inline-flex items-center gap-1 text-sm font-medium ${a.text}`}>
                      Read guide <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Trust + compliance band */}
        <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="flex items-start gap-3">
              <Tag className={`mt-0.5 h-5 w-5 shrink-0 ${a.text}`} />
              <div>
                <div className="text-sm font-semibold text-gray-900">Transparent pricing</div>
                <p className="mt-0.5 text-xs text-gray-500">Real cash prices from each provider, not &ldquo;contact us.&rdquo;</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <BadgeCheck className={`mt-0.5 h-5 w-5 shrink-0 ${a.text}`} />
              <div>
                <div className="text-sm font-semibold text-gray-900">Curated &amp; verified</div>
                <p className="mt-0.5 text-xs text-gray-500">We vet for accreditation and reputation, and date every listing.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck className={`mt-0.5 h-5 w-5 shrink-0 ${a.text}`} />
              <div>
                <div className="text-sm font-semibold text-gray-900">Honest comparisons</div>
                <p className="mt-0.5 text-xs text-gray-500">Pros and cons, &ldquo;best for X,&rdquo; and how we rank — disclosed.</p>
              </div>
            </div>
          </div>
          <p className="mt-8 rounded-lg bg-amber-50 px-4 py-3 text-xs leading-relaxed text-amber-900">
            <span className="font-semibold">Medical disclaimer:</span> This page is general information, not medical advice. Prices are estimates aggregated from public sources and change frequently — confirm current pricing and provider credentials directly. Talk to a licensed clinician before starting any treatment.{' '}
            <span className="font-semibold">Affiliate disclosure:</span> VitalityScout may earn a commission from some links, at no extra cost to you. This never affects which providers we list or how we describe them.
          </p>
        </section>

        {/* Repeated CTA */}
        <section className="px-4 pb-16 sm:px-6">
          <div className={`mx-auto flex max-w-5xl flex-col items-start justify-between gap-4 rounded-2xl border border-gray-200 ${a.soft} p-8 sm:flex-row sm:items-center`}>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Compare {config.eyebrow.toLowerCase()} options</h2>
              <p className="mt-1 text-sm text-gray-600">Transparent prices, side by side. Find the right fit and what it really costs.</p>
            </div>
            <a href="#browse" className={`inline-flex shrink-0 items-center gap-2 rounded-full ${a.cta} px-6 py-3 text-sm font-semibold text-white`}>
              Browse all <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>

      </SidebarShell>
      <Footer />
    </main>
  );
}
