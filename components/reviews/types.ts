import { z } from "zod";

export const reviewsVariantSchema = z.enum(["carousel"]);
export type ReviewsVariant = z.infer<typeof reviewsVariantSchema>;

export const reviewSchema = z.object({
  quote: z.string(),
  author: z.string(),
  role: z.string().optional(),
});

export const reviewsContentSchema = z.object({
  heading: z.string(),
  reviews: z.array(reviewSchema).min(1),
});

export type Review = z.infer<typeof reviewSchema>;
export type ReviewsContent = z.infer<typeof reviewsContentSchema>;
