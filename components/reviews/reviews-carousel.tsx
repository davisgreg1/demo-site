"use client";

import { motion } from "framer-motion";
import type { Review, ReviewsContent } from "./types";

interface ReviewsCarouselProps {
  content: ReviewsContent;
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="rounded-3xl border border-border bg-white p-8 shadow-soft">
      <p className="text-lg leading-8 text-foreground">“{review.quote}”</p>
      <p className="mt-6 text-sm font-semibold text-foreground">{review.author}</p>
      {review.role ? <p className="text-sm text-muted-foreground">{review.role}</p> : null}
    </article>
  );
}

export function ReviewsCarousel({ content }: ReviewsCarouselProps) {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Customer stories</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{content.heading}</h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {content.reviews.map((review) => (
            <motion.div key={review.author} whileHover={{ y: -4 }}>
              <ReviewCard review={review} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
