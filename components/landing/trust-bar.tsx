"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { TrophyIcon, GraduationCapIcon, CheckIcon, UsersIcon } from "./icons";

type Item = { bg: string; icon: ReactNode; title: string; sub: string };

const items: Item[] = [
  {
    bg: "bg-green",
    icon: <GraduationCapIcon className="w-5 h-5 text-white" />,
    title: "Marco Común Europeo",
    sub: "Homologados A1 a C1",
  },
  {
    bg: "bg-green",
    icon: <CheckIcon className="w-5 h-5 text-white" />,
    title: "Cambridge Authorized",
    sub: "Centro de preparación oficial",
  },
  {
    bg: "bg-green",
    icon: <UsersIcon className="w-5 h-5 text-white" />,
    title: "Profes certificados",
    sub: "TKT, CELTA y nativos",
  },
  {
    bg: "bg-green",
    icon: <TrophyIcon className="w-5 h-5 text-white" />,
    title: "12 años en el Valle",
    sub: "3.200 estudiantes formados",
  },
];

export function TrustBar() {
  return (
    <section className="bg-bg-warm border-y border-line-2 py-8 sm:py-10">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 xl:px-16 grid gap-8 lg:gap-12 lg:grid-cols-[200px_1fr] lg:items-center">
        <div className="font-mono text-xs tracking-[0.15em] text-ink-3 leading-relaxed text-center lg:text-left">
          RESPALDOS QUE NOS AVALAN
        </div>
        <TrustItems />
      </div>
    </section>
  );
}

function TrustItems() {
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
    <div className="min-w-0">
      {/* Mobile: one badge at a time, sliding + auto-advancing */}
      <div className="sm:hidden">
        <div className="w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {items.map((it) => (
              <div
                key={it.title}
                className="w-full shrink-0 flex flex-col items-center text-center gap-2 px-4 py-2"
              >
                <div
                  className={`w-12 h-12 rounded-xl grid place-items-center ${it.bg}`}
                >
                  {it.icon}
                </div>
                <div className="font-heading font-extrabold text-[15px] text-ink">
                  {it.title}
                </div>
                <div className="text-xs text-ink-3">{it.sub}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 flex items-center justify-center gap-2">
          {items.map((it, i) => (
            <button
              key={it.title}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Ir a ${it.title}`}
              aria-current={i === index}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-7 bg-navy" : "w-2 bg-line hover:bg-ink-4"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop: full grid */}
      <div className="hidden sm:grid sm:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-10">
        {items.map((it) => (
          <TrustItem key={it.title} {...it} />
        ))}
      </div>
    </div>
  );
}

function TrustItem({ bg, icon, title, sub }: Item) {
  return (
    <div className="flex items-center gap-3.5">
      <div
        className={`w-11 h-11 rounded-xl grid place-items-center shrink-0 ${bg}`}
      >
        {icon}
      </div>
      <div>
        <div className="font-heading font-extrabold text-[15px] text-ink">
          {title}
        </div>
        <div className="text-xs text-ink-3 mt-0.5">{sub}</div>
      </div>
    </div>
  );
}
