import Image from "next/image";

export function CentrosEducativosClases() {
  return (
    <section className="bg-bg-warm py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="reveal-up overflow-hidden rounded-[28px] bg-white ring-1 ring-line-2 shadow-brand-md lg:grid lg:gap-16 xl:gap-20 lg:items-center lg:grid-cols-2 lg:overflow-visible lg:rounded-none lg:bg-transparent lg:ring-0 lg:shadow-none">
          <div className="relative aspect-[16/10] overflow-hidden lg:aspect-[4/3] lg:rounded-[32px] lg:shadow-brand-lg">
            <Image
              src="/centros-educativos/card-2.webp"
              alt="Equipo de Educate reunido con directivos de una institución educativa"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="p-6 sm:p-8 lg:p-0">
            <div className="font-mono text-[11px] tracking-[0.22em] text-orange uppercase">
              Modalidad
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-[56px] xl:text-6xl leading-[1.05] lg:leading-[0.95] tracking-tight mt-2 lg:mt-3 text-ink">
              Tercerización
              <br />
              total o parcial.
            </h2>
            <p className="text-[15px] lg:text-lg leading-relaxed text-ink-2 mt-3 lg:mt-6 max-w-[560px]">
              Cada colegio decide el alcance: puede dejar en nuestras manos la
              enseñanza del inglés en toda la institución o solo en los grados
              que elija, según lo que necesite.
            </p>
            <p className="text-[15px] lg:text-lg leading-relaxed text-ink-2 mt-3 lg:mt-4 max-w-[560px]">
              Ajustamos tanto la metodología como la forma de calificar al
              modelo pedagógico de cada centro. Los materiales que proponemos son
              un apoyo opcional, nunca una imposición.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
