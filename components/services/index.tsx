import { ServicesGridDense } from "./services-grid-dense";
import { ServicesGridSpacious } from "./services-grid-spacious";
import type { ServiceItem, ServicesContent } from "./types";

const variants = {
  "grid-dense": ServicesGridDense,
  "grid-spacious": ServicesGridSpacious,
} as const;

interface ServicesProps {
  variant: keyof typeof variants;
  content: ServicesContent;
}

export function Services({ variant, content }: ServicesProps) {
  const Component = variants[variant];
  return <Component heading={content.heading} intro={content.intro} services={content.featured} />;
}
