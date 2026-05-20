import { Button } from "../ui/button";

const sedes = [
  { name: "Ciudad Jardín", addr: "Carrera 100 # 15–14", pin: "bg-orange" },
  { name: "Tequendama", addr: "Av. Roosevelt # 44–48", pin: "bg-navy" },
  { name: "Norte / Vipasa", addr: "Av. 3ª Norte # 44N–85", pin: "bg-burgundy" },
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
          Tres sedes en el Valle del Cauca, todas a 10 minutos de tu rutina
          diaria. Visita la que te quede mejor o pide una clase virtual.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
          {sedes.map((s) => (
            <article
              key={s.name}
              className="flex flex-col gap-3.5 rounded-3xl bg-white border border-line-2 p-7 sm:p-8"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[16/9] bg-gradient-to-br from-navy-soft to-orange-soft">
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(31,79,122,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(31,79,122,.08) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />
                <span
                  className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 ${s.pin} shadow-brand-md`}
                  style={{
                    borderRadius: "50% 50% 50% 0",
                    transform:
                      "translate(-50%, -50%) rotate(-45deg)",
                  }}
                >
                  <span
                    aria-hidden
                    className="absolute left-1/2 top-1/2 w-2.5 h-2.5 bg-white rounded-full"
                    style={{ transform: "translate(-50%, -50%) rotate(45deg)" }}
                  />
                </span>
              </div>
              <div>
                <div className="font-display text-2xl leading-none text-ink">
                  {s.name}
                </div>
                <div className="text-sm text-ink-3 leading-relaxed mt-2">
                  {s.addr}
                  <br />
                  Cali, Valle del Cauca
                </div>
              </div>
              <div className="flex items-center gap-2 text-[13px] text-ink-2">
                <span className="w-2 h-2 rounded-full bg-green" aria-hidden />
                Lun–vie 7am–8pm · Sáb 8am–4pm
              </div>
              <Button href="#" variant="secondary" size="sm" className="self-start">
                Ver en Google Maps →
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
