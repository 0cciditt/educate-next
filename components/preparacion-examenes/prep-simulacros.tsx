type Step = { title: string; text: string };

const steps: Step[] = [
  {
    title: "Prueba inicial",
    text: "Realizamos una prueba inicial para conocer el nivel en que te encuentras.",
  },
  {
    title: "Plan personalizado",
    text: "Contenido personalizado de acuerdo a tus necesidades.",
  },
  {
    title: "Práctica real",
    text: "Practica con contenido similar al del examen.",
  },
  {
    title: "Resultado",
    text: "Fortalece todas las habilidades del idioma y alcanza el puntaje deseado.",
  },
];

export function PrepSimulacros() {
  return (
    <section className="bg-bg-warm py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="relative overflow-hidden rounded-[32px] bg-navy text-white px-6 py-14 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          <div
            aria-hidden
            className="absolute -top-12 -right-12 grid grid-cols-3 gap-2 opacity-25"
          >
            <div className="w-14 h-14 rounded-xl bg-orange" />
            <div className="w-14 h-14 rounded-xl bg-yellow" />
            <div className="w-14 h-14 rounded-xl bg-green" />
            <div className="w-14 h-14 rounded-xl bg-white/15" />
            <div className="w-14 h-14 rounded-xl bg-orange" />
            <div className="w-14 h-14 rounded-xl bg-yellow" />
          </div>

          <div className="relative">
            <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-yellow text-center">
              Cómo funciona
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-tight text-center text-white mt-3">
              Simulacros de tu Test
            </h2>

            <div className="mt-12 sm:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <article
                  key={s.title}
                  className="flex flex-col rounded-3xl bg-white p-7 sm:p-8 shadow-brand-md"
                >
                  <span
                    aria-hidden
                    className="font-display text-6xl leading-none tracking-tight text-navy"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-heading font-extrabold text-lg text-ink mt-4">
                    {s.title}
                  </h3>
                  <p className="text-base leading-relaxed text-ink-2 mt-2">
                    {s.text}
                  </p>
                  <span
                    aria-hidden
                    className="mt-6 lg:mt-auto h-1 w-10 rounded-full bg-orange"
                  />
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
