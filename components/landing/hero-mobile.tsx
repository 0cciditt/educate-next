import Image from "next/image";
import { whatsappUrl } from "@/lib/contact";
import { Button } from "../ui/button";

/**
 * Mobile-only homepage hero: a full-bleed photo with a translucent "glass"
 * card anchored to the bottom holding the welcome line, headline and CTA.
 * Hidden at `lg`+, where the crossfade `HeroCarousel` takes over instead.
 */
export function HeroMobile() {
  return (
    <section className="lg:hidden relative isolate overflow-hidden bg-navy-deep">
      <Image
        src="/hero/mobile-hero.webp"
        alt="Estudiantes de Educate en una clase de intercambio cultural"
        fill
        priority
        sizes="(min-width: 1024px) 0px, 100vw"
        className="object-cover object-center"
      />
      {/* Soft vertical scrim — lifts the photo and grounds the card */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,59,92,0.12) 0%, rgba(20,59,92,0) 35%, rgba(20,59,92,0.38) 100%)",
        }}
      />

      <div className="relative z-10 flex min-h-[78svh] flex-col justify-end p-4 pb-7">
        <div
          className="rounded-[28px] border border-white/25 backdrop-blur-md p-6 shadow-brand-lg"
          style={{
            background:
              "linear-gradient(135deg, rgba(31,79,122,0.64) 0%, rgba(20,59,92,0.72) 100%)",
          }}
        >
          <p className="text-white/90 text-[15px] leading-snug">
            Te damos la bienvenida a Educate
          </p>
          <h1
            className="font-display text-3xl sm:text-4xl leading-[1.03] tracking-tight text-white mt-3"
            style={{ textShadow: "0 2px 18px rgba(20,59,92,0.45)" }}
          >
            La mejor academia para aprender idiomas en Colombia.
          </h1>
          <Button
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            variant="accent"
            size="lg"
            className="mt-6 shadow-brand-md"
          >
            Comenzar ahora
          </Button>
        </div>
      </div>
    </section>
  );
}
