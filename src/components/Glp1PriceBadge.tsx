// Verified-price badge for a GLP-1 / weight-loss clinic card. Server component
// — no client bundle, server-rendered so it never shifts layout.
//
// Headline = the clinic's cheapest STANDARD MONTHLY program price, tagged with
// whether the medication is included ("meds included" vs "plus medication"), so
// a monthly recurring price is never confused with a one-time or med-excluded
// one. intro/floor rows render only as qualifier lines and never as the
// headline. A consult fee shows as a secondary line, but only here — where a
// program price exists — never alone as if it were program pricing. A clinic
// with no standard monthly program price renders nothing; the card falls back
// to its estimate. See wiki/centurion/gtm/vitalityscout-pricing-pipeline.md §2.
import {
  getGlp1ProgramPrice,
  getGlp1QualifiedPrices,
  getGlp1ConsultFee,
  formatAsOfMonth,
} from '@/lib/pricing';

export default function Glp1PriceBadge({ clinicId }: { clinicId: string }) {
  const standard = getGlp1ProgramPrice(clinicId);

  // No verified monthly-standard price → render nothing (never a placeholder).
  if (!standard) return null;

  const qualified = getGlp1QualifiedPrices(clinicId);
  const consult = getGlp1ConsultFee(clinicId);
  const medsTag =
    standard.medsIncluded === true
      ? 'meds included'
      : standard.medsIncluded === false
        ? 'plus medication'
        : null;

  return (
    <div>
      <div className="text-2xl font-bold text-green-600 mb-0.5">{standard.display}</div>
      {medsTag && <div className="text-xs font-medium text-gray-600 mb-0.5">{medsTag}</div>}
      <div className="text-xs font-medium text-green-700 mb-2">
        verified from clinic site &middot; {formatAsOfMonth(standard.asOf)}
      </div>
      {qualified.map((p) => (
        <div key={`${p.priceType}-${p.display}`} className="text-xs text-gray-500 mb-1">
          {p.display}{' '}
          <span className="text-gray-400">
            &middot; {p.priceType === 'intro' ? 'intro offer' : 'starting price'}
          </span>
        </div>
      ))}
      {consult && (
        <div className="text-xs text-gray-500 mb-1">consult: {consult.display}</div>
      )}
    </div>
  );
}
