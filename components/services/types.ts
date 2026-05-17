import { z } from "zod";

export const serviceItemSchema = z.object({
  title: z.string(),
  description: z.string(),
  icon: z.string(),
});

export const servicesContentSchema = z.object({
  heading: z.string(),
  intro: z.string(),
  featured: z.array(serviceItemSchema).min(1),
});

export type ServiceItem = z.infer<typeof serviceItemSchema>;
export type ServicesContent = z.infer<typeof servicesContentSchema>;
