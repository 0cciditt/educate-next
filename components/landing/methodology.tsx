import type { ReactNode } from "react";
import Image from "next/image";
import {
  GlobeIcon,
  MegaphoneIcon,
  TrendUpIcon,
  UsersIcon,
} from "./icons";

const pillars: {
  n: string;
  title: string;
  desc: string;
  icon: ReactNode;
  /** CSS gradient for the photo placeholder, built from brand tokens. */
  photo: string;
  /** Tailwind bg utility for the floating icon sticker. */
  chip: string;
  /** Optional real photo; replaces the gradient placeholder when set. */
  image?: string;
  imageAlt?: string;
}[] = [
  {
    n: "01",
    title: "Educación para la vida.",
    desc: "Formamos para la felicidad y la autorrealización. Lo que aprendes en clase es lo que te sirve afuera de ella.",
    icon: <MegaphoneIcon className="w-8 h-8 text-white" />,
    photo:
      "linear-gradient(145deg, var(--color-orange) 0%, var(--color-orange-deep) 100%)",
    chip: "bg-orange",
    image: "/principles-and-values/card-1.webp",
    imageAlt: "Estudiantes de Educate aprendiendo para la vida",
  },
  {
    n: "02",
    title: "Ciudadanos del mundo.",
    desc: "Aprendes la lengua con la cultura que la viste. Inmersión real: comida, música, historias, comunidades.",
    icon: <GlobeIcon className="w-8 h-8 text-white" />,
    photo:
      "linear-gradient(145deg, var(--color-green) 0%, var(--color-green-deep) 100%)",
    chip: "bg-green",
    image: "/principles-and-values/card-2.webp",
    imageAlt: "Estudiantes de Educate en un encuentro intercultural",
  },
  {
    n: "03",
    title: "Liderazgo integral.",
    desc: "Habilidades blandas y compromiso con la comunidad. Aquí no solo formamos hablantes, también líderes.",
    icon: <TrendUpIcon className="w-8 h-8 text-white" />,
    photo:
      "linear-gradient(145deg, var(--color-navy) 0%, var(--color-navy-deep) 100%)",
    chip: "bg-navy",
    image: "/principles-and-values/card-3.webp",
    imageAlt: "Estudiantes de Educate desarrollando liderazgo",
  },
  {
    n: "04",
    title: "Comunidad e inclusión.",
    desc: "Confianza, respeto, solidaridad e interioridad. Una comunidad que se hace corresponsable de su aprendizaje.",
    icon: <UsersIcon className="w-8 h-8 text-white" />,
    photo:
      "linear-gradient(145deg, var(--color-burgundy) 0%, var(--color-burgundy-deep) 100%)",
    chip: "bg-burgundy",
    image: "/principles-and-values/card-5.webp",
    imageAlt: "Comunidad de estudiantes de Educate",
  },
];

export function Methodology() {
  return (
    <section className="hidden lg:block bg-bg-warm py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="font-display text-[13px] tracking-[0.2em] text-orange uppercase">
          Principios y valores
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-[0.95] tracking-tight mt-2 text-ink">
          Lo que enseñamos
          <br />
          lo vivimos primero.
        </h2>
        <p className="text-lg leading-relaxed text-ink-2 mt-5 max-w-[720px]">
          Educación para la vida, ciudadanos del mundo, liderazgo integral,
          corresponsabilidad, interdependencia, solidaridad, confianza, respeto,
          comunidad, inclusión e interioridad. Estos cuatro principios reúnen el
          espíritu de Educate.
        </p>

        <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-4 mt-12">
          {pillars.map((p) => (
            <article
              key={p.n}
              className="reveal-up group flex flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-line-2 shadow-brand-md transition-shadow duration-300 hover:shadow-brand-lg"
            >
              {/* Image-first photo slot */}
              <div
                className="relative aspect-[4/3] overflow-hidden"
                style={{ background: p.photo }}
              >
                {p.image && (
                  <Image
                    src={p.image}
                    alt={p.imageAlt ?? ""}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                  />
                )}
                {/* Depth scrim — keeps the index chip legible */}
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background: p.image
                      ? "linear-gradient(180deg, rgba(20,59,92,0.42) 0%, transparent 34%, transparent 62%, rgba(20,59,92,0.22) 100%)"
                      : "radial-gradient(120% 85% at 18% 0%, rgba(255,255,255,0.24), transparent 55%), linear-gradient(180deg, transparent 45%, rgba(0,0,0,0.22) 100%)",
                  }}
                />
                {/* Oversized icon watermark — placeholder only */}
                {!p.image && (
                  <div
                    aria-hidden
                    className="absolute -bottom-7 -right-5 opacity-[0.16] rotate-[-8deg] transition-transform duration-500 ease-out group-hover:scale-110 [&>svg]:w-44 [&>svg]:h-44 [&>svg]:text-white"
                  >
                    {p.icon}
                  </div>
                )}
                {/* Index chip */}
                <span className="absolute top-4 left-4 inline-flex items-center justify-center min-w-[44px] h-9 px-3 rounded-pill bg-white/15 border border-white/30 backdrop-blur-md font-display text-[15px] tracking-[0.06em] text-white">
                  {p.n}
                </span>
                {/* Placeholder hint — placeholder only */}
                {!p.image && (
                  <span className="absolute bottom-4 right-5 font-mono text-[10px] tracking-[0.16em] text-white/55 uppercase">
                    Imagen
                  </span>
                )}
              </div>

              {/* Body */}
              <div className="relative flex flex-col px-7 pb-8">
                <div
                  className={`-mt-9 mb-4 grid place-items-center w-[68px] h-[68px] rounded-2xl ring-4 ring-white shadow-brand-md ${p.chip}`}
                >
                  {p.icon}
                </div>
                <h3 className="font-display text-[22px] leading-[1.08] tracking-tight text-ink">
                  {p.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-ink-3 mt-2.5">
                  {p.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
