const stats = [
  {
    color: "text-navy",
    big: "12",
    small: "años",
    sub: "formando estudiantes",
    caption: "en el Valle del Cauca desde 2014",
  },
  {
    color: "text-orange",
    big: "3,2k",
    sub: "estudiantes graduados",
    caption: "niños, jóvenes y adultos",
  },
  {
    color: "text-green",
    big: "76",
    small: "%",
    sub: "sube un nivel CEFR al año",
    caption: "medido por evaluación externa",
  },
  {
    color: "text-burgundy",
    big: "98",
    small: "%",
    sub: "aprueba Cambridge al primer intento",
    caption: "cohortes 2024 y 2025",
  },
];

export function Stats() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="grid gap-10 sm:gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.sub}>
              <div className={`font-display text-5xl sm:text-6xl xl:text-7xl leading-none ${s.color}`}>
                {s.big}
                {s.small && (
                  <span className="text-2xl sm:text-3xl xl:text-[32px] ml-1">{s.small}</span>
                )}
              </div>
              <div className="font-heading font-bold text-[15px] mt-2 text-ink">{s.sub}</div>
              <div className="text-[13px] text-ink-3 mt-1">{s.caption}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
