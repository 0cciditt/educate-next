export function MissionVision() {
  return (
    <section id="mision" className="hidden lg:block bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="grid gap-8 lg:gap-16 lg:grid-cols-2 lg:items-end mb-12">
          <div>
            <div className="font-display text-[13px] tracking-[0.2em] text-orange uppercase">
              Por qué existimos
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-[0.95] tracking-tight mt-2 text-ink">
              Lenguas que abren culturas,
              <br />
              culturas que forman líderes.
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-ink-2 lg:max-w-[520px]">
            Educamos para la vida, la felicidad y la autorrealización. Cada
            programa une el dominio de las lenguas con el reconocimiento de
            otras culturas, para formar ciudadanos del mundo con un compromiso
            colectivo y social.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <article className="relative overflow-hidden rounded-[32px] bg-orange-soft p-8 sm:p-10 lg:p-12 flex flex-col gap-5">
            <div className="font-display text-[13px] tracking-[0.2em] uppercase text-orange-deep">
              Misión
            </div>
            <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[0.95] tracking-tight text-ink">
              Líderes que
              <br />
              hablan al mundo.
            </h3>
            <p className="text-base leading-relaxed text-ink-2 mt-1 text-justify">
             Formamos niños, jóvenes y adultos como líderes globales, desarrollando habilidades comunicativas en múltiples lenguas y competencias interculturales, mediante metodologías y tecnología educativa innovadora. <br />
            <br />
            Nos comprometemos con la calidad, el crecimiento continuo y la formación integral de nuestros estudiantes, generando un impacto positivo en la sociedad colombiana y contribuyendo a un mundo más conectado y sostenible.
            </p>
          </article>

          <article className="relative overflow-hidden rounded-[32px] bg-navy p-8 sm:p-10 lg:p-12 flex flex-col gap-5 text-white">
            <div className="font-display text-[13px] tracking-[0.2em] uppercase text-yellow">
              Visión
            </div>
            <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[0.95] tracking-tight text-white">
              Una institución
              <br />
              multilingüe líder.
            </h3>
            <p className="text-base leading-relaxed text-white/85 mt-1 text-justify">
            Para el año 2031, Educate Learning Center será reconocido en el valle del cauca como un referente en educación multilingüe de alta calidad, consolidando una infraestructura moderna y ambientes de aprendizaje innovadores que integren modalidades flexibles (presenciales, virtuales e híbridas). Se destacará por formar estudiantes con liderazgo, competencias interculturales y pensamiento global, contribuyendo de manera sostenible al desarrollo social, educativo y cultural de la región
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
