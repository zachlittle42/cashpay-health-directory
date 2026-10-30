// Destination dossier types for the rebuilt medical-tourism journeys
// (/destinations/turkey, /destinations/south-korea). The hub is organised
// around the six questions a first-time medical traveller asks, in order:
//   1. What do people go there for?        -> treatments
//   2. Which clinics?                        -> clinics (+ how the system works)
//   3. What does it cost?                    -> prices
//   4. What is the process and the result?   -> process, results, safety
//   5. Travel and logistics?                 -> planning
//   6. How do I book?                        -> booking
// Every number a dossier shows must point at a Source by id; the
// destination-journeys test enforces that every source has an https URL and
// every number-bearing row cites at least one.

export type JourneyStageId = 'treatments' | 'clinics' | 'prices' | 'expect' | 'travel' | 'book';

export interface Source {
  id: string;
  /** Short label shown in the sources list. */
  label: string;
  url: string;
  /** Who published it, e.g. "Korea Health Industry Development Institute". */
  publisher: string;
  /** Publication or access date, YYYY-MM-DD or YYYY-MM. */
  date: string;
  /** official = government, regulator, court or accreditor; press = reputable news;
   *  clinic = a provider's own published page; study = peer-reviewed or professional-society data;
   *  marketplace = booking platform, agency or aggregator (treat prices as indicative);
   *  forum = patient forum (anecdote, never a statistic). */
  kind: 'official' | 'press' | 'clinic' | 'study' | 'marketplace' | 'forum';
}

export interface KeyFact {
  value: string;
  label: string;
  sourceIds: string[];
}

/** Q1: a treatment category people travel for. */
export interface Treatment {
  name: string;
  /** Why this destination for this treatment, in one or two sentences. */
  whyHere: string;
  /** Share of foreign patients, volume, or similar, if an official figure exists. */
  demand?: string;
  typicalStay: string;
  guideHref?: string;
  sourceIds: string[];
}

/** Q2: a named provider and what is documented about it. Never a ranking. */
export interface ClinicProfile {
  name: string;
  district: string;
  type: 'hospital' | 'clinic' | 'screening center' | 'dental' | 'eye';
  url?: string;
  specialties: string[];
  /** Named operating doctors and their stated certification, or "Not named on international page". */
  namedDoctors: string;
  /** Registration, accreditation and anything a regulator or court has said. State the list checked. */
  credentials: string;
  /** Sanctions, incidents, or structural caveats the reader should weigh. */
  cautions?: string;
  /** Prices published on the clinic's own site, with currency and date; else "Not published" plus any marketplace range, labelled. */
  publishedPrices: string;
  booking: {
    /** e.g. "Online form, WhatsApp, KakaoTalk, email" */
    channels: string;
    /** What the first consultation needs and how it runs. */
    consult: string;
    deposit?: string;
    languages?: string;
    includes?: string;
    bookingUrl?: string;
  };
  sourceIds: string[];
  /** Phrases that identify this provider's rows on the official registry (src/data/registries):
   *  matched accent- and case-insensitively as whole words in the published facility name
   *  ("memorial" badges every Memorial hospital). Omit when the brand could not be matched. */
  registryMatch?: string[];
}

/** Q3: a cost row. */
export interface ProcedureCost {
  procedure: string;
  usPrice: string;
  localPrice: string;
  /** Nights most clinics ask you to stay before flying home. */
  typicalStay: string;
  guideHref?: string;
  sourceIds: string[];
  note?: string;
}

export interface Step {
  title: string;
  body: string;
  sourceIds?: string[];
  /** Outbound official lookup or portal, when the step is "check X". */
  link?: { label: string; url: string };
}

export interface Point {
  title: string;
  body: string;
  sourceIds: string[];
}

export interface Faq {
  question: string;
  answer: string;
}

export interface JourneyLink {
  href: string;
  label: string;
  blurb?: string;
}

export interface JourneyStage {
  id: JourneyStageId;
  label: string;
  /** The reader's question at this stage, in their words. */
  question: string;
  links: JourneyLink[];
}

export interface PlanningInfo {
  entry: Step;
  flights: Step;
  whereToStay: Step;
  payment: Step;
  stayAndFlyHome: Step;
  aftercareAtHome: Step;
}

export interface DestinationDossier {
  slug: string;
  country: string;
  displayName: string;
  flag: string;
  /** H1. Keep the destination and the words "medical tourism" in it. */
  heroTitle: string;
  /** Answer-first paragraph: who goes, for what, what it costs, the one risk to know. */
  quickAnswer: string;
  metaTitle: string;
  metaDescription: string;
  /** Date the dossier's facts were last checked, YYYY-MM-DD. Drives dateModified and the visible stamp. */
  verifiedAt: string;
  verifiedLabel: string;
  keyFacts: KeyFact[];

  /** Q1 */
  treatmentsIntro: string;
  treatments: Treatment[];

  /** Q2 */
  clinicsBar: string;
  clinics: ClinicProfile[];
  howItWorks: Step[];

  /** Q3 */
  pricesNote: string;
  procedures: ProcedureCost[];

  /** Q4 */
  process: Step[];
  results: Point[];
  safety: { verdict: string; points: Point[] };
  redFlags: string[];

  /** Q5 */
  planning: PlanningInfo;

  /** Q6 */
  booking: Step[];
  vetChecklist: string[];

  faqs: Faq[];
  sources: Source[];
}
