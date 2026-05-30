import Image from "next/image";
import { whatsappUrl } from "@/lib/contact";
import { Button } from "../ui/button";

export function PrepHero() {
  return (
    <section className="relative overflow-hidden bg-navy-soft">
      {/* Soft brand decor — echoes the light, airy reference layout */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-white/60 blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-1/3 w-[280px] h-[280px] rounded-full bg-white/40 blur-2xl"
      />

      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 xl:px-16 py-14 sm:py-16 lg:py-20">
        <div className="grid gap-10 lg:gap-16 lg:grid-cols-2 lg:items-center">
          <div className="max-w-[620px]">
            <div className="font-mono text-[11px] tracking-[0.22em] text-orange uppercase">
              Programa
            </div>
            <h1 className="font-display text-[clamp(2rem,7vw,4rem)] leading-[0.97] tracking-tight mt-3 text-ink">
              Preparación para
              <br />
              <span className="text-navy">Exámenes Internacionales.</span>
            </h1>
            <p className="text-lg leading-relaxed text-ink-2 mt-6 max-w-[540px]">
              En Educate Learning Center te brindamos clases personalizadas para
              la preparación de exámenes internacionales. Las clases se enfocan
              en el contenido del examen y en las estrategias necesarias que te
              permitirán alcanzar el puntaje requerido.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3">
              <Button
                href={whatsappUrl(
                  "¡Hola! Quiero información sobre la preparación para exámenes internacionales.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Comenzar ahora
              </Button>
              <Button
                href="#examenes"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Ver exámenes
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative max-w-md lg:max-w-none mx-auto w-full">
            <div className="relative z-10 aspect-[4/3] overflow-hidden rounded-[32px] shadow-brand-lg">
              <Image
                src="/hero/educate-2.webp"
                alt="Estudiantes Educate preparándose para un examen internacional"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
