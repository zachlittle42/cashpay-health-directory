import type { Metadata } from 'next';
import DtcCategoryPage from '@/components/DtcCategoryPage';

export const metadata: Metadata = {
  alternates: { canonical: 'https://vitalityscout.com/mental-health' },
  title: 'Best Online Therapy & Psychiatry Compared — 2026',
  description:
    'Compare online therapy and psychiatry platforms — BetterHelp, Talkspace, and Brightside. Costs ($65–$100/wk or $95–$350/mo), which prescribe medication, and which take insurance.',
  keywords: [
    'online therapy',
    'online psychiatry',
    'BetterHelp',
    'Talkspace',
    'Brightside',
    'teletherapy cost',
    'online mental health',
    'therapy that takes insurance',
  ],
};

export default function MentalHealthPage() {
  return <DtcCategoryPage slug="mental-health" />;
}
