import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Local Cash-Pay Clinics | DEXA, VO2 Max, IV Therapy | VitalityScout',
  description: 'Find local independent clinics offering cash-pay services. DEXA scans, VO2 max testing, IV therapy, and longevity clinics near you—no insurance needed.',
};

export default function LocalClinicsHub() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Local Cash-Pay Clinics & Services',
    description: 'Find local independent clinics offering DEXA scans, VO2 max testing, IV therapy, and longevity services without insurance.',
    url: 'https://vitalityscout.com/local-clinics',
    mainEntity: [
      { '@type': 'MedicalTest', name: 'DEXA Body Composition Scan' },
      { '@type': 'MedicalTest', name: 'VO2 Max Testing' },
      { '@type': 'MedicalProcedure', name: 'IV Vitamin Therapy' },
      { '@type': 'MedicalClinic', name: 'Longevity Clinics' }
    ]
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-white px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <div className="text-5xl mb-4">📍</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Local Cash-Pay Clinics & Services
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Independent clinics offering specialized testing and optimization services without insurance complexity.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">Walk-In Welcome</span>
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">No Referral Needed</span>
            <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full">Transparent Pricing</span>
          </div>
        </div>
      </section>

      {/* What Are Local Cash-Pay Clinics */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <h2>What Are Local Cash-Pay Clinics?</h2>
          <p>
            Local cash-pay clinics are independent facilities that offer specialized health services on a direct-pay basis. Unlike traditional doctor visits that bill insurance, these clinics focus on specific services—body composition testing, metabolic assessments, IV therapy, preventive care—and charge transparent, upfront prices.
          </p>
          <p>
            Think of them as the specialized boutiques of healthcare. They do one thing really well, skip the insurance paperwork, and pass the savings to you.
          </p>

          <h3>Common Models</h3>
          <ul>
            <li><strong>Per-Service:</strong> Pay for each visit (DEXA scan, VO2 max test, etc.)</li>
            <li><strong>Membership/DPC:</strong> Monthly fee for unlimited access to primary care (Direct Primary Care model)</li>
            <li><strong>Package Deals:</strong> Discounted bundles (4 DEXA scans for $160 vs $45 each)</li>
          </ul>

          <h3>Why Choose Local Cash-Pay?</h3>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-6 not-prose">
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✓ <strong>Skip insurance:</strong> No pre-authorization, referrals, or claim denials</li>
              <li>✓ <strong>Predictable costs:</strong> Know the price before you go</li>
              <li>✓ <strong>Specialized expertise:</strong> Staff focused on specific services, not generalists</li>
              <li>✓ <strong>Faster access:</strong> Same-day or next-day appointments common</li>
              <li>✓ <strong>Data you own:</strong> Results emailed directly to you, not buried in insurance portal</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Browse Local Services
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <Link
              href="/dexa"
              className="group bg-white rounded-lg border-2 border-gray-200 p-6 hover:border-green-400 hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-3">📊</div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 mb-2">
                DEXA Scans
              </h3>
              <p className="text-gray-600 mb-4">
                Precise body composition and bone density testing. Track fat, muscle, and visceral fat accurately.
              </p>
              <div className="text-sm text-gray-500 mb-3">
                <strong>Pricing:</strong> $40-150 per scan
              </div>
              <span className="text-green-600 font-medium">View Providers →</span>
            </Link>

            <Link
              href="/vo2max"
              className="group bg-white rounded-lg border-2 border-gray-200 p-6 hover:border-green-400 hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-3">🫀</div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 mb-2">
                VO2 Max Testing
              </h3>
              <p className="text-gray-600 mb-4">
                Metabolic and cardiovascular fitness assessment. Measure your true cardio capacity.
              </p>
              <div className="text-sm text-gray-500 mb-3">
                <strong>Pricing:</strong> Coming soon
              </div>
              <span className="text-green-600 font-medium">View Providers →</span>
            </Link>

            <Link
              href="/iv"
              className="group bg-white rounded-lg border-2 border-gray-200 p-6 hover:border-green-400 hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-3">💧</div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 mb-2">
                IV Therapy
              </h3>
              <p className="text-gray-600 mb-4">
                Vitamin infusions, hydration therapy, and wellness IV treatments at local clinics.
              </p>
              <div className="text-sm text-gray-500 mb-3">
                <strong>Pricing:</strong> Coming soon
              </div>
              <span className="text-green-600 font-medium">View Providers →</span>
            </Link>

            <Link
              href="/longevity"
              className="group bg-white rounded-lg border-2 border-gray-200 p-6 hover:border-green-400 hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-3">⏳</div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 mb-2">
                Longevity Clinics
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive health optimization and preventive medicine with advanced testing.
              </p>
              <div className="text-sm text-gray-500 mb-3">
                <strong>Pricing:</strong> Coming soon
              </div>
              <span className="text-green-600 font-medium">View Providers →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Guide */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <div className="bg-green-50 border border-green-200 rounded-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Related Guide</h3>
          <Link href="/guides/dexa-scan-guide" className="flex items-start gap-4 hover:opacity-80 transition-opacity">
            <span className="text-4xl">📊</span>
            <div>
              <div className="font-bold text-gray-900 mb-1 text-lg">DEXA Scan: Complete Guide</div>
              <div className="text-gray-600">What DEXA measures, why it beats BMI, and how to use it to track real fitness progress.</div>
            </div>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
