import { About } from "@/components/about";
import { Cta } from "@/components/cta";
import { Hero } from "@/components/hero";
import { Reviews } from "@/components/reviews";
import { Services } from "@/components/services";
import { variants } from "@/config/variants.config";
import { aboutContent } from "@/content/about";
import { homeContent } from "@/content/home";
import { reviewsContent } from "@/content/reviews";
import { servicesContent } from "@/content/services";

export default function HomePage() {
  return (
    <>
      <Hero variant={variants.hero} content={homeContent.hero} />
      <Services variant={variants.services} content={servicesContent} />
      <About variant={variants.about} content={aboutContent} />
      <Reviews variant={variants.reviews} content={reviewsContent} />
      <Cta variant={variants.cta} content={homeContent.cta} />
    </>
  );
}
