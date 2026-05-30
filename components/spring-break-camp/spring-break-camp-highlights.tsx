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
    sub: "Una semana de receso",
  },
  {
    eyebrow: "MODALIDAD",
    label: "Day Camp en Cali",
    sub: "Presencial y diurno",
  },
  {
    eyebrow: "TEMPORADA",
    label: "Semana Santa",
    sub: "Receso de primavera",
  },
];

export function SpringBreakCampHighlights() {
  return <HighlightsStrip items={highlights} />;
}
