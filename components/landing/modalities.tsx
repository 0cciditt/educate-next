import { BuildingIcon, MonitorIcon, ShuffleIcon } from "./icons";

export function Modalities() {
  return (
    <section className="bg-bg-warm py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="font-display text-[13px] tracking-[0.2em] text-orange uppercase">
          Modalidades
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-[0.95] tracking-tight mt-2 text-ink">
          Donde tú puedas,
          <br />
          cuando tú puedas.
        </h2>
        <p className="text-lg leading-relaxed text-ink-2 mt-5 max-w-[720px]">
          Tres formas de aprender en Educate. La misma metodología, el mismo
          plan de estudios, el mismo equipo de profes.
        </p>

        <div className="grid gap-6 lg:grid-cols-3 mt-12">
          <article className="relative overflow-hidden rounded-[32px] bg-navy text-white p-8 sm:p-10 min-h-[280px] sm:min-h-[320px] flex flex-col justify-end gap-4">
            <BuildingIcon className="absolute top-6 right-6 sm:top-8 sm:right-8 w-14 h-14 sm:w-16 sm:h-16 opacity-85 text-white" />
            <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-yellow">
              SEDES EN CALI
            </div>
            <h3 className="font-display text-3xl sm:text-4xl lg:text-[44px] leading-[0.95] tracking-tight text-white">
              Presencial.
            </h3>
            <p className="text-base leading-relaxed text-white/85">
              Aulas modernas, materiales incluidos, conexión cara a cara con
              profes y compañeros. Ideal para niños y para quien aprende mejor
              en comunidad.
            </p>
          </article>

          <article className="relative overflow-hidden rounded-[32px] bg-green-soft p-8 sm:p-10 min-h-[280px] sm:min-h-[320px] flex flex-col justify-end gap-4">
            <MonitorIcon className="absolute top-6 right-6 sm:top-8 sm:right-8 w-14 h-14 sm:w-16 sm:h-16 opacity-85 text-green-deep" />
            <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-green-deep">
              EN VIVO · GRUPOS PEQUEÑOS
            </div>
            <h3 className="font-display text-3xl sm:text-4xl lg:text-[44px] leading-[0.95] tracking-tight text-green-deep">
              Virtual.
            </h3>
            <p className="text-base leading-relaxed text-ink-2">
              Clases en vivo con grupos de máximo 10. Plataforma propia con
              grabaciones, ejercicios y seguimiento. Para quien vive lejos o
              tiene una agenda apretada.
            </p>
          </article>

          <article className="relative overflow-hidden rounded-[32px] bg-yellow-soft p-8 sm:p-10 min-h-[280px] sm:min-h-[320px] flex flex-col justify-end gap-4">
            <ShuffleIcon className="absolute top-6 right-6 sm:top-8 sm:right-8 w-14 h-14 sm:w-16 sm:h-16 opacity-85 text-[#8A6B0C]" />
            <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#8A6B0C]">
              LO MEJOR DE LOS DOS
            </div>
            <h3 className="font-display text-3xl sm:text-4xl lg:text-[44px] leading-[0.95] tracking-tight text-[#8A6B0C]">
              Híbrida.
            </h3>
            <p className="text-base leading-relaxed text-ink-2">
              Dos clases presenciales y una virtual cada semana. Mantén la
              conexión humana sin sacrificar la flexibilidad.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
