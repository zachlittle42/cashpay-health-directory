import type { Metadata } from 'next';
import DtcCategoryPage from '@/components/DtcCategoryPage';

export const metadata: Metadata = {
  title: "Best Online Men's Health: ED & Hair Loss Compared — 2026",
  description:
    "Compare online men's health clinics for ED and hair loss — Hims, Ro, BlueChew, and Keeps. Pricing ($10–$90/mo), what they treat, and who each is best for. FDA-approved generics shipped to your door.",
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
