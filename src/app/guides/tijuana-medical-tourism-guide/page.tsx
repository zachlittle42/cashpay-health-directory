import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'Tijuana Medical Tourism: Dental, Bariatric & Stem Cell Guide' },
  alternates: { canonical: 'https://vitalityscout.com/guides/tijuana-medical-tourism-guide' },
  description: 'Tijuana medical tourism guide: dental, bariatric, and stem cell care 20 min from San Diego. Cost estimates, how to vet clinics, and the border lane.',
};

// Real conversational/PAA questions, answered only from facts already stated on
// this page. Every price/safety answer ends with the verify-with-provider hedge,
// consistent with the disclaimer wording. The visible FAQ block below mirrors
// this schema exactly — schema clarifies the page, it never invents.
const FAQ_ITEMS = [
  {
    question: 'Is Tijuana safe for medical tourism?',
    answer:
      'The medical-tourism districts are where most American patients go, and the city draws over a million medical and wellness visitors a year per the Baja Health Cluster. Risk is reduced by booking an established clinic, using its border-pickup and Medical Fast-Pass lane, staying in clinic-recommended hotels in the Zona Río area, and not wandering at night. Check the current US State Department advisory for Baja California before you travel. This is information, not medical advice.',
  },
  {
    question: 'How much can you save on dental work in Tijuana versus the US?',
    answer:
      'Dental work in Tijuana commonly runs 50-70% below US cash prices. A single implant is often quoted around $1,200-$1,850 in Tijuana versus roughly $3,000-$5,000+ in the US, and All-on-4 full-arch cases around $12,000-$15,000 versus $20,000-$30,000. These are estimates that vary by clinic, materials, and case complexity — confirm a written quote with the provider.',
  },
  {
    question: 'How much does bariatric surgery cost in Tijuana?',
    answer:
      'All-inclusive gastric sleeve packages in Tijuana are frequently quoted from about $4,200-$6,500, versus roughly $15,000-$25,000 self-pay in the US. Packages often bundle the hospital stay, surgeon and anesthesia fees, ground transport, and aftercare. Gastric bypass and revision cases cost more. Treat any figure as an estimate to confirm directly, and verify the surgeon and hospital accreditation before booking.',
  },
  {
    question: 'How do you cross the border from San Diego to Tijuana for medical care?',
    answer:
      'Most patients park on the US side at San Ysidro (around $10-$20/day), walk across at the PedWest or PedEast pedestrian crossing, and meet a clinic driver waiting on the Mexico side. A passport or passport card is required to return. Many established clinics provide a Medical Fast-Pass that uses a dedicated lane to shorten the northbound wait. Confirm pickup and pass details with your clinic in advance.',
  },
  {
    question: 'Is stem cell therapy in Tijuana FDA-approved?',
    answer:
      'No. Most stem cell therapies offered in Tijuana are not FDA-approved and are considered experimental; the FDA has warned consumers about unproven stem cell products. Mexican clinics operate under COFEPRIS, which permits some treatments the FDA restricts. If you consider it, verify the clinic holds a COFEPRIS-certified lab, ask about cell sourcing and batch testing, and discuss it with a qualified physician first. This is educational information only.',
  },
  {
    question: 'How do I vet a clinic or surgeon in Tijuana?',
    answer:
      'Confirm the surgeon or dentist is board-certified and that their Mexican professional license is valid (searchable on Mexico’s National Registry of Professions). For surgery, look for hospital accreditation such as JCI or a Center of Excellence designation and society membership like ASMBS or IFSO. For dental, look for ADA-member dentists and US/international training. Treat guaranteed results or "cure" claims as red flags. Verify credentials directly before paying a deposit.',
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

export default function TijuanaMedicalTourismGuide() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Tijuana Medical Tourism Guide',
    description:
      'A practical guide to medical tourism in Tijuana, Mexico — top procedures (dental, bariatric, stem cell), border-crossing logistics, cost estimates vs the US, and how to vet clinics safely.',
    url: 'https://vitalityscout.com/guides/tijuana-medical-tourism-guide',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/tijuana-medical-tourism-guide#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'Thing',
      name: 'Medical tourism in Tijuana, Mexico',
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-23',
    dateModified: '2026-06-23',
    citation: [
      {
        '@type': 'CreativeWork',
        name: 'Baja Health Cluster — Medical Tourism in Tijuana',
        url: 'https://bajahealthcluster.mx/medical-tourism-in-tijuana-an-international-benchmark-for-health-and-wellness/',
      },
      {
        '@type': 'CreativeWork',
        name: 'FDA — Important Patient and Consumer Information About Regenerative Medicine Therapies',
        url: 'https://www.fda.gov/vaccines-blood-biologics/consumers-biologics/important-patient-and-consumer-information-about-regenerative-medicine-therapies',
      },
      {
        '@type': 'CreativeWork',
        name: 'ASMBS — MBSAQIP Bariatric Accreditation',
        url: 'https://asmbs.org/about/mbsaqip/',
      },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/tijuana-medical-tourism-guide#faq', url: 'https://vitalityscout.com/guides/tijuana-medical-tourism-guide' };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="mx-auto max-w-4xl px-4 py-3">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">→</span>
            <Link href="/medical-tourism" className="hover:text-blue-600">Medical Tourism</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-900">Tijuana Guide</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <Link href="/destinations/mexico" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
            &larr; Mexico Destination Guide
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🇲🇽</span>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
              Destination Guide
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Tijuana Medical Tourism: A Practical Guide
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            The border city 20 minutes from San Diego is Mexico&apos;s busiest medical hub for
            Americans — strongest in dental, bariatric surgery, and regenerative medicine. Here is
            what is available, what it costs, and how to vet a clinic before you cross.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              Tijuana draws <strong>over one million medical and wellness visitors a year</strong>{' '}
              (Baja Health Cluster), making it Mexico&apos;s top medical-tourism destination. Patients
              cross from San Ysidro for <strong>dental work (often 50-70% cheaper)</strong>,{' '}
              <strong>all-inclusive bariatric surgery (frequently from ~$4,200-$6,500)</strong>, and
              cosmetic and regenerative care. Quality varies by clinic, so verify credentials,
              accreditation, and a written quote before booking. This is information, not medical
              advice.
            </p>
          </div>
        </div>
      </section>

      {/* At a glance */}
      <section className="mx-auto max-w-4xl px-4 py-8">
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h2 className="text-lg font-bold text-green-900 mb-3">Tijuana At a Glance</h2>
          <ul className="text-sm text-gray-700 space-y-1 mb-0">
            <li>✓ <strong>~20 minutes</strong> from San Diego via the San Ysidro crossing — the busiest land border in the Western Hemisphere</li>
            <li>✓ <strong>Strongest in:</strong> dental, bariatric (weight-loss) surgery, plastic surgery, fertility/IVF, and regenerative medicine</li>
            <li>✓ <strong>Typical savings:</strong> 40-70% vs US cash prices (Baja Health Cluster)</li>
            <li>✓ <strong>Border return:</strong> passport required; a clinic Medical Fast-Pass uses a dedicated lane to cut the wait</li>
            <li>✓ <strong>Most trips:</strong> same-day for dental, 3-5 days for bariatric, 5-10 days for full-mouth implant cases</li>
          </ul>
        </div>
      </section>

      {/* Regulatory notice (applies mainly to stem cell / regenerative content) */}
      <section className="mx-auto max-w-4xl px-4 py-6">
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
          <h3 className="text-lg font-bold text-red-900 mb-3">Important Regulatory Notice</h3>
          <p className="text-sm text-red-800 mb-3">
            <strong>Stem cell and other regenerative therapies offered in Tijuana are largely NOT
            FDA-approved</strong> and are considered experimental. The FDA has warned consumers about
            unproven stem cell products.{' '}
            <a
              href="https://www.fda.gov/vaccines-blood-biologics/consumers-biologics/important-patient-and-consumer-information-about-regenerative-medicine-therapies"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="underline"
            >
              (Source: FDA consumer guidance)
            </a>
          </p>
          <p className="text-sm text-red-800">
            This guide is for informational purposes. Always consult a qualified physician and verify
            a clinic&apos;s licensing and accreditation before pursuing any treatment.
          </p>
        </div>
      </section>

      {/* Why Tijuana */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Tijuana?</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            Tijuana&apos;s advantage is geography. It sits directly against San Diego at the San
            Ysidro port of entry, so a patient can park on the US side, walk across, have a procedure,
            and be home the same evening for simpler cases. That proximity also makes follow-up and
            revision care far more practical than a long-haul destination. The Baja Health Cluster, the
            regional industry group, estimates the city receives more than one million medical and
            wellness visitors annually and calls it the number-one medical destination in Mexico for
            international patients.
          </p>
          <p>
            The most-requested treatments cluster in a few categories: bariatric (weight-loss) surgery,
            dental implants and full-mouth rehabilitation, plastic and reconstructive surgery,
            fertility and IVF, and regenerative medicine. Reported savings run roughly 40-70% versus US
            cash prices. The trade-off is that quality varies clinic to clinic, so vetting (covered
            below) matters more than in a tightly regulated US market.
          </p>
        </div>
      </section>

      {/* Top procedures / clinics */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Top Procedures &amp; Verified Clinics</h2>
          <p className="text-gray-600 mb-8 text-sm">
            The clinics below are real, established providers in our medical-tourism directory. Pricing
            is an estimate that varies by case and may be out of date — request a written quote and
            confirm credentials directly with each clinic.
          </p>

          {/* Dental */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="text-2xl">🦷</span> Dental: Implants, All-on-4, Full-Mouth Rehab
            </h3>
            <p className="text-sm text-gray-700 mb-4">
              Dental is Tijuana&apos;s deepest category for Americans. Single implants are commonly
              quoted around <strong>$1,200-$1,850</strong> versus roughly $3,000-$5,000+ in the US, and
              All-on-4 full-arch cases around <strong>$12,000-$15,000</strong> versus $20,000-$30,000.
              Estimates only — materials and case complexity move the number.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="font-bold text-gray-900">Pacific Implant Center</div>
                <p className="text-sm text-gray-600 mt-1">
                  Premium clinic 5 minutes from the San Diego border, with surgeons trained at Harvard,
                  Loma Linda, and USC; 14 years in operation. Estimated ~$1,550-$1,850/implant.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="font-bold text-gray-900">Dental Brush</div>
                <p className="text-sm text-gray-600 mt-1">
                  ADA-member and BBB-rated clinic led by an NYU-trained director, using CEREC same-day
                  crown technology, 10-15 min from San Ysidro. Estimated ~$1,200-$1,500/implant.
                </p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <Link href="/guides/mexico-dental-guide" className="text-blue-600 hover:underline font-medium">
                Mexico Dental Guide →
              </Link>
              <Link href="/guides/all-on-4-dental-implants-mexico" className="text-blue-600 hover:underline font-medium">
                All-on-4 in Mexico →
              </Link>
            </div>
          </div>

          {/* Bariatric */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="text-2xl">⚖️</span> Bariatric: Gastric Sleeve &amp; Bypass
            </h3>
            <p className="text-sm text-gray-700 mb-4">
              Tijuana is one of the largest bariatric destinations in the world. All-inclusive gastric
              sleeve packages are frequently quoted from about <strong>$4,200-$6,500</strong> versus
              roughly $15,000-$25,000 self-pay in the US, typically bundling the hospital stay, surgeon
              and anesthesia fees, transport, and aftercare. Bypass and revision cases cost more.
              Estimates only — confirm with the provider.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="font-bold text-gray-900">Mexico Bariatric Center</div>
                <p className="text-sm text-gray-600 mt-1">
                  One of the most established programs, with 27,000+ procedures performed and its own
                  Hospital Azar (opened 2024). Strong aftercare program. Estimated sleeve from ~$4,500.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="font-bold text-gray-900">ALO Bariatrics</div>
                <p className="text-sm text-gray-600 mt-1">
                  All-inclusive flat-fee pricing with locations in Tijuana, Guadalajara, and Puerto
                  Vallarta (beach recovery option). Estimated from ~$4,700.
                </p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <Link href="/guides/gastric-sleeve-mexico-safety" className="text-blue-600 hover:underline font-medium">
                Gastric Sleeve Safety Guide →
              </Link>
              <Link href="/weight-loss" className="text-blue-600 hover:underline font-medium">
                Compare Weight-Loss Options →
              </Link>
            </div>
          </div>

          {/* Stem cell / regenerative */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="text-2xl">💉</span> Regenerative Medicine &amp; Stem Cell Therapy
            </h3>
            <p className="text-sm text-gray-700 mb-4">
              Tijuana clinics offer stem cell and regenerative protocols that are not available in the
              US under FDA rules. Pricing varies widely by condition and cell count — commonly quoted
              from roughly <strong>$4,500</strong> up to <strong>$28,000+</strong>. These therapies are
              experimental and not FDA-approved (see the regulatory notice above). Verify the clinic
              holds a COFEPRIS-certified lab before considering treatment.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="font-bold text-gray-900">Regenamex</div>
                <p className="text-sm text-gray-600 mt-1">
                  Tijuana clinic near the San Diego border that states it follows COFEPRIS
                  guidelines and uses mesenchymal stem cells (Wharton&apos;s jelly and placental),
                  processed through a partner biotech lab. Confirm licensing, sourcing, and batch
                  testing directly.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="font-bold text-gray-900">Compare US vs Mexico first</div>
                <p className="text-sm text-gray-600 mt-1">
                  Before booking, read how the regulatory and cost picture differs across the border so
                  you know what you are trading off.
                </p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <Link href="/guides/us-vs-mexico-stem-cells" className="text-blue-600 hover:underline font-medium">
                US vs Mexico Stem Cells →
              </Link>
              <Link href="/stem-cells" className="text-blue-600 hover:underline font-medium">
                Browse Stem Cell Clinics →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cost comparison table */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Tijuana vs US: Estimated Cost Comparison</h2>
        <p className="text-sm text-gray-600 mb-6">
          Figures are estimates compiled from clinic and industry sources; actual pricing varies by
          provider, materials, and case complexity. Always request a written quote.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Procedure</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Tijuana (est.)</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">US (est.)</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Typical Savings</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Single Dental Implant</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">$1,200 - $1,850</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">$3,000 - $5,000+</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~60-70%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">All-on-4 (per arch)</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">$12,000 - $15,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">$20,000 - $30,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~40-55%</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Gastric Sleeve (all-inclusive)</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">$4,200 - $6,500</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">$15,000 - $25,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~70-75%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Stem Cell Therapy (by protocol)</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">$4,500 - $28,000+</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Often restricted / experimental</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-blue-600">Varies</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600 mt-4">
          Note: Mexico packages often include hospital stay, transport, and follow-up; US prices
          usually do not. Compare what is included, not just the headline number.
        </p>
      </section>

      {/* Border crossing logistics */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Border Crossing &amp; Travel Logistics</h2>
          <div className="bg-white border border-blue-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-bold text-blue-900 mb-3">The Walk-Across Method (recommended)</h3>
            <ol className="text-sm text-gray-700 space-y-2 mb-0 list-decimal pl-5">
              <li><strong>Park on the US side</strong> at a San Ysidro border lot (~$10-$20/day).</li>
              <li><strong>Walk to PedWest or PedEast</strong> pedestrian crossing and cross into Mexico (rarely questioned going in).</li>
              <li><strong>Clinic pickup:</strong> most established clinics meet you at the crossing with a driver.</li>
              <li><strong>Returning to the US:</strong> a passport or passport card is required; ask your clinic for a Medical Fast-Pass to use the dedicated medical lane.</li>
            </ol>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <h4 className="font-bold text-gray-900 mb-2">Documents</h4>
              <ul className="text-sm text-gray-600 space-y-1 mb-0">
                <li>• Passport or passport card (required to return)</li>
                <li>• Printed clinic booking confirmation</li>
                <li>• Travel insurance documents</li>
                <li>• Medications in original bottles</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <h4 className="font-bold text-gray-900 mb-2">Driving in? Think twice</h4>
              <p className="text-sm text-gray-600 mb-0">
                Taking a US car across requires separate Mexican auto insurance and can mean a 1-3 hour
                northbound wait at peak times. Walking across and using clinic transport is usually
                simpler and faster.
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            For a full packing list and trip timeline, see the{' '}
            <Link href="/guides/mexico-medical-tourism-planner" className="text-blue-600 hover:underline font-medium">
              Mexico Medical Tourism Trip Planner
            </Link>.
          </p>
        </div>
      </section>

      {/* Safety + how to vet */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Safety &amp; How to Vet a Clinic</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            Tijuana&apos;s medical-tourism zones are generally safe in daytime, and millions cross for
            care each year. The bigger variable is clinical quality, which differs sharply between a
            well-credentialed center and a low-cost mill. Use a consistent checklist before you pay a
            deposit.
          </p>
          <h3>For Any Provider</h3>
          <ul>
            <li>Confirm the surgeon or dentist is <strong>board-certified</strong> and that their Mexican professional license is valid (searchable on Mexico&apos;s National Registry of Professions).</li>
            <li>Ask for the specific hospital or facility where care is delivered and check its accreditation.</li>
            <li>Get a <strong>written, itemized quote</strong> — what is and is not included.</li>
            <li>Read real reviews across multiple independent sources, not just the clinic&apos;s own site.</li>
          </ul>
          <h3>For Bariatric Surgery</h3>
          <ul>
            <li>Look for surgeon membership in <strong>ASMBS or IFSO</strong> and high dedicated case volume.</li>
            <li>Prefer hospitals with <strong>JCI accreditation</strong> or a Center of Excellence designation. Accreditation programs like MBSAQIP exist precisely because they are associated with lower complication rates.</li>
          </ul>
          <h3>For Dental</h3>
          <ul>
            <li>Look for <strong>ADA-member</strong> dentists and US or international training.</li>
            <li>Ask which implant system is used and what the guarantee covers, including return-travel terms for remedial work.</li>
          </ul>
          <h3>For Stem Cell / Regenerative Care</h3>
          <ul>
            <li>Verify a <strong>COFEPRIS-certified lab</strong>, ask about cell sourcing and batch testing, and confirm hospital backup for emergencies.</li>
            <li>Remember these therapies are experimental and not FDA-approved; discuss with a qualified physician first.</li>
          </ul>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 not-prose my-6">
            <p className="text-sm text-yellow-800 mb-0">
              <strong>Red flags:</strong> any clinic that guarantees results, claims a &quot;cure,&quot;
              pressures a same-day deposit, refuses a written quote, or will not name the operating
              surgeon and hospital. Legitimate providers set realistic expectations and discuss risks.
            </p>
          </div>
        </div>
      </section>

      {/* Sample itinerary */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Sample Itinerary: Bariatric Surgery (3-5 Days)</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-bold text-gray-900 mb-1">Before You Go (3-4 weeks)</h4>
              <p className="text-sm text-gray-700 mb-0">Book and confirm, get travel insurance, start any pre-op diet, arrange time off and a companion if having surgery.</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-bold text-gray-900 mb-1">Day 1 — Arrival</h4>
              <p className="text-sm text-gray-700 mb-0">Cross at San Ysidro, clinic pickup, meet the surgeon, sign consent, pre-op labs and imaging.</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-bold text-gray-900 mb-1">Day 2 — Surgery</h4>
              <p className="text-sm text-gray-700 mb-0">Procedure in the morning, recovery room, then an overnight hospital stay with nursing care.</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-bold text-gray-900 mb-1">Days 3-4 — Recovery</h4>
              <p className="text-sm text-gray-700 mb-0">Transfer to a recovery hotel, liquid diet, supervised walking, daily check-ins with the medical team.</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-bold text-gray-900 mb-1">Day 5 — Return</h4>
              <p className="text-sm text-gray-700 mb-0">Final surgeon check, medications and diet plan, cross back at San Ysidro using the medical lane, ongoing follow-up by WhatsApp.</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-6">
            Dental implant cases are usually shorter (same-day to a few days), but full-mouth implant
            work often needs two trips spaced 3-6 months apart.
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

      {/* Related guides */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/guides/mexico-medical-tourism-planner" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇲🇽</span>
              <div>
                <div className="font-bold text-gray-900">Mexico Trip Planner</div>
                <div className="text-sm text-gray-600">Border crossing, packing list, timeline</div>
              </div>
            </div>
          </Link>
          <Link href="/guides/los-algodones-dental-guide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🦷</span>
              <div>
                <div className="font-bold text-gray-900">Los Algodones Dental Guide</div>
                <div className="text-sm text-gray-600">&quot;Molar City&quot; — dental-only border town</div>
              </div>
            </div>
          </Link>
          <Link href="/guides/us-vs-mexico-stem-cells" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🆚</span>
              <div>
                <div className="font-bold text-gray-900">US vs Mexico Stem Cells</div>
                <div className="text-sm text-gray-600">Cost, legality, and safety compared</div>
              </div>
            </div>
          </Link>
          <Link href="/destinations/mexico" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🌎</span>
              <div>
                <div className="font-bold text-gray-900">Mexico Destination Hub</div>
                <div className="text-sm text-gray-600">All Mexico cities, procedures, and clinics</div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Medical + affiliate disclaimer */}
      <section className="mx-auto max-w-4xl px-4 py-8">
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-5 text-sm leading-relaxed text-amber-900">
          <p className="mb-2">
            <strong>Medical disclaimer:</strong> This page is general information, not medical advice.
            Clinic details are aggregated from public sources and prices are estimates that may be out
            of date &mdash; confirm current pricing, services, and provider credentials directly with
            each clinic. Talk to a licensed clinician before starting any procedure or treatment.
          </p>
          <p className="mb-0">
            <strong>Affiliate disclosure:</strong> VitalityScout may earn a commission from some links,
            at no additional cost to you. This never affects which providers we list or how we describe
            them.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-8">
        <EmailCaptureCard
          title="Get Our Tijuana Clinic Vetting Checklist"
          description="Dental, bariatric, and stem cell: how to verify credentials, accreditation, and pricing before you cross."
          source="guide_tijuana_medical_tourism"
        />
      </div>

      <Footer />
    </main>
  );
}
