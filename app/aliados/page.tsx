import type { Metadata } from "next";
import { AliadosCta } from "@/components/aliados/aliados-cta";
import { AliadosHero } from "@/components/aliados/aliados-hero";
import { AliadosWorldMap } from "@/components/aliados/aliados-world-map";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteNavV2 } from "@/components/landing/site-nav-v2";

export const metadata: Metadata = {
  title: "Aliados en el mundo — Educate Learning Center",
  description:
    "Descubre en el mapa a los aliados internacionales de Educate Learning Center en Canadá, Estados Unidos, Alemania y Polonia: campamentos e instituciones que acompañan nuestras experiencias de inmersión.",
};

export default function AliadosPage() {
  return (
    <>
      <SiteNavV2 />
      <main>
        <AliadosHero />
        <AliadosWorldMap />
        <AliadosCta />
      </main>
      <SiteFooter />
    </>
  );
}
