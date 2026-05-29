import type { Metadata } from "next";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteNavV2 } from "@/components/landing/site-nav-v2";
import { TopBar } from "@/components/landing/top-bar";
import { SummerCampHero } from "@/components/summer-camp/summer-camp-hero";
import { SummerCampHighlights } from "@/components/summer-camp/summer-camp-highlights";
import { SummerCampInternational } from "@/components/summer-camp/summer-camp-international";
import { SummerCampMoreInfo } from "@/components/summer-camp/summer-camp-more-info";
import { SummerCampZigzag } from "@/components/summer-camp/summer-camp-zigzag";

export const metadata: Metadata = {
  title: "Summer Camp — Educate Learning Center",
  description:
    "Summer Camp Educate: Day Camp en Cali de 4 a 6 semanas y campamentos internacionales de 2 a 4 semanas en Canadá, Estados Unidos y Alemania.",
};

export default function SummerCampPage() {
  return (
    <>
      <TopBar />
      <SiteNavV2 />
      <main>
        <SummerCampHero />
        <SummerCampHighlights />
        <SummerCampZigzag />
        <SummerCampInternational />
        <SummerCampMoreInfo />
      </main>
      <SiteFooter />
    </>
  );
}
