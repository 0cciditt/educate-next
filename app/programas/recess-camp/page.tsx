import type { Metadata } from "next";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteNavV2 } from "@/components/landing/site-nav-v2";
import { TopBar } from "@/components/landing/top-bar";
import { RecessCampHero } from "@/components/recess-camp/recess-camp-hero";
import { RecessCampHighlights } from "@/components/recess-camp/recess-camp-highlights";
import { RecessCampMoreInfo } from "@/components/recess-camp/recess-camp-more-info";
import { RecessCampZigzag } from "@/components/recess-camp/recess-camp-zigzag";

export const metadata: Metadata = {
  title: "Recess Camp — Educate Learning Center",
  description:
    "Recess Camp Educate: campamento de receso escolar de 5 días en octubre, en modalidad Day Camp en Cali, con inglés, juego, arte y deporte para niños y jóvenes.",
};

export default function RecessCampPage() {
  return (
    <>
      <TopBar />
      <SiteNavV2 />
      <main>
        <RecessCampHero />
        <RecessCampHighlights />
        <RecessCampZigzag />
        <RecessCampMoreInfo />
      </main>
      <SiteFooter />
    </>
  );
}
