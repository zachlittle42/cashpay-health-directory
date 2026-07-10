import type { Metadata } from 'next';
import SectionPage from '@/components/SectionPage';
import { SECTION_PAGES } from '@/lib/section-pages';
import { NOINDEX_FOLLOW } from '@/lib/indexability';

const cfg = SECTION_PAGES['lose-weight'];
export const metadata: Metadata = {
  title: cfg.metaTitle,
  description: cfg.metaDescription,
  alternates: { canonical: `https://vitalityscout.com${cfg.slug}` },
  // Deindexed: this persona page collapses onto the single weight-loss vertical
  // already served by /glp1 and /weight-loss (0 impressions / 0 clicks in GSC).
  // Kept live + crawlable so its internal links still flow.
  robots: NOINDEX_FOLLOW,
};
export default function Page() {
  return <SectionPage config={cfg} />;
}
