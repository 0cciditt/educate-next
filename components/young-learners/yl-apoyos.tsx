import Image from "next/image";
import { CheckIcon } from "../landing/icons";

type Apoyo = { title: string; desc: string };

const apoyos: Apoyo[] = [
  {
    title: "Clubs de Práctica",
    desc: "Espacios para reforzar las habilidades comunicativas a través de actividades dinámicas.",
  },
  {
    title: "Tutorías",
    desc: "Espacios creados para resolver dudas y practicar lo visto en clase.",
  },
  {
    title: "My Learn App",
    desc: "Contenidos de interés actualizados en nuestra App Learn para poner en práctica todo lo aprendido.",
  },
  {
    title: "Plataforma Interactiva",
    desc: "Acceso 24/7 a nuestra plataforma de aprendizaje continuo, para practicar lo aprendido y prepararse para los exámenes internacionales.",
  },
];

export function YlApoyos() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 xl:px-16">
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-tight text-center text-ink">
          Apoyos académicos
        </h2>

        <div className="mt-12 sm:mt-16 grid gap-10 lg:gap-16 lg:grid-cols-2 lg:items-center">
          <div className="relative max-w-md lg:max-w-none mx-auto w-full">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] shadow-brand-lg">
              <Image
                src="/hero/educate-3.webp"
                alt="Estudiantes de Educate practicando inglés con apoyo de un tutor"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <ul className="flex flex-col gap-7">
            {apoyos.map((a) => (
              <li key={a.title} className="flex items-start gap-4">
                <span className="grid place-items-center w-7 h-7 rounded-full bg-navy shrink-0 mt-0.5">
                  <CheckIcon className="w-4 h-4 text-white" />
                </span>
                <div>
                  <h3 className="font-heading font-extrabold text-lg text-navy">
                    {a.title}
                  </h3>
                  <p className="text-base leading-relaxed text-ink-2 mt-1">
                    {a.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
