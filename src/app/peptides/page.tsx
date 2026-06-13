import type { Metadata } from 'next';
import PerfCategoryPage from '@/components/PerfCategoryPage';

export const metadata: Metadata = {
  title: 'Peptide Therapy: How to Access BPC-157 & TB-500 Safely — 2026',
  description:
    'The honest guide to peptide therapy — BPC-157, TB-500, GHK-Cu. Why the gray market is risky, how clinician-supervised access works, costs, and the FDA/compounding reality. Education, not a buy recommendation.',
  keywords: [
    'peptide therapy',
    'BPC-157',
    'TB-500',
    'peptides online',
    'peptide therapy cost',
    'are peptides legal',
    'clinician supervised peptides',
  ],
};

export default function PeptidesPage() {
  return <PerfCategoryPage slug="peptides" />;
}
