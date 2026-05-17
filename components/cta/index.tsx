import { CtaBanner } from "./cta-banner";
import { CtaCentered } from "./cta-centered";
import type { CtaContent, CtaVariant } from "./types";

const variants = {
  banner: CtaBanner,
  centered: CtaCentered,
} as const;

interface CtaProps {
  variant: CtaVariant;
  content: CtaContent;
}

export function Cta({ variant, content }: CtaProps) {
  const Component = variants[variant];
  return <Component content={content} />;
}
