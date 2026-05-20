import { ContactCTA } from "@/components/landing/contact-cta";
import { Differentiators } from "@/components/landing/differentiators";
import { Hero } from "@/components/landing/hero";
import { Methodology } from "@/components/landing/methodology";
import { MissionVision } from "@/components/landing/mission-vision";
import { Modalities } from "@/components/landing/modalities";
import { Programs } from "@/components/landing/programs";
import { Sedes } from "@/components/landing/sedes";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteNav } from "@/components/landing/site-nav";
import { Stats } from "@/components/landing/stats";
import { Testimonials } from "@/components/landing/testimonials";
import { TopBar } from "@/components/landing/top-bar";
import { TrustBar } from "@/components/landing/trust-bar";

export default function Home() {
  return (
    <>
      <TopBar />
      <SiteNav />
      <main>
        <Hero />
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
