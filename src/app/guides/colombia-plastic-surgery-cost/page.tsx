import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import type { Metadata } from 'next';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';

export const metadata: Metadata = {
  title: 'Colombia Plastic Surgery Cost 2026: BBL, Lipo & Breast vs US',
  description:
    'BBL, liposuction, breast augmentation & tummy tuck prices in Colombia vs the US — save 40-70% in Medellín, Bogotá & Cali. Estimates to verify with each clinic.',
};

export default function ColombiaPlasticSurgeryCostGuide() {
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Colombia Plastic Surgery Cost (2026): BBL, Lipo & Breast Prices',
    headline: 'How Much Does Plastic Surgery Cost in Colombia in 2026?',
    description:
      'A grounded comparison of plastic surgery costs in Colombia (Medellín, Bogotá, Cali, Cartagena) versus the United States — BBL, liposuction, breast augmentation, and tummy tuck — with what is included, why it is cheaper, and how to choose an accredited surgeon safely.',
    author: { '@type': 'Organization', name: 'VitalityScout' },
    publisher: { '@type': 'Organization', name: 'VitalityScout' },
    datePublished: '2026-06-11',
    dateModified: '2026-06-11',
    mainEntityOfPage: 'https://vitalityscout.com/guides/colombia-plastic-surgery-cost',
    keywords: [
      'colombia plastic surgery cost',
      'bbl colombia cost',
      'liposuction colombia cost',
      'breast augmentation colombia cost',
      'plastic surgery medellin cost',
      'tummy tuck colombia cost',
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does plastic surgery cost in Colombia in 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'In Colombia, a Brazilian Butt Lift (BBL) typically runs roughly $3,500-$7,000, liposuction about $2,500-$8,000, breast augmentation roughly $4,000-$6,500, and a tummy tuck about $4,500-$7,500 — generally 40-70% below US prices for comparable procedures. Prices in Medellín and Cali run about 10-20% under Bogotá. All figures are estimates that vary by surgeon, technique, and how many areas are treated, and should be confirmed directly with each clinic.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is plastic surgery in Colombia safe?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It can be, when you use a surgeon who is board-certified by the Colombian Society of Plastic Surgery (SCCP), verified in the national RETHUS medical registry, and operates in an accredited facility — ideally one with JCI or ICONTEC accreditation. Colombia has world-class, internationally recognized plastic surgeons, but the market also includes unlicensed operators and back-room clinics, so verifying credentials is essential. No surgery is risk-free, and a lower price never guarantees a safe outcome.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much can I save on plastic surgery in Colombia versus the US?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most patients save roughly 40-70% versus US prices for the same procedure. For example, a Lipo 360 + BBL that runs about $12,000-$20,000 all-in in the US commonly lands around $6,000-$9,000 in Colombia. Even after flights, lodging, and a 10-14 night recovery stay, the all-in total is usually well below the US surgeon fee alone. Savings vary by procedure, city, and surgeon.',
        },
      },
      {
        '@type': 'Question',
        name: "What's included in a Colombia plastic surgery package?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A typical all-inclusive package covers the surgeon and anesthesiologist fees, the operating-room and clinic facility, pre-operative labs and exams, post-operative supplies like compression garments, and the first few lymphatic-drainage massages. Flights, hotel, meals, and extended post-operative care are usually NOT included. Always get a written, itemized quote so you know exactly what is and is not covered.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does insurance cover plastic surgery in Colombia?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Elective cosmetic procedures are not covered by US health insurance whether performed in the US or abroad, and US insurers do not reimburse care delivered overseas. These are cash-pay procedures. Many Colombian clinics accept credit cards or offer payment plans, and HSA/FSA funds generally cannot be used for purely cosmetic surgery. Budget to pay out of pocket.',
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
              <span className="text-gray-900">Colombia Plastic Surgery Cost</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-emerald-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="text-4xl">💲</span>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
                Cost Guide
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Colombia Plastic Surgery Cost in 2026: What You&apos;ll Actually Pay
            </h1>
            <p className="text-xl text-gray-600">
              BBL, liposuction, breast augmentation, and tummy tuck prices in Medellín, Bogotá, Cali,
              and Cartagena — vs the US, with what&apos;s included, why it&apos;s cheaper, and how to
              choose an accredited surgeon safely.
            </p>
            <p className="mt-4 text-sm text-gray-500">Last updated: June 2026 • 11 min read</p>
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-12 prose prose-lg">

          {/* Direct answer (AEO) */}
          <div className="bg-emerald-50 border-2 border-emerald-200 rounded-lg p-6 mb-8 not-prose">
            <h2 className="text-lg font-bold text-emerald-900 mt-0 mb-3">The short answer</h2>
            <p className="text-sm text-emerald-900 mb-3">
              In <strong>Colombia</strong>, a <strong>Brazilian Butt Lift (BBL)</strong> typically runs
              roughly <strong>$3,500-$7,000</strong>, <strong>liposuction</strong> about{' '}
              <strong>$2,500-$8,000</strong>, <strong>breast augmentation</strong> roughly{' '}
              <strong>$4,000-$6,500</strong>, and a <strong>tummy tuck</strong> about{' '}
              <strong>$4,500-$7,500</strong> — generally <strong>40-70% below US prices</strong> for
              comparable procedures. Medellín and Cali run about 10-20% under Bogotá.
            </p>
            <p className="text-sm text-emerald-900 mb-0">
              Every figure here is an <strong>estimate that varies by surgeon, technique, and how many
              areas are treated</strong>, and should be confirmed directly with each clinic. Cosmetic
              surgery is cash-pay and is not covered by US insurance.
            </p>
          </div>

          {/* Safety notice */}
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 mb-8 not-prose">
            <h3 className="text-lg font-bold text-red-900 mt-0 mb-3">Important Safety Notice</h3>
            <p className="text-sm text-red-800 mb-3">
              <strong>Price is not a quality signal, and surgery carries real risk.</strong> Colombia is home
              to world-class, internationally recognized plastic surgeons — but the market also includes
              unlicensed operators and unaccredited back-room clinics. The single most important step is to
              confirm your surgeon is <strong>board-certified by the Colombian Society of Plastic Surgery
              (SCCP)</strong>, listed in the national <strong>RETHUS</strong> registry, and operating in an
              accredited facility.
            </p>
            <p className="text-sm text-red-800 mb-0">
              This guide is educational only. It compares <em>prices</em>, not outcomes, and does not endorse
              or guarantee any procedure, surgeon, or clinic. Consult a qualified physician before pursuing
              any surgery.
            </p>
          </div>

          <h2>What plastic surgery actually costs in Colombia</h2>
          <p>
            Colombia has become one of the leading destinations for cosmetic surgery in the Americas, drawing
            patients from the US, Canada, and Europe to Medellín, Bogotá, Cali, and Cartagena. The draw is
            straightforward: comparable procedures performed by board-certified surgeons commonly cost{' '}
            <strong>40-70% less</strong> than in the United States. Here is how the most-searched procedures
            line up against typical US pricing.
          </p>

          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 my-8 not-prose">
            <h3 className="text-lg font-bold text-gray-900 mt-0 mb-4">US vs Colombia cost comparison (estimates)</h3>
            <div className="overflow-x-auto">
              <table className="text-sm w-full">
                <thead>
                  <tr className="border-b-2">
                    <th className="text-left py-2">Procedure</th>
                    <th className="text-left py-2">Typical US price</th>
                    <th className="text-left py-2">Typical Colombia price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Brazilian Butt Lift (BBL)</td>
                    <td className="py-2">$8,000-$15,000</td>
                    <td className="py-2">$3,500-$7,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Liposuction (1-2 areas)</td>
                    <td className="py-2">$4,000-$8,000+</td>
                    <td className="py-2">$2,500-$5,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Lipo 360 / VASER body contouring</td>
                    <td className="py-2">$8,500-$15,000</td>
                    <td className="py-2">$5,000-$8,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Breast augmentation (implants)</td>
                    <td className="py-2">$5,100-$12,500</td>
                    <td className="py-2">$4,000-$6,500</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Tummy tuck (abdominoplasty)</td>
                    <td className="py-2">$8,000-$14,800</td>
                    <td className="py-2">$4,500-$7,500</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Lipo 360 + BBL (combined)</td>
                    <td className="py-2">$12,000-$20,000</td>
                    <td className="py-2">$6,000-$9,000</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Mommy makeover (combined)</td>
                    <td className="py-2">$15,000-$22,000</td>
                    <td className="py-2">$7,000-$12,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3 mb-0">
              US figures aggregated from ASPS average surgeon-fee data plus typical all-in market pricing;
              Colombia figures aggregated from 2025-2026 medical-tourism pricing reports. Estimates only —
              prices vary by surgeon, technique, number of areas, and city, and must be confirmed with each clinic.
            </p>
          </div>

          <p>
            One important caveat before you compare a $12,000 US BBL to a $6,000 Colombia package: a lower
            price reflects lower local costs, not a different procedure or a guaranteed result. The right way
            to read this table is &quot;what a credentialed surgeon in each market typically charges,&quot; not
            &quot;cheaper is the same.&quot; What you actually pay depends as much on the surgeon you choose as
            on the country.
          </p>

          <h2>What&apos;s included — and what isn&apos;t</h2>
          <p>
            Most reputable Colombian clinics quote an <strong>all-inclusive surgical package</strong>. When the
            package is structured well, it typically covers:
          </p>
          <ul>
            <li><strong>Surgeon and anesthesiologist fees</strong></li>
            <li><strong>Operating room and clinic facility</strong> charges</li>
            <li><strong>Pre-operative labs and exams</strong></li>
            <li><strong>Post-operative supplies</strong> — compression garments, foams, and dressings</li>
            <li><strong>Initial post-op care</strong> — the first few lymphatic-drainage massages and follow-up checks</li>
          </ul>
          <p>
            What is almost never included: <strong>flights, hotel, meals, local transport, and extended
            post-operative care</strong> once you fly home. Some premium clinics add concierge service and
            on-site recovery suites; budget clinics may not. The single best habit is to insist on a{' '}
            <strong>written, itemized quote</strong> so a &quot;$4,500 BBL&quot; doesn&apos;t turn into $6,500
            once garments, labs, and massages are added on.
          </p>

          <h2>Why plastic surgery is cheaper in Colombia</h2>
          <p>
            The savings are structural, not a discount on quality:
          </p>
          <ul>
            <li><strong>Lower labor and facility costs</strong> — surgeon, nursing, and operating-room costs are a fraction of US levels.</li>
            <li><strong>Lower malpractice and overhead</strong> — the cost of running a practice is far lower than in the US insurance-driven system.</li>
            <li><strong>A deep, competitive surgeon market</strong> — Colombia trains a large number of plastic surgeons, and cities like Cali and Medellín are body-contouring hubs, which keeps prices competitive.</li>
            <li><strong>Favorable exchange rate</strong> — US dollars stretch further against the Colombian peso.</li>
          </ul>
          <p>
            None of that changes the procedure itself. A board-certified SCCP surgeon in Medellín uses the same
            implants, the same VASER and liposculpture technology, and the same surgical standards you would
            expect at home — the difference is the cost base around the operation, not the operation.
          </p>

          <h2>How to choose a clinic safely</h2>
          <p>
            This is the part that matters more than price. In a market with both elite surgeons and unlicensed
            operators, your safety comes down to verification. Before you book anywhere:
          </p>
          <ol>
            <li><strong>Confirm SCCP board certification.</strong> The Sociedad Colombiana de Cirugía Plástica (SCCP) is the credential to insist on. Membership means the surgeon completed accredited plastic-surgery training.</li>
            <li><strong>Verify the RETHUS registry.</strong> Every licensed Colombian physician is listed in the national RETHUS medical registry — confirm your surgeon appears there.</li>
            <li><strong>Check the facility.</strong> Ask whether surgery happens in an accredited surgical facility. JCI accreditation (held by a small number of Colombian hospitals and clinics) and ICONTEC accreditation are strong signals. Avoid any clinic that operates out of an unaccredited space.</li>
            <li><strong>Look for international credentials.</strong> Membership in ASPS, ASAPS, ISAPS, or board certification by the American Board of Plastic Surgery is an additional, meaningful signal — a few Colombia-based surgeons hold US training or dual certification.</li>
            <li><strong>Be wary of guarantees.</strong> Any clinic that promises a specific result, quotes a price far below the market, or pressures you to book quickly is a red flag.</li>
          </ol>
          <p>
            For verified, accredited options across Medellín, Bogotá, Cali, Cartagena, and the coffee region,
            browse our{' '}
            <Link href="/plastic_surgery" className="text-blue-600 hover:underline font-medium">
              plastic surgery directory
            </Link>{' '}
            and the{' '}
            <Link href="/destinations/colombia" className="text-blue-600 hover:underline font-medium">
              Colombia destination guide
            </Link>.
          </p>

          <h2>Travel, recovery &amp; the all-in cost</h2>
          <p>
            The quoted surgical price is not the total you pay. For a realistic budget, add the trip:
          </p>
          <ul>
            <li><strong>Flights:</strong> roughly $250-$700 round trip from major US cities (4-5 hours from Miami; Bogotá and Medellín have direct flights).</li>
            <li><strong>Lodging:</strong> $60-$200/night for a typical 10-14 night recovery stay — many body procedures require staying in-country until you&apos;re cleared to fly.</li>
            <li><strong>Recovery time:</strong> body procedures (BBL, lipo, tummy tuck) generally need <strong>2 weeks before flying</strong>, with massages and a post-op check before you leave.</li>
            <li><strong>Altitude:</strong> Bogotá sits at ~8,600 ft and Medellín at ~5,000 ft; sea-level Cartagena and lower-altitude Cali are gentler for early recovery. Acclimate before surgery.</li>
            <li><strong>Aftercare at home:</strong> plan for follow-up massages and check-ins once you&apos;re back — clarify the remote-follow-up plan before you travel.</li>
          </ul>
          <p>
            Even with the full trip added, the all-in total for most patients still lands well below the US
            surgeon fee alone — which is what drives the demand. But the buffer should go toward a credentialed
            surgeon and a comfortable recovery, not toward shaving the quote.
          </p>

          <h2>Financing &amp; payment</h2>
          <p>
            Cosmetic surgery is <strong>cash-pay everywhere</strong> — US insurance does not cover elective
            procedures whether they&apos;re done in Miami or Medellín, and insurers do not reimburse care
            delivered abroad. HSA/FSA funds generally cannot be used for purely cosmetic surgery either. That
            said, you have options:
          </p>
          <ul>
            <li><strong>Clinic payment plans:</strong> many international-patient clinics in Colombia accept credit cards and some offer installment plans — ask up front.</li>
            <li><strong>Medical-financing lenders:</strong> US patients sometimes use medical-credit products (e.g. CareCredit) or a personal loan to spread the cost; compare the interest rate against simply saving for the procedure.</li>
            <li><strong>Deposit vs balance:</strong> clarify how much is due to reserve the date and how much is due on arrival, and in what currency.</li>
          </ul>
          <p>
            Whatever the method, get the full, itemized cost in writing before you commit a deposit.
          </p>

          <p>
            If you&apos;re weighing destinations, our{' '}
            <Link href="/guides/bbl-surgery-mexico" className="text-blue-600 hover:underline font-medium">
              BBL surgery in Mexico guide
            </Link>{' '}
            covers the other top Latin-American option, and the{' '}
            <Link href="/destinations/colombia" className="text-blue-600 hover:underline font-medium">
              Colombia destination guide
            </Link>{' '}
            breaks down each city, safety, and logistics in more detail.
          </p>

          {/* FAQ */}
          <h2>Frequently asked questions</h2>
          <div className="space-y-4 not-prose my-6">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mt-0 mb-2">How much does plastic surgery cost in Colombia in 2026?</h3>
              <p className="text-sm text-gray-700 mb-0">
                BBL roughly $3,500-$7,000, liposuction about $2,500-$8,000, breast augmentation roughly
                $4,000-$6,500, tummy tuck about $4,500-$7,500 — generally 40-70% below US prices. Medellín and
                Cali run about 10-20% under Bogotá. All estimates — confirm with each clinic.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mt-0 mb-2">Is plastic surgery in Colombia safe?</h3>
              <p className="text-sm text-gray-700 mb-0">
                It can be, with a surgeon who is SCCP board-certified, verified in the RETHUS registry, and
                operating in an accredited (ideally JCI or ICONTEC) facility. Colombia has world-class
                surgeons, but the market also includes unlicensed operators — verifying credentials is
                essential, and no surgery is risk-free.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mt-0 mb-2">How much can I save versus the US?</h3>
              <p className="text-sm text-gray-700 mb-0">
                Most patients save roughly 40-70%. A Lipo 360 + BBL that runs $12,000-$20,000 all-in in the US
                commonly lands around $6,000-$9,000 in Colombia. Even after flights and a 10-14 night stay, the
                all-in total is usually well below the US surgeon fee alone.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mt-0 mb-2">What&apos;s included in a Colombia package?</h3>
              <p className="text-sm text-gray-700 mb-0">
                Typically surgeon and anesthesiologist fees, the facility, pre-op labs, post-op supplies like
                compression garments, and the first few lymphatic massages. Flights, hotel, meals, and extended
                aftercare are usually not included. Always get a written, itemized quote.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mt-0 mb-2">Does insurance cover it?</h3>
              <p className="text-sm text-gray-700 mb-0">
                No — elective cosmetic surgery is not covered by US insurance whether done in the US or abroad,
                and HSA/FSA funds generally can&apos;t be used for purely cosmetic procedures. Many clinics
                accept credit cards or offer payment plans. Budget to pay out of pocket.
              </p>
            </div>
          </div>

          {/* Final Disclaimer */}
          <div className="bg-gray-100 border-2 border-gray-300 rounded-lg p-6 my-8 not-prose">
            <h4 className="text-gray-900 font-bold mb-3">Medical &amp; Pricing Disclaimer</h4>
            <p className="text-sm text-gray-700 mb-3">
              This guide is for <strong>educational purposes only</strong> and is not medical advice. Every
              price shown is an <strong>estimate that varies by surgeon, technique, and the number of areas
              treated</strong> and must be confirmed directly with the provider. Plastic surgery carries real
              risk; candidacy and expected results should be discussed with a qualified, board-certified surgeon.
            </p>
            <p className="text-sm text-gray-700 mb-0">
              We do not endorse, recommend, or guarantee the efficacy or safety of any procedure, surgeon, or
              clinic. Always consult a physician before pursuing any surgery.
            </p>
          </div>

          {/* Related */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8 not-prose">
            <h4 className="font-bold text-gray-900 mb-4">Related Resources</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/plastic_surgery" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-emerald-400 transition-colors">
                <div className="font-medium text-gray-900 mb-1">Plastic Surgery Directory</div>
                <div className="text-sm text-gray-600">Accredited surgeons by city and procedure</div>
              </Link>
              <Link href="/destinations/colombia" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-emerald-400 transition-colors">
                <div className="font-medium text-gray-900 mb-1">Colombia Destination Guide</div>
                <div className="text-sm text-gray-600">Cities, safety, travel &amp; logistics</div>
              </Link>
              <Link href="/guides/bbl-surgery-mexico" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-emerald-400 transition-colors">
                <div className="font-medium text-gray-900 mb-1">BBL Surgery in Mexico</div>
                <div className="text-sm text-gray-600">The other top Latin-American option, compared</div>
              </Link>
              <Link href="/medical-tourism" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-emerald-400 transition-colors">
                <div className="font-medium text-gray-900 mb-1">Medical Tourism Hub</div>
                <div className="text-sm text-gray-600">Procedures, destinations &amp; how it works</div>
              </Link>
            </div>
          </div>

          {/* Sources */}
          <div className="border-t border-gray-200 pt-8 mt-12 not-prose">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Sources &amp; Further Reading</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• <a href="https://www.plasticsurgery.org/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">American Society of Plastic Surgeons (ASPS) — procedure cost data</a></li>
              <li>• <a href="https://www.jointcommissioninternational.org/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Joint Commission International (JCI) — accredited-facility lookup</a></li>
              <li>• <a href="https://www.cirugiaplastica.org.co/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Sociedad Colombiana de Cirugía Plástica (SCCP) — surgeon verification</a></li>
              <li>• <a href="https://www.isaps.org/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">International Society of Aesthetic Plastic Surgery (ISAPS)</a></li>
            </ul>
          </div>
        </article>

        {/* Shared YMYL disclaimer + affiliate disclosure */}
        <MedicalDisclaimer />

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our Colombia Plastic Surgery Cost & Vetting Worksheet"
            description="A checklist for comparing quotes across Medellín, Bogotá, Cali, and Cartagena — what's included, SCCP/RETHUS verification, and your true all-in cost."
            source="guide_colombia_plastic_surgery_cost"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
