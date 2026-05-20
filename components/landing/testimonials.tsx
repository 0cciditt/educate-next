const items: {
  quote: string;
  name: string;
  role: string;
  avatarBg: string;
  avatarText?: string;
  initial: string;
  featured?: boolean;
}[] = [
  {
    quote:
      "Lucía pasó de respuestas de una palabra a contarnos su día en inglés en la cena. En cuatro meses. No esperábamos eso.",
    name: "Mariana C.",
    role: "Mamá de Lucía · Cali · A2",
    avatarBg: "bg-yellow",
    avatarText: "text-navy-deep",
    initial: "M",
    featured: true,
  },
  {
    quote:
      "Llamaron cuando Marco faltó una semana. No para vendernos algo. Para ver si estaba bien.",
    name: "Diego R.",
    role: "Papá de Marco · Yumbo · B1",
    avatarBg: "bg-orange",
    initial: "D",
  },
  {
    quote:
      "Pasé el CAE al primer intento. Lo que más me sirvió no fue el examen — fue aprender a defender una idea en otro idioma.",
    name: "Valentina O.",
    role: "Adulta · Palmira · C1",
    avatarBg: "bg-burgundy",
    initial: "V",
  },
  {
    quote:
      "Mi hijo de 7 años pide ir a clase. Eso es todo lo que necesito decir.",
    name: "Andrea L.",
    role: "Mamá de Tomás · Cali · A1",
    avatarBg: "bg-green",
    initial: "A",
  },
  {
    quote:
      "En seis meses dejé de necesitar subtítulos. La diferencia con otras academias se siente desde la primera clase.",
    name: "Juan Camilo P.",
    role: "Adulto · Cali · B2",
    avatarBg: "bg-red",
    initial: "J",
  },
];

export function Testimonials() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="font-display text-[13px] tracking-[0.2em] text-orange uppercase">
          Familias Educate
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-[0.95] tracking-tight mt-2 text-ink">
          Lo que dicen quienes ya están aquí.
        </h2>

        <div className="grid gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[auto_auto] lg:[&>*:first-child]:row-span-2">
          {items.map((t) => (
            <article
              key={t.name}
              className={`flex flex-col gap-4 rounded-3xl p-7 sm:p-8 ${
                t.featured
                  ? "bg-navy text-white border-0 justify-between"
                  : "bg-white border border-line-2 shadow-brand-sm"
              }`}
            >
              <div
                className={`tracking-[2px] text-lg ${
                  t.featured ? "text-yellow" : "text-yellow-deep"
                }`}
              >
                ★★★★★
              </div>
              <div
                className={`font-heading font-semibold leading-snug tracking-tight ${
                  t.featured ? "text-white text-2xl sm:text-[28px]" : "text-ink text-[22px]"
                }`}
              >
                “{t.quote}”
              </div>
              <div className="flex items-center gap-3 mt-auto">
                <div
                  className={`w-12 h-12 rounded-full grid place-items-center font-display text-lg ${t.avatarBg} ${
                    t.avatarText ?? "text-white"
                  }`}
                >
                  {t.initial}
                </div>
                <div>
                  <div
                    className={`font-extrabold text-[15px] ${
                      t.featured ? "text-white" : "text-ink"
                    }`}
                  >
                    {t.name}
                  </div>
                  <div
                    className={`text-[13px] ${
                      t.featured ? "text-white/70" : "text-ink-3"
                    }`}
                  >
                    {t.role}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
