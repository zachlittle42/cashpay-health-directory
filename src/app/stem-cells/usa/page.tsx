import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'US Stem Cell Options: FDA Regulations & What\'s Available | VitalityScout',
  description: 'Understanding stem cell therapy options in the United States. FDA regulations, what\'s legally available, and why many Americans travel abroad for treatment.',
};

// FDA-approved uses
const fdaApproved = [
  {
    name: 'Bone Marrow Transplants',
    description: 'Hematopoietic stem cells for blood cancers (leukemia, lymphoma) and bone marrow disorders.',
    availability: 'Hospital oncology departments',
    cost: '$100,000-500,000 (often insurance covered)',
  },
  {
    name: 'Cord Blood Transplants',
    description: 'Similar to bone marrow for certain blood disorders. Uses donated umbilical cord blood.',
    availability: 'Specialized transplant centers',
    cost: '$50,000-250,000 (often insurance covered)',
  },
  {
    name: 'FDA Clinical Trials',
    description: 'Experimental stem cell treatments under strict FDA oversight for specific conditions.',
    availability: 'Research hospitals, clinicaltrials.gov',
    cost: 'Often free (research funded)',
  },
];

// Gray area treatments
const grayArea = [
  {
    name: 'PRP (Platelet-Rich Plasma)',
    description: 'Your own concentrated platelets injected into joints or tissues. Not stem cells, but regenerative.',
    status: 'Legal - uses your own blood processed same-day',
    cost: '$500-2,500 per injection',
    availability: 'Orthopedic clinics, sports medicine',
  },
  {
    name: 'Autologous Fat-Derived Cells',
    description: 'Fat removed via liposuction and processed same-day. Some clinics do this legally as "same surgical procedure."',
    status: 'Legal gray area - FDA has challenged some clinics',
    cost: '$5,000-15,000',
    availability: 'Select regenerative medicine clinics',
  },
  {
    name: 'Bone Marrow Aspirate Concentrate',
    description: 'Your own bone marrow concentrated and reinjected same-day for orthopedic conditions.',
    status: 'Legal - uses your own cells with minimal processing',
    cost: '$3,000-10,000',
    availability: 'Orthopedic specialists, sports medicine',
  },
];

// Why travel abroad
const whyTravelAbroad = [
  {
    reason: 'Culture-Expanded Cells',
    explanation: 'FDA prohibits growing/multiplying stem cells in labs. International clinics can expand cells to get 100x more cells than same-day processing.',
  },
  {
    reason: 'Umbilical Cord MSCs',
    explanation: 'Using donor umbilical cord stem cells is heavily restricted in US. International clinics routinely use these "off-the-shelf" cells.',
  },
  {
    reason: 'Systemic IV Infusions',
    explanation: 'FDA considers IV stem cell infusions as "drugs" requiring approval. International clinics offer IV protocols for systemic conditions.',
  },
  {
    reason: 'Treatment for Non-Approved Conditions',
    explanation: 'Autoimmune diseases, neurological conditions, and anti-aging are not approved uses in the US but are commonly treated abroad.',
  },
];

export default function USAStemCells() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'US Stem Cell Therapy Options',
    description: 'Understanding stem cell therapy regulations and options in the United States',
    author: { '@type': 'Organization', name: 'VitalityScout' },
    dateModified: '2026-02-01',
  };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-100 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <Link href="/stem-cells" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
            &larr; Stem Cell Hub
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">🇺🇸</span>
            <h1 className="text-4xl font-bold text-gray-900">
              Stem Cell Options in the United States
            </h1>
          </div>

          <p className="text-xl text-gray-600 mb-6">
            The FDA strictly regulates stem cell therapy, limiting what&apos;s available domestically.
            Understanding these regulations helps explain why many Americans travel abroad for treatment.
          </p>
        </div>
      </section>

      {/* FDA Stance */}
      <section className="mx-auto max-w-4xl px-4 py-6">
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
          <h3 className="font-bold text-blue-900 mb-3">The FDA&apos;s Position</h3>
          <p className="text-sm text-blue-800 mb-4">
            The FDA considers stem cells that are more than &quot;minimally manipulated&quot; or used for &quot;non-homologous&quot;
            purposes to be drugs requiring approval. This means:
          </p>
          <ul className="text-sm text-blue-800 space-y-2">
            <li>• Culture-expanding stem cells in a lab = requires FDA approval</li>
            <li>• Using donor cells (not your own) = requires FDA approval</li>
            <li>• IV infusions for systemic treatment = requires FDA approval</li>
            <li>• Treating conditions not related to the cell&apos;s origin = requires FDA approval</li>
          </ul>
          <p className="text-sm text-blue-800 mt-4">
            <strong>Result:</strong> Most regenerative stem cell treatments available internationally are not legally
            available in the US outside of clinical trials.
          </p>
        </div>
      </section>

      {/* FDA Approved */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">FDA-Approved Stem Cell Uses</h2>
          <p className="text-gray-600 mb-8">
            These are the only stem cell treatments with full FDA approval.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {fdaApproved.map((treatment) => (
              <div key={treatment.name} className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-2">{treatment.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{treatment.description}</p>
                <div className="space-y-2 text-sm border-t border-gray-100 pt-3">
                  <div>
                    <span className="text-gray-500">Where:</span>
                    <p className="text-gray-700">{treatment.availability}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Cost:</span>
                    <p className="text-gray-700">{treatment.cost}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gray Area */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Legal &quot;Gray Area&quot; Treatments</h2>
        <p className="text-gray-600 mb-8">
          Some regenerative treatments use your own cells with minimal processing. These exist in a regulatory gray area.
        </p>

        <div className="space-y-6">
          {grayArea.map((treatment) => (
            <div key={treatment.name} className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{treatment.name}</h3>
                  <p className="text-gray-600 mb-3">{treatment.description}</p>
                  <p className="text-sm text-amber-700 bg-amber-50 px-3 py-2 rounded inline-block">
                    {treatment.status}
                  </p>
                </div>
                <div className="md:text-right md:min-w-[200px]">
                  <div className="text-xl font-bold text-green-600 mb-1">{treatment.cost}</div>
                  <div className="text-sm text-gray-500">{treatment.availability}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Travel Abroad */}
      <section className="bg-indigo-50 px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Why Americans Travel Abroad</h2>
          <p className="text-gray-600 mb-8">
            Understanding what&apos;s available internationally that isn&apos;t available domestically.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {whyTravelAbroad.map((item) => (
              <div key={item.reason} className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="font-bold text-indigo-900 mb-2">{item.reason}</h3>
                <p className="text-sm text-gray-600">{item.explanation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning */}
      <section className="mx-auto max-w-4xl px-4 py-8">
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
          <h3 className="font-bold text-red-900 mb-3">Beware of US &quot;Stem Cell Clinics&quot;</h3>
          <p className="text-sm text-red-800 mb-4">
            Many US clinics claim to offer &quot;stem cell therapy&quot; but may be:
          </p>
          <ul className="text-sm text-red-800 space-y-2">
            <li>• Operating outside FDA guidelines (potentially illegal)</li>
            <li>• Offering PRP or other treatments mislabeled as &quot;stem cells&quot;</li>
            <li>• Charging high prices for minimally effective treatments</li>
            <li>• Making claims not supported by evidence</li>
          </ul>
          <p className="text-sm text-red-800 mt-4">
            <strong>The FDA has taken action</strong> against US stem cell clinics making unapproved claims.
            If a US clinic offers what sounds like treatments only available abroad, be very cautious.
          </p>
        </div>
      </section>

      {/* International Options */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Explore International Options</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Link
            href="/stem-cells/mexico"
            className="block bg-green-50 rounded-lg p-6 border-2 border-green-200 hover:border-green-400 transition-colors"
          >
            <span className="text-4xl block mb-3">🇲🇽</span>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Mexico</h3>
            <p className="text-sm text-gray-600 mb-3">
              Closest and most affordable option. Border cities allow day trips. $5,000-35,000.
            </p>
            <span className="text-sm font-medium text-green-600">Explore Mexico clinics →</span>
          </Link>

          <Link
            href="/stem-cells/panama"
            className="block bg-blue-50 rounded-lg p-6 border-2 border-blue-200 hover:border-blue-400 transition-colors"
          >
            <span className="text-4xl block mb-3">🇵🇦</span>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Panama</h3>
            <p className="text-sm text-gray-600 mb-3">
              Premium option with culture-expanded cells. NFL player destination. $20,000-60,000.
            </p>
            <span className="text-sm font-medium text-blue-600">Explore Panama clinics →</span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
