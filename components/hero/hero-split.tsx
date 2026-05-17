"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { HeroContent } from "./types";
import { Button } from "@/components/primitives/button";

interface HeroSplitProps {
  content: HeroContent;
}

export function HeroSplit({ content }: HeroSplitProps) {
  return (
    <section className="overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-accent">
            24/7 emergency service
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {content.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
            {content.subhead}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href={content.primaryCta.href} className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-700">
              {content.primaryCta.label}
            </a>
            {content.secondaryCta ? (
              <a href={content.secondaryCta.href} className="inline-flex items-center justify-center rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-slate-100">
                {content.secondaryCta.label}
              </a>
            ) : null}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="relative overflow-hidden rounded-[2rem] bg-muted p-2">
          <Image src={content.image} alt={content.imageAlt} width={900} height={700} className="h-full w-full rounded-[1.75rem] object-cover" />
        </motion.div>
      </div>
    </section>
  );
}
