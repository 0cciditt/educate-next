import { whatsappUrl } from "@/lib/contact";
import { Button } from "../ui/button";
import { CheckIcon } from "../landing/icons";

const includes = [
  "Dossier con fechas, destinos y costos",
  "Itinerario detallado por semana",
  "Proceso de inscripción y documentos",
  "Asesoría 1:1 con coordinación académica",
];

export function SummerCampMoreInfo() {
  return (
    <section id="mas-info" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="relative overflow-hidden rounded-[32px] bg-navy text-white p-8 sm:p-12 lg:p-16">
          <div
            aria-hidden
            className="absolute -top-12 -right-12 grid grid-cols-3 gap-2 opacity-25"
          >
            <div className="w-14 h-14 rounded-xl bg-orange" />
            <div className="w-14 h-14 rounded-xl bg-yellow" />
            <div className="w-14 h-14 rounded-xl bg-burgundy" />
            <div className="w-14 h-14 rounded-xl bg-green" />
            <div className="w-14 h-14 rounded-xl bg-red" />
            <div className="w-14 h-14 rounded-xl bg-white/15" />
          </div>

          <div className="relative grid gap-10 lg:gap-16 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-yellow">
                ¿Quieres saber más?
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] leading-[0.95] tracking-tight mt-3 text-white">
                Cuéntanos por cuál
                <br />
                Summer Camp te interesas.
              </h2>
              <p className="text-lg leading-relaxed text-white/85 mt-5 max-w-[540px]">
                Déjanos la edad de tu hijo y el destino que les llama. Te
                enviamos el dossier completo y agendamos una llamada con
                coordinación para resolver tus dudas.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row sm:flex-wrap gap-3">
                <Button
                  href="#contacto"
                  variant="accent"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Solicitar dossier
                </Button>
                <Button
                  href={whatsappUrl(
                    "¡Hola! Quiero el dossier del Summer Camp de Educate.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto bg-white/10! text-white! border-white/60! backdrop-blur-sm hover:bg-white/20!"
                >
                  Escríbenos por WhatsApp
                </Button>
              </div>
            </div>

            <ul className="flex flex-col gap-4 bg-white/10 border border-white/15 rounded-2xl p-6 sm:p-7 backdrop-blur-sm">
              <li className="font-heading font-extrabold text-base text-yellow">
                Qué recibirás
              </li>
              {includes.map((i) => (
                <li key={i} className="flex items-start gap-3 text-white/90">
                  <CheckIcon className="w-5 h-5 text-yellow shrink-0 mt-0.5" />
                  <span className="text-base leading-relaxed">{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
