import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Rapamycin for Longevity: Access, Cost & Evidence (2026)' },
  alternates: { canonical: 'https://vitalityscout.com/guides/rapamycin-for-longevity' },
  description: 'An honest look at rapamycin (sirolimus) for longevity: the mTOR pathway, why use is off-label and not FDA-approved, the state of evidence, telehealth access, and costs.',
  keywords: ['rapamycin', 'sirolimus', 'rapamycin longevity', 'mTOR', 'off-label rapamycin', 'rapamycin cost', 'longevity medication', 'rapamycin telehealth'],
};

export default function RapamycinForLongevityGuide() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Rapamycin for Longevity: Access, Cost & Evidence',
    description: 'Educational guide to rapamycin (sirolimus) and longevity covering the mTOR pathway, off-label status, the state of the evidence, telehealth access, and costs.',
    author: {
      '@type': 'Organization',
      name: 'VitalityScout'
    },
    publisher: {
      '@type': 'Organization',
      name: 'VitalityScout',
      logo: {
        '@type': 'ImageObject',
        url: 'https://vitalityscout.com/logo.png'
      }
    },
    datePublished: '2026-06-13',
    dateModified: '2026-06-13',
    mainEntityOfPage: 'https://vitalityscout.com/guides/rapamycin-for-longevity',
    articleSection: 'Longevity Guides',
    keywords: ['rapamycin', 'sirolimus', 'longevity', 'mTOR', 'off-label']
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="mx-auto max-w-4xl px-4 py-3">
            <nav className="text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span className="mx-2">→</span>
              <Link href="/guides" className="hover:text-blue-600">Guides</Link>
              <span className="mx-2">→</span>
              <span className="text-gray-900">Rapamycin for Longevity</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-purple-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <div className="mb-4">
              <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-700">
                Longevity
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Rapamycin for Longevity: What You Should Know
            </h1>
            <p className="text-xl text-gray-600">
              A balanced, compliance-first look at rapamycin (sirolimus) &mdash; what it is, why longevity researchers are interested, what the evidence does and doesn&apos;t show, how people access it off-label, and the real risks.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              Last updated: June 2026 • 12 min read
            </p>
          </div>
        </section>

        {/* Important Context */}
        <div className="bg-yellow-50 border-b-2 border-yellow-200">
          <div className="mx-auto max-w-4xl px-4 py-6">
            <div className="flex items-start gap-4">
              <div className="text-3xl">⚠️</div>
              <div>
                <h3 className="font-bold text-yellow-900 text-lg mb-2">Read This First</h3>
                <p className="text-yellow-800 text-sm">
                  Rapamycin is FDA-approved for specific medical uses, but it is <strong>not FDA-approved for longevity or anti-aging</strong>. Any longevity use is off-label, experimental, and unproven in humans for lifespan or healthspan. It is a potent prescription drug with real risks, side effects, and drug interactions. This guide is educational only &mdash; talk to a qualified clinician before considering it.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <article className="mx-auto max-w-4xl px-4 py-12">
          {/* Quick Facts Box */}
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Rapamycin: Quick Facts</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-purple-600 mb-1">FDA Status</div>
                <div className="text-gray-900 font-semibold">Approved (other uses)</div>
                <div className="text-gray-600">Not approved for longevity</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-indigo-600 mb-1">Telehealth Cost</div>
                <div className="text-gray-900 font-semibold">$30 - $150/month</div>
                <div className="text-gray-600">Plus medication &amp; labs</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-amber-600 mb-1">Evidence Level</div>
                <div className="text-gray-900 font-semibold">Preclinical</div>
                <div className="text-gray-600">Human benefit unproven</div>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What This Guide Covers</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#what-is-rapamycin" className="text-blue-600 hover:underline">1. What Is Rapamycin and Its Approved Uses?</a></li>
              <li><a href="#why-interest" className="text-blue-600 hover:underline">2. Why Longevity Researchers Are Interested</a></li>
              <li><a href="#the-evidence" className="text-blue-600 hover:underline">3. The Honest State of the Evidence</a></li>
              <li><a href="#access" className="text-blue-600 hover:underline">4. How People Access It Off-Label</a></li>
              <li><a href="#costs" className="text-blue-600 hover:underline">5. Cost Overview</a></li>
              <li><a href="#risks" className="text-blue-600 hover:underline">6. Risks and Why Supervision Matters</a></li>
              <li><a href="#who-should-not" className="text-blue-600 hover:underline">7. Who Should Not Consider It</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              Rapamycin (also called sirolimus) is one of the most talked-about molecules in longevity circles. It has a long history as an approved prescription drug for other conditions, and animal research has made it a focus of aging science. But interest is not the same as proof &mdash; and using it to chase longer life remains off-label and experimental in humans.
            </p>

            <h2 id="what-is-rapamycin" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What Is Rapamycin and Its Approved Uses?</h2>

            <p className="text-gray-700 mb-4">
              Rapamycin is a compound originally derived from a soil bacterium found on Easter Island (Rapa Nui &mdash; hence the name). As a medicine, it goes by the generic name sirolimus. The FDA has approved it for specific, well-defined medical uses, including:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Preventing organ transplant rejection:</strong> It suppresses the immune system so the body is less likely to reject a transplanted organ.</li>
              <li><strong>Certain other approved indications:</strong> Related forms are used in some specialized conditions and in drug-coated medical devices.</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Key point:</strong> None of rapamycin&apos;s FDA approvals are for longevity, anti-aging, or healthspan in healthy people. Using it for those purposes is <strong>off-label</strong> &mdash; a clinician&apos;s judgment call, not an approved indication.
              </p>
            </div>

            <h2 id="why-interest" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Why Longevity Researchers Are Interested</h2>

            <p className="text-gray-700 mb-4">
              Rapamycin works by inhibiting a cellular signaling hub called mTOR (mechanistic target of rapamycin). In simple terms, mTOR helps cells sense nutrients and decide whether to grow and build, or to slow down and clean house. Dialing mTOR down is associated in biology with processes like autophagy, the cell&apos;s recycling and maintenance system.
            </p>

            <p className="text-gray-700 mb-4">
              The mTOR pathway is broadly conserved across many species, which is part of why it draws scientific attention. In laboratory and animal models, modulating this pathway has been studied in the context of aging biology. That is the general reason rapamycin sits at the center of so much longevity discussion.
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-3">Important framing</h4>
              <p className="text-gray-700 text-sm mb-0">
                Interest from researchers reflects biological plausibility and animal/preclinical signals &mdash; not a demonstrated longevity benefit in people. Mechanism is a hypothesis to test, not a result. We are intentionally not citing specific trial names, percentages, or outcomes here, because the human picture is still unsettled.
              </p>
            </div>

            <h2 id="the-evidence" className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Honest State of the Evidence</h2>

            <p className="text-gray-700 mb-4">
              Here is the most important section of this guide, so we will be direct:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Most evidence is animal or preclinical.</strong> Much of the excitement comes from laboratory and animal research, which does not reliably translate to humans.</li>
              <li><strong>Human longevity benefit is unproven.</strong> There is no established proof that rapamycin extends lifespan or healthspan in healthy people.</li>
              <li><strong>Research is ongoing.</strong> Scientists are actively studying the question, and results from human research are still emerging and being debated.</li>
              <li><strong>Nothing is settled for healthy individuals.</strong> Using it for prevention or aging is a personal experiment under medical supervision, not a validated therapy.</li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Bottom line:</strong> If a provider or influencer claims rapamycin is a proven longevity treatment, treat that as a red flag. The honest answer in 2026 is that the human evidence for longevity is not there yet. A qualified clinician can help you weigh what is and isn&apos;t known.
              </p>
            </div>

            <h2 id="access" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How People Access It Off-Label</h2>

            <p className="text-gray-700 mb-4">
              Because rapamycin is a prescription drug, it cannot be bought over the counter. People exploring it for longevity typically work with a licensed clinician &mdash; increasingly through telehealth platforms that focus on longevity and preventive medicine. A responsible process generally involves:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>A clinician evaluation:</strong> Reviewing your full medical history, current medications, and goals to assess whether off-label use is appropriate for you at all.</li>
              <li><strong>Baseline lab work:</strong> Bloodwork before starting, so there is a reference point and a check for conditions that would make use unsafe.</li>
              <li><strong>Ongoing monitoring:</strong> Follow-up labs and check-ins over time to watch for side effects and changes.</li>
              <li><strong>A prescription, if appropriate:</strong> Only a licensed prescriber can decide whether to prescribe, and the medication is dispensed through a pharmacy.</li>
            </ul>

            <p className="text-gray-700 mb-4">
              We deliberately do not publish dosing protocols or instructions. Any decision about whether to use rapamycin, and how, is between you and a qualified clinician who knows your individual health situation.
            </p>

            {/* Primary money-page CTA */}
            <div className="not-prose my-10 rounded-xl border-2 border-purple-300 bg-gradient-to-r from-purple-50 to-indigo-50 p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Looking Into Off-Label Longevity Medications?</h3>
              <p className="mb-6 text-gray-700">
                Compare telehealth providers that offer clinician evaluation, lab work, and monitoring for longevity-focused medications &mdash; so any off-label use is properly supervised.
              </p>
              <Link
                href="/longevity-rx"
                className="inline-block rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white hover:bg-purple-700 transition-colors"
              >
                Compare longevity-medication telehealth providers →
              </Link>
            </div>

            <h2 id="costs" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Cost Overview</h2>

            <p className="text-gray-700 mb-4">
              Costs vary widely by provider, region, and how much monitoring is involved. As a rough framework, there are three buckets:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Cost Component</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Typical Range</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Telehealth membership / consult</td>
                    <td className="border border-gray-300 px-4 py-3">$30 - $150/month</td>
                    <td className="border border-gray-300 px-4 py-3">Clinician access and ongoing oversight</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Medication</td>
                    <td className="border border-gray-300 px-4 py-3">Varies by pharmacy</td>
                    <td className="border border-gray-300 px-4 py-3">Generic sirolimus pricing differs widely</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Lab work</td>
                    <td className="border border-gray-300 px-4 py-3">Varies (baseline + follow-ups)</td>
                    <td className="border border-gray-300 px-4 py-3">Needed for safe, supervised use</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              Because longevity use is off-label and not a covered indication, expect most or all of these costs to be out of pocket. Always confirm current pricing directly with the provider and pharmacy before committing.
            </p>

            <h2 id="risks" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Risks and Why Supervision Matters</h2>

            <p className="text-gray-700 mb-4">
              Rapamycin is a potent immunosuppressant, not a supplement. It carries real risks and side effects, and it can interact with other medications. This is precisely why a licensed clinician and ongoing lab monitoring are essential. Categories of concern include:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Immune effects:</strong> Because it can suppress immune function, infection risk and wound healing are clinical considerations.</li>
              <li><strong>Metabolic and laboratory changes:</strong> It can affect various lab values, which is part of why monitoring exists.</li>
              <li><strong>Drug interactions:</strong> It can interact with other medicines and even certain foods; a clinician needs your full medication list.</li>
              <li><strong>Individual variation:</strong> How any person responds depends on their health, history, and other treatments.</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                This list is general and not exhaustive. Only a qualified clinician who knows your complete medical picture can assess whether the potential risks are acceptable for you. Do not attempt to self-prescribe or source this medication without medical supervision.
              </p>
            </div>

            <h2 id="who-should-not" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Who Should Not Consider It</h2>

            <p className="text-gray-700 mb-4">
              While only a clinician can make an individual determination, off-label longevity use is generally not appropriate for people who:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Are pregnant, trying to conceive, or breastfeeding</li>
              <li>Have active infections or compromised immune function</li>
              <li>Take medications that may interact with it (without clinician review)</li>
              <li>Have significant underlying health conditions that raise the risk profile</li>
              <li>Are unwilling or unable to do baseline and ongoing lab monitoring</li>
              <li>Are expecting a proven, guaranteed longevity benefit &mdash; which does not exist today</li>
            </ul>

            <div className="bg-purple-50 rounded-lg p-6 my-8">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">The Balanced View</h3>
              <p className="text-gray-700 mb-4">
                Rapamycin is scientifically interesting and has a real role as an approved medicine for other conditions. For longevity, though, the human evidence is not established, and use is off-label and experimental.
              </p>
              <p className="text-gray-700 mb-0">
                If you are curious, the responsible path is to prioritize proven basics first &mdash; sleep, exercise, nutrition, and managing existing conditions &mdash; and to discuss any interest in off-label medication with a qualified clinician who can order labs and supervise you. It is not FDA-approved for longevity, and it is not something to experiment with on your own.
              </p>
            </div>

            {/* Related links */}
            <div className="not-prose mt-10 rounded-lg border border-gray-200 bg-gray-50 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Related Reading</h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <Link href="/longevity-rx" className="text-blue-600 hover:underline font-medium">
                    Longevity-medication telehealth providers →
                  </Link>
                  <span className="text-gray-600"> &mdash; compare supervised off-label options</span>
                </li>
                <li>
                  <Link href="/longevity-performance" className="text-blue-600 hover:underline font-medium">
                    Longevity &amp; Performance →
                  </Link>
                  <span className="text-gray-600"> &mdash; the broader landscape of optimization options</span>
                </li>
                <li>
                  <Link href="/guides/nad-therapy-guide" className="text-blue-600 hover:underline font-medium">
                    NAD+ Therapy Guide →
                  </Link>
                  <span className="text-gray-600"> &mdash; another popular longevity intervention, evidence reviewed</span>
                </li>
                <li>
                  <Link href="/guides/peptide-therapy-guide" className="text-blue-600 hover:underline font-medium">
                    Peptide Therapy Guide →
                  </Link>
                  <span className="text-gray-600"> &mdash; what peptides are and what the evidence shows</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-12 rounded-lg bg-red-50 border-2 border-red-200 p-6">
            <h3 className="font-bold text-red-900 mb-2">Important Disclaimer</h3>
            <p className="text-sm text-red-800 mb-4">
              Rapamycin (sirolimus) is not FDA-approved for longevity or anti-aging. Any such use is off-label, experimental, and unproven in humans for lifespan or healthspan. It is a potent prescription medication with real risks, side effects, and drug interactions. This information is educational only and is not medical advice.
            </p>
            <p className="text-sm text-red-800">
              Always talk to a qualified, licensed clinician before considering rapamycin or any prescription medication, especially if you have existing health conditions or take other medications. Never self-prescribe or source prescription drugs without medical supervision.
            </p>
          </div>
        </article>

        <MedicalDisclaimer />
      </main>
      <Footer />
    </>
  );
}
