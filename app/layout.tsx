import type { Metadata } from "next";
import {
  Archivo,
  Archivo_Black,
  JetBrains_Mono,
  Nunito,
} from "next/font/google";
import "./globals.css";
import { WhatsAppFab } from "@/components/ui/whatsapp-fab";

const archivoBlack = Archivo_Black({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const archivo = Archivo({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const nunito = Nunito({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Educate Learning Center — Aprende inglés que te lleva al mundo",
  description:
    "Academia de idiomas en Cali para niños, jóvenes y adultos. Grupos pequeños, profes certificados, metodología 100% conversacional y certificación Cambridge.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${archivoBlack.variable} ${archivo.variable} ${nunito.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-white text-ink font-sans antialiased">
        {children}
        <WhatsAppFab />
      </body>
    </html>
  );
}
