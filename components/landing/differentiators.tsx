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
    title: "Grupos pequeños siempre",
    desc: "Máximo 10 estudiantes por clase. Todos hablan, todos los días.",
  },
  {
    bg: "bg-orange",
    title: "Seguimiento personalizado",
    desc: "Un plan ajustado a tu nivel, ritmo y meta — revisado cada trimestre.",
  },
  {
    bg: "bg-navy",
    title: "Profes certificados",
    desc: "Licenciados con TKT, CELTA o experiencia internacional. Hablantes nativos en C1+.",
  },
  {
    bg: "bg-burgundy",
    title: "Certificación oficial",
    desc: "Tu nivel CEFR queda certificado al terminar cada programa. Sirve para universidad y trabajo.",
  },
  {
    bg: "bg-yellow-deep",
    iconColor: "text-ink",
    title: "Horarios flexibles",
    desc: "Mañanas, tardes, noches y sábados. Cambia tu horario sin perder tu cohorte.",
  },
  {
    bg: "bg-red",
    title: "Garantía de nivel",
    desc: "Si no subes de nivel en un año, tu siguiente módulo lo pagamos nosotros.",
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
              Lo que separa una academia más de una que de verdad cambia la
              forma en que tu hijo, tú o tu equipo se relacionan con el inglés.
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
