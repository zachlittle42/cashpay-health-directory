import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SidebarShell from '@/components/SidebarShell';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import { buildFAQSchema } from '@/lib/jsonLd';
import type {
  CompareCategory,
  CompareProduct,
  CompareSection,
} from '@/lib/compare-types';

// Generic renderer for a "compare & buy" money-page category. Shared by the
// Longevity & Performance and DTC Telehealth sections — chrome differs only via
// the `section` prop (hub link + cross-links). Visual accent (emerald) is shared
// across all compare pages for a consistent "compare options" look.

function ProductCard({ product }: { product: CompareProduct }) {
  return (
    <div className="rounded-lg border border-gray-200 p-6 hover:border-emerald-300 transition-colors">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
            {product.featured && (
              <span className="rounded bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-800">
                Editor&apos;s Pick
              </span>
            )}
            {product.fdaStatus && (
              <span className="rounded bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">
                {product.fdaStatus}
              </span>
            )}
          </div>

          <p className="mt-1 text-sm text-emerald-700">{product.tagline}</p>
          <p className="mt-2 text-sm text-gray-600">{product.description}</p>

          <p className="mt-3 text-sm">
            <span className="font-medium text-gray-900">Best for:</span>{' '}
            <span className="text-gray-600">{product.bestFor}</span>
          </p>

          <div className="mt-3 grid gap-4 sm:grid-cols-2">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wide text-green-700">Pros</h4>
              <ul className="mt-1 space-y-1 text-sm text-gray-600">
                {product.pros.map((p) => (
                  <li key={p}>+ {p}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wide text-red-700">Cons</h4>
              <ul className="mt-1 space-y-1 text-sm text-gray-600">
                {product.cons.map((c) => (
                  <li key={c}>− {c}</li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-3 text-xs text-gray-400">
            Updated{' '}
            {new Date(product.lastVerified).toLocaleDateString('en-US', {
              month: 'short',
              year: 'numeric',
            })}
          </p>
        </div>

        <div className="sm:min-w-[170px] sm:text-right">
          <div className="text-xl font-bold text-gray-900">{product.priceDisplay}</div>
          {product.priceNote && (
            <p className="mt-1 text-xs text-gray-500">{product.priceNote}</p>
          )}
          {product.prescriptionRequired && (
            <p className="mt-2 text-xs font-medium text-amber-700">Prescription required</p>
          )}
          <a
            href={product.url}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="mt-3 inline-block rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
          >
            Visit Site →
          </a>
        </div>
      </div>
    </div>
  );
}

export default function CompareCategoryPage({
  category,
  products,
  section,
}: {
  category: CompareCategory;
  products: CompareProduct[];
  section: CompareSection;
}) {
  const faqSchema = buildFAQSchema(category.faqs);
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${category.name} Compared`,
    numberOfItems: products.length,
    itemListElement: products.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.name,
      url: p.url,
    })),
  };
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${category.name} Compared — Pricing & Reviews`,
    description: category.description,
    url: `https://vitalityscout.com/${category.slug}`,
    inLanguage: 'en-US',
    dateModified: '2026-06-13',
    isPartOf: {
      '@type': 'WebSite',
      name: 'VitalityScout',
      url: 'https://vitalityscout.com',
    },
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navigation />

      <SidebarShell>
      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-5xl px-4 py-3">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-emerald-600">Home</Link>
            <span className="mx-2">→</span>
            <Link href={section.hubHref} className="hover:text-emerald-600">{section.hubLabel}</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-900">{category.shortLabel}</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <section className="bg-gradient-to-b from-emerald-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="text-3xl">{category.icon}</span>
            <h1 className="text-3xl font-bold text-gray-900">{category.name}</h1>
          </div>
          <p className="text-lg text-gray-600">{category.description}</p>

          {/* AEO direct-answer lead, grounded in the product data below. */}
          <div className="mt-6 rounded-lg border-l-4 border-emerald-600 bg-emerald-50 p-5">
            <p className="aeo-answer text-base text-gray-800">{category.directAnswer}</p>
          </div>

          {category.safetyNotice && (
            <div className="mt-4 rounded-lg border-l-4 border-red-500 bg-red-50 p-5">
              <p className="text-sm text-red-800">{category.safetyNotice}</p>
            </div>
          )}

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-full bg-emerald-100 px-4 py-1.5 font-medium text-emerald-700">
              {category.priceRange}
            </span>
            <span className="rounded-full bg-gray-100 px-4 py-1.5 text-gray-600">
              {products.length} options compared
            </span>
            <span className="rounded-full bg-gray-100 px-4 py-1.5 text-gray-600">Buy online</span>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-4 pt-10">
        <p className="text-gray-700 leading-relaxed">{category.intro}</p>
      </section>

      {/* Comparison table */}
      <section className="mx-auto max-w-5xl px-4 py-10">
        <h2 className="mb-4 text-xl font-bold text-gray-900">Quick Comparison</h2>
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="px-4 py-3 font-semibold">Product</th>
                <th className="px-4 py-3 font-semibold">Price</th>
                <th className="px-4 py-3 font-semibold">Rx required</th>
                <th className="px-4 py-3 font-semibold">Best for</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {products.map((p) => (
                <tr key={p.slug} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <div className="font-medium text-gray-900">{p.name}</div>
                    <div className="text-xs text-gray-500">{p.brand}</div>
                  </td>
                  <td className="px-4 py-3 font-semibold text-gray-900">{p.priceDisplay}</td>
                  <td className="px-4 py-3 text-gray-600">
                    {p.prescriptionRequired ? 'Yes' : 'No'}
                  </td>
                  <td className="px-4 py-3 text-gray-600">{p.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-gray-400">
          Prices are estimates that change frequently — confirm current pricing on each brand&apos;s site.
        </p>
      </section>

      {/* Product cards */}
      <section className="mx-auto max-w-5xl px-4 pb-12">
        <h2 className="mb-6 text-xl font-bold text-gray-900">The Options, Compared</h2>
        <div className="space-y-4">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* FAQ — visible block mirrors the FAQPage schema above exactly */}
      <section className="mx-auto max-w-4xl px-4 pb-12">
        <h2 className="mb-4 text-xl font-bold text-gray-900">Frequently Asked Questions</h2>
        <div>
          {category.faqs.map((item) => (
            <details key={item.question} className="group border-b border-gray-200 py-5">
              <summary className="flex cursor-pointer items-start justify-between text-base font-semibold text-gray-900 hover:text-emerald-600">
                <span className="pr-4">{item.question}</span>
                <span className="text-emerald-600 transition-transform group-open:rotate-180">▼</span>
              </summary>
              <p className="mt-3 text-sm text-gray-700">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Related */}
      <section className="bg-emerald-50 px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-center text-xl font-bold text-gray-900">Keep Exploring</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[...(category.relatedLinks ?? []), ...section.relatedLinks].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg border border-emerald-200 bg-white p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{link.icon}</span>
                  <div>
                    <div className="font-semibold text-gray-900">{link.title}</div>
                    <div className="mt-1 text-sm text-gray-600">{link.desc}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {category.requiresMedicalDisclaimer && <MedicalDisclaimer />}
      </SidebarShell>

      <Footer />
    </main>
  );
}
