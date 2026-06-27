// Homepage photo credits — Unsplash (via API). Attribution per Unsplash API guidelines.
export interface PhotoCredit { key: string; photographer: string; photographerUrl: string; photoUrl: string }
export const HOME_PHOTO_CREDITS: PhotoCredit[] = [
  { key: 'hero', photographer: "Nate Johnston", photographerUrl: 'https://unsplash.com/@natejohnston?utm_source=vitalityscout&utm_medium=referral', photoUrl: 'https://unsplash.com/photos/a-person-in-a-white-coat-fNSPSQAH1mQ?utm_source=vitalityscout&utm_medium=referral' },
  { key: 'telehealth', photographer: "Vitaly Gariev", photographerUrl: 'https://unsplash.com/@silverkblack?utm_source=vitalityscout&utm_medium=referral', photoUrl: 'https://unsplash.com/photos/doctor-consulting-patient-via-video-call-on-laptop-EVX9pt2dD1o?utm_source=vitalityscout&utm_medium=referral' },
  { key: 'clinic', photographer: "Maverick Frame", photographerUrl: 'https://unsplash.com/@maverickframe?utm_source=vitalityscout&utm_medium=referral', photoUrl: 'https://unsplash.com/photos/1xQUQPHK8F0?utm_source=vitalityscout&utm_medium=referral' },
  { key: 'travel', photographer: "Blake Guidry", photographerUrl: 'https://unsplash.com/@blakeguidry?utm_source=vitalityscout&utm_medium=referral', photoUrl: 'https://unsplash.com/photos/person-taking-picture-of-plane-wings-while-flying-during-daytime-p9vr45T2scg?utm_source=vitalityscout&utm_medium=referral' },
];
