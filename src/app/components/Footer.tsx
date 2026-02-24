import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#79FD15] text-[#000000] p-4">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 items-center mb-4">
        <div className="flex flex-col">
          <h2 className="text-lg font-medium mb-1 text-[#000000] font-stint-ultra-expanded">
            Contacteaza-ne:
          </h2>
          <a
            href="tel:+40723403403"
            className="text-sm text-[#000000] font-pontano-sans flex items-center hover:underline w-full"
          >
            <FaPhone className="mr-2 flex-shrink-0" />
            <span className="flex-grow truncate">(+40) 723 403 403</span>
          </a>
          <a
            href="tel:+40723705702"
            className="text-sm text-[#000000] font-pontano-sans flex items-center mt-1 hover:underline w-full"
          >
            <FaPhone className="mr-2 flex-shrink-0" />
            <span className="flex-grow truncate">(+40) 723 705 702</span>
          </a>
          <a
            href="tel:+40771418581"
            className="text-sm text-[#000000] font-pontano-sans flex items-center mt-1 hover:underline w-full"
          >
            <FaPhone className="mr-2 flex-shrink-0" />
            <span className="flex-grow truncate">(+40) 771 418 581</span>
          </a>
          <a
            href="mailto:contact@fadeacademy.ro"
            className="text-sm text-[#000000] font-pontano-sans hover:underline flex items-center mt-1"
          >
            <FaEnvelope className="mr-2 flex-shrink-0" />
            <span className="flex-grow truncate text-[#000000]">
              contact@fadeacademy.ro
            </span>
          </a>
        </div>
        <div className="text-center">
          <p className="text-sm text-[#000000] font-pontano-sans mb-2">
            Lideri in industrie | Garantam excelenta
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.facebook.com/byCiprianUngureanu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#000000] hover:text-gray-300"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.instagram.com/ciprian_ungureanu_fadeacademy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#000000] hover:text-gray-300"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.tiktok.com/@byciprianungureanu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#000000] hover:text-gray-300"
            >
              <FaTiktok size={20} />
            </a>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xs text-[#000000] font-pontano-sans">
            © 2026 Usagi Technologies
          </p>
        </div>
      </div>
      <div className="border-t border-[#ededed] border-opacity-30 pt-4 mt-4">
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
          <a
            href="https://reclamatiisal.anpc.ro/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <Image
              src="/anpc-logo.webp"
              alt="ANPC Logo"
              width={120}
              height={60}
              className="h-auto max-h-16 w-auto object-contain"
            />
          </a>
          <a
            href="https://consumer-redress.ec.europa.eu/site-relocation_en?event=main.home.chooseLanguage"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <Image
              src="/litigii-logo.webp"
              alt="Consumer Redress EU Logo"
              width={120}
              height={60}
              className="h-auto max-h-16 w-auto object-contain"
            />
          </a>
          <a
            href="https://barber-store.ro/images/uploaded_files2/Comunicat_de_Presa_incepere_proiect_PNRR-Rever.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <Image
              src="/comunicat-ue-logo.webp"
              alt="Comunicat UE Logo"
              width={120}
              height={60}
              className="h-auto max-h-16 w-auto object-contain"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
