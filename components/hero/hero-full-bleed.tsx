"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { HeroContent } from "./types";

interface HeroFullBleedProps {
  content: HeroContent;
}

export function HeroFullBleed({ content }: HeroFullBleedProps) {
  return (
    <section className="relative isolate overflow-hidden bg-foreground text-white">
      <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-primary to-accent" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-6 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-accent-foreground/80">
              Trusted plumbing in Atlanta
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {content.headline}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-accent-foreground/90">
              {content.subhead}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href={content.primaryCta.href} className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-slate-200">
                {content.primaryCta.label}
              </a>
              {content.secondaryCta ? (
                <a href={content.secondaryCta.href} className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
                  {content.secondaryCta.label}
                </a>
              ) : null}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="overflow-hidden rounded-[2rem] bg-white/5 p-4 shadow-hard">
            <Image src={content.image} alt={content.imageAlt} width={900} height={700} className="h-[420px] w-full rounded-[1.5rem] object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
