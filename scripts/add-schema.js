const fs = require('fs');
const path = require('path');

const SCHEMA_TEMPLATES = {
  guide: (title, description, url, keywords) => `
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '${title}',
    description: '${description}',
    author: {
      '@type': 'Organization',
      name: 'VitalityScout'
    },
    publisher: {
      '@type': 'Organization',
      name: 'VitalityScout'
    },
    datePublished: '2024-12-01',
    dateModified: '2024-12-21',
    mainEntityOfPage: '${url}',
    articleSection: 'Health Guides',
    keywords: ${JSON.stringify(keywords)}
  };`,

  category: (title, description, url, category) => `
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: '${title}',
    description: '${description}',
    url: '${url}',
    about: {
      '@type': 'MedicalBusiness',
      name: '${category} Services Directory'
    }
  };`,
};

const guidesToUpdate = [
  {
    path: 'src/app/guides/at-home-lab-testing-guide/page.tsx',
    title: 'At-Home Lab Testing Guide',
    keywords: ['at-home lab testing', 'blood test', 'biomarkers', 'Quest', 'LabCorp'],
  },
  {
    path: 'src/app/guides/gastric-sleeve-mexico-safety/page.tsx',
    title: 'Gastric Sleeve in Mexico: Safety Guide',
    keywords: ['gastric sleeve Mexico', 'bariatric surgery', 'Tijuana', 'medical tourism safety'],
  },
  {
    path: 'src/app/guides/dexa-scan-guide/page.tsx',
    title: 'DEXA Scan Complete Guide',
    keywords: ['DEXA scan', 'body composition', 'bone density', 'body fat percentage'],
  },
  {
    path: 'src/app/guides/mexico-medical-tourism-planner/page.tsx',
    title: 'Mexico Medical Tourism Trip Planner',
    keywords: ['Mexico medical tourism', 'Tijuana', 'border crossing', 'trip planning'],
  },
  {
    path: 'src/app/guides/turkey-hair-transplant-trip-planner/page.tsx',
    title: 'Turkey Hair Transplant Trip Planner',
    keywords: ['Turkey trip planning', 'Istanbul', 'hair transplant travel', 'medical tourism'],
  },
  {
    path: 'src/app/guides/medical-travel-insurance-guide/page.tsx',
    title: 'Medical Travel Insurance Guide',
    keywords: ['medical tourism insurance', 'travel insurance', 'complications coverage'],
  },
];

console.log('Adding schema markup to guides...');
console.log(`Will update ${guidesToUpdate.length} guide files`);

guidesToUpdate.forEach(guide => {
  const filePath = path.join(process.cwd(), guide.path);

  if (!fs.existsSync(filePath)) {
    console.log(`❌ File not found: ${guide.path}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Check if schema already exists
  if (content.includes('application/ld+json')) {
    console.log(`⏭️  Schema already exists: ${guide.path}`);
    return;
  }

  // Find the export default function line
  const functionMatch = content.match(/export default function \w+\(\) \{/);
  if (!functionMatch) {
    console.log(`❌ Could not find function: ${guide.path}`);
    return;
  }

  const url = `https://vitalityscout.com/${guide.path.replace('src/app/', '').replace('/page.tsx', '')}`;
  const description = `Complete guide to ${guide.title.toLowerCase()}`;

  const schema = SCHEMA_TEMPLATES.guide(guide.title, description, url, guide.keywords);

  // Insert schema after function declaration
  const insertPoint = functionMatch.index + functionMatch[0].length;
  const newContent = content.slice(0, insertPoint) + schema + '\n\n  return (\n    <main className="min-h-screen bg-white">\n      <script\n        type="application/ld+json"\n        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}\n      />' + content.slice(insertPoint).replace('return (\n    <main className="min-h-screen bg-white">', '');

  fs.writeFileSync(filePath, newContent);
  console.log(`✅ Added schema: ${guide.path}`);
});

console.log('\n✅ Schema markup update complete!');
