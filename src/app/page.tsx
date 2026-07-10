import Link from 'next/link';
import type { Metadata } from 'next';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import { LogoMark } from '@/components/Logo';
import SearchAutocomplete from '@/components/SearchAutocomplete';
import { NAV_GROUPS, type NavGroup } from '@/lib/nav-tree';
import { HOME_PHOTO_CREDITS } from '@/lib/home-photo-credits';
import { DESTINATION_PHOTO_CREDITS } from '@/lib/destination-photo-credits';
import {
  Microscope, Scale, Dna, Zap, Sparkles, Stethoscope, Globe, Building2, Circle,
  Package, MapPin, Plane, ArrowRight, DollarSign, BadgeCheck, Scale as ScaleIcon,
} from 'lucide-react';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

const ICONS: Record<string, any> = {
  Microscope, Scale, Dna, Zap, Sparkles, Stethoscope, Globe, Building2, Circle,
};

// Per-group hub link + accent chip (literal classes so Tailwind picks them up).
const GROUP_CARD: Record<string, { hub: string; chip: string }> = {
  'test-diagnose': { hub: '/test-diagnose', chip: 'bg-blue-50 text-blue-600' },
  'lose-weight': { hub: '/lose-weight', chip: 'bg-emerald-50 text-emerald-600' },
  'balance-hormones': { hub: '/balance-hormones', chip: 'bg-violet-50 text-violet-600' },
  'live-longer': { hub: '/live-longer', chip: 'bg-amber-50 text-amber-600' },
  'look-better': { hub: '/look-better', chip: 'bg-rose-50 text-rose-600' },
  'treat-see-doctor': { hub: '/treat-see-doctor', chip: 'bg-sky-50 text-sky-600' },
  'medical-tourism': { hub: '/medical-tourism', chip: 'bg-purple-50 text-purple-600' },
  'care-by-state': { hub: '/care-by-state', chip: 'bg-orange-50 text-orange-600' },
};

const PRIMARY_GROUPS = NAV_GROUPS.filter((g) => g.id !== 'resources');

const POPULAR_SEARCHES = [
  { l: 'DEXA scan', h: '/dexa' },
  { l: 'GLP-1', h: '/glp1' },
  { l: 'TRT', h: '/trt' },
  { l: 'Hair transplant', h: '/hair_transplant' },
  { l: 'Lab testing', h: '/labs' },
];

// Three "ways to get care" — teaches the site's three delivery modes.
const WAYS = [
  {
    icon: Package, chip: 'bg-blue-50 text-blue-600', img: '/home/telehealth.jpg',
    title: 'Ship to your door', desc: 'No travel. Order online; results or meds arrive at home.',
    links: [{ l: 'At-home lab testing', h: '/labs' }, { l: 'GLP-1 programs', h: '/glp1' }, { l: 'TRT & hormones', h: '/trt' }],
  },
  {
    icon: MapPin, chip: 'bg-emerald-50 text-emerald-600', img: '/home/clinic.jpg',
    title: 'Visit a local clinic', desc: 'Cash-pay services near you that need an in-person visit.',
    links: [{ l: 'DEXA body scans', h: '/dexa' }, { l: 'Med spa & aesthetics', h: '/med-spa' }, { l: 'IV therapy', h: '/iv' }],
  },
  {
    icon: Plane, chip: 'bg-purple-50 text-purple-600', img: '/home/travel.jpg',
    title: 'Travel & save abroad', desc: 'Major procedures at 50–80% off US prices. Compare destinations.',
    links: [{ l: 'Hair transplant abroad', h: '/hair_transplant' }, { l: 'Dental tourism', h: '/dental' }, { l: 'All destinations', h: '/medical-tourism' }],
  },
];

// Photo credits shown on the homepage (Unsplash attribution per their API guidelines).
const SHOWN_DEST = ['mexico', 'turkey', 'south-korea', 'thailand', 'spain', 'panama'];
const PHOTO_CREDITS = [
  ...HOME_PHOTO_CREDITS.map((c) => ({ name: c.photographer, url: c.photographerUrl })),
  ...DESTINATION_PHOTO_CREDITS.filter((c) => SHOWN_DEST.includes(c.slug)).map((c) => ({ name: c.photographer, url: c.photographerUrl })),
];

const FEATURED_GUIDES = [
  { h: '/guides/glp1-weight-loss-complete-guide', emoji: '💊', t: 'GLP-1 Weight Loss Guide', d: 'How semaglutide works, expected results, and real costs.', c: 'hover:border-blue-400 group-hover:text-blue-600 text-blue-600' },
  { h: '/guides/hair-transplant-turkey-guide', emoji: '💇', t: 'Hair Transplant in Turkey', d: 'Safety checklist, choosing clinics, and what to expect.', c: 'hover:border-purple-400 group-hover:text-purple-600 text-purple-600' },
  { h: '/guides/mexico-medical-tourism-planner', emoji: '🇲🇽', t: 'Mexico Trip Planner', d: 'Border-crossing tips, packing list, and trip timeline.', c: 'hover:border-emerald-400 group-hover:text-emerald-600 text-emerald-600' },
  { h: '/guides/dexa-scan-guide', emoji: '🦴', t: 'DEXA Scan Guide', d: 'What it measures, where to get one, and typical costs.', c: 'hover:border-amber-400 group-hover:text-amber-600 text-amber-600' },
];

const DESTINATIONS = [
  { name: 'Mexico', flag: '🇲🇽', s: 'Dental · Bariatric · Stem cells', h: '/destinations/mexico' },
  { name: 'Turkey', flag: '🇹🇷', s: 'Hair transplant · Dental', h: '/destinations/turkey' },
  { name: 'South Korea', flag: '🇰🇷', s: 'Plastic surgery', h: '/destinations/south-korea' },
  { name: 'Thailand', flag: '🇹🇭', s: 'Cosmetic · Orthopedic', h: '/destinations/thailand' },
  { name: 'Spain', flag: '🇪🇸', s: 'Fertility / IVF', h: '/destinations/spain' },
  { name: 'Panama', flag: '🇵🇦', s: 'Stem cells', h: '/destinations/panama' },
];

const VALUE_PROPS = [
  { icon: DollarSign, chip: 'bg-blue-50 text-blue-600', t: 'Transparent pricing', d: 'Real prices, not "contact us." We do the research so you don’t have to.' },
  { icon: BadgeCheck, chip: 'bg-emerald-50 text-emerald-600', t: 'Curated quality', d: 'Not everyone gets listed. We vet for accreditation and reputation.' },
  { icon: ScaleIcon, chip: 'bg-violet-50 text-violet-600', t: 'Honest comparisons', d: 'Pros and cons, "best for X" picks, and editorial opinions.' },
];

function GroupCard({ group }: { group: NavGroup }) {
  const Icon = ICONS[group.icon] || Circle;
  const meta = GROUP_CARD[group.id];
  const items = group.subsections.flatMap((s) => s.items).slice(0, 4);
  return (
    <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-5 transition-shadow hover:shadow-md">
      <Link href={meta.hub} className="mb-3 flex items-center gap-3">
        <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${meta.chip}`}>
          <Icon className="h-5 w-5" strokeWidth={2} />
        </span>
        <span className="font-semibold text-gray-900">{group.label}</span>
      </Link>
      <ul className="space-y-1.5">
        {items.map((it) => (
          <li key={it.url}>
            <Link href={it.url} className="text-sm text-gray-600 hover:text-blue-700">{it.label}</Link>
          </li>
        ))}
      </ul>
      <Link href={meta.hub} className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700">
        View all <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
}

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'VitalityScout',
    description:
      'Compare healthcare options: traditional, cash-pay telehealth, and medical tourism. Find transparent pricing for labs, GLP-1, dental work, hair transplants, and more.',
    url: 'https://vitalityscout.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://vitalityscout.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navigation />
      <SidebarShell>

      {/* Hero — search + image */}
      <section className="border-b border-gray-100 bg-gradient-to-b from-blue-50/70 to-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Find the right care at the right price.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-gray-600">
              Compare cash-pay clinics, telehealth, and treatment abroad — transparent prices, honest comparisons, no insurance maze.
            </p>
            <div className="mt-8 max-w-xl">
              <SearchAutocomplete variant="hero" placeholder="Search a treatment, clinic, or destination…" />
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
              <span className="text-gray-400">Popular:</span>
              {POPULAR_SEARCHES.map((t) => (
                <Link key={t.h} href={t.h} className="rounded-full border border-gray-200 bg-white/60 px-3 py-1 text-gray-600 hover:border-blue-300 hover:text-blue-700">
                  {t.l}
                </Link>
              ))}
            </div>
          </div>
          <div className="relative hidden aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-lg ring-1 ring-black/5 lg:block">
            <Image
              src="/home/hero.jpg"
              alt="A clinician reviewing care options with a patient"
              fill
              sizes="(min-width: 1024px) 40vw, 0px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Three ways to get care */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Three ways to get care</h2>
          <p className="mt-2 text-gray-600">However you want to be treated, we map the options and the prices.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {WAYS.map((w) => {
            const Icon = w.icon;
            return (
              <div key={w.title} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-shadow hover:shadow-md">
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-100">
                  <Image src={w.img} alt={w.title} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition-transform duration-300 group-hover:scale-105" />
                  <span className={`absolute left-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-lg shadow-sm ${w.chip}`}>
                    <Icon className="h-4 w-4" strokeWidth={2} />
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900">{w.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{w.desc}</p>
                  <ul className="mt-4 space-y-1.5 border-t border-gray-100 pt-4">
                    {w.links.map((l) => (
                      <li key={l.h}>
                        <Link href={l.h} className="inline-flex items-center gap-1 text-sm text-gray-700 hover:text-blue-700">
                          {l.l} <ArrowRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Browse by goal — mirrors the sidebar's 8 consumer-goal groups */}
      <section className="border-y border-gray-100 bg-gray-50/60 px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Browse by goal</h2>
            <p className="mt-2 text-gray-600">The whole world of cash-pay healthcare, organized by what you&apos;re trying to do.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {PRIMARY_GROUPS.map((g) => (
              <GroupCard key={g.id} group={g} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured guides */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Learn before you book</h2>
            <p className="mt-2 text-gray-600">Evidence-based guides to help you decide with confidence.</p>
          </div>
          <Link href="/guides" className="hidden shrink-0 text-sm font-medium text-blue-600 hover:text-blue-700 sm:inline-flex sm:items-center sm:gap-1">
            All guides <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURED_GUIDES.map((g) => (
            <Link key={g.h} href={g.h} className={`group rounded-2xl border border-gray-200 p-6 transition-all hover:shadow-md ${g.c.split(' ')[0]}`}>
              <div className="mb-3 text-3xl">{g.emoji}</div>
              <h3 className={`mb-2 font-bold text-gray-900 ${g.c.split(' ')[1]}`}>{g.t}</h3>
              <p className="mb-3 text-sm text-gray-600">{g.d}</p>
              <span className={`inline-flex items-center gap-1 text-sm font-medium ${g.c.split(' ')[2]}`}>
                Read guide <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular destinations */}
      <section className="border-t border-gray-100 bg-gradient-to-b from-white to-purple-50/50 px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Popular destinations</h2>
            <p className="mt-2 text-gray-600">Where people travel for high-value care — and what each is known for.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {DESTINATIONS.map((d) => (
              <Link key={d.h} href={d.h} className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition-shadow hover:shadow-md">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                  <Image src={`/destinations/${d.h.split('/').pop()}.jpg`} alt={d.name} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <div className="flex items-center gap-2 p-4">
                  <span className="text-lg">{d.flag}</span>
                  <div>
                    <div className="font-medium text-gray-900 group-hover:text-purple-700">{d.name}</div>
                    <div className="text-xs text-gray-500">{d.s}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/medical-tourism" className="inline-flex items-center gap-1 text-sm font-medium text-purple-700 hover:text-purple-800">
              Compare all destinations <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why use this */}
      <section className="mx-auto max-w-5xl px-4 py-14">
        <h2 className="mb-8 text-center text-2xl font-bold text-gray-900">Why use VitalityScout?</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {VALUE_PROPS.map((v) => {
            const Icon = v.icon;
            return (
              <div key={v.t} className="rounded-2xl border border-gray-200 p-6 text-center">
                <span className={`mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full ${v.chip}`}>
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <h3 className="font-semibold text-gray-900">{v.t}</h3>
                <p className="mt-2 text-sm text-gray-600">{v.d}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Centurion Coach promo */}
      <section className="mx-auto max-w-4xl px-4 pb-16">
        <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-sky-500 p-8 text-white md:p-12">
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <div className="flex-1">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
                </span>
                Free iOS app
              </div>
              <h3 className="mb-4 text-2xl font-bold md:text-3xl">Track your health journey with Centurion Coach</h3>
              <p className="mb-6 text-blue-50">
                Started a GLP-1 program? Planning treatment abroad? Track nutrition, supplements, labs, and progress in one place with AI-powered coaching.
              </p>
              <Link href="/centurioncoach" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-blue-50">
                Learn more <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <LogoMark className="h-28 w-auto shrink-0 text-white/90" />
          </div>
        </div>
      </section>

      {/* Photo credits */}
      <section className="mx-auto max-w-6xl px-4 pb-10 sm:px-6">
        <p className="text-xs text-gray-400">
          Photography via{' '}
          <a href="https://unsplash.com/?utm_source=vitalityscout&utm_medium=referral" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">Unsplash</a>
          {' — '}
          {PHOTO_CREDITS.map((c, i) => (
            <span key={c.url + i}>
              <a href={c.url} target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 hover:underline">{c.name}</a>
              {i < PHOTO_CREDITS.length - 1 ? ', ' : '.'}
            </span>
          ))}
        </p>
      </section>

      </SidebarShell>
      <Footer />
    </main>
  );
}
