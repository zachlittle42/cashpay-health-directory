import type { Metadata } from 'next';
import PerfCategoryPage from '@/components/PerfCategoryPage';

export const metadata: Metadata = {
  title: 'Longevity Medications Online: Rapamycin, Metformin & NAD+ — 2026',
  description:
    'Compare telehealth programs that prescribe longevity medications online — rapamycin, metformin, low-dose naltrexone, and NAD+ via AgelessRx and Healthspan. Costs, what to expect, and the honest regulatory picture (none are FDA-approved for longevity).',
  keywords: [
    'longevity medications online',
    'rapamycin online',
    'metformin for longevity',
    'low-dose naltrexone telehealth',
    'NAD+ injections',
    'AgelessRx',
    'Healthspan',
    'anti-aging prescription',
  ],
};

export default function LongevityRxPage() {
  return <PerfCategoryPage slug="longevity-rx" />;
}
