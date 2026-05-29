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
    title: "Educación para la vida.",
    desc: "Formamos para la felicidad y la autorrealización. Lo que aprendes en clase es lo que te sirve afuera de ella.",
  },
  {
    bg: "bg-orange",
    icon: <GlobeIcon className="w-7 h-7 text-white" />,
    title: "Ciudadanos del mundo.",
    desc: "Aprendes la lengua con la cultura que la viste. Inmersión real: comida, música, historias, comunidades.",
  },
  {
    bg: "bg-green",
    icon: <TrendUpIcon className="w-7 h-7 text-white" />,
    title: "Liderazgo integral.",
    desc: "Habilidades blandas y compromiso colectivo-social. No solo formamos hablantes — formamos líderes.",
  },
  {
    bg: "bg-burgundy",
    icon: <MonitorIcon className="w-7 h-7 text-white" />,
    title: "Comunidad e inclusión.",
    desc: "Confianza, respeto, solidaridad e interioridad. Una comunidad que se hace corresponsable de su aprendizaje.",
  },
];

export function Methodology() {
  return (
    <section id="metodologia" className="bg-bg-warm py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="font-display text-[13px] tracking-[0.2em] text-orange uppercase">
          Principios y valores
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-[0.95] tracking-tight mt-2 text-ink">
          Lo que enseñamos
          <br />
          lo vivimos primero.
        </h2>
        <p className="text-lg leading-relaxed text-ink-2 mt-5 max-w-[720px]">
          Educación para la vida, ciudadanos del mundo, liderazgo integral,
          corresponsabilidad, interdependencia, solidaridad, confianza, respeto,
          comunidad, inclusión e interioridad. Estos cuatro principios reúnen el
          espíritu de Educate.
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
