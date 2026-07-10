import type { Metadata } from 'next';
import SectionPage from '@/components/SectionPage';
import { SECTION_PAGES } from '@/lib/section-pages';
import { NOINDEX_FOLLOW } from '@/lib/indexability';

const cfg = SECTION_PAGES['balance-hormones'];
export const metadata: Metadata = {
  title: cfg.metaTitle,
  description: cfg.metaDescription,
  alternates: { canonical: `https://vitalityscout.com${cfg.slug}` },
  // Deindexed: this persona page collapses onto the single hormone vertical
  // already served by /trt and /hormone-therapy. Kept live + crawlable so its
  // internal links still flow.
  robots: NOINDEX_FOLLOW,
};
export default function Page() {
  return <SectionPage config={cfg} />;
}
