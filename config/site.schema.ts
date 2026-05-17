import { z } from "zod";

const timeSchema = z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/, "Time must use HH:MM 24-hour format");

const dailyHoursSchema = z.union([
  z.object({
    closed: z.literal(true),
  }),
  z.object({
    open: timeSchema,
    close: timeSchema,
    closed: z.boolean().optional(),
  }),
]);

export const siteConfigSchema = z.object({
  business: z.object({
    name: z.string().min(2),
    legalName: z.string().min(2),
    tagline: z.string().min(10),
    phone: z.string().regex(/^\+1\d{10}$/, "Phone must use +1-country format"),
    phoneDisplay: z.string().min(10),
    email: z.string().email(),
    address: z.object({
      street: z.string().min(5),
      city: z.string().min(2),
      state: z.string().min(2),
      zip: z.string().min(5).max(10),
    }),
    serviceAreas: z.array(z.string().min(2)).min(1),
    hours: z.object({
      monday: dailyHoursSchema,
      tuesday: dailyHoursSchema,
      wednesday: dailyHoursSchema,
      thursday: dailyHoursSchema,
      friday: dailyHoursSchema,
      saturday: dailyHoursSchema,
      sunday: dailyHoursSchema,
    }),
    licenseNumber: z.string().min(5),
    yearFounded: z.number().int().min(1900).max(new Date().getFullYear()),
  }),
  social: z.object({
    facebook: z.string().url().nullable(),
    instagram: z.string().url().nullable(),
    google: z.string().url().nullable(),
  }),
  seo: z.object({
    primaryKeywords: z.array(z.string().min(2)).min(1),
    googleBusinessProfileId: z.string().min(5),
    googleAnalyticsId: z.string().min(1),
  }),
  urls: z.object({
    canonical: z.string().url(),
  }),
});

export type SiteConfig = z.infer<typeof siteConfigSchema>;
