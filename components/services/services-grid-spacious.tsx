import type { ServiceItem } from "./types";

interface ServicesGridSpaciousProps {
  heading: string;
  intro: string;
  services: ServiceItem[];
}

export function ServicesGridSpacious({ heading, intro, services }: ServicesGridSpaciousProps) {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Our specialties</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{heading}</h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">{intro}</p>
        </div>
        <div className="mt-14 space-y-6">
          {services.map((service) => (
            <article key={service.title} className="rounded-[2rem] border border-border bg-white p-8 shadow-soft">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-primary/10 text-2xl text-primary">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
