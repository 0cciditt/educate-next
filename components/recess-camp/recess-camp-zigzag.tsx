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
    id: "experiencia",
    eyebrow: "DAY CAMP · CALI",
    title: (
      <>
        Cinco días de receso,
        <br />
        convertidos en aventura.
      </>
    ),
    body: "Durante la semana de receso escolar de octubre, niños y jóvenes viven un campamento diurno donde el inglés se aprende jugando. Cada tarde regresan a casa con experiencias nuevas, vocabulario fresco y amistades, sin perder un solo día del receso.",
    bullets: [
      { label: "Duración", value: "5 días" },
      { label: "Modalidad", value: "Day Camp diurno" },
      { label: "Temporada", value: "Octubre · receso escolar" },
      { label: "Idioma", value: "Inglés + cultura" },
    ],
    imageLabel: "DAY CAMP · RECESO ESCOLAR",
    imageTone: "orange",
  },
  {
    eyebrow: "QUÉ SE VIVE",
    flip: true,
    title: (
      <>
        Más que una semana libre,
        <br />
        una semana que suma.
      </>
    ),
    body: "Cinco días de juego, arte, deporte y descubrimiento con el inglés como hilo conductor. Una semana corta pero intensa donde los niños ganan confianza, trabajan en equipo y viven el idioma como una herramienta real.",
    bullets: [
      { label: "Actividades", value: "Juego · arte · deporte" },
      { label: "Habilidades", value: "Autonomía y trabajo en equipo" },
      { label: "Acompañamiento", value: "Equipo Educate certificado" },
      { label: "Cierre", value: "Showcase para familias" },
    ],
    imageLabel: "EXPERIENCIAS QUE TRANSFORMAN",
    imageTone: "green",
  },
];

export function RecessCampZigzag() {
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
  imageTone,
  flip,
}: Row) {
  const toneBg: Record<Row["imageTone"], string> = {
    navy: "bg-navy",
    orange: "bg-orange",
    green: "bg-green",
  };
  const toneSoft: Record<Row["imageTone"], string> = {
    navy: "bg-navy-soft",
    orange: "bg-orange-soft",
    green: "bg-green-soft",
  };

  return (
    <div
      id={id}
      className={`grid gap-10 lg:gap-16 lg:items-center lg:grid-cols-2 ${
        flip ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="relative">
        <div
          aria-hidden
          className={`hidden sm:block absolute -left-4 -top-4 right-4 bottom-4 rounded-[32px] ${toneBg[imageTone]}`}
          style={{ transform: flip ? "rotate(2deg)" : "rotate(-2deg)" }}
        />
        <div
          aria-hidden
          className={`hidden sm:block absolute left-4 top-4 -right-4 -bottom-4 rounded-[32px] ${toneSoft[imageTone]}`}
          style={{ transform: flip ? "rotate(-3deg)" : "rotate(3deg)" }}
        />
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
