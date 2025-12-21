import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ: Cash-Pay Healthcare, Medical Tourism & Self-Pay Services',
  description: 'Common questions about cash-pay health services, medical tourism, telehealth, and self-pay medical care. Get answers before you book.',
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

export default function GeneralFAQ() {
  return (
    <main className="min-h-screen bg-white">
      <header className="border-b border-gray-200 px-4 py-4">
        <div className="mx-auto max-w-4xl">
          <Link href="/" className="text-sm text-blue-600 hover:underline">
            ← Back to directory
          </Link>
        </div>
      </header>

      <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600">
            Common questions about cash-pay healthcare, medical tourism, and self-pay services.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">General Questions</h2>

          <FAQItem
            question="What is cash-pay healthcare?"
            answer={
              <>
                <p>
                  Cash-pay (or self-pay) healthcare means paying directly for medical services without using insurance. You pay the provider&apos;s price upfront, rather than going through insurance claims, deductibles, and co-pays.
                </p>
                <p>
                  This is growing popular because:
                </p>
                <ul>
                  <li>Many people have high deductibles that make insurance useless</li>
                  <li>Some services aren&apos;t covered by insurance (cosmetic, optimization)</li>
                  <li>Cash-pay is often cheaper than meeting your deductible</li>
                  <li>No pre-authorization hassles or claim denials</li>
                </ul>
              </>
            }
          />

          <FAQItem
            question="Is cash-pay healthcare actually cheaper?"
            answer={
              <>
                <p>
                  Often, yes—especially for specific services:
                </p>
                <ul>
                  <li><strong>Lab testing:</strong> Can be 50-80% cheaper than billed through insurance</li>
                  <li><strong>GLP-1 medications:</strong> Compounded versions at $199/mo vs $1,000+ retail</li>
                  <li><strong>Dental work:</strong> Mexico prices are 50-70% less than US</li>
                  <li><strong>Bariatric surgery:</strong> $4,500 in Mexico vs $15,000-25,000 in US</li>
                </ul>
                <p>
                  The key is comparing the cash price to your out-of-pocket cost with insurance (deductible + co-pay). For people with high-deductible plans, cash-pay often wins.
                </p>
              </>
            }
          />

          <FAQItem
            question="Can I use my HSA or FSA for cash-pay services?"
            answer={
              <>
                <p>
                  Yes! HSA (Health Savings Account) and FSA (Flexible Spending Account) funds can be used for most legitimate medical expenses, including:
                </p>
                <ul>
                  <li>Lab testing</li>
                  <li>Prescription medications (including GLP-1s)</li>
                  <li>DEXA scans</li>
                  <li>Dental procedures</li>
                  <li>Medical procedures abroad</li>
                </ul>
                <p>
                  Just keep receipts. Cosmetic procedures generally don&apos;t qualify unless medically necessary.
                </p>
              </>
            }
          />

          <FAQItem
            question="Do I need a doctor's referral for these services?"
            answer={
              <>
                <p>
                  <strong>Usually no.</strong> That&apos;s one of the benefits of cash-pay services:
                </p>
                <ul>
                  <li><strong>Lab testing:</strong> Order directly, no referral needed</li>
                  <li><strong>Telehealth (GLP-1, TRT):</strong> Provider consultation included, no separate doctor needed</li>
                  <li><strong>DEXA scans:</strong> Walk-in appointments, no referral</li>
                  <li><strong>Medical tourism:</strong> Facilities handle all coordination</li>
                </ul>
                <p>
                  The exception: Some procedures may require medical clearance or screening, but the facility will handle this as part of the process.
                </p>
              </>
            }
          />
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Medical Tourism Questions</h2>

          <FAQItem
            question="Is medical tourism safe?"
            answer={
              <>
                <p>
                  <strong>It depends entirely on the facility you choose.</strong> Medical tourism can be just as safe as domestic care when you use:
                </p>
                <ul>
                  <li>JCI-accredited facilities (international quality standard)</li>
                  <li>Board-certified surgeons with high procedure volumes</li>
                  <li>Facilities that cater to international patients</li>
                </ul>
                <p>
                  Countries like Turkey, Mexico, and South Korea have world-class medical facilities that serve thousands of American patients yearly. The key is research—verify credentials, read reviews, and choose established centers.
                </p>
                <p>
                  See our <Link href="/guides/hair-transplant-turkey-guide" className="text-blue-600 hover:underline">Turkey hair transplant safety guide</Link> and <Link href="/guides/gastric-sleeve-mexico-safety" className="text-blue-600 hover:underline">Mexico bariatric surgery guide</Link> for specific safety checklists.
                </p>
              </>
            }
          />

          <FAQItem
            question="What if something goes wrong after I return home?"
            answer={
              <>
                <p>
                  Reputable medical tourism facilities offer:
                </p>
                <ul>
                  <li><strong>24/7 support lines:</strong> Call/WhatsApp for any concerns</li>
                  <li><strong>Remote follow-up:</strong> Send photos, video consultations</li>
                  <li><strong>US partner doctors:</strong> Some centers have relationships with US physicians</li>
                  <li><strong>Complication coverage:</strong> Top centers cover treatment of surgical complications</li>
                </ul>
                <p>
                  <strong>Before booking:</strong> Confirm their complication protocol, aftercare support, and any warranties. Centers like Mexico Bariatric Center and Vera Clinic (Turkey) have comprehensive aftercare programs.
                </p>
              </>
            }
          />

          <FAQItem
            question="How much should I budget for medical tourism beyond the procedure?"
            answer={
              <>
                <p>
                  Factor in these additional costs:
                </p>
                <ul>
                  <li><strong>Flights:</strong> $400-1,200 depending on destination</li>
                  <li><strong>Extra hotel nights:</strong> $50-200/night if extending stay</li>
                  <li><strong>Meals:</strong> $20-60/day (varies by country)</li>
                  <li><strong>Visa fees:</strong> $0-100 depending on country</li>
                  <li><strong>Travel insurance:</strong> $50-150 (highly recommended)</li>
                  <li><strong>Companion expenses:</strong> If bringing someone</li>
                </ul>
                <p>
                  <strong>Typical total:</strong> Add $1,000-2,500 to the procedure cost for a realistic all-in budget.
                </p>
                <p>
                  Even with these extras, you&apos;re usually saving 50-70% vs US prices.
                </p>
              </>
            }
          />
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Telehealth & Prescriptions</h2>

          <FAQItem
            question="How do telehealth prescriptions work?"
            answer={
              <>
                <p>
                  The process is straightforward:
                </p>
                <ol>
                  <li><strong>Online questionnaire:</strong> Medical history, symptoms, goals</li>
                  <li><strong>Virtual consultation:</strong> Video or async chat with licensed provider</li>
                  <li><strong>Prescription issued:</strong> If appropriate, sent to partner pharmacy</li>
                  <li><strong>Medication shipped:</strong> Delivered to your door in 3-7 days</li>
                  <li><strong>Ongoing monitoring:</strong> Follow-ups via app/portal, adjust as needed</li>
                </ol>
                <p>
                  For GLP-1s, TRT, and similar medications, most services include labs at regular intervals to monitor safety.
                </p>
              </>
            }
          />

          <FAQItem
            question="Are telehealth providers legitimate doctors?"
            answer={
              <>
                <p>
                  <strong>Yes—if you use reputable services.</strong> Companies like Hims/Hers, Ro, Marek Health, and others employ:
                </p>
                <ul>
                  <li>Board-certified physicians or nurse practitioners</li>
                  <li>Licensed in your state (telehealth requires state-by-state licensing)</li>
                  <li>Following standard medical protocols</li>
                </ul>
                <p>
                  These are real medical professionals providing real prescriptions. The difference from traditional care is the delivery model (virtual vs in-person), not the legitimacy.
                </p>
              </>
            }
          />
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Pricing & Payment</h2>

          <FAQItem
            question="Why don't you show exact prices for every provider?"
            answer={
              <>
                <p>
                  We show pricing ranges based on our research, but exact prices vary because:
                </p>
                <ul>
                  <li>Individual medical needs differ (you might need more/less than average)</li>
                  <li>Pricing changes—providers adjust rates, run promotions</li>
                  <li>Geographic factors (some providers have state-specific pricing)</li>
                  <li>Customization (procedure variations, add-ons)</li>
                </ul>
                <p>
                  <strong>Always verify pricing directly with providers.</strong> Our ranges give you ballpark expectations so you can budget and compare, but the provider&apos;s current quote is what matters.
                </p>
              </>
            }
          />

          <FAQItem
            question="Do you make money from these referrals?"
            answer={
              <>
                <p>
                  <strong>Yes, we&apos;re transparent about this.</strong> Many of our provider links are affiliate links, meaning we earn a commission if you use our link to sign up or book.
                </p>
                <p>
                  <strong>How this affects you:</strong> It doesn&apos;t change the price you pay. Providers pay us for referrals, not you.
                </p>
                <p>
                  <strong>Our editorial promise:</strong> We only list providers we&apos;d personally consider. Commission potential doesn&apos;t change our pros/cons analysis or recommendations. We turn down providers that don&apos;t meet our quality standards, even if they offer affiliate programs.
                </p>
              </>
            }
          />
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Safety & Trust</h2>

          <FAQItem
            question="How do you vet providers before listing them?"
            answer={
              <>
                <p>
                  Every provider on VitalityScout must meet minimum criteria:
                </p>
                <ul>
                  <li><strong>Licensed/accredited:</strong> Proper medical licensing in their jurisdiction</li>
                  <li><strong>Established track record:</strong> Multiple years in operation, verifiable reviews</li>
                  <li><strong>Transparent pricing:</strong> Willing to publicly discuss costs</li>
                  <li><strong>Clear policies:</strong> Refund/complication protocols documented</li>
                </ul>
                <p>
                  For <strong>medical tourism</strong>, we prioritize JCI-accredited facilities or those with Surgeon of Excellence certifications.
                </p>
                <p>
                  For <strong>telehealth</strong>, we verify they employ licensed providers and use legitimate pharmacies.
                </p>
                <p>
                  <strong>Note:</strong> Listing doesn&apos;t mean endorsement. Always do your own research and verify credentials independently.
                </p>
              </>
            }
          />

          <FAQItem
            question="Should I tell my regular doctor I'm using cash-pay services?"
            answer={
              <>
                <p>
                  <strong>Yes, absolutely.</strong> Your primary care doctor should know about:
                </p>
                <ul>
                  <li>Any medications you&apos;re taking (including from telehealth)</li>
                  <li>Procedures you&apos;re planning (especially surgery abroad)</li>
                  <li>Lab results you&apos;ve gotten independently</li>
                </ul>
                <p>
                  Good doctors appreciate informed patients who take initiative with their health. If your doctor is dismissive of cash-pay or self-directed testing, consider whether they&apos;re the right fit for you.
                </p>
                <p>
                  For medical tourism, you&apos;ll definitely want a local doctor for post-op follow-up care.
                </p>
              </>
            }
          />
        </div>

        {/* Topic-Specific FAQs */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Topic-Specific FAQs</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/faq/glp1"
              className="block rounded-lg border border-gray-200 bg-white p-4 hover:border-blue-400 hover:shadow-md transition-all"
            >
              <div className="text-2xl mb-2">💊</div>
              <div className="font-semibold text-gray-900">GLP-1 Weight Loss FAQ</div>
              <div className="text-sm text-gray-600 mt-1">Insurance, side effects, stopping, and more</div>
            </Link>

            <Link
              href="/faq/medical-tourism"
              className="block rounded-lg border border-gray-200 bg-white p-4 hover:border-blue-400 hover:shadow-md transition-all"
            >
              <div className="text-2xl mb-2">✈️</div>
              <div className="font-semibold text-gray-900">Medical Tourism FAQ</div>
              <div className="text-sm text-gray-600 mt-1">Safety, planning, what to expect abroad</div>
            </Link>

            <Link
              href="/faq/labs"
              className="block rounded-lg border border-gray-200 bg-white p-4 hover:border-blue-400 hover:shadow-md transition-all"
            >
              <div className="text-2xl mb-2">🧪</div>
              <div className="font-semibold text-gray-900">Lab Testing FAQ</div>
              <div className="text-sm text-gray-600 mt-1">Accuracy, what to test, interpreting results</div>
            </Link>

            <Link
              href="/faq/hair-transplant"
              className="block rounded-lg border border-gray-200 bg-white p-4 hover:border-blue-400 hover:shadow-md transition-all"
            >
              <div className="text-2xl mb-2">💇</div>
              <div className="font-semibold text-gray-900">Hair Transplant FAQ</div>
              <div className="text-sm text-gray-600 mt-1">Results, pain, choosing FUE vs DHI</div>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Still Have Questions?</h3>
          <p className="text-gray-600 mb-6">
            Browse our comprehensive guides or explore providers by category.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/guides"
              className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
            >
              Read Our Guides
            </Link>
            <Link
              href="/"
              className="inline-block rounded-lg border-2 border-blue-600 px-6 py-3 font-medium text-blue-600 hover:bg-blue-50"
            >
              Browse All Categories
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-200 px-4 py-8">
        <div className="mx-auto max-w-4xl text-center text-sm text-gray-500">
          <p>
            Have a question not answered here? We&apos;re continuously updating our FAQs based on reader questions.
          </p>
        </div>
      </footer>
    </main>
  );
}
