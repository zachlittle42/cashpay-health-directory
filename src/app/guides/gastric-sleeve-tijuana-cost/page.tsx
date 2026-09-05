import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import BrandCtaGrid from '@/components/BrandCtaGrid';
import RelatedGuides from '@/components/RelatedGuides';
import { buildFAQSchema } from '@/lib/jsonLd';

const PAGE_URL = 'https://vitalityscout.com/guides/gastric-sleeve-tijuana-cost';
const AS_OF = 'September 5, 2026';

export const metadata: Metadata = {
  title: { absolute: 'Gastric Sleeve Tijuana Cost (2026): Mexico Packages vs US Self-Pay' },
  alternates: { canonical: PAGE_URL },
  description:
    'Laparoscopic gastric sleeve in Tijuana (2026): ALO Bariatrics publishes all-inclusive from $4,500. US cash comparators include WeightWise $9,995. JCI clinics quote after consult — verify with the provider.',
};

const FAQ_ITEMS = [
  {
    question: 'How much does a gastric sleeve cost in Tijuana vs the US?',
    answer:
      `As of ${AS_OF}, ALO Bariatrics publishes an all-inclusive laparoscopic sleeve in Tijuana from $4,500 USD (Guadalajara and Puerto Vallarta from $5,000). WeightWise in Edmond, Oklahoma, publishes a US cash Tier 1 sleeve at $9,995 (surgeon, anesthesia, and uncomplicated hospital stay). Hospital and insured US sleeves commonly run the mid-teens to mid-$20,000s. JCI-accredited Tijuana centers such as LIMARP and Obesity Control Center do not post a single public sleeve sticker — they quote after evaluation. Confirm an itemized written quote. This is information, not medical advice.`,
  },
  {
    question: 'What is included in a Tijuana gastric sleeve package?',
    answer:
      'ALO’s published Tijuana package typically bundles surgeon and anesthesia fees, hospital stay, pre-op labs and EKG, airport pickup, hotel, bilingual coordinator, post-op medications, a nutrition plan, and months of remote follow-up. International flights are not included. LIMARP states its medical-tourism services do not include travel packages — you buy flights and often hotel separately. High BMI or extra health conditions can raise the quote. Get the inclusion list in writing.',
  },
  {
    question: 'Which Tijuana sleeve programs are JCI-accredited?',
    answer:
      'Joint Commission International accreditation applies to the hospital or center, not automatically to every surgeon who operates there. Obesity Control Center (Hospital CYNTAR) and LIMARP are the named Tijuana programs we treat as JCI / hospital-grade reputation filters. ALO publishes a $4,500 Tijuana package at Hospital Dreams and cites board-certified surgeons (FACS / ASMBS / IFSO memberships on the surgeon page) — confirm current facility accreditation yourself. Accreditation is not a guarantee of outcome.',
  },
  {
    question: 'Are flights included in Tijuana sleeve prices?',
    answer:
      'No. Published all-inclusive packages cover local transfers (often San Diego or Tijuana airport) and sometimes a hotel, not your ticket from home. Most programs clear patients to fly home about 5–7 days after surgery — confirm the surgeon’s clearance, not a marketing calendar. Add travel insurance and a companion’s costs before you compare “all-in” to a US cash bundle.',
  },
  {
    question: 'Can I get an instant sleeve quote from this page?',
    answer:
      'No. VitalityScout does not issue hospital invoices or book surgery. You can request an intro by email; we will reply with the questions to send a Tijuana program (BMI, inclusions, hospital name, aftercare). Then verify every figure with the provider and complete a medical evaluation. Sleeve gastrectomy is irreversible major surgery.',
  },
];

const BRANDS = [
  {
    name: 'ALO Bariatrics (Tijuana)',
    price: 'From $4,500 all-inclusive',
    blurb: 'Published Tijuana sleeve from $4,500; GDL/PV from $5,000. Hospital, hotel, transfers, labs — flights not included. Confirm after evaluation.',
    siteUrl: 'https://www.alobariatrics.com/gastric-sleeve',
    siteLabel: 'Visit ALO sleeve page →',
    profileHref: '/providers/alo-bariatrics',
  },
  {
    name: 'LIMARP (Tijuana)',
    price: 'Quote after consult',
    blurb: 'JCI / SRC-reputation bariatric hospital. No public sleeve sticker. Travel packages are explicitly not included — ask for an itemized cash quote.',
    siteUrl: 'https://www.limarp.com/en/services/bariatric/gastric-sleeve-surgery-tijuana/',
    siteLabel: 'Visit LIMARP sleeve page →',
  },
  {
    name: 'Obesity Control Center',
    price: 'Quote after consult',
    blurb: 'JCI-accredited Tijuana center (Hospital CYNTAR). Sleeve priced after virtual consult. Some bypass/revision floors are published on other OCC pages.',
    siteUrl: 'https://www.obesitycontrolcenter.com/',
    siteLabel: 'Visit OCC →',
    profileHref: '/providers/obesity-control-center-tijuana',
  },
];

const RELATED = [
  { href: '/medical-tourism', label: 'Medical tourism hub', blurb: 'US-vs-abroad prices and destinations.' },
  { href: '/guides/cash-pay-healthcare-map', label: 'Cash-pay healthcare map', blurb: 'US cash sleeve bundles vs Mexico packages.' },
  { href: '/guides/mexico-medical-tourism-planner', label: 'Mexico medical tourism planner', blurb: 'Border crossing and a realistic trip timeline.' },
  { href: '/guides/turkey-dental-cost', label: 'Turkey dental cost', blurb: 'Istanbul implants and All-on-4 vs Mexico.' },
  { href: '/guides/donor-egg-ivf-abroad', label: 'Donor-egg IVF abroad', blurb: 'Czech and Greek published cycle lists.' },
  { href: '/guides/turkey-hair-transplant-clinics', label: 'Turkey hair transplant clinics', blurb: 'Istanbul clinic profiles if you are comparing destinations.' },
  { href: '/guides/all-on-4-los-algodones-cost', label: 'All-on-4 Los Algodones cost', blurb: 'Full-arch implant lists vs US cash.' },
  { href: '/guides/fue-hair-transplant-istanbul-cost', label: 'FUE Istanbul cost', blurb: 'Published FUE packages vs US cash FUE.' },
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

export default function GastricSleeveTijuanaCostPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Gastric Sleeve Tijuana Cost (2026): Mexico Packages vs US Self-Pay',
    description:
      'Published Tijuana laparoscopic sleeve packages versus US cash-pay sleeve prices, what all-inclusive covers, and JCI versus quote-only centers.',
    url: PAGE_URL,
    mainEntity: { '@type': 'FAQPage', '@id': `${PAGE_URL}#faq` },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'MedicalProcedure',
      name: 'Laparoscopic sleeve gastrectomy in Tijuana, Mexico',
      procedureType: 'https://schema.org/SurgicalProcedure',
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-09-05',
    dateModified: '2026-09-05',
    citation: [
      { '@type': 'CreativeWork', name: 'ALO Bariatrics — gastric sleeve in Mexico from $4,500 (Tijuana)', url: 'https://www.alobariatrics.com/gastric-sleeve' },
      { '@type': 'CreativeWork', name: 'WeightWise — financial FAQs (US cash sleeve $9,995 Tier 1)', url: 'https://weightwise.com/pages/financial-information' },
      { '@type': 'CreativeWork', name: 'LIMARP — gastric sleeve surgery Tijuana (quote / no travel package)', url: 'https://www.limarp.com/en/services/bariatric/gastric-sleeve-surgery-tijuana/' },
      { '@type': 'CreativeWork', name: 'Obesity Control Center — Tijuana bariatric program', url: 'https://www.obesitycontrolcenter.com/' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': `${PAGE_URL}#faq`, url: PAGE_URL };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vitalityscout.com' },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://vitalityscout.com/guides' },
      { '@type': 'ListItem', position: 3, name: 'Gastric Sleeve Tijuana Cost', item: PAGE_URL },
    ],
  };

  return (
    <>
      <Navigation />
      <SidebarShell>
      <main className="min-h-screen bg-white">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

        <div className="bg-gray-50 border-b border-gray-200">
          <div className="mx-auto max-w-4xl px-4 py-3">
            <nav className="text-sm text-gray-600" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span className="mx-2">→</span>
              <Link href="/guides" className="hover:text-blue-600">Guides</Link>
              <span className="mx-2">→</span>
              <span className="text-gray-900">Gastric Sleeve Tijuana Cost</span>
            </nav>
          </div>
        </div>

        <section className="bg-gradient-to-b from-teal-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Link href="/medical-tourism" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
              &larr; Medical tourism hub
            </Link>
            <div className="mb-4">
              <span className="rounded-full bg-teal-100 px-3 py-1 text-sm font-medium text-teal-800">
                Cost Guide
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Gastric Sleeve Tijuana Cost (2026): Packages vs US Self-Pay
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Laparoscopic sleeve cash packages at the Tijuana border — published
              stickers where they exist, quote-only JCI centers, and a US cash
              bundle you can compare without flying.
            </p>
            <div className="rounded-lg border-l-4 border-teal-600 bg-teal-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                As of {AS_OF}, ALO Bariatrics publishes a Tijuana sleeve from{' '}
                <strong>$4,500 all-inclusive</strong> (flights excluded). A named US
                cash program (WeightWise, Edmond, OK) lists a Tier 1 sleeve at{' '}
                <strong>$9,995</strong>. JCI-filter centers in Tijuana (LIMARP, Obesity
                Control Center) quote after consult rather than posting a sleeve
                sticker. Verify with the provider. This is information, not medical advice.
              </p>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Last reviewed: September 2026 • Prices read from ALO and WeightWise on {AS_OF} • 11 min read
            </p>
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-12">
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What we&apos;ll cover</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#prices" className="text-blue-600 hover:underline">1. Published Tijuana vs US cash sleeve prices</a></li>
              <li><a href="#package" className="text-blue-600 hover:underline">2. What all-inclusive usually covers</a></li>
              <li><a href="#jci" className="text-blue-600 hover:underline">3. JCI and named reputable programs</a></li>
              <li><a href="#vet" className="text-blue-600 hover:underline">4. How to vet a quote</a></li>
              <li><a href="#quote" className="text-blue-600 hover:underline">5. Request an intro (not an instant quote)</a></li>
            </ul>
          </div>

          <BrandCtaGrid
            title="Open official clinic pages"
            intro="Plain clinic URLs. ALO posts a starting package; LIMARP and OCC require a consult quote. Confirm live."
            brands={BRANDS}
            hubHref="/medical-tourism"
            hubLabel="Browse medical tourism options →"
          />

          <div className="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-8 text-center my-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Get a cash quote</h3>
            <p className="text-gray-700 mb-5 max-w-2xl mx-auto">
              We do not generate instant hospital invoices. Request an intro and we
              will reply with the BMI, hospital-name, and inclusion questions to send
              a Tijuana program.
            </p>
            <a
              href="#quote"
              className="inline-block rounded-lg bg-emerald-700 px-6 py-3 font-semibold text-white hover:bg-emerald-800"
            >
              Request an intro
            </a>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-amber-900 mb-2">Read before you use these numbers</h3>
            <p className="text-sm text-amber-900">
              Sleeve gastrectomy is irreversible major surgery. Package prices change
              with BMI, technique, and what is bundled. Figures here are published
              ranges to help you budget — always request a written, itemized quote
              and complete a full medical evaluation with a qualified bariatric surgeon.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 id="prices" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              Published Tijuana vs US self-pay
            </h2>
            <p className="text-gray-700 mb-4">
              Prefer a clinic&apos;s own page over a facilitator “from $3,795” ad.
              Where a reputable JCI center will not post a sticker, we say so.
            </p>

            <div className="overflow-x-auto mb-8 not-prose">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Source (as of {AS_OF})</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Published sleeve figure</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">ALO Bariatrics — Tijuana</td>
                    <td className="border border-gray-300 px-4 py-3">From $4,500 USD all-inclusive</td>
                    <td className="border border-gray-300 px-4 py-3">GDL / PV from $5,000; flights excluded; may vary after evaluation</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">LIMARP — Tijuana</td>
                    <td className="border border-gray-300 px-4 py-3">No public sleeve sticker</td>
                    <td className="border border-gray-300 px-4 py-3">JCI-filter hospital; travel packages not included — request a quote</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Obesity Control Center</td>
                    <td className="border border-gray-300 px-4 py-3">Sleeve by consult quote</td>
                    <td className="border border-gray-300 px-4 py-3">JCI center; some bypass/revision floors published separately</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">WeightWise (Edmond, OK) — US cash</td>
                    <td className="border border-gray-300 px-4 py-3">$9,995 Tier 1 sleeve</td>
                    <td className="border border-gray-300 px-4 py-3">Surgeon + anesthesia + uncomplicated stay; higher tiers extra</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              Country-level Mexico sleeve bands on our{' '}
              <Link href="/guides/gastric-sleeve-cost-by-country" className="text-blue-600 hover:underline">sleeve cost-by-country</Link>{' '}
              page (roughly $3,795–$7,500) are orientation ranges. This page prefers
              named, dated clinic lines. For safety and surgeon-vetting narrative,
              use{' '}
              <Link href="/guides/gastric-sleeve-mexico-safety" className="text-blue-600 hover:underline">gastric sleeve in Mexico: safety</Link>
              — do not treat that guide as a live price list.
            </p>

            <h2 id="package" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              What all-inclusive usually covers
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 my-8">
            <div className="bg-white rounded-lg border-2 border-green-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Typically included (ALO-style package)</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>Surgeon, anesthesiologist, and OR fees</span></li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>Hospital stay (often 1 night) and pre-op labs / EKG</span></li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>Airport pickup and hotel nights after discharge</span></li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>Bilingual coordinator and a written nutrition plan</span></li>
              </ul>
            </div>
            <div className="bg-white rounded-lg border-2 border-red-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Often excluded</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-red-500 mt-1">✗</span><span>International flights (and often the companion&apos;s hotel)</span></li>
                <li className="flex items-start gap-2"><span className="text-red-500 mt-1">✗</span><span>Travel / complication insurance</span></li>
                <li className="flex items-start gap-2"><span className="text-red-500 mt-1">✗</span><span>Lifelong vitamins and US aftercare visits</span></li>
                <li className="flex items-start gap-2"><span className="text-red-500 mt-1">✗</span><span>High-BMI or revision complexity (repriced)</span></li>
              </ul>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 id="jci" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              JCI and named reputable programs
            </h2>
            <p className="text-gray-700 mb-4">
              Tijuana is a 20-minute drive from San Diego — that is why sleeve volume
              concentrates here. Volume is not a quality signal by itself. Use
              hospital accreditation and a named, board-certified surgeon:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>LIMARP</strong> — dedicated obesity hospital; JCI / SRC-style reputation; quotes after consult; says services do not include travel packages.</li>
              <li><strong>Obesity Control Center</strong> — JCI-accredited program at Hospital CYNTAR; sleeve by virtual consultation.</li>
              <li><strong>ALO Bariatrics</strong> — the transparent published floor ($4,500 Tijuana). Confirm the hospital name on <em>your</em> quote (Hospital Dreams on their destination page) and the surgeon&apos;s current credentials.</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Border logistics live on the{' '}
              <Link href="/guides/mexico-medical-tourism-planner" className="text-blue-600 hover:underline">Mexico medical tourism planner</Link>.
              Compare a Mexico quote to a GLP-1 program before you treat surgery as
              the first lever:{' '}
              <Link href="/guides/gastric-sleeve-mexico-vs-glp1-program" className="text-blue-600 hover:underline">sleeve vs a GLP-1 program</Link>.
            </p>

            <h2 id="vet" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              How to vet a Tijuana sleeve quote
            </h2>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
              <li>Hospital name and current accreditation (JCI or equivalent) — verified on the accreditor site, not only the brochure.</li>
              <li>Named surgeon, board certification, and annual sleeve volume.</li>
              <li>Itemized inclusions: OR, stay length, hotel, transfers, labs, leak protocol.</li>
              <li>Flying-home day and a US clinician willing to manage post-bariatric follow-up.</li>
              <li>Compare the same product to the WeightWise <strong>$9,995</strong> cash bundle and to destination context on{' '}
                <Link href="/guides/cash-pay-healthcare-map" className="text-blue-600 hover:underline">the cash-pay map</Link>{' '}
                and{' '}
                <Link href="/medical-tourism" className="text-blue-600 hover:underline">medical tourism</Link>.
              </li>
            </ol>
          </div>

          <BrandCtaGrid
            title="Confirm today’s package or request a consult quote"
            intro="Open the clinic page. ALO’s $4,500 is a starting package; JCI centers will send a written quote after they see your history."
            brands={BRANDS}
            hubHref="/bariatric"
            hubLabel="Open the bariatric hub →"
          />

          <section id="quote" className="mt-12 scroll-mt-24 rounded-xl border-2 border-blue-200 bg-blue-50 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Request an intro — not an instant quote</h2>
            <p className="text-gray-700 mb-4">
              VitalityScout does not book surgery or issue hospital invoices. Email a
              short note if you want help framing a cash-quote request for a Tijuana
              sleeve. A person will reply. This is not a live pricing engine.
            </p>
            <a
              href="mailto:zach@centurionmovement.com?subject=Cash%20quote%20request%3A%20Gastric%20sleeve%20Tijuana"
              className="inline-block rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800"
            >
              Email for an intro →
            </a>
            <p className="mt-4 text-sm text-gray-600">
              Include height/weight or BMI if you already have it, and any clinic names.
              Then verify every figure with the hospital. Talk to a licensed bariatric
              surgeon before you decide.
            </p>
          </section>

          <section id="faq" className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div>
              {FAQ_ITEMS.map((item) => (
                <FAQItem key={item.question} question={item.question} answer={item.answer} />
              ))}
            </div>
          </section>

          <div className="mt-12 rounded-lg bg-gray-100 p-6">
            <h3 className="font-semibold text-gray-800 mb-2">Medical &amp; pricing disclaimer</h3>
            <p className="text-sm text-gray-600">
              This guide is general information, not medical advice. Gastric sleeve is
              irreversible major surgery. Prices were read from official pages on {AS_OF}
              and can change with BMI, technique, and exchange-rate packaging. Verify
              current pricing, hospital accreditation, and surgeon credentials directly
              with each provider. Complete a full medical evaluation before you travel.
            </p>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources &amp; references</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• <a href="https://www.alobariatrics.com/gastric-sleeve" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">ALO Bariatrics — Tijuana sleeve from $4,500 all-inclusive (flights excluded)</a></li>
              <li>• <a href="https://weightwise.com/pages/financial-information" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">WeightWise — US cash Tier 1 sleeve $9,995</a></li>
              <li>• <a href="https://www.limarp.com/en/services/bariatric/gastric-sleeve-surgery-tijuana/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">LIMARP — gastric sleeve Tijuana (quote; travel packages not included)</a></li>
              <li>• <a href="https://www.limarp.com/en/services/bariatric/cost-financing-bariatric-surgery/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">LIMARP — cost and financing (no published sleeve sticker)</a></li>
              <li>• <a href="https://www.obesitycontrolcenter.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Obesity Control Center — Tijuana JCI program</a></li>
            </ul>
          </div>
        </article>

        <RelatedGuides title="Related tourism cost guides" items={RELATED} />

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get the Tijuana Sleeve Quote Checklist"
            description="Hospital-name, inclusion, and aftercare questions — not a live surgical price."
            source="guide_gastric_sleeve_tijuana_cost"
          />
        </div>
      </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
