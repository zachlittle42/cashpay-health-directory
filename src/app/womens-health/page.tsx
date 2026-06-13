import type { Metadata } from 'next';
import DtcCategoryPage from '@/components/DtcCategoryPage';

export const metadata: Metadata = {
  title: 'Best Online Menopause & HRT Care Compared — 2026',
  description:
    'Compare online menopause and HRT clinics — Midi Health, Alloy, Evernow, and Hers. Clinician-led hormone therapy, costs, insurance, and who each is best for. FDA-approved hormones prescribed online.',
  keywords: [
    'online menopause treatment',
    'HRT telehealth',
    'hormone replacement therapy online',
    'Midi Health',
    'Alloy menopause',
    'Evernow',
    'perimenopause care',
    'estradiol online',
  ],
};

export default function WomensHealthPage() {
  return <DtcCategoryPage slug="womens-health" />;
}
