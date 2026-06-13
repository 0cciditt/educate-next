"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

type Slide = { src: string; alt: string };

const slides: Slide[] = [
  {
    src: "/spring-break-camp/spring-break-camp-hero-1.webp",
    alt: "Niños practicando tiro con arco en el campamento",
  },
  {
    src: "/spring-break-camp/spring-break-camp-hero-2.webp",
    alt: "Niño cruzando un puente de cuerdas en el campamento",
  },
  {
    src: "/spring-break-camp/spring-break-camp-hero-3.webp",
    alt: "Niña con casco y arnés en un circuito de cuerdas altas",
  },
];

export function SpringBreakCampHero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5500);
    return () => window.clearInterval(id);
  }, [paused, reducedMotion]);

  const prev = () =>
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Galería Spring Break Camp"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className="relative overflow-hidden bg-green-deep text-white"
    >
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
              className={`object-cover transition-transform duration-[900ms] ease-out ${
                i === index ? "ken-burns-active" : "scale-100"
              }`}
            />
          </div>
        ))}
      </div>

      <div
        aria-hidden
        className="absolute inset-0 z-1"
        style={{
          background:
            "linear-gradient(180deg, rgba(86,137,53,0.32) 0%, rgba(20,59,92,0.58) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 z-1"
        style={{
          background:
            "linear-gradient(95deg, rgba(20,59,92,0.74) 0%, rgba(86,137,53,0.45) 35%, rgba(86,137,53,0.1) 65%, transparent 85%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 xl:px-16 py-10 sm:py-12 md:py-14 lg:py-20 xl:py-24 min-h-[380px] sm:min-h-[420px] md:min-h-[460px] lg:min-h-[600px] xl:min-h-[660px] flex flex-col justify-center">
        <div className="max-w-[680px] text-center lg:text-left">
          <div
            className="hero-rise inline-flex items-center gap-2.5 bg-white/15 border border-white/25 backdrop-blur-md rounded-pill pl-2 pr-4 py-2 text-[13px] text-white mb-5"
            style={{ animationDelay: "60ms" }}
          >
            <span className="bg-yellow text-ink px-2.5 py-1 rounded-pill font-display text-[11px] tracking-[0.08em]">
              SEMANA SANTA 2026
            </span>
            <span>Cupos limitados · Cali</span>
          </div>

          <h1
            className="hero-rise font-display text-[36px] sm:text-[44px] md:text-5xl lg:text-[60px] xl:text-[72px] leading-[0.95] tracking-tight text-white"
            style={{
              textShadow: "0 2px 28px rgba(20,59,92,0.55)",
              animationDelay: "160ms",
            }}
          >
            Spring Break Camp.{" "}
            <span className="text-yellow">La primavera se vive en Cali.</span>
          </h1>

          <p
            className="hero-rise text-lg sm:text-xl text-white/95 leading-relaxed mt-5 sm:mt-6 max-w-[600px] mx-auto lg:mx-0 line-clamp-3 sm:line-clamp-none"
            style={{
              textShadow: "0 1px 14px rgba(20,59,92,0.5)",
              animationDelay: "280ms",
            }}
          >
            Cinco días de campamento durante la Semana Santa en Cali. Juego,
            arte, deporte y mucho inglés para que los niños vivan unas
            vacaciones diferentes, sin salir de la ciudad.
          </p>

          <div
            className="hero-rise mt-7 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:justify-center lg:justify-start"
            style={{ animationDelay: "400ms" }}
          >
            <Button
              href="#mas-info"
              variant="accent"
              size="lg"
              className="w-full sm:w-auto"
            >
              Solicitar dossier
            </Button>
            <Button
              href="#experiencia"
              variant="secondary"
              size="lg"
              className="max-sm:hidden w-full sm:w-auto bg-white/10! text-white! border-white/60! backdrop-blur-sm hover:bg-white/20!"
            >
              Qué incluye
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute z-20 bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-auto sm:right-4 md:right-6 lg:right-12 xl:right-16 hidden sm:flex items-center gap-2 sm:gap-3 bg-black/20 backdrop-blur-md border border-white/15 rounded-pill px-2.5 sm:px-3 py-1.5 sm:py-2">
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
              className={`relative overflow-hidden h-1.5 sm:h-2 rounded-full transition-[width,background-color] duration-300 cursor-pointer ${
                i === index
                  ? "w-6 sm:w-8 bg-white/35"
                  : "w-1.5 sm:w-2 bg-white/55 hover:bg-white/85"
              }`}
            >
              {i === index &&
                (reducedMotion ? (
                  <span className="absolute inset-0 rounded-full bg-yellow" />
                ) : (
                  <span
                    key={index}
                    aria-hidden
                    className="absolute inset-0 origin-left rounded-full bg-yellow"
                    style={{
                      animation: "dot-progress 5500ms linear both",
                      animationPlayState: paused ? "paused" : "running",
                    }}
                  />
                ))}
            </button>
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
