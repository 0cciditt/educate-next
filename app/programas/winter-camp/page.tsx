import type { Metadata } from "next";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteNavV2 } from "@/components/landing/site-nav-v2";
import { WinterCampHero } from "@/components/winter-camp/winter-camp-hero";
import { WinterCampHighlights } from "@/components/winter-camp/winter-camp-highlights";
import { WinterCampInternational } from "@/components/winter-camp/winter-camp-international";
import { WinterCampMoreInfo } from "@/components/winter-camp/winter-camp-more-info";
import { WinterCampZigzag } from "@/components/winter-camp/winter-camp-zigzag";

export const metadata: Metadata = {
  title: "Winter Camp — Educate Learning Center",
  description:
    "Winter Camp Educate: campamentos de invierno de 2 a 4 semanas en Canadá y Estados Unidos, entre diciembre y enero, para niños y jóvenes desde los 10 años.",
};

export default function WinterCampPage() {
  return (
    <>
      <SiteNavV2 />
      <main>
        <WinterCampHero />
        <WinterCampHighlights />
        <WinterCampZigzag />
        <WinterCampInternational />
        <WinterCampMoreInfo />
      </main>
      <SiteFooter />
    </>
  );
}
