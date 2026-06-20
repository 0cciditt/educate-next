import { ContactForm } from "./contact-form";
import { CheckIcon } from "./icons";

const benefits = [
  "Asesoría y evaluación de nivel gratuita",
  "Ruta personalizada según tu meta lingüística y cultural",
  "Sin matrícula, sin compromiso",
];

const decor: (string | null)[] = [
  null,
  "bg-orange",
  null,
  "bg-yellow",
  "bg-red",
  null,
  "bg-burgundy",
  "bg-green",
  "bg-navy",
];

export function ContactCTA() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-bg-warm py-16 sm:py-20"
    >
      <div
        aria-hidden
        className="hidden lg:grid absolute -bottom-10 -right-10 grid-cols-3 gap-2 opacity-45 z-0"
      >
        {decor.map((bg, i) => (
          <div
            key={i}
            className={`w-14 h-14 lg:w-[60px] lg:h-[60px] rounded-xl ${bg ?? "bg-transparent"}`}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="grid gap-10 lg:gap-16 lg:grid-cols-[1.3fr_1fr] items-center">
          <div className="reveal-up">
            <div className="font-display text-[13px] tracking-[0.2em] text-orange uppercase">
              Contáctanos
            </div>
            <h2 className="font-display text-[32px] sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.02] sm:leading-[0.95] tracking-tight mt-2 text-ink text-balance">
              ¿Quieres saber más?
            </h2>
            <p className="text-lg leading-relaxed text-ink-2 mt-5 max-w-[560px]">
              Déjanos tus datos y te contamos todo: programas, sedes y horarios.{" "}
              <br className="sm:hidden" />
              <br className="sm:hidden" />
              Resolvemos tus dudas y te ayudamos a elegir la mejor ruta, sin
              compromiso.
            </p>

            <ul className="flex flex-col gap-3.5 mt-8">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <span className="grid place-items-center w-7 h-7 rounded-full bg-green text-white shrink-0">
                    <CheckIcon className="w-4 h-4" />
                  </span>
                  <span className="text-base text-ink-2">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
