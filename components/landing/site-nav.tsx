"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { CloseIcon, MenuIcon } from "./icons";

const links = [
  { href: "#programas", label: "Programas", active: true },
  { href: "#metodologia", label: "Metodología" },
  { href: "#diferencia", label: "¿Qué nos diferencia?" },
  { href: "#mision", label: "Nosotros" },
  { href: "#sedes", label: "Sedes" },
  { href: "#contacto", label: "Contacto" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

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
          {links.map((l) => (
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
          ))}
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
          {open ? <CloseIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden border-t border-line-2 bg-white">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={close}
                className={`font-heading font-bold text-base no-underline py-3 px-2 rounded-lg ${
                  l.active ? "text-navy bg-navy-soft" : "text-ink hover:bg-bg-warm"
                }`}
              >
                {l.label}
              </a>
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
