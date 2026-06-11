import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import type { Metadata } from 'next';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';

export const metadata: Metadata = {
  title: 'South Korea Plastic Surgery Cost (2026): Procedure Price Guide',
  description:
    'What plastic surgery actually costs in South Korea in 2026, procedure by procedure, vs US prices. Rhinoplasty $3,000-$9,000, double eyelid $1,500-$3,500 — typically 30-50% below US. Estimates to verify with each clinic.',
};

export default function KoreaPlasticSurgeryCostGuide() {
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'South Korea Plastic Surgery Cost (2026): Procedure Price Guide',
    headline: 'How Much Does Plastic Surgery Cost in South Korea?',
    description:
      'A grounded, procedure-by-procedure comparison of plastic surgery costs in South Korea vs the United States — what is included, why it is cheaper, how to choose an accredited clinic, and financing.',
    author: { '@type': 'Organization', name: 'VitalityScout' },
    publisher: { '@type': 'Organization', name: 'VitalityScout' },
    datePublished: '2026-06-11',
    dateModified: '2026-06-11',
    mainEntityOfPage: 'https://vitalityscout.com/guides/korea-plastic-surgery-cost',
    keywords: [
      'korea plastic surgery cost',
      'rhinoplasty south korea cost',
      'double eyelid surgery korea cost',
      'plastic surgery south korea price',
      'gangnam plastic surgery cost',
      'korea plastic surgery vs us cost',
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does plastic surgery cost in South Korea in 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It depends on the procedure. As 2026 estimates: double eyelid surgery typically runs $1,500-$3,500, rhinoplasty $3,000-$9,000, facial contouring (V-line) $8,000-$15,000, breast augmentation $5,000-$10,000, liposuction $2,500-$7,000, and a facelift $8,000-$18,000. These are generally 30-50% below comparable US prices. Note that South Korea abolished the cosmetic-surgery VAT refund for foreign patients on January 1, 2026, so out-of-pocket costs are roughly 10% higher than older guides imply. Every figure is an estimate to confirm directly with the clinic.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much can I save on plastic surgery in South Korea versus the US?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For most facial and body procedures, savings against US prices land around 30-50%. South Korea is a premium destination known for surgical volume and technique rather than the deep 60-80% discounts seen in some other medical-tourism markets. Once you add flights, lodging, and a 7-14 day stay, the all-in savings are smaller, so the trip makes the most financial sense for higher-cost procedures or when combining several at once.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is included in a Korean plastic surgery price?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A quoted surgery price typically covers the procedure, surgeon and facility fees, anesthesia, and basic post-op follow-up during your stay. Many clinics serving foreign patients also bundle interpretation, airport pickup, and accommodation help. It usually does not cover flights, hotels, a recovery house, revision surgery, or complications care. Always ask a clinic to itemize exactly what the number includes before comparing quotes.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is plastic surgery in South Korea safe?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'South Korea has a large, highly experienced cosmetic-surgery sector with strict licensing and high procedure volume. As with any surgery anywhere, complications are possible, and outcomes depend heavily on the specific surgeon and clinic. The strongest safety signals are formal accreditation (such as the Ministry of Health and Welfare KAHF program for hospitals serving foreign patients), Korean board-certified plastic surgeons, and written confirmation that your named surgeon personally performs your operation to avoid "ghost surgery." This guide compares prices, not outcomes, and does not endorse any clinic.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is plastic surgery cheaper in South Korea than in the US?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Lower facility, staffing, and malpractice-insurance costs, plus intense competition — Seoul\'s Gangnam district alone has hundreds of clinics, which compresses prices. High surgical volume also drives efficiency. A lower price does not imply equal or better quality or outcomes, so vetting the surgeon and clinic still matters most.',
        },
      },
    ],
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="mx-auto max-w-4xl px-4 py-3">
            <nav className="text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span className="mx-2">→</span>
              <Link href="/guides" className="hover:text-blue-600">Guides</Link>
              <span className="mx-2">→</span>
              <span className="text-gray-900">South Korea Plastic Surgery Cost</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-pink-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="text-4xl">💲</span>
              <span className="rounded-full bg-pink-100 px-3 py-1 text-sm font-medium text-pink-700">
                Cost Guide
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              South Korea Plastic Surgery Cost in 2026: Procedure-by-Procedure
            </h1>
            <p className="text-xl text-gray-600">
              What each procedure actually costs in Seoul (Gangnam) and beyond, side by side with US prices —
              what&apos;s included, why it&apos;s cheaper, and how to choose an accredited clinic safely.
            </p>
            <p className="mt-4 text-sm text-gray-500">Last updated: June 2026 • 10 min read</p>
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-12 prose prose-lg">

          {/* Direct answer (AEO) */}
          <div className="bg-pink-50 border-2 border-pink-200 rounded-lg p-6 mb-8 not-prose">
            <h2 className="text-lg font-bold text-pink-900 mt-0 mb-3">The short answer</h2>
            <p className="text-sm text-pink-900 mb-3">
              In <strong>South Korea</strong>, 2026 plastic surgery estimates run about{' '}
              <strong>$1,500-$3,500 for double eyelid surgery</strong>, <strong>$3,000-$9,000 for rhinoplasty</strong>,{' '}
              <strong>$8,000-$15,000 for facial contouring (V-line)</strong>, <strong>$5,000-$10,000 for breast augmentation</strong>,
              and <strong>$8,000-$18,000 for a facelift</strong> — generally <strong>30-50% below comparable US prices</strong>.
            </p>
            <p className="text-sm text-pink-900 mb-0">
              Every figure is an <strong>estimate that varies by clinic, surgeon, and complexity</strong> and should be confirmed
              directly with the provider. Korea abolished the foreign-patient cosmetic VAT refund on Jan 1, 2026, so budget
              roughly 10% more than older guides show. This page focuses on cost — for procedures, recovery, and the full
              Gangnam overview, see our{' '}
              <Link href="/guides/plastic-surgery-korea-guide" className="text-pink-700 underline font-medium">
                complete plastic surgery in Korea guide
              </Link>.
            </p>
          </div>

          <h2>Korea vs US: the procedure-by-procedure cost table</h2>
          <p>
            Below are typical 2026 cost ranges for the procedures international patients most often travel to South Korea for,
            shown against US prices for the same work. Korean figures reflect Seoul (Gangnam) clinics; premium Apgujeong and
            Cheongdam addresses can run 20-40% higher, while secondary cities such as Busan often sit lower. Treat every number
            as an estimate to verify, not a quote.
          </p>

          <div className="bg-white border-2 border-pink-200 rounded-lg p-6 my-8 not-prose">
            <h3 className="text-lg font-bold text-pink-900 mt-0 mb-4">Plastic surgery cost: US vs South Korea (2026 estimates)</h3>
            <div className="overflow-x-auto">
              <table className="text-sm w-full">
                <thead>
                  <tr className="border-b-2">
                    <th className="text-left py-2">Procedure</th>
                    <th className="text-left py-2">Typical US price</th>
                    <th className="text-left py-2 text-pink-700">South Korea price</th>
                    <th className="text-left py-2">Approx. savings</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Double eyelid surgery</td>
                    <td className="py-2 text-gray-500">$3,000-$6,000</td>
                    <td className="py-2 text-pink-600 font-semibold">$1,500-$3,500</td>
                    <td className="py-2">~40-50%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Rhinoplasty (nose)</td>
                    <td className="py-2 text-gray-500">$8,000-$15,000</td>
                    <td className="py-2 text-pink-600 font-semibold">$3,000-$9,000</td>
                    <td className="py-2">~40-55%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Facial contouring (V-line / jaw)</td>
                    <td className="py-2 text-gray-500">$15,000-$25,000</td>
                    <td className="py-2 text-pink-600 font-semibold">$8,000-$15,000</td>
                    <td className="py-2">~40%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Breast augmentation</td>
                    <td className="py-2 text-gray-500">$8,000-$15,000</td>
                    <td className="py-2 text-pink-600 font-semibold">$5,000-$10,000</td>
                    <td className="py-2">~30-40%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Liposuction (one area)</td>
                    <td className="py-2 text-gray-500">$6,000-$10,000</td>
                    <td className="py-2 text-pink-600 font-semibold">$2,500-$7,000</td>
                    <td className="py-2">~40-50%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Fat grafting (face)</td>
                    <td className="py-2 text-gray-500">$5,000-$10,000</td>
                    <td className="py-2 text-pink-600 font-semibold">$2,500-$5,000</td>
                    <td className="py-2">~50%</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Facelift</td>
                    <td className="py-2 text-gray-500">$15,000-$30,000</td>
                    <td className="py-2 text-pink-600 font-semibold">$8,000-$18,000</td>
                    <td className="py-2">~40-50%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3 mb-0">
              Sources: aggregated Korean clinic and medical-tourism pricing, 2026. Estimates only — confirm current pricing
              directly with each clinic. The foreign-patient cosmetic VAT refund was abolished Jan 1, 2026, raising out-of-pocket
              cost by roughly 10% versus pre-2026 figures.
            </p>
          </div>

          <h2>What&apos;s included — and what isn&apos;t</h2>
          <p>
            The number a clinic quotes and the number you actually spend are rarely the same. A typical Korean surgery price
            usually <strong>includes</strong> the procedure itself, surgeon and facility fees, anesthesia, and basic post-op
            follow-up during your stay. Clinics that market to foreign patients often also bundle interpretation, airport pickup,
            and accommodation assistance.
          </p>
          <p>
            It usually <strong>does not include</strong>:
          </p>
          <ul>
            <li><strong>Flights</strong> — roughly 12-14 hours from the US; budget for a round-trip long-haul fare.</li>
            <li><strong>Lodging</strong> — Gangnam hotels run about $60-$200/night for a typical 7-14 day stay.</li>
            <li><strong>Recovery house</strong> — specialized post-op guesthouses run roughly $50-$150/night.</li>
            <li><strong>Revision surgery</strong> — if you want a touch-up later, you generally return to Korea.</li>
            <li><strong>Complications care</strong> — confirm the clinic&apos;s policy before you book.</li>
          </ul>
          <p>
            Because inclusions differ so much between clinics, the only fair comparison is line-by-line. Ask each clinic to itemize
            exactly what its price covers before you treat one quote as cheaper than another.
          </p>

          <h2>Why plastic surgery is cheaper in South Korea</h2>
          <p>
            Korea is a <em>premium</em> destination — its draw is surgical volume and technique, not bargain-basement pricing — yet
            it still lands well below US figures for a few structural reasons:
          </p>
          <ul>
            <li><strong>Lower fixed costs</strong> — facility, staffing, and malpractice-insurance costs are lower than in the US.</li>
            <li><strong>Intense competition</strong> — Seoul&apos;s Gangnam district alone has hundreds of plastic surgery clinics, and that density compresses prices.</li>
            <li><strong>High volume drives efficiency</strong> — Korean surgeons perform a very high number of procedures, which lowers per-case cost.</li>
            <li><strong>Bundled medical-tourism systems</strong> — interpreters, coordinators, and recovery infrastructure already exist at scale.</li>
          </ul>
          <p>
            A lower price is not a quality signal. The same logic that makes Korea affordable also produces a wide quality range,
            so the surgeon and clinic you choose matter far more than the headline number.
          </p>

          <h2>How to choose a clinic safely (accreditation)</h2>
          <p>
            Cost should never be your only filter. The strongest formal signal for an international patient is the South Korean
            government&apos;s <strong>KAHF</strong> program — the Korean Accreditation Program for Hospitals Serving Foreign Patients,
            run by the Ministry of Health and Welfare, which evaluates roughly 120 items on how a clinic handles foreign patients.
            Only a small number of cosmetic clinics carry it. Beyond accreditation, look for:
          </p>
          <ol>
            <li><strong>Korean board-certified plastic surgeons</strong> — verify the specific surgeon, not just the clinic brand.</li>
            <li><strong>Written confirmation of who operates</strong> — ask, in writing, that your named surgeon personally performs your surgery to avoid &quot;ghost surgery.&quot;</li>
            <li><strong>Transparent, itemized pricing</strong> — clinics confident in their work quote clearly and don&apos;t pressure you to book on the spot.</li>
            <li><strong>Real before/after galleries and an in-person consultation</strong> — you should meet the actual surgeon before surgery.</li>
            <li><strong>Multilingual coordination</strong> — confirm interpreter availability for your actual surgery dates, not just inquiry chat.</li>
          </ol>
          <p>
            You can compare verified, accredited Seoul and Busan clinics on our{' '}
            <Link href="/plastic_surgery" className="text-blue-600 hover:underline font-medium">
              plastic surgery providers directory
            </Link>{' '}and read clinic profiles, accreditations, and what each is best for.
          </p>

          <h2>Travel and recovery: the all-in cost</h2>
          <p>
            The treatment price is only part of the budget. South Korea is a 12-14 hour flight from the US, and most procedures
            require a <strong>7-14 day stay</strong> — longer for facial-bone surgery. Seoul has purpose-built recovery
            infrastructure, including recovery houses (roughly $50-$150/night) that bundle wound care, meals, and clinic transport.
            When you total flights, lodging, meals, and recovery, the all-in savings are smaller than the table&apos;s headline
            percentages, which is why Korea makes the most financial sense for higher-cost procedures — or when you combine
            several in a single trip. For the full trip-planning breakdown, recovery timeline, and Gangnam logistics, see our{' '}
            <Link href="/guides/plastic-surgery-korea-guide" className="text-blue-600 hover:underline font-medium">
              complete Korea plastic surgery guide
            </Link>.
          </p>

          <h2>Financing and payment</h2>
          <p>
            Cosmetic plastic surgery is elective, so <strong>US insurance does not cover it</strong>, whether performed at home or
            abroad. HSA/FSA funds generally cannot be used for purely cosmetic procedures either; the rare exceptions are
            reconstructive cases with a documented medical need — check with your plan administrator before assuming eligibility.
            Practically, that leaves a few routes:
          </p>
          <ul>
            <li><strong>Cash, wire transfer, or card</strong> — most Korean clinics accept wire transfer or credit card, often with a 3-4% card fee, plus a deposit (commonly 10-30%) to hold the surgery date.</li>
            <li><strong>Medical-financing lenders</strong> — US patient-financing companies (the kind used for elective and dental work) can fund the procedure; compare APR and total cost before signing.</li>
            <li><strong>Combining procedures</strong> — doing two procedures in one trip can save on anesthesia and facility fees versus separate visits, though it lengthens recovery.</li>
          </ul>
          <p>
            Budget for the full picture — procedure, flights, lodging, recovery, and a cushion for a possible revision trip — rather
            than the surgery quote alone.
          </p>

          {/* FAQ */}
          <h2>Frequently asked questions</h2>
          <div className="space-y-4 not-prose my-6">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mt-0 mb-2">How much does plastic surgery cost in South Korea in 2026?</h3>
              <p className="text-sm text-gray-700 mb-0">
                By procedure (estimates): double eyelid $1,500-$3,500, rhinoplasty $3,000-$9,000, V-line contouring
                $8,000-$15,000, breast augmentation $5,000-$10,000, liposuction $2,500-$7,000, facelift $8,000-$18,000 —
                generally 30-50% below US prices. Budget ~10% more after the Jan 1, 2026 VAT-refund change. Confirm with each clinic.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mt-0 mb-2">How much can I save versus the US?</h3>
              <p className="text-sm text-gray-700 mb-0">
                Around 30-50% on the procedure for most facial and body work. Korea is a premium destination, not a deep-discount
                one, so after flights, lodging, and a 7-14 day stay the all-in savings are smaller — the trip pays off most on
                higher-cost procedures or when combining several.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mt-0 mb-2">What&apos;s included in the price?</h3>
              <p className="text-sm text-gray-700 mb-0">
                Typically the procedure, surgeon and facility fees, anesthesia, and post-op follow-up during your stay; many
                foreigner-focused clinics add interpretation, airport pickup, and lodging help. It excludes flights, hotels, a
                recovery house, revision surgery, and complications care. Ask for an itemized quote.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mt-0 mb-2">Is plastic surgery in South Korea safe?</h3>
              <p className="text-sm text-gray-700 mb-0">
                Korea has a large, experienced cosmetic sector with strict licensing, but outcomes depend on the specific surgeon
                and clinic. Look for KAHF accreditation, Korean board-certified surgeons, and written confirmation that your named
                surgeon personally operates. This guide compares prices, not outcomes, and endorses no clinic.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mt-0 mb-2">Why is it cheaper than the US?</h3>
              <p className="text-sm text-gray-700 mb-0">
                Lower facility, staffing, and malpractice costs, plus dense competition in Gangnam and very high surgical volume.
                A lower price doesn&apos;t imply equal or better quality — vet the surgeon and clinic first.
              </p>
            </div>
          </div>

          {/* Final Disclaimer */}
          <div className="bg-gray-100 border-2 border-gray-300 rounded-lg p-6 my-8 not-prose">
            <h4 className="text-gray-900 font-bold mb-3">Medical &amp; Pricing Disclaimer</h4>
            <p className="text-sm text-gray-700 mb-3">
              This guide is for <strong>educational purposes only</strong> and is not medical advice. Every price shown is an{' '}
              <strong>estimate that varies by clinic, surgeon, and complexity</strong> and must be confirmed directly with the
              provider. Cosmetic surgery carries risks including infection, scarring, asymmetry, and dissatisfaction with results.
            </p>
            <p className="text-sm text-gray-700 mb-0">
              We do not endorse, recommend, or guarantee the safety or results of any treatment, clinic, or surgeon. Verify all
              credentials and pricing directly, and consult a qualified physician before pursuing any procedure.
            </p>
          </div>

          {/* Related */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8 not-prose">
            <h4 className="font-bold text-gray-900 mb-4">Related Resources</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/guides/plastic-surgery-korea-guide" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-pink-400 transition-colors">
                <div className="font-medium text-gray-900 mb-1">Complete Korea Plastic Surgery Guide</div>
                <div className="text-sm text-gray-600">Procedures, top Gangnam clinics, recovery &amp; trip planning</div>
              </Link>
              <Link href="/destinations/south-korea" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-pink-400 transition-colors">
                <div className="font-medium text-gray-900 mb-1">South Korea Destination Guide</div>
                <div className="text-sm text-gray-600">Travel, visa, and medical-tourism logistics</div>
              </Link>
              <Link href="/plastic_surgery" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-pink-400 transition-colors">
                <div className="font-medium text-gray-900 mb-1">Plastic Surgery Providers</div>
                <div className="text-sm text-gray-600">Compare accredited Seoul &amp; Busan clinics</div>
              </Link>
              <Link href="/medical-tourism" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-pink-400 transition-colors">
                <div className="font-medium text-gray-900 mb-1">Medical Tourism Hub</div>
                <div className="text-sm text-gray-600">Destinations, procedures &amp; cost comparisons</div>
              </Link>
            </div>
          </div>

          {/* Sources */}
          <div className="border-t border-gray-200 pt-8 mt-12 not-prose">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Sources &amp; Further Reading</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• <a href="https://www.medicalkorea.or.kr/en/kahfAccreditedHospitals" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Medical Korea — KAHF Accredited Hospitals (Ministry of Health and Welfare)</a></li>
              <li>• <a href="https://english.visitkorea.or.kr/svc/contents/infoHtmlView.do?vcontsId=137726" target="_blank" rel="noopener" className="text-blue-600 hover:underline">VisitKorea — Korean Accreditation Program for Hospitals Serving Foreign Patients (KAHF)</a></li>
              <li>• <a href="https://koreaexperience.com/blog/korea-plastic-surgery-cost-guide-2026" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Korea Plastic Surgery Cost Guide 2026 (procedure price ranges)</a></li>
              <li>• <a href="https://www.medicaltourismco.com/cosmetic-surgery-in-seoul-korea/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Medical Tourism Co — Cosmetic Surgery in Seoul, Korea</a></li>
            </ul>
          </div>
        </article>

        {/* Shared YMYL disclaimer */}
        <MedicalDisclaimer />

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our Korea Plastic Surgery Cost Worksheet"
            description="A normalized checklist for comparing clinic quotes across Seoul and Busan — procedure, inclusions, accreditation, and total all-in cost with travel."
            source="guide_korea_plastic_surgery_cost"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
