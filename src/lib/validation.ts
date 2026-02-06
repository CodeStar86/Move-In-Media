import { z } from 'zod';

// Available fonts for templates
export const TEMPLATE_FONTS = [
  'Inter',
  'Roboto',
  'Open Sans',
  'Lato',
  'Montserrat',
  'Playfair Display',
  'Merriweather',
  'Poppins',
  'Raleway',
  'Nunito',
  'Source Sans Pro',
  'Oswald',
  'PT Sans',
  'Ubuntu',
  'Manrope',
  'DM Sans',
  'Work Sans',
  'Crimson Text',
  'Libre Baskerville',
  'Cormorant Garamond',
] as const;

// Base enquiry schema
const baseEnquirySchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  agency_name: z.string().min(2, 'Agency name must be at least 2 characters'),
  locations: z.string().optional(),
  areas_served: z.string().optional(),
  desired_domain: z.string().optional(),
  existing_website: z.string().url('Must be a valid URL').optional().or(z.literal('')),
  notes: z.string().optional(),
});

// Template One enquiry schema
export const templateOneEnquirySchema = baseEnquirySchema.extend({
  package_type: z.literal('template_one'),
  template_theme_color: z.string().regex(/^#[0-9A-Fa-f]{6}$/, 'Please enter a valid hex color'),
  template_font: z.enum(TEMPLATE_FONTS),
});

// Template Two enquiry schema
export const templateTwoEnquirySchema = baseEnquirySchema.extend({
  package_type: z.literal('template_two'),
  template_theme_color: z.string().regex(/^#[0-9A-Fa-f]{6}$/, 'Please enter a valid hex color'),
  template_font: z.enum(TEMPLATE_FONTS),
});

// Custom quote enquiry schema
export const customQuoteEnquirySchema = baseEnquirySchema.extend({
  package_type: z.literal('custom_quote'),
  requirements: z.string().min(20, 'Please provide at least 20 characters describing your requirements'),
  budget_range: z.string().optional(),
  timeline: z.string().optional(),
});

// Union type for all enquiry types
export const enquirySchema = z.discriminatedUnion('package_type', [
  templateOneEnquirySchema,
  templateTwoEnquirySchema,
  customQuoteEnquirySchema,
]);

export type TemplateOneEnquiry = z.infer<typeof templateOneEnquirySchema>;
export type TemplateTwoEnquiry = z.infer<typeof templateTwoEnquirySchema>;
export type CustomQuoteEnquiry = z.infer<typeof customQuoteEnquirySchema>;
export type EnquiryFormData = z.infer<typeof enquirySchema>;

// Admin login schema
export const adminLoginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export type AdminLoginData = z.infer<typeof adminLoginSchema>;

// Admin registration schema
export const adminRegisterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string().min(6, 'Password must be at least 6 characters'),
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export type AdminRegisterData = z.infer<typeof adminRegisterSchema>;

// Admin enquiry update schema
export const enquiryUpdateSchema = z.object({
  status: z.enum(['new', 'in_review', 'responded', 'won', 'lost', 'archived']),
});

export type EnquiryUpdate = z.infer<typeof enquiryUpdateSchema>;

// Admin note schema
export const adminNoteSchema = z.object({
  body: z.string().min(1, 'Note cannot be empty'),
});

export type AdminNoteData = z.infer<typeof adminNoteSchema>;