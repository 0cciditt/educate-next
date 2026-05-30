import { Button } from "../ui/button";
import { PhotoPlaceholder } from "../ui/photo-placeholder";

const decorBlocks: (string | null)[] = [
  "bg-orange",
  null,
  "bg-yellow",
  null,
  "bg-navy",
  "bg-burgundy",
  null,
  "bg-green",
  null,
];

export function CentrosEducativosHero() {
  return (
    <section className="relative overflow-hidden bg-navy-soft py-16 sm:py-20 lg:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(31,79,122,.12) 1.4px, transparent 1.4px)",
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 40%, #000 40%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 40%, #000 40%, transparent 75%)",
        }}
      />
      <div
        aria-hidden
        className="hidden lg:grid absolute -bottom-10 -right-10 grid-cols-3 grid-rows-3 gap-2 opacity-50 z-0"
      >
        {decorBlocks.map((bg, i) => (
          <div
            key={i}
            className={`w-12 h-12 xl:w-14 xl:h-14 rounded-xl ${bg ?? "bg-transparent"}`}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="grid gap-12 lg:gap-16 xl:gap-20 lg:grid-cols-2 lg:items-center">
          <div className="relative order-2 lg:order-1 max-w-md lg:max-w-none mx-auto w-full">
            <PhotoPlaceholder
              label="DOCENTES Y ESTUDIANTES · AULA BILINGÜE"
              rounded="rounded-[32px]"
              className="relative z-10 aspect-[4/3] shadow-brand-lg"
            />
          </div>

          <div className="order-1 lg:order-2">
            <div className="font-mono text-[11px] tracking-[0.22em] text-orange uppercase">
              Programa para
            </div>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-[88px] leading-[0.92] tracking-tight mt-3 text-navy">
              Centros
              <br />
              Educativos.
            </h1>
            <p className="text-lg sm:text-xl text-ink-2 leading-relaxed mt-6 max-w-[540px]">
              Diseñamos programas bilingües a la medida de cada colegio y
              abrimos rutas de certificación internacional en inglés para todo
              su equipo docente y su alumnado.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row sm:flex-wrap gap-3">
              <Button
                href="#solicitar"
                variant="accent"
                size="lg"
                className="w-full sm:w-auto"
              >
                Comenzar ahora
              </Button>
              <Button
                href="#programa"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Conoce el programa
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
