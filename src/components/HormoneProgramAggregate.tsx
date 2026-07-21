// City / state / national "typical hormone (TRT/HRT) program cost" line, computed
// over verified standard monthly program prices only, SPLIT by meds-included
// status (see getHormoneProgramStats in @/lib/pricing). Server-rendered, no
// layout shift.
//
// Callers gate rendering on stats.medsIncluded.n >= 3. The meds-billed-
// separately split line renders only when that bucket has n >= 2, and is always
// shown WITH its "billed separately" qualifier so the two are never conflated.
import { HormoneProgramStats, formatPrice, formatAsOfMonth } from '@/lib/pricing';

export default function HormoneProgramAggregate({
  stats,
  asOf,
  placeLabel,
}: {
  stats: HormoneProgramStats;
  asOf?: string;
  placeLabel: string;
}) {
  const { medsIncluded: mi, medsExtra: me } = stats;
  const month = asOf ? formatAsOfMonth(asOf, true) : undefined;
  return (
    <div className="space-y-1">
      <p className="text-lg font-semibold text-gray-900">
        Typical hormone therapy program cost in {placeLabel}: {formatPrice(mi.median)}/mo{' '}
        <span className="font-normal text-gray-600">
          with medication included (range {formatPrice(mi.low)}&ndash;{formatPrice(mi.high)}, n=
          {mi.n} clinics{month ? `, verified ${month}` : ''})
        </span>
      </p>
      {me.n >= 2 && (
        <p className="text-sm text-gray-600">
          Programs where medication is billed separately: from {formatPrice(me.low)}/mo (n={me.n})
        </p>
      )}
    </div>
  );
}
