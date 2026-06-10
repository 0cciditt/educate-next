import type { Metadata } from "next";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteNavV2 } from "@/components/landing/site-nav-v2";
import { SpringBreakCampHero } from "@/components/spring-break-camp/spring-break-camp-hero";
import { SpringBreakCampHighlights } from "@/components/spring-break-camp/spring-break-camp-highlights";
import { SpringBreakCampMoreInfo } from "@/components/spring-break-camp/spring-break-camp-more-info";
import { SpringBreakCampZigzag } from "@/components/spring-break-camp/spring-break-camp-zigzag";

export const metadata: Metadata = {
  title: "Spring Break Camp — Educate Learning Center",
  description:
    "Spring Break Camp Educate: campamento de primavera de 5 días durante la Semana Santa en Cali, con inglés, juego, arte y deporte para niños y jóvenes.",
};

export default function SpringBreakCampPage() {
  return (
    <>
      <SiteNavV2 />
      <main>
        <SpringBreakCampHero />
        <SpringBreakCampHighlights />
        <SpringBreakCampZigzag />
        <SpringBreakCampMoreInfo />
      </main>
      <SiteFooter />
    </>
  );
}
