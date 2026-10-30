import Link from 'next/link';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';
import { JOURNEYS } from '@/lib/destinations/journeys';
import type { DestinationDossier, Source, Step } from '@/lib/destinations/types';
import type { Provider } from '@/lib/types';
import {
  ArrowRight, ShieldCheck, AlertTriangle, ClipboardCheck, Plane, Building2, BadgeCheck, ExternalLink, CalendarCheck, Stethoscope, MessageSquare,
} from 'lucide-react';

const SITE = 'https://vitalityscout.com';

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group border-b border-gray-200 py-5">
      <summary className="flex cursor-pointer items-start justify-between text-base font-semibold text-gray-900 hover:text-purple-700 sm:text-lg">
        <span className="pr-4">{question}</span>
        <span className="text-purple-600 transition-transform group-open:rotate-180">▼</span>
      </summary>
      <p className="mt-3 text-gray-700">{answer}</p>
    </details>
  );
}

function SectionHeading({ id, eyebrow, title, intro }: { id: string; eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="mb-6">
      <p className="text-xs font-bold uppercase tracking-wide text-purple-700">{eyebrow}</p>
      <h2 id={id} className="mt-1 scroll-mt-28 text-2xl font-bold text-gray-900 sm:text-3xl">{title}</h2>
      {intro && <p className="mt-2 max-w-3xl text-gray-600">{intro}</p>}
    </div>
  );
}

const TYPE_LABEL: Record<string, string> = {
  hospital: 'Hospital',
  clinic: 'Clinic',
  'screening center': 'Screening center',
  dental: 'Dental',
  eye: 'Eye',
};

export default function DestinationHub({ dossier, providers }: { dossier: DestinationDossier; providers: Provider[] }) {
  const d = dossier;
  const journey = JOURNEYS[d.slug];
  const pageUrl = `${SITE}/destinations/${d.slug}`;
  const sourceIndex = new Map<string, number>(d.sources.map((s, i) => [s.id, i + 1]));

  const Cite = ({ ids }: { ids?: string[] }) => {
    if (!ids || !ids.length) return null;
    return (
      <sup className="ml-0.5 whitespace-nowrap text-[10px] font-medium text-purple-700">
        {ids.map((id) => {
          const n = sourceIndex.get(id);
          if (!n) return null;
          return (
            <a key={id} href={`#src-${n}`} className="hover:underline" aria-label={`Source ${n}`}>[{n}]</a>
          );
        })}
      </sup>
    );
  };

  const StepList = ({ steps, numbered = true }: { steps: Step[]; numbered?: boolean }) => (
    <ol className="space-y-4">
      {steps.map((s, i) => (
        <li key={s.title} className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-5">
          {numbered && <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-100 text-sm font-bold text-purple-800">{i + 1}</span>}
          <div className="min-w-0">
            <h3 className="font-bold text-gray-900">{s.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-gray-700">
              {s.body}
              <Cite ids={s.sourceIds} />
            </p>
            {s.link && (
              <a href={s.link.url} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-purple-700 hover:underline">
                {s.link.label} <ExternalLink className="h-3.5 w-3.5" aria-hidden />
              </a>
            )}
          </div>
        </li>
      ))}
    </ol>
  );

  const stageLinks = (id: string) =>
    journey?.stages.find((s) => s.id === id)?.links.filter((l) => !l.href.startsWith(journey.hubHref)) ?? [];

  const GuideChips = ({ stage }: { stage: string }) => {
    const links = stageLinks(stage);
    if (!links.length) return null;
    return (
      <div className="mt-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Go deeper</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="rounded-lg border border-purple-200 bg-white px-3 py-1.5 text-sm font-medium text-purple-800 hover:bg-purple-50">
              {l.label} →
            </Link>
          ))}
        </div>
      </div>
    );
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Medical Tourism', item: `${SITE}/medical-tourism` },
      { '@type': 'ListItem', position: 3, name: d.displayName, item: pageUrl },
    ],
  };
  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: d.heroTitle,
    description: d.metaDescription,
    url: pageUrl,
    mainEntityOfPage: pageUrl,
    about: { '@type': 'Country', name: d.country },
    author: { '@type': 'Organization', name: 'VitalityScout research', url: SITE },
    publisher: { '@type': 'Organization', name: 'VitalityScout', url: SITE },
    dateModified: d.verifiedAt,
    citation: d.sources.map((s) => s.url),
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#quick-answer'] },
  };
  const howToBook = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to book medical treatment in ${d.displayName}`,
    step: d.booking.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.title, text: s.body })),
  };
  const clinicList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${d.displayName} clinics and hospitals treating international patients`,
    itemListOrder: 'https://schema.org/ItemListUnordered',
    numberOfItems: d.clinics.length,
    itemListElement: d.clinics.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: { '@type': c.type === 'hospital' ? 'Hospital' : 'MedicalClinic', name: c.name, ...(c.url ? { url: c.url } : {}), address: { '@type': 'PostalAddress', addressLocality: c.district, addressCountry: d.country } },
    })),
  };
  const faq = buildFAQSchema(d.faqs);

  const anchors = [
    { id: 'treatments', label: '1 · What people go for' },
    { id: 'clinics', label: '2 · The clinics' },
    { id: 'prices', label: '3 · Prices' },
    { id: 'expect', label: '4 · What to expect' },
    { id: 'travel', label: '5 · Travel' },
    { id: 'book', label: '6 · How to book' },
    { id: 'faq', label: 'FAQ' },
    { id: 'sources', label: 'Sources' },
  ];

  const planCards: { icon: typeof Plane; step: Step }[] = [
    { icon: BadgeCheck, step: d.planning.entry },
    { icon: Plane, step: d.planning.flights },
    { icon: Building2, step: d.planning.whereToStay },
    { icon: ClipboardCheck, step: d.planning.payment },
    { icon: CalendarCheck, step: d.planning.stayAndFlyHome },
    { icon: ShieldCheck, step: d.planning.aftercareAtHome },
  ];

  return (
    <main className="min-h-screen bg-white">
      {[breadcrumb, article, howToBook, clinicList, faq].map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <Navigation />
      <SidebarShell>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="border-b border-gray-100 px-4 py-3">
          <ol className="mx-auto flex max-w-5xl flex-wrap items-center gap-1 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-purple-700 hover:underline">Home</Link></li>
            <li aria-hidden>›</li>
            <li><Link href="/medical-tourism" className="hover:text-purple-700 hover:underline">Medical Tourism</Link></li>
            <li aria-hidden>›</li>
            <li className="font-medium text-gray-900" aria-current="page">{d.displayName}</li>
          </ol>
        </nav>

        {/* Hero + quick answer */}
        <header className="bg-gradient-to-b from-purple-50 to-white px-4 pb-8 pt-10">
          <div className="mx-auto max-w-5xl">
            <p className="text-sm font-semibold text-purple-700">{d.flag} Medical tourism guide · Facts checked {d.verifiedLabel}</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{d.heroTitle}</h1>
            <div id="quick-answer" className="mt-5 rounded-2xl border border-purple-200 bg-white p-5 shadow-sm sm:p-6">
              <p className="text-xs font-bold uppercase tracking-wide text-purple-700">Quick answer</p>
              <p className="mt-2 text-base leading-relaxed text-gray-800 sm:text-lg">{d.quickAnswer}</p>
            </div>
            <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {d.keyFacts.map((f) => (
                <div key={f.label} className="rounded-xl border border-gray-200 bg-white p-4">
                  <dt className="text-xs text-gray-500">{f.label}</dt>
                  <dd className="mt-1 text-lg font-bold leading-tight text-gray-900">
                    {f.value}
                    <Cite ids={f.sourceIds} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </header>

        {/* Sticky in-page nav: the six questions */}
        <div className="sticky top-16 z-20 border-b border-gray-200 bg-white/95 backdrop-blur">
          <nav aria-label="On this page" className="mx-auto max-w-5xl overflow-x-auto px-4">
            <ul className="flex gap-1 py-2 text-sm">
              {anchors.map((a) => (
                <li key={a.id} className="shrink-0">
                  <a href={`#${a.id}`} className="block rounded-full px-3 py-1.5 font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-800">{a.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* 1. Treatments */}
        <section className="mx-auto max-w-5xl px-4 py-12">
          <SectionHeading id="treatments" eyebrow="Question 1" title={`What do people go to ${d.displayName} for?`} intro={d.treatmentsIntro} />
          <div className="grid gap-4 md:grid-cols-2">
            {d.treatments.map((t) => (
              <div key={t.name} className="flex flex-col rounded-2xl border border-gray-200 bg-white p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-bold text-gray-900">{t.name}</h3>
                  {t.demand && <span className="shrink-0 rounded-full bg-purple-50 px-2.5 py-1 text-xs font-semibold text-purple-800">{t.demand}<Cite ids={t.sourceIds} /></span>}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">{t.whyHere}{!t.demand && <Cite ids={t.sourceIds} />}</p>
                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500">
                  <span><strong className="text-gray-700">Typical stay:</strong> {t.typicalStay}</span>
                  {t.guideHref && <Link href={t.guideHref} className="font-medium text-purple-700 hover:underline">Read the guide →</Link>}
                </div>
              </div>
            ))}
          </div>
          <GuideChips stage="treatments" />
        </section>

        {/* 2. Clinics */}
        <section className="bg-gray-50 px-4 py-12">
          <div className="mx-auto max-w-5xl">
            <SectionHeading id="clinics" eyebrow="Question 2" title={`Which clinics in ${d.displayName}?`} intro={d.clinicsBar} />
            <div className="space-y-4">
              {d.clinics.map((c) => (
                <article key={c.name} className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {c.url ? <a href={c.url} target="_blank" rel="noopener noreferrer" className="hover:text-purple-700 hover:underline">{c.name}</a> : c.name}
                        <Cite ids={c.sourceIds} />
                      </h3>
                      <p className="text-sm text-gray-500">{c.district} · {TYPE_LABEL[c.type]}</p>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {c.specialties.slice(0, 5).map((s) => (
                        <span key={s} className="rounded-full bg-purple-50 px-2.5 py-1 text-xs font-medium text-purple-800">{s}</span>
                      ))}
                    </div>
                  </div>
                  <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                    <div className="rounded-lg bg-gray-50 p-3">
                      <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">Named doctors</dt>
                      <dd className="mt-1 text-gray-800">{c.namedDoctors}</dd>
                    </div>
                    <div className="rounded-lg bg-gray-50 p-3">
                      <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">Registration and credentials</dt>
                      <dd className="mt-1 text-gray-800">{c.credentials}</dd>
                    </div>
                    <div className="rounded-lg bg-gray-50 p-3">
                      <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">Published prices</dt>
                      <dd className="mt-1 text-gray-800">{c.publishedPrices}</dd>
                    </div>
                    <div className="rounded-lg bg-gray-50 p-3">
                      <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">How to book</dt>
                      <dd className="mt-1 text-gray-800">
                        <span className="block"><strong>Channels:</strong> {c.booking.channels}</span>
                        <span className="mt-1 block"><strong>Consultation:</strong> {c.booking.consult}</span>
                        {c.booking.deposit && <span className="mt-1 block"><strong>Deposit:</strong> {c.booking.deposit}</span>}
                        {c.booking.languages && <span className="mt-1 block"><strong>Languages:</strong> {c.booking.languages}</span>}
                        {c.booking.includes && <span className="mt-1 block"><strong>Package includes:</strong> {c.booking.includes}</span>}
                        {c.booking.bookingUrl && (
                          <a href={c.booking.bookingUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1 font-medium text-purple-700 hover:underline">
                            Booking page <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                          </a>
                        )}
                      </dd>
                    </div>
                  </dl>
                  {c.cautions && (
                    <p className="mt-3 flex items-start gap-2 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900">
                      <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                      <span>{c.cautions}</span>
                    </p>
                  )}
                </article>
              ))}
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-bold text-gray-900">How {d.displayName}&apos;s system for foreign patients works</h3>
              <p className="mt-1 mb-4 text-sm text-gray-600">The legal structure decides who is accountable if something goes wrong. These are the pieces to understand before you message any clinic.</p>
              <StepList steps={d.howItWorks} />
            </div>

            {providers.length > 0 && (
              <div className="mt-10">
                <h3 className="text-lg font-bold text-gray-900">Researched provider profiles on VitalityScout</h3>
                <p className="mt-1 text-sm text-gray-600">{providers.length} {d.displayName} provider{providers.length === 1 ? '' : 's'} with a profile, price display and verification date.</p>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {providers.map((p) => (
                    <li key={p.slug} className="rounded-xl border border-gray-200 bg-white p-4">
                      <Link href={`/providers/${p.slug}`} className="font-semibold text-gray-900 hover:text-purple-700 hover:underline">{p.name}</Link>
                      {p.destinationCity && <p className="text-xs text-gray-500">{p.destinationCity}</p>}
                      {p.pricingDisplay && <p className="mt-2 text-sm font-semibold text-green-700">{p.pricingDisplay}</p>}
                      {p.lastVerified && <p className="mt-1 text-xs text-gray-400">Profile verified {p.lastVerified}</p>}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <GuideChips stage="clinics" />
          </div>
        </section>

        {/* 3. Prices */}
        <section className="mx-auto max-w-5xl px-4 py-12">
          <SectionHeading id="prices" eyebrow="Question 3" title={`What does it cost in ${d.displayName} versus the US?`} intro={d.pricesNote} />
          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-left text-gray-700">
                <tr>
                  <th className="px-4 py-3 font-semibold">Procedure</th>
                  <th className="px-4 py-3 font-semibold">US cash price</th>
                  <th className="px-4 py-3 font-semibold text-green-800">{d.displayName} price</th>
                  <th className="px-4 py-3 font-semibold">Typical stay</th>
                  <th className="px-4 py-3 font-semibold">Deep dive</th>
                </tr>
              </thead>
              <tbody>
                {d.procedures.map((p) => (
                  <tr key={p.procedure} className="border-t border-gray-100 align-top">
                    <td className="px-4 py-3 font-medium text-gray-900">
                      {p.procedure}
                      {p.note && <span className="mt-1 block text-xs font-normal text-gray-500">{p.note}</span>}
                    </td>
                    <td className="px-4 py-3 text-gray-600">{p.usPrice}</td>
                    <td className="px-4 py-3 font-semibold text-green-700">{p.localPrice}<Cite ids={p.sourceIds} /></td>
                    <td className="px-4 py-3 text-gray-600">{p.typicalStay}</td>
                    <td className="px-4 py-3">
                      {p.guideHref ? <Link href={p.guideHref} className="font-medium text-purple-700 hover:underline">Cost guide →</Link> : <span className="text-gray-400">—</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-gray-500">
            Prices are published or reported ranges, not quotes. Package inclusions differ, so compare written all-in quotes that name the surgeon, the facility and the follow-up.
          </p>
          <GuideChips stage="prices" />
        </section>

        {/* 4. What to expect */}
        <section className="bg-gray-50 px-4 py-12">
          <div className="mx-auto max-w-5xl">
            <SectionHeading id="expect" eyebrow="Question 4" title="What should I expect from the process and the results?" />
            <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-gray-900"><Stethoscope className="h-5 w-5 text-purple-600" aria-hidden /> The process, start to finish</h3>
            <StepList steps={d.process} />

            <h3 className="mt-10 mb-4 text-xl font-bold text-gray-900">What results are realistic</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {d.results.map((p) => (
                <div key={p.title} className="rounded-2xl border border-gray-200 bg-white p-5">
                  <h4 className="font-bold text-gray-900">{p.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-gray-700">{p.body}<Cite ids={p.sourceIds} /></p>
                </div>
              ))}
            </div>

            <h3 className="mt-10 mb-4 text-xl font-bold text-gray-900">Is it safe? The honest answer</h3>
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="flex items-start gap-2 text-gray-800"><AlertTriangle className="mt-1 h-4 w-4 shrink-0 text-amber-700" aria-hidden /><span>{d.safety.verdict}</span></p>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {d.safety.points.map((p) => (
                <div key={p.title} className="rounded-2xl border border-gray-200 bg-white p-5">
                  <h4 className="font-bold text-gray-900">{p.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-gray-700">{p.body}<Cite ids={p.sourceIds} /></p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-5">
              <h4 className="flex items-center gap-2 font-bold text-red-900"><AlertTriangle className="h-4 w-4" aria-hidden /> Red flags that should end the conversation</h4>
              <ul className="mt-3 grid gap-2 text-sm text-red-900 md:grid-cols-2">
                {d.redFlags.map((f) => <li key={f} className="flex gap-2"><span aria-hidden>✕</span><span>{f}</span></li>)}
              </ul>
            </div>
            <GuideChips stage="expect" />
          </div>
        </section>

        {/* 5. Travel */}
        <section className="mx-auto max-w-5xl px-4 py-12">
          <SectionHeading id="travel" eyebrow="Question 5" title={`Travel and logistics for a medical trip to ${d.displayName}`} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {planCards.map(({ icon: Icon, step }) => (
              <div key={step.title} className="rounded-2xl border border-gray-200 bg-white p-5">
                <div className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-purple-600" aria-hidden />
                  <h3 className="font-bold text-gray-900">{step.title}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">{step.body}<Cite ids={step.sourceIds} /></p>
                {step.link && (
                  <a href={step.link.url} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-purple-700 hover:underline">
                    {step.link.label} <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                  </a>
                )}
              </div>
            ))}
          </div>
          <GuideChips stage="travel" />
        </section>

        {/* 6. How to book */}
        <section className="bg-gray-50 px-4 py-12">
          <div className="mx-auto max-w-5xl">
            <SectionHeading id="book" eyebrow="Question 6" title="How do I book an appointment?" intro="Clinics that treat foreigners every day answer a complete written inquiry within a day or two. Send one message with everything below, keep the reply, and do not pay a deposit until each item is answered." />
            <div className="grid gap-8 lg:grid-cols-5">
              <div className="lg:col-span-3">
                <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-gray-900"><MessageSquare className="h-5 w-5 text-purple-600" aria-hidden /> Step by step</h3>
                <StepList steps={d.booking} />
              </div>
              <div className="lg:col-span-2">
                <div className="rounded-2xl border border-green-200 bg-green-50 p-5">
                  <h3 className="flex items-center gap-2 font-bold text-green-900"><ClipboardCheck className="h-4 w-4" aria-hidden /> Get these in writing before any deposit</h3>
                  <ul className="mt-3 space-y-2 text-sm text-green-900">
                    {d.vetChecklist.map((f) => <li key={f} className="flex gap-2"><span aria-hidden>✓</span><span>{f}</span></li>)}
                  </ul>
                </div>
              </div>
            </div>
            <GuideChips stage="book" />
            {journey && (
              <div className="mt-8 rounded-2xl border border-purple-200 bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-wide text-purple-700">Your six questions, answered above</p>
                <ol className="mt-2 grid gap-2 text-sm sm:grid-cols-2 lg:grid-cols-3">
                  {journey.stages.map((s, i) => (
                    <li key={s.id}>
                      <a href={`#${s.id}`} className="group inline-flex items-start gap-1.5 font-medium text-gray-800 hover:text-purple-700">
                        <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-600 text-[11px] font-bold text-white">{i + 1}</span>
                        <span>{s.question}</span>
                        <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-4xl px-4 py-12">
          <SectionHeading id="faq" eyebrow="Questions people ask" title={`${d.displayName} medical tourism FAQ`} />
          <div className="rounded-2xl border border-gray-200 bg-white px-5">
            {d.faqs.map((f) => <FAQItem key={f.question} question={f.question} answer={f.answer} />)}
          </div>
        </section>

        {/* Regulatory note */}
        <section className="mx-auto max-w-4xl px-4 pt-2">
          <div className="rounded-lg border-2 border-red-200 bg-red-50 p-6">
            <h3 className="mb-3 text-lg font-bold text-red-900">Important Regulatory Notice</h3>
            <p className="text-sm text-red-800">
              Clinics and hospitals in {d.displayName} are licensed by {d.country}&apos;s regulators, not by the US FDA or any US state medical board. US malpractice law, state licensing complaints and most US health insurance do not follow you abroad. Nothing on this page ranks or endorses a provider; it records what each has published or what a regulator has said. This page is educational only. Consult your own physician before pursuing any treatment, and arrange follow-up care at home before you travel.
            </p>
          </div>
        </section>
        <MedicalDisclaimer />

        {/* Sources */}
        <section className="mx-auto max-w-4xl px-4 pb-12">
          <h2 id="sources" className="scroll-mt-28 text-lg font-bold text-gray-900">Sources</h2>
          <p className="mt-1 text-xs text-gray-500">Facts checked {d.verifiedLabel}. Official sources are government, regulator or accreditor publications; clinic sources are the provider&apos;s own published pages; marketplace sources are booking platforms or agencies, whose prices are indicative only.</p>
          <ol className="mt-4 space-y-2 text-sm">
            {d.sources.map((s: Source, i) => (
              <li key={s.id} id={`src-${i + 1}`} className="scroll-mt-28 text-gray-700">
                <span className="mr-1 font-semibold text-gray-900">[{i + 1}]</span>
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline">{s.label}</a>
                <span className="text-gray-500"> · {s.publisher} · {s.date} · {s.kind}</span>
              </li>
            ))}
          </ol>
        </section>

        <div className="mx-auto max-w-4xl px-4 pb-12">
          <EmailCaptureCard
            title={`Get the ${d.displayName} quote-comparison worksheet`}
            description={`A one-page checklist for comparing written clinic quotes from ${d.displayName}: named surgeon, facility license, inclusions, revision policy and total cost with travel.`}
            source={`destination_${d.slug.replace(/-/g, '_')}`}
          />
        </div>
      </SidebarShell>
      <Footer />
    </main>
  );
}
