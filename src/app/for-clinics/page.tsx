import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: { absolute: 'For Clinics: The Price-Verified Listing Badge' },
  alternates: { canonical: 'https://vitalityscout.com/for-clinics' },
  description:
    'Your clinic publishes transparent cash-pay pricing and is listed on VitalityScout. Show it: the Price-Verified Listing badge, free to embed.',
};

const EMBED_SNIPPET = `<a href="https://vitalityscout.com/?utm_source=verified-badge" rel="noopener">
  <img src="https://vitalityscout.com/badge/vitalityscout-verified.svg"
       alt="Price-verified listing on VitalityScout" width="220" height="48" />
</a>`;

export default function ForClinics() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <SidebarShell>

      <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-14">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            The Price-Verified Listing Badge
          </h1>
          <p className="text-lg text-gray-600">
            VitalityScout lists cash-pay clinics that publish real prices. If your clinic is
            listed, it is because your published pricing passed our verification — that is worth
            showing your patients. The badge is free, and it links to the directory your patients
            already use to compare.
          </p>
        </div>
      </section>

      <section className="px-4 py-10">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What the badge means</h2>
          <ul className="space-y-3 text-gray-700">
            <li>• Your clinic publishes cash-pay pricing patients can actually see before booking.</li>
            <li>• Your listing on VitalityScout carries a price we verified against your published pricing, with the month we verified it.</li>
            <li>• Listing and the badge are free. We do not sell placement, and the badge is not an endorsement of clinical quality — it is a transparency marker.</li>
          </ul>
        </div>
      </section>

      <section className="px-4 py-10 bg-gray-50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Embed it</h2>
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6 flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/badge/vitalityscout-verified.svg" alt="Price-verified listing on VitalityScout" width={220} height={48} />
          </div>
          <p className="text-sm text-gray-600 mb-3">Copy this snippet into your site footer or pricing page:</p>
          <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 text-xs overflow-x-auto"><code>{EMBED_SNIPPET}</code></pre>
          <p className="mt-3 text-sm text-gray-600">
            Prefer the link to point at your own listing? Find your clinic in the directory and use
            that URL as the link target instead.
          </p>
        </div>
      </section>

      <section className="px-4 py-10">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Not listed yet?</h2>
          <p className="text-gray-700 mb-4">
            We add clinics that publish transparent cash-pay pricing. If yours does, tell us where
            to find your pricing page and we will review it for inclusion. Inclusion is free and
            editorial — publishing a real price is the only requirement.
          </p>
          <Link
            href="/local-clinics"
            className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700 transition-colors"
          >
            Browse the directory
          </Link>
        </div>
      </section>

      </SidebarShell>
      <Footer />
    </main>
  );
}
