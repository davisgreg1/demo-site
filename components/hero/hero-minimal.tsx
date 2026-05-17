import type { HeroContent } from "./types";

interface HeroMinimalProps {
  content: HeroContent;
}

export function HeroMinimal({ content }: HeroMinimalProps) {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-white p-8 shadow-soft">
          <p className="text-sm uppercase tracking-[0.28em] text-accent">Local plumbing done right</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {content.headline}
          </h1>
          <p className="mt-4 text-base leading-7 text-muted-foreground">{content.subhead}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={content.primaryCta.href} className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-700">
              {content.primaryCta.label}
            </a>
            {content.secondaryCta ? (
              <a href={content.secondaryCta.href} className="rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-slate-100">
                {content.secondaryCta.label}
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
