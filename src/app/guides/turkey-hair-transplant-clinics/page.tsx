import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'Turkey Hair Transplant Clinics Compared (2026)' },
  alternates: { canonical: 'https://vitalityscout.com/guides/turkey-hair-transplant-clinics' },
  description:
    'Vera Clinic, Cosmedica, Estepera (Este) & Vinci — 2026 Turkey hair transplant clinic prices, techniques, what packages include, and how to vet a clinic.',
};

// Real conversational / People-Also-Ask questions drawn from the queries this
// page already earns impressions for (Vera Clinic price, Vinci hair clinic
// prices, Este hair transplant cost, medical tourism Turkey prices). Answered
// only from facts stated on this page; every price answer ends with the
// verify-with-provider hedge. The visible FAQ block below mirrors this schema
// exactly — schema clarifies the page, never invents.
const FAQ_ITEMS = [
  {
    question: 'What are Vera Clinic prices for a hair transplant in 2026?',
    answer:
      'Vera Clinic in Istanbul positions itself as a prestige clinic, with all-inclusive packages commonly advertised around $2,900-$5,900 (up to roughly €3,500 for a Sapphire FUE package, near the top of its Sapphire band). Its packages bundle the procedure, hotel, VIP transfers, translator, PRP, medications and a one-year guarantee, and include the clinic\'s proprietary OxyCure hyperbaric-oxygen step. Vera does not publish a fixed per-graft price table publicly, so the figure depends on graft count and technique. These are advertised estimates — request a written, all-in quote directly from Vera Clinic.',
  },
  {
    question: 'What are Vinci Hair Clinic prices, and is it the same as the Istanbul clinics?',
    answer:
      'Vinci Hair Clinic is a different model from the Istanbul package clinics: it is a multi-country chain operating in 13 countries, with 15 years of experience and 100,000 customers cited, including UK clinics and a long-running Malaga, Spain branch. It prices by graft rather than by all-inclusive travel package. Vinci states its UK FUE hair transplant normally ranges from £3,500-£7,000 depending on the extent of hair loss, with free consultations. Because it is graft-based and location-dependent, there is no single "Vinci package price" — get a quote for your specific graft count at the location you would use, and confirm it in writing.',
  },
  {
    question: 'How much does an Este (Estepera) hair transplant cost?',
    answer:
      'Estepera (often searched as "Este") states that for 2026 an all-inclusive hair transplant package in Turkey averages about $1,800-$6,000, with the final figure depending on graft count and technique (FUE, Sapphire FUE or DHI). Its packages cover up to ~3,000-5,000 grafts in a session plus hotel, transfers, medical tests and aftercare, and it offers a broad technique menu including unshaven and afro/curly-hair work. The clinic publishes several overlapping per-technique tables that do not fully agree, so treat any single number as an advertised estimate and confirm the graft count, technique and inclusions in a written quote.',
  },
  {
    question: 'Why are medical-tourism hair transplant prices in Turkey so much lower than the US?',
    answer:
      'Lower clinic operating and labor costs, a favorable currency exchange and very high procedure volume in Istanbul let Turkish clinics bundle surgery, hotel, transfers and aftercare into packages that frequently run a third to a quarter of US pricing — Turkey packages roughly $1,800-$8,000 all-in, versus about $8,000-$20,000 for surgery alone in the US. The savings are real at accredited clinics, but the same low-cost environment also enables unlicensed "black-market" operations, so the price gap is a reason to vet harder, not less.',
  },
  {
    question: 'How do I vet a hair transplant clinic in Turkey before I travel?',
    answer:
      'Confirm the clinic holds a Turkish Ministry of Health hair-transplant unit license and, for foreign patients, a health-tourism authorization (a TÜRSAB tourism license) — Vera Clinic, for example, publishes both. Ask in writing who evaluates your hair loss, who actually performs the surgery and their credentials, whether any unlicensed technicians make incisions or harvest grafts, and whether everyone is covered by malpractice insurance (the ISHRS recommends these exact questions). The biggest red flag is a rock-bottom price with no named surgeon.',
  },
  {
    question: 'Which Turkey hair transplant clinic is best for me?',
    answer:
      'There is no single "best" clinic — it depends on your priorities. Smile Hair Clinic and Estepera skew value-focused; Vera Clinic and Cosmedica (Dr. Levent Acar) sit in the mid-to-premium tier with strong accreditation and named surgeons; ASMED and Dr. Serkan Aygin emphasize a named, lower-volume surgeon over price; and Vinci is a graft-priced multi-country chain. Match the clinic to your case (graft count, technique, budget, how much you value a named operating surgeon), and always compare written, like-for-like quotes.',
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group border-b border-gray-200 py-6">
      <summary className="flex cursor-pointer items-start justify-between text-lg font-semibold text-gray-900 hover:text-blue-600">
        <span className="pr-4">{question}</span>
        <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
      </summary>
      <p className="mt-4 text-gray-700">{answer}</p>
    </details>
  );
}

// Real, publicly reviewed Turkey hair-transplant clinics. The first four are
// pre-verified in src/lib/providers-medical-tourism.ts (hairTransplantProviders);
// Cosmedica, Estepera and Vinci are added from their own 2026 published pages.
// Prices are advertised package/graft estimates to confirm with the provider.
const CLINICS = [
  {
    name: 'Vera Clinic',
    tier: 'Premium',
    location: 'Istanbul',
    technique: 'Sapphire FUE / DHI / OxyCure',
    price: '~$2,900-$5,900',
    pricingModel: 'All-inclusive package',
    note:
      'Prestige Istanbul clinic with 30,000+ procedures and an in-house hyperbaric-oxygen chamber for its proprietary OxyCure follicle-oxygenation step. Holds a Ministry of Health Health Tourism Certificate and a TÜRSAB travel-agency registration; ~4.8★ on Trustpilot.',
    website: 'https://veraclinic.net',
  },
  {
    name: 'Cosmedica (Dr. Levent Acar)',
    tier: 'Mid / Premium',
    location: 'Istanbul',
    technique: 'FUE Sapphire / Micro Sapphire DHI',
    price: 'From €2,550',
    pricingModel: 'Fixed-price package (no per-graft fee)',
    note:
      'Named-surgeon clinic led by Dr. Levent Acar (16+ years, 20,000+ surgeries). Published fixed packages: FUE Sapphire €2,550, Micro Sapphire DHI €3,290, VIP Micro Sapphire DHI €8,000 (each up to ~4,000 grafts; megasession add-ons for up to 6,000). 5-star hotel, VIP transfers, oxygen therapy and translator included.',
    website: 'https://cosmedica.com',
  },
  {
    name: 'Estepera (Este)',
    tier: 'Value / Mid',
    location: 'Istanbul',
    technique: 'FUE / Sapphire FUE / DHI / unshaven / afro',
    price: '~$1,800-$6,000',
    pricingModel: 'All-inclusive package',
    note:
      'Value-to-mid Istanbul clinic with a broad technique menu including unshaven and afro/curly-hair work. Its 2026 cost page states an all-inclusive Turkey package averages ~$1,800-$6,000 depending on graft count and technique; packages cover up to ~3,000-5,000 grafts plus hotel, transfers, tests and aftercare. Confirm the technique and graft count in a written quote.',
    website: 'https://estepera.com',
  },
  {
    name: 'Smile Hair Clinic',
    tier: 'Value',
    location: 'Istanbul',
    technique: 'Micro Sapphire FUE / DHI',
    price: '$1,800-$2,500',
    pricingModel: 'All-inclusive package',
    note:
      'High-volume value champion (15,000+ procedures) with one of the most affordable all-inclusive price bands and very strong public review counts (~4.9★ Trustpilot, 3,500+ reviews). Best for budget-conscious, straightforward cases with realistic expectations.',
    website: 'https://smilehairclinic.com',
  },
  {
    name: 'Dr. Serkan Aygin Clinic',
    tier: 'Mid / Named surgeon',
    location: 'Istanbul',
    technique: 'FUE / DHI / Sapphire FUE',
    price: '$2,500-$4,000',
    pricingModel: 'All-inclusive package',
    note:
      'Long-running named-surgeon clinic (25+ years, 10,000+ procedures) known for a celebrity clientele and a deep before/after portfolio. Good for patients who specifically want a recognized named surgeon and a strong gallery.',
    website: 'https://drserkanaygin.com',
  },
  {
    name: 'ASMED (Dr. Koray Erdogan)',
    tier: 'Premium / Precision',
    location: 'Istanbul',
    technique: 'FUE / Robotic FUE',
    price: '~$3,500',
    pricingModel: 'Bespoke surgical plan',
    note:
      'Research-driven, lower-volume clinic led by Dr. Koray Erdogan, a pioneer of robotic FUE in Turkey. Bespoke surgical plans and a precision-over-volume positioning; less "all-inclusive" packaging than the high-volume clinics.',
    website: 'https://asmed.com',
  },
  {
    name: 'Vinci Hair Clinic',
    tier: 'Multi-country chain',
    location: 'UK, Malaga (Spain) & 13 countries',
    technique: 'FUE / PRP / SMP',
    price: '£3,500-£7,000 (UK FUE)',
    pricingModel: 'Per-graft, free consultation',
    note:
      'Not an Istanbul package clinic — a multi-country chain operating in 13 countries (15 years, 100,000 customers cited), including UK clinics and a Malaga, Spain branch, that prices by graft rather than travel package, with free consultations. Useful comparison point if you would rather stay closer to home than fly to Istanbul.',
    website: 'https://vincihairclinic.com',
  },
];

export default function TurkeyHairTransplantClinics() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Turkey Hair Transplant Clinics Compared (2026): Prices & Techniques',
    description:
      'A brand-aware 2026 roundup of the most-searched Turkey hair transplant clinics — Vera Clinic, Cosmedica, Estepera (Este), Smile Hair, Dr. Serkan Aygin, ASMED and Vinci — comparing prices, techniques, what packages include and how to vet a clinic.',
    url: 'https://vitalityscout.com/guides/turkey-hair-transplant-clinics',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/turkey-hair-transplant-clinics#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'MedicalProcedure',
      name: 'Hair transplantation (FUE / DHI follicular unit procedures)',
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-24',
    dateModified: '2026-06-24',
    citation: [
      { '@type': 'CreativeWork', name: 'Cosmedica — Turkey Hair Transplant Cost 2026 (packages, FUE Sapphire / DHI prices, Dr. Levent Acar)', url: 'https://cosmedica.com/price/' },
      { '@type': 'CreativeWork', name: 'Estepera — Hair Transplant in Turkey Cost 2026 (all-inclusive ~$1,800-$6,000 package band, inclusions)', url: 'https://www.estepera.com/hair-transplant-in-turkey-cost/' },
      { '@type': 'CreativeWork', name: 'Vera Clinic — Hair Transplant Turkey Cost 2026 (packages, OxyCure)', url: 'https://www.veraclinic.net/hair-transplant-turkey-cost/' },
      { '@type': 'CreativeWork', name: 'Vera Clinic — clinic profile, accreditations & OxyCure (Flymedi)', url: 'https://www.flymedi.com/vera-clinic/607' },
      { '@type': 'CreativeWork', name: 'Vinci Hair Clinic — 13 countries / 15 years / 100,000 customers (Medihair clinic profile)', url: 'https://medihair.com/en/clinic/vinci-hair-clinic-london/' },
      { '@type': 'CreativeWork', name: 'Vinci Hair Clinic — UK FUE hair transplant cost £3,500-£7,000', url: 'https://vincihairclinic.com/en/fue-hair-transplant-costs-vinci-hair-clinic/' },
      { '@type': 'CreativeWork', name: 'Vinci Hair Clinic — Hair Transplant Cost guide (Malaga, Spain branch named)', url: 'https://vincihairclinic.com/en/cost-for-hair-transplant/' },
      { '@type': 'CreativeWork', name: 'ISHRS — 2025 Practice Census Results (black-market & repair statistics)', url: 'https://ishrs.org/2025-practice-census-results/' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/turkey-hair-transplant-clinics#faq', url: 'https://vitalityscout.com/guides/turkey-hair-transplant-clinics' };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="mx-auto max-w-4xl px-4 py-3">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">→</span>
            <Link href="/guides" className="hover:text-blue-600">Guides</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-900">Turkey Hair Transplant Clinics</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <Link href="/medical-tourism" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
            &larr; Medical Tourism Hub
          </Link>

          <div className="mb-4">
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
              Medical Tourism Guide
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Turkey Hair Transplant Clinics Compared (2026)
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            A brand-by-brand roundup of the most-searched Turkey hair transplant clinics — Vera
            Clinic, Cosmedica, Estepera (Este), Smile Hair, Dr. Serkan Aygin, ASMED and Vinci —
            on price, technique, what packages include, and how to vet each one.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-green-600 bg-green-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              The most-searched Turkey hair transplant clinics in 2026 are{' '}
              <strong>Vera Clinic</strong> (~$2,900-$5,900, OxyCure),{' '}
              <strong>Cosmedica</strong> (from €2,550, Dr. Levent Acar),{' '}
              <strong>Estepera / Este</strong> (~$1,800-$6,000),{' '}
              <strong>Smile Hair</strong> ($1,800-$2,500),{' '}
              <strong>Dr. Serkan Aygin</strong> and <strong>ASMED</strong>. Most sell all-inclusive
              FUE/DHI packages bundling hotel, transfers and aftercare; the per-graft chain Vinci
              prices differently. All figures are advertised estimates to confirm with the provider.
              This is information, not medical advice.
            </p>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Last updated: June 2026 • 12 min read
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Turkey Hair Transplant Clinics: Price &amp; Technique Comparison
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Clinic</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Tier</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Technique</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Pricing model</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Price (estimate)</th>
              </tr>
            </thead>
            <tbody>
              {CLINICS.map((c, i) => (
                <tr key={c.name} className={i % 2 === 1 ? 'bg-gray-50' : undefined}>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">{c.name}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{c.tier}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{c.technique}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{c.pricingModel}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-700">{c.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-gray-600 mt-4">
          Prices are advertised package or per-graft estimates checked in June 2026; they move with
          currency, graft count and current promotions. They are not quotes — confirm a written,
          all-in figure with each clinic. For the underlying technique and per-graft economics, see
          our{' '}
          <Link href="/guides/hair-transplant-turkey-cost" className="text-blue-600 hover:underline">
            Turkey hair transplant cost guide
          </Link>
          . Compare vetted providers on the{' '}
          <Link href="/hair_transplant" className="text-blue-600 hover:underline">
            hair transplant providers page
          </Link>
          .
        </p>
      </section>

      {/* How this guide differs */}
      <section className="bg-blue-50 px-4 py-8">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-lg border border-blue-200 bg-white p-5 text-sm text-gray-700">
            <p className="mb-0">
              <strong>How to use this guide:</strong> this is a brand-by-brand clinic roundup. If you
              want the technique and per-graft cost mechanics first, start with our{' '}
              <Link href="/guides/hair-transplant-turkey-cost" className="text-blue-600 hover:underline">
                Turkey hair transplant cost guide
              </Link>{' '}
              or the{' '}
              <Link href="/guides/hair-transplant-turkey-guide" className="text-blue-600 hover:underline">
                full Turkey hair transplant guide
              </Link>
              . When you are ready to actually go, the{' '}
              <Link href="/guides/turkey-hair-transplant-trip-planner" className="text-blue-600 hover:underline">
                Istanbul trip planner
              </Link>{' '}
              covers flights, hotels and the recovery timeline.
            </p>
          </div>
        </div>
      </section>

      {/* Clinic-by-clinic cards */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Clinic-by-Clinic Breakdown</h2>
        <p className="text-gray-600 mb-6">
          Seven of the most-searched names, from value to prestige, plus one multi-country chain for
          comparison. Listing is not an endorsement — verify credentials, the operating surgeon, and
          a written quote yourself before booking. Prices are advertised estimates to confirm with
          the clinic.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {CLINICS.map((c) => (
            <div key={c.name} className="bg-white rounded-lg border border-gray-200 p-5">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-bold text-gray-900">{c.name}</h3>
                <span className="text-sm font-semibold text-green-700 whitespace-nowrap pl-2">{c.price}</span>
              </div>
              <div className="text-xs text-gray-500 mb-1">{c.location} • {c.tier}</div>
              <div className="text-xs text-gray-500 mb-2">{c.technique} • {c.pricingModel}</div>
              <p className="text-sm text-gray-600 mb-3">{c.note}</p>
              <a
                href={c.website}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                Visit clinic site →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Brand spotlights — answers the exact GSC queries */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Brand Spotlights: What the Numbers Actually Say</h2>

          <div className="prose prose-lg max-w-none">
            <h3>Vera Clinic prices</h3>
            <p>
              Vera Clinic is the prestige name in this group. Its all-inclusive packages are commonly
              advertised around <strong>$2,900-$5,900</strong> (up to roughly €3,500 for a Sapphire
              FUE package, near the top of its quoted Sapphire band), and it is one of the few Istanbul
              clinics with an in-house hyperbaric-oxygen
              chamber for its proprietary <strong>OxyCure</strong> follicle-oxygenation step. Vera
              publishes a Ministry of Health Health Tourism Certificate and a TÜRSAB travel-agency
              registration, and reports 30,000+ procedures. It does not post a fixed per-graft table
              publicly, so the price scales with your graft count and technique — request a written,
              all-in quote.
            </p>

            <h3>Cosmedica (Dr. Levent Acar)</h3>
            <p>
              Cosmedica publishes a transparent fixed-package table on its own site:{' '}
              <strong>FUE Sapphire €2,550</strong>, <strong>Micro Sapphire DHI €3,290</strong>, and a{' '}
              <strong>VIP Micro Sapphire DHI €8,000</strong>, each covering up to ~4,000 grafts, with
              megasession add-ons for up to 6,000 grafts. All packages are performed by or under
              Dr. Levent Acar (16+ years, 20,000+ surgeries) and bundle a 5-star hotel, VIP transfers,
              oxygen therapy and a translator with no per-graft fee — the most price-transparent clinic
              in this comparison.
            </p>

            <h3>Estepera (Este) hair transplant cost</h3>
            <p>
              Estepera — frequently searched simply as &quot;Este&quot; — sits in the value-to-mid tier
              with a broad technique menu including unshaven and afro/curly-hair work. Its own 2026 cost
              page states that an all-inclusive Turkey package averages{' '}
              <strong>about $1,800-$6,000</strong>, with the final figure depending on graft count and
              technique (FUE, Sapphire FUE or DHI). The same page carries several overlapping
              per-technique tables that do not fully agree with each other, so the all-inclusive band is
              the figure to anchor on — then get the specific graft count and technique priced in
              writing. Packages cover up to ~3,000-5,000 grafts in a session plus hotel, transfers,
              medical tests and aftercare. Note Estepera should not be confused with the separately
              branded &quot;Este Medical Group&quot; — confirm which entity any quote is from.
            </p>

            <h3>Vinci Hair Clinic prices</h3>
            <p>
              Vinci is the odd one out, and worth understanding precisely because it is searched
              alongside the Istanbul brands. It is a <strong>multi-country chain</strong> operating in
              13 countries (UK clinics, a Malaga, Spain branch, and others), with 15 years of experience
              and 100,000 customers cited. Critically, Vinci <strong>prices by graft, not by travel
              package</strong> — it states a UK FUE hair transplant normally ranges from{' '}
              <strong>£3,500-£7,000</strong> depending on the extent of hair loss, with free
              consultations. If you
              would rather stay near home than fly to Istanbul, Vinci is a like-for-like comparison
              point; just remember its number is a per-graft quote, not an all-inclusive trip.
            </p>
          </div>
        </div>
      </section>

      {/* What packages include */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">What an Istanbul Package Includes (and What It Doesn&apos;t)</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white rounded-lg border-2 border-green-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Usually included</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>The procedure (FUE / Sapphire FUE / DHI) and local anesthesia</span></li>
              <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>2-5 nights in a partner hotel (often 5-star at premium clinics)</span></li>
              <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>VIP airport and clinic transfers</span></li>
              <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>Translator / patient host</span></li>
              <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>Post-op medications and a wash / aftercare kit</span></li>
              <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>Often PRP or oxygen therapy and remote follow-up</span></li>
            </ul>
          </div>
          <div className="bg-white rounded-lg border-2 border-amber-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Usually NOT included</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">!</span><span>International flights to and from Istanbul</span></li>
              <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">!</span><span>Extra hotel nights beyond the package</span></li>
              <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">!</span><span>A second session if more grafts are needed later</span></li>
              <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">!</span><span>Long-term medication (finasteride / minoxidil) at home</span></li>
              <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">!</span><span>Megasession or VIP upgrades (priced separately at some clinics)</span></li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-6">
          &quot;All-inclusive&quot; is defined differently at every clinic. Cosmedica, for example,
          prices a megasession (up to 6,000 grafts) and a VIP tier as separate line items. Get every
          inclusion in writing before you pay a deposit.
        </p>
      </section>

      {/* How to vet — safety */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Vet Any Turkey Clinic (and Avoid the Black Market)</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              A recognizable brand name is a starting point, not a guarantee. Turkey regulates hair
              transplantation directly: clinics must hold a Ministry of Health hair-transplant unit
              license, and clinics treating foreign patients must also hold a health-tourism
              authorization (a <strong>TÜRSAB tourism license</strong>) — Vera Clinic, for instance,
              publishes both. Verify those documents exist for whichever clinic you choose.
            </p>
            <p>
              The risk that a brand name can hide is the &quot;bait and switch&quot; — a credentialed
              doctor is advertised, but an unlicensed technician performs the surgery. This is a
              measured, growing problem: per the ISHRS 2025 Practice Census,{' '}
              <strong>59% of ISHRS members</strong> reported black-market hair-transplant clinics in
              their cities (up from 51% in 2021), and members reported that on average{' '}
              <strong>10% of their cases</strong> were repairs of prior black-market work (up from 6%
              in 2021).
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-5 not-prose my-6">
              <p className="text-sm font-semibold text-yellow-900 mb-3">Before you book, ask in writing (ISHRS guidance):</p>
              <ul className="text-sm text-yellow-900 space-y-2 mb-0">
                <li>• Who evaluates my hair loss, and what are their qualifications?</li>
                <li>• Who performs the surgery, and what are their credentials and experience?</li>
                <li>• Will any unlicensed individuals make incisions or harvest grafts?</li>
                <li>• Is everyone involved covered by malpractice insurance?</li>
              </ul>
            </div>

            <p>
              Add the practical checks: a named operating surgeon, the Ministry license and
              health-tourism certificate, before/after photos at 12+ months (not just immediately
              post-op), independent reviews, and a clear written contract in English. A rock-bottom
              price with no named surgeon is the single biggest red flag — across every brand in this
              roundup. For a deeper safety read, see our guide on{' '}
              <Link href="/guides/is-plastic-surgery-in-turkey-safe" className="text-blue-600 hover:underline">
                whether medical procedures in Turkey are safe
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* FAQ — visible block mirrors the FAQPage schema above exactly */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div>
          {FAQ_ITEMS.map((item) => (
            <FAQItem key={item.question} question={item.question} answer={item.answer} />
          ))}
        </div>
      </section>

      {/* CTA to money page */}
      <section className="mx-auto max-w-4xl px-4 py-8">
        <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Compare Hair Transplant Clinics</h3>
          <p className="text-gray-600 mb-6">
            Browse vetted hair-transplant providers — techniques, price bands, and what each package includes.
          </p>
          <Link
            href="/hair_transplant"
            className="inline-block rounded-lg bg-green-600 px-8 py-4 text-lg font-medium text-white hover:bg-green-700"
          >
            View Hair Transplant Providers →
          </Link>
        </div>
      </section>

      {/* Related Guides */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/guides/hair-transplant-turkey-cost" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💇</span>
              <div>
                <div className="font-bold text-gray-900">Hair Transplant Turkey Cost (2026)</div>
                <div className="text-sm text-gray-600">FUE vs DHI per-graft and package pricing</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/hair-transplant-turkey-guide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇹🇷</span>
              <div>
                <div className="font-bold text-gray-900">Hair Transplant in Turkey: Full Guide</div>
                <div className="text-sm text-gray-600">Techniques, safety, and the full process</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/turkey-hair-transplant-trip-planner" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🧳</span>
              <div>
                <div className="font-bold text-gray-900">Turkey Hair Transplant: Trip Planner</div>
                <div className="text-sm text-gray-600">Your 7-day Istanbul travel guide</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/fue-vs-dhi" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💇</span>
              <div>
                <div className="font-bold text-gray-900">FUE vs DHI Hair Transplant</div>
                <div className="text-sm text-gray-600">The two techniques compared in depth</div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Sources */}
      <section className="mx-auto max-w-4xl px-4 pb-4">
        <div className="border-t border-gray-200 pt-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Sources</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• <a href="https://cosmedica.com/price/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Cosmedica — Turkey Hair Transplant Cost 2026 (FUE Sapphire / DHI package prices, Dr. Levent Acar)</a></li>
            <li>• <a href="https://www.estepera.com/hair-transplant-in-turkey-cost/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Estepera — Hair Transplant in Turkey Cost 2026 (all-inclusive ~$1,800-$6,000 package band &amp; inclusions)</a></li>
            <li>• <a href="https://www.veraclinic.net/hair-transplant-turkey-cost/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Vera Clinic — Hair Transplant Turkey Cost 2026 (packages, OxyCure)</a></li>
            <li>• <a href="https://www.flymedi.com/vera-clinic/607" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Vera Clinic — clinic profile, accreditations &amp; OxyCure (Flymedi)</a></li>
            <li>• <a href="https://medihair.com/en/clinic/vinci-hair-clinic-london/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Vinci Hair Clinic — 13 countries / 15 years / 100,000 customers (Medihair profile)</a></li>
            <li>• <a href="https://vincihairclinic.com/en/fue-hair-transplant-costs-vinci-hair-clinic/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Vinci Hair Clinic — UK FUE Hair Transplant Cost (£3,500-£7,000)</a></li>
            <li>• <a href="https://vincihairclinic.com/en/cost-for-hair-transplant/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Vinci Hair Clinic — Hair Transplant Cost guide (Malaga, Spain branch)</a></li>
            <li>• <a href="https://ishrs.org/2025-practice-census-results/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">ISHRS — 2025 Practice Census Results (black-market &amp; repair statistics)</a></li>
          </ul>
        </div>
      </section>

      {/* Medical + affiliate disclosure */}
      <MedicalDisclaimer />

      <div className="mx-auto max-w-4xl px-4 py-8">
        <EmailCaptureCard
          title="Choosing a Turkey Hair Transplant Clinic?"
          description="Get our brand-by-brand clinic comparison plus the credential-vetting checklist before you book."
          source="guide_turkey_hair_transplant_clinics"
        />
      </div>

      <Footer />
    </main>
  );
}
