import type { Metadata } from "next";
import { CentrosEducativosBeneficios } from "@/components/centros-educativos/centros-educativos-beneficios";
import { CentrosEducativosClases } from "@/components/centros-educativos/centros-educativos-clases";
import { CentrosEducativosCta } from "@/components/centros-educativos/centros-educativos-cta";
import { CentrosEducativosPrograma } from "@/components/centros-educativos/centros-educativos-programa";
import { Sedes } from "@/components/landing/sedes";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteNavV2 } from "@/components/landing/site-nav-v2";
import { YlHero } from "@/components/young-learners/yl-hero";
import {
  YlHighlights,
  type Highlight,
} from "@/components/young-learners/yl-highlights";

export const metadata: Metadata = {
  title: "Programa para Centros Educativos — Educate Learning Center",
  description:
    "Educate Bilingual School: programas bilingües personalizados para colegios y centros educativos, con certificación internacional y metodología adaptable a la filosofía institucional.",
};

const heroSlides = [
  {
    src: "/centros-educativos/card-1.webp",
    alt: "Charla de formación de Educate ante docentes de una institución educativa",
  },
  {
    src: "/centros-educativos/card-2.webp",
    alt: "Equipo de Educate reunido con directivos de una institución educativa",
  },
  {
    src: "/our-programs/card-4.webp",
    alt: "Asesoría de Educate a una institución educativa",
  },
];

const highlights: Highlight[] = [
  {
    eyebrow: "PROGRAMA",
    label: "A la medida",
    sub: "De cada institución",
  },
  {
    eyebrow: "CERTIFICACIÓN",
    label: "Internacional",
    sub: "Docentes y estudiantes",
  },
  {
    eyebrow: "NIVELES",
    label: "MCER",
    sub: "Aval Secretaría de Educación",
  },
  {
    eyebrow: "POBLACIÓN",
    label: "Todas las edades",
    sub: "Alumnado y equipo docente",
  },
];

export default function CentrosEducativosPage() {
  return (
    <>
      <SiteNavV2 />
      <main>
        <YlHero
          badge="COLEGIOS"
          badgeNote="Programas bilingües para instituciones"
          titleLead="Centros Educativos."
          titleAccent=""
          description="Diseñamos programas bilingües a la medida de cada colegio y abrimos rutas de certificación internacional en inglés para todo su equipo docente y su alumnado."
          waMessage="¡Hola! Quiero información sobre el programa para centros educativos (Educate Bilingual School)."
          secondaryHref="#programa"
          secondaryLabel="Conoce el programa"
          slides={heroSlides}
        />
        <YlHighlights items={highlights} />
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
