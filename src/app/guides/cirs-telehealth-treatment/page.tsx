import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'CIRS Telehealth Treatment: Affordable Online Mold Plans' },
  alternates: { canonical: 'https://vitalityscout.com/guides/cirs-telehealth-treatment' },
  description: 'Affordable CIRS telehealth in 2026: under-$300/mo plans with lab panels, teleconsults, and mailed prescriptions, plus how to choose a legit program.',
};

// Real GSC long-tail questions, answered only from facts stated on this page.
// Every price answer ends with the verify-with-provider hedge. The visible FAQ
// block below mirrors this schema exactly — schema clarifies, never invents.
const FAQ_ITEMS = [
  {
    question:
      'What does an affordable telehealth CIRS treatment plan with lab panels, teleconsults, and home-delivered prescriptions include?',
    answer:
      'A legitimate online CIRS plan usually bundles four things: a diagnostic lab panel (markers like C4a, TGF-β1, MMP-9, MSH, plus HLA-DR genetics and a visual contrast sensitivity test), video teleconsults with a clinician who knows the biotoxin-illness literature, a sequenced prescription protocol (a binder such as cholestyramine or colesevelam, often followed by EDTA nasal spray and later VIP), and medications shipped to your door. As a public example, MoldCo lists a $79/month protocol subscription plus medication cost, with most patients paying roughly $107–$313 a month all-in. Prices are estimates that change — confirm current pricing and exactly what is included with the provider. This is information, not medical advice.',
  },
  {
    question:
      'How do I choose an affordable CIRS telemedicine program under $300/month that includes lab testing and prescriptions?',
    answer:
      'Check four things before you pay. First, confirm a licensed clinician practicing in your state runs the visits (CIRS care is contested, so credentials matter more, not less). Second, confirm the diagnostic labs are real Shoemaker-protocol markers run through an accredited lab — not a single vague "mold panel." Third, confirm the prescriptions are sequenced and dispensed by a licensed pharmacy, with removal from ongoing mold exposure addressed first. Fourth, confirm the all-in monthly price (subscription + labs + meds) actually lands under $300 and is stated up front. A published example, MoldCo, advertises roughly $150–$300/month with a $56 starter health panel; verify current numbers and that your state is served before assuming. Any program promising a guaranteed cure is a red flag.',
  },
  {
    question: 'How much does online CIRS treatment cost compared with seeing a mold specialist in person?',
    answer:
      'Telehealth is usually the cheaper entry point. In-person CIRS-literate specialists frequently charge $300–$500 or more for a single initial consult and often operate out-of-network, giving you a superbill to submit yourself. Online programs spread cost into a monthly subscription — for example MoldCo lists $79/month plus medications, with most patients paying about $107–$313 a month, a $56 starter lab panel, and a $129 provider video visit. These are estimates that vary by plan, state, and which medications you need; confirm directly with the provider.',
  },
  {
    question: 'Is CIRS a recognized diagnosis, and can telehealth actually treat it?',
    answer:
      'CIRS (Chronic Inflammatory Response Syndrome) is a contested, limited-evidence diagnosis. A 2024 peer-reviewed review found the evidence base is concentrated in one researcher’s work — of 13 treatment articles identified, 11 described the Shoemaker Protocol — and it is not universally accepted in mainstream guidelines. Telehealth programs offer the Shoemaker-style protocol (labs, binders, EDTA, VIP) remotely, but no legitimate program can promise a cure, and the same review notes many patients need ongoing treatment indefinitely. Decisions belong with a licensed clinician, not a website.',
  },
  {
    question: 'Will insurance cover CIRS lab testing and medications?',
    answer:
      'Coverage is inconsistent. Much of the specialized CIRS testing is not covered by conventional insurance, and many specialists do not bill insurance directly. Per Dr. Shoemaker’s own resources, some insurers will cover cholestyramine or Welchol and certain labs, and Medicare Part B may cover mycotoxin-related diagnostic tests when a physician documents medical necessity. Lab testing and prescriptions are also typically HSA/FSA eligible. Confirm coverage with your plan and your provider before starting — do not assume.',
  },
  {
    question: 'In which states is online CIRS care available?',
    answer:
      'It depends on the program and on state telehealth and lab-licensing rules. As a public example, MoldCo states telehealth treatment is available in 42 states plus Washington, DC, and lab testing in 46 states, with a few states excluded (for testing: Hawaii, New Jersey, New York, and Rhode Island, due to state lab regulations). Availability changes — check that your specific state is served before you sign up, because a program licensed elsewhere cannot legally treat you.',
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

export default function CirsTelehealthTreatment() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'CIRS Telehealth Treatment: Affordable Online Mold-Illness Programs',
    description:
      'How affordable telehealth CIRS programs work — what an under-$300/month plan should include (lab panels, teleconsults, home-delivered prescriptions), typical costs, and how to choose a legitimate program.',
    url: 'https://vitalityscout.com/guides/cirs-telehealth-treatment',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/cirs-telehealth-treatment#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'MedicalCondition',
      name: 'Chronic Inflammatory Response Syndrome (CIRS)',
      alternateName: 'Mold illness / biotoxin illness',
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-24',
    dateModified: '2026-06-24',
    citation: [
      { '@type': 'CreativeWork', name: 'MoldCo — Virtual care, lab testing, and treatment for mold exposure (pricing and program)', url: 'https://www.moldco.com/' },
      { '@type': 'CreativeWork', name: 'MoldCo — States we serve (telehealth and lab-testing availability)', url: 'https://www.moldco.com/blog/availability' },
      { '@type': 'CreativeWork', name: 'MoldCo — CIRS treatment guide (protocol phases and lab-panel pricing)', url: 'https://www.moldco.com/blog/cirs-treatment-guide' },
      { '@type': 'CreativeWork', name: 'Chronic inflammatory response syndrome: a review of the evidence of clinical efficacy of treatment (PMC, 2024)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11623837/' },
      { '@type': 'CreativeWork', name: 'Fierce Healthcare — MoldCo lands $8M seed funding to scale virtual clinic for mold-related illnesses', url: 'https://www.fiercehealthcare.com/health-tech/startup-moldco-lands-8m-seed-funding-scale-virtual-clinic-mold-related-illnesses' },
      { '@type': 'CreativeWork', name: 'ScienceInsights — Where to get tested for mold toxicity: costs and options', url: 'https://scienceinsights.org/where-to-get-tested-for-mold-toxicity-costs-options/' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/cirs-telehealth-treatment#faq', url: 'https://vitalityscout.com/guides/cirs-telehealth-treatment' };

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
              <span className="text-gray-900">CIRS Telehealth Treatment</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Link href="/telehealth" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
              &larr; Telehealth &amp; Labs Hub
            </Link>

            <div className="mb-4">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                Telehealth
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              CIRS Telehealth Treatment: The Affordable Online Mold-Illness Plan Guide
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              Specialist CIRS care has historically meant $300&ndash;$500 in-person consults and
              thousands out of pocket. Online programs now package labs, teleconsults, and
              home-delivered prescriptions into a monthly subscription. Here is what a real
              under-$300/month plan includes &mdash; and how to spot a legitimate one.
            </p>

            {/* Direct-answer lead: self-contained 40-80 word summary of the head query. */}
            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                An affordable telehealth CIRS plan bundles a <strong>diagnostic lab panel</strong>{' '}
                (C4a, TGF-&beta;1, MMP-9, MSH, HLA-DR, VCS), <strong>video teleconsults</strong> with
                a biotoxin-literate clinician, a <strong>sequenced prescription protocol</strong>{' '}
                (binder, then EDTA nasal spray, then VIP), and <strong>medications mailed to your
                door</strong>. A public example, MoldCo, lists about <strong>$150&ndash;$300/month</strong>{' '}
                all-in with a <strong>$56 starter panel</strong>. CIRS is a contested diagnosis with
                limited evidence; no legitimate program promises a cure. Prices are estimates &mdash;
                verify with the provider. This is information, not medical advice.
              </p>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Last updated: June 2026 • 12 min read
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="mx-auto max-w-4xl px-4 py-12">
          {/* Honesty box up front — this is the YMYL framing the page leads with */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Read this first: CIRS is a contested diagnosis</h3>
            <p className="text-gray-700 text-sm">
              Chronic Inflammatory Response Syndrome (CIRS), also called mold or biotoxin illness, is{' '}
              <strong>not universally accepted in mainstream medical guidelines</strong>. A 2024
              peer-reviewed review of treatment efficacy found the evidence base is concentrated in
              one researcher&apos;s work &mdash; of 13 treatment articles identified, 11 described the
              Shoemaker Protocol &mdash; and that many patients need ongoing treatment indefinitely.
              This guide explains how telehealth programs <em>offer</em> CIRS care and how to vet one
              on cost and legitimacy. It does not endorse CIRS as a settled diagnosis, and nothing
              here is a substitute for evaluation by a licensed clinician.
            </p>
          </div>

          {/* What a plan should include — answers head query #1 */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">What an under-$300/month plan should include</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-blue-600 mb-2">The four core components</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• Diagnostic lab panel (real CIRS markers)</li>
                  <li>• Video teleconsults with a licensed clinician</li>
                  <li>• Sequenced prescription protocol</li>
                  <li>• Medications shipped to your home</li>
                  <li>• Symptom tracking + care-team messaging</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-indigo-600 mb-2">Public price example (MoldCo)</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• ~$150&ndash;$300/mo all-in (estimate)</li>
                  <li>• $79/mo protocol + cost of meds</li>
                  <li>• $56 starter health lab panel</li>
                  <li>• $129 provider video visit</li>
                  <li>• Meds delivered by ~Day 7</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              Pricing per MoldCo&apos;s own site; estimates that change. Verify current numbers and
              that your state is served before signing up.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What We&apos;ll Cover</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#what-is" className="text-blue-600 hover:underline">1. What CIRS is (and why it&apos;s contested)</a></li>
              <li><a href="#how-online-works" className="text-blue-600 hover:underline">2. How online CIRS programs work</a></li>
              <li><a href="#labs" className="text-blue-600 hover:underline">3. The lab panel: what real CIRS markers look like</a></li>
              <li><a href="#protocol" className="text-blue-600 hover:underline">4. The prescription protocol &amp; home delivery</a></li>
              <li><a href="#cost" className="text-blue-600 hover:underline">5. What it costs vs. in-person care</a></li>
              <li><a href="#choose" className="text-blue-600 hover:underline">6. How to choose a legitimate program under $300/mo</a></li>
              <li><a href="#redflags" className="text-blue-600 hover:underline">7. Red flags to avoid</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              If you suspect mold or biotoxin illness, the practical problem is access. Clinicians who
              work in this space are scarce, often out-of-network, and expensive up front. Telehealth
              programs have changed the entry math by spreading labs, consults, and prescriptions
              across a monthly subscription. The trade-off: you have to vet legitimacy carefully,
              because CIRS sits at the contested edge of medicine. Here is the honest breakdown.
            </p>

            <h2 id="what-is" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What CIRS Is (And Why It&apos;s Contested)</h2>

            <p className="text-gray-700 mb-4">
              CIRS is described in the literature as an acquired condition of innate immune
              dysregulation that can follow exposure to biotoxins &mdash; most commonly mold and
              related toxins from water-damaged buildings. Proponents report it affecting multiple
              organ systems at once in a genetically susceptible subset of people. The diagnostic and
              treatment framework was developed largely by Ritchie Shoemaker, MD.
            </p>

            <p className="text-gray-700 mb-4">
              The honest caveat: this is a <strong>limited-evidence, debated diagnosis</strong>. A
              2024 peer-reviewed review of CIRS treatment efficacy found that of 13 treatment articles
              identified, 11 described the Shoemaker Protocol, and that peer-reviewed work outside
              Shoemaker&apos;s own has been minimal &mdash; though newer molecular research has begun
              building the evidence base. The same review notes treatments often provide symptomatic
              relief rather than cure, and that patients frequently need to continue them
              indefinitely. The specialized markers used (C4a, TGF-&beta;1, MMP-9, HLA-DR) are
              discussed mostly within CIRS-specific and functional-medicine literature, not universal
              mainstream guidelines.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Why this matters for choosing a program:</strong> because CIRS is contested,
                the legitimacy bar is <em>higher</em>, not lower. A real program is run by licensed
                clinicians, uses accredited labs, and is upfront that it cannot promise a cure. Treat
                any cure guarantee as a disqualifier.
              </p>
            </div>

            <h2 id="how-online-works" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How Online CIRS Programs Work</h2>

            <p className="text-gray-700 mb-4">
              The newer virtual clinics compress what used to take months of specialist-hunting into a
              structured remote flow. MoldCo &mdash; which raised an $8M seed round in September 2025
              (co-led by Cantos and Collaborative Fund), launched in 2023, and licenses
              Shoemaker-protocol-based care &mdash; describes a four-step timeline on its own site:
            </p>

            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Day 1 &mdash; Intake:</strong> you complete a symptom and history questionnaire online</li>
              <li><strong>Day 2 &mdash; Provider review:</strong> a clinician reviews your intake</li>
              <li><strong>Day 3 &mdash; Plan approval:</strong> your protocol and prescriptions are set</li>
              <li><strong>Day 7 &mdash; Medication delivery:</strong> prescriptions arrive at your door</li>
            </ol>

            <p className="text-gray-700 mb-4">
              Ongoing, a program of this type bundles unlimited care-team messaging, monthly provider
              check-ins, symptom tracking, and the sequenced prescription protocol. The point of the
              telehealth model is removing the geography barrier: you do not need a CIRS-literate
              doctor in your city &mdash; only one licensed to practice in your state.
            </p>

            <h2 id="labs" className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Lab Panel: What Real CIRS Markers Look Like</h2>

            <p className="text-gray-700 mb-4">
              A legitimate CIRS workup is not a single vague &quot;mold panel.&quot; The
              Shoemaker-style diagnostic set runs a specific group of inflammatory, hormonal, and
              functional markers. Knowing these names is the fastest way to tell a real program from a
              thin one.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Marker / test</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">What it is</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">CIRS-framework pattern</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">C4a</td>
                    <td className="border border-gray-300 px-4 py-3">Complement component 4a</td>
                    <td className="border border-gray-300 px-4 py-3">Reported elevated</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">TGF-&beta;1</td>
                    <td className="border border-gray-300 px-4 py-3">Transforming growth factor beta-1</td>
                    <td className="border border-gray-300 px-4 py-3">Reported elevated</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">MMP-9</td>
                    <td className="border border-gray-300 px-4 py-3">Matrix metalloproteinase-9</td>
                    <td className="border border-gray-300 px-4 py-3">Reported elevated</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">MSH</td>
                    <td className="border border-gray-300 px-4 py-3">Melanocyte-stimulating hormone</td>
                    <td className="border border-gray-300 px-4 py-3">Reported reduced/suppressed</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">HLA-DR</td>
                    <td className="border border-gray-300 px-4 py-3">Immune-genetics haplotype testing</td>
                    <td className="border border-gray-300 px-4 py-3">Used to flag susceptibility</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">VCS</td>
                    <td className="border border-gray-300 px-4 py-3">Visual contrast sensitivity test</td>
                    <td className="border border-gray-300 px-4 py-3">Screening abnormalities</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              On cost, MoldCo lists a <strong>$56 starter health panel</strong> and states the
              equivalent set runs <strong>$650+</strong> through standard channels, with a home-test
              option from <strong>$199</strong>. Treat all of these as estimates that vary by state,
              lab, and the exact markers ordered &mdash; confirm with the provider, and note that some
              of this specialized testing is not covered by conventional insurance.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-6 not-prose">
              <p className="text-sm text-gray-700">
                Want the broader picture on ordering bloodwork yourself? See our{' '}
                <Link href="/guides/at-home-lab-testing-guide" className="text-blue-600 hover:underline">at-home lab testing guide</Link>{' '}
                and{' '}
                <Link href="/guides/blood-test-without-a-doctor" className="text-blue-600 hover:underline">how to get a blood test without a doctor</Link>.
                These cover the general direct-access lab model that CIRS panels run on.
              </p>
            </div>

            <h2 id="protocol" className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Prescription Protocol &amp; Home Delivery</h2>

            <p className="text-gray-700 mb-4">
              The Shoemaker-style protocol is <strong>sequential</strong>, and online programs deliver
              it in phases. MoldCo organizes its version into three phases on its site:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Detox:</strong> a bile-acid sequestrant binder &mdash; cholestyramine, or colesevelam (used off-label) &mdash; to bind and remove biotoxins</li>
              <li><strong>Clear:</strong> EDTA nasal therapy to address bacterial colonization/biofilms, typically after at least four weeks of binder therapy</li>
              <li><strong>Repair:</strong> VIP (vasoactive intestinal peptide) nasal spray for immune restoration</li>
            </ul>

            <p className="text-gray-700 mb-4">
              The prescriptions are then shipped to your home. As public price points, MoldCo lists
              specific medications including <strong>colesevelam at $129/month</strong>,{' '}
              <strong>EDTA nasal spray at $23/month</strong>, and <strong>VIP at $219/month</strong>{' '}
              &mdash; which is why the all-in monthly cost depends heavily on which phase you are in.
              These are estimates; confirm current pricing and that a licensed pharmacy dispenses
              them.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8 not-prose">
              <h4 className="font-bold text-gray-900 mb-2">Remove the exposure first</h4>
              <p className="text-gray-700 text-sm">
                Every credible CIRS resource emphasizes that getting out of ongoing biotoxin exposure
                (the water-damaged building) is foundational &mdash; binders fight an uphill battle if
                you are still being re-exposed. Some programs note you can begin binder therapy while
                still addressing the environment, but a plan that ignores exposure entirely is
                incomplete. This is an environmental and medical decision for your clinician, not a
                subscription checkbox.
              </p>
            </div>

            <h2 id="cost" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What It Costs vs. In-Person Care</h2>

            <p className="text-gray-700 mb-4">
              The affordability case for telehealth is mostly about the entry cost. Traditional
              CIRS-literate specialists frequently charge <strong>$300&ndash;$500 or more for a single
              initial consult</strong>, often run 60&ndash;90 minute visits, and commonly operate
              out-of-network &mdash; handing you a superbill to submit yourself. Patients routinely
              report thousands out of pocket across a full workup and protocol.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Cost element</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Online program (estimate)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Traditional in-person (estimate)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Initial access</td>
                    <td className="border border-gray-300 px-4 py-3">Subscription; e.g. $79/mo + meds</td>
                    <td className="border border-gray-300 px-4 py-3">$300&ndash;$500+ first consult</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Provider visit</td>
                    <td className="border border-gray-300 px-4 py-3">~$129 video visit (add-on)</td>
                    <td className="border border-gray-300 px-4 py-3">Per-visit, often out-of-network</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Starter lab panel</td>
                    <td className="border border-gray-300 px-4 py-3">From ~$56 (home test from ~$199)</td>
                    <td className="border border-gray-300 px-4 py-3">$650+ for equivalent set</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">All-in monthly</td>
                    <td className="border border-gray-300 px-4 py-3">~$107&ndash;$313/mo (MoldCo figure)</td>
                    <td className="border border-gray-300 px-4 py-3">Varies widely; often higher up front</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Insurance</td>
                    <td className="border border-gray-300 px-4 py-3">Mostly cash-pay; HSA/FSA usually eligible</td>
                    <td className="border border-gray-300 px-4 py-3">Often out-of-network; superbill only</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              All figures above are publicly stated estimates that change with plan, state, and which
              medications a given phase requires. The headline takeaway: a legitimate online program
              can keep the <em>all-in</em> monthly under roughly $300, while in-person specialist care
              tends to front-load cost into expensive out-of-network consults. Confirm the real
              numbers with any provider before committing.
            </p>

            <h2 id="choose" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How to Choose a Legitimate Program Under $300/Month</h2>

            <p className="text-gray-700 mb-4">
              This is the question the page exists to answer. Run a program through these four checks
              before you pay:
            </p>

            <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
              <li><strong>Licensed clinician in your state.</strong> A real video teleconsult is with a clinician licensed where you live. Confirm your state is served &mdash; availability is state-by-state because of telehealth and lab-licensing rules.</li>
              <li><strong>Real markers, accredited lab.</strong> The diagnostic panel should name the actual CIRS markers (C4a, TGF-&beta;1, MMP-9, MSH, HLA-DR, VCS) and run through an accredited lab &mdash; not one vague mold test.</li>
              <li><strong>Sequenced, pharmacy-dispensed prescriptions.</strong> The protocol should be phased (binder &rarr; EDTA &rarr; VIP) and dispensed by a licensed pharmacy, with removal from exposure addressed.</li>
              <li><strong>Transparent all-in price under $300.</strong> Add up subscription + labs + meds. If it is not stated up front and it does not actually land under $300/month, keep looking.</li>
            </ol>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8 not-prose">
              <h4 className="font-bold text-gray-900 mb-2">A simple decision framework</h4>
              <ol className="list-decimal pl-6 space-y-1 text-gray-700 text-sm">
                <li>Confirm your state is served (telehealth + lab testing)</li>
                <li>Confirm a licensed clinician reviews and prescribes</li>
                <li>Confirm the lab panel names real CIRS markers via an accredited lab</li>
                <li>Add subscription + labs + meds; confirm it is under $300/mo and stated up front</li>
                <li>Confirm there is no cure guarantee and exposure is addressed</li>
              </ol>
            </div>

            <h2 id="redflags" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Red Flags to Avoid</h2>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Cure or guaranteed-outcome claims.</strong> CIRS treatment is symptomatic and often ongoing; a guaranteed cure is a disqualifier.</li>
              <li><strong>No licensed clinician.</strong> If you cannot identify the prescribing clinician or their license, walk away.</li>
              <li><strong>Vague &quot;mold detox&quot; with no real markers.</strong> A panel that does not name standard CIRS markers or use an accredited lab is thin.</li>
              <li><strong>Supplements-only upsell.</strong> A program selling only proprietary supplements without licensed-clinician prescriptions is a sales funnel, not care.</li>
              <li><strong>Hidden pricing.</strong> If the all-in monthly cost is not stated before you pay, assume it is higher than advertised.</li>
              <li><strong>Ignoring exposure.</strong> A plan that never mentions getting out of the water-damaged environment is incomplete.</li>
            </ul>

            <p className="text-gray-700 mb-4">
              Mold and biotoxin symptoms overlap heavily with many other conditions. If you are
              experiencing significant symptoms, an online CIRS subscription is a starting point for
              investigation, not a diagnosis. Work the results with a licensed clinician who can see
              your full picture &mdash; and if you also need broader hormone or mood evaluation,
              compare other cash-pay options like{' '}
              <Link href="/guides/are-at-home-blood-tests-accurate" className="text-blue-600 hover:underline">at-home blood-test accuracy</Link>{' '}
              and the wider <Link href="/labs" className="text-blue-600 hover:underline">cash-pay labs directory</Link>{' '}
              before committing.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Compare Cash-Pay Telehealth &amp; Lab Options</h3>
            <p className="mb-6 text-blue-100">
              See telehealth programs and direct-access lab platforms side by side, with transparent
              self-pay pricing.
            </p>
            <Link
              href="/telehealth"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Browse Telehealth &amp; Labs
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

          {/* Shared YMYL disclaimer + affiliate disclosure */}
          <div className="mt-12">
            <MedicalDisclaimer />
          </div>

          {/* Sources */}
          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources &amp; References</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• MoldCo — moldco.com (program pricing: $79/mo + meds, ~$107&ndash;$313/mo all-in, $129 video visit, $56 health panel, $199 home test; medication prices; Day 1&ndash;Day 7 flow)</li>
              <li>• MoldCo — moldco.com/blog/availability (telehealth in 42 states + DC; lab testing in 46 states; excluded states)</li>
              <li>• MoldCo — moldco.com/blog/cirs-treatment-guide (Detox/Clear/Repair phases; binders, EDTA, VIP; $150&ndash;$300/mo; $56 vs $650+ panel)</li>
              <li>• Chronic inflammatory response syndrome: a review of the evidence of clinical efficacy of treatment — PMC11623837 (contested/limited evidence; Shoemaker Protocol; diagnostic markers; indefinite-treatment caveat)</li>
              <li>• Fierce Healthcare — MoldCo $8M seed funding (Sept 2025; Cantos + Collaborative Fund; launched 2023; Shoemaker protocols; nationwide goal)</li>
              <li>• ScienceInsights — Where to get tested for mold toxicity: costs and options (in-person consults $300&ndash;$500+; out-of-network superbill model; insurance limitations)</li>
            </ul>
          </div>
        </article>

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our Cash-Pay Telehealth Cheat Sheet"
            description="How to vet an online CIRS or mold-illness program on cost, labs, and legitimacy before you pay."
            source="guide_cirs_telehealth_treatment"
          />
        </div>
      </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
