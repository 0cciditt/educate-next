import type { Metadata } from "next";
import { CentrosEducativosBeneficios } from "@/components/centros-educativos/centros-educativos-beneficios";
import { CentrosEducativosClases } from "@/components/centros-educativos/centros-educativos-clases";
import { CentrosEducativosCta } from "@/components/centros-educativos/centros-educativos-cta";
import { CentrosEducativosHero } from "@/components/centros-educativos/centros-educativos-hero";
import { CentrosEducativosPrograma } from "@/components/centros-educativos/centros-educativos-programa";
import { Sedes } from "@/components/landing/sedes";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteNavV2 } from "@/components/landing/site-nav-v2";

export const metadata: Metadata = {
  title: "Programa para Centros Educativos — Educate Learning Center",
  description:
    "Educate Bilingual School: programas bilingües personalizados para colegios y centros educativos, con certificación internacional y metodología adaptable a la filosofía institucional.",
};

export default function CentrosEducativosPage() {
  return (
    <>
      <SiteNavV2 />
      <main>
        <CentrosEducativosHero />
        <CentrosEducativosPrograma />
        <CentrosEducativosClases />
        <CentrosEducativosBeneficios />
        <CentrosEducativosCta />
        <Sedes />
      </main>
      <SiteFooter />
    </>
  );
}
