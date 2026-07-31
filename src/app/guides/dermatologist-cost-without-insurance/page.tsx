import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'Dermatologist Cost Without Insurance (2026): Cash Prices' },
  alternates: { canonical: 'https://vitalityscout.com/guides/dermatologist-cost-without-insurance' },
  description: 'Dermatologist cost without insurance in 2026 — in-person visit prices, $59-$95 online derm, skin check and biopsy costs, and free AAD cancer screenings.',
};

// Real PAA / long-tail questions, answered only from facts stated on this page.
// Every price answer ends with the verify-with-provider hedge. The visible FAQ
// block below mirrors this schema exactly — schema clarifies, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does a dermatologist visit cost without insurance?',
    answer: 'An in-person dermatology visit without insurance averages around $220 (Mira cites $221; Sesame\'s marketplace average is $155 for in-person consults), with first visits commonly $150-$300 and follow-ups $100-$200. Big-metro practices can run $300+. Online dermatology is much cheaper: Miiskin charges $59 for a first consult, MDLIVE and DermatologistOnCall run up to $95, and Sesame lists video derm visits from about $34. Procedures during the visit are billed on top. These are estimates — confirm the visit price and what it includes when booking.',
  },
  {
    question: 'How much is a full-body skin check without insurance?',
    answer: 'Published estimates put a full-body skin cancer screening at roughly $120-$300 at most offices, with comprehensive screenings at some practices reaching $150-$500. Importantly, free options exist: the American Academy of Dermatology\'s free skin cancer screening program has provided 2.9 million+ free checks by board-certified dermatologists since 1985 — you can search for a screening near you by ZIP code on aad.org. If a spot is concerning, don\'t wait for a free event; changing or irregular lesions warrant a prompt appointment.',
  },
  {
    question: 'How much does a skin biopsy cost without insurance?',
    answer: 'Expect two bills. The biopsy procedure itself runs roughly $150-$400 for a shave biopsy and $200-$500 for a punch biopsy (excisional biopsies more), and then the pathology lab bills separately for analyzing the tissue — typically $75-$300 per specimen. That second bill arrives later and surprises many cash payers. When a dermatologist recommends a biopsy, ask for the combined estimate: procedure fee plus expected pathology fee. These are estimates that vary by practice and lab.',
  },
  {
    question: 'Is online dermatology legit for acne and rashes?',
    answer: 'For many common conditions, yes — dermatology is unusually well-suited to photo-based care. Published cash prices: Miiskin $59 first consult ($30-$39 follow-ups), DermatologistOnCall $95 with a response typically within a day, MDLIVE up to $95, and subscription services like Curology from about $30/month for prescription custom formulas. Async services treat acne, rosacea, eczema, and similar conditions with prescriptions where appropriate. What photos can\'t do: palpate lesions, do full-body screenings, or biopsy — new, changing, or suspicious growths need an in-person visit.',
  },
  {
    question: 'What do wart, skin tag, or mole removal cost without insurance?',
    answer: 'Published estimates: wart cryotherapy around $150-$350 for a single wart (more for multiple or laser treatment); skin tag removal roughly $45-$150 per spot, often quoted around $150 per session; and mole removal about $150-$400 for a shave removal or $250-$600 for surgical excision, plus pathology if the tissue is tested. One caveat: removal of tags and moles for purely cosmetic reasons is also not HSA/FSA eligible and rarely covered by insurance either. Get a per-lesion quote up front.',
  },
  {
    question: 'Are dermatologist visits HSA or FSA eligible?',
    answer: 'Medical dermatology, yes: visits and treatment for conditions like acne, eczema, psoriasis, rashes, and skin cancer concerns are qualified medical expenses under IRS rules, payable with HSA or FSA funds — and some online services (like DermatologistOnCall) explicitly accept HSA/FSA cards. Cosmetic dermatology — Botox for wrinkles, elective laser rejuvenation, purely aesthetic removals — is not eligible, even when a dermatologist performs it. Keep itemized receipts showing the medical purpose.',
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

export default function DermatologistCostWithoutInsurance() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Dermatologist Cost Without Insurance: Cash-Pay Price Guide',
    description:
      'What a dermatologist costs without insurance in 2026 — in-person visit prices, online dermatology from $59, skin check, biopsy, and removal procedure costs, and free AAD skin cancer screenings.',
    url: 'https://vitalityscout.com/guides/dermatologist-cost-without-insurance',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/dermatologist-cost-without-insurance#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: { '@type': 'MedicalProcedure', name: 'Dermatology consultation' },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-07-31',
    dateModified: '2026-07-31',
    citation: [
      { '@type': 'CreativeWork', name: 'Mira — how much does a dermatologist visit cost', url: 'https://www.talktomira.com/post/how-much-does-a-dermatologist-visit-cost' },
      { '@type': 'CreativeWork', name: 'Sesame — how much does a dermatologist cost (marketplace averages)', url: 'https://sesamecare.com/blog/how-much-does-a-dermatologist-cost' },
      { '@type': 'CreativeWork', name: 'American Academy of Dermatology — free skin cancer screenings program', url: 'https://www.aad.org/public/public-health/skin-cancer-screenings' },
      { '@type': 'CreativeWork', name: 'DermatologistOnCall — online dermatology visit pricing and FAQs', url: 'https://dermatologistoncall.com/faqs' },
      { '@type': 'CreativeWork', name: 'Aflac — skin cancer screening cost without insurance', url: 'https://www.aflac.com/resources/cancer-insurance/skin-cancer-screening-cost-without-insurance.aspx' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/dermatologist-cost-without-insurance#faq', url: 'https://vitalityscout.com/guides/dermatologist-cost-without-insurance' };

  return (
    <>
      <Navigation />
      <SidebarShell>
      <main className="min-h-screen bg-white">
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
              <span className="text-gray-900">Dermatologist Cost Without Insurance</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Link href="/skincare" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
              &larr; Skincare &amp; Dermatology Hub
            </Link>

            <div className="mb-4">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                Dermatology
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Dermatologist Cost Without Insurance: Office, Online &amp; Free Routes
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              The office visit averages ~$220. The online consult is $59. The skin cancer screening
              can be free. Dermatology has quietly become the most price-tiered specialty in
              medicine — here is how to pick the right tier for your skin problem.
            </p>

            {/* Direct-answer lead: self-contained 40-80 word summary of the head query. */}
            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                Without insurance, an in-person dermatologist visit averages about{' '}
                <strong>$220</strong> (first visits ~<strong>$150-$300</strong>, follow-ups ~
                <strong>$100-$200</strong>). Online dermatology is far cheaper:{' '}
                <strong>Sesame from ~$34</strong>, <strong>Miiskin $59</strong>,{' '}
                <strong>MDLIVE and DermatologistOnCall up to $95</strong>. Full-body skin checks
                run ~<strong>$120-$300</strong> — and the AAD runs <strong>free</strong> screening
                events nationwide. Estimates to verify with the provider. This is information, not
                medical advice.
              </p>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Last updated: July 2026 • Reviewed by the VitalityScout editorial team • 10 min read
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="mx-auto max-w-4xl px-4 py-12">
          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What We&apos;ll Cover</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#visit" className="text-blue-600 hover:underline">1. What a derm visit costs cash</a></li>
              <li><a href="#online" className="text-blue-600 hover:underline">2. Online dermatology: $34-$95</a></li>
              <li><a href="#procedures" className="text-blue-600 hover:underline">3. Procedure prices: checks, biopsies, removals</a></li>
              <li><a href="#two-bills" className="text-blue-600 hover:underline">4. The biopsy two-bill trap</a></li>
              <li><a href="#free" className="text-blue-600 hover:underline">5. Free skin cancer screenings</a></li>
              <li><a href="#save" className="text-blue-600 hover:underline">6. How to pay the least</a></li>
              <li><a href="#considerations" className="text-blue-600 hover:underline">7. When to skip the cheap route</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              Dermatology splits cleanly into two markets. Conditions a photo can capture — acne,
              rashes, rosacea, eczema — have been commoditized by online derm services into
              $34-$95 consults. Anything requiring hands, a dermatoscope, or a scalpel still runs
              through the office at several times the price. Knowing which market your problem
              belongs to is most of the cost battle.
            </p>

            <h2 id="visit" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What a Dermatologist Visit Costs Cash</h2>

            <p className="text-gray-700 mb-4">
              Published figures converge around an average of <strong>$220</strong> for an
              in-person visit (Mira cites $221; Miiskin&apos;s comparison data says ~$220), with
              first visits commonly <strong>$150-$300</strong> and follow-ups{' '}
              <strong>$100-$200</strong>. Sesame&apos;s cash-pay marketplace — where doctors post
              prices upfront — averages <strong>$155 for in-person</strong> and{' '}
              <strong>$70 for video</strong> derm consults, a useful benchmark for what the
              competitive cash price looks like. Major metros run higher, and any procedure done
              during the visit bills on top of the consult fee.
            </p>

            <h2 id="online" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Online Dermatology: $34-$95</h2>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Service</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Published cash price (estimate)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Model</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Sesame</td>
                    <td className="border border-gray-300 px-4 py-3">Video derm from ~$34 (range $32-$97)</td>
                    <td className="border border-gray-300 px-4 py-3">Marketplace; live video; prices posted upfront</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Miiskin</td>
                    <td className="border border-gray-300 px-4 py-3">$59 first consult; $30-$39 follow-ups</td>
                    <td className="border border-gray-300 px-4 py-3">Async photos; board-certified derm replies in 24-48h; no subscription</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">DermatologistOnCall</td>
                    <td className="border border-gray-300 px-4 py-3">$95 per visit</td>
                    <td className="border border-gray-300 px-4 py-3">Async; plan typically &lt;24h; 30-day follow-up messaging; takes HSA/FSA</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">MDLIVE Dermatology</td>
                    <td className="border border-gray-300 px-4 py-3">Up to $95 (can be $0 via employer plans)</td>
                    <td className="border border-gray-300 px-4 py-3">Async photo review; response within 72h (usually 24)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Curology</td>
                    <td className="border border-gray-300 px-4 py-3">From ~$30/month</td>
                    <td className="border border-gray-300 px-4 py-3">Subscription; custom prescription formula shipped</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Hims / Hers skincare</td>
                    <td className="border border-gray-300 px-4 py-3">Rx skincare from ~$10-$45/month</td>
                    <td className="border border-gray-300 px-4 py-3">Async questionnaire + photos; subscription auto-renews</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              For a deeper comparison of these services, see our{' '}
              <Link href="/guides/online-dermatology-cost" className="text-blue-600 hover:underline">online dermatology cost guide</Link>{' '}
              and the <Link href="/skincare" className="text-blue-600 hover:underline">skincare hub</Link>.
              The subscription services work best for ongoing conditions like acne; the per-visit
              services fit one-off rashes and flare-ups.
            </p>

            <h2 id="procedures" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Procedure Prices: Checks, Biopsies, Removals</h2>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Procedure</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Typical cash price (estimate)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Full-body skin check</td>
                    <td className="border border-gray-300 px-4 py-3">~$120 - $300 (some practices to $500)</td>
                    <td className="border border-gray-300 px-4 py-3">Free AAD screening events exist — see below</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Shave biopsy</td>
                    <td className="border border-gray-300 px-4 py-3">~$150 - $400 + pathology</td>
                    <td className="border border-gray-300 px-4 py-3">Punch biopsy ~$200-$500; excisional higher</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Wart removal (cryotherapy)</td>
                    <td className="border border-gray-300 px-4 py-3">~$150 - $350 single wart</td>
                    <td className="border border-gray-300 px-4 py-3">Multiple warts / laser $500+; consult fee may be separate</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Skin tag removal</td>
                    <td className="border border-gray-300 px-4 py-3">~$45 - $150 per spot (~$150/session typical)</td>
                    <td className="border border-gray-300 px-4 py-3">Usually cosmetic — not HSA/FSA eligible</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Mole removal</td>
                    <td className="border border-gray-300 px-4 py-3">Shave ~$150-$400; excision ~$250-$600/session</td>
                    <td className="border border-gray-300 px-4 py-3">Plus pathology if tested; medical vs cosmetic matters</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="two-bills" className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Biopsy Two-Bill Trap</h2>

            <p className="text-gray-700 mb-4">
              When tissue is removed, two clinicians get paid: the dermatologist bills the
              procedure, and a <strong>pathologist bills the analysis separately</strong> —
              typically <strong>$75-$300 per specimen</strong>, arriving as its own bill weeks
              later. This is standard billing structure, not an error. The defense is one question
              at the moment a biopsy is recommended: &quot;What will the total be —{' '}
              <em>procedure plus pathology</em>?&quot; A practice that quotes only the procedure
              fee is quoting you half the bill.
            </p>

            <h2 id="free" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Free Skin Cancer Screenings</h2>

            <p className="text-gray-700 mb-4">
              The American Academy of Dermatology&apos;s free screening program — running since
              1985 — has provided <strong>2.9 million+ free skin cancer checks</strong> by
              board-certified dermatologists, detecting over 290,000 suspicious lesions including
              33,000+ suspected melanomas. You can search for a free screening within 50 miles by
              ZIP code at aad.org, and the AAD&apos;s mobile &quot;Destination Healthy Skin&quot;
              program runs free full-body exams in cities nationwide. Community health centers
              also offer dermatology on income-based sliding scales. One caution: screening events
              are for surveillance, not urgent evaluation — a changing, bleeding, or irregular
              lesion warrants a prompt booked appointment.
            </p>

            <h2 id="save" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How to Pay the Least for Skin Care</h2>

            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Start online for photo-friendly conditions.</strong> Acne, rashes, rosacea, eczema — a $59-$95 async consult with prescription beats a $220 office visit.</li>
              <li><strong>Use marketplace pricing for in-person needs.</strong> Sesame-style posted prices average $155 in-person vs the $220+ blind-booking average.</li>
              <li><strong>Take the free screening if you&apos;re due for surveillance</strong> — and a real appointment if a specific lesion worries you.</li>
              <li><strong>Get the procedure-plus-pathology total in writing</strong> before any biopsy or removal.</li>
              <li><strong>Know the cosmetic line.</strong> Cosmetic removals aren&apos;t HSA/FSA eligible; medical dermatology is. It affects both the price and how you pay.</li>
              <li><strong>Prescriptions are shoppable too.</strong> Generic derm staples (doxycycline, tretinoin) are often cheap with discount-card pricing — see our <Link href="/guides/tretinoin-online" className="text-blue-600 hover:underline">tretinoin online guide</Link>.</li>
            </ol>

            <h2 id="considerations" className="text-2xl font-bold text-gray-900 mt-12 mb-6">When to Skip the Cheap Route</h2>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>New, changing, or bleeding lesions</strong> need in-person evaluation — photos can&apos;t palpate, and only an in-person visit can biopsy.</li>
              <li><strong>Full-body screening can&apos;t be done by app.</strong> If you have significant sun-damage history or a family melanoma history, the in-person check is the product to buy.</li>
              <li><strong>Async has a scope.</strong> Reputable online services themselves refer out conditions that need hands-on care — treat that referral as the system working, not a failed purchase.</li>
              <li><strong>Prices move.</strong> Every figure here is an estimate that varies by practice, market, and current promotions — confirm before booking.</li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Compare Cash-Pay Skincare &amp; Dermatology</h3>
            <p className="mb-6 text-blue-100">
              Online derm services and prescription skincare with transparent pricing — compared side by side.
            </p>
            <Link
              href="/skincare"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Browse Skincare Options
            </Link>
          </div>

          {/* FAQ — visible block mirrors the FAQPage schema above exactly */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div>
              {FAQ_ITEMS.map((item) => (
                <FAQItem key={item.question} question={item.question} answer={item.answer} />
              ))}
            </div>
          </section>

          {/* Disclaimer */}
          <div className="mt-12 rounded-lg bg-gray-100 p-6">
            <h3 className="font-semibold text-gray-800 mb-2">Medical &amp; Pricing Disclaimer</h3>
            <p className="text-sm text-gray-600">
              This guide is for general informational purposes only and is not medical advice. We
              are not affiliated with the dermatology practices or online services named above.
              Pricing is based on publicly available data and provider websites and is presented as
              estimates that vary by practice, market, condition complexity, and current
              promotions — always verify the current price directly with the provider before
              booking. Skin lesions that are new, changing, bleeding, or irregular should be
              evaluated promptly and in person by a licensed clinician; online services and
              screening events are not substitutes for diagnostic evaluation of concerning growths.
              VitalityScout may earn a commission from some links, at no additional cost to you, and
              this never affects how we describe a provider.
            </p>
          </div>

          {/* Sources */}
          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources &amp; References</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Mira — talktomira.com (average in-person derm visit cost; skin tag pricing)</li>
              <li>• Sesame — sesamecare.com (marketplace averages for virtual and in-person derm)</li>
              <li>• Miiskin / DermatologistOnCall / MDLIVE — published online derm visit pricing</li>
              <li>• Curology / Hims &amp; Hers — published subscription skincare pricing</li>
              <li>• Aflac — skin cancer screening cost without insurance</li>
              <li>• American Academy of Dermatology — aad.org (free screening program and statistics)</li>
              <li>• FairVisit / published cost guides (biopsy and pathology fee ranges)</li>
              <li>• Dermatology Consultants billing FAQ (separate pathology billing structure)</li>
              <li>• FSA Store / HSA Store (medical vs cosmetic dermatology eligibility)</li>
            </ul>
          </div>
        </article>

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our Cash-Pay Skincare Playbook"
            description="When online derm beats the office visit, and the biopsy questions that prevent surprise bills."
            source="guide_dermatologist_cost_without_insurance"
          />
        </div>
      </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
