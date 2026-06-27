import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import { getAllPerfCategories, getPerfProductsByCategory } from '@/lib/performance-products';

export const metadata: Metadata = {
  title: 'Longevity & Performance Products: CGMs, Longevity Rx & More',
  description:
    'The cash-pay, buy-online side of healthspan: continuous glucose monitors, longevity medications, peptides, supplements, and recovery tech — compared on price, evidence, and who they fit.',
  keywords: [
    'longevity products',
    'human performance products',
    'continuous glucose monitor',
    'longevity medications',
    'biohacking',
    'metabolic health',
    'NAD+',
    'peptides',
  ],
};

// Categories that are live vs. on the near-term roadmap. Live ones are
// data-backed and link out; roadmap ones render as "coming soon" cards so the
// hub communicates the full scope of the pillar as it expands.
const ROADMAP = [
  { icon: '🧬', label: 'Biological Age Tests', note: 'Epigenetic & blood-based aging clocks (TruDiagnostic & more)' },
  { icon: '🧠', label: 'Nootropics & Cognitive', note: 'Focus, memory & cognitive-longevity products' },
  { icon: '😴', label: 'Sleep & Circadian', note: 'Sleep aids, light therapy & circadian tools' },
];

export default function LongevityPerformanceHub() {
  const categories = getAllPerfCategories();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Longevity & Performance Products',
    description:
      'Cash-pay, direct-to-consumer products and programs for longevity, metabolic health, and human performance.',
    url: 'https://vitalityscout.com/longevity-performance',
    inLanguage: 'en-US',
    isPartOf: { '@type': 'WebSite', name: 'VitalityScout', url: 'https://vitalityscout.com' },
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <SidebarShell>

      {/* Hero */}
      <section className="bg-gradient-to-b from-emerald-50 to-white px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 text-5xl">🧬</div>
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Longevity &amp; Performance Products
          </h1>
          <p className="mb-8 text-xl text-gray-600">
            The buy-online side of healthspan. We compare the products and telehealth programs
            people use to track metabolism, slow aging, and perform better — on price, evidence,
            and who they actually fit.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <span className="rounded-full bg-emerald-100 px-4 py-2 text-emerald-700">Cash-Pay</span>
            <span className="rounded-full bg-blue-100 px-4 py-2 text-blue-700">Buy Online</span>
            <span className="rounded-full bg-purple-100 px-4 py-2 text-purple-700">Evidence-Aware</span>
          </div>
        </div>
      </section>

      {/* Live categories */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">Shop by Category</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((cat) => {
            const count = getPerfProductsByCategory(cat.slug).length;
            return (
              <Link
                key={cat.slug}
                href={`/${cat.slug}`}
                className="group rounded-lg border-2 border-gray-200 bg-white p-6 transition-all hover:border-emerald-400 hover:shadow-lg"
              >
                <div className="mb-3 text-4xl">{cat.icon}</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-emerald-600">
                  {cat.name}
                </h3>
                <p className="mb-4 text-gray-600">{cat.description}</p>
                <div className="mb-3 text-sm text-gray-500">
                  <strong>Typical cost:</strong> {cat.priceRange} · {count} options compared
                </div>
                <span className="font-medium text-emerald-600">Compare options →</span>
              </Link>
            );
          })}
        </div>

        {/* Roadmap */}
        <h3 className="mb-4 mt-12 text-center text-lg font-semibold text-gray-500">
          Expanding next
        </h3>
        <div className="grid gap-6 md:grid-cols-3">
          {ROADMAP.map((r) => (
            <div key={r.label} className="rounded-lg border-2 border-dashed border-gray-200 p-6 text-center">
              <div className="mb-2 text-3xl">{r.icon}</div>
              <div className="font-semibold text-gray-900">{r.label}</div>
              <div className="mt-1 text-sm text-gray-500">{r.note}</div>
              <div className="mt-3 text-xs font-medium uppercase tracking-wide text-gray-400">
                Coming soon
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why this matters */}
      <section className="bg-gray-50 px-4 py-14">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            What counts as a longevity &amp; performance product?
          </h2>
          <p className="mb-4 text-gray-700">
            This is the direct-to-consumer, no-clinic-visit side of health: things you order online
            and use yourself to understand and improve how your body ages and performs. It overlaps
            with telehealth but skews toward measurement, optimization, and prevention rather than
            treating a diagnosed condition.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-emerald-200 bg-white p-6">
              <h3 className="mb-3 font-bold text-emerald-800">What we cover</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Wearables &amp; sensors (CGMs, recovery trackers)</li>
                <li>• Longevity-oriented telehealth prescriptions</li>
                <li>• Peptides &amp; research compounds (with honest caveats)</li>
                <li>• Evidence-based supplements</li>
                <li>• Recovery &amp; performance hardware</li>
              </ul>
            </div>
            <div className="rounded-lg border border-amber-200 bg-white p-6">
              <h3 className="mb-3 font-bold text-amber-800">How we keep it honest</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• We flag what is and isn&apos;t FDA-approved</li>
                <li>• We separate proven from promising from hype</li>
                <li>• Prices are estimates to verify at the source</li>
                <li>• We say &quot;talk to a clinician&quot; and mean it</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related guides */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="mb-6 text-2xl font-bold text-gray-900">Related Guides &amp; Resources</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Link href="/guides/nad-therapy-guide" className="rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="mb-1 font-semibold text-gray-900">NAD+ Therapy Guide</div>
            <div className="text-sm text-gray-600">IV vs oral, costs, and what the science shows</div>
          </Link>
          <Link href="/guides/peptide-therapy-guide" className="rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="mb-1 font-semibold text-gray-900">Peptide Therapy Guide</div>
            <div className="text-sm text-gray-600">BPC-157, TB-500, and the regulatory reality</div>
          </Link>
          <Link href="/guides/stem-cell-therapy-cost" className="rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="mb-1 font-semibold text-gray-900">Stem Cell Therapy Cost</div>
            <div className="text-sm text-gray-600">What regenerative treatments really run</div>
          </Link>
          <Link href="/labs" className="rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="mb-1 font-semibold text-gray-900">At-Home Lab Testing</div>
            <div className="text-sm text-gray-600">The biomarkers behind longevity tracking</div>
          </Link>
          <Link href="/dexa" className="rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="mb-1 font-semibold text-gray-900">DEXA Body Composition</div>
            <div className="text-sm text-gray-600">Measure fat, muscle, and bone precisely</div>
          </Link>
          <Link href="/longevity" className="rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="mb-1 font-semibold text-gray-900">Longevity Clinics</div>
            <div className="text-sm text-gray-600">In-person health optimization near you</div>
          </Link>
        </div>
      </section>

      </SidebarShell>
      <Footer />
    </main>
  );
}
