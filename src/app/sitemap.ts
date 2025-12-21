import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vitalityscout.com';

  // Static pages
  const staticPages = [
    '',
    '/telehealth',
    '/local-clinics',
    '/medical-tourism',
    '/traditional-healthcare',
    '/guides',
    '/faq',
  ];

  // Category pages
  const categories = [
    'labs', 'glp1', 'trt', 'dexa', 'vo2max', 'iv', 'longevity',
    'dental', 'hair_transplant', 'bariatric', 'plastic_surgery', 'fertility',
    'orthopedic', 'cardiac', 'vision'
  ];

  // Guide pages
  const guides = [
    'glp1-weight-loss-complete-guide',
    'hair-transplant-turkey-guide',
    'at-home-lab-testing-guide',
    'gastric-sleeve-mexico-safety',
    'dexa-scan-guide',
    'mexico-medical-tourism-planner',
    'turkey-hair-transplant-trip-planner',
    'medical-travel-insurance-guide',
    'us-healthcare-by-region',
  ];

  // FAQ pages
  const faqs = ['', 'glp1', 'medical-tourism', 'labs', 'hair-transplant'];

  // US States
  const states = [
    'alabama', 'alaska', 'arizona', 'arkansas', 'california', 'colorado',
    'connecticut', 'delaware', 'florida', 'georgia', 'hawaii', 'idaho',
    'illinois', 'indiana', 'iowa', 'kansas', 'kentucky', 'louisiana',
    'maine', 'maryland', 'massachusetts', 'michigan', 'minnesota',
    'mississippi', 'missouri', 'montana', 'nebraska', 'nevada',
    'new-hampshire', 'new-jersey', 'new-mexico', 'new-york',
    'north-carolina', 'north-dakota', 'ohio', 'oklahoma', 'oregon',
    'pennsylvania', 'rhode-island', 'south-carolina', 'south-dakota',
    'tennessee', 'texas', 'utah', 'vermont', 'virginia', 'washington',
    'west-virginia', 'wisconsin', 'wyoming'
  ];

  return [
    // Static pages - highest priority
    ...staticPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: path === '' ? 1 : 0.9,
    })),

    // Category pages - high priority
    ...categories.map((cat) => ({
      url: `${baseUrl}/${cat}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),

    // Guide pages - high priority content
    ...guides.map((guide) => ({
      url: `${baseUrl}/guides/${guide}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),

    // FAQ pages
    ...faqs.map((faq) => ({
      url: `${baseUrl}/faq${faq ? `/${faq}` : ''}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),

    // State pages - SEO goldmine
    ...states.map((state) => ({
      url: `${baseUrl}/traditional-healthcare/${state}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),

    // Destinations
    {
      url: `${baseUrl}/destinations/mexico`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/destinations/turkey`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/destinations/south-korea`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ];
}
