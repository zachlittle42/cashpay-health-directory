import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'How We Compare Healthcare Prices',
  description: 'How VitalityScout researches provider offers, labels estimated prices, handles commercial links, and distinguishes price research from clinical review.',
  alternates: { canonical: 'https://vitalityscout.com/editorial-policy' },
};

export default function EditorialPolicy() {
  return (
    <>
      <Navigation />
      <SidebarShell>
        <main className="mx-auto max-w-3xl px-4 py-12">
          <Link href="/" className="text-sm text-blue-600 hover:underline">Home</Link>
          <h1 className="mt-4 text-4xl font-bold text-gray-900">How we compare healthcare prices</h1>
          <p className="mt-5 text-lg text-gray-700">VitalityScout helps people compare self-pay healthcare services using public provider information. We research costs and practical terms so you can make a more informed choice with a qualified clinician.</p>
          <p className="mt-3 text-sm text-gray-500">Published September 17, 2026</p>
          <div className="mt-10 space-y-9 text-gray-700 leading-relaxed">
            <section>
              <h2 className="mb-3 text-2xl font-semibold text-gray-900">What a checked price means</h2>
              <p>A source-checked offer includes a link to the provider and the date we checked it. Where available, we record the product, strength, quantity, consultation fee, shipping, billing period, and renewal terms. A checked price is a snapshot of a public offer, not a guaranteed quote or a certification of the provider.</p>
              <p className="mt-3">A monthly starting price, a per-dose price, and a pharmacy refill are different things. We label them separately. Missing fees or terms are marked as unknown; we do not assume they are free. Estimates on older pages remain estimates unless that specific offer has a source and a verification date.</p>
            </section>
            <section>
              <h2 className="mb-3 text-2xl font-semibold text-gray-900">How comparisons are selected</h2>
              <p>We compare routes a reader could reasonably consider: a full-service clinic, another provider with different terms, or a separate consultation and pharmacy purchase. Lists are not exhaustive. Differences in dose, formulation, clinical assessment, location, and included services can make two prices unsuitable for direct comparison.</p>
              <p className="mt-3">A low price does not establish clinical quality or suitability. Our ED comparison distinguishes FDA-approved tablets from compounded products and does not rank a medication as best for an individual.</p>
            </section>
            <section>
              <h2 className="mb-3 text-2xl font-semibold text-gray-900">Research and clinical review</h2>
              <p>“VitalityScout research” identifies research published by this site. It does not mean the page has been reviewed by a clinician. A clinical review is identified only when an actual reviewer and credentials are displayed. Clinical explanations should be read alongside their linked medical sources and discussed with your own clinician.</p>
              <p className="mt-3">VitalityScout is a directory and information resource. We do not diagnose, prescribe, or determine whether you are eligible for treatment.</p>
            </section>
            <section>
              <h2 className="mb-3 text-2xl font-semibold text-gray-900">Provider links and commercial relationships</h2>
              <p>Provider buttons may open an official website or an approved referral link. Where a comparison uses commission-bearing links, it includes a disclosure. A provider listing or an outbound button alone does not mean there is a commercial partnership.</p>
              <p className="mt-3">Commercial arrangements do not change the source price, remove a relevant alternative, or establish a clinical endorsement. Provider links are available without submitting your contact details to VitalityScout.</p>
            </section>
            <section>
              <h2 className="mb-3 text-2xl font-semibold text-gray-900">Before you enroll</h2>
              <p>Check the provider’s current price, the amount charged today, the next charge, and the cancellation deadline. Confirm service availability and the exact product with the provider. Pages can become out of date between reviews.</p>
              <Link href="/guides/online-ed-treatment" className="mt-4 inline-block font-medium text-blue-600 hover:underline">See the source-checked ED comparison →</Link>
            </section>
          </div>
        </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
