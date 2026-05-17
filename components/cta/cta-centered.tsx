import type { CtaContent } from "./types";

interface CtaCenteredProps {
  content: CtaContent;
}

export function CtaCentered({ content }: CtaCenteredProps) {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Contact us</p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{content.headline}</h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">{content.body}</p>
        <a href={content.cta.href} className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-700">
          {content.cta.label}
        </a>
      </div>
    </section>
  );
}
