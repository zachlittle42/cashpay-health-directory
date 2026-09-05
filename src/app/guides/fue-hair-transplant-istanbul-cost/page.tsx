import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import BrandCtaGrid from '@/components/BrandCtaGrid';
import RelatedGuides from '@/components/RelatedGuides';
import { buildFAQSchema } from '@/lib/jsonLd';

const PAGE_URL = 'https://vitalityscout.com/guides/fue-hair-transplant-istanbul-cost';
const AS_OF = 'September 5, 2026';

export const metadata: Metadata = {
  title: { absolute: 'FUE Hair Transplant Istanbul Cost (2026): Graft Prices vs the US' },
  alternates: { canonical: PAGE_URL },
  description:
    'FUE hair transplant cost in Istanbul (2026): Cosmedica Sapphire FUE €2,550 (up to 4,000 grafts) vs CareCredit US FUE average $6,344. Package inclusions, JCI vs Ministry of Health — verify with the clinic.',
};

const FAQ_ITEMS = [
  {
    question: 'How much does an FUE hair transplant cost in Istanbul vs the US?',
    answer:
      `As of ${AS_OF}, Cosmedica’s published Istanbul list prices Sapphire FUE at €2,550 for up to 4,000 grafts (megasession add-on €900 up to 6,000). That is a fixed package, not a per-graft invoice. CareCredit’s July 2026 US guide lists FUE at an average $6,344 (range $4,417–$10,640) — often a smaller session than a 3,000–4,000 graft Istanbul package. US clinics that bill per graft commonly quote about $5–$10 per graft ($8,000–$20,000 for a large session). Confirm graft count and who operates. These are published estimates — verify with the clinic.`,
  },
  {
    question: 'What is included in an Istanbul FUE package?',
    answer:
      'A typical Cosmedica-style Sapphire FUE package bundles the procedure (up to the stated graft cap), consultation and hairline design, hotel nights, VIP airport and clinic transfers, a translator, next-day result check, and aftercare steps the clinic names (Cosmedica lists oxygen therapy on the FUE line). International flights are not included. Extra hotel nights, a second session, and medications after you fly home are often extra. Get inclusions in writing.',
  },
  {
    question: 'How is this different from the Turkey hair clinics guide?',
    answer:
      'This page is the FUE money guide: published graft packages, US cash comparators, and what “all-inclusive” leaves out. The Turkey hair transplant clinics guide is the clinic-by-clinic profile page (Vera, Cosmedica, Estepera, Vinci, and others). Use both — cost math here, names and positioning there — plus the Istanbul trip planner for the week on the ground.',
  },
  {
    question: 'Do Istanbul hair clinics have JCI accreditation?',
    answer:
      'Joint Commission International (JCI) accredits hospitals, not every boutique hair clinic. Some Istanbul programs operate inside or alongside JCI hospitals (for example Hermest notes work at Istanbul Florence Nightingale). Most FUE packages are sold by Ministry of Health–licensed hair-transplant units with a health-tourism authorization. Confirm the facility license and that a licensed physician performs the incision step (Turkey’s 2023 Hair Transplant Units Regulation). JCI on a brochure is not a substitute for naming the operating doctor.',
  },
  {
    question: 'Can VitalityScout give me an instant FUE quote?',
    answer:
      'No. We do not generate live clinic invoices. You can request an intro by email and we will reply with the questions to send an Istanbul clinic (graft cap, technique, who makes incisions). Then verify the written quote with the provider. This is information, not medical advice.',
  },
];

const BRANDS = [
  {
    name: 'Cosmedica (Dr. Levent Acar)',
    price: 'Sapphire FUE €2,550',
    blurb: 'Published Aug 2026: FUE Sapphire €2,550 up to 4,000 grafts; megasession +€900. Hotel, transfers, translator in. Flights not included.',
    siteUrl: 'https://cosmedica.com/price/',
    siteLabel: 'Visit Cosmedica prices →',
    profileHref: '/providers/cosmedica-clinic',
  },
  {
    name: 'Hermest Hair Clinic',
    price: 'FUE packages on request',
    blurb: 'Operates partly at JCI-accredited Istanbul Florence Nightingale. Ask for a written Sapphire FUE graft cap and who performs incisions.',
    siteUrl: 'https://www.hermestclinic.com/hair-transplant-prices',
    siteLabel: 'Visit Hermest prices →',
  },
];

const RELATED = [
  { href: '/medical-tourism', label: 'Medical tourism hub', blurb: 'US-vs-abroad prices and destinations.' },
  { href: '/guides/cash-pay-healthcare-map', label: 'Cash-pay healthcare map', blurb: 'When a flight beats a US cash bundle.' },
  { href: '/guides/turkey-hair-transplant-clinics', label: 'Turkey hair transplant clinics', blurb: 'Clinic-by-clinic Istanbul profiles — complement to this cost page.' },
  { href: '/guides/turkey-hair-transplant-trip-planner', label: 'Turkey hair transplant trip planner', blurb: 'Seven days in Istanbul around the procedure.' },
  { href: '/guides/turkey-dental-cost', label: 'Turkey dental cost', blurb: 'Istanbul implants and All-on-4 vs Mexico.' },
  { href: '/guides/donor-egg-ivf-abroad', label: 'Donor-egg IVF abroad', blurb: 'Czech and Greek published cycle lists.' },
  { href: '/guides/mexico-medical-tourism-planner', label: 'Mexico medical tourism planner', blurb: 'Border logistics if you are comparing destinations.' },
  { href: '/guides/all-on-4-los-algodones-cost', label: 'All-on-4 Los Algodones cost', blurb: 'Full-arch implant lists vs US cash.' },
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

export default function FueHairTransplantIstanbulCostPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'FUE Hair Transplant Istanbul Cost (2026): Graft Packages vs the US',
    description:
      'Published Istanbul FUE package prices versus US cash FUE averages, what all-inclusive packages include, and how JCI differs from Ministry of Health licensing.',
    url: PAGE_URL,
    mainEntity: { '@type': 'FAQPage', '@id': `${PAGE_URL}#faq` },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: { '@type': 'MedicalProcedure', name: 'Follicular unit extraction (FUE) hair transplant in Istanbul' },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-09-05',
    dateModified: '2026-09-05',
    citation: [
      { '@type': 'CreativeWork', name: 'Cosmedica — Turkey hair transplant cost 2026 (Sapphire FUE €2,550)', url: 'https://cosmedica.com/price/' },
      { '@type': 'CreativeWork', name: 'CareCredit — Hair transplant cost guide (US FUE average $6,344, July 2026)', url: 'https://www.carecredit.com/well-u/health-wellness/hair-transplant-cost/' },
      { '@type': 'CreativeWork', name: 'Hermest Hair Clinic — hair transplant prices', url: 'https://www.hermestclinic.com/hair-transplant-prices' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': `${PAGE_URL}#faq`, url: PAGE_URL };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vitalityscout.com' },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://vitalityscout.com/guides' },
      { '@type': 'ListItem', position: 3, name: 'FUE Hair Transplant Istanbul Cost', item: PAGE_URL },
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
              <span className="text-gray-900">FUE Hair Transplant Istanbul Cost</span>
            </nav>
          </div>
        </div>

        <section className="bg-gradient-to-b from-rose-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Link href="/medical-tourism" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
              &larr; Medical tourism hub
            </Link>
            <div className="mb-4">
              <span className="rounded-full bg-rose-100 px-3 py-1 text-sm font-medium text-rose-800">
                Cost Guide
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              FUE Hair Transplant Istanbul Cost (2026): Graft Packages vs the US
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              The FUE money page — published Istanbul packages versus US cash FUE —
              not another clinic directory. For names and reviews, use the clinics guide.
            </p>
            <div className="rounded-lg border-l-4 border-rose-600 bg-rose-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                As of {AS_OF}, a named Istanbul clinic (Cosmedica) publishes{' '}
                <strong>Sapphire FUE at €2,550</strong> for up to 4,000 grafts (updated
                August 2026). CareCredit&apos;s US FUE average is <strong>$6,344</strong>{' '}
                (range $4,417–$10,640) — often fewer grafts than a 4,000-graft package.
                Hotel and transfers are usually in; flights are not. Confirm graft cap
                and the operating physician. This is information, not medical advice.
              </p>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Last reviewed: September 2026 • Prices read from Cosmedica and CareCredit on {AS_OF} • 11 min read
            </p>
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-12">
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What we&apos;ll cover</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#prices" className="text-blue-600 hover:underline">1. Istanbul FUE packages vs US cash FUE</a></li>
              <li><a href="#package" className="text-blue-600 hover:underline">2. What the package includes</a></li>
              <li><a href="#safety" className="text-blue-600 hover:underline">3. JCI vs Ministry of Health licensing</a></li>
              <li><a href="#vs-clinics" className="text-blue-600 hover:underline">4. How this page differs from the clinics guide</a></li>
              <li><a href="#quote" className="text-blue-600 hover:underline">5. Request an intro (not an instant quote)</a></li>
            </ul>
          </div>

          <BrandCtaGrid
            title="Open official FUE price pages"
            intro="Plain clinic URLs. Confirm the live graft cap, technique (FUE vs DHI), and who performs incisions."
            brands={BRANDS}
            hubHref="/medical-tourism"
            hubLabel="Browse medical tourism options →"
          />

          <div className="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-8 text-center my-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Get a cash quote</h3>
            <p className="text-gray-700 mb-5 max-w-2xl mx-auto">
              We do not generate instant FUE invoices. Request an intro and we will
              reply with the graft-count and surgeon questions to send an Istanbul clinic.
            </p>
            <a
              href="#quote"
              className="inline-block rounded-lg bg-emerald-700 px-6 py-3 font-semibold text-white hover:bg-emerald-800"
            >
              Request an intro
            </a>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 id="prices" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              Istanbul FUE vs US cash prices
            </h2>
            <p className="text-gray-700 mb-4">
              Compare <strong>graft cap + technique</strong>, not “Turkey vs America.”
              A €2,550 package for up to 4,000 grafts is a different product from a
              US $6,344 average that may be 1,000–2,000 grafts.
            </p>

            <div className="overflow-x-auto mb-8 not-prose">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Source (as of {AS_OF})</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Published FUE figure</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">How to read it</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Cosmedica price page (updated 28 Aug 2026)</td>
                    <td className="border border-gray-300 px-4 py-3">Sapphire FUE €2,550 up to 4,000 grafts; +€900 to ~6,000</td>
                    <td className="border border-gray-300 px-4 py-3">Fixed package after assessment — not billed per graft</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Cosmedica (same page, DHI comparison)</td>
                    <td className="border border-gray-300 px-4 py-3">Micro Sapphire DHI €3,290 up to 4,000 grafts</td>
                    <td className="border border-gray-300 px-4 py-3">Different technique; slower / denser cases — not “better FUE”</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">CareCredit US hair-transplant guide (24 Jul 2026)</td>
                    <td className="border border-gray-300 px-4 py-3">FUE average $6,344; range $4,417–$10,640</td>
                    <td className="border border-gray-300 px-4 py-3">National US band; graft count not standardized — ask your US clinic</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">US per-graft clinics (orientation)</td>
                    <td className="border border-gray-300 px-4 py-3">Commonly ~$5–$10/graft; large sessions $8,000–$20,000</td>
                    <td className="border border-gray-300 px-4 py-3">Used on our existing Turkey cost overview — confirm locally</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              Euro stickers move with the exchange rate. Treat “about $2,800” for
              €2,550 as orientation the day you convert, not a locked USD invoice.
            </p>

            <h2 id="package" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              What an Istanbul FUE package usually includes
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 my-8">
            <div className="bg-white rounded-lg border-2 border-green-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Typically included</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>FUE (or Sapphire FUE) up to the stated graft cap</span></li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>Local anesthesia and next-day wash / check</span></li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>Partner hotel nights and VIP transfers</span></li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>Translator / patient companion</span></li>
              </ul>
            </div>
            <div className="bg-white rounded-lg border-2 border-red-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Often excluded</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-red-500 mt-1">✗</span><span>International flights to Istanbul</span></li>
                <li className="flex items-start gap-2"><span className="text-red-500 mt-1">✗</span><span>Extra hotel nights if you stay past the package</span></li>
                <li className="flex items-start gap-2"><span className="text-red-500 mt-1">✗</span><span>A second session if donor supply or density needs another day</span></li>
                <li className="flex items-start gap-2"><span className="text-red-500 mt-1">✗</span><span>Long-term aftercare once you are home</span></li>
              </ul>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 id="safety" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              Safety notes: JCI is a hospital badge
            </h2>
            <p className="text-gray-700 mb-4">
              JCI accreditation is a hospital-quality standard. It is useful when the
              operating room sits inside a JCI hospital. It does not automatically
              credential every technician in a high-volume hair unit. For foreign
              patients, the practical filters in Turkey are: a Ministry of Health
              hair-transplant unit license, a health-tourism authorization, a{' '}
              <strong>named physician</strong> who makes the incisions (required under
              the 2023 regulation), and a written complication protocol.
            </p>
            <p className="text-gray-700 mb-4">
              ISHRS has warned about black-market “bait and switch” clinics. A
              rock-bottom FUE with no named surgeon is the red flag — not the fact
              that Istanbul is cheaper than a US per-graft bill.
            </p>

            <h2 id="vs-clinics" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              Complement, don&apos;t duplicate, the clinics guide
            </h2>
            <p className="text-gray-700 mb-4">
              <Link href="/guides/turkey-hair-transplant-clinics" className="text-blue-600 hover:underline">Turkey hair transplant clinics</Link>{' '}
              is where Vera, Cosmedica, Estepera, and Vinci are profiled side by side.
              The broader{' '}
              <Link href="/guides/hair-transplant-turkey-cost" className="text-blue-600 hover:underline">hair transplant Turkey cost</Link>{' '}
              overview covers FUE vs DHI bands. This page stays on{' '}
              <strong>FUE graft math and package inclusions</strong>. For the week in
              Istanbul, use the{' '}
              <Link href="/guides/turkey-hair-transplant-trip-planner" className="text-blue-600 hover:underline">trip planner</Link>.
              For destination-level context, start at{' '}
              <Link href="/medical-tourism" className="text-blue-600 hover:underline">medical tourism</Link>{' '}
              and the{' '}
              <Link href="/guides/cash-pay-healthcare-map" className="text-blue-600 hover:underline">cash-pay healthcare map</Link>.
            </p>
          </div>

          <BrandCtaGrid
            title="Next clicks"
            intro="Confirm Cosmedica’s live FUE line, then read clinic profiles or plan the trip."
            brands={BRANDS}
            hubHref="/hair_transplant"
            hubLabel="Open the hair-transplant hub →"
          />

          <section id="quote" className="mt-12 scroll-mt-24 rounded-xl border-2 border-blue-200 bg-blue-50 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Request an intro — not an instant quote</h2>
            <p className="text-gray-700 mb-4">
              VitalityScout does not book operating rooms or issue FUE invoices. Email
              a short note if you want help framing a cash-quote request for Istanbul
              FUE. A person will reply. This is not a live pricing engine.
            </p>
            <a
              href="mailto:zach@centurionmovement.com?subject=Cash%20quote%20request%3A%20FUE%20Istanbul"
              className="inline-block rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800"
            >
              Email for an intro →
            </a>
            <p className="mt-4 text-sm text-gray-600">
              Include approximate graft needs (if you have a consult note), FUE vs DHI
              preference, and any clinic names. Then verify every figure with the clinic.
              Consult a licensed clinician before you travel.
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
              This guide is general information, not medical advice. Prices were read from
              official pages on {AS_OF} and can change with graft count, currency, and
              technique. Hair restoration candidacy belongs with a licensed physician.
              Verify current pricing and who performs the surgery before you book flights.
            </p>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources &amp; references</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• <a href="https://cosmedica.com/price/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Cosmedica — 2026 price page (Sapphire FUE €2,550 / DHI €3,290; updated 28 Aug 2026)</a></li>
              <li>• <a href="https://www.carecredit.com/well-u/health-wellness/hair-transplant-cost/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">CareCredit — US FUE average $6,344 (range $4,417–$10,640), dated 24 Jul 2026</a></li>
              <li>• <a href="https://www.hermestclinic.com/hair-transplant-prices" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Hermest Hair Clinic — hair transplant prices (JCI hospital setting note)</a></li>
              <li>• VitalityScout — Turkey hair transplant clinics; hair transplant Turkey cost; Istanbul trip planner</li>
            </ul>
          </div>
        </article>

        <RelatedGuides title="Related tourism cost guides" items={RELATED} />

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get the Istanbul FUE Quote Checklist"
            description="Graft-cap, incision-physician, and package-exclusion questions — not a live clinic price."
            source="guide_fue_hair_transplant_istanbul_cost"
          />
        </div>
      </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
