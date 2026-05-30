import { PhotoPlaceholder } from "../ui/photo-placeholder";

export function CentrosEducativosPrograma() {
  return (
    <section id="programa" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="grid gap-12 lg:gap-16 xl:gap-20 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="font-mono text-[11px] tracking-[0.22em] text-orange uppercase">
              Programa
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[56px] xl:text-6xl leading-[0.95] tracking-tight mt-3 text-ink">
              Educate
              <br />
              Bilingual School.
            </h2>
            <p className="text-lg leading-relaxed text-ink-2 mt-6 max-w-[560px]">
              Acompañamos a cada institución de principio a fin: ponemos en
              marcha programas bilingües pensados para su contexto, guiamos a
              docentes y estudiantes hacia certificaciones internacionales y
              atendemos todas las edades con preparación para exámenes
              internacionales, inglés para fines específicos y español como
              lengua extranjera.
            </p>
            <p className="text-lg leading-relaxed text-ink-2 mt-4 max-w-[560px]">
              Cada componente se rige por los niveles del Marco Común Europeo de
              Referencia (MCER) y cuenta con el aval de la Secretaría de
              Educación.
            </p>
          </div>

          <div className="relative max-w-md lg:max-w-none mx-auto w-full">
            <PhotoPlaceholder
              label="ACOMPAÑAMIENTO INSTITUCIONAL"
              rounded="rounded-[32px]"
              className="relative z-10 aspect-[4/3] shadow-brand-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
