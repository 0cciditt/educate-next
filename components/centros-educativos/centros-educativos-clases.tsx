import { PhotoPlaceholder } from "../ui/photo-placeholder";

export function CentrosEducativosClases() {
  return (
    <section className="bg-bg-warm py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="grid gap-12 lg:gap-16 xl:gap-20 lg:grid-cols-2 lg:items-center">
          <div className="relative order-2 lg:order-1 max-w-md lg:max-w-none mx-auto w-full">
            <PhotoPlaceholder
              label="CLASES BILINGÜES EN COLEGIO"
              rounded="rounded-[32px]"
              className="relative z-10 aspect-[4/3] shadow-brand-lg"
            />
          </div>

          <div className="order-1 lg:order-2">
            <div className="font-mono text-[11px] tracking-[0.22em] text-orange uppercase">
              Modalidad
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[56px] xl:text-6xl leading-[0.95] tracking-tight mt-3 text-ink">
              Tercerización
              <br />
              total o parcial.
            </h2>
            <p className="text-lg leading-relaxed text-ink-2 mt-6 max-w-[560px]">
              Cada colegio decide el alcance: puede dejar en nuestras manos la
              enseñanza del inglés en toda la institución o solo en los grados
              que elija, según lo que necesite.
            </p>
            <p className="text-lg leading-relaxed text-ink-2 mt-4 max-w-[560px]">
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
