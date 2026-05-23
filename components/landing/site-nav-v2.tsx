"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { CloseIcon, MenuIcon } from "./icons";

type ProgramItem = { name: string; img: string; href: string };

const programs: ProgramItem[] = [
  { name: "LEAD", img: "/programs/LEAD.webp", href: "#lead" },
  {
    name: "Reccess Camp",
    img: "/programs/Reccess%20Camp.webp",
    href: "#reccess-camp",
  },
  {
    name: "SpellingBee",
    img: "/programs/SpellingBee.webp",
    href: "#spelling-bee",
  },
  {
    name: "Spring Break Camp",
    img: "/programs/Spring%20Break%20Camp.webp",
    href: "#spring-break-camp",
  },
  {
    name: "Winter Camp",
    img: "/programs/Winter%20Camp.webp",
    href: "#winter-camp",
  },
  {
    name: "Summer Camp",
    img: "/programs/Summer%20Camp.webp",
    href: "#summer-camp",
  },
];

type Link = {
  href: string;
  label: string;
  active?: boolean;
  hasMenu?: boolean;
};

const links: Link[] = [
  { href: "#programas", label: "Programas", active: true, hasMenu: true },
  { href: "#metodologia", label: "Metodología" },
  { href: "#diferencia", label: "¿Qué nos diferencia?" },
  { href: "#mision", label: "Nosotros" },
  { href: "#sedes", label: "Sedes" },
  { href: "#contacto", label: "Contacto" },
];

export function SiteNavV2() {
  const [open, setOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);
  const close = () => setOpen(false);

  const openPrograms = () => {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setProgramsOpen(true);
  };

  const scheduleClosePrograms = () => {
    if (closeTimer.current !== null) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => {
      setProgramsOpen(false);
      closeTimer.current = null;
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (closeTimer.current !== null) window.clearTimeout(closeTimer.current);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-line-2">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 xl:px-16 py-3 lg:py-4 flex items-center gap-6 lg:gap-10">
        <Image
          src="/brand/logo.png"
          alt="Educate Learning Center"
          width={160}
          height={40}
          className="h-9 lg:h-10 w-auto shrink-0"
          priority
        />

        {/* Desktop links */}
        <div className="hidden lg:flex flex-1 gap-7">
          {links.map((l) =>
            l.hasMenu ? (
              <div
                key={l.href}
                className="relative"
                onMouseEnter={openPrograms}
                onMouseLeave={scheduleClosePrograms}
                onFocus={openPrograms}
                onBlur={(e) => {
                  if (
                    !e.currentTarget.contains(e.relatedTarget as Node | null)
                  ) {
                    setProgramsOpen(false);
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === "Escape") setProgramsOpen(false);
                }}
              >
                <a
                  href={l.href}
                  aria-haspopup="true"
                  aria-expanded={programsOpen}
                  className={`relative font-heading font-bold text-[15px] no-underline py-1.5 transition-colors hover:text-navy inline-flex items-center gap-1.5 ${
                    l.active
                      ? "text-navy font-extrabold after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-[22px] after:h-[3px] after:bg-orange after:rounded-full"
                      : "text-ink"
                  }`}
                >
                  {l.label}
                  <CaretIcon
                    className={`w-3 h-3 transition-transform ${
                      programsOpen ? "rotate-180" : ""
                    }`}
                  />
                </a>
                {programsOpen && (
                  <ProgramsMenu onItemClick={() => setProgramsOpen(false)} />
                )}
              </div>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className={`relative font-heading font-bold text-[15px] no-underline py-1.5 transition-colors hover:text-navy ${
                  l.active
                    ? "text-navy font-extrabold after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-[22px] after:h-[3px] after:bg-orange after:rounded-full"
                    : "text-ink"
                }`}
              >
                {l.label}
              </a>
            )
          )}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3 ml-auto">
          <Button href="#" variant="ghost" size="sm">
            Iniciar sesión
          </Button>
          <Button href="#contacto" variant="accent" size="sm">
            Agenda tu clase gratis
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden ml-auto inline-flex items-center justify-center w-10 h-10 rounded-xl border border-line-2 text-ink hover:bg-navy-soft transition-colors"
        >
          {open ? (
            <CloseIcon className="w-5 h-5" />
          ) : (
            <MenuIcon className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden border-t border-line-2 bg-white">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <div key={l.href}>
                <a
                  href={l.href}
                  onClick={close}
                  className={`block font-heading font-bold text-base no-underline py-3 px-2 rounded-lg ${
                    l.active ? "text-navy bg-navy-soft" : "text-ink hover:bg-bg-warm"
                  }`}
                >
                  {l.label}
                </a>
                {l.hasMenu && (
                  <div className="ml-2 mt-1 mb-2 grid grid-cols-1 min-[400px]:grid-cols-2 gap-1.5">
                    {programs.map((p) => (
                      <a
                        key={p.name}
                        href={p.href}
                        onClick={close}
                        className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-bg-warm no-underline"
                      >
                        <div className="relative w-12 h-12 shrink-0 bg-bg-warm rounded-md overflow-hidden">
                          <Image
                            src={p.img}
                            alt=""
                            fill
                            sizes="48px"
                            className="object-contain p-1"
                          />
                        </div>
                        <span className="font-heading font-semibold text-[13px] text-ink leading-tight">
                          {p.name}
                        </span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex flex-col gap-2 mt-3">
              <Button href="#" variant="secondary" size="md" onClick={close}>
                Iniciar sesión
              </Button>
              <Button href="#contacto" variant="accent" size="md" onClick={close}>
                Agenda tu clase gratis
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function ProgramsMenu({ onItemClick }: { onItemClick: () => void }) {
  return (
    <div
      role="menu"
      aria-label="Programas Educate"
      className="absolute left-0 top-full pt-4 z-50"
    >
      <div className="w-[560px] xl:w-[720px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-brand-lg border border-line-2 p-3">
        <div className="grid grid-cols-2 xl:grid-cols-3 gap-1">
          {programs.map((p) => (
            <a
              key={p.name}
              href={p.href}
              role="menuitem"
              onClick={onItemClick}
              className="group flex items-center gap-3 p-3 rounded-xl hover:bg-bg-warm transition-colors no-underline"
            >
              <div className="relative w-16 h-16 shrink-0 bg-bg-warm rounded-lg overflow-hidden group-hover:bg-white transition-colors">
                <Image
                  src={p.img}
                  alt=""
                  fill
                  sizes="64px"
                  className="object-contain p-1"
                />
              </div>
              <div className="font-heading font-bold text-[14px] leading-tight text-ink group-hover:text-navy">
                {p.name}
              </div>
            </a>
          ))}
        </div>
        <div className="mt-2 pt-3 border-t border-line-2">
          <a
            href="#programas"
            onClick={onItemClick}
            className="block px-3 py-1 text-[13px] font-heading font-bold text-orange hover:text-orange-deep no-underline"
          >
            Ver todos los programas →
          </a>
        </div>
      </div>
    </div>
  );
}

function CaretIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" fill="none" className={className} aria-hidden>
      <path
        d="M3 4.5L6 7.5L9 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
