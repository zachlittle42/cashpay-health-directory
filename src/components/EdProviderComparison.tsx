import { ED_OFFERS, ED_SOURCES, ED_VERIFIED_LABEL } from '@/lib/ed-offers';
import Link from 'next/link';
import { getReferralLink } from '@/lib/referral-links';

export default function EdProviderComparison({
  offerIds,
  placement = 'ed_comparison',
}: {
  offerIds?: string[];
  placement?: string;
}) {
  const offers = offerIds ? ED_OFFERS.filter((offer) => offerIds.includes(offer.id)) : ED_OFFERS;
  const links = new Map(offers.map((offer) => [offer.id, getReferralLink(offer.providerId, offer.url, 'ed')]));
  const hasCommercialLink = Array.from(links.values()).some((link) => link.commercial);

  return (
    <div className="not-prose my-6">
      <p className="mb-4 text-sm text-gray-600">
        Public offers checked {ED_VERIFIED_LABEL}. Different drugs, strengths, quantities and services are shown;
        these are not equivalent treatment plans or a ranking of clinical quality. Prices can change.
      </p>
      <div className="overflow-x-auto rounded-xl border border-gray-200 focus:outline-blue-600" role="region" aria-label="ED provider comparison" tabIndex={0}>
        <table className="block w-full text-left text-sm md:table md:min-w-[760px]">
          <caption className="sr-only">ED provider prices, included services, billing terms and official links</caption>
          <thead className="hidden bg-gray-50 text-gray-700 md:table-header-group">
            <tr>
              <th scope="col" className="w-1/4 px-4 py-3">Provider and product</th>
              <th scope="col" className="px-4 py-3">Published price and included costs</th>
              <th scope="col" className="w-1/4 px-4 py-3">Before you enroll</th>
            </tr>
          </thead>
          <tbody className="block divide-y divide-gray-200 md:table-row-group">
            {offers.map((offer) => (
              <tr key={offer.id} className="block align-top md:table-row">
                <th scope="row" className="block px-4 pt-5 pb-3 font-normal md:table-cell md:py-5">
                  <span className="block text-base font-semibold text-gray-900">{offer.provider}</span>
                  <span className="mt-2 block text-gray-800">{offer.product}</span>
                  <span className="mt-2 block text-xs leading-relaxed text-gray-600">{offer.format}</span>
                </th>
                <td className="block px-4 py-3 md:table-cell md:py-5">
                  <p className="font-semibold text-gray-900">{offer.price}</p>
                  <p className="mt-2 leading-relaxed text-gray-700">{offer.priceDetail}</p>
                  <p className="mt-3 text-gray-600">{offer.includes}</p>
                </td>
                <td className="block px-4 pt-3 pb-5 text-gray-700 md:table-cell md:py-5">
                  <p>{offer.commitment}</p>
                  <a
                    href={links.get(offer.id)!.href}
                    target="_blank"
                    rel={links.get(offer.id)!.commercial ? 'sponsored noopener noreferrer' : 'noopener noreferrer'}
                    data-provider-id={links.get(offer.id)!.providerId}
                    data-provider-name={offer.provider}
                    data-category="ed"
                    data-placement={placement}
                    className="mt-4 inline-flex rounded-lg bg-emerald-700 px-3 py-2 font-semibold text-white hover:bg-emerald-800"
                  >
                    Check {offer.provider} prices →
                  </a>
                  <details className="mt-3">
                    <summary className="cursor-pointer font-medium text-blue-700">First payment, renewals and sources</summary>
                    <dl className="mt-3 space-y-3 text-xs leading-relaxed">
                      <div><dt className="font-semibold">First payment</dt><dd>{offer.firstPayment}</dd></div>
                      <div><dt className="font-semibold">Renewal</dt><dd>{offer.renewal}</dd></div>
                      <div><dt className="font-semibold">Cancellation</dt><dd>{offer.cancellation}</dd></div>
                      <div><dt className="font-semibold">Still to confirm</dt><dd>{offer.unknowns}</dd></div>
                    </dl>
                    <ul className="mt-3 space-y-2 text-xs">
                      {offer.sourceIds.map((id) => (
                        <li key={id}><a href={ED_SOURCES[id].url} className="text-blue-700 underline" data-link-purpose="source">{ED_SOURCES[id].label}</a></li>
                      ))}
                    </ul>
                  </details>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-gray-500">
        {hasCommercialLink ? 'We may earn a referral payment through some of these links. ' : 'These links open official provider pages. '}
        A link is not a booking confirmation or a personalized medical recommendation. No promotional discount is assumed.{' '}
        <Link href="/editorial-policy" className="underline">How we compare providers</Link>.
      </p>
    </div>
  );
}
