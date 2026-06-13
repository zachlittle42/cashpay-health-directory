import CompareCategoryPage from '@/components/CompareCategoryPage';
import type { CompareSection } from '@/lib/compare-types';
import {
  getPerfCategory,
  getPerfProductsByCategory,
  type PerfCategorySlug,
} from '@/lib/performance-products';

// Adapter: maps a Longevity & Performance category slug onto the generic
// compare renderer with this section's chrome.
const LONGEVITY_SECTION: CompareSection = {
  hubHref: '/longevity-performance',
  hubLabel: 'Longevity & Performance',
  relatedLinks: [
    {
      href: '/longevity-performance',
      icon: '🧬',
      title: 'Longevity & Performance Hub',
      desc: 'All the products and programs people buy to optimize healthspan',
    },
    {
      href: '/labs',
      icon: '🧪',
      title: 'At-Home Lab Testing',
      desc: 'Track the biomarkers behind metabolic health and longevity',
    },
  ],
};

export default function PerfCategoryPage({ slug }: { slug: PerfCategorySlug }) {
  return (
    <CompareCategoryPage
      category={getPerfCategory(slug)}
      products={getPerfProductsByCategory(slug)}
      section={LONGEVITY_SECTION}
    />
  );
}
