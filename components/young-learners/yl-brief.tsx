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
    <p className="text-lg leading-relaxed text-ink-2 mt-6 max-w-[560px]">
      El Young Learners Program acompaña a niños y jóvenes de 4 a 13 años a
      aprender inglés como una herramienta real para conectar con el mundo: 100%
      conversacional y experiencial, con inmersión total desde el primer día y
      profesores certificados.
    </p>
    <p className="text-lg leading-relaxed text-ink-2 mt-4 max-w-[560px]">
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
        <div className="grid gap-12 lg:gap-16 xl:gap-20 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="font-mono text-[11px] tracking-[0.22em] text-orange uppercase">
              {eyebrow}
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[56px] leading-[0.95] tracking-tight mt-3 text-ink">
              {title}
            </h2>
            {body}
          </div>

          <div className="relative max-w-md lg:max-w-none mx-auto w-full">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] shadow-brand-lg">
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
