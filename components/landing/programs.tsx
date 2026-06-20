import type { ReactNode } from "react";
import Image from "next/image";
import {
  BookOpenIcon,
  BuildingIcon,
  GlobeIcon,
  SparklesIcon,
} from "./icons";

const programs: {
  title: string;
  desc: string;
  /** Audience pill shown over the photo. */
  audience: string;
  meta: string[];
  icon: ReactNode;
  /** CSS gradient for the photo placeholder, built from brand tokens. */
  photo: string;
  /** Optional real photo; replaces the gradient placeholder when set. */
  image?: string;
  imageAlt?: string;
}[] = [
  {
    title: "Formación en lenguas",
    desc: "Programas de lengua extranjera y segunda lengua. El idioma se descubre con su cultura, no solo se memoriza.",
    audience: "Niños, jóvenes y adultos",
    meta: ["Inmersión cultural"],
    icon: <BookOpenIcon className="w-8 h-8 text-white" />,
    photo:
      "linear-gradient(145deg, var(--color-orange) 0%, var(--color-orange-deep) 100%)",
    image: "/our-programs/card-1.webp",
    imageAlt: "Estudiantes y profesor en una clase de Educate",
  },
  {
    title: "Intercambio cultural",
    desc: "Experiencias que conectan a nuestros estudiantes con otras culturas, comunidades y formas de habitar el mundo.",
    audience: "Jóvenes y adultos",
    meta: ["Programas internacionales", "Acompañamiento integral"],
    icon: <GlobeIcon className="w-8 h-8 text-white" />,
    photo:
      "linear-gradient(145deg, var(--color-green) 0%, var(--color-green-deep) 100%)",
    image: "/our-programs/card-2.webp",
    imageAlt: "Estudiantes de Educate en un intercambio cultural",
  },
  {
    title: "Inmersión y tiempo libre",
    desc: "Campamentos y programas de aprovechamiento del tiempo libre donde se vive la lengua, la cultura y el juego.",
    audience: "Tiempo libre",
    meta: ["Vacaciones", "Experiencias lúdicas"],
    icon: <SparklesIcon className="w-8 h-8 text-white" />,
    photo:
      "linear-gradient(145deg, var(--color-navy) 0%, var(--color-navy-deep) 100%)",
    image: "/summer-camp/hero-3.webp",
    imageAlt: "Niños celebrando con los brazos en alto en un campamento de Educate",
  },
  {
    title: "Asesoría institucional",
    desc: "Acompañamos a instituciones educativas y empresas del sector privado en proyectos lingüísticos y extracurriculares.",
    audience: "Colegios y empresas",
    meta: ["Diseño a medida", "Habilidades blandas"],
    icon: <BuildingIcon className="w-8 h-8 text-white" />,
    photo:
      "linear-gradient(145deg, var(--color-burgundy) 0%, var(--color-burgundy-deep) 100%)",
    image: "/our-programs/card-4.webp",
    imageAlt: "Asesoría de Educate a una institución educativa",
  },
];

export function Programs() {
  return (
    <section id="programas" className="bg-bg-warm py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-10">
          <div>
            <div className="font-display text-[13px] tracking-[0.2em] text-orange uppercase">
              Nuestros programas
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-[0.95] tracking-tight mt-2 text-ink">
              Una experiencia para cada etapa,
              <br className="hidden sm:inline" />
              <span className="sm:hidden"> </span>una ruta para cada meta.
            </h2>
          </div>
          <p className="text-[17px] leading-relaxed text-ink-3 lg:max-w-sm">
            Formación lingüística, intercambio cultural, inmersión y desarrollo
            humano. Con progresión orientada a los estándares del Marco Común
            Europeo cuando aplica.
          </p>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-4">
          {programs.map((p) => (
            <ProgramCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgramCard({
  title,
  desc,
  audience,
  meta,
  icon,
  photo,
  image,
  imageAlt,
}: (typeof programs)[number]) {
  return (
    <article className="reveal-up group flex flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-line-2 shadow-brand-sm transition-shadow duration-300 hover:shadow-brand-lg">
      {/* Image-first photo slot */}
      <div
        className="relative aspect-[16/11] overflow-hidden"
        style={{ background: photo }}
      >
        {image && (
          <Image
            src={image}
            alt={imageAlt ?? ""}
            fill
            sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
        )}
        {/* Depth scrim — keeps the audience pill legible */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background: image
              ? "linear-gradient(180deg, rgba(20,59,92,0.4) 0%, transparent 32%, transparent 60%, rgba(20,59,92,0.28) 100%)"
              : "radial-gradient(120% 85% at 18% 0%, rgba(255,255,255,0.24), transparent 55%), linear-gradient(180deg, transparent 45%, rgba(0,0,0,0.22) 100%)",
          }}
        />
        {/* Oversized icon watermark — placeholder only */}
        {!image && (
          <div
            aria-hidden
            className="absolute -bottom-6 -right-5 opacity-[0.16] rotate-[-8deg] transition-transform duration-500 ease-out group-hover:scale-110 [&>svg]:w-40 [&>svg]:h-40 [&>svg]:text-white"
          >
            {icon}
          </div>
        )}
        {/* Audience pill */}
        <span className="absolute top-4 left-4 inline-flex items-center gap-2 h-9 px-3.5 rounded-pill bg-white/15 border border-white/30 backdrop-blur-md text-white text-[13px]">
          <span className="w-1.5 h-1.5 rounded-full bg-white/80" aria-hidden />
          {audience}
        </span>
        {/* Placeholder hint — placeholder only */}
        {!image && (
          <span className="absolute bottom-4 right-5 font-mono text-[10px] tracking-[0.16em] text-white/55 uppercase">
            Imagen
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col gap-2.5 p-6 flex-1">
        <h3 className="font-heading font-extrabold text-[22px] tracking-tight text-ink">
          {title}
        </h3>
        <p className="text-[15px] leading-relaxed text-ink-3">{desc}</p>
        <div className="flex items-center gap-3.5 text-[13px] text-ink-3 mt-auto pt-3">
          {meta.map((m, i) => (
            <span key={m} className="flex items-center gap-3.5">
              {i > 0 && (
                <span className="w-1 h-1 rounded-full bg-ink-4" aria-hidden />
              )}
              <span>{m}</span>
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
