"use client";

import { useEffect, useState } from "react";

export type Highlight = { eyebrow: string; label: string; sub: string };

function HighlightContent({ h }: { h: Highlight }) {
  return (
    <>
      <div className="font-mono text-[11px] tracking-[0.18em] text-orange uppercase">
        {h.eyebrow}
      </div>
      <div className="font-display text-2xl sm:text-[28px] leading-tight text-ink">
        {h.label}
      </div>
      <div className="text-sm text-ink-3">{h.sub}</div>
    </>
  );
}

export function HighlightsStrip({ items }: { items: Highlight[] }) {
  const [index, setIndex] = useState(0);
  const count = items.length;

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
    }, 3500);
    return () => window.clearInterval(id);
  }, [count]);

  return (
    <section className="bg-white py-10 sm:py-12 border-b border-line-2">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 xl:px-16">
        {/* Mobile: one option at a time, sliding + auto-advancing */}
        <div className="sm:hidden">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {items.map((h) => (
                <div
                  key={h.eyebrow}
                  className="w-full shrink-0 py-4 min-h-[128px] flex flex-col items-center justify-center gap-2 text-center"
                >
                  <HighlightContent h={h} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 flex items-center justify-center gap-2">
            {items.map((h, i) => (
              <button
                key={h.eyebrow}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Ir a ${h.eyebrow}`}
                aria-current={i === index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? "w-7 bg-navy" : "w-2 bg-line hover:bg-ink-4"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: full grid */}
        <div className="hidden sm:grid sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((h) => (
            <div key={h.eyebrow} className="flex flex-col gap-1">
              <HighlightContent h={h} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
