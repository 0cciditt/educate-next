import Image from "next/image";
import { GlobeIcon } from "../landing/icons";

type Destination = {
  country: string;
  flag: string;
  tagline: string;
  body: string;
  meta: { label: string; value: string }[];
};

const destinations: Destination[] = [
  {
    country: "Canadá",
    flag: "/flags/Flag-of-Canada.svg",
    tagline: "Nieve, naturaleza y bilingüismo.",
    body: "Convenios con campamentos de invierno en Ontario y la Columbia Británica. Inglés con un guiño francófono y un entorno seguro, natural y lleno de nieve.",
    meta: [
      { label: "Duración", value: "2–4 semanas" },
      { label: "Idioma", value: "Inglés" },
    ],
  },
  {
    country: "Estados Unidos",
    flag: "/flags/Flag-of-the-United-States.svg",
    tagline: "Cultura, deporte y liderazgo.",
    body: "Alianzas con campamentos de invierno en la costa este y oeste de EE. UU. Inmersión total en inglés combinando deporte de nieve, cultura y vida en comunidad.",
    meta: [
      { label: "Duración", value: "2–4 semanas" },
      { label: "Idioma", value: "Inglés" },
    ],
  },
];

export function WinterCampInternational() {
  return (
    <section
      id="international"
      className="relative overflow-hidden bg-navy text-white py-16 sm:py-20 lg:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,1) 1.4px, transparent 1.4px)",
          backgroundSize: "32px 32px",
        }}
      />
      <GlobeIcon
        aria-hidden
        className="absolute -right-12 -top-12 w-72 h-72 lg:w-96 lg:h-96 text-white/5"
      />

      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="grid gap-8 lg:gap-16 lg:grid-cols-2 lg:items-end mb-12 lg:mb-16">
          <div>
            <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-yellow">
              Alianzas internacionales
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-[64px] leading-[0.95] tracking-tight mt-3 text-white">
              Convenios con
              <br />
              instituciones aliadas
              <br />
              en dos países.
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-white/85 lg:max-w-[480px]">
            Trabajamos con campamentos y organizaciones internacionales que
            cumplen nuestros estándares de seguridad, pedagogía y experiencia
            cultural. Nosotros acompañamos a tu familia en cada paso: desde la
            inscripción y la visa hasta el regreso.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {destinations.map((d) => (
            <article
              key={d.country}
              className="reveal-up relative flex flex-col gap-4 rounded-[28px] bg-white/[0.06] border border-white/15 p-7 sm:p-8 backdrop-blur-sm transition-[background-color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-white/[0.1] hover:border-white/25"
            >
              <div className="flex items-center gap-3">
                <span className="relative w-12 h-8 rounded-md overflow-hidden shrink-0 ring-1 ring-white/25 shadow-sm">
                  <Image
                    src={d.flag}
                    alt=""
                    fill
                    sizes="48px"
                    className="object-cover"
                    unoptimized
                  />
                </span>
                <div className="font-display text-2xl sm:text-[28px] leading-none text-white">
                  {d.country}
                </div>
              </div>
              <div className="font-heading font-bold text-[15px] text-yellow">
                {d.tagline}
              </div>
              <p className="text-[15px] leading-relaxed text-white/85">
                {d.body}
              </p>
              <dl className="mt-auto pt-4 border-t border-white/15 grid grid-cols-2 gap-x-4 gap-y-2">
                {d.meta.map((m) => (
                  <div key={m.label} className="flex flex-col gap-0.5">
                    <dt className="font-mono text-[10px] tracking-[0.18em] text-white/60 uppercase">
                      {m.label}
                    </dt>
                    <dd className="font-heading font-bold text-[14px] text-white">
                      {m.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>

        <div className="mt-10 lg:mt-12 grid gap-4 sm:grid-cols-3 rounded-2xl bg-white/[0.06] border border-white/15 p-6 sm:p-7">
          <FactRow label="Edad mínima" value="10 años" />
          <FactRow label="Temporada" value="Noviembre a Enero" />
          <FactRow label="Apoyo" value="Educate · de punta a punta" />
        </div>
      </div>
    </section>
  );
}

function FactRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="font-mono text-[11px] tracking-[0.18em] text-yellow uppercase">
        {label}
      </div>
      <div className="font-heading font-bold text-base text-white leading-snug">
        {value}
      </div>
    </div>
  );
}
