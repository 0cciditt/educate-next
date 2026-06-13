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
    "Inglés para niños y jóvenes de 4 a 13 años. Metodología 100% conversacional y experiencial, niveles homologados con el Marco Común Europeo y apoyos académicos para un aprendizaje constante.",
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

export default function YoungLearnersPage() {
  return (
    <>
      <SiteNavV2 />
      <main>
        <YlHero slides={heroSlides} />
        <YlHighlights />
        <YlBrief
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
