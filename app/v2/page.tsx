import { ContactCTA } from "@/components/landing/contact-cta";
import { Differentiators } from "@/components/landing/differentiators";
import { HeroCarousel } from "@/components/landing/hero-carousel";
import { Methodology } from "@/components/landing/methodology";
import { MissionVision } from "@/components/landing/mission-vision";
import { Modalities } from "@/components/landing/modalities";
import { Programs } from "@/components/landing/programs";
import { Sedes } from "@/components/landing/sedes";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteNavV2 } from "@/components/landing/site-nav-v2";
import { Stats } from "@/components/landing/stats";
import { Testimonials } from "@/components/landing/testimonials";
import { TopBar } from "@/components/landing/top-bar";
import { TrustBar } from "@/components/landing/trust-bar";

export default function V2() {
  return (
    <>
      <TopBar />
      <SiteNavV2 />
      <main>
        <HeroCarousel />
        <TrustBar />
        <Stats />
        <Programs />
        <MissionVision />
        <Methodology />
        <Differentiators />
        <Modalities />
        <Testimonials />
        <Sedes />
        <ContactCTA />
      </main>
      <SiteFooter />
    </>
  );
}
