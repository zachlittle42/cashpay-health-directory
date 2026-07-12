// Verified cash-pay lab pricing module for the /labs category page. Server
// component — reads the generated LABS_PRICING store (via @/lib/pricing) and
// renders a panel-price comparison table plus a separate memberships list. No
// price schema markup (deliberate, per §2); CLS-safe static render.
//
// The table shows one flagship comparable panel per provider that sells
// à-la-carte panels; membership/subscription providers appear in the list
// below. Providers that publish neither (consult-only) surface their prices on
// their own /providers/[slug] page instead. See
// wiki/centurion/gtm/vitalityscout-pricing-pipeline.md §2.
import Link from 'next/link';
import type { Provider } from '@/lib/types';
import type { ClinicPrice } from '@/lib/pricing-types';
import { getLabsFlagshipPanel, getLabsMembership, formatAsOfMonth } from '@/lib/pricing';
import PriceEstimateDisclaimer from './PriceEstimateDisclaimer';

interface Row {
  provider: Provider;
  price: ClinicPrice;
}

function collect(
  providers: Provider[],
  pick: (clinicId: string) => ClinicPrice | undefined,
): Row[] {
  return providers
    .map((provider) => ({ provider, price: pick(provider.id) }))
    .filter((r): r is Row => r.price !== undefined)
    .sort((a, b) => (a.price.low ?? 0) - (b.price.low ?? 0));
}

export default function LabsPriceComparison({ providers }: { providers: Provider[] }) {
  const panelRows = collect(providers, getLabsFlagshipPanel);
  const membershipRows = collect(providers, getLabsMembership);

  if (panelRows.length === 0 && membershipRows.length === 0) return null;

  return (
    <section className="border-t border-gray-100 px-4 py-10">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold text-gray-900">Verified panel prices</h2>
        <p className="mt-2 text-sm text-gray-600">
          Cash-pay lab-panel prices published on each provider&apos;s own site &mdash; the starting
          panel price at {panelRows.length} providers. Membership and subscription plans are listed
          separately below.
        </p>

        {panelRows.length > 0 && (
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200 text-xs font-medium uppercase tracking-wide text-gray-500">
                  <th className="py-2 pr-4">Provider</th>
                  <th className="py-2 pr-4">Panel</th>
                  <th className="py-2">Price</th>
                </tr>
              </thead>
              <tbody>
                {panelRows.map(({ provider, price }) => (
                  <tr key={provider.id} className="border-b border-gray-100 align-top">
                    <td className="py-3 pr-4 whitespace-nowrap">
                      <Link
                        href={`/providers/${provider.slug}`}
                        className="font-medium text-blue-600 hover:underline"
                      >
                        {provider.name}
                      </Link>
                    </td>
                    <td className="py-3 pr-4 text-gray-700">{price.serviceLabel ?? '—'}</td>
                    <td className="py-3">
                      <div className="font-semibold text-blue-600">{price.display}</div>
                      <div className="text-xs font-medium text-green-700">
                        verified from clinic site &middot; {formatAsOfMonth(price.asOf)}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {membershipRows.length > 0 && (
          <div className="mt-8">
            <h3 className="text-sm font-semibold text-gray-900">Memberships &amp; subscriptions</h3>
            <ul className="mt-3 space-y-2">
              {membershipRows.map(({ provider, price }) => (
                <li key={provider.id} className="text-sm text-gray-700">
                  <Link
                    href={`/providers/${provider.slug}`}
                    className="font-medium text-blue-600 hover:underline"
                  >
                    {provider.name}
                  </Link>
                  {' — '}
                  <span className="font-semibold text-gray-900">{price.display}</span>
                  {price.priceType === 'intro' && (
                    <span className="text-gray-500"> (intro offer)</span>
                  )}
                  <span className="text-xs text-green-700">
                    {' '}
                    &middot; verified from clinic site &middot; {formatAsOfMonth(price.asOf)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-6">
          <PriceEstimateDisclaimer />
        </div>
      </div>
    </section>
  );
}
