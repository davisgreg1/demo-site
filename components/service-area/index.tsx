import { ServiceAreaList } from "./service-area-list";
import type { ServiceAreaContent, ServiceAreaVariant } from "./types";

const variants = {
  list: ServiceAreaList,
} as const;

interface ServiceAreaProps {
  variant: ServiceAreaVariant;
  content: ServiceAreaContent;
}

export function ServiceArea({ variant, content }: ServiceAreaProps) {
  const Component = variants[variant];
  return <Component content={content} />;
}
