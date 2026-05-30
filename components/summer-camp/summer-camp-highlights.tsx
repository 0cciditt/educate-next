import { HighlightsStrip } from "../ui/highlights-strip";

const highlights = [
  {
    eyebrow: "EDAD",
    label: "Desde los 6 años",
    sub: "Grupos por edad y nivel",
  },
  {
    eyebrow: "DURACIÓN",
    label: "2 a 6 Semanas",
    sub: "Según la modalidad",
  },
  {
    eyebrow: "MODALIDAD",
    label: "Day Camp · Inmersión",
    sub: "Local o internacional",
  },
  {
    eyebrow: "TEMPORADA",
    label: "Mayo–Agosto",
    sub: "Verano hemisferio norte",
  },
];

export function SummerCampHighlights() {
  return <HighlightsStrip items={highlights} />;
}
