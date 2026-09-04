import Link from 'next/link';

export type BrandCta = {
  name: string;
  price?: string;
  blurb: string;
  siteUrl?: string;
  siteLabel?: string;
  profileHref?: string;
  profileLabel?: string;
};

export default function BrandCtaGrid({
  title,
  intro,
  brands,
  hubHref,
  hubLabel,
}: {
  title?: string;
  intro?: string;
  brands: BrandCta[];
  hubHref?: string;
  hubLabel?: string;
}) {
  return (
    <div className="not-prose my-8">
      {title && <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>}
      {intro && <p className="text-sm text-gray-600 mb-4">{intro}</p>}
      <div className={`grid gap-4 ${brands.length > 2 ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2'}`}>
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="rounded-lg border border-gray-200 p-5 hover:border-emerald-300 transition-colors"
          >
            <div className="flex items-start justify-between gap-3">
              <h4 className="font-semibold text-gray-900">{brand.name}</h4>
              {brand.price && (
                <div className="shrink-0 text-sm font-bold text-gray-900">{brand.price}</div>
              )}
            </div>
            <p className="mt-2 text-sm text-gray-600">{brand.blurb}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {brand.siteUrl && (
                <a
                  href={brand.siteUrl}
                  target="_blank"
                  rel="nofollow sponsored noopener noreferrer"
                  className="inline-block rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
                >
                  {brand.siteLabel || 'Visit Site →'}
                </a>
              )}
              {brand.profileHref && (
                <Link
                  href={brand.profileHref}
                  className="inline-block rounded border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:border-blue-400 hover:text-blue-700"
                >
                  {brand.profileLabel || 'View profile'}
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
      {hubHref && (
        <div className="mt-5 text-center">
          <Link
            href={hubHref}
            className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700"
          >
            {hubLabel || 'Compare all options →'}
          </Link>
        </div>
      )}
    </div>
  );
}
