import Image from "next/image";

export function CentrosEducativosPrograma() {
  return (
    <section id="programa" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="reveal-up overflow-hidden rounded-[28px] bg-white ring-1 ring-line-2 shadow-brand-md lg:grid lg:gap-16 xl:gap-20 lg:items-center lg:grid-cols-2 lg:overflow-visible lg:rounded-none lg:bg-transparent lg:ring-0 lg:shadow-none lg:[&>*:first-child]:order-2">
          <div className="relative aspect-[16/10] overflow-hidden lg:aspect-[4/3] lg:rounded-[32px] lg:shadow-brand-lg">
            <Image
              src="/our-programs/card-4.webp"
              alt="Asesoría de Educate a una institución educativa"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="p-6 sm:p-8 lg:p-0">
            <div className="font-mono text-[11px] tracking-[0.22em] text-orange uppercase">
              Programa
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-[56px] xl:text-6xl leading-[1.05] lg:leading-[0.95] tracking-tight mt-2 lg:mt-3 text-ink">
              Educate
              <br />
              Bilingual School.
            </h2>
            <p className="text-[15px] lg:text-lg leading-relaxed text-ink-2 mt-3 lg:mt-6 max-w-[560px]">
              Acompañamos a cada institución de principio a fin: ponemos en
              marcha programas bilingües pensados para su contexto, guiamos a
              docentes y estudiantes hacia certificaciones internacionales y
              atendemos todas las edades con preparación para exámenes
              internacionales, inglés para fines específicos y español como
              lengua extranjera.
            </p>
            <p className="text-[15px] lg:text-lg leading-relaxed text-ink-2 mt-3 lg:mt-4 max-w-[560px]">
              Cada componente se orienta según los estándares de competencia
              lingüística del Marco Común Europeo de Referencia (MCER).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
