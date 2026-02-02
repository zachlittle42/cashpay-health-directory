import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Medical Tourism FAQ: Safety, Planning & What to Expect (2024)',
  description: 'Common questions about medical tourism. Safety abroad, choosing facilities, planning your trip, and follow-up care.',
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

export default function MedicalTourismFAQ() {
  return (
    <main className="min-h-screen bg-white">
      <header className="border-b border-gray-200 px-4 py-4">
        <div className="mx-auto max-w-4xl">
          <Link href="/faq" className="text-sm text-blue-600 hover:underline">
            ← Back to all FAQs
          </Link>
        </div>
      </header>

      <section className="bg-gradient-to-b from-purple-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">✈️</span>
            <h1 className="text-4xl font-bold text-gray-900">
              Medical Tourism FAQ
            </h1>
          </div>
          <p className="text-xl text-gray-600">
            Common questions about getting medical procedures abroad.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12">
        <FAQItem
          question="How do I know if a foreign clinic is legitimate?"
          answer={
            <>
              <p>Look for these credentials (non-negotiable):</p>
              <ul>
                <li><strong>JCI accreditation:</strong> International healthcare quality standard. Only ~1,200 facilities worldwide have this.</li>
                <li><strong>Local medical licensing:</strong> Must be properly licensed in their country (e.g., Turkish Ministry of Health, Mexican health authorities)</li>
                <li><strong>Surgeon credentials:</strong> Board-certified in their specialty, member of international societies (ISHRS for hair, ASMBS for bariatric, etc.)</li>
                <li><strong>Verifiable reviews:</strong> Real patient reviews on Trustpilot, Google, WhatClinic</li>
                <li><strong>Years in operation:</strong> Established facilities with long track records</li>
              </ul>
              <p>Request documentation and verify credentials independently—don&apos;t just trust what their website says.</p>
            </>
          }
        />

        <FAQItem
          question="What if I have complications after I return home?"
          answer={
            <>
              <p>Reputable facilities provide aftercare support:</p>
              <ul>
                <li><strong>24/7 hotline:</strong> Call or WhatsApp for urgent concerns</li>
                <li><strong>Remote monitoring:</strong> Send photos/videos for assessment</li>
                <li><strong>Revision coverage:</strong> Many cover fixing surgical complications within first year</li>
                <li><strong>US partner doctors:</strong> Some have relationships with US physicians for local follow-up</li>
              </ul>
              <p><strong>Before booking, confirm:</strong></p>
              <ul>
                <li>Their specific complication protocol in writing</li>
                <li>Who pays for revision if needed (travel, procedure, etc.)</li>
                <li>How long aftercare support lasts</li>
              </ul>
              <p>Also, find a local doctor willing to provide follow-up care before you go abroad.</p>
            </>
          }
        />

        <FAQItem
          question="Should I get travel insurance for medical tourism?"
          answer={
            <>
              <p><strong>Absolutely yes.</strong> But understand what it covers:</p>
              <ul>
                <li><strong>Travel insurance</strong> (like World Nomads): Covers trip cancellation, lost luggage, emergency evacuation if you get sick/injured during your trip</li>
                <li><strong>Complication insurance</strong> (like Med Jet): Covers medical evacuation if something goes wrong with your procedure</li>
              </ul>
              <p><strong>What standard travel insurance WON&apos;T cover:</strong></p>
              <ul>
                <li>The procedure itself</li>
                <li>Expected side effects or complications from elective surgery</li>
                <li>Follow-up treatment for known risks</li>
              </ul>
              <p>Some medical tourism facilities offer complication coverage as part of packages—verify what&apos;s included.</p>
            </>
          }
        />

        <FAQItem
          question="How much time off work do I need?"
          answer={
            <>
              <p>Depends on the procedure:</p>
              <ul>
                <li><strong>Dental:</strong> 3-7 days total, back to desk work immediately after returning</li>
                <li><strong>Hair transplant:</strong> 5-7 days trip, 1-2 weeks until looking normal, work from home recommended first week</li>
                <li><strong>Bariatric surgery:</strong> 2-4 weeks minimum (1 week in Mexico, 1-3 weeks recovery at home)</li>
                <li><strong>Plastic surgery:</strong> 2-4 weeks depending on procedure (facial: 2 weeks, body: 3-4 weeks)</li>
              </ul>
              <p>Remote work helps—many people work from their hotel during recovery.</p>
            </>
          }
        />

        <FAQItem
          question="Can I bring someone with me?"
          answer={
            <>
              <p><strong>Yes, and it&apos;s often a good idea.</strong> Most packages include:</p>
              <ul>
                <li>Companion accommodation in your hotel room</li>
                <li>Transportation for your companion</li>
                <li>Translator services for both of you</li>
              </ul>
              <p><strong>Benefits of bringing someone:</strong></p>
              <ul>
                <li>Help with recovery and daily tasks</li>
                <li>Emotional support</li>
                <li>Extra eyes/ears during consultations</li>
                <li>Help navigating foreign country</li>
              </ul>
              <p>You&apos;ll just pay for their flights and meals. Some people turn it into a vacation for both.</p>
            </>
          }
        />

        {/* Stem Cell Resources */}
        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 mt-12">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Popular: Stem Cell Therapy Abroad</h3>
          <p className="text-gray-700 mb-4">
            Many Americans travel to Mexico and Panama for stem cell treatments not available in the US.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/stem-cells" className="inline-block rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
              Stem Cell Hub
            </Link>
            <Link href="/stem-cells/mexico" className="inline-block rounded-lg border-2 border-indigo-600 px-4 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-50">
              Mexico Stem Cells
            </Link>
            <Link href="/stem-cells/panama" className="inline-block rounded-lg border-2 border-indigo-600 px-4 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-50">
              Panama Stem Cells
            </Link>
            <Link href="/guides/mexico-stem-cell-guide" className="inline-block rounded-lg border-2 border-indigo-600 px-4 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-50">
              Mexico Stem Cell Guide
            </Link>
          </div>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-8 mt-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Explore Medical Tourism Destinations</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/destinations/mexico" className="inline-block rounded-lg bg-purple-600 px-6 py-3 font-medium text-white hover:bg-purple-700">
              Mexico Guide
            </Link>
            <Link href="/destinations/turkey" className="inline-block rounded-lg bg-purple-600 px-6 py-3 font-medium text-white hover:bg-purple-700">
              Turkey Guide
            </Link>
            <Link href="/destinations/south-korea" className="inline-block rounded-lg bg-purple-600 px-6 py-3 font-medium text-white hover:bg-purple-700">
              South Korea Guide
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
