import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import { Globe, ArrowRight, Plane, ShieldCheck, BadgeCheck, Tag } from 'lucide-react';
import { DESTINATION_PHOTO_CREDITS } from '@/lib/destination-photo-credits';

export const metadata: Metadata = {
  title: 'Medical Tourism: Save 50–80% on Procedures Abroad',
  description:
    'Compare medical tourism destinations and real US-vs-abroad prices — hair transplants, dental, bariatric, IVF, and major surgery at 50–80% off US costs.',
  alternates: { canonical: 'https://vitalityscout.com/medical-tourism' },
};

// Real US-vs-abroad figures sourced from providers-medical-tourism + procedure guides.
const COST_TABLE = [
  { procedure: 'Hair transplant (FUE)', abroad: '$1,800–5,900', us: '$10,000–20,000', save: 'up to 75%' },
  { procedure: 'Dental implant (each)', abroad: '$750–1,200', us: '$3,000–5,000', save: '~70%' },
  { procedure: 'Gastric sleeve', abroad: '$2,800–7,500', us: '~$19,000', save: '60–80%' },
  { procedure: 'IVF (one cycle)', abroad: '$5,000–8,000', us: '$15,000–30,000', save: '50–70%' },
  { procedure: 'Knee replacement', abroad: '$4,500–8,000', us: '$30,000–50,000', save: 'up to 80%' },
  { procedure: 'Heart bypass', abroad: '$5,000–9,000', us: '$70,000–150,000', save: 'up to 90%' },
  { procedure: 'LASIK (both eyes)', abroad: '$1,300–2,500', us: '$4,000–6,000', save: '~60%' },
];

const DESTINATIONS = [
  { slug: 'mexico', name: 'Mexico', flag: '🇲🇽', knownFor: 'Dental · Bariatric · Stem cells' },
  { slug: 'turkey', name: 'Turkey', flag: '🇹🇷', knownFor: 'Hair transplant · Dental' },
  { slug: 'south-korea', name: 'South Korea', flag: '🇰🇷', knownFor: 'Plastic surgery' },
  { slug: 'thailand', name: 'Thailand', flag: '🇹🇭', knownFor: 'Cosmetic · Dental · Orthopedic' },
  { slug: 'india', name: 'India', flag: '🇮🇳', knownFor: 'Cardiac · Orthopedic · Fertility' },
  { slug: 'costa-rica', name: 'Costa Rica', flag: '🇨🇷', knownFor: 'Dental · Cosmetic' },
  { slug: 'spain', name: 'Spain', flag: '🇪🇸', knownFor: 'Fertility / IVF' },
  { slug: 'czech-republic', name: 'Czech Republic', flag: '🇨🇿', knownFor: 'Fertility / IVF' },
  { slug: 'panama', name: 'Panama', flag: '🇵🇦', knownFor: 'Stem cells' },
  { slug: 'colombia', name: 'Colombia', flag: '🇨🇴', knownFor: 'Plastic surgery · Stem cells' },
  { slug: 'cayman-islands', name: 'Cayman Islands', flag: '🇰🇾', knownFor: 'Stem cells · Cardiac' },
  { slug: 'dubai', name: 'Dubai', flag: '🇦🇪', knownFor: 'Cosmetic · Dental' },
  { slug: 'brazil', name: 'Brazil', flag: '🇧🇷', knownFor: 'Plastic surgery' },
  { slug: 'hungary', name: 'Hungary', flag: '🇭🇺', knownFor: 'Dental' },
];

const PROCEDURES = [
  { label: 'Hair Transplant', href: '/hair_transplant' },
  { label: 'Dental', href: '/dental' },
  { label: 'Plastic Surgery', href: '/plastic_surgery' },
  { label: 'Bariatric Surgery', href: '/bariatric' },
  { label: 'Fertility & IVF', href: '/fertility' },
  { label: 'Orthopedic', href: '/orthopedic' },
];

const GUIDES = [
  { title: 'Turkey Hair Transplant Trip Planner', href: '/guides/turkey-hair-transplant-trip-planner' },
  { title: 'Mexico Medical Tourism Planner', href: '/guides/mexico-medical-tourism-planner' },
  { title: 'Medical Travel Insurance Guide', href: '/guides/medical-travel-insurance-guide' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Medical Tourism',
  description: 'Compare medical tourism destinations and US-vs-abroad prices.',
  url: 'https://vitalityscout.com/medical-tourism',
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navigation />
      <SidebarShell>

        {/* Hero */}
        <section className="relative overflow-hidden border-b border-gray-100 bg-gradient-to-b from-purple-50 to-white">
          <Globe className="pointer-events-none absolute -right-8 -top-8 h-64 w-64 text-purple-600 opacity-[0.06]" strokeWidth={1.5} />
          <div className="relative mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
            <div className="grid items-center gap-8 lg:grid-cols-[1.5fr_1fr]">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-purple-50 px-3 py-1 text-sm font-medium text-purple-600">
                  <Globe className="h-4 w-4" strokeWidth={2} /> Medical Tourism
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Save 50–80% on care abroad</h1>
                <p className="mt-4 max-w-xl text-lg leading-8 text-gray-600">
                  The same procedures — hair transplants, dental, bariatric, IVF, major surgery — at world-class accredited clinics, for a fraction of US prices.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a href="#costs" className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white hover:bg-purple-700">
                    See US vs abroad prices <ArrowRight className="h-4 w-4" />
                  </a>
                  <a href="#destinations" className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50">
                    Browse destinations
                  </a>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-sm backdrop-blur">
                <div className="text-xs font-semibold uppercase tracking-wide text-gray-400">Example: hair transplant</div>
                <div className="mt-1 text-4xl font-bold text-purple-600">$1,800–5,900</div>
                <div className="mt-1 text-sm text-gray-600">in Turkey, all-inclusive</div>
                <div className="mt-4 border-t border-gray-100 pt-4 text-xs text-gray-500">vs $10,000–20,000 in the US — up to 75% less.</div>
              </div>
            </div>
          </div>
        </section>

        {/* US vs abroad cost table */}
        <section id="costs" className="mx-auto max-w-5xl scroll-mt-20 px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900">US vs. abroad: what procedures really cost</h2>
          <p className="mt-2 text-gray-600">Typical cash-pay ranges. Prices vary by clinic and case — confirm directly before booking.</p>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-600">
                <tr>
                  <th className="px-4 py-3 font-semibold">Procedure</th>
                  <th className="px-4 py-3 font-semibold">Typical abroad</th>
                  <th className="px-4 py-3 font-semibold">Typical US</th>
                  <th className="px-4 py-3 font-semibold">You save</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {COST_TABLE.map((r) => (
                  <tr key={r.procedure} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">{r.procedure}</td>
                    <td className="px-4 py-3 font-semibold text-purple-700">{r.abroad}</td>
                    <td className="px-4 py-3 text-gray-500">{r.us}</td>
                    <td className="px-4 py-3"><span className="rounded-full bg-green-50 px-2 py-0.5 text-xs font-semibold text-green-700">{r.save}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Destinations with photos */}
        <section id="destinations" className="scroll-mt-20 border-t border-gray-100 bg-gray-50/60 px-4 py-14 sm:px-6">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-2xl font-bold text-gray-900">Top destinations</h2>
            <p className="mt-2 text-gray-600">Where people travel for high-value care — and what each is known for.</p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {DESTINATIONS.map((d) => (
                <Link key={d.slug} href={`/destinations/${d.slug}`} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-shadow hover:shadow-md">
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                    <Image
                      src={`/destinations/${d.slug}.jpg`}
                      alt={d.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 360px"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{d.flag}</span>
                      <h3 className="font-semibold text-gray-900 group-hover:text-purple-700">{d.name}</h3>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">{d.knownFor}</p>
                  </div>
                </Link>
              ))}
            </div>
            <p className="mt-4 text-xs text-gray-400">
              Destination photos via{' '}
              <a href="https://unsplash.com/?utm_source=vitalityscout&utm_medium=referral" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">Unsplash</a>
              {' — '}
              {DESTINATION_PHOTO_CREDITS.map((c, i) => (
                <span key={c.slug}>
                  <a href={c.photographerUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 hover:underline">{c.photographer}</a>
                  {i < DESTINATION_PHOTO_CREDITS.length - 1 ? ', ' : '.'}
                </span>
              ))}
            </p>
          </div>
        </section>

        {/* Procedures */}
        <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900">Browse by procedure</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {PROCEDURES.map((p) => (
              <Link key={p.href} href={p.href} className="flex items-center justify-between rounded-xl border border-gray-200 px-4 py-3 transition-colors hover:border-purple-300 hover:bg-purple-50/40">
                <span className="font-medium text-gray-800">{p.label}</span>
                <ArrowRight className="h-4 w-4 text-gray-300" />
              </Link>
            ))}
          </div>
        </section>

        {/* Guides */}
        <section className="border-t border-gray-100 bg-gray-50/60 px-4 py-14 sm:px-6">
          <div className="mx-auto max-w-5xl">
            <div className="mb-6 flex items-end justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Plan your trip</h2>
              <Link href="/guides" className="text-sm font-medium text-purple-700 hover:underline">All guides</Link>
            </div>
            <div className="grid gap-5 sm:grid-cols-3">
              {GUIDES.map((g) => (
                <Link key={g.href} href={g.href} className="group rounded-2xl border border-gray-200 bg-white p-5 transition-shadow hover:shadow-md">
                  <Plane className="h-5 w-5 text-purple-600" />
                  <h3 className="mt-3 font-semibold text-gray-900">{g.title}</h3>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-purple-700">Read guide <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Safety + trust */}
        <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="flex items-start gap-3">
              <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-purple-600" />
              <div>
                <div className="text-sm font-semibold text-gray-900">Accreditation first</div>
                <p className="mt-0.5 text-xs text-gray-500">Look for JCI / ISO-accredited clinics and board-certified surgeons.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Tag className="mt-0.5 h-5 w-5 shrink-0 text-purple-600" />
              <div>
                <div className="text-sm font-semibold text-gray-900">All-in pricing</div>
                <p className="mt-0.5 text-xs text-gray-500">Confirm what the quote includes — hotel, transfers, follow-up.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-purple-600" />
              <div>
                <div className="text-sm font-semibold text-gray-900">Plan for recovery</div>
                <p className="mt-0.5 text-xs text-gray-500">Budget recovery time and travel insurance before you book.</p>
              </div>
            </div>
          </div>
          <p className="mt-8 rounded-lg bg-amber-50 px-4 py-3 text-xs leading-relaxed text-amber-900">
            <span className="font-semibold">Medical disclaimer:</span> This page is general information, not medical advice. Prices are estimates aggregated from public sources and change frequently — confirm current pricing, clinic accreditation, and surgeon credentials directly. Talk to a licensed clinician before booking any procedure.{' '}
            <span className="font-semibold">Affiliate disclosure:</span> VitalityScout may earn a commission from some links, at no extra cost to you.
          </p>
        </section>

      </SidebarShell>
      <Footer />
    </main>
  );
}
