import type { Metadata } from "next";
import { Sedes } from "@/components/landing/sedes";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteNavV2 } from "@/components/landing/site-nav-v2";
import { PrepExamenes } from "@/components/preparacion-examenes/prep-examenes";
import { PrepSimulacros } from "@/components/preparacion-examenes/prep-simulacros";
import { YlHero } from "@/components/young-learners/yl-hero";

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
        <YlHero
          badge="EXÁMENES"
          badgeNote="IELTS · TOEFL · Cambridge"
          titleLead="Preparación para"
          titleAccent="Exámenes Internacionales."
          description="En Educate Learning Center te brindamos clases personalizadas para la preparación de exámenes internacionales. Las clases se enfocan en el contenido del examen y en las estrategias necesarias que te permitirán alcanzar el puntaje requerido."
          waMessage="¡Hola! Quiero información sobre la preparación para exámenes internacionales."
          secondaryHref="#examenes"
          secondaryLabel="Ver exámenes"
        />
        <PrepExamenes />
        <PrepSimulacros />
        <Sedes />
      </main>
      <SiteFooter />
    </>
  );
}
