"use client";

import { useState } from "react";
import { whatsappUrl } from "@/lib/contact";

const input =
  "w-full px-4 py-3.5 rounded-2xl border-[1.5px] border-line bg-white text-base text-ink font-sans transition-[border-color,box-shadow] duration-150 ease-out focus:outline-none focus:border-navy focus:shadow-[0_0_0_4px_rgba(31,79,122,0.15)]";
const label = "font-heading font-bold text-sm text-ink-2";

const NO_SEDE = "Aún no estoy seguro/a";

/** Builds the WhatsApp message from whatever the visitor filled in. */
function buildMessage({
  name,
  forWhom,
  sede,
}: {
  name: string;
  forWhom: string;
  sede: string;
}) {
  const parts = ["¡Hola! Me gustaría obtener más información sobre Educate."];
  if (name.trim()) parts.push(`Mi nombre es ${name.trim()}.`);
  parts.push(`Es ${forWhom.toLowerCase()}.`);
  if (sede && sede !== NO_SEDE) parts.push(`Sede de interés: ${sede}.`);
  return parts.join(" ");
}

export function ContactForm() {
  const [name, setName] = useState("");
  const [forWhom, setForWhom] = useState("Para mi hijo/a");
  const [sede, setSede] = useState("Unicentro");

  const href = whatsappUrl(buildMessage({ name, forWhom, sede }));

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="bg-white rounded-[32px] shadow-brand-md p-6 sm:p-8 flex flex-col gap-4 w-full"
    >
      <div className="font-display text-2xl text-ink">Obtén más información.</div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label className={label}>Tu nombre</label>
          <input
            className={input}
            placeholder="María"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={label}>¿Y para quién?</label>
          <select
            className={input}
            value={forWhom}
            onChange={(e) => setForWhom(e.target.value)}
          >
            <option>Para mi hijo/a</option>
            <option>Para mí</option>
            <option>Para mi familia</option>
            <option>Para mi equipo de trabajo</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className={label}>Sede preferida</label>
        <select
          className={input}
          value={sede}
          onChange={(e) => setSede(e.target.value)}
        >
          <option>Unicentro</option>
          <option>Centenario</option>
          <option>Alfaguara</option>
          <option>{NO_SEDE}</option>
        </select>
      </div>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center font-heading font-bold text-lg text-white bg-orange shadow-brand-sm rounded-pill px-8 py-4 mt-1 no-underline cursor-pointer transition-[transform,box-shadow,background-color] duration-200 ease-out hover:bg-orange-deep hover:-translate-y-px hover:shadow-brand-md"
      >
        Obtener más información
      </a>

      <p className="text-xs text-ink-3 text-center -mt-1">
        Te llevamos a WhatsApp con tu mensaje listo. Te respondemos en menos de
        24 horas — nunca marketing.
      </p>
    </form>
  );
}
