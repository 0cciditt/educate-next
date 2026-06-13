import { HighlightsStrip } from "../ui/highlights-strip";

const highlights = [
  {
    eyebrow: "EDAD",
    label: "Desde los 10 años",
    sub: "Niños y jóvenes",
  },
  {
    eyebrow: "DURACIÓN",
    label: "2 a 4 semanas",
    sub: "Según el destino",
  },
  {
    eyebrow: "MODALIDAD",
    label: "Inmersión internacional",
    sub: "Canadá y Estados Unidos",
  },
  {
    eyebrow: "TEMPORADA",
    label: "Noviembre – Enero",
    sub: "Invierno hemisferio norte",
  },
];

export function WinterCampHighlights() {
  return <HighlightsStrip items={highlights} />;
}
