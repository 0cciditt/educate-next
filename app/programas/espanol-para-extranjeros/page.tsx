import type { Metadata } from "next";
import { Sedes } from "@/components/landing/sedes";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteNavV2 } from "@/components/landing/site-nav-v2";
import { YlApoyos } from "@/components/young-learners/yl-apoyos";
import { YlBrief } from "@/components/young-learners/yl-brief";
import { YlHero } from "@/components/young-learners/yl-hero";
import { YlHighlights, type Highlight } from "@/components/young-learners/yl-highlights";
import { YlLevels, type Level } from "@/components/young-learners/yl-levels";

export const metadata: Metadata = {
  title: "Español para extranjeros — Educate Learning Center",
  description:
    "Programa de español como lengua extranjera (ELE) en Cali para quienes vienen a vivir, estudiar o trabajar en Colombia. Clases 100% conversacionales, inmersión cultural y niveles A1 a C1 homologados con el Marco Común Europeo.",
};

const highlights: Highlight[] = [
  { eyebrow: "DIRIGIDO A", label: "Extranjeros", sub: "Que vienen a Colombia" },
  { eyebrow: "MODALIDAD", label: "Presencial", sub: "Sedes en Cali" },
  { eyebrow: "NIVELES", label: "A1 a C1", sub: "Marco Común Europeo" },
  { eyebrow: "ENFOQUE", label: "Conversacional", sub: "Inmersión cultural" },
];

const levels: Level[] = [
  {
    name: "Básico 1",
    cefr: "A1",
    desc: "Das tus primeros pasos en español: te presentas, saludas y compartes información básica sobre ti y tu día a día.",
  },
  {
    name: "Básico 2",
    cefr: "A2",
    desc: "Te desenvuelves en situaciones cotidianas: pides comida, haces compras, preguntas direcciones y resuelves trámites simples.",
  },
  {
    name: "Intermedio",
    cefr: "B1",
    desc: "Hablas con fluidez de temas personales, laborales y sociales; expresas opiniones, cuentas experiencias y manejas imprevistos.",
  },
  {
    name: "Avanzado 1",
    cefr: "B2",
    desc: "Participas en debates, comprendes distintos puntos de vista y explicas ideas complejas adaptándote a cada contexto.",
  },
  {
    name: "Avanzado 2",
    cefr: "C1",
    desc: "Te comunicas con claridad y un lenguaje amplio y estructurado; negocias y sostienes conversaciones largas con hablantes nativos.",
  },
];

const briefTitle = (
  <>
    Español que vives,
    <br />
    no que memorizas.
  </>
);

const briefBody = (
  <>
    <p className="text-[15px] lg:text-lg leading-relaxed text-ink-2 mt-3 lg:mt-6 max-w-[560px]">
      Un programa de español como lengua extranjera para quienes vienen a vivir,
      estudiar o trabajar en Colombia. Aprendes el idioma viviéndolo: 100%
      conversacional y experiencial, con inmersión total en la lengua y la
      cultura desde el primer día y profesores certificados.
    </p>
    <p className="text-[15px] lg:text-lg leading-relaxed text-ink-2 mt-3 lg:mt-4 max-w-[560px]">
      Se compone de ciclos de aprendizaje{" "}
      <span className="font-heading font-bold text-navy">
        homologados de acuerdo al Marco Común Europeo
      </span>
      , que garantizan una formación constante y efectiva durante todo el
      programa.
    </p>
  </>
);

export default function EspanolParaExtranjerosPage() {
  return (
    <>
      <SiteNavV2 />
      <main>
        <YlHero
          badge="ESPAÑOL"
          badgeNote="Para extranjeros · Todos los niveles"
          titleLead="Español para extranjeros."
          titleAccent=""
          description="Aprende español para vivir, estudiar o trabajar en Colombia. Clases 100% conversacionales y experienciales, con inmersión total en la lengua y la cultura desde el primer día."
          waMessage="¡Hola! Quiero información sobre el programa de Español para extranjeros."
        />
        <YlHighlights items={highlights} />
        <YlBrief
          title={briefTitle}
          body={briefBody}
          imageAlt="Estudiantes extranjeros aprendiendo español en Educate"
        />
        <YlLevels levels={levels} />
        <YlApoyos />
        <Sedes />
      </main>
      <SiteFooter />
    </>
  );
}
