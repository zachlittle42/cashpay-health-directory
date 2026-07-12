// Standing estimate disclaimer — rendered once per page that carries verified
// prices, alongside the per-price source lines. FTC/liability framing matching
// the FAIR Health / ClearHealthCosts norm.
export default function PriceEstimateDisclaimer() {
  return (
    <p className="text-sm text-gray-500">
      Prices are estimates gathered from clinic websites &mdash; confirm directly with the provider.
    </p>
  );
}
