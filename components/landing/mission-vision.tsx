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
              Formamos a quienes
              <br />
              conectan el Valle con el mundo.
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-ink-2 lg:max-w-[520px]">
            No enseñamos inglés para aprobar un examen. Lo enseñamos porque
            cada estudiante que sale de Educate se vuelve un puente — entre su
            familia, su región y un mundo que necesita más voces como la suya.
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
              Construimos
              <br />
              líderes globales.
            </h3>
            <p className="text-base leading-relaxed text-ink-2 mt-1">
              Formamos niños, jóvenes y adultos como líderes globales,
              desarrollando habilidades comunicativas en múltiples lenguas y
              competencias interculturales, mediante metodologías y tecnología
              educativa innovadora. Nos comprometemos con la calidad, el
              crecimiento continuo y la formación integral de nuestros
              estudiantes, generando un impacto positivo en la sociedad
              colombiana y contribuyendo a un mundo más conectado y sostenible.
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
              Visión 2030
            </div>
            <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[0.95] tracking-tight text-white">
              Referentes del Valle
              <br />
              para el mundo.
            </h3>
            <p className="text-base leading-relaxed text-white/85 mt-1">
              Para 2030, Educate Learning Center® será reconocido en el Valle
              del Cauca como un referente en educación multilingüe de alta
              calidad, con una infraestructura moderna y ambientes de
              aprendizaje innovadores que integren modalidades presenciales,
              virtuales e híbridas. Nos destacaremos por formar estudiantes con
              liderazgo, competencias interculturales y pensamiento global,
              contribuyendo de manera sostenible al desarrollo social,
              educativo y cultural de la región.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
