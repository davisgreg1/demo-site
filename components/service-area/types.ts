import { z } from "zod";

export const serviceAreaVariantSchema = z.enum(["list"]);
export type ServiceAreaVariant = z.infer<typeof serviceAreaVariantSchema>;

export const serviceAreaItemSchema = z.object({
  name: z.string(),
  description: z.string(),
});

export const serviceAreaContentSchema = z.object({
  heading: z.string(),
  description: z.string(),
  areas: z.array(serviceAreaItemSchema).min(1),
});

export type ServiceAreaItem = z.infer<typeof serviceAreaItemSchema>;
export type ServiceAreaContent = z.infer<typeof serviceAreaContentSchema>;
