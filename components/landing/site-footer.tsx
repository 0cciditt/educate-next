import Image from "next/image";
import type { ComponentType } from "react";
import { SOCIAL_LINKS, whatsappUrl } from "@/lib/contact";
import { Button } from "../ui/button";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TiktokIcon,
  YoutubeIcon,
} from "./icons";

const socialIcons: Record<string, ComponentType<{ className?: string }>> = {
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  TikTok: TiktokIcon,
  YouTube: YoutubeIcon,
  LinkedIn: LinkedinIcon,
};

type FooterLink = { label: string; href: string };

const cols: { title: string; links: FooterLink[] }[] = [
  {
    title: "Programas",
    links: [
      { label: "Summer Camp", href: "/programas/summer-camp" },
      { label: "Recess Camp®", href: "/programas/recess-camp" },
      { label: "Spring Break Camp", href: "/programas/spring-break-camp" },
      { label: "Winter Camp", href: "/programas/winter-camp" },
      { label: "Extracurriculares", href: "/programas/extracurriculares" },
      { label: "Centros educativos", href: "/programas/centros-educativos" },
    ],
  },
  {
    title: "Escuela",
    links: [
      { label: "Metodología", href: "/#metodologia" },
      { label: "¿Qué nos diferencia?", href: "/#diferencia" },
      { label: "Nosotros", href: "/#mision" },
      { label: "Contacto", href: "/#contacto" },
    ],
  },
  {
    title: "Sedes",
    links: [
      { label: "Unicentro", href: "/#sedes" },
      { label: "Centenario", href: "/#sedes" },
      { label: "Capri", href: "/#sedes" },
    ],
  },
];

const ribbon = [
  "bg-orange",
  "bg-navy-deep",
  "bg-yellow",
  "bg-green",
  "bg-red",
  "bg-burgundy",
];

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white pt-16 sm:pt-20">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-[1.4fr_1fr_1fr_1fr_1.3fr] xl:gap-14">
          {/* About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src="/brand/logo.webp"
              alt="Educate Learning Center"
              width={224}
              height={56}
              className="h-12 lg:h-16 w-auto"
              style={{ width: "auto", filter: "brightness(0) invert(1)" }}
            />
            <p className="text-white/75 leading-relaxed text-[15px] max-w-[280px] mt-5">
              Academia de idiomas para niños, jóvenes y adultos. Con experiencia
              en formación en inglés en Cali desde 2011.
            </p>
            <address className="not-italic text-white/70 leading-relaxed text-[14px] max-w-[280px] mt-4">
              Calle 12 #73-101, piso 2, Edificio ID Lab
              <br />
              Barrio Capri, sur de Cali
            </address>
            <div className="mt-5 flex gap-2.5">
              {SOCIAL_LINKS.map(({ label, href }) => {
                const Icon = socialIcons[label];
                return (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/10 grid place-items-center text-white no-underline hover:bg-white/20 transition-colors"
                  >
                    {Icon ? <Icon className="w-[18px] h-[18px]" /> : label}
                  </a>
                );
              })}
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <div className="font-display text-sm tracking-[0.15em] uppercase text-white">
                {col.title}
              </div>
              <ul className="list-none p-0 mt-4 flex flex-col gap-2.5 text-[15px]">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/85 hover:text-white no-underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* WhatsApp */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="font-display text-sm tracking-[0.15em] uppercase text-white">
              ¿Hablamos?
            </div>
            <p className="text-white/75 leading-relaxed text-[15px] max-w-[280px] mt-4">
              Escríbenos por WhatsApp y resolvemos tus dudas sobre programas,
              sedes y horarios.
            </p>
            <Button
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              variant="accent"
              size="sm"
              className="mt-4"
            >
              Escríbenos por WhatsApp
            </Button>
          </div>
        </div>

        <div className="mt-12 py-6 border-t border-white/15 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-[13px] text-white/60">
          <span>© 2026 Educate Learning Center®, S.A.S. · Cali, Valle del Cauca</span>
          <a
            href="/habeas-data"
            className="text-white/60 hover:text-white no-underline"
          >
            Política de Tratamiento de Datos Personales
          </a>
        </div>
      </div>

      <div className="flex h-3.5">
        {ribbon.map((c, i) => (
          <div key={i} className={`flex-1 ${c}`} />
        ))}
      </div>
    </footer>
  );
}
