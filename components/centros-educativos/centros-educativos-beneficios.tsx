import type { ReactNode } from "react";
import {
  GraduationCapIcon,
  MegaphoneIcon,
  MonitorIcon,
  TrendUpIcon,
  UsersIcon,
} from "../landing/icons";

type Benefit = { bg: string; icon: ReactNode; label: string };

const benefits: Benefit[] = [
  {
    bg: "bg-orange",
    icon: <TrendUpIcon className="w-6 h-6 text-white" />,
    label: "Acompañamiento académico hecho a su medida.",
  },
  {
    bg: "bg-burgundy",
    icon: <GraduationCapIcon className="w-6 h-6 text-white" />,
    label: "Profesores avalados por certificaciones internacionales.",
  },
  {
    bg: "bg-navy",
    icon: <MonitorIcon className="w-6 h-6 text-white" />,
    label: "Currículo propio y materiales de apoyo a su disposición.",
  },
  {
    bg: "bg-green",
    icon: <MegaphoneIcon className="w-6 h-6 text-white" />,
    label: "Comunicación en inglés que fluye con naturalidad.",
  },
  {
    bg: "bg-yellow-deep",
    icon: <UsersIcon className="w-6 h-6 text-white" />,
    label: "Un método que se ajusta a la identidad de cada colegio.",
  },
];

export function CentrosEducativosBeneficios() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="text-center max-w-2xl mx-auto">
          <div className="font-mono text-[11px] tracking-[0.22em] text-orange uppercase">
            Lo que entregamos
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-tight mt-3 text-ink">
            Beneficios.
          </h2>
          <p className="text-lg leading-relaxed text-ink-3 mt-5">
            Lo que un colegio gana al sumar al equipo de Educate como aliado
            académico.
          </p>
        </div>

        <div className="grid gap-5 sm:gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <article
              key={b.label}
              className="grid grid-cols-[56px_1fr] items-center gap-5 rounded-3xl border border-line-2 bg-bg-warm p-6 sm:p-7"
            >
              <div
                className={`w-14 h-14 rounded-2xl grid place-items-center shrink-0 ${b.bg}`}
              >
                {b.icon}
              </div>
              <div className="font-heading font-extrabold text-[17px] leading-snug text-ink">
                {b.label}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
