import type { Metadata } from 'next';
import PerfCategoryPage from '@/components/PerfCategoryPage';

export const metadata: Metadata = {
  title: 'Best Longevity Supplements: NAD+, Urolithin A & More — 2026',
  alternates: { canonical: '/supplements' },
  description:
    'Evidence-aware comparison of longevity supplements — NAD+ precursors (NR/NMN), urolithin A, omega-3, creatine — and trusted brands like Tru Niagen, Timeline, Momentous, and Thorne. Costs and what the science actually supports.',
  keywords: [
    'longevity supplements',
    'NAD+ supplement',
    'nicotinamide riboside',
    'NMN',
    'urolithin A',
    'Tru Niagen',
    'Timeline Mitopure',
    'best anti-aging supplements',
  ],
};

export default function SupplementsPage() {
  return <PerfCategoryPage slug="supplements" />;
}
