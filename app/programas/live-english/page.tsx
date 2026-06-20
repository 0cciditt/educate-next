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
  title: "Global Learners Program — Inglés para adultos y jóvenes (14+) | Educate Learning Center",
  description:
    "Live English: clases grupales presenciales de inglés para adultos y jóvenes (14+) en Cali. Aprende hablando desde el primer día, en grupos reducidos y con profesores cercanos.",
};

const highlights: Highlight[] = [
  { eyebrow: "EDAD", label: "14+ años", sub: "Adultos y jóvenes" },
  { eyebrow: "MODALIDAD", label: "Presencial", sub: "Sedes en Cali" },
  { eyebrow: "GRUPOS", label: "Reducidos", sub: "Clases grupales" },
  { eyebrow: "NIVELES", label: "A1 a C1", sub: "Marco Común Europeo" },
];

const levels: Level[] = [
  {
    name: "Starter",
    cefr: "A1",
    desc: "Das tus primeros pasos en inglés: te presentas, saludas y sostienes conversaciones básicas sobre ti y tu día a día.",
  },
  {
    name: "Explorer",
    cefr: "A2",
    desc: "Te desenvuelves en situaciones cotidianas: pides comida, haces compras, hablas del clima y cuentas tus planes con naturalidad.",
  },
  {
    name: "Connector",
    cefr: "B1",
    desc: "Hablas con fluidez de temas personales, laborales y sociales; expresas opiniones, cuentas experiencias y resuelves imprevistos.",
  },
  {
    name: "Achiever",
    cefr: "B2",
    desc: "Participas en debates, comprendes distintos puntos de vista y explicas ideas complejas adaptando tu estilo a cada contexto.",
  },
  {
    name: "Expert",
    cefr: "C1",
    desc: "Te comunicas con claridad y un lenguaje amplio y estructurado; negocias y sostienes conversaciones largas con hablantes nativos.",
  },
];

const briefTitle = (
  <>
    Inglés que vives,
    <br />
    no que memorizas.
  </>
);

const briefBody = (
  <>
    <p className="text-[15px] lg:text-lg leading-relaxed text-ink-2 mt-3 lg:mt-6 max-w-[560px]">
      Hablas inglés desde el primer día. En grupos reducidos y con conversación
      real, ganas fluidez y confianza sin memorizar.
    </p>
    <p className="text-[15px] lg:text-lg leading-relaxed text-ink-2 mt-3 lg:mt-4 max-w-[560px]">
      <span className="font-heading font-bold text-navy">
        Un inglés que de verdad usas
      </span>{" "}
      en el trabajo, los viajes y tu día a día.
    </p>
  </>
);

export default function LiveEnglishPage() {
  return (
    <>
      <SiteNavV2 />
      <main>
        <YlHero
          badge="14+ AÑOS"
          badgeNote="Inglés para adultos y jóvenes"
          titleLead="Global Learners Program."
          titleAccent=""
          description="Aprende inglés hablando desde el primer día. Clases grupales presenciales para adultos y jóvenes (14+), en grupos reducidos y con acompañamiento real."
          waMessage="¡Hola! Quiero información sobre Live English (adultos y jóvenes 14+)."
        />
        <YlHighlights items={highlights} />
        <YlBrief
          title={briefTitle}
          body={briefBody}
          imageAlt="Adultos y jóvenes de Educate en una clase grupal de inglés"
        />
        <YlLevels levels={levels} />
        <YlApoyos />
        <Sedes />
      </main>
      <SiteFooter />
    </>
  );
}
