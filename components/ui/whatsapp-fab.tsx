"use client";

import { usePathname } from "next/navigation";
import { whatsappMessageForPath, whatsappUrl } from "@/lib/contact";
import { WhatsAppIcon } from "../landing/icons";

export function WhatsAppFab() {
  const pathname = usePathname();
  const href = whatsappUrl(whatsappMessageForPath(pathname));

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="group fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-[60] inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-brand-lg outline-none transition-transform duration-200 ease-out hover:scale-105 focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
    >
      {/* Soft pulsing ring to draw the eye */}
      <span
        aria-hidden
        className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 motion-safe:animate-ping"
      />
      <WhatsAppIcon className="relative w-7 h-7" />
    </a>
  );
}
