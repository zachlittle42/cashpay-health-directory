import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'Heart Bypass Cost by Country: US vs India, Thailand, Mexico' },
  alternates: { canonical: 'https://vitalityscout.com/guides/heart-bypass-cost-by-country' },
  description:
    'Heart bypass (CABG) cost by country: India, Thailand & Mexico vs the US, what each package includes, JCI accreditation, savings, and how to choose.',
};

// Real conversational / People-Also-Ask questions, answered only from facts
// stated on this page. Every price answer ends with the verify-with-hospital
// hedge, consistent with the medical disclaimer. The visible FAQ block below
// mirrors this schema exactly — schema clarifies the page, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does heart bypass surgery cost abroad compared to the US?',
    answer:
      'Coronary artery bypass grafting (CABG) is commonly quoted at roughly $70,000-$200,000 self-pay in the US (national average around $120,000) versus an estimated $4,500-$10,000 in India, $15,000-$25,000 in Thailand, and $21,000-$25,000 in Mexico on published medical-tourism comparisons. India is consistently the lowest of the three, with savings frequently described as 80-90% versus US prices. These are estimates that vary by hospital, the number of grafts, on-pump vs off-pump technique, and complications — get a written, itemized quote from the hospital before you travel.',
  },
  {
    question: 'Which country is cheapest for heart bypass (CABG)?',
    answer:
      'On the comparisons we reviewed, India comes out lowest, with CABG estimates around $4,500-$10,000 at JCI-accredited hospital groups such as Apollo, Fortis, Medanta, and Narayana Health. Thailand ($15,000-$25,000) and Mexico ($21,000-$25,000) sit higher but still far below US self-pay pricing. Cheapest is not automatically best for a high-stakes cardiac procedure — the surgeon, the hospital cardiac program, accreditation, graft count, and how complications are handled all matter more here than on a routine procedure. Confirm exactly what each quote includes.',
  },
  {
    question: 'What does an all-inclusive heart bypass package abroad include?',
    answer:
      'Contents vary by hospital. A typical cardiac package generally bundles the surgeon and anesthesia fees, the operating theater, the ICU and ward stay, and standard post-op medication during admission. It usually does NOT include your international flights, hotel stay before or after admission, treatment of unplanned complications, extended ICU days beyond the package, or long-term cardiac rehab back home. Reported package ranges already assume a standard number of grafts; more grafts or off-pump versus on-pump technique can move the price. Ask the hospital for a written, itemized list of what is and is not included before you pay a deposit.',
  },
  {
    question: 'Is heart bypass surgery abroad safe?',
    answer:
      'Quality ranges widely by hospital, not just by country, so the standard advice is to use internationally accredited cardiac centers. India and Thailand each have dozens of Joint Commission International (JCI) accredited hospitals; Thailand’s Bumrungrad International, for example, has held JCI accreditation since 2002. Look for a high-volume cardiac program, a surgeon who performs your exact procedure regularly, named accreditation you can verify on the accrediting body’s site, and a clear written plan for managing complications and follow-up once you return home. This is information, not medical advice — discuss candidacy, urgency, and fitness to travel with a qualified cardiologist first.',
  },
  {
    question: 'How long do I need to stay abroad for heart bypass surgery?',
    answer:
      'Cardiac surgery is not a quick in-and-out trip. A typical CABG admission runs several days including ICU time, and most cardiac centers recommend staying in the destination country for roughly two to four weeks total so the surgical team can monitor early recovery and clear you as fit to fly before a long-haul flight. Air travel too soon after open-heart surgery carries added risk, so confirm the exact length-of-stay and fit-to-fly timeline with your surgeon. Bone healing of the sternum and overall recovery continue for weeks after you return home.',
  },
  {
    question: 'Will my US health insurance cover a heart bypass done abroad?',
    answer:
      'Most US plans are built around in-network domestic care and generally will not reimburse a planned elective procedure performed overseas, though specifics depend on your plan. That is why cash-pay pricing is the relevant comparison for most medical travelers. Separate medical-travel insurance that covers complications, emergency evacuation, and a possible re-operation abroad is worth considering for a procedure this serious. Confirm coverage and any pre-authorization rules with both your insurer and the hospital before you commit, and keep itemized records for any reimbursement attempt.',
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

export default function HeartBypassCostByCountry() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Heart Bypass Cost by Country: US vs India, Thailand, and Mexico (2026)',
    description:
      'A side-by-side cost comparison of heart bypass (CABG) surgery — estimated prices in India, Thailand, and Mexico versus the US, what each package includes, JCI accreditation, and how to choose a cardiac center abroad.',
    url: 'https://vitalityscout.com/guides/heart-bypass-cost-by-country',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/heart-bypass-cost-by-country#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'MedicalProcedure',
      name: 'Coronary artery bypass grafting (CABG / heart bypass surgery)',
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-25',
    dateModified: '2026-06-25',
    citation: [
      { '@type': 'CreativeWork', name: 'Heart Bypass Surgery Abroad — India, Mexico & other destinations (Medical Tourism Corporation)', url: 'https://www.medicaltourismco.com/heart-bypass-surgery-abroad/' },
      { '@type': 'CreativeWork', name: 'Cost of Heart Surgery: India vs Thailand vs Turkey 2026 (Karetrip)', url: 'https://karetrip.com/blogs/cost-of-heart-surgery-india-vs-thailand-vs-turkey-2026' },
      { '@type': 'CreativeWork', name: 'Coronary Artery Bypass Grafting in Thailand — cost & clinics 2026 (Bookimed)', url: 'https://us-uk.bookimed.com/clinics/country=thailand/procedure=coronary-artery-bypass-grafting/' },
      { '@type': 'CreativeWork', name: 'Open Heart Surgery in Mexico — cost & clinics 2026 (Bookimed)', url: 'https://us-uk.bookimed.com/clinics/country=mexico/procedure=open-heart-surgery/' },
      { '@type': 'CreativeWork', name: 'Heart Bypass Surgery (CABG) Cost 2026 — US self-pay vs insured (SurgeryCostGuide)', url: 'https://surgerycostguide.com/heart-bypass-cost/' },
      { '@type': 'CreativeWork', name: 'Assessment of Price Variation in Coronary Artery Bypass Surgery at US Hospitals (Journal of the American Heart Association)', url: 'https://www.ahajournals.org/doi/10.1161/JAHA.123.031982' },
      { '@type': 'CreativeWork', name: 'Narayana Health’s Path to JCI Enterprise-wide Accreditation (The Joint Commission)', url: 'https://www.jointcommission.org/en/about-us/recognizing-excellence/stories/narayana-health' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/heart-bypass-cost-by-country#faq', url: 'https://vitalityscout.com/guides/heart-bypass-cost-by-country' };

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
            <span className="text-4xl">❤️</span>
            <span className="rounded-full bg-cyan-100 px-3 py-1 text-sm font-medium text-cyan-700">
              Comparison Guide
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Heart Bypass Cost by Country: US vs India, Thailand &amp; Mexico
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            Three of the most-searched cardiac-surgery markets — India, Thailand, and Mexico — side by
            side against US prices for coronary artery bypass grafting (CABG). Estimated costs, what each
            package includes, JCI accreditation, and how to weigh price against the stakes of open-heart
            surgery.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-cyan-500 bg-cyan-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              Heart bypass (CABG) runs roughly <strong>$70,000-$200,000</strong> self-pay in the US
              versus an estimated <strong>$4,500-$10,000</strong> in India, <strong>$15,000-$25,000</strong>{' '}
              in Thailand, and <strong>$21,000-$25,000</strong> in Mexico on published comparisons —
              savings often described as 70-90%. India is the lowest of the three. For open-heart surgery,
              cheapest is not automatically best: weigh the cardiac program, the surgeon, JCI
              accreditation, and fit-to-fly recovery time. Verify every quote with the hospital. This is
              information, not medical advice.
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
            <strong>Heart bypass is major, time-sensitive surgery — this is not a routine elective trip.</strong>{' '}
            A low headline price means little until you know the hospital&apos;s cardiac volume, the
            surgeon, the accreditation, the number of grafts quoted, and exactly what the package covers
            if a complication arises. Urgent or unstable cardiac disease may not be safe to travel for at
            all. Discuss timing, candidacy, and fitness to travel with a qualified cardiologist before
            considering surgery abroad.
          </p>
          <p className="text-sm text-red-800">
            This guide is for informational purposes only and is not medical advice. It does not
            recommend any specific hospital, surgeon, or destination, and it makes no promise about any
            outcome. Prices are estimates that vary by case and must be confirmed in writing with the
            hospital.
          </p>
        </div>
      </section>

      {/* At a Glance */}
      <section className="mx-auto max-w-4xl px-4 py-6">
        <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6">
          <h2 className="text-lg font-bold text-cyan-900 mb-3">Heart Bypass Abroad at a Glance</h2>
          <ul className="text-sm text-gray-700 space-y-1 mb-0">
            <li>✓ <strong>70-90% savings</strong> vs US self-pay on most published comparisons (estimates)</li>
            <li>✓ <strong>Lowest pricing:</strong> India (~$4,500-$10,000 CABG estimate)</li>
            <li>✓ <strong>Premium hospitality:</strong> Thailand (Bumrungrad, Bangkok Hospital)</li>
            <li>✓ <strong>Closest to the US:</strong> Mexico (no long-haul flight from the southern US)</li>
            <li>✓ <strong>Accreditation to look for:</strong> JCI-accredited cardiac centers</li>
            <li>✓ <strong>Length of stay:</strong> typically ~2-4 weeks in-country until cleared as fit to fly</li>
            <li>✓ <strong>Decision driver:</strong> the cardiac program and surgeon, not the headline price</li>
          </ul>
        </div>
      </section>

      {/* Why people travel */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why CABG Drives So Much Cardiac Tourism</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Coronary artery bypass grafting is one of the largest single line items in US healthcare.
              Self-pay pricing commonly runs from roughly $70,000 to more than $200,000, with a national
              average frequently cited near $120,000 — and published research in the Journal of the
              American Heart Association found that the 90th-percentile hospital price for CABG is about
              2.9 times the 10th-percentile price, and that self-pay rates average roughly 2.6 times what
              Medicare pays for the identical procedure ($75,047 versus $28,398). Two patients can pay
              very different amounts for the same operation, and the uninsured face the steepest prices.
            </p>
            <p>
              That gap is what built an international cardiac-surgery industry. Established hospital groups
              in India, Thailand, and Mexico perform high volumes of bypass surgery using the same core
              techniques, often with US- or UK-trained surgeons, at a fraction of the US price. The
              trade-offs are real and they matter more than on a routine procedure: travel for a serious
              operation, a multi-week recovery before you are cleared to fly, and the logistics of
              managing any complication far from home. This guide compares the three markets US patients
              search for most, then gives you a way to decide between them.
            </p>
          </div>
        </div>
      </section>

      {/* Cost Comparison Table */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Heart Bypass (CABG): Cost by Country (Estimates)</h2>
        <p className="text-gray-600 mb-6 text-sm">
          Prices below are estimated package costs for a standard coronary artery bypass, compiled from
          public medical-tourism cost-comparison sources. They are estimates, not quotes, and assume a
          standard number of grafts.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Country</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-green-700">CABG (est.)</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">What&apos;s typically included</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Est. Savings vs US</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Accreditation note</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">United States (baseline)</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">$70,000 - $200,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Surgeon, hospital &amp; ICU stay; self-pay averages ~2.6x Medicare, ~2.9x range across hospitals</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">—</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">US hospital accreditation (Joint Commission)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">India</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$4,500 - $10,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Surgeon, ICU &amp; ward stay, standard meds during admission</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~85-90%</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">40+ JCI hospitals (Apollo, Fortis, Medanta, Narayana)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">Thailand</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$15,000 - $25,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Surgery, ICU stay, specialist care; premium hospitality</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~70-85%</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">60+ JCI hospitals (Bumrungrad, Bangkok Hospital)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">Mexico</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$21,000 - $25,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Surgeon, hospital &amp; ICU stay; no long-haul flight</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~65-80%</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">National accreditation + some JCI centers (Monterrey)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600 mt-4">
          Ranges vary by hospital, the number of grafts, on-pump vs off-pump technique, and whether
          complications arise. The US baseline reflects published self-pay pricing; JAHA research found
          self-pay rates average about 2.6x Medicare and the 90th-percentile hospital price is roughly
          2.9x the 10th-percentile price. Always request a written, itemized quote.
        </p>
      </section>

      {/* Per-market breakdown */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">The Three Markets, Market by Market</h2>
          <p className="text-gray-600 mb-8 text-sm">
            Each market trades price, travel, and hospital experience differently. Here is how they
            actually differ for a US cardiac patient.
          </p>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">India</h3>
                <span className="bg-cyan-100 text-cyan-700 text-xs px-2 py-1 rounded">Lowest pricing</span>
              </div>
              <p className="text-sm text-gray-600 mb-0">
                India posts the lowest CABG estimates in this comparison and runs some of the highest
                cardiac-surgery volumes in the world. Large JCI-accredited groups — Apollo, Fortis,
                Medanta, and Narayana Health — operate dedicated heart institutes, many staffed by US- or
                UK-trained surgeons, and routinely treat international patients. The trade-off is the
                longest flight of the three, which makes the multi-week, fit-to-fly recovery window and a
                clear complication plan especially important to confirm before you book. Vet the specific
                heart program and surgeon, not the country average.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Thailand</h3>
                <span className="bg-cyan-100 text-cyan-700 text-xs px-2 py-1 rounded">Premium hospitality</span>
              </div>
              <p className="text-sm text-gray-600 mb-0">
                Thailand sits in the middle on price but is known for hospital environments that some
                patients compare to five-star hotels. Bangkok&apos;s Bumrungrad International — JCI
                accredited since 2002 and repeatedly listed among the world&apos;s best hospitals — is the
                most recognized name, alongside Bangkok Hospital. Pricing is higher than India but well
                below US self-pay, and the country has 60+ JCI-accredited facilities. The draw is the
                combination of an established cardiac program and a service-heavy international-patient
                experience; the flight is still long-haul.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Mexico</h3>
                <span className="bg-cyan-100 text-cyan-700 text-xs px-2 py-1 rounded">Closest to US</span>
              </div>
              <p className="text-sm text-gray-600 mb-0">
                Mexico is the logistically easiest option for many US patients — no long-haul flight, and
                major cardiac programs sit in cities like Monterrey, Guadalajara, and Mexico City. Pricing
                overlaps with Thailand and stays well below US self-pay. Proximity matters more for
                cardiac surgery than for a routine procedure, because a shorter trip home and easier
                family travel can reduce the strain of recovery. Accreditation is mixed: many hospitals
                hold national accreditation and some carry JCI, so confirm the specific facility&apos;s
                status and cardiac volume before committing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">What a Cardiac Package Does — and Does Not — Cover</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="font-bold text-green-900 mt-0 mb-3">Commonly included</h3>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li>✓ Surgeon and anesthesia fees</li>
              <li>✓ The operating theater and equipment</li>
              <li>✓ ICU and ward stay for the standard admission</li>
              <li>✓ Standard post-op medication during admission</li>
              <li>✓ Pre-op cardiac workup and imaging (many packages)</li>
              <li>✓ International-patient coordination (many hospitals)</li>
            </ul>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="font-bold text-yellow-900 mt-0 mb-3">Often NOT included</h3>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li>✗ Your international flights</li>
              <li>✗ Hotel stay before and after admission</li>
              <li>✗ Treatment of unplanned complications</li>
              <li>✗ Extended ICU days beyond the package</li>
              <li>✗ Extra grafts or off-pump technique upgrades</li>
              <li>✗ Cardiac rehabilitation after you return home</li>
            </ul>
          </div>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
          <p className="text-sm text-yellow-800 mb-0">
            <strong>The single most useful question:</strong> ask for a written, itemized quote that
            states the number of grafts assumed, the on-pump or off-pump technique, the included ICU and
            ward days, and — critically — what happens to the price if you need extra ICU time or a
            return to theater. A &ldquo;$6,000 bypass&rdquo; that excludes complication care and assumes a
            single graft is not the same product as one that does not.
          </p>
        </div>
      </section>

      {/* Accreditation explainer */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Safety &amp; Quality Signals to Verify</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-2">Accreditation &amp; cardiac volume</h3>
              <p className="text-sm text-gray-700 mb-0">
                Look for{' '}
                <a href="https://www.jointcommissioninternational.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">
                  Joint Commission International (JCI)
                </a>{' '}
                accreditation and a dedicated, high-volume cardiac program rather than a general hospital
                that occasionally does bypass surgery. Accreditation must be renewed, so confirm current
                status on the hospital&apos;s own site or the accrediting body — not a third-party
                listing. Ask how many CABG procedures the unit performs each year.
              </p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-2">Surgeon, technique &amp; complication plan</h3>
              <p className="text-sm text-gray-700 mb-0">
                Confirm the named surgeon performs your exact operation regularly, ask whether the plan is
                on-pump or off-pump and how many grafts are expected, and get a clear written answer on
                how complications, a return to theater, and follow-up are handled — including who manages
                your care once you fly home. For open-heart surgery these answers matter more than the
                headline price.
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
            <h4 className="font-bold text-gray-900 mt-0 mb-2">1. Confirm it is safe to travel at all</h4>
            <p className="text-sm text-gray-600 mb-0">
              Urgent, unstable, or rapidly progressing cardiac disease may not be safe to delay or travel
              for. Before comparing destinations, ask your cardiologist whether elective travel for
              surgery is appropriate for your case and how time-sensitive the procedure is.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-2">2. Add the all-in cost, not the headline</h4>
            <p className="text-sm text-gray-600 mb-0">
              Flights for you and a companion, two to four weeks of lodging, extended-stay meals, and a
              realistic complication buffer can move the real total well past the quote. India&apos;s
              lowest-in-class price can narrow once a long-haul flight and a multi-week stay are added.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-2">3. Weigh proximity against price</h4>
            <p className="text-sm text-gray-600 mb-0">
              If lowest price drives the decision, India leads. If hospitality and an established
              international-patient program matter, Thailand moves up. If proximity, a shorter recovery
              trip home, and easier family travel matter most, Mexico wins.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-2">4. Vet the program, not the country</h4>
            <p className="text-sm text-gray-600 mb-0">
              Country averages are a starting point, not a verdict. Confirm the surgeon&apos;s CABG
              experience, the hospital&apos;s cardiac volume, current JCI accreditation, the written
              itemized quote, and the complication-and-follow-up plan — then decide.
            </p>
          </div>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
          <p className="text-sm text-yellow-800 mb-0">
            <strong>Red flag:</strong> any hospital that quotes a bypass price without naming the surgeon,
            the cardiac program&apos;s volume, or the number of grafts assumed, pressures a deposit before
            you have a written itemized quote, or cannot give you a clear plan for complications and
            follow-up. Legitimate cardiac centers set realistic expectations and put the details in
            writing.
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
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Compare Cardiac Destinations Side by Side</h3>
          <p className="text-gray-600 mb-6">
            Explore the cardiac-procedures hub and full destination profiles with vetted providers for the
            markets in this guide.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/cardiac" className="inline-block rounded-lg bg-cyan-600 px-6 py-3 font-medium text-white hover:bg-cyan-700">
              Cardiac Procedures Hub
            </Link>
            <Link href="/destinations/india" className="inline-block rounded-lg border-2 border-cyan-600 px-6 py-3 font-medium text-cyan-600 hover:bg-cyan-50">
              India Destination Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/destinations/india" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇮🇳</span>
              <div>
                <div className="font-bold text-gray-900">India Destination Guide</div>
                <div className="text-sm text-gray-600">Cardiac &amp; other procedures, vetted hospitals, logistics</div>
              </div>
            </div>
          </Link>

          <Link href="/destinations/thailand" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇹🇭</span>
              <div>
                <div className="font-bold text-gray-900">Thailand Destination Guide</div>
                <div className="text-sm text-gray-600">JCI hospitals, cardiac care, trip logistics</div>
              </div>
            </div>
          </Link>

          <Link href="/destinations/mexico" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇲🇽</span>
              <div>
                <div className="font-bold text-gray-900">Mexico Destination Guide</div>
                <div className="text-sm text-gray-600">Closest-to-US care, providers, border logistics</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/india-medical-tourism-guide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇮🇳</span>
              <div>
                <div className="font-bold text-gray-900">India Medical Tourism Guide</div>
                <div className="text-sm text-gray-600">Cardiac, orthopedic &amp; oncology costs, JCI/NABH hospitals</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/thailand-medical-tourism-guide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇹🇭</span>
              <div>
                <div className="font-bold text-gray-900">Thailand Medical Tourism Guide</div>
                <div className="text-sm text-gray-600">Bangkok JCI hospitals, costs, and trip planning</div>
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
            <li>• <a href="https://www.medicaltourismco.com/heart-bypass-surgery-abroad/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Heart Bypass Surgery Abroad — India, Mexico &amp; other destinations (Medical Tourism Corporation)</a></li>
            <li>• <a href="https://karetrip.com/blogs/cost-of-heart-surgery-india-vs-thailand-vs-turkey-2026" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Cost of Heart Surgery: India vs Thailand vs Turkey 2026 (Karetrip)</a></li>
            <li>• <a href="https://us-uk.bookimed.com/clinics/country=thailand/procedure=coronary-artery-bypass-grafting/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Coronary Artery Bypass Grafting in Thailand — cost &amp; clinics 2026 (Bookimed)</a></li>
            <li>• <a href="https://us-uk.bookimed.com/clinics/country=mexico/procedure=open-heart-surgery/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Open Heart Surgery in Mexico — cost &amp; clinics 2026 (Bookimed)</a></li>
            <li>• <a href="https://surgerycostguide.com/heart-bypass-cost/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Heart Bypass Surgery (CABG) Cost 2026 — US self-pay vs insured (SurgeryCostGuide)</a></li>
            <li>• <a href="https://www.ahajournals.org/doi/10.1161/JAHA.123.031982" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Assessment of Price Variation in Coronary Artery Bypass Surgery at US Hospitals (Journal of the American Heart Association)</a></li>
            <li>• <a href="https://www.jointcommission.org/en/about-us/recognizing-excellence/stories/narayana-health" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Narayana Health&apos;s Path to JCI Enterprise-wide Accreditation (The Joint Commission)</a></li>
          </ul>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-8">
        <EmailCaptureCard
          title="Comparing Heart Bypass Surgery Abroad?"
          description="Get our cardiac-tourism checklist: how to read an itemized CABG quote, the surgeon, accreditation, and complication-plan questions to ask, and how to budget the all-in cost."
          source="guide_heart_bypass_cost_by_country"
        />
      </div>

      </SidebarShell>
      <Footer />
    </main>
  );
}
