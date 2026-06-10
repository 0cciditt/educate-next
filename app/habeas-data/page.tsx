import type { Metadata } from "next";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteNavV2 } from "@/components/landing/site-nav-v2";
import { Button } from "@/components/ui/button";
import { chapters, policyMeta, type Node } from "./policy-content";

export const metadata: Metadata = {
  title: "Política de Tratamiento de Datos Personales — Educate Learning Center",
  description:
    "Política de Tratamiento y Protección de Datos Personales (Habeas Data) de Educate Learning Center S.A.S., expedida conforme a la Ley 1581 de 2012 y el Decreto 1074 de 2015.",
};

function NodeBlock({ node }: { node: Node }) {
  switch (node.k) {
    case "p":
      return (
        <p className="text-ink-2 leading-[1.85] text-[15px] sm:text-base">
          {node.t}
        </p>
      );
    case "h3":
      return (
        <h3 className="font-heading font-bold text-navy text-lg sm:text-xl mt-9 mb-1">
          {node.t}
        </h3>
      );
    case "h4":
      return (
        <h4 className="font-heading font-bold text-ink text-base mt-6 mb-1">
          {node.t}
        </h4>
      );
    case "ul":
      return (
        <ul className="my-2 flex flex-col gap-2.5 pl-1">
          {node.items.map((item, i) => (
            <li
              key={i}
              className="relative pl-6 text-ink-2 leading-[1.8] text-[15px] sm:text-base before:absolute before:left-0 before:top-[0.7em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-orange"
            >
              {item}
            </li>
          ))}
        </ul>
      );
  }
}

export default function HabeasDataPage() {
  return (
    <>
      <SiteNavV2 />
      <main>
        {/* Encabezado */}
        <header className="bg-navy text-white">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 xl:px-16 py-14 sm:py-20">
            <p className="font-display text-xs sm:text-sm tracking-[0.2em] uppercase text-yellow">
              {policyMeta.company}
            </p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-tight mt-4 max-w-3xl">
              {policyMeta.title}
            </h1>
            <p className="text-white/75 leading-relaxed text-[15px] sm:text-base mt-5 max-w-2xl">
              Documento corporativo oficial expedido en cumplimiento de la Ley
              1581 de 2012, el Decreto Único Reglamentario 1074 de 2015 y demás
              normas concordantes vigentes en la República de Colombia.
            </p>
            <div className="mt-7 flex flex-wrap gap-x-8 gap-y-2 text-[13px] text-white/70">
              <span>{policyMeta.version}</span>
              <span>Vigencia: {policyMeta.effectiveDate}</span>
              <span>{policyMeta.city}</span>
            </div>
            <Button
              href="/politica-tratamiento-datos-personales.pdf"
              download="Politica-Tratamiento-Datos-Personales-Educate-Learning-Center.pdf"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="md"
              className="mt-8"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="w-[18px] h-[18px]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3v12" />
                <path d="m7 10 5 5 5-5" />
                <path d="M5 21h14" />
              </svg>
              Descargar PDF
            </Button>
          </div>
          <div className="flex h-2">
            {["bg-orange", "bg-yellow", "bg-green", "bg-red", "bg-burgundy"].map(
              (c, i) => (
                <div key={i} className={`flex-1 ${c}`} />
              ),
            )}
          </div>
        </header>

        <div className="bg-bg-warm">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 xl:px-16 py-12 sm:py-16">
            <div className="lg:grid lg:grid-cols-[260px_1fr] lg:gap-12 xl:gap-16">
              {/* Tabla de contenido */}
              <aside className="hidden lg:block">
                <nav
                  aria-label="Contenido de la política"
                  className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-2"
                >
                  <div className="font-display text-xs tracking-[0.15em] uppercase text-ink-3 mb-4">
                    Contenido
                  </div>
                  <ol className="list-none p-0 flex flex-col gap-1.5 text-[13.5px]">
                    {chapters.map((c) => (
                      <li key={c.id}>
                        <a
                          href={`#${c.id}`}
                          className="block py-1 text-ink-3 hover:text-navy no-underline leading-snug"
                        >
                          {c.n ? `${c.n}. ` : ""}
                          {c.title}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </aside>

              {/* Contenido */}
              <article className="min-w-0 max-w-3xl">
                {chapters.map((chapter) => (
                  <section
                    key={chapter.id}
                    id={chapter.id}
                    className="scroll-mt-24 mb-12 sm:mb-14"
                  >
                    <div className="flex items-baseline gap-3 border-b border-line pb-3 mb-5">
                      {chapter.n && (
                        <span className="font-display text-orange text-lg sm:text-xl shrink-0">
                          {chapter.n}
                        </span>
                      )}
                      <h2 className="font-display text-xl sm:text-2xl lg:text-[28px] text-navy leading-tight">
                        {chapter.title}
                      </h2>
                    </div>
                    <div className="flex flex-col">
                      {chapter.body.map((node, i) => (
                        <NodeBlock key={i} node={node} />
                      ))}
                    </div>
                  </section>
                ))}

                {/* Firma / suscripción del documento */}
                <section className="mb-12 sm:mb-14">
                  <p className="text-ink-2 leading-[1.85] text-[15px] sm:text-base">
                    Dada en la ciudad de Santiago de Cali, Valle del Cauca,
                    República de Colombia, a los seis (6) días del mes de junio
                    del año dos mil veintiséis (2026).
                  </p>
                  <div className="mt-10 grid gap-10 sm:grid-cols-2">
                    <div>
                      <div className="border-t border-ink-3 pt-3" />
                      <p className="font-heading font-bold text-ink">
                        EDUCATE LEARNING CENTER S.A.S.
                      </p>
                      <p className="text-ink-3 text-sm">NIT 901.719.129-7</p>
                      <p className="text-ink-3 text-sm">Representante Legal</p>
                    </div>
                    <div>
                      <div className="border-t border-ink-3 pt-3" />
                      <p className="font-heading font-bold text-ink">
                        Director Administrativo
                      </p>
                      <p className="text-ink-3 text-sm">
                        Responsable de Protección de Datos Personales
                      </p>
                    </div>
                  </div>
                </section>

                {/* Contacto / ejercicio de derechos */}
                <section
                  id="contacto-derechos"
                  className="scroll-mt-24 rounded-3xl bg-white border border-line shadow-brand-sm p-7 sm:p-9"
                >
                  <h2 className="font-display text-xl sm:text-2xl text-navy leading-tight">
                    Ejerce tus derechos
                  </h2>
                  <p className="text-ink-2 leading-relaxed text-[15px] sm:text-base mt-3">
                    Como Titular puedes conocer, actualizar, rectificar y suprimir
                    tus datos personales, así como revocar la autorización
                    otorgada. Escríbenos a nuestro canal único de atención:
                  </p>
                  <dl className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-2 text-[15px]">
                    <div>
                      <dt className="font-display text-xs tracking-[0.12em] uppercase text-ink-3">
                        Correo electrónico
                      </dt>
                      <dd className="mt-1">
                        <a
                          href={`mailto:${policyMeta.email}`}
                          className="text-navy font-semibold no-underline hover:text-navy-deep break-all"
                        >
                          {policyMeta.email}
                        </a>
                      </dd>
                    </div>
                    <div>
                      <dt className="font-display text-xs tracking-[0.12em] uppercase text-ink-3">
                        Teléfono
                      </dt>
                      <dd className="mt-1 text-ink-2">{policyMeta.phone}</dd>
                    </div>
                    <div className="sm:col-span-2">
                      <dt className="font-display text-xs tracking-[0.12em] uppercase text-ink-3">
                        Domicilio
                      </dt>
                      <dd className="mt-1 text-ink-2">{policyMeta.address}</dd>
                    </div>
                  </dl>
                  <Button
                    href={`mailto:${policyMeta.email}?subject=${encodeURIComponent(
                      "Solicitud de habeas data",
                    )}`}
                    variant="accent"
                    size="sm"
                    className="mt-7"
                  >
                    Escribir al canal de atención
                  </Button>
                </section>
              </article>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
