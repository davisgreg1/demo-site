import { z } from "zod";

export const heroVariantSchema = z.enum(["split", "full-bleed", "centered", "minimal"]);
export type HeroVariant = z.infer<typeof heroVariantSchema>;

export const heroContentSchema = z.object({
  headline: z.string(),
  subhead: z.string().optional(),
  image: z.string(),
  imageAlt: z.string(),
  primaryCta: z.object({
    label: z.string(),
    href: z.string(),
  }),
  secondaryCta: z.object({
    label: z.string(),
    href: z.string(),
  }).optional(),
});

export type HeroContent = z.infer<typeof heroContentSchema>;
