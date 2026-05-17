import { z } from "zod";

export const aboutVariantSchema = z.enum(["story"]);
export type AboutVariant = z.infer<typeof aboutVariantSchema>;

export const aboutSectionSchema = z.object({
  heading: z.string(),
  story: z.string(),
  values: z.array(z.string()).min(1),
});

export type AboutSection = z.infer<typeof aboutSectionSchema>;
