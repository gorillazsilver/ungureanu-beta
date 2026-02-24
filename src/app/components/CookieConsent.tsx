"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const CookieConsent: React.FC = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Show popup after a small delay for better UX
      setTimeout(() => {
        setShowConsent(true);
      }, 500);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowConsent(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setShowConsent(false);
  };

  if (!showConsent) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#023d82] text-[#ededed] p-4 shadow-lg border-t-2 border-[#ededed]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm md:text-base font-pontano-sans">
            Site-ul nostru utilizează cookie-uri pentru a-ți îmbunătăți experiența și pentru a-ți afișa conținut și anunțuri relevante atunci când navighezi pe web. Continuă să navighezi pe site sau alege să accepți dacă ești de acord cu utilizarea cookie-urilor. Alternativ, poți alege tipurile de cookie-uri pe care ești de acord să le folosim.
          </p>
          <Link
            href="/politica-cookie-uri"
            className="text-xs md:text-sm text-[#ededed] underline hover:text-gray-300 mt-2 inline-block font-pontano-sans"
          >
            Aflati mai multe
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
          <button
            onClick={handleAccept}
            className="px-6 py-2 bg-[#ededed] text-[#023d82] rounded hover:bg-gray-200 transition-colors font-pontano-sans font-medium text-sm md:text-base whitespace-nowrap"
          >
            Permite Cookies
          </button>
          <button
            onClick={handleReject}
            className="px-6 py-2 bg-transparent border-2 border-[#ededed] text-[#ededed] rounded hover:bg-[#ededed] hover:text-[#023d82] transition-colors font-pontano-sans font-medium text-sm md:text-base whitespace-nowrap"
          >
            Refuza
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
