import Image from "next/image";
import { Button } from "../ui/button";

const cols: { title: string; links: string[] }[] = [
  {
    title: "Programas",
    links: [
      "Little Explorers · 6–10",
      "Explore 4 Learning · 10–13",
      "Confident Voices · jóvenes y adultos",
      "Global Leaders · Cambridge",
      "Programa empresarial",
    ],
  },
  {
    title: "Escuela",
    links: [
      "Metodología",
      "Misión y visión",
      "Profes",
      "¿Qué nos diferencia?",
      "Vacantes",
    ],
  },
  {
    title: "Sedes",
    links: [
      "Ciudad Jardín",
      "Tequendama",
      "Norte / Vipasa",
      "Aula virtual",
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
              src="/brand/logo.png"
              alt="Educate Learning Center"
              width={224}
              height={56}
              className="h-14 w-auto"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <p className="text-white/75 leading-relaxed text-[15px] max-w-[280px] mt-5">
              Academia de inglés para niños, jóvenes y adultos. Fundada en Cali
              en 2014.
            </p>
            <div className="mt-5 flex gap-2.5">
              {["in", "f", "ig", "yt"].map((label) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl bg-white/10 grid place-items-center text-white text-[13px] font-bold no-underline hover:bg-white/20"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <div className="font-display text-sm tracking-[0.15em] uppercase text-white">
                {col.title}
              </div>
              <ul className="list-none p-0 mt-4 flex flex-col gap-2.5 text-[15px]">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/85 hover:text-white no-underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="font-display text-sm tracking-[0.15em] uppercase text-white">
              Mantente al tanto
            </div>
            <p className="text-white/75 leading-relaxed text-[15px] max-w-[280px] mt-4">
              Un correo amigable al mes con clases nuevas, eventos gratuitos y
              consejos para familias.
            </p>
            <div className="mt-4 flex flex-col sm:flex-row gap-2">
              <input
                className="flex-1 px-4 py-3 rounded-2xl border-[1.5px] border-white/20 bg-white/10 text-white placeholder:text-white/50 focus:outline-none focus:border-white"
                placeholder="tu@correo.com"
              />
              <Button href="#" variant="accent" size="sm" className="shrink-0">
                Suscribirme
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 py-6 border-t border-white/15 flex flex-col sm:flex-row gap-4 sm:justify-between sm:items-center text-[13px] text-white/60">
          <div>
            © 2026 Educate Learning Center®, S.A.S. · Cali, Valle del Cauca ·
            NIT 901.XXX.XXX-X
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-white/60 hover:text-white/80 no-underline">
              Privacidad
            </a>
            <a href="#" className="text-white/60 hover:text-white/80 no-underline">
              Términos
            </a>
            <a href="#" className="text-white/60 hover:text-white/80 no-underline">
              Cookies
            </a>
          </div>
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
