import type { Metadata } from 'next';
import PerfCategoryPage from '@/components/PerfCategoryPage';

export const metadata: Metadata = {
  title: 'Best Recovery & Performance Tech: Wearables, Red Light, Cold Plunge — 2026',
  alternates: { canonical: '/recovery-tech' },
  description:
    'Compare recovery and performance hardware — Oura, WHOOP, Joovv red light, Plunge cold plunge, HigherDOSE sauna, Theragun. Prices ($200–$5,000+) and what the evidence supports for sleep, recovery, and longevity.',
  keywords: [
    'recovery technology',
    'best recovery wearable',
    'Oura vs Whoop',
    'red light therapy',
    'cold plunge',
    'infrared sauna blanket',
    'Theragun',
    'performance recovery devices',
  ],
};

export default function RecoveryTechPage() {
  return <PerfCategoryPage slug="recovery-tech" />;
}
