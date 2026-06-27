import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'LASIK Cost by Country (2026): US vs Mexico, Turkey & More' },
  alternates: { canonical: 'https://vitalityscout.com/guides/lasik-cost-by-country' },
  description:
    'LASIK cost by country: per-eye and both-eyes prices in Mexico, Turkey, India & Thailand vs the US, what packages include, safety, and how to choose.',
};

// Real conversational / People-Also-Ask questions, answered only from facts
// stated on this page. Every price answer ends with the verify-with-clinic
// hedge, consistent with the medical disclaimer. The visible FAQ block below
// mirrors this schema exactly — schema clarifies the page, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much is LASIK eye surgery abroad vs the US?',
    answer:
      'In the US the national average is about $2,250 per eye, or roughly $4,492 for both eyes. Abroad, both-eyes packages are commonly quoted around $600-$2,400 in India, $1,800-$3,000 in Turkey, $2,000-$4,000 in Thailand, and $1,300-$2,500 in Mexico, with published comparisons describing 25-75% savings. These are estimates that vary by clinic, laser platform, and your prescription — get a written, itemized quote that names the technology before you book.',
  },
  {
    question: 'Which is the cheapest country for LASIK eye surgery?',
    answer:
      'On the comparisons we reviewed, India tends to post the lowest headline pricing — roughly $500-$1,200 per eye, or about $600-$2,400 for both eyes — followed by Turkey. Mexico is the most convenient for US patients (no long-haul flight). Cheapest is not automatically best: the laser platform, the surgeon, accreditation, and travel cost all matter more than the country average. Confirm exactly what each quote includes before comparing.',
  },
  {
    question: 'What does an all-inclusive LASIK package abroad include?',
    answer:
      'Package contents vary by clinic. A typical all-inclusive quote may bundle the pre-op eye exam and diagnostics, the laser procedure on an FDA-approved platform (such as WaveLight or VisuMax), post-op medications, one or two follow-up visits, and sometimes an airport transfer, a hotel stay, and an English-speaking coordinator. It often does NOT include your flights, treatment of an unexpectedly complex prescription, or an enhancement/re-treatment later. Ask the clinic for a written, itemized list before you pay a deposit.',
  },
  {
    question: 'Is LASIK eye surgery abroad safe?',
    answer:
      'Quality ranges widely clinic to clinic, so the standard advice is to use accredited facilities that run recognized laser platforms. Look for international accreditation such as JCI (and GHA or ISO), surgeons with documented refractive-surgery training and board certification, FDA-approved excimer/femtosecond systems, and a clear plan for follow-up and enhancements once you return home. Verify candidacy with a qualified eye surgeon — corneal thickness and prescription stability decide whether LASIK is appropriate. This is information, not medical advice.',
  },
  {
    question: 'How long do I need to stay abroad for LASIK?',
    answer:
      'LASIK itself is quick, but most clinics want a pre-op evaluation, the procedure, and at least one next-day follow-up, so a typical trip runs roughly 3-5 days. Vision often stabilizes over days to weeks, and some patients need a later enhancement. Avoid flying out the same day as surgery, and confirm the exact pre-op and follow-up schedule, and how a possible enhancement is handled, with your clinic before booking flights.',
  },
  {
    question: 'Will my US vision insurance cover LASIK done abroad?',
    answer:
      'LASIK is considered an elective procedure, so most US medical and vision plans do not cover it at all — domestically or abroad — though some offer a discount through a partner network or let you pay with HSA/FSA funds. That is why cash-pay pricing is the relevant comparison for most travelers. Separate medical-travel insurance that covers complications is worth considering. Confirm any benefit with your insurer and the clinic before you commit.',
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

export default function LasikCostByCountry() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'LASIK Cost by Country (2026): US vs Mexico, Turkey, India & Thailand',
    description:
      'A side-by-side cost comparison of LASIK eye surgery by country — per-eye and both-eyes prices in Mexico, Turkey, India, and Thailand versus the US, what each package includes, the safety and accreditation signals to check, and how to choose.',
    url: 'https://vitalityscout.com/guides/lasik-cost-by-country',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/lasik-cost-by-country#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'MedicalProcedure',
      name: 'LASIK laser refractive eye surgery (laser-assisted in situ keratomileusis)',
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-25',
    dateModified: '2026-06-25',
    citation: [
      { '@type': 'CreativeWork', name: 'How Much Does LASIK Cost? — US national average (American Refractive Surgery Council)', url: 'https://americanrefractivesurgerycouncil.org/cost-of-lasik/' },
      { '@type': 'CreativeWork', name: 'LASIK Eye Surgery Cost in USA, Turkey, Thailand & India (Med Travel Tourism)', url: 'https://medtraveltourism.com/lasik-eye-surgery-cost-in-usa-turkey-thailand-india/' },
      { '@type': 'CreativeWork', name: 'Affordable LASIK Eye Surgery: Cost by Country Compared (Bookimed)', url: 'https://us-uk.bookimed.com/article/affordable-lasik-eye-surgery/' },
      { '@type': 'CreativeWork', name: 'What Are the Best Countries for LASIK Eye Surgery? (Medical Tourism Association)', url: 'https://www.medicaltourism.com/articles/what-are-the-best-countries-for-lasik-eye-surgery' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/lasik-cost-by-country#faq', url: 'https://vitalityscout.com/guides/lasik-cost-by-country' };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <SidebarShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-cyan-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <Link href="/medical-tourism" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
            &larr; Medical Tourism Hub
          </Link>

          <div className="mb-4 flex items-center gap-3">
            <span className="text-4xl">👁️</span>
            <span className="rounded-full bg-cyan-100 px-3 py-1 text-sm font-medium text-cyan-700">
              Comparison Guide
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            LASIK Cost by Country: US vs Mexico, Turkey, India &amp; Thailand
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            Four of the most-searched LASIK markets — Mexico, Turkey, India, and Thailand — side by side
            against US prices. Per-eye and both-eyes costs, what each package includes, the safety signals
            that matter, and how to weigh price against travel and quality.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-cyan-500 bg-cyan-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              LASIK in the US averages about <strong>$2,250 per eye</strong> (roughly{' '}
              <strong>$4,492 for both eyes</strong>). Abroad, both-eyes packages are commonly quoted around{' '}
              <strong>$600-$2,400</strong> in India, <strong>$1,800-$3,000</strong> in Turkey,{' '}
              <strong>$2,000-$4,000</strong> in Thailand, and <strong>$1,300-$2,500</strong> in Mexico —
              savings of roughly 25-75% on published comparisons. India tends to be cheapest; Mexico is most
              convenient for US patients. Cheapest is not best: weigh the laser platform, accreditation, the
              surgeon, and travel. Verify every quote with the clinic. This is information, not medical advice.
            </p>
          </div>

          <p className="mt-4 text-sm text-gray-500">Last reviewed: June 2026 • 13 min read</p>
        </div>
      </section>

      {/* Medical / Quality Disclaimer */}
      <section className="mx-auto max-w-4xl px-4 py-6">
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
          <h3 className="text-lg font-bold text-red-900 mb-3">Read This First</h3>
          <p className="text-sm text-red-800 mb-3">
            <strong>Quality varies clinic to clinic, not just country to country.</strong> A low headline
            price means little until you know the laser platform, the surgeon&apos;s refractive-surgery
            experience, the accreditation, and exactly what the quote covers. Look for FDA-approved laser
            systems such as{' '}
            <a href="https://www.alcon.com" target="_blank" rel="noopener noreferrer nofollow" className="underline">
              Alcon WaveLight
            </a>{' '}
            or{' '}
            <a href="https://www.zeiss.com/meditec/en/products/refractive-lasers.html" target="_blank" rel="noopener noreferrer nofollow" className="underline">
              ZEISS VisuMax
            </a>
            , and confirm accreditation directly — status can change.
          </p>
          <p className="text-sm text-red-800">
            This guide is for informational purposes only and is not medical advice. LASIK is not right for
            everyone; candidacy depends on your corneal thickness, prescription stability, and eye health.
            Discuss candidacy, alternatives (such as PRK or SMILE), and risks with a qualified eye surgeon
            before pursuing treatment abroad.
          </p>
        </div>
      </section>

      {/* At a Glance */}
      <section className="mx-auto max-w-4xl px-4 py-6">
        <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6">
          <h2 className="text-lg font-bold text-cyan-900 mb-3">LASIK Abroad at a Glance</h2>
          <ul className="text-sm text-gray-700 space-y-1 mb-0">
            <li>✓ <strong>25-75% savings</strong> vs US prices on most published comparisons (estimates)</li>
            <li>✓ <strong>Lowest headline pricing:</strong> India, then Turkey</li>
            <li>✓ <strong>Closest to the US:</strong> Mexico (border crossings; no long-haul flight)</li>
            <li>✓ <strong>JCI-accredited hospital networks:</strong> Thailand, India, Turkey</li>
            <li>✓ <strong>Laser platforms to look for:</strong> WaveLight, VisuMax (FDA-approved systems)</li>
            <li>✓ <strong>Typical trip:</strong> ~3-5 days (pre-op exam, surgery, next-day follow-up)</li>
            <li>✓ <strong>US insurance rarely helps:</strong> LASIK is elective; cash-pay is the comparison</li>
          </ul>
        </div>
      </section>

      {/* Why people travel */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why LASIK Pricing Sends People Abroad</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              LASIK is one of the most travel-friendly procedures in healthcare because the math is simple
              and the procedure is fast. US vision and medical plans treat laser eye surgery as elective, so
              most patients pay cash either way — and the national average runs about $2,250 per eye, or
              roughly $4,492 for both eyes, per the American Refractive Surgery Council. The same FDA-approved
              excimer and femtosecond lasers used in US clinics are widely available abroad at a fraction of
              the price.
            </p>
            <p>
              That makes the comparison stark for a self-pay patient: a both-eyes package quoted at $1,800
              in India or Turkey against $4,000-$5,000 at home. The trade-offs are real — travel time, the
              logistics of arranging follow-up across borders, and a quality range that makes vetting
              non-negotiable — but the savings on bilateral treatment are large enough that an entire
              vision-tourism industry has grown around them. This guide compares the four markets US patients
              search for most, then gives you a way to decide between them.
            </p>
          </div>
        </div>
      </section>

      {/* Country Price Comparison Table — REQUIRED */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">LASIK Cost by Country (Estimates)</h2>
        <p className="text-gray-600 mb-6 text-sm">
          Prices below are both-eyes estimates compiled from public LASIK cost-comparison sources, with the
          US national average as the baseline. Both-eyes pricing is the unit most patients actually decide
          on. These are estimates, not quotes — confirm current pricing and what is included with the clinic.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Country</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-green-700">LASIK, Both Eyes (est.)</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">What&apos;s Typically Included</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Est. Savings vs US</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Accreditation Note</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">United States (baseline)</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">~$4,492 (avg)</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Surgery; pre-op and follow-up often billed separately</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">—</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">FDA-regulated; state-licensed surgeons</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">India</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$600 - $2,400</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Local cash pricing; tech tier drives the range</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~50-75%</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">JCI / NABH hospital networks</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">Turkey</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$1,800 - $3,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">All-inclusive: exam, surgery, meds, transfer, hotel</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~40-60%</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">JCI; Ministry of Health regulated</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">Mexico</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$1,300 - $2,500</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Consultation, surgery, transfers (varies by clinic)</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~25-60%</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">COFEPRIS; vet the specific clinic</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">Thailand</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$2,000 - $4,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Pre-op tests, advanced femtosecond laser, meds</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~20-40%</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">JCI-accredited hospitals (Bangkok)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600 mt-4">
          Ranges vary by clinic, city, laser platform, and your prescription. The low end of each range
          usually reflects standard LASIK; custom/wavefront, bladeless, and SMILE cost more. Quotes are not
          apples-to-apples until you confirm the technology and what each one includes. Always request a
          written, itemized quote.
        </p>
      </section>

      {/* Per-market breakdown */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">The Four Markets, Market by Market</h2>
          <p className="text-gray-600 mb-8 text-sm">
            Each market trades price, travel, and quality assurance differently. Here is how they actually
            differ for a US patient.
          </p>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Mexico</h3>
                <span className="bg-cyan-100 text-cyan-700 text-xs px-2 py-1 rounded">Closest to US</span>
              </div>
              <p className="text-sm text-gray-600 mb-0">
                Mexico is the logistically easiest option for most US patients — no long-haul flight, and
                hubs like Tijuana (20 minutes from San Diego) and Cancún are short trips. Both-eyes pricing
                commonly lands around $1,300-$2,500, so the savings are smaller than India or Turkey but the
                travel is far simpler, which often nets out ahead for a single short trip. Quality ranges
                widely between border storefronts and established hospitals such as the larger private
                groups, so verify the specific clinic, the surgeon, and the laser platform — not the
                destination. See our{' '}
                <Link href="/destinations/mexico" className="text-blue-600 hover:underline">Mexico destination guide</Link>{' '}
                for vetted providers and border logistics.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Turkey</h3>
                <span className="bg-cyan-100 text-cyan-700 text-xs px-2 py-1 rounded">All-inclusive packages</span>
              </div>
              <p className="text-sm text-gray-600 mb-0">
                Turkey, centered on Istanbul, is known for all-inclusive LASIK packages that bundle the
                pre-op exam, surgery on FDA-approved platforms, post-op medications, one or two follow-ups,
                and often a hotel stay, airport transfer, and an English-speaking coordinator. Both-eyes
                pricing commonly runs around $1,800-$3,000. The trade-off is the long flight and a market
                with a wide quality range, so the inclusive headline price makes verifying the laser system,
                the surgeon, and JCI accreditation especially important. Our{' '}
                <Link href="/destinations/turkey" className="text-blue-600 hover:underline">Turkey destination guide</Link>{' '}
                lists vetted clinics and what to ask.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">India</h3>
                <span className="bg-cyan-100 text-cyan-700 text-xs px-2 py-1 rounded">Lowest pricing</span>
              </div>
              <p className="text-sm text-gray-600 mb-0">
                India posts the lowest headline LASIK pricing in this comparison — roughly $500-$1,200 per
                eye, or about $600-$2,400 for both — across large hospital networks in cities like Delhi,
                Bangalore, and Mumbai, many of them JCI- or NABH-accredited. The technology tier drives the
                range: standard blade LASIK sits at the low end, with bladeless, Contoura/wavefront, and
                SMILE higher. The longest flight is the main trade-off, and as everywhere the specific
                accredited hospital and surgeon matter more than the country average. See our{' '}
                <Link href="/destinations/india" className="text-blue-600 hover:underline">India destination guide</Link>{' '}
                for accredited hospital networks and visa basics.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Thailand</h3>
                <span className="bg-cyan-100 text-cyan-700 text-xs px-2 py-1 rounded">Premium hospitals</span>
              </div>
              <p className="text-sm text-gray-600 mb-0">
                Thailand — chiefly Bangkok — built its reputation on internationally accredited private
                hospitals with advanced femtosecond laser equipment, and its pricing reflects that
                positioning: both-eyes estimates commonly run around $2,000-$4,000, so the savings are real
                but Thailand is rarely the outright cheapest. For patients who want JCI-accredited
                infrastructure, English-speaking coordination, and a recovery destination in one trip, it is
                a popular middle-ground choice. As always, vet the named hospital and surgeon rather than the
                country.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">What an All-Inclusive LASIK Package Does — and Does Not — Cover</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="font-bold text-green-900 mt-0 mb-3">Commonly included</h3>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li>✓ The pre-op eye exam and diagnostics</li>
              <li>✓ The laser procedure on an FDA-approved platform</li>
              <li>✓ Post-op medications (drops)</li>
              <li>✓ One or two follow-up visits during your stay</li>
              <li>✓ Airport transfers (many packages)</li>
              <li>✓ A hotel stay and English-speaking coordinator (some packages)</li>
            </ul>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="font-bold text-yellow-900 mt-0 mb-3">Often NOT included</h3>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li>✗ Your international flights</li>
              <li>✗ An upgrade to custom/wavefront, bladeless, or SMILE</li>
              <li>✗ Treatment of an unexpectedly complex prescription</li>
              <li>✗ An enhancement / re-treatment later</li>
              <li>✗ Long-term follow-up once you return home</li>
              <li>✗ Care for complications after you fly back</li>
            </ul>
          </div>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
          <p className="text-sm text-yellow-800 mb-0">
            <strong>The single most useful question:</strong> ask for a written, itemized quote that names
            the exact laser platform and the procedure type — then ask what is excluded. A
            &ldquo;$799 LASIK&rdquo; that turns out to be standard blade LASIK, excludes the diagnostics, and
            charges separately for an enhancement is not the same product as an all-inclusive bladeless
            package.
          </p>
        </div>
      </section>

      {/* Accreditation / safety explainer */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Safety &amp; Quality Signals to Verify</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-2">Accreditation &amp; surgeon credentials</h3>
              <p className="text-sm text-gray-700 mb-0">
                Look for international hospital accreditation such as JCI (and GHA or ISO), plus NABH in
                India and Ministry of Health regulation in Turkey. Confirm the surgeon&apos;s
                refractive-surgery training and board certification, and how many of your exact procedure
                they perform. Accreditation must be renewed, so verify current status on the clinic&apos;s
                own site or the accrediting body — not a third-party listing.
              </p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-2">Laser platform &amp; candidacy</h3>
              <p className="text-sm text-gray-700 mb-0">
                Recognized, FDA-approved systems such as{' '}
                <a href="https://www.alcon.com" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Alcon WaveLight</a>{' '}
                and{' '}
                <a href="https://www.zeiss.com/meditec/en/products/refractive-lasers.html" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">ZEISS VisuMax</a>{' '}
                carry documentation and a known safety record. Ask which platform is quoted and the
                procedure type (standard vs custom LASIK, vs SMILE). Equally important: a thorough
                pre-op exam should confirm you are a candidate — corneal thickness and a stable prescription
                decide whether LASIK is appropriate at all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Decision framework */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Choose: A Simple Framework</h2>
        <div className="space-y-4">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-2">1. Add the all-in cost, not the headline</h4>
            <p className="text-sm text-gray-600 mb-0">
              Flights, hotel nights, a technology upgrade, and a possible enhancement can move the real
              total well past the quote. For a both-eyes case, Mexico&apos;s short trip can beat a cheaper
              India or Turkey quote once two long-haul flights are added.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-2">2. Decide how much travel and follow-up matter</h4>
            <p className="text-sm text-gray-600 mb-0">
              LASIK needs a pre-op exam, the procedure, and at least one follow-up, and a later enhancement
              is sometimes required. If staying close to home for follow-up matters, Mexico moves up. If
              lowest headline price drives the decision, India and Turkey lead — paired with stricter
              vetting.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-2">3. Weigh accredited infrastructure</h4>
            <p className="text-sm text-gray-600 mb-0">
              If JCI-accredited hospital infrastructure and English-speaking coordination give you
              confidence, Thailand and the larger Indian and Turkish hospital networks stand out. Match the
              market to how much formal accreditation you want behind your surgery.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-2">4. Vet the clinic, not the country</h4>
            <p className="text-sm text-gray-600 mb-0">
              Country averages are a starting point, not a verdict. Confirm the surgeon&apos;s refractive
              experience, the laser platform, the accreditation, the written quote, and how an enhancement
              or complication is handled once you fly home.
            </p>
          </div>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
          <p className="text-sm text-yellow-800 mb-0">
            <strong>Red flag:</strong> any clinic that quotes a LASIK price without naming the laser platform
            and procedure type, pressures a deposit before you have a written itemized quote, skips a proper
            pre-op candidacy exam, or cannot connect you with the treating surgeon. Legitimate clinics set
            realistic expectations and put the details in writing.
          </p>
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

      {/* CTA / money-page links */}
      <section className="mx-auto max-w-4xl px-4 py-8">
        <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Compare LASIK Destinations Side by Side</h3>
          <p className="text-gray-600 mb-6">
            Explore full destination profiles for the LASIK markets in this guide, then dig into the markets
            you are weighing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/medical-tourism" className="inline-block rounded-lg bg-cyan-600 px-6 py-3 font-medium text-white hover:bg-cyan-700">
              Medical Tourism Hub
            </Link>
            <Link href="/destinations/mexico" className="inline-block rounded-lg border-2 border-cyan-600 px-6 py-3 font-medium text-cyan-600 hover:bg-cyan-50">
              Mexico Destination Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/destinations/turkey" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇹🇷</span>
              <div>
                <div className="font-bold text-gray-900">Turkey Destination Guide</div>
                <div className="text-sm text-gray-600">Vetted clinics, all-inclusive packages &amp; logistics</div>
              </div>
            </div>
          </Link>

          <Link href="/destinations/india" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇮🇳</span>
              <div>
                <div className="font-bold text-gray-900">India Destination Guide</div>
                <div className="text-sm text-gray-600">JCI/NABH hospital networks &amp; the e-Medical Visa</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/india-medical-tourism-guide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇮🇳</span>
              <div>
                <div className="font-bold text-gray-900">India Medical Tourism Guide</div>
                <div className="text-sm text-gray-600">Costs, accredited hospitals &amp; how to vet a clinic</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/thailand-medical-tourism-guide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇹🇭</span>
              <div>
                <div className="font-bold text-gray-900">Thailand Medical Tourism Guide</div>
                <div className="text-sm text-gray-600">Bangkok&apos;s JCI hospitals, costs &amp; trip planning</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/turkey-vs-mexico-medical-tourism" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚖️</span>
              <div>
                <div className="font-bold text-gray-900">Turkey vs Mexico: Medical Tourism Compared</div>
                <div className="text-sm text-gray-600">The two biggest hubs, head to head</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/medical-travel-insurance-guide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🛡️</span>
              <div>
                <div className="font-bold text-gray-900">Medical Travel Insurance Guide</div>
                <div className="text-sm text-gray-600">What covers complications abroad — and what doesn&apos;t</div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Affiliate + Medical Disclaimer (shared component) */}
      <MedicalDisclaimer />

      {/* Sources */}
      <section className="mx-auto max-w-4xl px-4 pb-8">
        <div className="border-t border-gray-200 pt-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Sources</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• <a href="https://americanrefractivesurgerycouncil.org/cost-of-lasik/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">How Much Does LASIK Cost? — US national average $4,492 / ~$2,250 per eye (American Refractive Surgery Council)</a></li>
            <li>• <a href="https://medtraveltourism.com/lasik-eye-surgery-cost-in-usa-turkey-thailand-india/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">LASIK Eye Surgery Cost in USA, Turkey, Thailand &amp; India — per-eye and both-eyes ranges (Med Travel Tourism)</a></li>
            <li>• <a href="https://us-uk.bookimed.com/article/affordable-lasik-eye-surgery/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Affordable LASIK Eye Surgery: Cost by Country Compared — package inclusions &amp; JCI/FDA platforms (Bookimed)</a></li>
            <li>• <a href="https://www.medicaltourism.com/articles/what-are-the-best-countries-for-lasik-eye-surgery" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">What Are the Best Countries for LASIK Eye Surgery? — per-eye estimates &amp; accreditation context (Medical Tourism Association)</a></li>
          </ul>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-8">
        <EmailCaptureCard
          title="Comparing LASIK Abroad?"
          description="Get our vision-tourism checklist: how to read an itemized LASIK quote, the laser-platform and accreditation questions to ask, and how to budget the all-in cost."
          source="guide_lasik_cost_by_country"
        />
      </div>

      </SidebarShell>
      <Footer />
    </main>
  );
}
