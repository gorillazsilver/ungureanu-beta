"use client";

import React from "react";
import Image from "next/image";
import { Heading, Highlight, Box } from "@chakra-ui/react";
import faderImage from "@/images/hero/cip-her.svg";
import { motion, useReducedMotion } from "framer-motion";

// Rotating conic-gradient border beam
const BorderBeam = ({
  duration = 6,
  colorFrom = "#79FD15",
  colorTo = "#0461ab",
  className = "",
}: {
  duration?: number;
  colorFrom?: string;
  colorTo?: string;
  className?: string;
}) => {
  return (
    <div
      className={`absolute inset-0 overflow-hidden rounded-2xl ${className}`}
    >
      <motion.div
        aria-hidden="true"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
        className="absolute -inset-[40%]"
        style={{
          background: `conic-gradient(from 0deg, ${colorFrom}, ${colorTo}, ${colorFrom})`,
        }}
      />
    </div>
  );
};

const Details: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 12 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative bg-black">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* soft glow */}
        <div className="absolute left-1/2 top-12 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-3xl opacity-25 bg-[#79FD15]" />
        {/* blue glow */}
        <div className="absolute -right-24 bottom-0 h-[520px] w-[520px] rounded-full blur-3xl opacity-15 bg-[#0461ab]" />
        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        {/* top fade */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black to-transparent" />
        {/* bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="relative grid grid-cols-1 lg:grid-cols-2 min-h-[90vh] lg:min-h-[60vh] gap-8 py-14 px-4 sm:px-6 lg:px-10"
      >
        {/* Image Section */}
        <motion.div
          variants={item}
          className="relative flex items-center justify-center pb-2 lg:pb-0"
        >
          {/* floating ring */}
          <motion.div
            aria-hidden="true"
            className="absolute -inset-6 sm:-inset-10 rounded-full blur-2xl opacity-30"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, rgba(121,253,21,0.55), transparent 55%), radial-gradient(circle at 70% 60%, rgba(4,97,171,0.45), transparent 55%)",
            }}
            animate={
              prefersReducedMotion
                ? undefined
                : { scale: [1, 1.04, 1], opacity: [0.22, 0.32, 0.22] }
            }
            transition={
              prefersReducedMotion
                ? undefined
                : { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }
          />

          <motion.div
            className="relative z-10"
            animate={
              prefersReducedMotion
                ? undefined
                : { y: [0, -8, 0], rotate: [0, 0.4, 0] }
            }
            transition={
              prefersReducedMotion
                ? undefined
                : { duration: 5.5, repeat: Infinity, ease: "easeInOut" }
            }
          >
            <Image
              src={faderImage}
              alt="Ciprian Ungureanu - Master barber - Curs frizerie incepatori"
              width={340}
              height={312}
              quality={100}
              priority
              className="object-contain drop-shadow-[0_18px_45px_rgba(0,0,0,0.55)]"
            />
          </motion.div>

          {/* little sparkles */}
          {!prefersReducedMotion && (
            <>
              <motion.span
                aria-hidden="true"
                className="absolute left-10 top-10 h-2 w-2 rounded-full bg-[#79FD15]"
                animate={{ opacity: [0.2, 1, 0.2], scale: [0.9, 1.4, 0.9] }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.span
                aria-hidden="true"
                className="absolute right-14 top-24 h-1.5 w-1.5 rounded-full bg-white/80"
                animate={{
                  opacity: [0.15, 0.8, 0.15],
                  scale: [0.9, 1.35, 0.9],
                }}
                transition={{
                  duration: 2.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
              />
              <motion.span
                aria-hidden="true"
                className="absolute right-20 bottom-16 h-2 w-2 rounded-full bg-[#0461ab]"
                animate={{ opacity: [0.2, 0.95, 0.2], scale: [0.9, 1.4, 0.9] }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.6,
                }}
              />
            </>
          )}
        </motion.div>

        {/* Text/Card Section */}
        <motion.div
          variants={item}
          className="flex flex-col justify-center items-center lg:items-start z-20 w-full"
        >
          <motion.div
            whileHover={prefersReducedMotion ? undefined : { y: -2 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="group relative w-full max-w-[560px]"
          >
            {/* Animated border */}
            {!prefersReducedMotion && (
              <BorderBeam
                duration={7}
                colorFrom="#79FD15"
                colorTo="#0461ab"
                className="opacity-80"
              />
            )}

            {/* Inner card */}
            <div className="relative rounded-2xl p-[1.5px]">
              <div className="relative rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 shadow-[0_18px_60px_rgba(0,0,0,0.6)] overflow-hidden">
                {/* top shine */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[640px] -translate-x-1/2 rotate-6 opacity-[0.22]"
                  style={{
                    background:
                      "linear-gradient(to right, transparent, rgba(121,253,21,0.55), rgba(4,97,171,0.35), transparent)",
                    filter: "blur(18px)",
                  }}
                />

                {/* subtle moving noise */}
                {!prefersReducedMotion && (
                  <motion.div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
                    style={{
                      backgroundImage:
                        'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/></filter><rect width="120" height="120" filter="url(%23n)" opacity="0.35"/></svg>\')',
                      backgroundSize: "180px 180px",
                    }}
                    animate={{ backgroundPosition: ["0px 0px", "180px 180px"] }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                )}

                <Box className="relative p-6 sm:p-8 z-10 w-full">
                  <motion.h1
                    variants={item}
                    className="text-5xl sm:text-6xl md:text-7xl text-[#79FD15] mb-5 text-center lg:text-left passions-conflict-regular leading-[0.95] tracking-tight"
                  >
                    Debutul ideal in cariera de frizer
                  </motion.h1>

                  <motion.div variants={item}>
                    <Heading
                      as="h2"
                      className="text-sm sm:text-base font-pontano-sans font-semibold text-center lg:text-left"
                      lineHeight="tall"
                    >
                      <Highlight
                        query="PROGRAM CURSURI FRIZERIE"
                        styles={{
                          color: "#000000",
                          px: "2",
                          py: "1",
                          bg: "#79FD15",
                          rounded: "full",
                        }}
                      >
                        PROGRAM CURSURI FRIZERIE
                      </Highlight>
                    </Heading>
                  </motion.div>

                  <motion.p
                    variants={item}
                    className="mt-5 text-[15px] sm:text-base text-[#79FD15] text-center lg:text-left leading-relaxed font-pontano-sans break-words"
                  >
                    <span className="inline-block border-b-2 border-[#79FD15]/80 pb-1">
                      Locurile sunt limitate! Rezervă-ți acum locul și începe-ți
                      cariera în frizerie împreună cu cei mai buni!
                    </span>
                  </motion.p>

                  <motion.div
                    variants={item}
                    className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3"
                  >
                    <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                      <p className="text-xs uppercase tracking-widest text-white">
                        Perioada curs
                      </p>
                      <p className="mt-1 text-sm sm:text-base text-[#79FD15] text-right font-pontano-sans">
                        14 <span className="font-extrabold">APRILIE</span> 2026
                        – 3 <span className="font-extrabold">IULIE</span> 2026
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                      <p className="text-xs uppercase tracking-widest text-white">
                        Durata totală
                      </p>
                      <p className="mt-1 text-sm sm:text-base text-[#79FD15] font-pontano-sans">
                        2 luni jumate /{" "}
                        <span className="font-extrabold">12 săptămâni</span>
                      </p>
                    </div>
                  </motion.div>

                  {/* Micro CTA hint (no button, but wow effect) */}
                  <motion.div
                    variants={item}
                    className="mt-6 flex items-center justify-center lg:justify-start gap-3"
                  >
                    <span className="relative inline-flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#79FD15] opacity-60" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#79FD15]" />
                    </span>
                    <p className="text-xs sm:text-sm text-white/70 font-pontano-sans">
                      Înscrierile sunt deschise — locuri limitate.
                    </p>
                  </motion.div>
                </Box>

                {/* hover gradient border glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "radial-gradient(700px circle at 20% 10%, rgba(121,253,21,0.20), transparent 55%), radial-gradient(800px circle at 85% 65%, rgba(4,97,171,0.16), transparent 55%)",
                  }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Details;
