import { Button } from "../ui/button";
import { PhotoPlaceholder } from "../ui/photo-placeholder";

const decorBlocks: (string | null)[] = [
  "bg-orange",
  null,
  "bg-yellow",
  null,
  "bg-navy",
  "bg-red",
  "bg-burgundy",
  "bg-green",
  null,
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      {/* Subtle dot grid behind everything */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(31,79,122,.10) 1.4px, transparent 1.4px)",
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 40%, #000 40%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 40%, #000 40%, transparent 75%)",
        }}
      />

      {/* Decor blocks bottom-left.
         lg: small + pushed further off-screen so the reviews row clears it.
         xl: original size and offset, matching the prototype. */}
      <div
        aria-hidden
        className="hidden lg:grid absolute -bottom-16 -left-16 xl:-bottom-8 xl:-left-8 z-0 grid-cols-3 grid-rows-3 gap-1.5 xl:gap-2"
      >
        {decorBlocks.map((bg, i) => (
          <div
            key={i}
            className={`w-9 h-9 xl:w-14 xl:h-14 rounded-lg xl:rounded-[10px] ${bg ?? "bg-transparent"}`}
          />
        ))}
      </div>

      {/* Tilted yellow square top-right (desktop only) */}
      <div
        aria-hidden
        className="hidden lg:block absolute top-16 right-[6%] w-22 h-22 bg-yellow rounded-[20px] opacity-50 z-0"
        style={{ transform: "rotate(-12deg)", width: 88, height: 88 }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 xl:gap-20 lg:items-start">
          {/* Text column */}
          <div>
            <div className="inline-flex items-center gap-2.5 bg-bg-warm border border-line rounded-pill pl-2 pr-4 py-2 text-[13px] text-ink-2 mb-5">
              <span className="bg-orange text-white px-2.5 py-1 rounded-pill font-display text-[11px] tracking-[0.08em]">
                NUEVO
              </span>
              <span>Inscripciones abiertas · Cohorte de julio 2026</span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-[96px] leading-[0.92] tracking-[-0.025em] text-ink">
              Aprende inglés que te lleva al{" "}
              <span className="text-orange">mundo.</span>
            </h1>

            <p className="text-lg sm:text-xl text-ink-2 leading-relaxed mt-5 sm:mt-6 max-w-[540px]">
              Niños, jóvenes y adultos. Grupos pequeños, profes certificados y
              una metodología 100% conversacional que de verdad te hace hablar
              — no solo memorizar.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="#contacto" variant="accent" size="lg">
                Agenda tu clase gratis
              </Button>
              <Button href="#programas" variant="secondary" size="lg">
                Conoce los programas
              </Button>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink-3">
              <span className="inline-flex items-center gap-2">
                <span className="text-yellow-deep tracking-[2px] text-lg">★★★★★</span>
                <strong className="text-ink">4,9/5</strong>
                <span>· 412 reseñas de familias</span>
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green" aria-hidden />
                Cupos abiertos para julio
              </span>
            </div>
          </div>

          {/* Photo column */}
          <div className="relative mt-2 lg:mt-0 max-w-md lg:max-w-none mx-auto w-full">
            {/* Tilted navy backdrop */}
            <div
              aria-hidden
              className="hidden sm:block absolute -left-5 -top-5 right-5 bottom-5 bg-navy rounded-[32px] z-0"
              style={{ transform: "rotate(-3deg)" }}
            />
            {/* Tilted orange-soft backdrop */}
            <div
              aria-hidden
              className="hidden sm:block absolute left-5 top-5 -right-5 -bottom-5 bg-orange-soft rounded-[32px] z-0"
              style={{ transform: "rotate(2deg)" }}
            />

            {/* Floating stat badge (desktop only — overlaps on mobile) */}
            <div className="hidden lg:flex absolute -left-7 top-8 z-20 bg-white rounded-2xl shadow-brand-md px-4 py-3.5 items-center gap-3">
              <div className="font-display text-3xl text-orange leading-none">4,9</div>
              <div className="text-xs text-ink-3 leading-snug">
                de 5 estrellas
                <br />
                <strong className="text-ink">412 familias</strong>
              </div>
            </div>

            <PhotoPlaceholder
              label="ESTUDIANTE · CLASE EN VIVO"
              rounded="rounded-[32px]"
              className="relative z-10 aspect-[4/5] shadow-brand-lg"
            />

            {/* "Primera clase gratis" sticker */}
            <div
              className="absolute -bottom-5 -right-2 sm:-right-5 z-20 bg-yellow text-ink font-display text-sm sm:text-base px-4 sm:px-5 py-3 sm:py-4 rounded-pill shadow-pop"
              style={{ transform: "rotate(-3deg)" }}
            >
              Primera clase gratis ★
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
