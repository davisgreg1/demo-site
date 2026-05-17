import { ReviewsCarousel } from "./reviews-carousel";
import type { ReviewsContent, ReviewsVariant } from "./types";

const variants = {
  carousel: ReviewsCarousel,
} as const;

interface ReviewsProps {
  variant: ReviewsVariant;
  content: ReviewsContent;
}

export function Reviews({ variant, content }: ReviewsProps) {
  const Component = variants[variant];
  return <Component content={content} />;
}
