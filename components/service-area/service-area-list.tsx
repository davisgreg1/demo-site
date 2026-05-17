import type { ServiceAreaContent } from "./types";

interface ServiceAreaListProps {
  content: ServiceAreaContent;
}

export function ServiceAreaList({ content }: ServiceAreaListProps) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Service area</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{content.heading}</h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">{content.description}</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {content.areas.map((area) => (
            <article key={area.name} className="rounded-3xl border border-border bg-muted p-6">
              <h3 className="text-xl font-semibold text-foreground">{area.name}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{area.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
