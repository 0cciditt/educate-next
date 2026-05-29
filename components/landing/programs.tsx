import type { ReactNode } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { LevelChip } from "../ui/level-chip";
import { PhotoPlaceholder } from "../ui/photo-placeholder";

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
            humano. Homologados con el Marco Común Europeo cuando aplica.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          <ProgramCard
            media={
              <PhotoPlaceholder
                label="LENGUA EXTRANJERA · A1–C2"
                rounded="rounded-none"
                className="aspect-[16/10]"
              />
            }
            badges={
              <>
                <LevelChip level="A1" />
                <LevelChip level="C2" />
                <Badge tone="orange" dot>
                  Niños, jóvenes y adultos
                </Badge>
              </>
            }
            title="Formación en lenguas"
            desc="Programas de lengua extranjera y segunda lengua. El idioma se descubre con su cultura — no solo se memoriza."
            meta={["Módulos de 51 h", "Marco Común Europeo"]}
          />

          <ProgramCard
            media={
              <PhotoPlaceholder
                label="INTERCAMBIO CULTURAL"
                rounded="rounded-none"
                className="aspect-[16/10]"
              />
            }
            badges={
              <>
                <Badge tone="yellow" dot>
                  Jóvenes y adultos
                </Badge>
              </>
            }
            title="Intercambio cultural"
            desc="Experiencias que conectan a nuestros estudiantes con otras culturas, comunidades y formas de habitar el mundo."
            meta={["Programas internacionales", "Acompañamiento integral"]}
          />

          <ProgramCard
            media={
              <PhotoPlaceholder
                label="CAMPAMENTOS DE INMERSIÓN"
                rounded="rounded-none"
                className="aspect-[16/10]"
              />
            }
            badges={
              <>
                <Badge tone="solid-navy">Tiempo libre</Badge>
              </>
            }
            title="Inmersión y tiempo libre"
            desc="Campamentos y programas de aprovechamiento del tiempo libre donde se vive la lengua, la cultura y el juego."
            meta={["Vacaciones", "Experiencias lúdicas"]}
          />

          <ProgramCard
            highlight
            media={
              <div className="aspect-[16/10] bg-burgundy grid place-items-center text-white font-display text-2xl sm:text-3xl tracking-tight">
                B2B
              </div>
            }
            badges={
              <>
                <Badge tone="burgundy">Colegios y empresas</Badge>
              </>
            }
            title="Asesoría institucional"
            desc="Acompañamos a instituciones educativas y empresas del sector privado en proyectos lingüísticos y extracurriculares."
            meta={["Diseño a medida", "Habilidades blandas"]}
          />
        </div>

        <div className="mt-8 flex justify-center">
          <Button href="#contacto" variant="secondary">
            Diseñemos un programa para tu organización →
          </Button>
        </div>
      </div>
    </section>
  );
}

function ProgramCard({
  media,
  badges,
  title,
  desc,
  meta,
  highlight = false,
}: {
  media: ReactNode;
  badges: ReactNode;
  title: string;
  desc: string;
  meta: string[];
  highlight?: boolean;
}) {
  return (
    <article
      className={`flex flex-col rounded-3xl overflow-hidden border border-line-2 bg-white ${
        highlight ? "shadow-brand-md" : "shadow-brand-sm"
      }`}
    >
      {media}
      <div className="p-6 flex flex-col gap-2.5 flex-1">
        <div className="flex flex-wrap gap-1.5">{badges}</div>
        <h3 className="font-heading font-extrabold text-[22px] tracking-tight text-ink">
          {title}
        </h3>
        <p className="text-[15px] leading-relaxed text-ink-3">{desc}</p>
        <div className="flex items-center gap-3.5 text-[13px] text-ink-3 mt-auto pt-2">
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
