# VitalityScout - Claude Code Instructions

## Project Overview

VitalityScout is a cash-pay healthcare directory comparing traditional healthcare, telehealth, local clinics, and medical tourism options. Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Key Commands

```bash
npm run dev      # Development server
npm run build    # Production build (verify before committing)
npm run lint     # ESLint check
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── [category]/         # Dynamic category pages (labs, glp1, dental, etc.)
│   ├── destinations/       # Medical tourism destinations
│   ├── guides/             # Educational content guides
│   ├── longevity/          # Longevity hub and regional pages
│   ├── traditional-healthcare/  # US hospital directory
│   └── ...
├── components/             # Shared React components
└── lib/                    # Data, types, utilities
    ├── types.ts            # Core type definitions
    ├── providers-*.ts      # Provider data by category
    └── ...
```

## Content Guidelines

### Medical Content Requirements
- Include disclaimers for unproven treatments (stem cells, peptides)
- Use FDA/FTC compliant language - no efficacy claims without evidence
- For international treatments, note they're "not FDA-approved"
- Always include "consult your physician" guidance

### Standard Disclaimer Block (for experimental treatments)
```tsx
<div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
  <h3 className="text-lg font-bold text-red-900 mb-3">Important Regulatory Notice</h3>
  <p className="text-sm text-red-800">
    These treatments are NOT approved by the US FDA. The FDA has issued warnings
    about unproven therapies. This information is educational only—consult qualified
    medical professionals before pursuing any treatment.
  </p>
</div>
```

### Page Patterns
- All pages include `<Navigation />` and `<Footer />`
- Use JSON-LD schema markup for SEO
- Export metadata with title and description
- Include breadcrumb navigation back to parent sections

## Data Patterns

### Clinic/Provider Structure
```typescript
{
  name: string;
  location: string;
  region: string;
  priceRange: string;
  focus: string[];
  description: string;
  notable: string;
  tier: 'premium' | 'mid' | 'accessible';
}
```

### Destination Structure
```typescript
{
  slug: string;
  country: string;
  flag: string;
  categories: Category[];
  stats: { tourists, savings, topProcedures, flightTime };
  costExamples: { procedure, usPrice, localPrice }[];
  guideLinks: { title, href }[];
}
```

## Workflow

1. Read existing code before making changes
2. Follow established patterns in similar pages
3. Run `npm run build` before committing to verify compilation
4. Write clear commit messages describing what changed and why

## Documentation Files

- `README.md` - Repository documentation
- `STRATEGY.md` - Business strategy and monetization
- `STATUS.md` - Current status and development sprints
- `CLAUDE.md` - This file (Claude Code instructions)
