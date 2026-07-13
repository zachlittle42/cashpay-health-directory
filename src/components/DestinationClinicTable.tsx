// Per-clinic verified-price table for a destination cluster. Server component.
// One row per clinic that has a verified price in the cluster, each carrying a
// "Verified" badge and its cheapest price per requested service (currency-aware,
// citation-linked via DestinationPriceCell). The freshness stamp under the table
// is the latest asOf in the cluster. Callers pass the column set they want.
import { formatAsOfMonth } from '@/lib/pricing';
import {
  clinicIdsInCluster,
  getClinicMeta,
  cheapestPrice,
  getDestinationAsOf,
} from '@/lib/destination-pricing';
import DestinationPriceCell from './DestinationPriceCell';

interface Column {
  label: string;
  serviceKey: string;
}

export default function DestinationClinicTable({
  cluster,
  columns,
}: {
  cluster: string;
  columns: Column[];
}) {
  const ids = clinicIdsInCluster(cluster);
  const asOf = getDestinationAsOf(undefined, [cluster]);

  return (
    <div>
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-gray-200 bg-gray-50 text-left">
              <th className="px-3 py-2 font-semibold text-gray-700">Clinic</th>
              {columns.map((c) => (
                <th key={c.serviceKey} className="px-3 py-2 font-semibold text-gray-700">
                  {c.label}
                </th>
              ))}
              <th className="px-3 py-2 font-semibold text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody>
            {ids.map((id) => {
              const meta = getClinicMeta(id);
              return (
                <tr key={id} className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2">
                    <span className="font-medium text-gray-900">{meta?.name}</span>
                    <span className="block text-xs text-gray-500">
                      {meta?.city}, {meta?.country}
                    </span>
                  </td>
                  {columns.map((c) => (
                    <td key={c.serviceKey} className="px-3 py-2">
                      <DestinationPriceCell price={cheapestPrice(id, c.serviceKey)} />
                    </td>
                  ))}
                  <td className="px-3 py-2">
                    <span className="inline-block rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
                      Verified
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-xs text-gray-500">
        Each price is the clinic&apos;s cheapest published figure for that service, quoted verbatim
        from the clinic&apos;s own website and linked to its source. &quot;From/starting&quot;
        qualifiers are preserved. {asOf ? `Verified ${formatAsOfMonth(asOf, true)}.` : ''} Confirm
        current pricing and exactly what each quote includes directly with the clinic.
      </p>
    </div>
  );
}
