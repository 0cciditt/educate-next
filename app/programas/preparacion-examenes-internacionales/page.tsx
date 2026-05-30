import type { Metadata } from "next";
import { Sedes } from "@/components/landing/sedes";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteNavV2 } from "@/components/landing/site-nav-v2";
import { PrepExamenes } from "@/components/preparacion-examenes/prep-examenes";
import { PrepHero } from "@/components/preparacion-examenes/prep-hero";
import { PrepSimulacros } from "@/components/preparacion-examenes/prep-simulacros";

export const metadata: Metadata = {
  title:
    "Preparación para Exámenes Internacionales — Educate Learning Center",
  description:
    "Clases personalizadas para la preparación de exámenes internacionales: IELTS, TOEFL y Cambridge (KET, PET, FCE y Young Learners). Enfocadas en el contenido del examen y las estrategias para alcanzar el puntaje requerido.",
};

export default function PreparacionExamenesPage() {
  return (
    <>
      <SiteNavV2 />
      <main>
        <PrepHero />
        <PrepExamenes />
        <PrepSimulacros />
        <Sedes />
      </main>
      <SiteFooter />
    </>
  );
}
