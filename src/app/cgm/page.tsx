import type { Metadata } from 'next';
import PerfCategoryPage from '@/components/PerfCategoryPage';

export const metadata: Metadata = {
  title: 'Best Continuous Glucose Monitors (CGM) Without a Prescription — 2026',
  description:
    'Compare consumer CGMs you can buy online without diabetes: Dexcom Stelo, Abbott Lingo, Levels, Nutrisense, and Dexcom G7. Pricing (~$49–$399/mo), prescription needs, and who each is best for.',
  keywords: [
    'continuous glucose monitor',
    'CGM without prescription',
    'CGM without diabetes',
    'Dexcom Stelo',
    'Abbott Lingo',
    'Levels',
    'Nutrisense',
    'best CGM for metabolic health',
    'over the counter glucose monitor',
  ],
};

export default function CGMPage() {
  return <PerfCategoryPage slug="cgm" />;
}
