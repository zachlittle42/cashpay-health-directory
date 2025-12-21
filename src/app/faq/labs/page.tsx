import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lab Testing FAQ: At-Home Blood Tests & Direct-to-Consumer Labs (2024)',
  description: 'Common questions about at-home lab testing. Accuracy, what to test, insurance, and interpreting your results.',
};

function FAQItem({ question, answer }: { question: string; answer: React.ReactNode }) {
  return (
    <details className="group border-b border-gray-200 py-6">
      <summary className="flex cursor-pointer items-start justify-between text-lg font-semibold text-gray-900 hover:text-blue-600">
        <span className="pr-4">{question}</span>
        <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
      </summary>
      <div className="mt-4 text-gray-700 prose prose-sm max-w-none">
        {answer}
      </div>
    </details>
  );
}

export default function LabsFAQ() {
  return (
    <main className="min-h-screen bg-white">
      <header className="border-b border-gray-200 px-4 py-4">
        <div className="mx-auto max-w-4xl">
          <Link href="/faq" className="text-sm text-blue-600 hover:underline">
            ← Back to all FAQs
          </Link>
        </div>
      </header>

      <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🧪</span>
            <h1 className="text-4xl font-bold text-gray-900">
              Lab Testing FAQ
            </h1>
          </div>
          <p className="text-xl text-gray-600">
            Common questions about at-home blood tests and direct-to-consumer lab services.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12">
        <FAQItem
          question="Are at-home lab tests as accurate as tests ordered by my doctor?"
          answer={
            <>
              <p><strong>Yes—if they use professional labs like Quest or LabCorp.</strong></p>
              <p>Services like Marek Health, Function Health, and InsideTracker send you to the same Quest/LabCorp facilities your doctor would use. The samples are processed identically. Accuracy is the same.</p>
              <p><strong>Finger-prick at-home kits</strong> (Everlywell, LetsGetChecked) are slightly less accurate (±3-5% variance) but fine for routine screening and trending over time.</p>
            </>
          }
        />

        <FAQItem
          question="Do I need to fast before lab tests?"
          answer={
            <>
              <p><strong>Depends on what you're testing:</strong></p>
              <ul>
                <li><strong>Fasting required (8-12 hours):</strong> Lipid panel, fasting glucose, insulin, comprehensive metabolic panels</li>
                <li><strong>No fasting needed:</strong> Hormones (testosterone, estrogen), thyroid (TSH), vitamin D, CBC</li>
                <li><strong>Morning best:</strong> Testosterone and cortisol (they fluctuate throughout the day)</li>
              </ul>
              <p>Always check the specific requirements for your panel. Most services send detailed instructions.</p>
            </>
          }
        />

        <FAQItem
          question="What labs should I get as a baseline?"
          answer={
            <>
              <p><strong>Start with these core markers (~$150-250 total):</strong></p>
              <ul>
                <li><strong>Complete Blood Count (CBC):</strong> Red/white blood cells, overall health</li>
                <li><strong>Comprehensive Metabolic Panel (CMP):</strong> Kidney, liver function, electrolytes</li>
                <li><strong>Lipid Panel:</strong> Cholesterol (total, LDL, HDL), triglycerides</li>
                <li><strong>HbA1c:</strong> 3-month average blood sugar</li>
                <li><strong>TSH:</strong> Thyroid function</li>
                <li><strong>Vitamin D:</strong> Most people are deficient</li>
              </ul>
              <p>This gives you a solid baseline. Add hormones (testosterone, estrogen) if optimizing performance or addressing symptoms.</p>
            </>
          }
        />

        <FAQItem
          question="Can I get lab tests without insurance?"
          answer={
            <>
              <p><strong>Yes! That&apos;s the entire point of these services.</strong></p>
              <p>You don&apos;t need insurance, a doctor&apos;s referral, or pre-authorization. Just order, get tested, and receive results. Most services don&apos;t involve insurance at all—you pay cash/card directly.</p>
              <p><strong>However:</strong> You CAN use HSA/FSA funds for lab testing, since it&apos;s a qualified medical expense.</p>
            </>
          }
        />

        <FAQItem
          question="How often should I get labs done?"
          answer={
            <>
              <p><strong>Depends on your situation:</strong></p>
              <ul>
                <li><strong>Healthy baseline:</strong> Once per year</li>
                <li><strong>Optimizing/making changes:</strong> Every 3-6 months to track progress</li>
                <li><strong>On medications (TRT, thyroid, etc.):</strong> Every 3-6 months or as prescribed</li>
                <li><strong>Monitoring chronic conditions:</strong> Every 3 months or as recommended</li>
              </ul>
              <p>Testing too frequently is wasteful—most markers don&apos;t change meaningfully week-to-week or even month-to-month.</p>
            </>
          }
        />

        <FAQItem
          question="What do I do if my results show something abnormal?"
          answer={
            <>
              <p><strong>It depends on how abnormal:</strong></p>
              <p><strong>Slightly out of range:</strong></p>
              <ul>
                <li>Don&apos;t panic—single values can fluctuate</li>
                <li>Retest in a few weeks to confirm</li>
                <li>Consider context (diet, sleep, stress before the test)</li>
                <li>Services like Marek include physician consultation to interpret</li>
              </ul>
              <p><strong>Significantly abnormal or concerning values:</strong></p>
              <ul>
                <li>See a doctor ASAP</li>
                <li>Bring your lab results with you</li>
                <li>Don&apos;t try to self-treat serious abnormalities</li>
              </ul>
              <p>At-home testing is great for optimization and tracking, but not a replacement for medical diagnosis when something might be seriously wrong.</p>
            </>
          }
        />

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Compare Lab Testing Services</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/guides/at-home-lab-testing-guide" className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700">
              Read Full Lab Testing Guide
            </Link>
            <Link href="/labs" className="inline-block rounded-lg border-2 border-blue-600 px-6 py-3 font-medium text-blue-600 hover:bg-blue-50">
              View Lab Providers
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-200 px-4 py-8">
        <div className="mx-auto max-w-4xl text-center">
          <Link href="/faq" className="text-blue-600 hover:underline text-sm">
            ← All FAQs
          </Link>
        </div>
      </footer>
    </main>
  );
}
