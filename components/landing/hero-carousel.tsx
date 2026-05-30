"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { whatsappUrl } from "@/lib/contact";
import { Button } from "../ui/button";

type Slide = { src: string; alt: string };

const slides: Slide[] = [
  {
    src: "/hero/FOTO-2-scaled.jpg",
    alt: "Estudiantes Educate en una clase en vivo",
  },
  {
    src: "/hero/hero-2-educate.jpg",
    alt: "Aula de Educate Learning Center en Cali",
  },
  {
    src: "/hero/hero-3-educate.jpeg",
    alt: "Estudiantes Educate en actividad cultural",
  },
];

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5500);
    return () => window.clearInterval(id);
  }, [paused]);

  const prev = () =>
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Galería Educate Learning Center"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className="relative overflow-hidden bg-navy-deep text-white"
    >
      {/* Slides — crossfade */}
      <div className="absolute inset-0 z-0">
        {slides.map((s, i) => (
          <div
            key={s.src}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} de ${slides.length}`}
            aria-hidden={i !== index}
            className={`absolute inset-0 transition-opacity duration-900 ease-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={s.src}
              alt={s.alt}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Universal vertical scrim — keeps mobile (full-width text) readable */}
      <div
        aria-hidden
        className="absolute inset-0 z-1"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,59,92,0.28) 0%, rgba(20,59,92,0.58) 100%)",
        }}
      />
      {/* Left-column scrim — guarantees contrast under the text on desktop */}
      <div
        aria-hidden
        className="absolute inset-0 z-1"
        style={{
          background:
            "linear-gradient(95deg, rgba(20,59,92,0.72) 0%, rgba(20,59,92,0.5) 35%, rgba(20,59,92,0.12) 65%, transparent 85%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 xl:px-16 py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16 min-h-[340px] sm:min-h-[380px] md:min-h-[420px] lg:min-h-[460px] flex flex-col justify-center">
        <div className="max-w-[640px]">
          <div className="inline-flex items-center gap-2.5 bg-white/15 border border-white/25 backdrop-blur-md rounded-pill pl-2 pr-4 py-2 text-[13px] text-white mb-5">
            <span className="bg-orange text-white px-2.5 py-1 rounded-pill font-display text-[11px] tracking-[0.08em]">
              NUEVO
            </span>
            <span>Inscripciones abiertas · Cohorte de julio 2026</span>
          </div>

          <h1
            className="font-display text-[34px] sm:text-[42px] md:text-5xl lg:text-[56px] xl:text-[64px] 2xl:text-[72px] leading-[0.95] tracking-tight text-white"
            style={{ textShadow: "0 2px 28px rgba(20,59,92,0.55)" }}
          >
            Educate abre las puertas del mundo <br />
            <span className="text-orange">para tu hijo</span>
          </h1>

          <p
            className="text-lg sm:text-xl text-white/95 leading-relaxed mt-5 sm:mt-6 max-w-[560px]"
            style={{ textShadow: "0 1px 14px rgba(20,59,92,0.5)" }}
          >
            Formación en lengua extranjera y segunda lengua, intercambios
            culturales, campamentos de inmersión y desarrollo de habilidades
            blandas. Una experiencia educativa y significativa para tu hijo.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row sm:flex-wrap gap-3">
            <Button
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              variant="accent"
              size="lg"
              className="w-full sm:w-auto"
            >
              Obtener más información
            </Button>
            <Button
              href="#programas"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto bg-white/10! text-white! border-white/60! backdrop-blur-sm hover:bg-white/20!"
            >
              Conoce los programas
            </Button>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/90">
            <span className="inline-flex items-center gap-2">
              <span className="text-yellow tracking-[2px] text-lg">★★★★★</span>
              <strong className="text-white">4,9/5</strong>
              <span>· 412 reseñas de familias</span>
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green" aria-hidden />
              Cupos abiertos para julio
            </span>
          </div>
        </div>
      </div>

      {/* Carousel controls */}
      <div className="absolute z-20 bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-auto sm:right-4 md:right-6 lg:right-12 xl:right-16 flex items-center gap-2 sm:gap-3 bg-black/20 backdrop-blur-md border border-white/15 rounded-pill px-2.5 sm:px-3 py-1.5 sm:py-2">
        <div
          className="flex items-center gap-1.5 sm:gap-2"
          role="tablist"
          aria-label="Ir a diapositiva"
        >
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Diapositiva ${i + 1} de ${slides.length}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 sm:h-2 rounded-full transition-[width,background-color] duration-300 cursor-pointer ${
                i === index
                  ? "w-6 sm:w-8 bg-yellow"
                  : "w-1.5 sm:w-2 bg-white/55 hover:bg-white/85"
              }`}
            />
          ))}
        </div>
        <span aria-hidden className="w-px h-4 sm:h-5 bg-white/20" />
        <div className="flex items-center gap-0.5 sm:gap-1">
          <button
            type="button"
            onClick={prev}
            aria-label="Diapositiva anterior"
            className="w-8 h-8 sm:w-9 sm:h-9 grid place-items-center rounded-full text-white/85 hover:text-white hover:bg-white/15 transition-colors cursor-pointer"
          >
            <ArrowIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 rotate-180" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Diapositiva siguiente"
            className="w-8 h-8 sm:w-9 sm:h-9 grid place-items-center rounded-full text-white/85 hover:text-white hover:bg-white/15 transition-colors cursor-pointer"
          >
            <ArrowIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
      <path
        d="M7 4l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
