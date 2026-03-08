import type { Provider } from './types';

export function buildFAQSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function buildProviderSchema(provider: Provider) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: provider.name,
    description: provider.description,
    url: provider.url,
    ...(provider.destinationCity && {
      address: {
        '@type': 'PostalAddress',
        addressLocality: provider.destinationCity,
        addressCountry: provider.destinationCountry,
      },
    }),
    ...(provider.accreditations &&
      provider.accreditations.length > 0 && {
        hasCredential: provider.accreditations.map((acc) => ({
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: acc,
        })),
      }),
    priceRange: provider.pricingDisplay,
    knowsAbout: provider.services,
  };
}

export function buildCategoryListSchema(
  categoryName: string,
  providers: Provider[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${categoryName} Providers`,
    numberOfItems: providers.length,
    itemListElement: providers.map((provider, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: provider.name,
      url: `https://vitalityscout.com/providers/${provider.slug}`,
    })),
  };
}
