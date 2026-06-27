import type { Metadata } from 'next';
import SectionPage from '@/components/SectionPage';
import { SECTION_PAGES } from '@/lib/section-pages';

const cfg = SECTION_PAGES['test-diagnose'];
export const metadata: Metadata = {
  title: cfg.metaTitle,
  description: cfg.metaDescription,
  alternates: { canonical: `https://vitalityscout.com${cfg.slug}` },
};
export default function Page() {
  return <SectionPage config={cfg} />;
}
