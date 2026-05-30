import { Button } from "../ui/button";
import { CheckIcon } from "./icons";

const items: {
  bg: string;
  iconColor?: string;
  title: string;
  desc: string;
}[] = [
  {
    bg: "bg-green",
    title: "Institución multilingüe",
    desc: "Más allá del inglés: programas en varias lenguas extranjeras y de segunda lengua.",
  },
  {
    bg: "bg-green",
    title: "Experiencias de inmersión",
    desc: "Campamentos, intercambios y vivencias culturales que van más allá del aula.",
  },
  {
    bg: "bg-green",
    title: "Profes certificados",
    desc: "Licenciados en lenguas, con TKT, CELTA o experiencia internacional. Hablantes nativos en C1+.",
  },
  {
    bg: "bg-green",
    title: "Habilidades blandas",
    desc: "Liderazgo, comunicación intercultural y compromiso social integrados en cada programa.",
  },
  {
    bg: "bg-green",
    title: "Tiempo libre con propósito",
    desc: "Programas extracurriculares y de aprovechamiento del tiempo libre para todas las edades.",
  },
  {
    bg: "bg-green",
    title: "Asesoría a instituciones",
    desc: "Acompañamos a colegios y empresas del sector privado en proyectos lingüísticos a medida.",
  },
];

export function Differentiators() {
  return (
    <section id="diferencia" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="grid gap-10 lg:gap-16 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <div className="font-display text-[13px] tracking-[0.2em] text-orange uppercase">
              ¿Qué nos diferencia?
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-[0.95] tracking-tight mt-2 text-ink">
              Seis razones
              <br />
              para elegirnos.
            </h2>
            <p className="text-lg leading-relaxed text-ink-2 mt-5 max-w-md">
              Lo que separa una academia de idiomas de una institución que
              forma personas para liderar, comprender culturas y comunicarse
              con el mundo.
            </p>
            <div className="mt-8">
              <Button href="#contacto" variant="primary" size="lg">
                Quiero conocerlos →
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((it) => (
              <div
                key={it.title}
                className="grid grid-cols-[40px_1fr] gap-4 rounded-3xl border border-line-2 bg-bg-warm p-5 sm:p-6"
              >
                <div
                  className={`w-10 h-10 rounded-xl grid place-items-center ${it.bg} ${
                    it.iconColor ?? "text-white"
                  }`}
                >
                  <CheckIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-heading font-extrabold text-[17px] leading-tight text-ink">
                    {it.title}
                  </div>
                  <div className="text-sm text-ink-3 mt-1 leading-relaxed">
                    {it.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
