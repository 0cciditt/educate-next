import { GlobeIcon } from "../landing/icons";
import { allies } from "./aliados-data";

export function AliadosHero() {
  const countries = new Set(allies.filter((a) => !a.hq).map((a) => a.country));
  const partnerCount = allies.filter((a) => !a.hq).length;

  const stats = [
    { value: `${countries.size}`, label: "Países aliados" },
    { value: `${partnerCount}`, label: "Destinos internacionales" },
    { value: "1", label: "Casa: Cali, Colombia" },
  ];

  return (
    <section className="relative overflow-hidden bg-navy-deep text-white">
      {/* Dotted atlas texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,1) 1.4px, transparent 1.4px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Soft warm glow + spinning globe motif */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-24 w-[520px] h-[520px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(242,200,75,0.16) 0%, transparent 65%)",
        }}
      />
      <GlobeIcon
        aria-hidden
        className="absolute -bottom-20 -left-16 w-72 h-72 lg:w-[28rem] lg:h-[28rem] text-white/[0.04]"
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 xl:px-16 py-16 sm:py-20 lg:py-28">
        <div className="max-w-[760px] mx-auto lg:mx-0 text-center lg:text-left">
          <div
            className="hero-rise inline-flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1.5 max-w-full bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl sm:rounded-pill px-3 py-2 text-[12px] sm:text-[13px] text-white/90 mb-6"
            style={{ animationDelay: "60ms" }}
          >
            <span className="bg-yellow text-ink px-2.5 py-1 rounded-pill font-display text-[11px] tracking-[0.08em]">
              RED GLOBAL
            </span>
            <span>Aliados que comparten nuestros estándares</span>
          </div>

          <h1
            className="hero-rise font-display text-[40px] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[84px] leading-[0.92] tracking-tight text-white"
            style={{
              textShadow: "0 2px 30px rgba(20,59,92,0.55)",
              animationDelay: "160ms",
            }}
          >
            Nuestros aliados,
            <br />
            <span className="text-yellow">por todo el mundo.</span>
          </h1>

          <p
            className="hero-rise text-lg sm:text-xl text-white/85 leading-relaxed mt-6 max-w-[620px]"
            style={{ animationDelay: "280ms" }}
          >
            Cada experiencia internacional de Educate nace de una alianza con
            campamentos e instituciones que cumplen nuestros estándares de
            seguridad, pedagogía y cultura. Explora el mapa para descubrir dónde
            te esperan.
          </p>

          <dl
            className="hero-rise mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-[560px] mx-auto lg:mx-0 text-left"
            style={{ animationDelay: "400ms" }}
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-white/[0.06] border border-white/15 px-4 py-4 sm:px-5 sm:py-5 backdrop-blur-sm"
              >
                <dt className="font-display text-3xl sm:text-4xl lg:text-5xl text-yellow leading-none">
                  {s.value}
                </dt>
                <dd className="mt-2 font-mono text-[10px] sm:text-[11px] tracking-[0.12em] uppercase text-white/60 leading-snug">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
