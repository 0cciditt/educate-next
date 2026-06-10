import type { ComponentType } from "react";
import {
  ClipboardCheckIcon,
  GraduationCapIcon,
  TrophyIcon,
  UsersIcon,
} from "./icons";

type Item = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  sub: string;
  /** Soft-tinted icon tile background. */
  tile: string;
  /** Accent text colour for the icon. */
  accent: string;
};

const items: Item[] = [
  {
    icon: GraduationCapIcon,
    title: "Marco Común Europeo",
    sub: "Homologados A1 a C1",
    tile: "bg-navy-soft",
    accent: "text-navy",
  },
  {
    icon: ClipboardCheckIcon,
    title: "Cambridge Authorized",
    sub: "Centro de preparación oficial",
    tile: "bg-green-soft",
    accent: "text-green-deep",
  },
  {
    icon: UsersIcon,
    title: "Profes certificados",
    sub: "TKT, CELTA y nativos",
    tile: "bg-orange-soft",
    accent: "text-orange-deep",
  },
  {
    icon: TrophyIcon,
    title: "12 años en el Valle",
    sub: "3.200 estudiantes formados",
    tile: "bg-yellow-soft",
    accent: "text-yellow-deep",
  },
];

// Hidden on phones (below sm) — the section only shows from sm up as a grid.
export function TrustBar() {
  return (
    <section className="hidden sm:block bg-bg-warm border-y border-line-2 py-8 sm:py-10">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 xl:px-16 grid gap-8 lg:gap-12 lg:grid-cols-[200px_1fr] lg:items-center">
        <div className="text-center lg:text-left">
          <div className="font-mono text-xs tracking-[0.15em] text-ink-3 leading-relaxed">
            RESPALDOS QUE NOS AVALAN
          </div>
          <span className="mt-2.5 inline-block h-[3px] w-10 rounded-full bg-orange" />
        </div>
        <div className="min-w-0">
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-10">
            {items.map((it) => (
              <TrustItem key={it.title} {...it} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustItem({ icon: Icon, title, sub, tile, accent }: Item) {
  return (
    <div className="group flex items-center gap-3.5">
      <div
        className={`w-11 h-11 rounded-xl grid place-items-center shrink-0 transition-transform duration-300 group-hover:scale-105 ${tile} ${accent}`}
      >
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <div className="font-heading font-extrabold text-[15px] leading-tight text-ink">
          {title}
        </div>
        <div className="text-xs text-ink-3 mt-0.5">{sub}</div>
      </div>
    </div>
  );
}
