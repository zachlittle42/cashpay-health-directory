import type { Metadata } from 'next';

// The page is a client component (interactive state map) and can't export
// metadata itself — this route layout supplies title/description/canonical.
export const metadata: Metadata = {
  title: { absolute: 'US Healthcare by Region: Costs & Systems by State' },
  description:
    'Compare US healthcare costs, major health systems, and cash-pay options by region and state — an interactive guide to navigating care across the country.',
  alternates: { canonical: 'https://vitalityscout.com/guides/us-healthcare-by-region' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
