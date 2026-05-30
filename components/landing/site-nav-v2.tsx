"use client";

import Image from "next/image";
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

type Link = {
  href: string;
  label: string;
};

const links: Link[] = [
  { href: "#programas", label: "Programas" },
  { href: "#metodologia", label: "Metodología" },
  { href: "#diferencia", label: "¿Qué nos diferencia?" },
  { href: "#mision", label: "Nosotros" },
  { href: "#sedes", label: "Sedes" },
  { href: "#contacto", label: "Contacto" },
];

type MenuId = "campamentos" | "extracurriculares" | "corporativas";

const matchesAny = (items: ProgramItem[], path: string | null) =>
  items.some(
    (p) => p.href.startsWith("/") && path === p.href.split("#")[0],
  );

export function SiteNavV2() {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuId | null>(null);
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

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-line-2">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 xl:px-16 py-3 lg:py-4 flex items-center gap-6 lg:gap-10">
        <a href="/" className="shrink-0 no-underline">
          <Image
            src="/brand/logo.png"
            alt="Educate Learning Center"
            width={160}
            height={40}
            className="h-9 lg:h-10 w-auto"
            priority
          />
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex flex-1 gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative font-heading font-bold text-[15px] no-underline py-1.5 transition-colors text-ink hover:text-navy"
            >
              {l.label}
            </a>
          ))}
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
          className="lg:hidden ml-auto inline-flex items-center justify-center w-10 h-10 rounded-xl border border-line-2 text-ink hover:bg-navy-soft transition-colors"
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
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 xl:px-16 flex items-center justify-end gap-2">
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
          />
        </div>
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
                className="block font-heading font-bold text-base no-underline py-3 px-2 rounded-lg text-ink hover:bg-bg-warm"
              >
                {l.label}
              </a>
            ))}
            <MobileCategory
              label="Campamentos"
              items={campamentos}
              onItemClick={close}
            />
            <MobileCategory
              label="Programas Extracurriculares"
              items={extracurriculares}
              onItemClick={close}
            />
            <MobileCategory
              label="Soluciones corporativas"
              items={corporativas}
              onItemClick={close}
            />
            <div className="flex flex-col gap-2 mt-3">
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
        className={`relative font-heading font-bold text-[14px] px-5 py-3.5 inline-flex items-center gap-2 transition-colors cursor-pointer ${
          isHighlighted
            ? "text-yellow after:content-[''] after:absolute after:left-5 after:right-5 after:bottom-0 after:h-[3px] after:bg-yellow after:rounded-t-full"
            : "text-white hover:text-yellow"
        }`}
      >
        {label}
        <CaretIcon
          className={`w-3 h-3 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div
          role="menu"
          aria-label={label}
          id={`subnav-${id}`}
          className="absolute right-0 top-full pt-2 z-50"
        >
          <div className="w-[280px] bg-white rounded-2xl shadow-brand-lg border border-line-2 p-2">
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
                  className={`block px-4 py-2.5 rounded-lg font-heading font-bold text-[14px] no-underline transition-colors ${
                    isActive
                      ? "text-navy bg-navy-soft"
                      : "text-ink hover:bg-bg-warm hover:text-navy"
                  }`}
                >
                  {p.name}
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
  onItemClick,
}: {
  label: string;
  items: ProgramItem[];
  onItemClick: () => void;
}) {
  return (
    <div className="mt-2 pt-3 border-t border-line-2">
      <div className="block font-heading font-bold text-base py-3 px-2 text-ink">
        {label}
      </div>
      <div className="ml-2 mt-1 mb-2 grid grid-cols-1 min-[400px]:grid-cols-2 gap-1.5">
        {items.map((p) => (
          <a
            key={p.name}
            href={p.href}
            onClick={onItemClick}
            className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-bg-warm no-underline"
          >
            <span className="font-heading font-semibold text-[14px] text-ink leading-tight">
              {p.name}
            </span>
          </a>
        ))}
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
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
