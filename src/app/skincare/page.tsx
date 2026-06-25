import type { Metadata } from 'next';
import DtcCategoryPage from '@/components/DtcCategoryPage';

export const metadata: Metadata = {
  alternates: { canonical: 'https://vitalityscout.com/skincare' },
  title: 'Best Prescription Skincare Online: Tretinoin Compared — 2026',
  description:
    'Compare online prescription skincare services — Curology, Apostrophe, Musely, and Hers. Custom tretinoin formulas for acne, anti-aging, and melasma, $20–$50/mo, prescribed online and shipped.',
  keywords: [
    'prescription skincare online',
    'tretinoin online',
    'Curology',
    'Apostrophe',
    'Musely',
    'custom acne cream',
    'online dermatology',
    'anti-aging prescription',
  ],
};

export default function SkincarePage() {
  return <DtcCategoryPage slug="skincare" />;
}
