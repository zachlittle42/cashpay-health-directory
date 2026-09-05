import Link from 'next/link';
import type { RelatedGuideItem } from '@/data/related-guides';

export type { RelatedGuideItem };

/**
 * Compact internal-link card grid for hub↔spoke and sibling discovery.
 * Internal Next.js Links only — no affiliate / sponsored markup.
 */
export default function RelatedGuides({
  title = 'Related guides',
  items,
}: {
  title?: string;
  items: RelatedGuideItem[];
}) {
  if (!items.length) return null;

  const headingId = 'related-guides-heading';

  return (
    <nav
      aria-labelledby={headingId}
      className="not-prose mx-auto my-10 max-w-4xl px-4"
    >
      <h2
        id={headingId}
        className="mb-4 text-lg font-bold text-gray-900"
      >
        {title}
      </h2>
      <ul
        className={`grid list-none gap-3 p-0 ${
          items.length > 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-1'
        }`}
      >
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="block h-full rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-blue-400 hover:shadow-md"
            >
              <span className="font-semibold text-gray-900">
                {item.label}
              </span>
              {item.blurb && (
                <span className="mt-1 block text-sm text-gray-600">
                  {item.blurb}
                </span>
              )}
              <span className="mt-2 block text-sm font-medium text-blue-600">
                Read guide →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
