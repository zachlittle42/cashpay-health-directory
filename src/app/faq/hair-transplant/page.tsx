import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hair Transplant FAQ: FUE, DHI, Results & Recovery (2024)',
  description: 'Common questions about hair transplants. Pain, results timeline, FUE vs DHI, costs, and what to expect from your procedure.',
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

export default function HairTransplantFAQ() {
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
            <span className="text-4xl">💇</span>
            <h1 className="text-4xl font-bold text-gray-900">
              Hair Transplant FAQ
            </h1>
          </div>
          <p className="text-xl text-gray-600">
            Common questions about hair transplant procedures, results, and recovery.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12">
        <FAQItem
          question="Does a hair transplant hurt?"
          answer={
            <>
              <p><strong>During the procedure: No.</strong> You&apos;re under local anesthesia the entire time (6-8 hours). Most people report feeling pressure or tugging but no pain.</p>
              <p><strong>The worst part:</strong> The initial anesthesia injections to numb your scalp. After that, you&apos;re numb.</p>
              <p><strong>After the procedure:</strong> Mild discomfort for 2-3 days, like a sunburn on your scalp. Manageable with over-the-counter pain meds. Donor area is more uncomfortable than recipient area.</p>
            </>
          }
        />

        <FAQItem
          question="When will I see results?"
          answer={
            <>
              <p><strong>This requires patience—full results take 12-18 months.</strong></p>
              <ul>
                <li><strong>Weeks 1-2:</strong> You look like you just had a transplant (red, scabby). Not leaving the house much.</li>
                <li><strong>Weeks 3-12:</strong> Shock loss phase—transplanted hairs fall out. This is NORMAL and expected! Many people panic here.</li>
                <li><strong>Months 3-6:</strong> New growth begins. Thin and wispy at first.</li>
                <li><strong>Months 6-9:</strong> Noticeable improvement. About 50% of final results visible.</li>
                <li><strong>Months 12-18:</strong> Final results, maximum density and thickness achieved.</li>
              </ul>
              <p>Anyone showing immediate dramatic results is wearing a hair system or edited photos. Real growth takes time.</p>
            </>
          }
        />

        <FAQItem
          question="Will people be able to tell I had a hair transplant?"
          answer={
            <>
              <p><strong>Immediately after: Yes.</strong> For the first 10-14 days, it&apos;s obvious (scabs, redness). Plan to work from home or take time off.</p>
              <p><strong>Long-term: Depends on the surgeon&apos;s skill.</strong> A well-done transplant with natural hairline design should be undetectable. Signs of a poor transplant:</p>
              <ul>
                <li>Straight "doll hair" hairline (should have irregular, natural variation)</li>
                <li>Pluggy look (grafts too large or wrong angle)</li>
                <li>Visible linear scarring (FUT strip method—rare now)</li>
                <li>Unnatural density patterns</li>
              </ul>
              <p>This is why hairline design expertise matters. Turkish clinics do thousands yearly, so they know natural patterns for every ethnicity.</p>
            </>
          }
        />

        <FAQItem
          question="Do I need to take finasteride or minoxidil after a transplant?"
          answer={
            <>
              <p><strong>Transplanted hair is permanent</strong> (from the "safe zone" that&apos;s genetically resistant to balding). However:</p>
              <p><strong>Your existing hair will continue to thin</strong> unless you prevent it. Most doctors recommend:</p>
              <ul>
                <li><strong>Finasteride (Propecia):</strong> Prevents further hair loss in existing (non-transplanted) hair. ~$20-40/month.</li>
                <li><strong>Minoxidil (Rogaine):</strong> Promotes thicker hair growth. ~$15/month.</li>
              </ul>
              <p>Without these, you might end up with a "donut" pattern—thick transplanted hairline but thin crown/mid-scalp.</p>
              <p>Not everyone needs them, but most doctors recommend at least finasteride to protect your investment.</p>
            </>
          }
        />

        <FAQItem
          question="How many grafts do I need?"
          answer={
            <>
              <p><strong>This varies dramatically by individual</strong>, but rough guidelines:</p>
              <ul>
                <li><strong>Hairline restoration only:</strong> 1,500-2,500 grafts</li>
                <li><strong>Hairline + mid-scalp:</strong> 2,500-3,500 grafts</li>
                <li><strong>Hairline + crown:</strong> 3,500-4,500 grafts</li>
                <li><strong>Extensive/full coverage:</strong> 4,500+ grafts (may need 2 sessions)</li>
              </ul>
              <p>Factors that affect graft count:</p>
              <ul>
                <li>Size of bald area</li>
                <li>Desired density</li>
                <li>Your donor hair density (some people have more available grafts than others)</li>
                <li>Hair thickness (thicker hair provides more coverage per graft)</li>
              </ul>
              <p><strong>Beware clinics promising huge graft counts</strong> (5,000+) in one session—overharvesting damages your donor area permanently.</p>
            </>
          }
        />

        <FAQItem
          question="Can I fly immediately after the procedure?"
          answer={
            <>
              <p><strong>Not immediately, but soon.</strong> Most surgeons recommend:</p>
              <ul>
                <li><strong>Minimum 2-3 days post-op</strong> before flying (to monitor for any immediate complications)</li>
                <li><strong>Use a travel neck pillow</strong> to avoid rubbing the transplant area against the seat</li>
                <li><strong>Avoid baseball caps or tight hats</strong> for the first 10 days</li>
              </ul>
              <p>Most people fly home on day 3-4 without issues. Bring a soft, loose hat for sun protection in the airport.</p>
            </>
          }
        />

        <FAQItem
          question="What's the difference between 3,000 grafts and 5,000 grafts?"
          answer={
            <>
              <p><strong>Each graft contains 1-4 hairs</strong> (average ~2 hairs per graft). So:</p>
              <ul>
                <li><strong>3,000 grafts</strong> = approximately 6,000 hairs</li>
                <li><strong>5,000 grafts</strong> = approximately 10,000 hairs</li>
              </ul>
              <p>But more isn&apos;t always better:</p>
              <ul>
                <li>You have a finite donor supply (typically 6,000-8,000 grafts maximum lifetime)</li>
                <li>Overharvesting damages the donor area</li>
                <li>Dense packing can damage surrounding follicles</li>
              </ul>
              <p><strong>Quality over quantity.</strong> A well-designed 3,000 graft transplant with natural hairline looks better than a poorly executed 5,000 graft procedure.</p>
            </>
          }
        />

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Explore Hair Transplant Options</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/guides/hair-transplant-turkey-guide" className="inline-block rounded-lg bg-purple-600 px-6 py-3 font-medium text-white hover:bg-purple-700">
              Turkey Safety Guide
            </Link>
            <Link href="/hair_transplant" className="inline-block rounded-lg border-2 border-purple-600 px-6 py-3 font-medium text-purple-600 hover:bg-purple-50">
              View Hair Transplant Clinics
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
