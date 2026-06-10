// Shared YMYL trust block for clinic-directory pages: a medical disclaimer
// (this is information, not advice; pricing is estimated; verify with the
// provider) plus an FTC affiliate disclosure. Rendered near the foot of each
// directory grid page so the disclosure is clear and conspicuous.
export default function MedicalDisclaimer() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-8">
      <div className="rounded-lg border border-amber-200 bg-amber-50 p-5 text-sm leading-relaxed text-amber-900">
        <p className="mb-2">
          <strong>Medical disclaimer:</strong> This page is general information, not medical advice.
          Listings are aggregated from public sources and prices are estimates that may be out of
          date &mdash; confirm current pricing, services, and provider credentials directly with each
          clinic. Talk to a licensed clinician before starting any medication or treatment.
        </p>
        <p>
          <strong>Affiliate disclosure:</strong> VitalityScout may earn a commission from some links,
          at no additional cost to you. This never affects which providers we list or how we describe
          them.
        </p>
      </div>
    </section>
  );
}
