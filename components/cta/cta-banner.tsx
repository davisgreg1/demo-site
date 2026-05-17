import type { CtaContent } from "./types";

interface CtaBannerProps {
  content: CtaContent;
}

export function CtaBanner({ content }: CtaBannerProps) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-16 text-center lg:px-8">
        <p className="text-sm uppercase tracking-[0.3em] text-primary-foreground/80">Ready to get started?</p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{content.headline}</h2>
        <p className="mx-auto max-w-2xl text-base leading-7 text-primary-foreground/90">{content.body}</p>
        <a href={content.cta.href} className="mx-auto inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-slate-200">
          {content.cta.label}
        </a>
      </div>
    </section>
  );
}
