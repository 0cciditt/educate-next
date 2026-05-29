import { Button } from "../ui/button";

const sedes = [
  {
    name: "Unicentro",
    addr: "Carrera 100 # 5–169",
    city: "Cali, Valle del Cauca",
  },
  {
    name: "Centenario",
    addr: "Torre Centenario, Cl. 6 Nte. # 1–42, Granada",
    city: "Cali, Valle del Cauca",
    mapQuery: "Torre Centenario, Cl. 6 Nte. #1-42, Granada, Cali, Valle del Cauca, Colombia",
  },
  {
    name: "Alfaguara",
    addr: "Centro Comercial Alfaguara",
    city: "Jamundí, Valle del Cauca",
    mapQuery: "Centro Comercial Alfaguara, Jamundí, Valle del Cauca, Colombia",
  },
];

export function Sedes() {
  return (
    <section id="sedes" className="bg-bg-warm py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="font-display text-[13px] tracking-[0.2em] text-orange uppercase">
          Sedes
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-[0.95] tracking-tight mt-2 text-ink">
          Encuentra una sede cerca de ti.
        </h2>
        <p className="text-lg leading-relaxed text-ink-2 mt-5 max-w-[720px]">
          Tres sedes en el Valle del Cauca: Unicentro y Centenario en Cali, y
          Alfaguara en Jamundí. Visita la que te quede mejor o pide una clase
          virtual.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
          {sedes.map((s) => {
            const query = encodeURIComponent(
              s.mapQuery ?? `${s.name}, ${s.addr}, ${s.city}`,
            );
            return (
              <article
                key={s.name}
                className="flex flex-col gap-3.5 rounded-3xl bg-white border border-line-2 p-7 sm:p-8"
              >
                <div className="relative overflow-hidden rounded-2xl aspect-[16/9] border border-line-2">
                  <iframe
                    src={`https://www.google.com/maps?q=${query}&z=15&hl=es&output=embed`}
                    title={`Mapa de la sede ${s.name}`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full border-0"
                  />
                </div>
                <div>
                  <div className="font-display text-2xl leading-none text-ink">
                    {s.name}
                  </div>
                  <div className="text-sm text-ink-3 leading-relaxed mt-2">
                    {s.addr}
                    <br />
                    {s.city}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[13px] text-ink-2">
                  <span className="w-2 h-2 rounded-full bg-green" aria-hidden />
                  Lun–vie 7am–8pm · Sáb 8am–4pm
                </div>
                <Button
                  href={`https://www.google.com/maps/search/?api=1&query=${query}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="accent"
                  size="sm"
                  className="mt-auto self-start"
                >
                  Ver en Google Maps →
                </Button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
