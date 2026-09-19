# Referral launch packet

Prepared September 17, 2026. No application, message, contract, affiliate approval, or payment has been submitted. Public program information is not an approval for VitalityScout.

## What is ready

- Existing ED guide retained at https://vitalityscout.com/guides/online-ed-treatment.
- Public provider offers checked September 17; source dates and exclusions shown.
- Direct provider access without a VitalityScout email gate.
- Stable provider and placement identifiers, consented provider-click measurement, and configuration for approved referral links.
- The fresh baseline records 247 Bing clicks to the ED guide across the four latest weekly page buckets (August 21, August 28, September 4, September 11). That is search traffic, not consultations, leads, purchases, or a calendar-month forecast. See `growth-baseline-2026-09-17.md` for exact windows and source caveats.

## Partner routes checked

| Priority | Route | What is verified | Still needed |
| --- | --- | --- | --- |
| 1 | [Ro partnership inquiry](https://ro.co/contact-us/send-message-im-interested-in-partnering-with-ro/) | Ro publishes an official partnership contact route. | Confirm it accepts US comparison publishers for ED and obtain actual commercial and reporting terms. |
| 2 | [BlueChew through CrakRevenue](https://www.crakrevenue.com/offers/health/) | The network publicly lists BlueChew as a health offer. | Account approval, current offer availability, permitted traffic, tracking, reversals and payout terms. No public rate has been assumed. |
| 3 | Hims US publisher relationship | The US provider and offers are verified; public US publisher terms were not established. | Existing approved account or introduction to the US affiliate team. The [Australian program](https://hims.com.au/partner-program) is not a substitute for a US agreement. |
| 4 | [Lemonaid partnerships](https://www.lemonaidhealth.com/partnerships) | Official B2B partnership route. | Confirm whether publisher referrals are supported; this page does not establish an affiliate program. |

Do not use consumer refer-a-friend links as commercial publisher links. For example, the [Hers promotion terms](https://www.hims.com/promotions/terms) restrict their consumer program to personal sharing and exclude commercial sites. Do not infer Hims US publisher terms from those terms.

## Ready-to-review inquiry draft

Subject: VitalityScout ED comparison publisher partnership

Hello,

I run VitalityScout, a US-focused resource for comparing self-pay healthcare services. Our ED guide compares specific public offers, added fees, recurring terms, and separate-pharmacy alternatives, with source links and verification dates.

The ED guide received 247 Bing search clicks across the four latest weekly reporting buckets ending September 11, 2026. We are building a measurable provider-referral path and would like to understand whether your program accepts editorial comparison publishers.

Could you share your publisher eligibility criteria, approved ED landing pages, what counts as a payable outcome, attribution window, permitted tracking parameters, cancellation/reversal rules, and reporting or export options? We would also need your disclosure and content requirements and any restrictions on search traffic or comparative claims.

Our comparison is available at https://vitalityscout.com/guides/online-ed-treatment. We do not promise clinical outcomes or present an outbound click as a patient conversion.

Thank you,
Zach / VitalityScout

## Approval and configuration handoff

1. Owner supplies the existing program/account or approves an actual application after review of its terms. Complete legal-entity, tax, payment and agreement fields through the provider’s secure flow, never in a repository or chat message.
2. Obtain an approved link and a documented outcome definition. Record eligibility, exclusions, attribution window, reversals and net payout reporting. A provider click is not a qualified lead; a captured contact is not an accepted referral.
3. Add only the issued HTTPS URL to Vercel production using `ED_HIMS_REFERRAL_URL`, `ED_RO_REFERRAL_URL`, `ED_BLUECHEW_REFERRAL_URL`, or `ED_LEMONAID_REFERRAL_URL`. Rebuild to update static pages. No arbitrary patient data or invented sub-ID is appended. Direct links remain the fallback.
4. Verify the issued destination and reporting with the partner’s test procedure. Do not submit fabricated patient details, place an order, or start a prescription to test attribution.
5. Import the partner’s confirmed reports. Keep accepted leads, booked visits, paid orders and net commissions separate; record the source report and period. Keep unknown values null rather than zero. If a report attributes only to the provider, do not invent a landing-page allocation.

## Operational inquiry delivery

Production configuration checked September 17 has analytics keys but no `RESEND_API_KEY`, `LEAD_NOTIFICATION_EMAIL`, or `DATABASE_URL`. Owner input is pending for the contact destination and existing delivery service. The new forms require a real configured delivery route; PostHog is not used as a contact database. Do not activate collection until the destination, sender domain, delivery and response ownership are confirmed.

Keep contact details and clinical free text out of analytics and the public scorecard. Analytics uses opaque IDs. Clinical assessment belongs with the provider. Clinical reviewer engagement remains a separate owner/provider step; no reviewer has been fabricated.

## Review cadence

Weekly: acquisition by engine and landing page; consented provider clicks and denominator; delivered contacts; partner-confirmed outcomes; missing or reversed outcomes; net revenue. Use the deployment date as a measurement cutover because historical PostHog automatic capture and new consented capture are not directly comparable.

Monthly: recheck the five ED offers, recheck published cancellation terms, and consider expansion only where query demand or observed referrals justify it. Maintain relevant alternatives even when they do not pay commission.
