export function MissionVision() {
  return (
    <section id="mision" className="bg-white py-16 sm:py-20 lg:py-24">
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
            <div className="absolute top-6 right-6 grid grid-cols-2 gap-1 opacity-35">
              <div className="w-6 h-6 rounded-md bg-orange" />
              <div className="w-6 h-6 rounded-md bg-yellow" />
              <div className="w-6 h-6 rounded-md bg-red" />
              <div className="w-6 h-6 rounded-md bg-burgundy" />
            </div>
            <div className="font-display text-[13px] tracking-[0.2em] uppercase text-orange-deep">
              Misión
            </div>
            <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[0.95] tracking-tight text-ink">
              Líderes que
              <br />
              hablan al mundo.
            </h3>
            <p className="text-base leading-relaxed text-ink-2 mt-1">
              Formar personas capaces de liderar, comprender las culturas y de
              comunicarse en múltiples lenguas para interactuar en un mundo
              globalizado.
            </p>
          </article>

          <article className="relative overflow-hidden rounded-[32px] bg-navy p-8 sm:p-10 lg:p-12 flex flex-col gap-5 text-white">
            <div className="absolute top-6 right-6 grid grid-cols-2 gap-1 opacity-45">
              <div className="w-6 h-6 rounded-md bg-orange" />
              <div className="w-6 h-6 rounded-md bg-yellow" />
              <div className="w-6 h-6 rounded-md bg-green" />
              <div className="w-6 h-6 rounded-md bg-white/15" />
            </div>
            <div className="font-display text-[13px] tracking-[0.2em] uppercase text-yellow">
              Visión
            </div>
            <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[0.95] tracking-tight text-white">
              Una institución
              <br />
              multilingüe líder.
            </h3>
            <p className="text-base leading-relaxed text-white/85 mt-1">
              Seremos reconocidos como una institución multilingüe, líder en
              experiencias educativas, lúdicas y significativas, que desarrollan
              habilidades y competencias en sus estudiantes, aportando a su
              crecimiento integral y liderazgo, desde experiencias de inmersión
              que vinculan el dominio de las lenguas y el reconocimiento de
              otras culturas, aportando al desarrollo social.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
