// Public offers researched on this date, not checkout quotes or treatment advice.
// Keep quantities, fees, and uncertainty together when reusing a price elsewhere.
export const ED_VERIFIED_AT = '2026-09-17';
export const ED_VERIFIED_LABEL = 'September 17, 2026';

export const ED_SOURCES = {
  hims: { label: 'Hims ED prices and inclusions', url: 'https://www.hims.com/erectile-dysfunction' },
  himsCancel: { label: 'Hims cancellation policy', url: 'https://support.hims.com/hc/en-us/articles/360000962263-How-do-I-cancel-my-subscription' },
  ro: { label: 'Ro published medication prices', url: 'https://ro.co/pricing/' },
  roSildenafil: { label: 'Ro sildenafil plans and shipping', url: 'https://ro.co/erectile-dysfunction/sildenafil/' },
  roCancel: { label: 'Ro order cancellation', url: 'https://care.getroman.com/hc/en-us/articles/360058861331-How-to-cancel-an-order' },
  bluechew: { label: 'BlueChew live plan selector', url: 'https://bluechew.com/plans' },
  bluechewShipping: { label: 'BlueChew consultation and shipping fees', url: 'https://bluechew.com/our-stories/how-to-create-and-manage-your-bluechew-account' },
  bluechewSil: { label: 'BlueChew SIL product and compounded status', url: 'https://bluechew.com/sildenafil' },
  lemonaid: { label: 'Lemonaid ED consultation and medication prices', url: 'https://www.lemonaidhealth.com/services/erectile-dysfunction' },
  lemonaidCancel: { label: 'Lemonaid cancellation policy', url: 'https://www.lemonaidhealth.com/legals/cancellation-policy' },
  costPlusSildenafil: { label: 'Cost Plus sildenafil 50 mg price calculator', url: 'https://www.costplusdrugs.com/medications/sildenafilcitrate-50mg-tablet/' },
  costPlusTadalafil: { label: 'Cost Plus tadalafil 5 mg price calculator', url: 'https://www.costplusdrugs.com/medications/tadalafil-5mg-tablet/' },
  fdaCompounding: { label: 'FDA: compounded medicines versus approved generics', url: 'https://www.fda.gov/drugs/human-drug-compounding/compounding-and-fda-questions-and-answers' },
  fdaPharmacy: { label: 'FDA: choosing an online pharmacy', url: 'https://www.fda.gov/consumers/consumer-updates/how-buy-medicines-safely-online-pharmacy' },
  niddk: { label: 'NIDDK: treatment for erectile dysfunction', url: 'https://www.niddk.nih.gov/health-information/urologic-diseases/erectile-dysfunction/treatment' },
  niddkMedicines: { label: 'NIDDK: ED medicines and nitrate warning (PDF)', url: 'https://www.niddk.nih.gov/-/media/Files/Urologic-Diseases/ED_EZ_508.pdf' },
} as const;

export type EdSourceId = keyof typeof ED_SOURCES;

export function edMoney(cents: number): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: cents % 100 === 0 ? 0 : 2 }).format(cents / 100);
}

export const BLUECHEW_SHIPPING_OPTIONS = [
  { name: 'Ground', cents: 500 },
  { name: 'Expedited', cents: 695 },
  { name: 'Two-day', cents: 995 },
  { name: 'Overnight', cents: 2995 },
] as const;
export const BLUECHEW_STANDARD_SHIPPING_CENTS = BLUECHEW_SHIPPING_OPTIONS[0].cents;
export const BLUECHEW_PLANS = [
  { id: 'sil', name: 'SIL', medication: 'Sildenafil', strength: '45 mg', packs: [
    { quantity: 6, medicationCents: 3000 }, { quantity: 10, medicationCents: 4000 },
    { quantity: 17, medicationCents: 6500 }, { quantity: 34, medicationCents: 12000 },
  ] },
  { id: 'tad', name: 'TAD', medication: 'Tadalafil', strength: '9 mg', packs: [
    { quantity: 4, medicationCents: 3000 }, { quantity: 7, medicationCents: 4000 },
    { quantity: 14, medicationCents: 7000 }, { quantity: 28, medicationCents: 12500 },
  ] },
] as const;

export const COST_PLUS_EXAMPLES = {
  sildenafil: { medication: 'Sildenafil', strength: '50 mg', quantity: 30, medicationCents: 636, shippingCents: 525, sourceId: 'costPlusSildenafil' as const },
  tadalafil: { medication: 'Tadalafil', strength: '5 mg', quantity: 30, medicationCents: 597, shippingCents: 525, sourceId: 'costPlusTadalafil' as const },
};

export function edFillTotal(example: { medicationCents: number; shippingCents: number }): number {
  return example.medicationCents + example.shippingCents;
}

export type EdOffer = {
  id: string;
  providerId: string;
  provider: string;
  product: string;
  format: string;
  price: string;
  priceDetail: string;
  includes: string;
  firstPayment: string;
  renewal: string;
  commitment: string;
  cancellation: string;
  unknowns: string;
  url: string;
  sourceIds: EdSourceId[];
};

const silStarter = BLUECHEW_PLANS[0].packs[0];
const pharmacySil = COST_PLUS_EXAMPLES.sildenafil;

export const ED_OFFERS: EdOffer[] = [
  {
    id: 'hims', providerId: 'hims', provider: 'Hims',
    product: 'Generic sildenafil or tadalafil tablets', format: 'Generic tablets; compounded chews are separate products.',
    price: 'Sildenafil from $22/month', priceDetail: 'Tadalafil advertised from $24/month. Starting-price strength and tablet count are not specified on the landing page.',
    includes: 'Online assessment, shipping, check-ins and provider messaging are listed as included.',
    firstPayment: 'Confirm total due now and how many months it covers.', renewal: 'Exact renewal charge not verified for the advertised starting price.',
    commitment: 'Subscription; qualifying billing period not disclosed with the starting price.',
    cancellation: 'Act at least 48 hours before the next order date. Processing or shipped orders are not canceled by ending the subscription.',
    unknowns: 'Strength, quantity, upfront commitment and checkout fees for the starting offer.',
    url: ED_SOURCES.hims.url, sourceIds: ['hims', 'himsCancel'],
  },
  {
    id: 'ro', providerId: 'ro', provider: 'Ro (Roman)',
    product: 'Generic sildenafil tablets', format: '25 mg, 50 mg or 100 mg tablets; compounded Sparks and gummies are separate.',
    price: '$4 / $6 / $10 per dose', priceDetail: 'Published prices for 25 / 50 / 100 mg respectively. Quantity and shipment frequency determine the bill.',
    includes: 'Free shipping and unlimited follow-up messaging. A separate consultation charge was not established from the pages reviewed.',
    firstPayment: 'Check the prescribed quantity and order minimum before paying.', renewal: 'Recurring plan; confirm the next order total and interval.',
    commitment: 'Monthly recurring pricing shown; other shipment schedules can change the price.',
    cancellation: 'Turn off automatic shipments in your account. Shipped orders cannot be canceled or returned.',
    unknowns: 'Exact starter quantity, any promotion, initial charge and patient-specific renewal total.',
    url: ED_SOURCES.roSildenafil.url, sourceIds: ['ro', 'roSildenafil', 'roCancel'],
  },
  {
    id: 'bluechew', providerId: 'bluechew', provider: 'BlueChew',
    product: `SIL: ${silStarter.quantity} × 45 mg sildenafil`, format: 'Compounded medication, not FDA-approved. Confirm dispensed form; the selector and product page use different format labels.',
    price: `${edMoney(silStarter.medicationCents + BLUECHEW_STANDARD_SHIPPING_CENTS)}/monthly shipment`,
    priceDetail: `${edMoney(silStarter.medicationCents)} medication + ${edMoney(BLUECHEW_STANDARD_SHIPPING_CENTS)} standard shipping, before tax. Larger packs and TAD plans differ.`,
    includes: 'Online medical consultation included. Expedited shipping costs extra.',
    firstPayment: 'Standard published plan, with no promotional discount applied in this comparison.',
    renewal: 'Monthly plan price shown; confirm the refill total at checkout.', commitment: 'Monthly subscription; no minimum term displayed for this plan.',
    cancellation: 'Plan selector says you can change or cancel. Check the processing cutoff; a refund was not verified.',
    unknowns: 'Taxes, state/patient eligibility, current new-patient availability and exact cancellation cutoff.',
    url: ED_SOURCES.bluechew.url, sourceIds: ['bluechew', 'bluechewShipping', 'bluechewSil'],
  },
  {
    id: 'lemonaid', providerId: 'lemonaid-mens-health', provider: 'Lemonaid Health',
    product: 'ED visit plus prescribed medication', format: 'Generic and brand options; identify the exact product and formulation before comparing.',
    price: '$25 consult + medication from $2/pill', priceDetail: 'One consultation is advertised to cover 12 refills. The starting-price strength and quantity are not specified.',
    includes: 'Free standard shipping for the delivery offer. Medicine is an additional charge.',
    firstPayment: 'Consultation plus your medication order; a complete starter total is not verified.',
    renewal: 'Medicine refills cost extra. Existing-patient script renewal is advertised with a free visit; confirm eligibility.',
    commitment: 'Recurring delivery options; exact plan and refill schedule must be confirmed.',
    cancellation: 'Request cancellation at least 48 hours before refill processing or the next billing cycle.',
    unknowns: 'Drug, strength, quantity, first medication charge and subsequent refill prices.',
    url: ED_SOURCES.lemonaid.url, sourceIds: ['lemonaid', 'lemonaidCancel'],
  },
  {
    id: 'cost-plus', providerId: 'cost-plus-drugs', provider: 'Cost Plus Drugs',
    product: `${pharmacySil.quantity} × ${pharmacySil.strength} sildenafil tablets`, format: 'Generic pharmacy fill with a prescription from a separate clinician.',
    price: `${edMoney(edFillTotal(pharmacySil))}/fill before tax`,
    priceDetail: `${edMoney(pharmacySil.medicationCents)} medicine (pharmacy labor included) + ${edMoney(pharmacySil.shippingCents)} standard shipping. This is a 30-tablet fill, not a monthly treatment plan.`,
    includes: 'Medicine and standard shipping in this example. Clinician visit, prescription and any tests are separate.',
    firstPayment: 'Shown fill total plus tax and any separate cost of obtaining a prescription.',
    renewal: 'Each future fill is priced at the then-current pharmacy rate.', commitment: 'Pharmacy purchase; this example includes no telehealth membership. Check any auto-refill settings.',
    cancellation: 'Check the pharmacy’s current order terms before submitting a fill.',
    unknowns: 'Consultation cost, taxes, future prices and whether this prescription is appropriate for you.',
    url: ED_SOURCES.costPlusSildenafil.url, sourceIds: ['costPlusSildenafil'],
  },
];
