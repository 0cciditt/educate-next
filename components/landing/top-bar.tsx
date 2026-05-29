import { WHATSAPP_BOOKING_MESSAGE, whatsappUrl } from "@/lib/contact";
import { PhoneIcon, PinIcon, WhatsAppIcon } from "./icons";

export function TopBar() {
  return (
    <div className="hidden md:block bg-navy text-white/85 text-[13px]">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 xl:px-16 py-2.5 flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
          <span className="inline-flex items-center gap-2">
            <PinIcon className="w-3.5 h-3.5" />
            Sedes en Cali · Valle del Cauca
          </span>
          <span className="inline-flex items-center gap-2">
            <PhoneIcon className="w-3.5 h-3.5" />
            <a href="tel:+5725245727" className="text-white/85 hover:text-white no-underline">
              +57 (2) 524 5727
            </a>
          </span>
          <span className="inline-flex items-center gap-2">
            <WhatsAppIcon className="w-3.5 h-3.5" />
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/85 hover:text-white no-underline"
            >
              WhatsApp
            </a>
          </span>
        </div>
        <div className="hidden lg:flex items-center gap-4">
          <a href="#sedes" className="text-white/85 hover:text-white no-underline">
            Encuentra tu sede
          </a>
          <a
            href={whatsappUrl(WHATSAPP_BOOKING_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/85 hover:text-white no-underline"
          >
            Agenda tu clase gratis →
          </a>
        </div>
      </div>
    </div>
  );
}
