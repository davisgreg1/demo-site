import type { ServiceItem } from "./types";

interface ServicesGridDenseProps {
  heading: string;
  intro: string;
  services: ServiceItem[];
}

export function ServicesGridDense({ heading, intro, services }: ServicesGridDenseProps) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Services</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{heading}</h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">{intro}</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="rounded-3xl border border-border bg-muted p-6">
              <p className="text-3xl">{service.icon}</p>
              <h3 className="mt-6 text-xl font-semibold text-foreground">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
