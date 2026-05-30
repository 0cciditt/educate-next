import type { ReactNode } from "react";
import { PhotoPlaceholder } from "../ui/photo-placeholder";

type Row = {
  id?: string;
  eyebrow: string;
  title: ReactNode;
  body: string;
  bullets: { label: string; value: string }[];
  imageLabel: string;
  imageTone: "navy" | "orange" | "green";
  flip?: boolean;
};

const rows: Row[] = [
  {
    id: "day-camp",
    eyebrow: "DAY CAMP · CALI",
    title: (
      <>
        Cuatro a seis semanas
        <br />
        de verano en casa.
      </>
    ),
    body: "Un campamento diurno en Cali donde niños y jóvenes viven el inglés a través del juego, el arte, el deporte y la cultura. Cada tarde regresan a casa cargados de experiencias, vocabulario nuevo y amistades.",
    bullets: [
      { label: "Duración", value: "4 a 6 semanas" },
      { label: "Modalidad", value: "Day Camp diurno" },
      { label: "Ciudad", value: "Cali, Valle del Cauca" },
      { label: "Idiomas", value: "Inglés + cultura" },
    ],
    imageLabel: "DAY CAMP · CALI",
    imageTone: "orange",
  },
  {
    eyebrow: "QUÉ SE VIVE",
    flip: true,
    title: (
      <>
        Más que clases,
        <br />
        una experiencia que transforma.
      </>
    ),
    body: "Cada Summer Camp combina aprendizaje, juego y descubrimiento. Los niños desarrollan autonomía, liderazgo y habilidades blandas mientras viven el idioma como una herramienta real para conectar con otros.",
    bullets: [
      { label: "Actividades", value: "Deporte · arte · ciencia" },
      { label: "Habilidades", value: "Liderazgo y comunicación" },
      { label: "Acompañamiento", value: "Equipo Educate certificado" },
      { label: "Cierre", value: "Showcase para familias" },
    ],
    imageLabel: "EXPERIENCIAS QUE TRANSFORMAN",
    imageTone: "green",
  },
];

export function SummerCampZigzag() {
  return (
    <section className="bg-bg-warm py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 xl:px-16 flex flex-col gap-16 sm:gap-20 lg:gap-24">
        {rows.map((r) => (
          <ZigzagRow key={r.eyebrow} {...r} />
        ))}
      </div>
    </section>
  );
}

function ZigzagRow({
  id,
  eyebrow,
  title,
  body,
  bullets,
  imageLabel,
  flip,
}: Row) {
  return (
    <div
      id={id}
      className={`grid gap-10 lg:gap-16 lg:items-center lg:grid-cols-2 ${
        flip ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="relative">
        <PhotoPlaceholder
          label={imageLabel}
          rounded="rounded-[32px]"
          className="relative z-10 aspect-[4/3] shadow-brand-lg"
        />
      </div>

      <div>
        <div className="font-mono text-[11px] tracking-[0.18em] text-orange uppercase">
          {eyebrow}
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] leading-[0.95] tracking-tight mt-3 text-ink">
          {title}
        </h2>
        <p className="text-lg leading-relaxed text-ink-2 mt-5 max-w-[520px]">
          {body}
        </p>

        <dl className="mt-7 grid gap-x-8 gap-y-4 sm:grid-cols-2 max-w-[520px]">
          {bullets.map((b) => (
            <div key={b.label} className="flex flex-col gap-1">
              <dt className="font-mono text-[11px] tracking-[0.18em] text-ink-3 uppercase">
                {b.label}
              </dt>
              <dd className="font-heading font-bold text-[15px] text-ink leading-snug">
                {b.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
