import { HeroCentered } from "./hero-centered";
import { HeroFullBleed } from "./hero-full-bleed";
import { HeroMinimal } from "./hero-minimal";
import { HeroSplit } from "./hero-split";
import type { HeroContent, HeroVariant } from "./types";

const variants = {
  split: HeroSplit,
  "full-bleed": HeroFullBleed,
  centered: HeroCentered,
  minimal: HeroMinimal,
} as const;

interface HeroProps {
  variant: HeroVariant;
  content: HeroContent;
}

export function Hero({ variant, content }: HeroProps) {
  const Component = variants[variant];
  return <Component content={content} />;
}
