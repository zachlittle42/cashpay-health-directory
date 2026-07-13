// Subjective Health house unit for the bariatric-bridge decision page
// (Model-1 funnel surface). Server component.
//
// SHIPS OFF. This unit renders NOTHING unless NEXT_PUBLIC_SH_BRIDGE_UNIT is
// explicitly set to "on". It MUST NOT be switched on until BOTH of these clear
// (monetization-plan §5 + §6-D2):
//   1. The Subjective↔VitalityScout entity-chain / ownership-disclosure wording
//      is founder-confirmed (a factually wrong compliance disclosure on every
//      unit is worse than none). The disclosure text is a REQUIRED prop, passed
//      today as the *candidate* string only.
//   2. The creative passes the compliance eval-pass (LegitScript-certifiable
//      standard).
//
// Creative discipline (monetization-plan §5, verbatim rules): service-description
// language only — NO outcome claims, numbers, prices, guarantees, typicality
// implications, or drug names; program design/duration are statable, results are
// not. Every unit carries a "Sponsored" kicker and, under the CTA, the always-
// visible ownership disclosure (footer-only fails the FTC 2023 "unavoidable"
// standard — there is no arms-length defense when we own both sides).
//
// Routing/params per §5: weight/GLP-1 family → /plan (never /start, /plan-b, or
// the homepage), tagged partner=vitalityscout so it rides the existing intake
// rail with zero Subjective-side code.

const PLAN_HREF =
  '/plan?utm_source=vitalityscout&utm_medium=inline&utm_campaign=sh-bariatric-bridge' +
  '&utm_content=b1-muscle&partner=vitalityscout';

export default function SubjectiveBridgeUnit({
  ownershipDisclosure,
}: {
  // REQUIRED. The always-visible ownership disclosure line. Do not hardcode a
  // final string here — it is locked after the entity-chain check (§6-D2). Pass
  // the founder-confirmed wording at the call site.
  ownershipDisclosure: string;
}) {
  // Default OFF. Anything other than the explicit opt-in renders nothing, so the
  // page ships working and neutral without the unit.
  if (process.env.NEXT_PUBLIC_SH_BRIDGE_UNIT !== 'on') return null;

  return (
    <aside className="my-10 rounded-lg border border-gray-300 bg-gray-50 p-6">
      <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">Sponsored</p>
      {/* B1 creative — service-description only (§5): no numbers, no outcome
          claims, no drug names. */}
      <p className="text-lg font-semibold text-gray-900">
        A weight program built around your muscle, not just the scale.
      </p>
      <a
        href={PLAN_HREF}
        className="mt-3 inline-block rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-700"
      >
        Build my plan
      </a>
      {/* Always-visible ownership disclosure, directly under the CTA. */}
      <p className="mt-3 text-xs text-gray-500">{ownershipDisclosure}</p>
    </aside>
  );
}
