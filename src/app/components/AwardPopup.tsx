"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import gsap from "gsap";

const AwardPopup: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  useEffect(() => {
    // Check if user has already seen the popup
    const hasSeenPopup = localStorage.getItem("hasSeenAwardPopup");
    if (!hasSeenPopup) {
      // Show popup after a short delay for better UX
      setTimeout(() => {
        setShowPopup(true);
      }, 1500);
    }
  }, []);

  useEffect(() => {
    if (showPopup && modalRef.current) {
      // Animate popup entrance
      const ctx = gsap.context(() => {
        gsap.set([overlayRef.current, modalRef.current], { opacity: 0 });
        gsap.set(modalRef.current, { scale: 0.9, y: 30 });
        gsap.set([imageRef.current, textRef.current, buttonRef.current], {
          opacity: 0,
          y: 15,
        });

        const tl = gsap.timeline();
        tl.to(overlayRef.current, {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        })
          .to(
            modalRef.current,
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.5,
              ease: "back.out(1.2)",
            },
            "-=0.2"
          )
          .to(
            imageRef.current,
            {
              opacity: 1,
              y: 0,
              duration: 0.4,
              ease: "power2.out",
            },
            "-=0.2"
          )
          .to(
            textRef.current,
            {
              opacity: 1,
              y: 0,
              duration: 0.4,
              ease: "power2.out",
            },
            "-=0.3"
          )
          .to(
            buttonRef.current,
            {
              opacity: 1,
              y: 0,
              duration: 0.4,
              ease: "power2.out",
            },
            "-=0.3"
          );
      });

      return () => ctx.revert();
    }
  }, [showPopup]);

  const handleClose = () => {
    if (modalRef.current && overlayRef.current) {
      const tl = gsap.timeline({
        onComplete: () => {
          setShowPopup(false);
          localStorage.setItem("hasSeenAwardPopup", "true");
        },
      });

      tl.to([imageRef.current, textRef.current, buttonRef.current], {
        opacity: 0,
        y: -15,
        duration: 0.25,
        ease: "power2.in",
      })
        .to(
          modalRef.current,
          {
            opacity: 0,
            scale: 0.95,
            y: 20,
            duration: 0.25,
            ease: "power2.in",
          },
          "-=0.15"
        )
        .to(
          overlayRef.current,
          {
            opacity: 0,
            duration: 0.25,
            ease: "power2.in",
          },
          "-=0.15"
        );
    }
  };

  const handleEnroll = () => {
    localStorage.setItem("hasSeenAwardPopup", "true");
    router.push("/curs-frizerie-bucuresti");
  };

  if (!showPopup) {
    return null;
  }

  return (
    <>
      {/* Backdrop Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black bg-opacity-80 z-[100] backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal - Mobile First Design */}
      <div
        ref={modalRef}
        className="fixed inset-0 z-[101] flex items-center justify-center p-3 sm:p-4 pointer-events-none"
      >
        <div
          className="bg-white rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-[95vw] sm:max-w-lg md:max-w-2xl lg:max-w-4xl max-h-[95vh] overflow-y-auto pointer-events-auto relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-200 hover:bg-gray-300 active:bg-gray-400 flex items-center justify-center transition-colors duration-200 text-gray-700 font-bold text-xl sm:text-2xl touch-manipulation"
            aria-label="Închide"
          >
            ×
          </button>

          {/* Content - Mobile Optimized */}
          <div className="flex flex-col">
            {/* Image Section - Full Width on Mobile */}
            <div
              ref={imageRef}
              className="relative w-full h-48 sm:h-56 md:h-64 lg:h-80 bg-gradient-to-br from-[#023d82] to-[#0355a8] flex items-center justify-center p-4 sm:p-6"
            >
              <div className="relative w-full h-full max-w-full">
                <Image
                  src="/images/ungureanu2026-5.jpg"
                  alt="Premiu recunoaștere internațională - Ciprian Ungureanu"
                  fill
                  className="object-contain rounded-lg shadow-xl"
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                />
              </div>
            </div>

            {/* Text Section - Mobile Optimized */}
            <div
              ref={textRef}
              className="w-full p-5 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-[#ededed] to-white"
            >
              <div className="mb-4 sm:mb-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-stint-ultra-expanded text-[#023d82] mb-3 sm:mb-4 leading-tight">
                  Fapte nu vorbe.
                </h2>
                <p className="text-sm sm:text-base md:text-lg font-pontano-sans text-gray-700 mb-2">
                  Recunoaștere internațională pentru excelență
                </p>
                <p className="text-xs sm:text-sm md:text-base font-pontano-sans text-gray-600 mb-4 sm:mb-6">
                  Alătură-te cursului condus de un maestru recunoscut la nivel
                  mondial.
                </p>
              </div>

              <div className="border-l-4 border-[#023d82] pl-3 sm:pl-4 mb-4 sm:mb-6">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-familjen-grotesk font-bold text-[#023d82]">
                  Inscrie-te la cursul
                </p>
                <p className="text-xl sm:text-2xl md:text-3xl font-stint-ultra-expanded text-[#023d82] mt-1 sm:mt-2 leading-tight">
                  APRILIE - IULIE 2026
                </p>
              </div>

              {/* CTA Button - Mobile Optimized */}
              <button
                ref={buttonRef}
                onClick={handleEnroll}
                className="w-full bg-[#023d82] text-[#ededed] px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg md:text-xl font-stint-ultra-expanded hover:bg-[#034ea3] active:bg-[#023d82] active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl touch-manipulation"
              >
                Inscrie-te Acum
              </button>

              <p className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4 text-center font-pontano-sans">
                Locuri limitate • Garantăm excelența
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AwardPopup;
