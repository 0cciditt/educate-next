import { HighlightsStrip } from "../ui/highlights-strip";

const highlights = [
  {
    eyebrow: "EDAD",
    label: "Niños y jóvenes",
    sub: "Grupos por edad y nivel",
  },
  {
    eyebrow: "DURACIÓN",
    label: "5 días",
    sub: "Semana de receso escolar",
  },
  {
    eyebrow: "MODALIDAD",
    label: "Day Camp en Cali",
    sub: "Presencial y diurno",
  },
  {
    eyebrow: "TEMPORADA",
    label: "Octubre",
    sub: "Receso escolar",
  },
];

export function RecessCampHighlights() {
  return <HighlightsStrip items={highlights} />;
}
