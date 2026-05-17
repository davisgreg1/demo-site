import type { ReviewsContent } from "@/components/reviews/types";

export const reviewsContent = {
  heading: "What our customers say.",
  reviews: [
    {
      quote: "Pioneer Plumbing arrived within an hour and fixed a hidden leak without charging a surprise fee.",
      author: "Tara M., Decatur",
      role: "Homeowner",
    },
    {
      quote: "Their team replaced our water heater quickly and left the crawl space cleaner than they found it.",
      author: "Marcus B., Midtown",
      role: "Small business owner",
    },
    {
      quote: "Excellent communication and fair pricing. We feel much safer with their maintenance plan.",
      author: "Leah S., Sandy Springs",
    },
  ],
} satisfies ReviewsContent;
