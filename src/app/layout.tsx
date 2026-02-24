import type { Metadata } from "next";
import {
  Stint_Ultra_Expanded,
  Pontano_Sans,
  Luxurious_Script,
  Familjen_Grotesk,
  Lobster,
  Passions_Conflict,
} from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Menux from "./components/Menux";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";
import AwardPopup from "./components/AwardPopup";

const stintUltraExpanded = Stint_Ultra_Expanded({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-stint-ultra-expanded",
});
const pontanoSans = Pontano_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pontano-sans",
});
const luxuriousScript = Luxurious_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-luxurious-script",
});
const familjenGrotesk = Familjen_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-familjen-grotesk",
});
const lobster = Lobster({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lobster",
});
const passionsConflict = Passions_Conflict({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-passions-conflict",
});

export const metadata: Metadata = {
  title: "Ciprian Ungureanu - Fade Academy | Curs Frizerie Incepatori",
  description:
    "Descopera cursurile de frizerie pentru incepatori oferite de Ciprian Ungureanu, un expert recunoscut international. Inscrie-te acum la Fade Academy pentru a invata tehnicile esentiale ale frizeriei și pentru a-ți începe cariera de succes.",
  keywords: [
    "curs frizerie incepatori",
    "frizerie Ciprian Ungureanu",
    "Fade Academy",
    "tehnici frizerie",
    "cariera frizerie",
    "cursuri frizerie",
    "formare frizeri",
  ],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro">
      <body
        className={`${stintUltraExpanded.variable} ${pontanoSans.variable} ${luxuriousScript.variable} ${familjenGrotesk.variable} ${lobster.variable} ${passionsConflict.variable} font-pontano-sans flex flex-col min-h-screen`}
      >
        <Menux />
        <Providers>
          <main className="flex-grow">{children}</main>
        </Providers>
        <Footer />
        <CookieConsent />
        <AwardPopup />
      </body>
    </html>
  );
}
