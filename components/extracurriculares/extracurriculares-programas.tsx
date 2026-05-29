import type { ReactNode } from "react";
import {
  BeakerIcon,
  BookOpenIcon,
  CalculatorIcon,
  CheckIcon,
  RocketLaunchIcon,
} from "../landing/icons";
import { PhotoPlaceholder } from "../ui/photo-placeholder";

type Program = {
  id: string;
  eyebrow: string;
  name: string;
  icon: ReactNode;
  description: string;
  highlights: string[];
  photoLabel: string;
  // brand accent applied to the icon chip + decor blocks
  chip: string;
  decorBack: string;
  decorFront: string;
  bullet: string;
};

const programs: Program[] = [
  {
    id: "spelling-bee",
    eyebrow: "Lenguaje y vocabulario",
    name: "Spelling Bee",
    icon: <BookOpenIcon className="w-6 h-6 text-white" />,
    description:
      "Un club donde deletrear en inglés se convierte en un reto divertido. Los niños amplían su vocabulario, ganan seguridad al hablar en público y se preparan para competencias internas y externas.",
    highlights: [
      "Vocabulario que crece clase a clase",
      "Confianza para expresarse frente a otros",
      "Competencias amistosas organizadas por nivel",
    ],
    photoLabel: "CLUB DE DELETREO EN INGLÉS",
    chip: "bg-orange",
    decorBack: "bg-orange",
    decorFront: "bg-orange-soft",
    bullet: "text-orange",
  },
  {
    id: "math-genius",
    eyebrow: "Pensamiento lógico",
    name: "Math Genius",
    icon: <CalculatorIcon className="w-6 h-6 text-white" />,
    description:
      "Matemáticas en inglés a través de juegos, retos y resolución de problemas. Los estudiantes fortalecen su razonamiento lógico mientras refuerzan el idioma casi sin notarlo.",
    highlights: [
      "Razonamiento lógico y cálculo mental",
      "Contenidos trabajados 100 % en inglés",
      "Retos y juegos pensados por edad",
    ],
    photoLabel: "MATEMÁTICAS EN INGLÉS CON RETOS",
    chip: "bg-navy",
    decorBack: "bg-navy",
    decorFront: "bg-navy-soft",
    bullet: "text-navy",
  },
  {
    id: "science-play-date",
    eyebrow: "Curiosidad y descubrimiento",
    name: "Science Play Date",
    icon: <BeakerIcon className="w-6 h-6 text-white" />,
    description:
      "Experimentos y exploración donde el inglés es la lengua del laboratorio. Los más pequeños aprenden a observar, preguntar y descubrir el mundo mientras juegan.",
    highlights: [
      "Experimentos seguros y guiados",
      "Vocabulario científico en inglés",
      "Aprendizaje basado en el juego",
    ],
    photoLabel: "EXPLORACIÓN CIENTÍFICA PARA NIÑOS",
    chip: "bg-green",
    decorBack: "bg-green",
    decorFront: "bg-green-soft",
    bullet: "text-green",
  },
  {
    id: "lead",
    eyebrow: "Liderazgo · preadolescentes y adolescentes",
    name: "LEAD®",
    icon: <RocketLaunchIcon className="w-6 h-6 text-white" />,
    description:
      "Una experiencia bilingüe de aprendizajes vivenciales para preadolescentes y adolescentes. Los participantes analizan su presente, enfrentan los retos propios de la edad y construyen un futuro saludable, convirtiéndose en líderes activos de sí mismos.",
    highlights: [
      "Aprendizajes vivenciales en un entorno bilingüe",
      "Inicia en noviembre, con cupos por convocatoria",
      "Seis meses de acompañamiento a participantes y familias",
    ],
    photoLabel: "EXPERIENCIA DE LIDERAZGO PARA JÓVENES",
    chip: "bg-burgundy",
    decorBack: "bg-burgundy",
    decorFront: "bg-burgundy-soft",
    bullet: "text-burgundy",
  },
];

export function ExtracurricularesProgramas() {
  return (
    <section id="programas" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="text-center max-w-2xl mx-auto">
          <div className="font-mono text-[11px] tracking-[0.22em] text-orange uppercase">
            Más allá del aula
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-tight mt-3 text-ink">
            Tres formas de
            <br />
            seguir en inglés.
          </h2>
          <p className="text-lg leading-relaxed text-ink-3 mt-5">
            Programas cortos y dinámicos que complementan el aprendizaje del
            idioma con lenguaje, lógica y ciencia.
          </p>
        </div>

        <div className="mt-24 sm:mt-32 lg:mt-36 flex flex-col gap-20 sm:gap-24 lg:gap-28">
          {programs.map((p, i) => {
            const photoLeft = i % 2 === 1;
            return (
              <div
                key={p.id}
                id={p.id}
                className="scroll-mt-28 grid gap-10 lg:gap-16 xl:gap-20 lg:grid-cols-2 lg:items-center"
              >
                <div
                  className={`relative max-w-md lg:max-w-none mx-auto w-full ${
                    photoLeft ? "order-2 lg:order-1" : "order-2"
                  }`}
                >
                  <div
                    aria-hidden
                    className={`hidden sm:block absolute -left-5 -top-5 right-5 bottom-5 rounded-[32px] z-0 ${p.decorBack}`}
                    style={{ transform: "rotate(-3deg)" }}
                  />
                  <div
                    aria-hidden
                    className={`hidden sm:block absolute left-5 top-5 -right-5 -bottom-5 rounded-[32px] z-0 ${p.decorFront}`}
                    style={{ transform: "rotate(2deg)" }}
                  />
                  <PhotoPlaceholder
                    label={p.photoLabel}
                    rounded="rounded-[32px]"
                    className="relative z-10 aspect-[4/3] shadow-brand-lg"
                  />
                </div>

                <div className={photoLeft ? "order-1 lg:order-2" : "order-1"}>
                  <div
                    className={`w-12 h-12 rounded-2xl grid place-items-center ${p.chip}`}
                  >
                    {p.icon}
                  </div>
                  <div className="font-mono text-[11px] tracking-[0.22em] text-orange uppercase mt-5">
                    {p.eyebrow}
                  </div>
                  <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[0.97] tracking-tight mt-2 text-ink">
                    {p.name}
                  </h3>
                  <p className="text-lg leading-relaxed text-ink-2 mt-5 max-w-[540px]">
                    {p.description}
                  </p>
                  <ul className="mt-6 flex flex-col gap-3">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3">
                        <CheckIcon
                          className={`w-5 h-5 shrink-0 mt-0.5 ${p.bullet}`}
                        />
                        <span className="text-base leading-relaxed text-ink-2">
                          {h}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
