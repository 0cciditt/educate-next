"use client";

import { useEffect, useRef, useState } from "react";

type Stat = {
  color: string;
  /** Numeric target the value counts up to. */
  value: number;
  /** Decimal places to show (Spanish comma formatting). */
  decimals?: number;
  /** Suffix rendered at the big size, e.g. "k". */
  bigSuffix?: string;
  /** Suffix rendered smaller, e.g. "años", "%". */
  smallSuffix?: string;
  sub: string;
  caption: string;
};

const stats: Stat[] = [
  {
    color: "text-navy",
    value: 15,
    smallSuffix: "años",
    sub: "de experiencia",
    caption: "Desde nuestro primer campamento, en 2011",
  },
  {
    color: "text-orange",
    value: 3400,
    sub: "participantes en campamentos",
    caption: "Niños, Jóvenes y Adultos",
  },
  {
    color: "text-green",
    value: 6,
    sub: "países aliados",
    caption: "Para experiencias internacionales",
  },
  {
    color: "text-burgundy",
    value: 3,
    sub: "sedes en el Valle del Cauca",
    caption: "En Unicentro, Centenario y Capri",
  },
];

function formatStat(value: number, decimals: number) {
  return value.toLocaleString("es-CO", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

export function Stats() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 xl:px-16">
        <StatsView />
      </div>
    </section>
  );
}

function StatsView() {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const count = stats.length;

  // Auto-advance the mobile carousel (skipped under reduced motion).
  useEffect(() => {
    if (count <= 1) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, 4000);
    return () => window.clearInterval(id);
  }, [count]);

  // Count the numbers up once they scroll into view.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let started = false;
    const duration = 1400;
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || started) return;
        started = true;
        observer.disconnect();
        if (reduce) {
          setProgress(1);
          return;
        }
        const start = performance.now();
        const step = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          setProgress(ease(t));
          if (t < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={containerRef}>
      {/* Mobile: one stat per slide, sliding + auto-advancing */}
      <div className="sm:hidden">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {stats.map((s) => (
              <div key={s.sub} className="w-full shrink-0 px-2 text-center">
                <StatItem {...s} progress={progress} centered />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {stats.map((s, i) => (
            <button
              key={s.sub}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Ir a ${s.sub}`}
              aria-current={i === index}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-7 bg-navy" : "w-2 bg-line hover:bg-ink-4"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop: full grid */}
      <div className="hidden sm:grid grid-cols-2 gap-12 lg:grid-cols-4">
        {stats.map((s) => (
          <StatItem key={s.sub} {...s} progress={progress} />
        ))}
      </div>
    </div>
  );
}

function StatItem({
  color,
  value,
  decimals = 0,
  bigSuffix,
  smallSuffix,
  sub,
  caption,
  progress,
  centered = false,
}: Stat & { progress: number; centered?: boolean }) {
  const display = formatStat(value * progress, decimals);
  return (
    <div>
      <span
        aria-hidden
        className={`block h-[3px] w-10 rounded-full bg-current mb-4 ${color} ${
          centered ? "mx-auto" : ""
        }`}
      />
      <div
        className={`font-display leading-none tabular-nums ${
          centered ? "text-6xl" : "text-5xl sm:text-6xl xl:text-7xl"
        } ${color}`}
      >
        {display}
        {bigSuffix}
        {smallSuffix && (
          <span className="text-2xl sm:text-3xl xl:text-[32px] ml-1">
            {smallSuffix}
          </span>
        )}
      </div>
      <div className="font-heading font-bold text-[15px] mt-2 text-ink">
        {sub}
      </div>
      <div className="text-[13px] text-ink-3 mt-1">{caption}</div>
    </div>
  );
}
