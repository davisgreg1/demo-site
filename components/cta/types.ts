import { z } from "zod";

export const ctaVariantSchema = z.enum(["banner", "centered"]);
export type CtaVariant = z.infer<typeof ctaVariantSchema>;

export const ctaContentSchema = z.object({
  headline: z.string(),
  body: z.string(),
  cta: z.object({
    label: z.string(),
    href: z.string(),
  }),
});

export type CtaContent = z.infer<typeof ctaContentSchema>;
