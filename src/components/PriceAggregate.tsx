// City / national "typical DEXA cost" line, computed over verified standard
// dexa-scan prices only (see @/lib/pricing). Server-rendered, no layout shift.
// Callers gate this on stats.n >= 3.
import { CityPricingStats, formatPrice, formatAsOfMonth } from '@/lib/pricing';

export default function PriceAggregate({
  stats,
  asOf,
  placeLabel,
}: {
  stats: CityPricingStats;
  asOf?: string;
  placeLabel: string;
}) {
  const month = asOf ? formatAsOfMonth(asOf, true) : undefined;
  return (
    <p className="text-lg font-semibold text-gray-900">
      Typical DEXA scan cost in {placeLabel}: {formatPrice(stats.median)}{' '}
      <span className="font-normal text-gray-600">
        (range {formatPrice(stats.low)}&ndash;{formatPrice(stats.high)}, n={stats.n} clinics
        {month ? `, verified ${month}` : ''})
      </span>
    </p>
  );
}
