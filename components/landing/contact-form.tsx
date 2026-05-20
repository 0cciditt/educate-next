"use client";

const input =
  "w-full px-4 py-3.5 rounded-2xl border-[1.5px] border-line bg-white text-base text-ink font-sans transition-[border-color,box-shadow] duration-150 ease-out focus:outline-none focus:border-navy focus:shadow-[0_0_0_4px_rgba(31,79,122,0.15)]";
const label = "font-heading font-bold text-sm text-ink-2";

export function ContactForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="bg-white rounded-[32px] shadow-brand-md p-6 sm:p-8 flex flex-col gap-4 w-full"
    >
      <div className="font-display text-2xl text-ink">Reserva tu clase gratis.</div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label className={label}>Tu nombre</label>
          <input className={input} placeholder="María" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={label}>¿Y para quién?</label>
          <select className={input} defaultValue="Para mi hijo/a">
            <option>Para mi hijo/a</option>
            <option>Para mí</option>
            <option>Para mi familia</option>
            <option>Para mi equipo de trabajo</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className={label}>Correo o WhatsApp</label>
        <input className={input} placeholder="maria@correo.com  ·  +57 300 …" />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className={label}>Sede preferida</label>
        <select className={input} defaultValue="Ciudad Jardín">
          <option>Ciudad Jardín</option>
          <option>Tequendama</option>
          <option>Norte / Vipasa</option>
          <option>Virtual</option>
          <option>Aún no estoy seguro/a</option>
        </select>
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center font-heading font-bold text-lg text-white bg-orange shadow-brand-sm rounded-pill px-8 py-4 mt-1 transition-[transform,box-shadow,background-color] duration-200 ease-out hover:bg-orange-deep hover:-translate-y-px hover:shadow-brand-md"
      >
        Agendar mi clase gratis
      </button>

      <p className="text-xs text-ink-3 text-center -mt-1">
        Te respondemos en menos de 24 horas. Solo te escribimos sobre tu clase
        — nunca marketing.
      </p>
    </form>
  );
}
