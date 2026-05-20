export function PhotoPlaceholder({
  label,
  className = "",
  rounded = "rounded-2xl",
}: {
  label: string;
  className?: string;
  rounded?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden ${rounded} ${className}`.trim()}
      style={{
        background:
          "radial-gradient(120% 80% at 20% 0%, rgba(231,111,58,.16), transparent 60%), radial-gradient(110% 90% at 100% 100%, rgba(31,79,122,.18), transparent 60%), linear-gradient(180deg, #EEDCC2, #D9C29F)",
      }}
    >
      <span className="absolute inset-0 grid place-items-center font-mono text-xs tracking-[0.08em] text-black/45 text-center px-4">
        {label}
      </span>
    </div>
  );
}
