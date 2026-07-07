import { ContactCTA } from "@/components/landing/contact-cta";
import { Differentiators } from "@/components/landing/differentiators";
import { HeroCarousel } from "@/components/landing/hero-carousel";
import { HeroMobile } from "@/components/landing/hero-mobile";
import { LanguageProgramsMobile } from "@/components/landing/language-programs-mobile";
import { Methodology } from "@/components/landing/methodology";
import { MissionVision } from "@/components/landing/mission-vision";
import { Modalities } from "@/components/landing/modalities";
import { PrinciplesMobile } from "@/components/landing/principles-mobile";
import { Programs } from "@/components/landing/programs";
import { Sedes } from "@/components/landing/sedes";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteNavV2 } from "@/components/landing/site-nav-v2";
import { Stats } from "@/components/landing/stats";
import { TrustBar } from "@/components/landing/trust-bar";

export default function Home() {
  return (
    <>
      <SiteNavV2 />
      <main>
        <HeroMobile />
        <div className="hidden lg:block">
          <HeroCarousel />
        </div>
        <TrustBar />
        <Stats />
        <LanguageProgramsMobile />
        <Programs />
        <Differentiators />
        <div id="metodologia">
          <Methodology />
          <PrinciplesMobile />
        </div>
        <MissionVision />
        <Modalities />
        {/* <Testimonials /> */}
        <Sedes />
        <ContactCTA />
      </main>
      <SiteFooter />
    </>
  );
}
