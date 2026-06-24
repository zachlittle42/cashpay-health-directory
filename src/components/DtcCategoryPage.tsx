import CompareCategoryPage from '@/components/CompareCategoryPage';
import type { CompareSection } from '@/lib/compare-types';
import {
  getDtcCategory,
  getDtcProductsByCategory,
  type DtcCategorySlug,
} from '@/lib/telehealth-dtc';

// Adapter: maps a DTC Telehealth category slug onto the generic compare
// renderer with the Telehealth section's chrome.
const TELEHEALTH_SECTION: CompareSection = {
  hubHref: '/telehealth',
  hubLabel: 'Telehealth',
  relatedLinks: [
    {
      href: '/telehealth',
      icon: '💊',
      title: 'Telehealth Hub',
      desc: 'All cash-pay telehealth services shipped to your door',
    },
    {
      href: '/labs',
      icon: '🧪',
      title: 'At-Home Lab Testing',
      desc: 'Check the biomarkers behind your treatment',
    },
  ],
};

export default function DtcCategoryPage({ slug }: { slug: DtcCategorySlug }) {
  return (
    <CompareCategoryPage
      category={getDtcCategory(slug)}
      products={getDtcProductsByCategory(slug)}
      section={TELEHEALTH_SECTION}
    />
  );
}
