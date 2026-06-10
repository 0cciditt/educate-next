"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { whatsappUrl } from "@/lib/contact";
import { Button } from "../ui/button";
import { CloseIcon, MenuIcon } from "./icons";

type ProgramItem = { name: string; href: string };

const campamentos: ProgramItem[] = [
  { name: "Summer Camp", href: "/programas/summer-camp" },
  { name: "Recess Camp®", href: "/programas/recess-camp" },
  { name: "Spring Break Camp", href: "/programas/spring-break-camp" },
  { name: "Winter Camp", href: "/programas/winter-camp" },
];

const programasIngles: ProgramItem[] = [
  { name: "Inglés niños y adolescentes", href: "/programas/young-learners" },
  { name: "Inglés adultos y jóvenes (14+)", href: "/programas/live-english" },
  { name: "Español para extranjeros", href: "/programas/espanol-para-extranjeros" },
];

const extracurriculares: ProgramItem[] = [
  { name: "SpellingBee", href: "/programas/extracurriculares#spelling-bee" },
  { name: "Math Genius", href: "/programas/extracurriculares#math-genius" },
  {
    name: "Science Play Date",
    href: "/programas/extracurriculares#science-play-date",
  },
  { name: "LEAD®", href: "/programas/extracurriculares#lead" },
];

const corporativas: ProgramItem[] = [
  {
    name: "Programas para centros educativos",
    href: "/programas/centros-educativos",
  },
];

type NavLink = {
  href: string;
  label: string;
};

const links: NavLink[] = [
  { href: "#mision", label: "Nosotros" },
  { href: "#diferencia", label: "¿Qué nos diferencia?" },
  { href: "#metodologia", label: "Metodología" },
  { href: "#sedes", label: "Sedes" },
  { href: "#contacto", label: "Contacto" },
];

type MenuId = "campamentos" | "ingles" | "extracurriculares" | "corporativas";

const matchesAny = (items: ProgramItem[], path: string | null) =>
  items.some(
    (p) => p.href.startsWith("/") && path === p.href.split("#")[0],
  );

export function SiteNavV2() {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuId | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const closeTimer = useRef<number | null>(null);
  const pathname = usePathname();
  const close = () => setOpen(false);

  const handleOpen = (id: MenuId) => {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setOpenMenu(id);
  };
  const scheduleClose = () => {
    if (closeTimer.current !== null) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => {
      setOpenMenu(null);
      closeTimer.current = null;
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (closeTimer.current !== null) window.clearTimeout(closeTimer.current);
    };
  }, []);

  // Condense the header once the page scrolls past the top.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scrollspy — highlight the in-page link for the section currently in view.
  useEffect(() => {
    const ids = links
      .filter((l) => l.href.startsWith("#"))
      .map((l) => l.href.slice(1));
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (els.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          );
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <nav
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur transition-shadow duration-300 ${
        scrolled ? "shadow-brand-sm" : ""
      }`}
    >
      <div
        className={`mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 xl:px-16 flex items-center gap-6 lg:gap-10 transition-[padding] duration-300 ${
          scrolled ? "py-2 lg:py-2.5" : "py-3 lg:py-4"
        }`}
      >
        <Link href="/" className="shrink-0 no-underline">
          <Image
            src="/brand/logo.webp"
            alt="Educate Learning Center"
            width={160}
            height={40}
            className={`w-auto transition-[height] duration-300 ${
              scrolled ? "h-10 lg:h-12" : "h-12 lg:h-16"
            }`}
            style={{ width: "auto" }}
            priority
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex flex-1 gap-7">
          {links.map((l) => {
            const active =
              l.href.startsWith("#") && activeSection === l.href.slice(1);
            return (
              <a
                key={l.href}
                href={l.href}
                aria-current={active ? "true" : undefined}
                className="group relative font-heading font-bold text-[15px] no-underline py-1.5 text-ink"
              >
                {l.label}
                <span
                  aria-hidden
                  className={`pointer-events-none absolute left-0 -bottom-0.5 h-[2px] w-full origin-left rounded-full bg-orange transition-transform duration-300 ease-out ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </a>
            );
          })}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3 ml-auto">
          <Button
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            variant="accent"
            size="sm"
          >
            Obtener más información
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden ml-auto inline-flex items-center justify-center w-10 h-10 rounded-xl border border-line-2 text-navy hover:bg-navy-soft transition-colors"
        >
          {open ? (
            <CloseIcon className="w-5 h-5" />
          ) : (
            <MenuIcon className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Desktop sub-navbar — program category dropdowns */}
      <div className="hidden lg:block bg-navy">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 xl:px-16 flex flex-wrap items-center justify-center gap-x-0.5">
          <SubNavDropdown
            id="campamentos"
            label="Campamentos"
            items={campamentos}
            isOpen={openMenu === "campamentos"}
            isHighlighted={matchesAny(campamentos, pathname)}
            pathname={pathname}
            onOpen={() => handleOpen("campamentos")}
            onScheduleClose={scheduleClose}
            onClose={() => setOpenMenu(null)}
            compact={scrolled}
          />
          <SubNavDropdown
            id="ingles"
            label="Programas de Idiomas"
            items={programasIngles}
            isOpen={openMenu === "ingles"}
            isHighlighted={matchesAny(programasIngles, pathname)}
            pathname={pathname}
            onOpen={() => handleOpen("ingles")}
            onScheduleClose={scheduleClose}
            onClose={() => setOpenMenu(null)}
            compact={scrolled}
          />
          <SubNavDropdown
            id="extracurriculares"
            label="Programas Extracurriculares"
            items={extracurriculares}
            isOpen={openMenu === "extracurriculares"}
            isHighlighted={matchesAny(extracurriculares, pathname)}
            pathname={pathname}
            onOpen={() => handleOpen("extracurriculares")}
            onScheduleClose={scheduleClose}
            onClose={() => setOpenMenu(null)}
            compact={scrolled}
          />
          <SubNavDropdown
            id="corporativas"
            label="Soluciones corporativas"
            items={corporativas}
            isOpen={openMenu === "corporativas"}
            isHighlighted={matchesAny(corporativas, pathname)}
            pathname={pathname}
            onOpen={() => handleOpen("corporativas")}
            onScheduleClose={scheduleClose}
            onClose={() => setOpenMenu(null)}
            compact={scrolled}
          />
          <Link
            href="/programas/preparacion-examenes-internacionales"
            aria-current={
              pathname === "/programas/preparacion-examenes-internacionales"
                ? "page"
                : undefined
            }
            className={`group relative font-heading font-bold text-[15px] px-4 inline-flex items-center gap-1.5 rounded-t-xl transition-[padding,color] duration-300 no-underline ${
              scrolled ? "py-2.5" : "py-4"
            } ${
              pathname === "/programas/preparacion-examenes-internacionales"
                ? "text-yellow"
                : "text-white"
            }`}
          >
            Preparación para Exámenes Internacionales
            <span
              aria-hidden
              className={`pointer-events-none absolute left-4 right-4 bottom-0 h-[3px] origin-left rounded-t-full bg-yellow transition-transform duration-300 ease-out ${
                pathname === "/programas/preparacion-examenes-internacionales"
                  ? "scale-x-100"
                  : "scale-x-0 group-hover:scale-x-100"
              }`}
            />
          </Link>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden border-t border-line-2 bg-white">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 py-4 flex flex-col gap-0.5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={close}
                className="font-heading font-bold text-base no-underline py-3 px-3 rounded-xl text-ink hover:bg-bg-warm transition-colors"
              >
                {l.label}
              </a>
            ))}

            <div className="mt-3 pt-3 border-t border-line-2 flex flex-col gap-0.5">
              <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-ink-4 px-3 pb-1">
                Programas
              </div>
              <MobileCategory
                label="Campamentos"
                items={campamentos}
                pathname={pathname}
                onItemClick={close}
              />
              <MobileCategory
                label="Programas de Idiomas"
                items={programasIngles}
                pathname={pathname}
                onItemClick={close}
              />
              <MobileCategory
                label="Programas Extracurriculares"
                items={extracurriculares}
                pathname={pathname}
                onItemClick={close}
              />
              <MobileCategory
                label="Soluciones corporativas"
                items={corporativas}
                pathname={pathname}
                onItemClick={close}
              />
              <a
                href="/programas/preparacion-examenes-internacionales"
                onClick={close}
                aria-current={
                  pathname === "/programas/preparacion-examenes-internacionales"
                    ? "page"
                    : undefined
                }
                className={`font-heading font-bold text-base no-underline py-3 px-3 rounded-xl transition-colors ${
                  pathname === "/programas/preparacion-examenes-internacionales"
                    ? "text-navy bg-navy-soft"
                    : "text-ink hover:bg-bg-warm"
                }`}
              >
                Preparación de Exámenes Internacionales
              </a>
            </div>

            <div className="flex flex-col gap-2 mt-3 pt-3 border-t border-line-2">
              <Button
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                variant="accent"
                size="md"
                onClick={close}
              >
                Obtener más información
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function SubNavDropdown({
  id,
  label,
  items,
  isOpen,
  isHighlighted,
  pathname,
  onOpen,
  onScheduleClose,
  onClose,
  compact,
}: {
  id: string;
  label: string;
  items: ProgramItem[];
  isOpen: boolean;
  isHighlighted: boolean;
  pathname: string | null;
  onOpen: () => void;
  onScheduleClose: () => void;
  onClose: () => void;
  compact: boolean;
}) {
  return (
    <div
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onScheduleClose}
      onFocus={onOpen}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          onClose();
        }
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape") onClose();
      }}
    >
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={() => (isOpen ? onClose() : onOpen())}
        className={`group relative font-heading font-bold text-[15px] px-4 inline-flex items-center gap-1.5 rounded-t-xl transition-[padding,background-color,color] duration-300 cursor-pointer ${
          compact ? "py-2.5" : "py-4"
        } ${isOpen ? "bg-white/10" : ""} ${
          isHighlighted ? "text-yellow" : "text-white"
        }`}
      >
        {label}
        <CaretIcon
          className={`w-3 h-3 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
        <span
          aria-hidden
          className={`pointer-events-none absolute left-4 right-4 bottom-0 h-[3px] origin-left rounded-t-full bg-yellow transition-transform duration-300 ease-out ${
            isHighlighted || isOpen
              ? "scale-x-100"
              : "scale-x-0 group-hover:scale-x-100"
          }`}
        />
      </button>
      {isOpen && (
        <div
          role="menu"
          aria-label={label}
          id={`subnav-${id}`}
          className="absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50"
        >
          <div className="nav-dropdown-in relative w-[300px] bg-white rounded-2xl shadow-brand-lg border border-line-2 p-2">
            {/* Pointer connecting the panel to its trigger */}
            <span
              aria-hidden
              className="absolute left-1/2 -translate-x-1/2 -top-1.5 w-3 h-3 rotate-45 bg-white border-l border-t border-line-2"
            />
            {items.map((p) => {
              const isActive =
                p.href.startsWith("/") && pathname === p.href;
              return (
                <a
                  key={p.name}
                  href={p.href}
                  role="menuitem"
                  aria-current={isActive ? "page" : undefined}
                  onClick={onClose}
                  className={`group/i flex items-center justify-between gap-2 px-4 py-3 rounded-lg font-heading font-bold text-[15px] no-underline transition-colors ${
                    isActive
                      ? "text-navy bg-navy-soft"
                      : "text-ink hover:bg-bg-warm hover:text-navy"
                  }`}
                >
                  <span>{p.name}</span>
                  <CaretIcon className="w-3 h-3 shrink-0 -rotate-90 text-orange opacity-0 -translate-x-1 transition-all duration-200 group-hover/i:opacity-100 group-hover/i:translate-x-0" />
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

function MobileCategory({
  label,
  items,
  pathname,
  onItemClick,
}: {
  label: string;
  items: ProgramItem[];
  pathname: string | null;
  onItemClick: () => void;
}) {
  const [open, setOpen] = useState(false);
  const isHighlighted = matchesAny(items, pathname);

  return (
    <div>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className={`w-full flex items-center justify-between gap-2 font-heading font-bold text-base py-3 px-3 rounded-xl transition-colors cursor-pointer ${
          isHighlighted ? "text-navy bg-navy-soft" : "text-ink hover:bg-bg-warm"
        }`}
      >
        <span>{label}</span>
        <CaretIcon
          className={`w-3.5 h-3.5 shrink-0 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="mt-0.5 mb-1 ml-3 pl-3 border-l border-line-2 flex flex-col gap-0.5">
          {items.map((p) => {
            const isActive = p.href.startsWith("/") && pathname === p.href;
            return (
              <a
                key={p.name}
                href={p.href}
                onClick={onItemClick}
                aria-current={isActive ? "page" : undefined}
                className={`block py-2.5 px-3 rounded-lg font-heading font-semibold text-[15px] no-underline transition-colors ${
                  isActive
                    ? "text-navy bg-navy-soft"
                    : "text-ink-2 hover:bg-bg-warm hover:text-navy"
                }`}
              >
                {p.name}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

function CaretIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" fill="none" className={className} aria-hidden>
      <path
        d="M3 4.5L6 7.5L9 4.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
