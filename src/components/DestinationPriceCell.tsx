// One verified destination-clinic price, rendered for a table cell. Server
// component — no client bundle. The printed price links to its verbatim source
// citation so no number ever appears without provenance (matching PriceBadge's
// rule). EUR rows show the euro figure as printed with a small, dated indicative
// USD note beneath — never a bare-converted dollar figure. A clinic with no
// verified price for the service renders an em dash, not a placeholder number.
import { ClinicPrice } from '@/lib/pricing-types';
import { renderClinicPrice } from '@/lib/destination-pricing';

export default function DestinationPriceCell({ price }: { price?: ClinicPrice }) {
  if (!price) return <span className="text-gray-400">&mdash;</span>;
  const { display, conversionNote } = renderClinicPrice(price);
  return (
    <span>
      <a
        href={price.citation.url}
        target="_blank"
        rel="nofollow noopener"
        className="font-semibold text-gray-900 hover:text-blue-700 hover:underline"
        title={price.citation.quote}
      >
        {display}
      </a>
      {conversionNote && (
        <span className="block text-xs font-normal text-gray-500">{conversionNote}</span>
      )}
    </span>
  );
}
