import type { ReactNode } from "react";
import { TrophyIcon, GraduationCapIcon, CheckIcon, UsersIcon } from "./icons";

const items = [
  {
    bg: "bg-green",
    icon: <GraduationCapIcon className="w-5 h-5 text-white" />,
    title: "Marco Común Europeo",
    sub: "Homologados A1 a C2",
  },
  {
    bg: "bg-green",
    icon: <CheckIcon className="w-5 h-5 text-white" />,
    title: "Cambridge Authorized",
    sub: "Centro de preparación oficial",
  },
  {
    bg: "bg-green",
    icon: <UsersIcon className="w-5 h-5 text-white" />,
    title: "Profes certificados",
    sub: "TKT, CELTA y nativos",
  },
  {
    bg: "bg-green",
    icon: <TrophyIcon className="w-5 h-5 text-white" />,
    title: "12 años en el Valle",
    sub: "3.200 estudiantes formados",
  },
];

export function TrustBar() {
  return (
    <section className="bg-bg-warm border-y border-line-2 py-8 sm:py-10">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 xl:px-16 grid gap-8 lg:gap-12 lg:grid-cols-[200px_1fr] lg:items-center">
        <div className="font-mono text-xs tracking-[0.15em] text-ink-3 leading-relaxed">
          RESPALDOS QUE
          <br />
          NOS AVALAN
        </div>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4 xl:gap-10">
          {items.map((it) => (
            <TrustItem key={it.title} {...it} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustItem({
  bg,
  icon,
  title,
  sub,
}: {
  bg: string;
  icon: ReactNode;
  title: string;
  sub: string;
}) {
  return (
    <div className="flex items-center gap-3.5">
      <div
        className={`w-11 h-11 rounded-xl grid place-items-center shrink-0 ${bg}`}
      >
        {icon}
      </div>
      <div>
        <div className="font-heading font-extrabold text-[15px] text-ink">{title}</div>
        <div className="text-xs text-ink-3 mt-0.5">{sub}</div>
      </div>
    </div>
  );
}
