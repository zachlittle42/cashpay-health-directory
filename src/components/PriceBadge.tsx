// Verified-price badge for a DEXA clinic card. Server component — no client
// bundle, server-rendered so it never shifts layout.
//
// Renders the clinic's cheapest STANDARD dexa-scan price as the headline, with
// a source/freshness line so no number ever appears without provenance. intro/
// floor rows render only as qualifier lines and never as the headline. A clinic
// with no standard verified price renders nothing — the card falls back to its
// estimate. See wiki/centurion/gtm/vitalityscout-pricing-pipeline.md §2.
import { getStandardDexaPrice, getQualifiedDexaPrices, formatAsOfMonth } from '@/lib/pricing';

export default function PriceBadge({ clinicId }: { clinicId: string }) {
  const standard = getStandardDexaPrice(clinicId);

  // No verified headline price → render nothing (never a placeholder).
  if (!standard) return null;

  const qualified = getQualifiedDexaPrices(clinicId);

  return (
    <div>
      <div className="text-2xl font-bold text-blue-600 mb-0.5">{standard.display}</div>
      <div className="text-xs font-medium text-green-700 mb-2">
        verified from clinic site · {formatAsOfMonth(standard.asOf)}
      </div>
      {qualified.map((p) => (
        <div key={`${p.priceType}-${p.display}`} className="text-xs text-gray-500 mb-1">
          {p.priceType === 'intro' ? 'First visit ' : 'Starting at '}
          {p.display}
        </div>
      ))}
    </div>
  );
}
