import type { Metadata } from "next";
import { ExtracurricularesCta } from "@/components/extracurriculares/extracurriculares-cta";
import { ExtracurricularesHero } from "@/components/extracurriculares/extracurriculares-hero";
import { ExtracurricularesProgramas } from "@/components/extracurriculares/extracurriculares-programas";
import { Sedes } from "@/components/landing/sedes";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteNavV2 } from "@/components/landing/site-nav-v2";

export const metadata: Metadata = {
  title: "Programas Extracurriculares — Educate Learning Center",
  description:
    "Spelling Bee, Math Genius, Science Play Date y LEAD: programas extracurriculares bilingües para niños y jóvenes, basados en el juego, la lógica, la curiosidad y el liderazgo.",
};

export default function ExtracurricularesPage() {
  return (
    <>
      <SiteNavV2 />
      <main>
        <ExtracurricularesHero />
        <ExtracurricularesProgramas />
        <ExtracurricularesCta />
        <Sedes />
      </main>
      <SiteFooter />
    </>
  );
}
