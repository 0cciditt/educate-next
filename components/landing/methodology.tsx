import type { ReactNode } from "react";
import {
  GlobeIcon,
  MegaphoneIcon,
  MonitorIcon,
  TrendUpIcon,
} from "./icons";

const pillars: {
  bg: string;
  icon: ReactNode;
  title: string;
  desc: string;
}[] = [
  {
    bg: "bg-navy",
    icon: <MegaphoneIcon className="w-7 h-7 text-white" />,
    title: "Hablar primero.",
    desc: "Cada estudiante habla en cada clase. Sin excepciones. Grupos pequeños hacen posible lo que los libros prometen.",
  },
  {
    bg: "bg-orange",
    icon: <GlobeIcon className="w-7 h-7 text-white" />,
    title: "Inmersión cultural.",
    desc: "Aprendes el idioma con la cultura que lo viste. Películas, podcasts, comida, música — no solo gramática.",
  },
  {
    bg: "bg-green",
    icon: <TrendUpIcon className="w-7 h-7 text-white" />,
    title: "Progreso medible.",
    desc: "Evaluación trimestral con profe + estudiante + familia. La misma rúbrica se abre cada vez. Nada se infla.",
  },
  {
    bg: "bg-burgundy",
    icon: <MonitorIcon className="w-7 h-7 text-white" />,
    title: "Tecnología que sirve.",
    desc: "Plataforma propia con seguimiento personalizado. Tecnología que potencia al profe, nunca lo reemplaza.",
  },
];

export function Methodology() {
  return (
    <section id="metodologia" className="bg-bg-warm py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="font-display text-[13px] tracking-[0.2em] text-orange uppercase">
          Metodología Integral Learning
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-[0.95] tracking-tight mt-2 text-ink">
          100% conversacional.
          <br />
          0% relleno.
        </h2>
        <p className="text-lg leading-relaxed text-ink-2 mt-5 max-w-[720px]">
          Una metodología diseñada por psicólogos, pedagogos y licenciados en
          lenguas extranjeras. Cuatro principios que defendemos en cada clase.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4 mt-12">
          {pillars.map((p) => (
            <article
              key={p.title}
              className="flex flex-col gap-3 rounded-3xl bg-white border border-line-2 p-7 sm:p-8"
            >
              <div
                className={`w-14 h-14 rounded-2xl grid place-items-center text-white mb-1 ${p.bg}`}
              >
                {p.icon}
              </div>
              <h3 className="font-display text-[22px] leading-tight text-ink">
                {p.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-ink-3">{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
