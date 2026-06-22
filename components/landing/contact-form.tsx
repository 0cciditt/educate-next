"use client";

import { useState } from "react";
import { whatsappUrl } from "@/lib/contact";
import { WhatsAppIcon } from "./icons";

const input =
  "w-full px-4 py-3.5 rounded-2xl border-[1.5px] border-line bg-white text-base text-ink font-sans transition-[border-color,box-shadow] duration-150 ease-out focus:outline-none focus:border-navy focus:shadow-[0_0_0_4px_rgba(31,79,122,0.15)]";
const select = `${input} appearance-none pr-11 cursor-pointer`;
const label = "font-heading font-bold text-sm text-ink-2";

function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" fill="none" className={className} aria-hidden>
      <path
        d="M3 4.5L6 7.5L9 4.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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
      className="reveal-up bg-white rounded-[32px] shadow-brand-md p-6 sm:p-8 flex flex-col gap-4 w-full"
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
          <div className="relative">
            <select
              className={select}
              value={forWhom}
              onChange={(e) => setForWhom(e.target.value)}
            >
              <option>Para mi hijo/a</option>
              <option>Para mí</option>
              <option>Para mi familia</option>
              <option>Para mi equipo de trabajo</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-ink-4" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className={label}>Sede preferida</label>
        <div className="relative">
          <select
            className={select}
            value={sede}
            onChange={(e) => setSede(e.target.value)}
          >
            <option>Unicentro</option>
            <option>Centenario</option>
            <option>Capri</option>
            <option>{NO_SEDE}</option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-ink-4" />
        </div>
      </div>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2.5 font-heading font-bold text-[15px] sm:text-lg text-white bg-orange shadow-brand-sm rounded-pill px-5 sm:px-8 py-3.5 sm:py-4 mt-1 no-underline cursor-pointer transition-[transform,box-shadow,background-color] duration-200 ease-out hover:bg-orange-deep hover:-translate-y-px hover:shadow-brand-md"
      >
        <WhatsAppIcon className="w-5 h-5" />
        Obtener más información
      </a>

      <p className="text-xs text-ink-3 text-center -mt-1">
        Te llevamos a WhatsApp con tu mensaje listo. Te respondemos en menos de
        24 horas. Nunca marketing.
      </p>
    </form>
  );
}
