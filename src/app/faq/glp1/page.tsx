import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GLP-1 FAQ: Common Questions About Semaglutide & Weight Loss (2024)',
  description: 'Answers to common questions about GLP-1 medications for weight loss. Insurance coverage, side effects, stopping, and more.',
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

export default function GLP1FAQ() {
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
            <span className="text-4xl">💊</span>
            <h1 className="text-4xl font-bold text-gray-900">
              GLP-1 Weight Loss FAQ
            </h1>
          </div>
          <p className="text-xl text-gray-600">
            Common questions about semaglutide, tirzepatide, and GLP-1 medications for weight loss.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12">
        <FAQItem
          question="Will my insurance cover GLP-1 medications for weight loss?"
          answer={
            <>
              <p>
                <strong>Maybe, but probably not.</strong> Here&apos;s the breakdown:
              </p>
              <ul>
                <li><strong>Wegovy & Zepbound:</strong> FDA-approved for weight loss, but many insurers don&apos;t cover them or require extensive prior authorization</li>
                <li><strong>Ozempic & Mounjaro:</strong> Only FDA-approved for diabetes. Using them for weight loss is off-label, and most insurers won&apos;t cover off-label use</li>
                <li><strong>Compounded semaglutide:</strong> Never covered by insurance (not FDA-approved)</li>
              </ul>
              <p>
                Even when covered, many plans require:</p>
                <ul>
                <li>BMI ≥30 or BMI ≥27 with comorbidities</li>
                <li>6 months of supervised diet attempts</li>
                <li>Continued weight loss to maintain coverage</li>
              </ul>
              <p>
                This is why cash-pay telehealth at $199-499/month is popular—it&apos;s often simpler than fighting insurance.
              </p>
            </>
          }
        />

        <FAQItem
          question="What happens when I stop taking GLP-1 medications?"
          answer={
            <>
              <p>
                <strong>Most people regain weight.</strong> Studies show that within 12 months of stopping, people regain about 2/3 of the weight they lost.
              </p>
              <p>
                Why? Because these medications:
              </p>
              <ul>
                <li>Artificially suppress appetite—when you stop, hunger returns</li>
                <li>Don&apos;t cure the underlying factors that led to weight gain</li>
                <li>Work best as ongoing treatment, like blood pressure meds</li>
              </ul>
              <p>
                <strong>Strategies to minimize regain:</strong>
              </p>
              <ul>
                <li>Build sustainable eating habits while on the medication</li>
                <li>Add strength training to increase metabolic rate</li>
                <li>Address psychological/emotional eating patterns</li>
                <li>Consider maintenance doses rather than stopping completely</li>
                <li>Transition gradually rather than abrupt cessation</li>
              </ul>
            </>
          }
        />

        <FAQItem
          question="Can I drink alcohol while taking GLP-1s?"
          answer={
            <>
              <p>
                <strong>Yes, but with caution.</strong> GLP-1s don&apos;t directly interact with alcohol, but:
              </p>
              <ul>
                <li>Alcohol stays in your stomach longer (delayed gastric emptying)</li>
                <li>You might get drunk faster and feel worse</li>
                <li>Alcohol on a sensitive stomach can cause severe nausea</li>
                <li>Alcohol is empty calories that work against weight loss</li>
              </ul>
              <p>
                Many people find they naturally drink less on GLP-1s—alcohol becomes less appealing and hits harder.
              </p>
            </>
          }
        />

        <FAQItem
          question="How long until I see weight loss results?"
          answer={
            <>
              <p>
                <strong>Timeline varies, but here&apos;s typical:</strong>
              </p>
              <ul>
                <li><strong>Weeks 1-4:</strong> 2-5 lbs (starting at low dose, body adjusting)</li>
                <li><strong>Months 2-3:</strong> 1-2 lbs per week as dose increases</li>
                <li><strong>Months 4-12:</strong> Peak weight loss period, 1-2 lbs per week average</li>
                <li><strong>Months 12-18:</strong> Slowing or plateauing, reaching maximum effect</li>
              </ul>
              <p>
                <strong>Average total weight loss:</strong> 10-15% of body weight in real-world use (clinical trials showed 15-22%, but real-world is slightly less).
              </p>
            </>
          }
        />

        <FAQItem
          question="Do the injections hurt?"
          answer={
            <>
              <p>
                <strong>Most people find them painless or barely noticeable.</strong> The needles are very small (similar to insulin pens) and you inject into fatty tissue (stomach, thigh).
              </p>
              <p>
                Tips to minimize discomfort:
              </p>
              <ul>
                <li>Let the medication come to room temperature first</li>
                <li>Use a different injection site each time</li>
                <li>Pinch skin properly and inject smoothly</li>
                <li>Don&apos;t inject into a muscle (should be subcutaneous fat)</li>
              </ul>
              <p>
                Most people get used to it quickly—it becomes routine like brushing your teeth.
              </p>
            </>
          }
        />

        <FAQItem
          question="Can I take GLP-1s while breastfeeding or pregnant?"
          answer={
            <>
              <p>
                <strong>No.</strong> GLP-1 medications are contraindicated during pregnancy and breastfeeding. If you&apos;re planning to become pregnant, you should stop GLP-1s at least 2 months before trying to conceive.
              </p>
              <p>
                There&apos;s not enough safety data on use during pregnancy, and the potential risks to fetal development aren&apos;t worth it.
              </p>
            </>
          }
        />

        <FAQItem
          question="What's the difference between Ozempic and Wegovy?"
          answer={
            <>
              <p>
                <strong>Same active ingredient (semaglutide), different FDA approvals and doses:</strong>
              </p>
              <ul>
                <li><strong>Ozempic:</strong> Approved for type 2 diabetes. Max dose 2mg/week. Often prescribed off-label for weight loss.</li>
                <li><strong>Wegovy:</strong> Approved specifically for weight loss. Max dose 2.4mg/week.</li>
              </ul>
              <p>
                In practice, they&apos;re the same medication. Wegovy just comes in higher doses specifically for weight loss. Many insurers will cover Ozempic for diabetes but not Wegovy for weight loss, which is why off-label Ozempic prescriptions are common.
              </p>
            </>
          }
        />

        <FAQItem
          question="Can I just use GLP-1s without changing my diet?"
          answer={
            <>
              <p>
                <strong>Technically yes, but you&apos;d be wasting money and risking your health.</strong>
              </p>
              <p>
                GLP-1s reduce your appetite and make it physically easier to eat less. But:
              </p>
              <ul>
                <li>If you don&apos;t eat enough protein, you&apos;ll lose significant muscle mass</li>
                <li>Without nutrition focus, you might become deficient in key nutrients</li>
                <li>Weight loss will be slower and less impressive</li>
                <li>When you stop the medication, bad habits = rapid regain</li>
              </ul>
              <p>
                <strong>Minimum nutritional requirements while on GLP-1s:</strong>
              </p>
              <ul>
                <li>80-100g protein daily (non-negotiable for muscle preservation)</li>
                <li>Multivitamin for nutrients you&apos;re missing from low food volume</li>
                <li>Adequate hydration (easy to forget when not hungry)</li>
              </ul>
            </>
          }
        />

        {/* Related Resources */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Learn More About GLP-1s</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/guides/glp1-weight-loss-complete-guide"
              className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
            >
              Read Full GLP-1 Guide
            </Link>
            <Link
              href="/glp1"
              className="inline-block rounded-lg border-2 border-blue-600 px-6 py-3 font-medium text-blue-600 hover:bg-blue-50"
            >
              Compare GLP-1 Providers
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
