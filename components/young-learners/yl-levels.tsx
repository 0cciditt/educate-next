import { CheckIcon } from "../landing/icons";

export type Level = { name: string; cefr: string; desc: string };

const defaultLevels: Level[] = [
  {
    name: "Básico 1",
    cefr: "A1",
    desc: "Sus primeros pasos en inglés: aprende a saludar, presentarse y nombrar lo que le rodea a través del juego y la canción.",
  },
  {
    name: "Básico 2",
    cefr: "A2",
    desc: "Empieza a comunicarse en situaciones cotidianas —la familia, la comida, los juegos— con frases sencillas y mucha confianza.",
  },
  {
    name: "Intermedio",
    cefr: "B1",
    desc: "Cuenta historias, expresa gustos y opiniones y participa en conversaciones sobre el colegio, sus amigos y sus intereses.",
  },
  {
    name: "Avanzado 1",
    cefr: "B2",
    desc: "Se desenvuelve con fluidez en distintos contextos, comprende ideas más complejas y argumenta sus puntos de vista.",
  },
  {
    name: "Avanzado 2",
    cefr: "C1",
    desc: "Usa el inglés con naturalidad y precisión, comprende textos exigentes y se expresa con un vocabulario amplio y un estilo propio.",
  },
];

type Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  levels?: Level[];
};

export function YlLevels({
  eyebrow = "Ruta de aprendizaje",
  title = "Nuestros niveles",
  subtitle = "Un camino claro, nivel a nivel, hasta convertirse en un hablante seguro.",
  levels = defaultLevels,
}: Props = {}) {
  return (
    <section id="niveles" className="bg-bg-warm py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="text-center max-w-2xl mx-auto">
          <div className="font-mono text-[11px] tracking-[0.22em] text-orange uppercase">
            {eyebrow}
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-tight mt-3 text-ink">
            {title}
          </h2>
          <p className="text-lg leading-relaxed text-ink-3 mt-5">{subtitle}</p>
        </div>

        {/* Horizontal timeline — scrolls on smaller screens */}
        <div className="mt-12 sm:mt-16 overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
          <ol className="flex min-w-max">
            {levels.map((lvl, i) => {
              const filled = i % 2 === 0;
              const isLast = i === levels.length - 1;
              return (
                <li
                  key={lvl.name}
                  className="w-[270px] sm:w-[300px] shrink-0 flex flex-col"
                >
                  {/* Node + connector line */}
                  <div className="flex items-center">
                    <span
                      className={`relative z-10 grid place-items-center w-9 h-9 rounded-full shrink-0 shadow-brand-sm ${
                        filled ? "bg-green" : "bg-navy"
                      }`}
                    >
                      <CheckIcon className="w-5 h-5 text-white" />
                    </span>
                    {!isLast && (
                      <span className="flex-1 h-[3px] bg-navy/25" aria-hidden />
                    )}
                  </div>

                  {/* Card */}
                  <div
                    className={`mt-5 mr-6 flex-1 rounded-3xl p-6 sm:p-7 ${
                      filled
                        ? "bg-navy text-white shadow-brand-md"
                        : "bg-navy-soft text-navy"
                    }`}
                  >
                    <span
                      className={`inline-block font-mono text-[11px] tracking-[0.18em] uppercase rounded-pill px-2.5 py-1 ${
                        filled ? "bg-white/15 text-white" : "bg-white text-navy"
                      }`}
                    >
                      Nivel {lvl.cefr}
                    </span>
                    <h3
                      className={`font-display text-2xl sm:text-3xl leading-none tracking-tight mt-4 ${
                        filled ? "text-white" : "text-navy"
                      }`}
                    >
                      {lvl.name}
                    </h3>
                    <p
                      className={`text-[15px] leading-relaxed mt-3 ${
                        filled ? "text-white/85" : "text-navy/80"
                      }`}
                    >
                      {lvl.desc}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
        <p className="text-sm text-ink-4 mt-2 sm:hidden">
          Desliza para ver todos los niveles →
        </p>
      </div>
    </section>
  );
}
