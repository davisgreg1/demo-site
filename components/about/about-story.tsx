import type { AboutSection } from "./types";

interface AboutStoryProps {
  content: AboutSection;
}

export function AboutStory({ content }: AboutStoryProps) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">About us</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{content.heading}</h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground">{content.story}</p>
          </div>
          <div className="space-y-4 rounded-3xl border border-border bg-muted p-8">
            {content.values.map((value) => (
              <div key={value} className="rounded-3xl bg-white p-6 text-sm leading-6 text-foreground shadow-soft">
                {value}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
