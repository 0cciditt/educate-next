import type { ReactNode } from "react";
import Image from "next/image";

type Tone = "navy" | "orange" | "green";

type Row = {
  id?: string;
  eyebrow: string;
  title: ReactNode;
  body: string;
  bullets: { label: string; value: string }[];
  imageLabel: string;
  imageTone: Tone;
  /** Optional real photo; replaces the gradient placeholder when set. */
  image?: string;
  imageAlt?: string;
  flip?: boolean;
};

const toneGradient: Record<Tone, string> = {
  navy: "linear-gradient(145deg, var(--color-navy) 0%, var(--color-navy-deep) 100%)",
  orange:
    "linear-gradient(145deg, var(--color-orange) 0%, var(--color-orange-deep) 100%)",
  green:
    "linear-gradient(145deg, var(--color-green) 0%, var(--color-green-deep) 100%)",
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
      { label: "Apoyo", value: "Equipo Educate certificado" },
      { label: "Cierre", value: "Showcase para familias" },
    ],
    imageLabel: "EXPERIENCIAS QUE TRANSFORMAN",
    imageTone: "green",
    image: "/summer-camp/hero-2.webp",
    imageAlt:
      "Estudiantes viviendo una experiencia que transforma en el Summer Camp",
  },
];

export function SummerCampZigzag() {
  return (
    <section className="bg-bg-warm py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 xl:px-16 flex flex-col gap-8 sm:gap-12 lg:gap-24">
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
  image,
  imageAlt,
  flip,
}: Row) {
  return (
    <div
      id={id}
      className={`reveal-up overflow-hidden rounded-[28px] bg-white ring-1 ring-line-2 shadow-brand-md lg:grid lg:gap-16 lg:items-center lg:grid-cols-2 lg:overflow-visible lg:rounded-none lg:bg-transparent lg:ring-0 lg:shadow-none ${
        flip ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div
        className="relative aspect-[16/10] overflow-hidden lg:aspect-[4/3] lg:rounded-[32px] lg:shadow-brand-lg"
        style={{ background: toneGradient[imageTone] }}
      >
        {image ? (
          <Image
            src={image}
            alt={imageAlt ?? ""}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <>
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(120% 85% at 18% 0%, rgba(255,255,255,0.22), transparent 55%), linear-gradient(180deg, transparent 45%, rgba(0,0,0,0.22) 100%)",
              }}
            />
            <span className="absolute bottom-5 left-6 font-display text-base tracking-[0.04em] text-white/95">
              {imageLabel}
            </span>
            <span className="absolute top-5 right-6 font-mono text-[10px] tracking-[0.16em] uppercase text-white/55">
              Imagen
            </span>
          </>
        )}
      </div>

      <div className="p-6 sm:p-8 lg:p-0">
        <div className="font-mono text-[11px] tracking-[0.18em] text-orange uppercase">
          {eyebrow}
        </div>
        <h2 className="font-display text-2xl sm:text-3xl lg:text-5xl xl:text-[56px] leading-[1.05] lg:leading-[0.95] tracking-tight mt-2 lg:mt-3 text-ink">
          {title}
        </h2>
        <p className="text-[15px] lg:text-lg leading-relaxed text-ink-2 mt-3 lg:mt-5 max-w-[520px]">
          {body}
        </p>

        <dl className="mt-5 lg:mt-7 grid grid-cols-2 gap-2.5 lg:gap-x-8 lg:gap-y-4 max-w-[520px]">
          {bullets.map((b) => (
            <div
              key={b.label}
              className="flex flex-col gap-1 rounded-xl bg-bg-warm p-3.5 lg:rounded-none lg:bg-transparent lg:p-0"
            >
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
