import type { Metadata } from 'next';
import DtcCategoryPage from '@/components/DtcCategoryPage';

export const metadata: Metadata = {
  alternates: { canonical: 'https://vitalityscout.com/mens-health' },
  title: "Best Online Men's Health: ED & Hair Loss Compared — 2026",
  description:
    "Compare online men's health services for ED and hair loss. Check published prices, prescription requirements, and the differences between generic tablets and compounded products.",
  keywords: [
    'online ED treatment',
    'erectile dysfunction telehealth',
    'sildenafil online',
    'online hair loss treatment',
    'finasteride online',
    'Hims vs Ro',
    'BlueChew',
    'Keeps',
  ],
};

export default function MensHealthPage() {
  return <DtcCategoryPage slug="mens-health" />;
}
