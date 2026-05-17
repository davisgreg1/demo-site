import { AboutStory } from "./about-story";
import type { AboutSection, AboutVariant } from "./types";

const variants = {
  story: AboutStory,
} as const;

interface AboutProps {
  variant: AboutVariant;
  content: AboutSection;
}

export function About({ variant, content }: AboutProps) {
  const Component = variants[variant];
  return <Component content={content} />;
}
