// Central contact config. Update WHATSAPP_NUMBER here once the real line is
// ready and every link on the site (floating button, CTAs, top bar) follows.
//
// TODO: replace with the real WhatsApp number — digits only, including country
// code, no "+", spaces or dashes. Example for Colombia: "573001234567".
export const WHATSAPP_NUMBER = "573117163442";

export const WHATSAPP_DEFAULT_MESSAGE =
  "¡Hola! Me gustaría recibir más información sobre los programas de Educate.";

/**
 * Per-route pre-filled message, so the floating WhatsApp button mentions the
 * exact program the visitor is looking at. Add a new route here when a new
 * program page is created.
 */
export const WHATSAPP_PROGRAM_MESSAGES: Record<string, string> = {
  "/programas/summer-camp":
    "¡Hola! Me gustaría recibir más información sobre el Summer Camp de Educate.",
  "/programas/winter-camp":
    "¡Hola! Me gustaría recibir más información sobre el Winter Camp de Educate.",
  "/programas/spring-break-camp":
    "¡Hola! Me gustaría recibir más información sobre el Spring Break Camp de Educate.",
  "/programas/recess-camp":
    "¡Hola! Me gustaría recibir más información sobre el Recess Camp de Educate.",
  "/programas/extracurriculares":
    "¡Hola! Me gustaría recibir más información sobre los programas extracurriculares de Educate.",
  "/programas/centros-educativos":
    "¡Hola! Me gustaría recibir más información sobre el programa para centros educativos de Educate.",
};

/** Returns the message for a given path, or the default if none matches. */
export function whatsappMessageForPath(pathname: string | null | undefined) {
  if (!pathname) return WHATSAPP_DEFAULT_MESSAGE;
  return WHATSAPP_PROGRAM_MESSAGES[pathname] ?? WHATSAPP_DEFAULT_MESSAGE;
}

/** Builds a wa.me chat link with an optional pre-filled message. */
export function whatsappUrl(message: string = WHATSAPP_DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Social profiles shown in the footer. `label` maps to a brand icon in the
// footer; drop an entry to hide that network.
//
// TODO: replace each "#" with the real profile URL.
export type SocialLink = { label: string; href: string };

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/educatelearningcentercol/",
  },
  {
    label: "Facebook",
    href: "https://web.facebook.com/profile.php?id=61591067060977",
  },
  { label: "TikTok", href: "https://www.tiktok.com/@educatelearningcenter" },
  { label: "YouTube", href: "https://www.youtube.com/@EDUCATELEARNING-yq4cb" },
  // TODO: confirm the real LinkedIn company URL (the one provided looked
  // incomplete, e.g. https://www.linkedin.com/company/<slug>).
  { label: "LinkedIn", href: "#" },
];
