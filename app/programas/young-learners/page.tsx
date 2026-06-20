import type { Metadata } from "next";
import { Sedes } from "@/components/landing/sedes";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteNavV2 } from "@/components/landing/site-nav-v2";
import { YlApoyos } from "@/components/young-learners/yl-apoyos";
import { YlBrief } from "@/components/young-learners/yl-brief";
import { YlHero } from "@/components/young-learners/yl-hero";
import { YlHighlights } from "@/components/young-learners/yl-highlights";
import { YlLevels } from "@/components/young-learners/yl-levels";

export const metadata: Metadata = {
  title: "Young Learners Program — Educate Learning Center",
  description:
    "Inglés para niños y jóvenes de 4 a 13 años en Cali. Aprenden hablando desde la primera clase: conversación, juego y confianza real.",
};

const heroSlides = [
  {
    src: "/young-learners/programs-help.webp",
    alt: "Jóvenes conversando en inglés alrededor de una mesa con banderas de varios países",
  },
  {
    src: "/young-learners/children-studying.webp",
    alt: "Niños trabajando en un proyecto creativo durante una clase",
  },
];

const briefBody = (
  <>
    <p className="text-[15px] lg:text-lg leading-relaxed text-ink-2 mt-3 lg:mt-6 max-w-[560px]">
      Tu hijo aprende inglés hablándolo desde la primera clase. A través del
      juego, la conversación y actividades que disfruta, gana vocabulario y
      soltura sin darse cuenta.
    </p>
    <p className="text-[15px] lg:text-lg leading-relaxed text-ink-2 mt-3 lg:mt-4 max-w-[560px]">
      <span className="font-heading font-bold text-navy">
        Construye confianza real para comunicarse
      </span>
      , con acompañamiento cercano en cada etapa de su proceso.
    </p>
  </>
);

export default function YoungLearnersPage() {
  return (
    <>
      <SiteNavV2 />
      <main>
        <YlHero slides={heroSlides} />
        <YlHighlights />
        <YlBrief
          body={briefBody}
          image="/young-learners/children-studying.webp"
          imageAlt="Niños trabajando en un proyecto creativo durante una clase"
        />
        <YlLevels />
        <YlApoyos />
        <Sedes />
      </main>
      <SiteFooter />
    </>
  );
}
