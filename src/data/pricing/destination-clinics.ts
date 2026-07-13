// GENERATED — DO NOT HAND-EDIT.
// Regenerate from scripts/ingest/pricing/destination-id-map.json (the batch id map).
// Per-clinic display metadata for the verified destination-pricing store
// (src/data/pricing/destination-pricing.ts). Keyed by stable entity id.
//
// cluster is the crawl cluster the clinic was verified under and is what the
// /guides/*-prices index pages filter on (costa-rica-dental, mexico-dental,
// mexico-bariatric, turkey-hair).

export interface DestinationClinicMeta {
  name: string;
  city: string;
  country: string;
  cluster: string;
}

export const DESTINATION_CLINICS: Record<string, DestinationClinicMeta> = {
  "c_08ed14e807": { name: "Cosmetic & Implant Dentistry Center", city: "Los Algodones", country: "Mexico", cluster: "mexico-dental" },
  "c_0b1a41351a": { name: "Cancun Cosmetic Dentistry", city: "Cancun", country: "Mexico", cluster: "mexico-dental" },
  "c_1031b3984e": { name: "Elias Ortiz & Company", city: "Tijuana", country: "Mexico", cluster: "mexico-bariatric" },
  "c_116f3c9d2f": { name: "Elithair", city: "Istanbul", country: "Turkey", cluster: "turkey-hair" },
  "c_1cb65bf83c": { name: "Jet Medical Tourism", city: "Tijuana", country: "Mexico", cluster: "mexico-bariatric" },
  "c_20bfd85e2b": { name: "Meza Dental Care", city: "San Jose", country: "Costa Rica", cluster: "costa-rica-dental" },
  "c_2c8871a496": { name: "Tijuana Bariatric Center", city: "Tijuana", country: "Mexico", cluster: "mexico-bariatric" },
  "c_2fce0c5ccb": { name: "Clinicana", city: "Istanbul", country: "Turkey", cluster: "turkey-hair" },
  "c_38df173514": { name: "ALO Bariatrics", city: "Tijuana", country: "Mexico", cluster: "mexico-bariatric" },
  "c_591891c2c6": { name: "Supreme Dental Clinic", city: "Los Algodones", country: "Mexico", cluster: "mexico-dental" },
  "c_5ce219f1af": { name: "Marietta Dental Care", city: "Los Algodones", country: "Mexico", cluster: "mexico-dental" },
  "c_601102d718": { name: "Dr. Sandy Martinez Bariatrics", city: "Tijuana", country: "Mexico", cluster: "mexico-bariatric" },
  "c_623956384f": { name: "Dr. Serkan Aygin Clinic", city: "Istanbul", country: "Turkey", cluster: "turkey-hair" },
  "c_6323812e83": { name: "Hairneva Clinic", city: "Istanbul", country: "Turkey", cluster: "turkey-hair" },
  "c_674a127f6c": { name: "Asli Tarcan Clinic", city: "Istanbul", country: "Turkey", cluster: "turkey-hair" },
  "c_699ab28c57": { name: "Cancun Dental Specialists", city: "Cancun", country: "Mexico", cluster: "mexico-dental" },
  "c_6c000ed31a": { name: "Hermest Hair Clinic", city: "Istanbul", country: "Turkey", cluster: "turkey-hair" },
  "c_6ddd31dcc9": { name: "Dental Destinations Cancun", city: "Cancun", country: "Mexico", cluster: "mexico-dental" },
  "c_77ea59e5ad": { name: "A1 Smile Design", city: "Playa del Carmen", country: "Mexico", cluster: "mexico-dental" },
  "c_80a503e112": { name: "Dental Costa Rica", city: "San Jose", country: "Costa Rica", cluster: "costa-rica-dental" },
  "c_83bd7525f6": { name: "Cancun Dental Design", city: "Cancun", country: "Mexico", cluster: "mexico-dental" },
  "c_83d00142f7": { name: "Capilclinic", city: "Istanbul", country: "Turkey", cluster: "turkey-hair" },
  "c_87aa362c91": { name: "Tecnifue International", city: "Istanbul", country: "Turkey", cluster: "turkey-hair" },
  "c_95bb00a0f9": { name: "Flikier Dental Institute", city: "San Jose", country: "Costa Rica", cluster: "costa-rica-dental" },
  "c_97f7480199": { name: "NIMCLINIC", city: "Istanbul", country: "Turkey", cluster: "turkey-hair" },
  "c_9bbf261a7b": { name: "Cosmedica", city: "Istanbul", country: "Turkey", cluster: "turkey-hair" },
  "c_a03fd59837": { name: "Sule Hair Transplant", city: "Istanbul", country: "Turkey", cluster: "turkey-hair" },
  "c_a3f3b49a7d": { name: "Obesity Control Center", city: "Tijuana", country: "Mexico", cluster: "mexico-bariatric" },
  "c_a403195226": { name: "ConfiDental", city: "San Jose", country: "Costa Rica", cluster: "costa-rica-dental" },
  "c_a76b29f448": { name: "Ocean Dental Cancun", city: "Cancun", country: "Mexico", cluster: "mexico-dental" },
  "c_a8903103b9": { name: "Costa Rica Dental Team", city: "San Jose", country: "Costa Rica", cluster: "costa-rica-dental" },
  "c_a8d8e07e61": { name: "Dr. Cinik Hair Transplant Clinic", city: "Istanbul", country: "Turkey", cluster: "turkey-hair" },
  "c_ab14fc982f": { name: "Dental Work Mexico", city: "Cancun", country: "Mexico", cluster: "mexico-dental" },
  "c_ade098b681": { name: "Longevita", city: "Istanbul", country: "Turkey", cluster: "turkey-hair" },
  "c_ae737b32df": { name: "Nova Dental", city: "Escazu", country: "Costa Rica", cluster: "costa-rica-dental" },
  "c_af04db0bb1": { name: "Tijuana Bariatrics", city: "Tijuana", country: "Mexico", cluster: "mexico-bariatric" },
  "c_b222833d62": { name: "Bariatrics MX", city: "Tijuana", country: "Mexico", cluster: "mexico-bariatric" },
  "c_b677e3a0dc": { name: "Sani Dental Group", city: "Los Algodones", country: "Mexico", cluster: "mexico-dental" },
  "c_bd77adb8a8": { name: "Pompeii Surgical", city: "Tijuana", country: "Mexico", cluster: "mexico-bariatric" },
  "c_bec994506b": { name: "Dr. Jalil Illan Weight Loss Center", city: "Tijuana", country: "Mexico", cluster: "mexico-bariatric" },
  "c_bede3930f2": { name: "Dentist in Playa del Carmen", city: "Playa del Carmen", country: "Mexico", cluster: "mexico-dental" },
  "c_bf7331db06": { name: "Dental Del Rio", city: "Los Algodones", country: "Mexico", cluster: "mexico-dental" },
  "c_ccb3bd5247": { name: "Renew Bariatrics", city: "Tijuana", country: "Mexico", cluster: "mexico-bariatric" },
  "c_dba064f4cd": { name: "Algodones Dental Center", city: "Los Algodones", country: "Mexico", cluster: "mexico-dental" },
  "c_e6ba4bf0dc": { name: "VIDA Wellness and Beauty", city: "Tijuana", country: "Mexico", cluster: "mexico-bariatric" },
  "c_ea6191c513": { name: "Heva Clinic", city: "Istanbul", country: "Turkey", cluster: "turkey-hair" },
  "c_eae17de0f2": { name: "Vera Clinic", city: "Istanbul", country: "Turkey", cluster: "turkey-hair" },
  "c_ec89898b31": { name: "Endobariatric", city: "Piedras Negras", country: "Mexico", cluster: "mexico-bariatric" },
  "c_f4af4a0581": { name: "Dental Solutions Algodones", city: "Los Algodones", country: "Mexico", cluster: "mexico-dental" },
  "c_f8813e4d7b": { name: "Estenove", city: "Istanbul", country: "Turkey", cluster: "turkey-hair" },
};
