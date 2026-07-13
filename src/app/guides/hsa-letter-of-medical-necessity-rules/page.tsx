import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import { buildFAQSchema } from '@/lib/jsonLd';

const URL = 'https://vitalityscout.com/guides/hsa-letter-of-medical-necessity-rules';

export const metadata: Metadata = {
  title: { absolute: 'HSA Letter of Medical Necessity: When You Need One and What It Must Say' },
  alternates: { canonical: URL },
  description:
    'An LMN is a signed provider statement showing why an item treats a specific condition. HSAs and FSAs require one for dual-purpose expenses.',
};

const FAQ_ITEMS = [
  {
    question: 'When do I need a letter of medical necessity for my HSA or FSA?',
    answer:
      'You need an LMN for dual-purpose expenses — items that can be either medical or general-wellness, such as weight-loss programs, some supplements, and certain equipment. You do not need one for plainly medical care like a doctor visit, hospital care, a prescribed drug, or dental treatment. Requirements vary by plan administrator; confirm yours.',
  },
  {
    question: 'What must a compliant letter of medical necessity include?',
    answer:
      'A compliant LMN identifies the patient, states the specific diagnosed condition (ideally with an ICD-10 code), names the exact item or service recommended, explains the medical rationale rather than general wellness, and gives the treatment duration — signed and dated by a licensed provider. Vague wellness language fails. Requirements vary by plan administrator; confirm yours.',
  },
  {
    question: 'Can a letter of medical necessity make a cosmetic or general-health purchase HSA-eligible?',
    answer:
      'No. An LMN is substantiation, not a loophole. It can only document medical necessity where medical necessity genuinely exists — it cannot make a cosmetic or general-health purchase eligible. Requirements vary by plan administrator; confirm yours.',
  },
];

export default function HsaLetterOfMedicalNecessityRulesPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'HSA Letter of Medical Necessity: When You Need One and What It Must Say',
    description:
      'When HSAs and FSAs require a letter of medical necessity, what a compliant LMN must contain, and how the rules apply to care abroad.',
    author: { '@type': 'Organization', name: 'VitalityScout' },
    publisher: { '@type': 'Organization', name: 'VitalityScout' },
    datePublished: '2026-07-13',
    dateModified: '2026-07-13',
    mainEntityOfPage: URL,
  };
  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': `${URL}#faq`, url: URL };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Guides', item: 'https://vitalityscout.com/guides' },
      { '@type': 'ListItem', position: 2, name: 'HSA Letter of Medical Necessity Rules', item: URL },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <SidebarShell>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

        <nav className="border-b border-gray-200 px-4 py-3 text-sm" aria-label="Breadcrumb">
          <div className="mx-auto max-w-4xl text-gray-500">
            <Link href="/guides" className="text-blue-600 hover:underline">Guides</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">HSA Letter of Medical Necessity Rules</span>
          </div>
        </nav>

        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-10">
          <div className="mx-auto max-w-4xl">
            <div className="mb-3">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                HSA / FSA Guide
              </span>
            </div>
            <h1 className="mb-4 text-4xl font-bold text-gray-900">
              HSA Letter of Medical Necessity: When You Need One and What It Must Say
            </h1>
            {/* Direct-answer lead */}
            <p className="text-lg text-gray-700">
              <strong>Direct answer.</strong> A letter of medical necessity (LMN) is a signed statement
              from a licensed provider explaining why an item or service treats a specific medical
              condition. HSAs and FSAs require one for &quot;dual-purpose&quot; expenses — things that can
              be either medical or general-wellness (weight-loss programs, some supplements, certain
              equipment). It is not required for plainly medical care. An LMN documents the diagnosis, the
              recommended item, and the treatment duration.
            </p>
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-10">
          {/* Top disclaimer callout — wording exact from draft */}
          <div className="mb-8 rounded-lg border-l-4 border-amber-400 bg-amber-50 p-5">
            <p className="text-sm text-amber-900">
              This guide is general information, not tax or medical advice. Your plan administrator sets
              the documentation it accepts. Confirm requirements with your administrator and get the
              letter from a licensed provider.
            </p>
          </div>

          <h2 className="mb-3 text-2xl font-bold text-gray-900">What an LMN is (and isn&apos;t)</h2>
          <p className="mb-4 text-gray-700">
            An LMN is substantiation. HSA and FSA funds may only reimburse &quot;qualified medical
            expenses,&quot; which the tax code ties to the treatment of a diagnosed condition (
            <a href="https://www.irs.gov/publications/p502" target="_blank" rel="nofollow noopener" className="text-blue-600 hover:underline">IRS Publication 502</a>;
            HSAs governed by{' '}
            <a href="https://www.irs.gov/publications/p969" target="_blank" rel="nofollow noopener" className="text-blue-600 hover:underline">IRS Publication 969</a>
            ). When an expense could plausibly be personal spending rather than treatment, the
            administrator needs evidence that it <em>is</em> treatment. The LMN is that evidence.
          </p>
          <p className="mb-6 text-gray-700">
            It is <strong>not</strong> a loophole. A letter cannot make a cosmetic or general-health
            purchase eligible. It can only document medical necessity where medical necessity genuinely
            exists.
          </p>

          <h2 className="mb-3 mt-10 text-2xl font-bold text-gray-900">When you need one — and when you don&apos;t</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200 bg-gray-50 text-left">
                  <th className="px-3 py-2 font-semibold text-gray-700">Situation</th>
                  <th className="px-3 py-2 font-semibold text-gray-700">LMN needed?</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800">Doctor visit, hospital care, prescribed drug, dental treatment</td>
                  <td className="px-3 py-2 text-gray-800"><strong>No</strong> — plainly medical</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800">Weight-loss program to treat physician-diagnosed obesity/hypertension/heart disease</td>
                  <td className="px-3 py-2 text-gray-800"><strong>Yes</strong> — otherwise indistinguishable from general dieting</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800">Nutritional supplements or special foods for a diagnosed condition</td>
                  <td className="px-3 py-2 text-gray-800"><strong>Yes</strong> (and often still limited)</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800">Exercise/fitness equipment prescribed for a specific condition</td>
                  <td className="px-3 py-2 text-gray-800"><strong>Yes</strong>, and frequently still denied</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800">Massage, chiropractic, or acupuncture for a diagnosed condition</td>
                  <td className="px-3 py-2 text-gray-800"><strong>Often yes</strong></td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800">Cosmetic procedures for appearance</td>
                  <td className="px-3 py-2 text-gray-800">An LMN does <strong>not</strong> make these eligible</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800">Over-the-counter items now eligible without a prescription (e.g., many OTC drugs)</td>
                  <td className="px-3 py-2 text-gray-800">Generally <strong>no</strong> since the CARES Act change; confirm with administrator</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-gray-700">
            The weight-loss line is the one most relevant to care abroad: Publication 502 allows amounts
            paid to lose weight <strong>only</strong> when it is &quot;a treatment for a specific disease
            diagnosed by a physician (such as obesity, hypertension, or heart disease).&quot; Absent that
            diagnosis, the spend is a personal expense. An LMN is how the diagnosis reaches the
            administrator.
          </p>

          <h2 className="mb-3 mt-10 text-2xl font-bold text-gray-900">What a compliant LMN must contain</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200 bg-gray-50 text-left">
                  <th className="px-3 py-2 font-semibold text-gray-700">Element</th>
                  <th className="px-3 py-2 font-semibold text-gray-700">Detail</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800"><strong>Patient identification</strong></td>
                  <td className="px-3 py-2 text-gray-800">Name and date of birth</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800"><strong>The diagnosed condition</strong></td>
                  <td className="px-3 py-2 text-gray-800">The specific medical condition being treated (ideally with an ICD-10 diagnosis code)</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800"><strong>The recommended item or service</strong></td>
                  <td className="px-3 py-2 text-gray-800">Exactly what is being prescribed (the program, equipment, or procedure)</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800"><strong>The medical rationale</strong></td>
                  <td className="px-3 py-2 text-gray-800">How the item treats or mitigates the condition — not general wellness language</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800"><strong>Duration of treatment</strong></td>
                  <td className="px-3 py-2 text-gray-800">The period the recommendation covers (LMNs commonly expire after 12 months)</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800"><strong>Provider signature + credentials</strong></td>
                  <td className="px-3 py-2 text-gray-800">Signed and dated by a licensed provider, with license/NPI where applicable</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-gray-700">
            Vague letters fail. &quot;This patient would benefit from a healthy lifestyle&quot; is a
            wellness statement. &quot;This patient has a BMI of 38 with type 2 diabetes; I am prescribing
            [specific program/procedure] as treatment for obesity for 12 months&quot; is a
            medical-necessity statement.
          </p>

          <h2 className="mb-3 mt-10 text-2xl font-bold text-gray-900">LMNs and care abroad</h2>
          <p className="mb-4 text-gray-700">
            The LMN rules do not change because the treatment happens overseas. If a weight-loss surgery
            abroad is prescribed to treat physician-diagnosed obesity, the same LMN logic applies — a
            US-licensed provider&apos;s diagnosis and recommendation strengthen the file. Two cautions
            specific to foreign care:
          </p>
          <ol className="mb-6 list-decimal space-y-2 pl-6 text-gray-700">
            <li>
              <strong>Get the LMN from a provider your administrator recognizes.</strong> A US-licensed
              physician&apos;s letter is cleaner than a letter from the foreign clinic alone.
            </li>
            <li>
              <strong>Pair the LMN with the foreign itemized invoice.</strong> The letter proves
              necessity; the invoice proves the expense. Administrators may want both.
            </li>
          </ol>

          <h2 className="mb-3 mt-10 text-2xl font-bold text-gray-900">How to obtain one</h2>
          <ol className="mb-6 list-decimal space-y-2 pl-6 text-gray-700">
            <li>See a licensed provider and get the condition formally diagnosed and documented.</li>
            <li>Ask the provider to write the LMN using the elements in the table above.</li>
            <li>Have it signed and dated on the provider&apos;s letterhead.</li>
            <li>
              Submit it to your HSA/FSA administrator, ideally <strong>before</strong> incurring the
              expense, and ask them to confirm eligibility in writing.
            </li>
            <li>Keep a copy with your receipts — the IRS can request substantiation years later for an HSA.</li>
          </ol>

          <h2 className="mb-3 mt-10 text-2xl font-bold text-gray-900">The bottom line</h2>
          <p className="mb-6 text-gray-700">
            An LMN converts a borderline expense into a documented medical one <em>only when the medicine
            is real</em>. For weight-loss care — whether a GLP-1 program at home or a procedure abroad —
            the letter is the bridge between a physician&apos;s diagnosis and your account funds. Get it in
            advance, make it specific, and keep it on file.
          </p>

          {/* FAQ (mirrors FAQPage schema) */}
          <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Frequently asked questions</h2>
          <div className="space-y-5">
            {FAQ_ITEMS.map((f) => (
              <div key={f.question}>
                <h3 className="mb-1 font-bold text-gray-900">{f.question}</h3>
                <p className="text-sm text-gray-700">{f.answer}</p>
              </div>
            ))}
          </div>

          {/* Related guides */}
          <div className="mt-12 rounded-lg border border-gray-200 bg-gray-50 p-6">
            <h3 className="mb-3 font-bold text-gray-900">Related VitalityScout guides</h3>
            <ul className="space-y-1 text-sm text-blue-700">
              <li><Link href="/guides/can-you-use-hsa-fsa-for-medical-care-abroad" className="hover:underline">Using HSA/FSA funds abroad</Link></li>
              <li><Link href="/guides/does-insurance-cover-bariatric-surgery-abroad" className="hover:underline">Does insurance cover bariatric surgery abroad</Link></li>
              <li><Link href="/guides/medical-tourism-tax-deduction-rules" className="hover:underline">Deducting foreign care on your taxes</Link></li>
            </ul>
          </div>

          {/* Sources */}
          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="mb-4 font-semibold text-gray-800">Sources</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• <a href="https://www.irs.gov/publications/p502" target="_blank" rel="nofollow noopener" className="text-blue-600 hover:underline">IRS, <em>Publication 502 (2025)</em> — weight-loss as treatment for a diagnosed disease; definition of medical care.</a></li>
              <li>• <a href="https://www.irs.gov/publications/p969" target="_blank" rel="nofollow noopener" className="text-blue-600 hover:underline">IRS, <em>Publication 969</em> — HSA qualified medical expenses and substantiation.</a></li>
            </ul>
            <p className="mt-4 text-sm italic text-gray-500">
              &quot;Letter of medical necessity&quot; is an administrator-and-substantiation practice built
              on the §213(d)/Pub 502 definition of medical care, not a standalone IRS form. Requirements
              vary by plan administrator; confirm yours.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 rounded-lg border border-gray-300 bg-gray-100 p-6">
            <h3 className="mb-2 font-bold text-gray-900">Disclaimer</h3>
            <p className="text-sm text-gray-700">
              This guide is general information, not tax or medical advice. Your plan administrator sets
              the documentation it accepts. HSA and FSA eligibility rules vary by plan. Confirm
              requirements with your administrator and get the letter from a licensed provider before
              relying on it.
            </p>
          </div>
        </article>
      </SidebarShell>
      <Footer />
    </main>
  );
}
