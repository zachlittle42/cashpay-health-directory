import { z } from 'zod';

export const emailCaptureSchema = z.object({
  email: z.string().max(254, 'Email is too long').email('Please enter a valid email address'),
});

const VALID_CATEGORIES = [
  'stem_cells', 'glp1', 'trt', 'longevity', 'dental',
  'hair_transplant', 'cosmetic', 'labs', 'other',
] as const;

export const inquiryFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name is too long'),
  email: z.string().max(254, 'Email is too long').email('Please enter a valid email address'),
  category: z.enum(VALID_CATEGORIES, { error: 'Please select a valid category' }),
  condition: z.string().max(200, 'Condition is too long').optional(),
  message: z.string().max(2000, 'Message is too long').optional(),
});

export type EmailCaptureData = z.infer<typeof emailCaptureSchema>;
export type InquiryFormData = z.infer<typeof inquiryFormSchema>;
