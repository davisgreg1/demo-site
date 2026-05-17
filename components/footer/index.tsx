import { FooterClassic } from "./footer-classic";
import { FooterMinimal } from "./footer-minimal";
import type { FooterContent, FooterVariant } from "./types";

const variants = {
  classic: FooterClassic,
  minimal: FooterMinimal,
} as const;

interface FooterProps {
  variant: FooterVariant;
  content: FooterContent;
}

export function Footer({ variant, content }: FooterProps) {
  const Component = variants[variant];
  return <Component content={content} />;
}
