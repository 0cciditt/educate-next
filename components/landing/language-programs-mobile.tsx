import Image from "next/image";

type SolidCard = {
  title: string;
  href: string;
  /** Card background, e.g. "bg-navy" */
  bg: string;
  /** "Ver Más" pill text color on the white pill, e.g. "text-navy" */
  pillText: string;
};

const featured = {
  title: "Inglés para adultos y jóvenes (14+)",
  href: "/programas/live-english",
  image: "/hero/educate-1.webp",
  imageAlt: "Adultos y jóvenes en una clase de inglés en vivo en Educate",
};

const solids: SolidCard[] = [
  {
    title: "Inglés para niños y adolescentes (6–13 años)",
    href: "/programas/young-learners",
    bg: "bg-blue-vivid",
    pillText: "text-blue-vivid-deep",
  },
  {
    title: "Español para extranjeros",
    href: "/programas/espanol-para-extranjeros",
    bg: "bg-lime-vivid",
    pillText: "text-lime-vivid-deep",
  },
];

// Mobile-only quick links to the language programs (the desktop "Programas de
// Idiomas" dropdown). Hidden at lg+.
export function LanguageProgramsMobile() {
  return (
    <section className="lg:hidden bg-white py-14">
      <div className="px-4">
        <div className="font-display text-[12px] tracking-[0.2em] text-orange uppercase">
          Programas de idiomas
        </div>
        <h2 className="font-display text-[32px] leading-[1.0] tracking-tight mt-2 text-ink">
          Empieza por tu idioma.
        </h2>
        <p className="text-[15px] leading-relaxed text-ink-2 mt-3">
          Clases de inglés y español según tu edad y tu meta.
        </p>

        <div className="flex flex-col gap-4 mt-7">
          {/* Featured photo card */}
          <a
            href={featured.href}
            className="relative overflow-hidden rounded-[28px] shadow-brand-md min-h-[240px] flex flex-col justify-between p-6 no-underline"
          >
            <Image
              src={featured.image}
              alt={featured.imageAlt}
              fill
              sizes="(min-width: 1024px) 0px, 100vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(20,59,92,0.25) 0%, rgba(20,59,92,0.7) 100%)",
              }}
            />
            <h3
              className="relative font-display text-2xl leading-[1.05] tracking-tight text-white max-w-[15ch]"
              style={{ textShadow: "0 1px 12px rgba(20,59,92,0.5)" }}
            >
              {featured.title}
            </h3>
            <div className="relative flex justify-end">
              <span className="inline-flex items-center justify-center gap-2.5 font-heading font-bold leading-none rounded-pill px-[18px] py-[10px] text-sm bg-blue-vivid text-white shadow-brand-sm">
                Ver Más
              </span>
            </div>
          </a>

          {/* Solid color cards */}
          {solids.map((card) => (
            <a
              key={card.href}
              href={card.href}
              className={`relative rounded-[28px] shadow-brand-md p-6 min-h-[150px] flex flex-col justify-between gap-4 no-underline ${card.bg}`}
            >
              <h3 className="font-display text-xl leading-[1.1] tracking-tight text-white max-w-[18ch]">
                {card.title}
              </h3>
              <div className="flex justify-end">
                <span
                  className={`inline-flex items-center justify-center font-heading font-bold leading-none rounded-pill bg-white px-[18px] py-[10px] text-sm ${card.pillText}`}
                >
                  Ver Más
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
