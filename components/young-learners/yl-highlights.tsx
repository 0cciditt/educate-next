import { HighlightsStrip, type Highlight } from "../ui/highlights-strip";

export type { Highlight };

const defaultHighlights: Highlight[] = [
  {
    eyebrow: "EDAD",
    label: "4 a 13 años",
    sub: "Niños y jóvenes",
  },
  {
    eyebrow: "MODALIDAD",
    label: "Presencial",
    sub: "Sedes en Cali",
  },
  {
    eyebrow: "GRUPOS",
    label: "Reducidos",
    sub: "Por edad y nivel",
  },
  {
    eyebrow: "NIVELES",
    label: "A1 a C1",
    sub: "Marco Común Europeo",
  },
];

export function YlHighlights({
  items = defaultHighlights,
}: { items?: Highlight[] } = {}) {
  return <HighlightsStrip items={items} />;
}
