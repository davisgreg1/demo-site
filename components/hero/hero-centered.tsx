"use client";

import { motion } from "framer-motion";
import type { HeroContent } from "./types";

interface HeroCenteredProps {
  content: HeroContent;
}

export function HeroCentered({ content }: HeroCenteredProps) {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 px-6 text-center lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
            Emergency plumbing & repair
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {content.headline}
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">{content.subhead}</p>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-[1fr_1fr]">
          <a href={content.primaryCta.href} className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-slate-900">
            {content.primaryCta.label}
          </a>
          {content.secondaryCta ? (
            <a href={content.secondaryCta.href} className="rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-muted">
              {content.secondaryCta.label}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
