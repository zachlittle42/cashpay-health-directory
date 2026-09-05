import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import BrandCtaGrid from '@/components/BrandCtaGrid';
import RelatedGuides from '@/components/RelatedGuides';
import { buildFAQSchema } from '@/lib/jsonLd';

const PAGE_URL = 'https://vitalityscout.com/guides/all-on-4-los-algodones-cost';
const AS_OF = 'September 5, 2026';

export const metadata: Metadata = {
  title: { absolute: 'All-on-4 Los Algodones Cost (2026): Mexico vs US Cash Prices' },
  alternates: { canonical: PAGE_URL },
  description:
    'All-on-4 dental implants in Los Algodones (2026): published clinic lists from $8,110–$12,450 per arch vs Aspen US full-arch average $19,979. What’s in the package — verify with the clinic.',
};

const FAQ_ITEMS = [
  {
    question: 'How much does All-on-4 cost in Los Algodones compared with the US?',
    answer:
      `As of ${AS_OF}, named Los Algodones clinics publish All-on-4 starting prices of $8,110 per arch for an acrylic / hybrid denture (Sani Dental Group and Algodones Dental Center), $8,950 for Nobel Biocare, $9,710 for Straumann, and $12,450 for Nobel Prettau zirconia at Algodones Dental Center. Dental Solutions lists All-on-4 with Nobel Biocare implants and an acrylic bridge at $9,900. Aspen Dental’s 2026 published US average for fixed full-arch implants is $19,979 per arch (range $19,315–$30,878). CareCredit cites a US All-on-4 average of $15,176 (range $11,640–$27,500). These are published list prices, not your invoice — confirm a written quote with the clinic.`,
  },
  {
    question: 'What is usually included in a Los Algodones All-on-4 package?',
    answer:
      'Published lists typically price one arch: four implants plus a fixed temporary or acrylic hybrid prosthesis, consultation, and basic imaging. Hotel nights, airport or border shuttles, and a final zirconia bridge are often extra or a later trip. International flights are not included. Bone grafts, sinus lifts, and extra extractions are commonly billed separately. Ask whether the number you are comparing is first-stage only or includes the final prosthesis.',
  },
  {
    question: 'Are flights included in All-on-4 Los Algodones prices?',
    answer:
      'No. Clinic price lists are for the dental work. You still pay to reach Yuma, Arizona (the usual US-side airport), plus lodging unless a promotional hotel night is written into your quote. Los Algodones is a walk-across from the Andrade/Yuma border for many Southwest patients — that logistics saving is the destination’s real advantage versus a long-haul Istanbul trip.',
  },
  {
    question: 'Why do some All-on-4 quotes look much cheaper than $8,000?',
    answer:
      'A sub-$7,000 “All-on-4” is often first-stage only (implants plus a temporary), a different implant brand, acrylic instead of zirconia, or priced per jaw without the final bridge. Dental Solutions separately lists a final All-on-4 denture at $3,999 (acrylic) to $5,999 (zirconia) on top of the $9,900 implant-and-acrylic-bridge line. Compare material, implant system, and trip count — not just the headline.',
  },
  {
    question: 'Is All-on-4 in Los Algodones safe, and should I get a quote through VitalityScout?',
    answer:
      'Safety depends on the dentist, the implant system, and how revisions are handled after you drive home — not on the city name. Ask for an implant passport or batch sticker, named implant brand, and a written revision policy. VitalityScout can introduce you to the quote checklist; we do not issue clinic invoices or instant prices. Email a request for an intro, then verify every figure with the provider. This is information, not dental advice.',
  },
];

const BRANDS = [
  {
    name: 'Sani Dental Group',
    price: 'All-on-4 from $8,110',
    blurb: 'Published list: acrylic hybrid $8,110; Nobel $8,950; Straumann $9,710 per arch. Base / starting-at prices — confirm after diagnosis.',
    siteUrl: 'https://sanidentalgroup.com/price-list',
    siteLabel: 'Visit Sani price list →',
    profileHref: '/providers/sani-dental-group',
  },
  {
    name: 'Algodones Dental Center',
    price: 'From $8,110 / arch',
    blurb: 'Clinic table: MIS $8,110, Nobel $8,950, Straumann $9,710, Nobel Prettau zirconia $12,450. Temporary plate usually in; flights are not.',
    siteUrl: 'https://www.algodonesdentalcenter.com/all-on-4-implants',
    siteLabel: 'Visit ADC All-on-4 page →',
  },
  {
    name: 'Dental Solutions Los Algodones',
    price: 'Nobel All-on-4 $9,900',
    blurb: 'Nobel Biocare implants + acrylic bridge $9,900. Final denture listed separately ($3,999 acrylic / $5,999 zirconia). Hotel partner ~$60/night.',
    siteUrl: 'https://dentalsolutionsalgodones.com/price-list',
    siteLabel: 'Visit Dental Solutions list →',
  },
];

const RELATED = [
  { href: '/medical-tourism', label: 'Medical tourism hub', blurb: 'US-vs-abroad prices and destinations.' },
  { href: '/guides/cash-pay-healthcare-map', label: 'Cash-pay healthcare map', blurb: 'When a flight beats a US cash bundle.' },
  { href: '/guides/turkey-dental-cost', label: 'Turkey dental cost', blurb: 'Istanbul All-on-4 and implant bands vs Mexico.' },
  { href: '/guides/donor-egg-ivf-abroad', label: 'Donor-egg IVF abroad', blurb: 'Czech and Greek published cycle lists.' },
  { href: '/guides/fue-hair-transplant-istanbul-cost', label: 'FUE hair transplant Istanbul cost', blurb: 'Graft packages vs US cash FUE.' },
  { href: '/guides/gastric-sleeve-tijuana-cost', label: 'Gastric sleeve Tijuana cost', blurb: 'Published Mexico sleeve packages vs US self-pay.' },
  { href: '/guides/mexico-medical-tourism-planner', label: 'Mexico medical tourism planner', blurb: 'Border crossing, packing, and trip timing.' },
  { href: '/guides/turkey-hair-transplant-clinics', label: 'Turkey hair transplant clinics', blurb: 'Clinic-by-clinic Istanbul profiles.' },
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

export default function AllOn4LosAlgodonesCostPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'All-on-4 Los Algodones Cost (2026): Mexico vs US Cash Prices',
    description:
      'Published Los Algodones All-on-4 clinic list prices versus US full-arch cash benchmarks, package inclusions, and how to request an itemized quote.',
    url: PAGE_URL,
    mainEntity: { '@type': 'FAQPage', '@id': `${PAGE_URL}#faq` },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: { '@type': 'MedicalProcedure', name: 'All-on-4 full-arch dental implants in Los Algodones, Mexico' },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-09-05',
    dateModified: '2026-09-05',
    citation: [
      { '@type': 'CreativeWork', name: 'Sani Dental Group — Mexico dental price list (All-on-4 from $8,110)', url: 'https://sanidentalgroup.com/price-list' },
      { '@type': 'CreativeWork', name: 'Algodones Dental Center — All-on-4 implants price table', url: 'https://www.algodonesdentalcenter.com/all-on-4-implants' },
      { '@type': 'CreativeWork', name: 'Dental Solutions Los Algodones — 2026 price list', url: 'https://dentalsolutionsalgodones.com/price-list' },
      { '@type': 'CreativeWork', name: 'Aspen Dental — full mouth dental implants cost (2026 internal average)', url: 'https://www.aspendental.com/pricing-offers/full-mouth-dental-implants-cost/' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': `${PAGE_URL}#faq`, url: PAGE_URL };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vitalityscout.com' },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://vitalityscout.com/guides' },
      { '@type': 'ListItem', position: 3, name: 'All-on-4 Los Algodones Cost', item: PAGE_URL },
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
              <span className="text-gray-900">All-on-4 Los Algodones Cost</span>
            </nav>
          </div>
        </div>

        <section className="bg-gradient-to-b from-amber-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Link href="/medical-tourism" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
              &larr; Medical tourism hub
            </Link>
            <div className="mb-4">
              <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800">
                Cost Guide
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              All-on-4 Los Algodones Cost (2026): Mexico vs US Cash Prices
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Full-arch implant lists from clinics that post a number — not a facilitator
              “from $X” ad — and what that arch price usually leaves out.
            </p>
            <div className="rounded-lg border-l-4 border-amber-600 bg-amber-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                As of {AS_OF}, Los Algodones clinics publish All-on-4 from{' '}
                <strong>$8,110 per arch</strong> (acrylic / hybrid at Sani Dental Group and
                Algodones Dental Center) to <strong>$12,450</strong> for Nobel Prettau zirconia.
                US cash full-arch averages <strong>$19,979 per arch</strong> at Aspen Dental
                (2026 internal data; range $19,315–$30,878). Temporary prostheses are often
                in; flights and the final zirconia upgrade often are not. Verify with the
                clinic. This is information, not dental advice.
              </p>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Last reviewed: September 2026 • Prices read from clinic and Aspen pages on {AS_OF} • 11 min read
            </p>
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-12">
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What we&apos;ll cover</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#prices" className="text-blue-600 hover:underline">1. Published Los Algodones vs US cash prices</a></li>
              <li><a href="#package" className="text-blue-600 hover:underline">2. What is usually in the package</a></li>
              <li><a href="#trips" className="text-blue-600 hover:underline">3. Temporary vs final prosthesis and trip count</a></li>
              <li><a href="#vet" className="text-blue-600 hover:underline">4. How to read a quote</a></li>
              <li><a href="#quote" className="text-blue-600 hover:underline">5. Request an intro (not an instant quote)</a></li>
            </ul>
          </div>

          <BrandCtaGrid
            title="Open the official clinic price lists"
            intro="Plain clinic URLs. These are starting-at list prices — confirm the live, itemized quote before you travel."
            brands={BRANDS}
            hubHref="/medical-tourism"
            hubLabel="Browse medical tourism options →"
          />

          <div className="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-8 text-center my-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Get a cash quote</h3>
            <p className="text-gray-700 mb-5 max-w-2xl mx-auto">
              We do not generate instant clinic invoices. Request an intro and we will
              reply with the questions to send a dentist — implant brand, material, and
              whether the final bridge is in the number.
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
              Published prices: Los Algodones vs the US
            </h2>
            <p className="text-gray-700 mb-4">
              Figures below are copied from the clinics&apos; own lists and from Aspen
              Dental&apos;s 2026 full-arch page. They are <strong>estimates to confirm</strong>,
              not a reservation.
            </p>

            <div className="overflow-x-auto mb-8 not-prose">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Source (as of {AS_OF})</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Published All-on-4 / full-arch</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">What the line usually is</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Sani Dental Group price list</td>
                    <td className="border border-gray-300 px-4 py-3">$8,110 acrylic hybrid; $8,950 Nobel; $9,710 Straumann (per arch)</td>
                    <td className="border border-gray-300 px-4 py-3">Clinic labels these “base / starting at”; diagnosis required</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Algodones Dental Center</td>
                    <td className="border border-gray-300 px-4 py-3">$8,110 MIS; $8,950 Nobel; $9,710 Straumann; $12,450 Nobel Prettau zirconia</td>
                    <td className="border border-gray-300 px-4 py-3">Per-arch table; promotional packages may add a temp plate + hotel nights</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Dental Solutions Los Algodones</td>
                    <td className="border border-gray-300 px-4 py-3">$9,900 Nobel + acrylic bridge; final denture $3,999–$5,999 extra</td>
                    <td className="border border-gray-300 px-4 py-3">Two-line product: implants/temp vs final prosthesis</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Aspen Dental (US, 2026 internal data)</td>
                    <td className="border border-gray-300 px-4 py-3">$19,979 average per arch; range $19,315–$30,878</td>
                    <td className="border border-gray-300 px-4 py-3">Fixed full-arch implants — not a Los Algodones invoice</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">CareCredit All-on-4 guide (US)</td>
                    <td className="border border-gray-300 px-4 py-3">$15,176 average; $11,640–$27,500 range</td>
                    <td className="border border-gray-300 px-4 py-3">National research band; confirm a local US cash quote</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              Istanbul still posts lower All-on-4 headlines on our{' '}
              <Link href="/guides/turkey-dental-cost" className="text-blue-600 hover:underline">Turkey dental cost</Link>{' '}
              guide (commonly estimated $3,000–$6,000 per arch). Los Algodones wins
              the drive-across math from Arizona and California. Compare implant brand
              and prosthetic material, not just the country.
            </p>

            <h2 id="package" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              What is usually in the package
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 my-8">
            <div className="bg-white rounded-lg border-2 border-green-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Typically included</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>Four implants per named arch</span></li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>Fixed temporary or acrylic hybrid prosthesis</span></li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>Consultation and panoramic / CT imaging (sometimes a separate $150–$180 line)</span></li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>English-speaking coordinators at high-volume clinics</span></li>
              </ul>
            </div>
            <div className="bg-white rounded-lg border-2 border-red-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Often excluded</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-red-500 mt-1">✗</span><span>International or domestic flights (never in the dental sticker)</span></li>
                <li className="flex items-start gap-2"><span className="text-red-500 mt-1">✗</span><span>Final zirconia / Prettau bridge (second trip or upgrade line)</span></li>
                <li className="flex items-start gap-2"><span className="text-red-500 mt-1">✗</span><span>Bone grafts (~$400–$420/unit on published lists) and sinus lifts</span></li>
                <li className="flex items-start gap-2"><span className="text-red-500 mt-1">✗</span><span>Hotel (partner nights are promotional, not guaranteed)</span></li>
              </ul>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 id="trips" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              Temporary vs final — and how many trips
            </h2>
            <p className="text-gray-700 mb-4">
              Immediate-load All-on-4 can put a fixed temporary in on visit one.
              Osseointegration still takes months. The <em>final</em> zirconia or
              reinforced bridge is often a later appointment — either back in Los
              Algodones or at a US dentist who will need the implant passport.
              Price the second trip (or the upgrade line) before you call $8,110
              “all-in.”
            </p>
            <p className="text-gray-700 mb-4">
              For border logistics, packing, and a realistic calendar, use the{' '}
              <Link href="/guides/mexico-medical-tourism-planner" className="text-blue-600 hover:underline">Mexico medical tourism planner</Link>.
              For the verified multi-clinic implant table we already maintain, see{' '}
              <Link href="/guides/mexico-dental-implant-prices" className="text-blue-600 hover:underline">Mexico dental implant prices</Link>.
            </p>

            <h2 id="vet" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              How to read a Los Algodones quote
            </h2>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
              <li>Named implant system (Nobel, Straumann, MIS) and a promise of the batch sticker / passport.</li>
              <li>Acrylic vs zirconia for the <em>final</em> prosthesis — and whether that line is in this price.</li>
              <li>Extractions, grafts, and sedation as separate rows, not “we’ll see.”</li>
              <li>Number of trips and who handles a failed fixture after you drive home.</li>
              <li>Compare the same product to Istanbul using{' '}
                <Link href="/guides/turkey-dental-cost" className="text-blue-600 hover:underline">Turkey dental cost</Link>{' '}
                and to other cash-pay buckets on the{' '}
                <Link href="/guides/cash-pay-healthcare-map" className="text-blue-600 hover:underline">cash-pay healthcare map</Link>.
              </li>
            </ol>
          </div>

          <BrandCtaGrid
            title="Confirm today’s list price"
            intro="Open the clinic page, screenshot the All-on-4 row, then ask for an itemized written quote."
            brands={BRANDS}
            hubHref="/dental"
            hubLabel="Open the dental hub →"
          />

          <section id="quote" className="mt-12 scroll-mt-24 rounded-xl border-2 border-blue-200 bg-blue-50 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Request an intro — not an instant quote</h2>
            <p className="text-gray-700 mb-4">
              VitalityScout does not book chairs or issue clinic invoices. If you want
              help framing an itemized cash-quote request for All-on-4 in Los Algodones,
              email a short note. A person will reply. This is not a live pricing engine.
            </p>
            <a
              href="mailto:zach@centurionmovement.com?subject=Cash%20quote%20request%3A%20All-on-4%20Los%20Algodones"
              className="inline-block rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800"
            >
              Email for an intro →
            </a>
            <p className="mt-4 text-sm text-gray-600">
              Include procedure, arch (upper / lower / both), and any clinic names you
              are comparing. Then verify every number with the dentist. Consult a licensed
              clinician before you travel.
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
              This guide is general information, not dental advice. Prices were read from
              official clinic and Aspen pages on {AS_OF} and can change. Implant candidacy,
              material choice, and trip count belong with a licensed dentist. Verify current
              pricing and inclusions directly with each provider before you book travel.
            </p>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources &amp; references</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• <a href="https://sanidentalgroup.com/price-list" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Sani Dental Group — price list (All-on-4 acrylic $8,110; Nobel $8,950; Straumann $9,710)</a></li>
              <li>• <a href="https://www.algodonesdentalcenter.com/all-on-4-implants" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Algodones Dental Center — All-on-4 table ($8,110–$12,450)</a></li>
              <li>• <a href="https://dentalsolutionsalgodones.com/price-list" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Dental Solutions Los Algodones — 2026 price list (Nobel All-on-4 $9,900; final denture extras)</a></li>
              <li>• <a href="https://www.aspendental.com/pricing-offers/full-mouth-dental-implants-cost/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Aspen Dental — full-arch average $19,979 (2026 internal data; range $19,315–$30,878)</a></li>
              <li>• <a href="https://www.carecredit.com/well-u/health-wellness/all-on-4-dental-implants-cost/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">CareCredit — All-on-4 US average $15,176 (range $11,640–$27,500)</a></li>
            </ul>
          </div>
        </article>

        <RelatedGuides title="Related tourism cost guides" items={RELATED} />

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get the All-on-4 Quote Checklist"
            description="Implant-brand, material, and two-trip questions to send a Los Algodones clinic — not a live price."
            source="guide_all_on_4_los_algodones_cost"
          />
        </div>
      </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
