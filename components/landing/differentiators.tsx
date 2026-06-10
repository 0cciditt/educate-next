import type { ComponentType } from "react";
import { Button } from "../ui/button";
import {
  BuildingIcon,
  ChatIcon,
  FaceSmileIcon,
  GlobeIcon,
  GraduationCapIcon,
  SparklesIcon,
} from "./icons";

const items: {
  icon: ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  /** Soft-tinted icon tile background. */
  tile: string;
  /** Accent text colour for the icon + watermark number. */
  accent: string;
}[] = [
  {
    icon: GlobeIcon,
    title: "Institución multilingüe",
    desc: "Más allá del inglés: programas en varias lenguas extranjeras y de segunda lengua.",
    tile: "bg-navy-soft",
    accent: "text-navy",
  },
  {
    icon: SparklesIcon,
    title: "Experiencias de inmersión",
    desc: "Campamentos, intercambios y vivencias culturales que van más allá del aula.",
    tile: "bg-orange-soft",
    accent: "text-orange-deep",
  },
  {
    icon: GraduationCapIcon,
    title: "Profes certificados",
    desc: "Licenciados en lenguas, con TKT, CELTA o experiencia internacional. Hablantes nativos en C1+.",
    tile: "bg-green-soft",
    accent: "text-green-deep",
  },
  {
    icon: ChatIcon,
    title: "Habilidades blandas",
    desc: "Liderazgo, comunicación intercultural y compromiso social integrados en cada programa.",
    tile: "bg-burgundy-soft",
    accent: "text-burgundy",
  },
  {
    icon: FaceSmileIcon,
    title: "Tiempo libre con propósito",
    desc: "Programas extracurriculares y de aprovechamiento del tiempo libre para todas las edades.",
    tile: "bg-yellow-soft",
    accent: "text-yellow-deep",
  },
  {
    icon: BuildingIcon,
    title: "Asesoría a instituciones",
    desc: "Acompañamos a colegios y empresas del sector privado en proyectos lingüísticos a medida.",
    tile: "bg-red-soft",
    accent: "text-red-deep",
  },
];

export function Differentiators() {
  return (
    <section id="diferencia" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="grid gap-10 lg:gap-16 lg:grid-cols-[1fr_1.5fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div className="font-display text-[13px] tracking-[0.2em] text-orange uppercase">
              ¿Qué nos diferencia?
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-[0.95] tracking-tight mt-2 text-ink">
              Seis razones
              <br />
              para elegirnos.
            </h2>
            <p className="text-lg leading-relaxed text-ink-2 mt-5 max-w-md">
              Lo que separa una academia de idiomas de una institución que
              forma personas para liderar, comprender culturas y comunicarse
              con el mundo.
            </p>
            <div className="mt-8">
              <Button href="#contacto" variant="primary" size="lg">
                Quiero conocerlos →
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((it) => {
              const Icon = it.icon;
              return (
                <article
                  key={it.title}
                  className="reveal-up rounded-2xl bg-white ring-1 ring-line-2 p-5 sm:p-6 transition-shadow duration-300 hover:shadow-brand-md"
                >
                  <div
                    className={`w-12 h-12 rounded-2xl grid place-items-center ${it.tile} ${it.accent}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-extrabold text-[17px] leading-tight text-ink mt-4">
                    {it.title}
                  </h3>
                  <p className="text-sm text-ink-3 mt-1.5 leading-relaxed">
                    {it.desc}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
