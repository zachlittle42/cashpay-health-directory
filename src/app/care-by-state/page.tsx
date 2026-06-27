import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import UsStateMap from '@/components/UsStateMap';
import { US_STATES } from '@/lib/us-map-paths';
import { Building2, ArrowRight, DollarSign, MapPin, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Care by State: Cash-Pay Clinics & Self-Pay Prices by State',
  description:
    'Find cash-pay and self-pay healthcare in your state — clinics, hospitals, and transparent prices, no insurance required. Pick your state to start.',
  alternates: { canonical: 'https://vitalityscout.com/care-by-state' },
};

const STATES_AZ = [...US_STATES].filter((s) => s.id !== 'dc').sort((a, b) => a.name.localeCompare(b.name));

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Care by State',
  description: 'Cash-pay healthcare by US state.',
  url: 'https://vitalityscout.com/care-by-state',
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navigation />
      <SidebarShell>

        {/* Hero */}
        <section className="relative overflow-hidden border-b border-gray-100 bg-gradient-to-b from-orange-50 to-white">
          <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
            <div className="grid items-center gap-8 lg:grid-cols-[1.5fr_1fr]">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1 text-sm font-medium text-orange-600">
                  <Building2 className="h-4 w-4" strokeWidth={2} /> Care by State
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Find cash-pay care in your state</h1>
                <p className="mt-4 max-w-xl text-lg leading-8 text-gray-600">
                  Self-pay clinics, hospitals, and transparent prices — without insurance. Pick your state to see what care costs near you.
                </p>
                <a href="#map" className="mt-7 inline-flex items-center gap-2 rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-700">
                  Choose your state <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-sm backdrop-blur">
                <div className="text-xs font-semibold uppercase tracking-wide text-gray-400">Why cash-pay</div>
                <div className="mt-1 text-4xl font-bold text-orange-600">50 states</div>
                <div className="mt-1 text-sm text-gray-600">cash-pay clinics and self-pay options, mapped</div>
                <div className="mt-4 border-t border-gray-100 pt-4 text-xs text-gray-500">
                  Self-pay prices are often posted up front — no claims, no surprise bills.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value band */}
        <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="flex items-start gap-3 rounded-xl border border-gray-200 p-4">
              <DollarSign className="mt-0.5 h-5 w-5 shrink-0 text-orange-600" />
              <div>
                <div className="text-sm font-semibold text-gray-900">Self-pay prices up front</div>
                <p className="mt-0.5 text-xs text-gray-500">Cash rates are often far below billed charges.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-gray-200 p-4">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-orange-600" />
              <div>
                <div className="text-sm font-semibold text-gray-900">Local + telehealth</div>
                <p className="mt-0.5 text-xs text-gray-500">In-person clinics and online care that ships nationwide.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-gray-200 p-4">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-orange-600" />
              <div>
                <div className="text-sm font-semibold text-gray-900">No insurance required</div>
                <p className="mt-0.5 text-xs text-gray-500">Pay direct — useful uninsured or with a high deductible.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Clickable map */}
        <section id="map" className="scroll-mt-20 border-y border-gray-100 bg-gray-50/60 px-4 py-14 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-2xl font-bold text-gray-900">Pick your state</h2>
            <p className="mx-auto mt-2 max-w-xl text-center text-gray-600">Tap a state on the map to see cash-pay clinics, hospitals, and prices near you.</p>
            <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-4 sm:p-6">
              <UsStateMap />
            </div>
          </div>
        </section>

        {/* A-Z index */}
        <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900">All states, A–Z</h2>
          <p className="mt-2 text-gray-600">Prefer a list? Jump straight to any state.</p>
          <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
            {STATES_AZ.map((s) => (
              <Link
                key={s.slug}
                href={`/traditional-healthcare/${s.slug}`}
                className="flex items-center justify-between rounded-lg border border-gray-200 px-4 py-2.5 text-sm transition-colors hover:border-orange-300 hover:bg-orange-50/40"
              >
                <span className="font-medium text-gray-800">{s.name}</span>
                <span className="text-xs text-gray-400">{s.id.toUpperCase()}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Cross-link + CTA */}
        <section className="px-4 pb-16 sm:px-6">
          <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-4 rounded-2xl border border-gray-200 bg-orange-50/60 p-8 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-xl font-bold text-gray-900">No travel? Get care shipped to your door</h2>
              <p className="mt-1 text-sm text-gray-600">Many treatments — labs, GLP-1, TRT, therapy — are cash-pay online, in every state.</p>
            </div>
            <Link href="/treat-see-doctor" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-700">
              Browse telehealth <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

      </SidebarShell>
      <Footer />
    </main>
  );
}
