const highlights = [
  {
    eyebrow: "EDAD",
    label: "Desde los 6 años",
    sub: "Grupos por edad y nivel",
  },
  {
    eyebrow: "DURACIÓN",
    label: "2 a 6 semanas",
    sub: "Según la modalidad",
  },
  {
    eyebrow: "MODALIDAD",
    label: "Day Camp · Inmersión",
    sub: "Local o internacional",
  },
  {
    eyebrow: "TEMPORADA",
    label: "Mayo–agosto",
    sub: "Verano hemisferio norte",
  },
];

export function SummerCampHighlights() {
  return (
    <section className="bg-white py-10 sm:py-12 border-b border-line-2">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 xl:px-16 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((h) => (
          <div key={h.eyebrow} className="flex flex-col gap-1">
            <div className="font-mono text-[11px] tracking-[0.18em] text-orange uppercase">
              {h.eyebrow}
            </div>
            <div className="font-display text-2xl sm:text-[28px] leading-tight text-ink">
              {h.label}
            </div>
            <div className="text-sm text-ink-3">{h.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
