// "Published pricing (verified)" section for a provider detail page. Server
// component — renders the provider's verified price rows (up to 15) from the
// merged pricing stores, each with its source line and asOf month. Returns null
// when the provider has no verified pricing, so non-priced provider pages render
// nothing (never a placeholder). No price schema markup (deliberate, per §2).
// See wiki/centurion/gtm/vitalityscout-pricing-pipeline.md §2.
import { getClinicPricing, formatAsOfMonth } from '@/lib/pricing';
import PriceEstimateDisclaimer from './PriceEstimateDisclaimer';

const MAX_ROWS = 15;

export default function ProviderPricingSection({ clinicId }: { clinicId: string }) {
  const rows = getClinicPricing(clinicId).slice(0, MAX_ROWS);
  if (rows.length === 0) return null;

  return (
    <div>
      <h2 className="text-xl font-bold text-gray-900 mb-4">Published pricing (verified)</h2>
      <div className="rounded-lg border border-gray-200 divide-y divide-gray-100">
        {rows.map((p, i) => (
          <div
            key={`${p.serviceKey}-${p.display}-${i}`}
            className="flex items-start justify-between gap-4 p-4"
          >
            <div className="min-w-0">
              <div className="text-sm font-medium text-gray-900">
                {p.serviceLabel ?? p.serviceKey}
              </div>
              <div className="mt-0.5 text-xs font-medium text-green-700">
                verified from clinic site &middot; {formatAsOfMonth(p.asOf)}
              </div>
            </div>
            <div className="shrink-0 text-right">
              <div className="text-base font-semibold text-blue-600">{p.display}</div>
              {(p.priceType === 'intro' || p.priceType === 'floor') && (
                <div className="text-xs text-gray-500">
                  {p.priceType === 'intro' ? 'intro offer' : 'starting price'}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <PriceEstimateDisclaimer />
      </div>
    </div>
  );
}
