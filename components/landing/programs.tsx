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
              Programas de inglés
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-[0.95] tracking-tight mt-2 text-ink">
              Un curso para cada edad,
              <br className="hidden sm:inline" />
              <span className="sm:hidden"> </span>una ruta para cada meta.
            </h2>
          </div>
          <p className="text-[17px] leading-relaxed text-ink-3 lg:max-w-sm">
            Todos nuestros programas están homologados con el Marco Común
            Europeo y estructurados en módulos de 51 horas.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          <ProgramCard
            media={
              <PhotoPlaceholder
                label="NIÑOS · 6–10"
                rounded="rounded-none"
                className="aspect-[16/10]"
              />
            }
            badges={
              <>
                <LevelChip level="A1" />
                <Badge tone="orange" dot>
                  Niños · 6–10
                </Badge>
              </>
            }
            title="Little Explorers"
            desc="Cuentos, canciones, juegos y proyectos cortos. El inglés se descubre, no se memoriza."
            meta={["6 módulos", "51 h c/u"]}
          />

          <ProgramCard
            media={
              <PhotoPlaceholder
                label="NIÑOS · 10–13"
                rounded="rounded-none"
                className="aspect-[16/10]"
              />
            }
            badges={
              <>
                <LevelChip level="A2" />
                <Badge tone="yellow" dot>
                  Tweens · 10–13
                </Badge>
              </>
            }
            title="Explore 4 Learning"
            desc="Lectura, escritura y conversación con temas que de verdad les importan a esta edad."
            meta={["8 módulos", "51 h c/u"]}
          />

          <ProgramCard
            media={
              <PhotoPlaceholder
                label="ADOLES + ADULTOS"
                rounded="rounded-none"
                className="aspect-[16/10]"
              />
            }
            badges={
              <>
                <LevelChip level="B1" />
                <LevelChip level="B2" />
                <Badge tone="solid-navy">Jóvenes & adultos</Badge>
              </>
            }
            title="Confident Voices"
            desc="Inglés conversacional para universidad, viajes y trabajo. Hablar fluido es la meta."
            meta={["10 módulos", "51 h c/u"]}
          />

          <ProgramCard
            highlight
            media={
              <div className="aspect-[16/10] bg-burgundy grid place-items-center text-white font-display text-2xl sm:text-3xl tracking-tight">
                CAMBRIDGE
              </div>
            }
            badges={
              <>
                <LevelChip level="C1" />
                <LevelChip level="C2" />
                <Badge tone="burgundy">Cambridge</Badge>
              </>
            }
            title="Global Leaders"
            desc="Preparación CAE, CPE e IELTS. Para profesionales que necesitan moverse en el mundo."
            meta={["22 semanas", "+ simulacros"]}
          />
        </div>

        <div className="mt-8 flex justify-center">
          <Button href="#" variant="secondary">
            Programa empresarial para tu equipo →
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
