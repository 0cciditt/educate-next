type Level = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

const colors: Record<Level, string> = {
  A1: "bg-green",
  A2: "bg-green-deep",
  B1: "bg-navy",
  B2: "bg-navy-deep",
  C1: "bg-burgundy",
  C2: "bg-burgundy-deep",
};

export function LevelChip({ level }: { level: Level }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-display text-[13px] tracking-[0.04em] text-white px-2.5 py-1 rounded-[10px] ${colors[level]}`}
    >
      {level}
    </span>
  );
}
