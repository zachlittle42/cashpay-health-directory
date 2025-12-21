import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Telehealth & Cash-Pay Services | Labs, GLP-1, TRT | VitalityScout',
  description: 'Explore cash-pay telehealth services shipped to your door. Compare at-home lab testing, GLP-1 weight loss programs, TRT, and more—no insurance needed.',
};

export default function TelehealthHub() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <div className="text-5xl mb-4">💊</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Telehealth & Cash-Pay Services
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Healthcare delivered to your door. No doctor visits, no insurance hassles—just transparent pricing and convenient care.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">Ship to Your Door</span>
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">No Insurance Needed</span>
            <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full">Transparent Pricing</span>
          </div>
        </div>
      </section>

      {/* What Is Telehealth */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <h2>What Is Cash-Pay Telehealth?</h2>
          <p>
            Cash-pay telehealth (also called direct-to-consumer telemedicine) lets you access healthcare services online and pay directly—no insurance company in the middle. You consult with providers virtually, get prescriptions or lab orders, and have everything shipped to your home.
          </p>
          <p>
            Unlike traditional telehealth covered by insurance (which still requires referrals, authorizations, and copays), cash-pay telehealth is straightforward: you pay a transparent price, you get the service. That's it.
          </p>

          <h3>How It Works</h3>
          <ol>
            <li><strong>Choose a service:</strong> Browse labs, medications, or treatments you need</li>
            <li><strong>Online consultation:</strong> Fill out a health questionnaire or have a video visit with a licensed provider</li>
            <li><strong>Get your prescription/order:</strong> Provider reviews and approves (if medically appropriate)</li>
            <li><strong>Delivered to your door:</strong> Medications shipped from pharmacy, or lab kit mailed to you</li>
            <li><strong>Ongoing support:</strong> Follow-up consultations via app/portal as needed</li>
          </ol>

          <h3>Why People Choose It</h3>
          <div className="grid gap-6 md:grid-cols-2 my-8 not-prose">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h4 className="font-bold text-green-800 mb-3">Cost Savings</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Telehealth visits average <strong>$30-40</strong> vs $100+ in-person</li>
                <li>• Lab testing <strong>50-80% cheaper</strong> than through insurance</li>
                <li>• <strong>61% reduction</strong> in monthly healthcare expenses for users</li>
                <li>• No surprise bills or hidden fees</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h4 className="font-bold text-blue-800 mb-3">Convenience</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• <strong>No waiting rooms</strong> or taking time off work</li>
                <li>• Same-day or next-day consultations</li>
                <li>• Medications shipped in 3-7 days</li>
                <li>• Access from anywhere in the US</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Browse Telehealth Services
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/labs"
              className="group bg-white rounded-lg border-2 border-gray-200 p-6 hover:border-blue-400 hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-3">🧪</div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 mb-2">
                At-Home Lab Testing
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive blood panels, hormone testing, and biomarker analysis—no doctor visit required.
              </p>
              <div className="text-sm text-gray-500 mb-3">
                <strong>Pricing:</strong> $17-300/month
              </div>
              <span className="text-blue-600 font-medium">View Providers →</span>
            </Link>

            <Link
              href="/glp1"
              className="group bg-white rounded-lg border-2 border-gray-200 p-6 hover:border-blue-400 hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-3">💊</div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 mb-2">
                GLP-1 Programs
              </h3>
              <p className="text-gray-600 mb-4">
                Semaglutide and tirzepatide for weight loss. Medication shipped monthly with provider support.
              </p>
              <div className="text-sm text-gray-500 mb-3">
                <strong>Pricing:</strong> $199-499/month
              </div>
              <span className="text-blue-600 font-medium">View Providers →</span>
            </Link>

            <Link
              href="/trt"
              className="group bg-white rounded-lg border-2 border-gray-200 p-6 hover:border-blue-400 hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-3">💪</div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 mb-2">
                TRT & Hormones
              </h3>
              <p className="text-gray-600 mb-4">
                Testosterone replacement therapy and hormone optimization with ongoing monitoring.
              </p>
              <div className="text-sm text-gray-500 mb-3">
                <strong>Pricing:</strong> $99-450/month
              </div>
              <span className="text-blue-600 font-medium">View Providers →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* How to Choose */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <h2>How to Choose a Telehealth Provider</h2>
          <p>
            Not all telehealth services are created equal. Here's what separates good ones from mediocre:
          </p>

          <h3>✓ Must-Haves</h3>
          <ul>
            <li><strong>Licensed providers:</strong> Board-certified physicians or NPs licensed in your state</li>
            <li><strong>Transparent pricing:</strong> Upfront costs, no surprise bills</li>
            <li><strong>Real pharmacies:</strong> Partner with legitimate US pharmacies, not sketchy overseas operations</li>
            <li><strong>Ongoing support:</strong> Not just a one-time prescription—access to providers for questions</li>
            <li><strong>Lab monitoring:</strong> For medications like TRT or GLP-1s, regular bloodwork is essential</li>
          </ul>

          <h3>🚩 Red Flags</h3>
          <ul>
            <li>Prescribing without proper medical evaluation</li>
            <li>No way to contact a real provider</li>
            <li>"Too good to be true" pricing (way below market)</li>
            <li>Pressure tactics or auto-renewals you can't cancel</li>
            <li>No clear licensing information for providers</li>
          </ul>
        </div>
      </section>

      {/* Related Guides */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Related Guides & Resources
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Link href="/guides/glp1-weight-loss-complete-guide" className="bg-white rounded-lg border border-blue-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3">
                <span className="text-3xl">💊</span>
                <div>
                  <div className="font-bold text-gray-900 mb-1">GLP-1 for Weight Loss: Complete Guide</div>
                  <div className="text-sm text-gray-600">How semaglutide works, results, side effects, and costs</div>
                </div>
              </div>
            </Link>

            <Link href="/guides/at-home-lab-testing-guide" className="bg-white rounded-lg border border-blue-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🧪</span>
                <div>
                  <div className="font-bold text-gray-900 mb-1">At-Home Lab Testing Guide</div>
                  <div className="text-sm text-gray-600">How it works, accuracy, and what to test</div>
                </div>
              </div>
            </Link>

            <Link href="/faq/glp1" className="bg-white rounded-lg border border-blue-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3">
                <span className="text-3xl">❓</span>
                <div>
                  <div className="font-bold text-gray-900 mb-1">GLP-1 FAQ</div>
                  <div className="text-sm text-gray-600">Insurance coverage, side effects, and common questions</div>
                </div>
              </div>
            </Link>

            <Link href="/faq/labs" className="bg-white rounded-lg border border-blue-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3">
                <span className="text-3xl">❓</span>
                <div>
                  <div className="font-bold text-gray-900 mb-1">Lab Testing FAQ</div>
                  <div className="text-sm text-gray-600">Fasting, accuracy, interpreting results</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
