import Image from "next/image";

type Exam = {
  logo: string;
  alt: string;
  subtitle: string;
};

const exams: Exam[] = [
  {
    logo: "/english-test/IELTS.webp",
    alt: "IELTS",
    subtitle: "International English Language Testing System",
  },
  {
    logo: "/english-test/Toefl.webp",
    alt: "TOEFL",
    subtitle: "Test of English as a Foreign Language",
  },
  {
    logo: "/english-test/Cambridge-english-key.webp",
    alt: "Cambridge English: Key",
    subtitle: "Key English Test (KET)",
  },
  {
    logo: "/english-test/Cambridge-english-preliminary.webp",
    alt: "Cambridge English: Preliminary",
    subtitle: "Preliminary English Test (PET)",
  },
  {
    logo: "/english-test/Cambridge-english-first.webp",
    alt: "Cambridge English: First",
    subtitle: "First Certificate in English (FCE)",
  },
  {
    logo: "/english-test/Cambridge-young-learners.webp",
    alt: "Cambridge English: Young Learners",
    subtitle: "Young Learners English Tests",
  },
];

export function PrepExamenes() {
  return (
    <section id="examenes" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 xl:px-16">
        <p className="text-lg leading-relaxed text-ink-2 text-center max-w-2xl mx-auto">
          Al finalizar el proceso habrás desarrollado todas las competencias y
          la confianza necesaria para alcanzar tus objetivos en la prueba.
        </p>

        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-tight mt-12 sm:mt-16 text-center text-ink">
          Exámenes Internacionales
        </h2>

        <div className="mt-12 sm:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {exams.map((e) => (
            <article
              key={e.alt}
              className="group flex flex-col rounded-3xl border border-line-2 bg-white p-8 transition-shadow duration-200 hover:shadow-brand-md"
            >
              <div className="relative h-16 sm:h-20 w-full">
                <Image
                  src={e.logo}
                  alt={e.alt}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 360px"
                  className="object-contain object-center grayscale opacity-80 transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                />
              </div>
              <div className="mt-auto pt-6 border-t border-line-2">
                <div className="font-heading font-extrabold text-base leading-snug text-ink text-center">
                  {e.subtitle}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
