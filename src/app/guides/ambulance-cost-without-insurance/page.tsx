import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'Ambulance Cost Without Insurance (2026): Ground & Air' },
  alternates: { canonical: 'https://vitalityscout.com/guides/ambulance-cost-without-insurance' },
  description: 'Ambulance cost without insurance in 2026 — ground ride charges, air ambulance bills, why the No Surprises Act skips ground EMS, and how to reduce the bill after.',
};

// Real PAA / long-tail questions, answered only from facts stated on this page.
// Every price answer ends with the verify-with-provider hedge. The visible FAQ
// block below mirrors this schema exactly — schema clarifies, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does an ambulance ride cost without insurance?',
    answer: 'Published data puts a ground ambulance ride at roughly $500-$3,500 all-in. FAIR Health charge data shows average charges around $940 for a basic life support (BLS) ride and about $1,277-$1,300 for advanced life support (ALS), with base rates commonly $400-$1,200 plus mileage fees of roughly $10-$30 per mile. Who runs the service matters enormously — the same trip can cost several times more from a private company than a municipal fire department. These are billed charges, not final numbers: hardship programs and negotiation regularly reduce them. In an emergency, call 911 first and sort the bill later.',
  },
  {
    question: 'How much does an air ambulance (medical helicopter) cost?',
    answer: 'Federal data is sobering: GAO analysis of 2017 charge data found median charges of $36,400 for helicopter transport and $40,600 for fixed-wing, and an HHS analysis put the average air-ambulance charge at $41,321. For insured patients, the No Surprises Act now bans balance billing for air ambulance — you owe only in-network cost sharing. Uninsured patients still face the billed charge, which makes the post-bill playbook (itemization, hardship programs, negotiation) essential. Air transport is dispatched based on medical need — it is never a decision patients make on price.',
  },
  {
    question: 'Does the No Surprises Act cover ambulance bills?',
    answer: 'Only partly — and this is the key fact. The No Surprises Act protects insured patients from surprise out-of-network bills for AIR ambulances, but GROUND ambulances were explicitly excluded from the law. About half of emergency ground rides for insured patients result in an out-of-network charge. Some help exists at the state level: roughly 22 states have passed their own ground-ambulance balance-billing protections, though these don\'t apply to self-funded employer plans. Fully uninsured patients owe the billed charge under either mode — reducible after the fact, but not federally capped.',
  },
  {
    question: 'Can I be charged if the ambulance comes but doesn\'t take me?',
    answer: 'Sometimes. Many EMS agencies charge a "treat-no-transport" or on-scene care fee — published estimates run about $150-$500 depending on the response level — while other municipalities bill only when they transport (Washington, DC, for example, doesn\'t charge if you\'re evaluated but decline transport). Policies are local, so if you receive a no-transport bill, ask the agency for its written policy and whether a hardship program applies. Never let a possible fee stop you from calling 911 when someone may be seriously ill or injured.',
  },
  {
    question: 'How do I fight or reduce an ambulance bill?',
    answer: 'The playbook: request an itemized bill (with codes and mileage) and check for errors; ask for the self-pay discount — published guidance reports 30-60% reductions off billed charges; apply for the agency\'s financial hardship program (many municipal EMS agencies formally reduce or forgive bills based on income, and hospital-based ambulance services may fall under the hospital\'s financial assistance policy); and negotiate a settlement or interest-free payment plan before the bill ages toward collections. If you\'re insured and it\'s an out-of-network ground bill, check whether your state has balance-billing protections that apply.',
  },
  {
    question: 'Are ambulance membership programs worth it?',
    answer: 'In areas served by participating agencies, they\'re cheap insurance against a specific risk. Published prices: AirMedCare Network memberships run $99/year per household ($79 for seniors), Life Flight Network starts at $50-$85/year, and municipal FireMed-style ground memberships run roughly $48-$75/year — covering out-of-pocket ambulance costs when that provider transports you. The catch is coverage geography: a membership only helps if the responding agency is in that network. Ambulance rides are also HSA/FSA-eligible expenses. Check which agencies actually serve your address before buying.',
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

export default function AmbulanceCostWithoutInsurance() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Ambulance Cost Without Insurance: Ground, Air, and How to Handle the Bill',
    description:
      'What an ambulance costs without insurance in 2026 — ground BLS/ALS charges and mileage, air ambulance bills, the No Surprises Act ground-ambulance gap, membership programs, and the post-bill playbook.',
    url: 'https://vitalityscout.com/guides/ambulance-cost-without-insurance',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/ambulance-cost-without-insurance#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: { '@type': 'MedicalProcedure', name: 'Emergency medical transport (ambulance)' },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-07-31',
    dateModified: '2026-07-31',
    citation: [
      { '@type': 'CreativeWork', name: 'Peterson-KFF Health System Tracker — ground ambulance rides and surprise billing', url: 'https://www.healthsystemtracker.org/brief/ground-ambulance-rides-and-potential-for-surprise-billing/' },
      { '@type': 'CreativeWork', name: 'GAO — air ambulance charge data and consumer complaints (GAO-19-292)', url: 'https://www.gao.gov/products/gao-19-292' },
      { '@type': 'CreativeWork', name: 'Commonwealth Fund — expanding the No Surprises Act to ground ambulances', url: 'https://www.commonwealthfund.org/blog/2024/expanding-no-surprises-act-protect-consumers-surprise-ambulance-bills' },
      { '@type': 'CreativeWork', name: 'CMS — Ground Ambulance and Patient Billing Advisory Committee', url: 'https://www.cms.gov/medicare/regulations-guidance/advisory-committees/advisory-committee-ground-ambulance-patient-billing-gapb' },
      { '@type': 'CreativeWork', name: '911.gov — when and how to call 911', url: 'https://www.911.gov/calling-911/frequently-asked-questions/' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/ambulance-cost-without-insurance#faq', url: 'https://vitalityscout.com/guides/ambulance-cost-without-insurance' };

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
              <span className="text-gray-900">Ambulance Cost Without Insurance</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Link href="/local-clinics" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
              &larr; Local Clinics &amp; Services Hub
            </Link>

            <div className="mb-4">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                Emergency Care
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Ambulance Cost Without Insurance: What Rides Cost and What To Do About the Bill
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              A ground ride averages around $1,000-$1,400 in billed charges. A helicopter can bill
              $36,000+. And the surprise-billing law everyone assumes covers this explicitly
              skipped ground ambulances. Here is how the bills work — and shrink.
            </p>

            {/* Emergency-first notice — this page never discourages calling 911. */}
            <div className="rounded-lg border-2 border-red-200 bg-red-50 p-5 mb-6">
              <p className="text-base text-red-900">
                <strong>In an emergency, call 911 — full stop.</strong> Chest pain, stroke signs,
                severe breathing trouble, heavy bleeding, loss of consciousness: these are 911
                calls, and dispatchers can coach you through CPR and first aid while help is on
                the way. No number on this page is a reason to hesitate. The bill comes later, and
                the bill has remedies.
              </p>
            </div>

            {/* Direct-answer lead: self-contained 40-80 word summary of the head query. */}
            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                Without insurance, a ground ambulance ride is commonly billed at{' '}
                <strong>$500-$3,500</strong> — average charges run ~<strong>$940 (BLS)</strong> to
                ~<strong>$1,300 (ALS)</strong> plus <strong>$10-$30/mile</strong>. Air ambulances
                bill a median of roughly <strong>$36,400-$40,600</strong>. The No Surprises Act
                protects insured patients on <strong>air</strong> transport but{' '}
                <strong>excludes ground ambulances</strong>. Billed charges are starting points —
                hardship programs and negotiation commonly reduce them. This is information, not
                medical advice.
              </p>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Last updated: July 2026 • Reviewed by the VitalityScout editorial team • 11 min read
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="mx-auto max-w-4xl px-4 py-12">
          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What We&apos;ll Cover</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#ground" className="text-blue-600 hover:underline">1. Ground ambulance: what rides bill</a></li>
              <li><a href="#air" className="text-blue-600 hover:underline">2. Air ambulance: the five-figure transport</a></li>
              <li><a href="#nsa-gap" className="text-blue-600 hover:underline">3. The No Surprises Act gap</a></li>
              <li><a href="#who-bills" className="text-blue-600 hover:underline">4. Who bills you (and the no-transport fee)</a></li>
              <li><a href="#playbook" className="text-blue-600 hover:underline">5. The post-bill playbook</a></li>
              <li><a href="#memberships" className="text-blue-600 hover:underline">6. Membership programs with published prices</a></li>
              <li><a href="#non-emergency" className="text-blue-600 hover:underline">7. Non-emergency transport is a different product</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              Ambulance bills are the least shoppable purchase in healthcare — you don&apos;t
              choose the provider, the price, or usually even whether to go. That is exactly why
              this guide is structured backwards from our others: almost all the leverage lives{' '}
              <em>after</em> the ride. One number frames everything: a GAO analysis found the
              median <em>cost</em> to providers of a ground transport was about $429, while billed
              charges routinely run two to eight times that. The gap between cost and charge is
              your negotiating room.
            </p>

            <h2 id="ground" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Ground Ambulance: What Rides Bill</h2>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Component</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Published billed-charge data (estimate)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">BLS ride (basic life support)</td>
                    <td className="border border-gray-300 px-4 py-3">~$940 average charge</td>
                    <td className="border border-gray-300 px-4 py-3">FAIR Health charge data</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">ALS ride (advanced life support)</td>
                    <td className="border border-gray-300 px-4 py-3">~$1,277-$1,300 average charge</td>
                    <td className="border border-gray-300 px-4 py-3">Paramedic-level care en route</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Base rate</td>
                    <td className="border border-gray-300 px-4 py-3">~$400 - $1,200</td>
                    <td className="border border-gray-300 px-4 py-3">Before mileage</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Mileage</td>
                    <td className="border border-gray-300 px-4 py-3">~$10 - $30 per mile</td>
                    <td className="border border-gray-300 px-4 py-3">Medicare pays ~$8.76/mile — a useful benchmark</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">All-in uninsured range</td>
                    <td className="border border-gray-300 px-4 py-3">~$500 - $3,500</td>
                    <td className="border border-gray-300 px-4 py-3">Same trip varies severalfold by provider type</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              <strong>These are charges, not settled prices.</strong> They&apos;re what appears on
              the first bill — the number before discounts, hardship programs, and negotiation.
              Treat the first bill the way you&apos;d treat a hospital chargemaster price: an
              opening position.
            </p>

            <h2 id="air" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Air Ambulance: The Five-Figure Transport</h2>

            <p className="text-gray-700 mb-4">
              Federal data on air transport is blunt: GAO&apos;s analysis of 2017 charge data found
              median charges of <strong>$36,400 for helicopter</strong> and{' '}
              <strong>$40,600 for fixed-wing</strong> transports, and an HHS analysis put the
              average charge at <strong>$41,321</strong> — with prices having roughly doubled over
              the early 2010s. Two things to hold at once: air transport is dispatched on medical
              need, never chosen by patients on price; and for <strong>insured</strong> patients,
              the No Surprises Act now bans air-ambulance balance billing entirely. For the
              uninsured, the billed charge stands — which makes the playbook below matter most at
              exactly the largest bills.
            </p>

            <h2 id="nsa-gap" className="text-2xl font-bold text-gray-900 mt-12 mb-6">The No Surprises Act Gap</h2>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Air ambulance: protected.</strong> Insured patients can&apos;t be balance-billed for out-of-network air transport — they owe in-network cost sharing only.</li>
              <li><strong>Ground ambulance: excluded.</strong> Congress left ground EMS out of the No Surprises Act (largely because so much of it is municipally run) and instead created a federal advisory committee to study the problem. Peterson-KFF data shows about <strong>half of emergency ground rides</strong> for privately insured patients produce an out-of-network charge, with a median potential surprise bill around $450.</li>
              <li><strong>States are filling the gap unevenly.</strong> Roughly <strong>22 states</strong> have passed ground-ambulance balance-billing protections (PIRG&apos;s count) — but state laws can&apos;t reach self-funded employer plans, which cover the majority of insured workers.</li>
              <li><strong>Uninsured patients sit outside all of it:</strong> no balance-billing framework applies when there&apos;s no insurer, so the levers are the provider&apos;s own discount, hardship, and settlement processes.</li>
            </ul>

            <h2 id="who-bills" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Who Bills You (and the No-Transport Fee)</h2>

            <p className="text-gray-700 mb-4">
              Fire departments and other government agencies run about <strong>62%</strong> of
              emergency ground rides; private companies run about 30% — and the difference shows up
              on the bill. Municipal rates are set publicly and often partially tax-subsidized,
              while private companies set their own charges; one published comparison shows the
              same 10-mile trip billing ~$800 from a city fire department vs ~$3,500 from a private
              provider. Also real: <strong>treat-no-transport fees</strong> of roughly{' '}
              <strong>$150-$500</strong> in some jurisdictions when crews respond and treat but
              don&apos;t transport (others, like Washington, DC, charge nothing in that scenario).
              It&apos;s a local policy question — ask for it in writing if you&apos;re billed.
            </p>

            <h2 id="playbook" className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Post-Bill Playbook</h2>

            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Request the itemized bill</strong> — response level (BLS/ALS), mileage, supplies — and check it against what happened.</li>
              <li><strong>Ask for the self-pay discount.</strong> Published guidance reports 30-60% reductions off billed charges for uninsured patients who ask.</li>
              <li><strong>Apply to the hardship program.</strong> Many municipal EMS agencies formally reduce or forgive bills based on income; hospital-based ambulance services may fall under the hospital&apos;s financial assistance policy (the same 501(r) machinery covered in our <Link href="/guides/er-visit-cost-without-insurance" className="text-blue-600 hover:underline">ER cost guide</Link>).</li>
              <li><strong>If insured with an out-of-network ground bill,</strong> check your state&apos;s balance-billing law and your plan documents before paying anything.</li>
              <li><strong>Negotiate a settlement or interest-free payment plan</strong> directly with the agency before the bill ages toward collections.</li>
              <li><strong>Pay what you owe with HSA/FSA funds</strong> — ambulance transport is a qualified medical expense under IRS Publication 502.</li>
            </ol>

            <h2 id="memberships" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Membership Programs With Published Prices</h2>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>AirMedCare Network (incl. Air Evac Lifeteam):</strong> $99/year per household ($79 for seniors 60+) — covers out-of-pocket costs when a network aircraft transports you.</li>
              <li><strong>Life Flight Network:</strong> from $50/year air-only, $85/year air + ground, in its service region.</li>
              <li><strong>Municipal &quot;FireMed&quot;-style ground memberships:</strong> published local examples run about $48-$75/year (Oregon and California fire districts), some with air add-ons around $150/year.</li>
              <li><strong>The catch is geography:</strong> a membership only helps when the responding provider is in that network. Worth buying in rural areas served by a specific network; check which agencies actually respond to your address first.</li>
            </ul>

            <h2 id="non-emergency" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Non-Emergency Transport Is a Different Product</h2>

            <p className="text-gray-700 mb-4">
              For <em>scheduled, medically stable</em> trips — dialysis, planned discharges,
              follow-up appointments — non-emergency medical transportation (NEMT) services exist
              at a fraction of ambulance rates, with wheelchair and stretcher-capable vehicles, and
              Medicaid covers NEMT for eligible members in many states. The line to respect: NEMT
              is for stable patients whose condition won&apos;t change en route,{' '}
              <strong>chosen in advance with a clinician&apos;s input</strong> — it is never the
              substitute in a possible emergency. When in doubt in the moment, that doubt itself is
              the answer: call 911.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Know Your Cash-Pay Options Before You Need Them</h3>
            <p className="mb-6 text-blue-100">
              Urgent care, ERs, imaging, and labs with transparent self-pay pricing — mapped in one directory.
            </p>
            <Link
              href="/local-clinics"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Browse Local Services
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
            <h3 className="font-semibold text-gray-800 mb-2">Medical, Legal &amp; Pricing Disclaimer</h3>
            <p className="text-sm text-gray-600">
              This guide is for general informational purposes only and is not medical, legal, or
              financial advice. In any situation that may be a medical emergency, call 911
              immediately — cost considerations should never delay emergency care or transport.
              Figures are based on published charge data, government reports, and provider websites
              and are presented as estimates; actual bills vary by agency, response level, mileage,
              and locality, and billed charges frequently differ from final negotiated amounts.
              State balance-billing laws and agency hardship policies change — verify current rules
              for your state and provider, and consider a patient advocate or attorney for large
              disputed bills. VitalityScout may earn a commission from some links, at no additional
              cost to you, and this never affects how we describe a provider.
            </p>
          </div>

          {/* Sources */}
          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources &amp; References</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Peterson-KFF Health System Tracker — ground ambulance out-of-network billing analysis</li>
              <li>• FAIR Health charge data (as reported by Mira and GoodRx) — BLS/ALS average charges</li>
              <li>• GAO — gao.gov (GAO-19-292 air ambulance charges; GAO-13-6 provider cost data)</li>
              <li>• HHS ASPE — air ambulance charge and payment analysis (2021 issue brief)</li>
              <li>• Health Affairs — surprise-billing study (median ground and air balance bills)</li>
              <li>• Commonwealth Fund / U.S. PIRG — state ground-ambulance protection laws and gaps</li>
              <li>• CMS — Ground Ambulance and Patient Billing Advisory Committee; consumer help pages</li>
              <li>• MedPAC — Medicare ambulance payment basics (mileage benchmark)</li>
              <li>• Life Flight Network / AirMedCare / municipal FireMed programs — published membership prices</li>
              <li>• 911.gov / American Heart Association — when to call 911</li>
              <li>• IRS Publication 502 — ambulance service HSA/FSA eligibility</li>
            </ul>
          </div>
        </article>

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our Medical Bill Survival Checklist"
            description="Itemization, hardship programs, and negotiation — the post-bill steps for ER and ambulance charges."
            source="guide_ambulance_cost_without_insurance"
          />
        </div>
      </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
