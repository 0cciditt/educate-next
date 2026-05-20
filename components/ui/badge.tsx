import type { ReactNode } from "react";

type Tone =
  | "navy"
  | "orange"
  | "yellow"
  | "green"
  | "red"
  | "burgundy"
  | "solid-navy"
  | "solid-orange";

const tones: Record<Tone, string> = {
  navy: "bg-navy-soft text-navy-deep",
  orange: "bg-orange-soft text-orange-deep",
  yellow: "bg-yellow-soft text-[#8A6B0C]",
  green: "bg-green-soft text-green-deep",
  red: "bg-red-soft text-red-deep",
  burgundy: "bg-burgundy-soft text-burgundy-deep",
  "solid-navy": "bg-navy text-white",
  "solid-orange": "bg-orange text-white",
};

export function Badge({
  tone = "navy",
  dot = false,
  children,
  className = "",
}: {
  tone?: Tone;
  dot?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-heading font-bold text-xs tracking-[0.04em] uppercase px-3 py-1.5 rounded-pill ${tones[tone]} ${className}`.trim()}
    >
      {dot && (
        <span className="w-1.5 h-1.5 rounded-full bg-current" aria-hidden />
      )}
      {children}
    </span>
  );
}
