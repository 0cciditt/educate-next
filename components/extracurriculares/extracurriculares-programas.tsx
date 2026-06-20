import type { ReactNode } from "react";
import {
  BeakerIcon,
  BookOpenIcon,
  CalculatorIcon,
  CheckIcon,
  RocketLaunchIcon,
} from "../landing/icons";
import Image from "next/image";
import { PhotoPlaceholder } from "../ui/photo-placeholder";

type Program = {
  id: string;
  eyebrow: string;
  name: string;
  icon: ReactNode;
  description: string;
  highlights: string[];
  photoLabel: string;
  /** Optional real photo; replaces the placeholder when set. */
  image?: string;
  imageAlt?: string;
  // brand accent applied to the icon chip
  chip: string;
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
    image: "/spelling-bee/spelling-bee.webp",
    imageAlt:
      "Niños mostrando sus certificados en una competencia de Spelling Bee",
    chip: "bg-orange",
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
    image: "/math-genius/math-genius.webp",
    imageAlt: "Niños jugando un reto de matemáticas en inglés en Math Genius",
    chip: "bg-navy",
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
    image: "/science-playdate/img-1.webp",
    imageAlt: "Niños haciendo un experimento de ciencia en inglés",
    chip: "bg-green",
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
    image: "/lead/img-1.webp",
    imageAlt: "Niña con alas de cartón soñando en grande — programa LEAD",
    chip: "bg-burgundy",
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

        <div className="mt-12 sm:mt-16 lg:mt-36 flex flex-col gap-8 sm:gap-12 lg:gap-28">
          {programs.map((p, i) => {
            const photoLeft = i % 2 === 1;
            return (
              <div
                key={p.id}
                id={p.id}
                className={`scroll-mt-28 reveal-up overflow-hidden rounded-[28px] bg-white ring-1 ring-line-2 shadow-brand-md lg:grid lg:gap-16 xl:gap-20 lg:items-center lg:grid-cols-2 lg:overflow-visible lg:rounded-none lg:bg-transparent lg:ring-0 lg:shadow-none ${
                  photoLeft ? "" : "lg:[&>*:first-child]:order-2"
                }`}
              >
                {p.image ? (
                  <div className="relative aspect-[16/10] overflow-hidden lg:aspect-[4/3] lg:rounded-[32px] lg:shadow-brand-lg">
                    <Image
                      src={p.image}
                      alt={p.imageAlt ?? ""}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <PhotoPlaceholder
                    label={p.photoLabel}
                    rounded="rounded-none lg:rounded-[32px]"
                    className="relative aspect-[16/10] lg:aspect-[4/3] lg:shadow-brand-lg"
                  />
                )}

                <div className="p-6 sm:p-8 lg:p-0">
                  <div
                    className={`w-12 h-12 rounded-2xl grid place-items-center ${p.chip}`}
                  >
                    {p.icon}
                  </div>
                  <div className="font-mono text-[11px] tracking-[0.22em] text-orange uppercase mt-4 lg:mt-5">
                    {p.eyebrow}
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl lg:text-5xl leading-[1.05] lg:leading-[0.97] tracking-tight mt-2 text-ink">
                    {p.name}
                  </h3>
                  <p className="text-[15px] lg:text-lg leading-relaxed text-ink-2 mt-3 lg:mt-5 max-w-[540px]">
                    {p.description}
                  </p>
                  <ul className="mt-5 lg:mt-6 flex flex-col gap-3">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3">
                        <CheckIcon
                          className={`w-5 h-5 shrink-0 mt-0.5 ${p.bullet}`}
                        />
                        <span className="text-[15px] lg:text-base leading-relaxed text-ink-2">
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
