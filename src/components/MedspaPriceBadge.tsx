// Verified-price badge for a med-spa / aesthetics clinic card. Server component —
// no client bundle, server-rendered so it never shifts layout.
//
// A med-spa prices many services, so the badge lists the clinic's verified
// steady-state anchor prices across a curated set (Botox/Dysport per unit, filler
// per syringe, laser hair removal, microneedling, HydraFacial, chemical peel,
// membership), cheapest per service, in priority order — the first as the bold
// headline. Only steady-state prices appear (priceType standard or per-unit);
// intro/floor/range/package promotional rows never show as a headline. A clinic
// with no verified steady price in the curated set renders nothing — the card
// falls back to its estimate. See wiki/centurion/gtm/vitalityscout-pricing-pipeline.md §2.
import { getMedspaClinicBadgeRows, formatAsOfMonth } from '@/lib/pricing';

export default function MedspaPriceBadge({ clinicId }: { clinicId: string }) {
  const rows = getMedspaClinicBadgeRows(clinicId);

  // No verified steady price in the curated set → render nothing.
  if (rows.length === 0) return null;

  const [headline, ...rest] = rows;

  return (
    <div>
      <div className="text-xl font-bold text-rose-600 mb-0.5">
        {headline.price.display}
        <span className="ml-1 text-xs font-medium text-gray-500">{headline.label}</span>
      </div>
      <div className="text-xs font-medium text-green-700 mb-2">
        verified from clinic site &middot; {formatAsOfMonth(headline.price.asOf)}
      </div>
      {rest.map((r) => (
        <div key={`${r.label}-${r.price.display}`} className="text-xs text-gray-500 mb-1">
          {r.price.display} <span className="text-gray-400">&middot; {r.label}</span>
        </div>
      ))}
    </div>
  );
}
