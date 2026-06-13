import Image from "next/image";
import type { ReactNode } from "react";

const defaultTitle = (
  <>
    Inglés que viven,
    <br />
    no que memorizan.
  </>
);

const defaultBody = (
  <>
    <p className="text-[15px] lg:text-lg leading-relaxed text-ink-2 mt-3 lg:mt-6 max-w-[560px]">
      El Young Learners Program acompaña a niños y jóvenes de 4 a 13 años a
      aprender inglés como una herramienta real para conectar con el mundo: 100%
      conversacional y experiencial, con inmersión total desde el primer día y
      profesores certificados.
    </p>
    <p className="text-[15px] lg:text-lg leading-relaxed text-ink-2 mt-3 lg:mt-4 max-w-[560px]">
      Se compone de ciclos de aprendizaje{" "}
      <span className="font-heading font-bold text-navy">
        homologados de acuerdo al Marco Común Europeo
      </span>
      , que garantizan una formación constante y efectiva durante todo el
      programa.
    </p>
  </>
);

type Props = {
  eyebrow?: string;
  title?: ReactNode;
  body?: ReactNode;
  image?: string;
  imageAlt?: string;
};

export function YlBrief({
  eyebrow = "El programa",
  title = defaultTitle,
  body = defaultBody,
  image = "/hero/educate-2.webp",
  imageAlt = "Niños y jóvenes de Educate en una clase de inglés",
}: Props = {}) {
  return (
    <section id="programa" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="reveal-up overflow-hidden rounded-[28px] bg-white ring-1 ring-line-2 shadow-brand-md lg:grid lg:gap-16 xl:gap-20 lg:items-center lg:grid-cols-2 lg:overflow-visible lg:rounded-none lg:bg-transparent lg:ring-0 lg:shadow-none lg:[&>*:first-child]:order-2">
          <div className="relative aspect-[16/10] overflow-hidden lg:aspect-[4/3] lg:rounded-[32px] lg:shadow-brand-lg">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="p-6 sm:p-8 lg:p-0">
            <div className="font-mono text-[11px] tracking-[0.22em] text-orange uppercase">
              {eyebrow}
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-[56px] leading-[1.05] lg:leading-[0.95] tracking-tight mt-2 lg:mt-3 text-ink">
              {title}
            </h2>
            {body}
          </div>
        </div>
      </div>
    </section>
  );
}
