"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { cubicBezier, motion, useInView } from "framer-motion";

// Images (local imports)
import aiaImage from "@/images/aia121.jpeg";
import faraonusImage from "@/images/stupari.jpg"; // used for both Robert & Alberto (for now)
import andreiiImage from "@/images/andrei14.jpeg";
import antonioImage from "@/images/antonio121.jpeg";

// Accent
const ACCENT = "#79FD15";

// Motion variants
const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: cubicBezier(0.16, 1, 0.3, 1) },
  },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.12 },
  },
};

// Border beam (subtle animated accent line)
const BorderBeam = ({ className = "" }: { className?: string }) => (
  <div
    className={`pointer-events-none absolute inset-0 overflow-hidden rounded-2xl ${className}`}
  >
    <motion.div
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{ duration: 2.6, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0"
      style={{
        background:
          "conic-gradient(from 180deg, rgba(121,253,21,0.0), rgba(121,253,21,0.65), rgba(121,253,21,0.0), rgba(121,253,21,0.25), rgba(121,253,21,0.0))",
      }}
    />
    <div className="absolute inset-[2px] rounded-2xl bg-black/80" />
  </div>
);

// Animated Counter
const AnimatedCounter = ({
  end,
  duration = 1.8,
}: {
  end: number;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const counterRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!counterRef.current) return;

    const el = counterRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          let start = 0;
          const fps = 60;
          const increment = end / (duration * fps);

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 1000 / fps);
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration, hasStarted]);

  return <span ref={counterRef}>{count}</span>;
};

// Reusable UI pieces
const SectionTitle = ({
  kicker,
  title,
  subtitle,
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
}) => (
  <div className="text-center mb-8 sm:mb-12 md:mb-16 px-2">
    {kicker ? (
      <div
        className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-4 border"
        style={{
          borderColor: "rgba(121,253,21,0.35)",
          background: "rgba(121,253,21,0.08)",
        }}
      >
        <span className="text-xs sm:text-sm font-pontano-sans tracking-wide text-white/90">
          {kicker}
        </span>
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: ACCENT, boxShadow: `0 0 18px ${ACCENT}` }}
        />
      </div>
    ) : null}

    <h2 className="font-stint-ultra-expanded text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-tight">
      <span className="drop-shadow-[0_0_20px_rgba(0,0,0,0.75)]">{title}</span>
      <span className="ml-2" style={{ color: ACCENT }}>
        .
      </span>
    </h2>

    {subtitle ? (
      <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg font-pontano-sans text-white/80 max-w-3xl mx-auto">
        {subtitle}
      </p>
    ) : null}
  </div>
);

const GlassCard = ({
  children,
  accent = false,
  className = "",
}: {
  children: React.ReactNode;
  accent?: boolean;
  className?: string;
}) => (
  <div
    className={`relative overflow-hidden rounded-2xl border shadow-[0_16px_55px_rgba(0,0,0,0.55)] ${className}`}
    style={{
      borderColor: accent ? "rgba(0,0,0,0.35)" : "rgba(121,253,21,0.18)",
      background: accent ? ACCENT : "rgba(255,255,255,0.04)",
    }}
  >
    {!accent ? (
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(900px 350px at 20% 0%, rgba(121,253,21,0.18), rgba(0,0,0,0) 60%), radial-gradient(700px 260px at 85% 15%, rgba(121,253,21,0.12), rgba(0,0,0,0) 55%)",
        }}
      />
    ) : (
      <div
        className="absolute inset-0 opacity-25"
        style={{
          background:
            "radial-gradient(800px 320px at 20% 0%, rgba(0,0,0,0.35), rgba(0,0,0,0) 60%)",
        }}
      />
    )}

    <div className="relative z-10">{children}</div>
  </div>
);

export default function CursSecundarFrizerie() {
  const heroRef = useRef<HTMLDivElement>(null);
  const teachersRef = useRef<HTMLDivElement>(null);
  const assistantsRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const priceRef = useRef<HTMLDivElement>(null);

  const teachersInView = useInView(teachersRef, { once: true, amount: 0.25 });
  const assistantsInView = useInView(assistantsRef, {
    once: true,
    amount: 0.25,
  });
  const detailsInView = useInView(detailsRef, { once: true, amount: 0.25 });
  const priceInView = useInView(priceRef, { once: true, amount: 0.25 });

  return (
    <main className="flex flex-col overflow-hidden bg-black text-white">
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative min-h-[100svh] flex items-center justify-center px-4 pt-10 pb-10 sm:pt-12 sm:pb-14"
      >
        {/* Background image (3-muschetari) */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/3-muschetari.jpeg"
            alt="Fade Academy — spirit de echipă"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* layered overlays */}
          <div className="absolute inset-0 bg-black/70" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(900px 520px at 50% 20%, rgba(121,253,21,0.18), rgba(0,0,0,0) 60%), linear-gradient(to bottom, rgba(0,0,0,0.65), rgba(0,0,0,0.85) 70%, rgba(0,0,0,0.95))",
            }}
          />
          {/* subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.14]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
              backgroundSize: "34px 34px",
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-center"
          >
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 border mb-6"
              style={{
                borderColor: "rgba(121,253,21,0.35)",
                background: "rgba(0,0,0,0.35)",
                backdropFilter: "blur(10px)",
              }}
            >
              <span className="text-xs sm:text-sm font-pontano-sans text-white/85 tracking-wide">
                Fade Academy București • Curs Frizerie pentru începători
              </span>
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: ACCENT, boxShadow: `0 0 20px ${ACCENT}` }}
              />
            </div>

            <h1 className="font-stint-ultra-expanded text-3xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.05] drop-shadow-[0_0_25px_rgba(0,0,0,0.75)]">
              CURS FRIZERIE
              <span className="block mt-2 sm:mt-3 text-xl sm:text-2xl md:text-4xl lg:text-5xl text-white/85">
                pentru începători
                <span style={{ color: ACCENT }}>.</span>
              </span>
            </h1>

            <p className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg font-pontano-sans text-white/85 max-w-4xl mx-auto leading-relaxed">
              Povestea noastră începe simplu: cu oameni care au ales să nu
              renunțe. Practică după practică, greșeală după greșeală, până când
              mâna capătă siguranță iar ochiul vede proporțiile dintr-o privire.
              În Fade Academy, „talentul” e doar scânteia —{" "}
              <span style={{ color: ACCENT }}>perseverența</span> e
              combustibilul.
              <br />
              <br />
              Vei învăța într-un cadru profesionist, cu profesori formați în
              spiritul disciplinei și al standardelor ridicate — cu o cultură de
              lucru care păstrează legătura cu mentoratul și rigoarea inspirate
              de Ciprian Ungureanu.
            </p>
          </motion.div>

          {/* Hero Stat Cards */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
            className="mt-10 sm:mt-12"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 max-w-4xl mx-auto">
              <GlassCard className="p-5 sm:p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-xs font-pontano-sans text-white/70">
                      Preț curs
                    </div>
                    <div className="mt-1 font-stint-ultra-expanded text-3xl sm:text-4xl">
                      <span style={{ color: ACCENT }}>
                        <AnimatedCounter end={3500} />
                      </span>{" "}
                      <span className="text-white/85 text-xl sm:text-2xl">
                        lei
                      </span>
                    </div>
                  </div>
                  <div
                    className="w-10 h-10 rounded-xl grid place-items-center border"
                    style={{
                      borderColor: "rgba(121,253,21,0.25)",
                      background: "rgba(121,253,21,0.08)",
                    }}
                  >
                    <span style={{ color: ACCENT }}>✂️</span>
                  </div>
                </div>
                <div className="mt-3 text-sm font-pontano-sans text-white/70">
                  opțiune reducere pentru plată integrală
                </div>
              </GlassCard>

              <GlassCard className="p-5 sm:p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-xs font-pontano-sans text-white/70">
                      Durată
                    </div>
                    <div className="mt-1 font-stint-ultra-expanded text-3xl sm:text-4xl">
                      <span style={{ color: ACCENT }}>
                        <AnimatedCounter end={10} />
                      </span>{" "}
                      <span className="text-white/85 text-xl sm:text-2xl">
                        săpt.
                      </span>
                    </div>
                  </div>
                  <div
                    className="w-10 h-10 rounded-xl grid place-items-center border"
                    style={{
                      borderColor: "rgba(121,253,21,0.25)",
                      background: "rgba(121,253,21,0.08)",
                    }}
                  >
                    <span style={{ color: ACCENT }}>📆</span>
                  </div>
                </div>
                <div className="mt-3 text-sm font-pontano-sans text-white/70">
                  ritm susținut, focus pe practică
                </div>
              </GlassCard>

              <GlassCard accent className="p-5 sm:p-6">
                <div className="flex items-start justify-between">
                  <div className="text-black">
                    <div className="text-xs font-pontano-sans text-black/70">
                      Perioadă
                    </div>
                    <div className="mt-1 font-stint-ultra-expanded text-2xl sm:text-3xl leading-tight">
                      14 Aprilie – 3 Iulie
                    </div>
                    <div className="mt-1 text-sm font-pontano-sans text-black/80">
                      2026
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-xl grid place-items-center bg-black/10">
                    <span className="text-black">🎯</span>
                  </div>
                </div>
                <div className="mt-3 text-sm font-pontano-sans text-black/80">
                  locuri limitate • înscrieri deschise
                </div>
              </GlassCard>
            </div>

            {/* CTA row */}
            <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center px-1">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() =>
                  window.open("https://wa.me/40723403403", "_blank")
                }
                className="rounded-2xl px-6 py-3 font-pontano-sans font-bold text-black shadow-[0_18px_60px_rgba(0,0,0,0.6)]"
                style={{
                  background: ACCENT,
                }}
              >
                Rezervă pe WhatsApp
              </motion.button>

              <a
                href="#pret-si-contact"
                className="rounded-2xl px-6 py-3 font-pontano-sans font-semibold text-white/90 border text-center"
                style={{
                  borderColor: "rgba(121,253,21,0.30)",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                Vezi preț & rate
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TEACHERS */}
      <section ref={teachersRef} className="py-14 sm:py-16 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            kicker="Top-level training • standarde reale, fără scurtături"
            title="Profesorii noștri"
            subtitle="O echipă construită pe disciplină, practică și mentalitatea „faci de 100 de ori până iese perfect”."
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            animate={teachersInView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6"
          >
            {/* Teacher: Teodora */}
            <motion.div variants={fadeInUp} className="lg:col-span-1">
              <div className="relative group">
                <BorderBeam className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <GlassCard className="p-6 sm:p-7">
                  <div className="flex flex-col items-center text-center">
                    <div
                      className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border"
                      style={{ borderColor: "rgba(121,253,21,0.35)" }}
                    >
                      <Image
                        src={aiaImage}
                        alt="Teodora — Profesor"
                        fill
                        className="object-cover object-[center_10%]"
                        priority
                      />
                    </div>

                    <div className="mt-4">
                      <div
                        className="font-stint-ultra-expanded text-2xl"
                        style={{ color: ACCENT }}
                      >
                        TEODORA
                      </div>
                      <div className="mt-1 text-sm font-pontano-sans text-white/75">
                        Profesor • tehnici moderne + fundamente solide
                      </div>
                    </div>

                    <p className="mt-4 text-sm sm:text-base font-pontano-sans text-white/80 leading-relaxed">
                      Parcursul ei e despre consecvență: ore de practică,
                      feedback aplicat, apoi încă o rundă — până când detaliul
                      devine reflex. În școală promovează metodologia pe care a
                      internalizat-o din cultura de mentorat inspirată de
                      Ciprian Ungureanu: claritate în pași, ordine în execuție
                      și respect pentru geometrie.
                    </p>

                    <div className="mt-5 w-full grid grid-cols-2 gap-3">
                      <div
                        className="rounded-xl p-3 border"
                        style={{ borderColor: "rgba(121,253,21,0.18)" }}
                      >
                        <div className="text-xs text-white/70 font-pontano-sans">
                          Focus
                        </div>
                        <div
                          className="mt-1 text-sm font-pontano-sans"
                          style={{ color: ACCENT }}
                        >
                          fade curat
                        </div>
                      </div>
                      <div
                        className="rounded-xl p-3 border"
                        style={{ borderColor: "rgba(121,253,21,0.18)" }}
                      >
                        <div className="text-xs text-white/70 font-pontano-sans">
                          Stil
                        </div>
                        <div
                          className="mt-1 text-sm font-pontano-sans"
                          style={{ color: ACCENT }}
                        >
                          modern + precis
                        </div>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </motion.div>

            {/* Teacher: Robert Micu */}
            <motion.div variants={fadeInUp} className="lg:col-span-1">
              <div className="relative group">
                <BorderBeam className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <GlassCard className="p-6 sm:p-7">
                  <div className="flex flex-col items-center text-center">
                    <div
                      className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border"
                      style={{ borderColor: "rgba(121,253,21,0.35)" }}
                    >
                      <Image
                        src={faraonusImage}
                        alt="Robert Micu — Profesor"
                        fill
                        className="object-cover object-[center_12%]"
                        priority
                      />
                    </div>

                    <div className="mt-4">
                      <div
                        className="font-stint-ultra-expanded text-2xl"
                        style={{ color: ACCENT }}
                      >
                        ROBERT MICU
                      </div>
                      <div className="mt-1 text-sm font-pontano-sans text-white/75">
                        Profesor • structură, disciplină, performanță
                      </div>
                    </div>

                    <p className="mt-4 text-sm sm:text-base font-pontano-sans text-white/80 leading-relaxed">
                      Robert predă „ca la carte”, dar fără rigiditate: îți arată
                      de ce faci fiecare mișcare, cum construiești tranziția și
                      cum păstrezi proporțiile. Povestea lui e despre
                      perseverență: perioade lungi de practică, standarde
                      ridicate și o etică de lucru alimentată de ideea că
                      fiecare client e o probă de seriozitate. În academie, duce
                      mai departe mentalitatea de școală serioasă — aceeași
                      linie de rigoare și mentorat conectată la Ciprian
                      Ungureanu.
                    </p>

                    <div className="mt-5 w-full grid grid-cols-2 gap-3">
                      <div
                        className="rounded-xl p-3 border"
                        style={{ borderColor: "rgba(121,253,21,0.18)" }}
                      >
                        <div className="text-xs text-white/70 font-pontano-sans">
                          Special
                        </div>
                        <div
                          className="mt-1 text-sm font-pontano-sans"
                          style={{ color: ACCENT }}
                        >
                          clipper control
                        </div>
                      </div>
                      <div
                        className="rounded-xl p-3 border"
                        style={{ borderColor: "rgba(121,253,21,0.18)" }}
                      >
                        <div className="text-xs text-white/70 font-pontano-sans">
                          Mindset
                        </div>
                        <div
                          className="mt-1 text-sm font-pontano-sans"
                          style={{ color: ACCENT }}
                        >
                          repetă → reușește
                        </div>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </motion.div>

            {/* Teacher: Alberto Sarbu */}
            <motion.div variants={fadeInUp} className="lg:col-span-1">
              <div className="relative group">
                <BorderBeam className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <GlassCard className="p-6 sm:p-7">
                  <div className="flex flex-col items-center text-center">
                    <div
                      className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border"
                      style={{ borderColor: "rgba(121,253,21,0.35)" }}
                    >
                      <Image
                        src={faraonusImage}
                        alt="Alberto Sârbu — Profesor"
                        fill
                        className="object-cover object-[center_12%]"
                        priority
                      />
                    </div>

                    <div className="mt-4">
                      <div
                        className="font-stint-ultra-expanded text-2xl"
                        style={{ color: ACCENT }}
                      >
                        ALBERTO SÂRBU
                      </div>
                      <div className="mt-1 text-sm font-pontano-sans text-white/75">
                        Profesor • finețe, simț estetic, finisaj premium
                      </div>
                    </div>

                    <p className="mt-4 text-sm sm:text-base font-pontano-sans text-white/80 leading-relaxed">
                      Alberto e omul detaliilor: muchii, texturi, „finish-ul”
                      care transformă un tuns bun într-unul memorabil. Îți
                      explică simplu cum să vezi linia, cum să păstrezi
                      curățenia în fade și cum să nu „grăbești” etapele. Vine cu
                      o abordare calmă, dar exigentă — aceeași cultură de
                      standard ridicat pe care Fade Academy o promovează, cu
                      rădăcini în mentorat și disciplină asociate școlii și
                      influenței lui Ciprian Ungureanu.
                    </p>

                    <div className="mt-5 w-full grid grid-cols-2 gap-3">
                      <div
                        className="rounded-xl p-3 border"
                        style={{ borderColor: "rgba(121,253,21,0.18)" }}
                      >
                        <div className="text-xs text-white/70 font-pontano-sans">
                          Focus
                        </div>
                        <div
                          className="mt-1 text-sm font-pontano-sans"
                          style={{ color: ACCENT }}
                        >
                          finishing
                        </div>
                      </div>
                      <div
                        className="rounded-xl p-3 border"
                        style={{ borderColor: "rgba(121,253,21,0.18)" }}
                      >
                        <div className="text-xs text-white/70 font-pontano-sans">
                          Stil
                        </div>
                        <div
                          className="mt-1 text-sm font-pontano-sans"
                          style={{ color: ACCENT }}
                        >
                          clean & sharp
                        </div>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ASSISTANTS */}
      <section ref={assistantsRef} className="py-14 sm:py-16 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            kicker="Suport real în sală • feedback rapid • ritm bun"
            title="Asistenții noștri"
            subtitle="Îți stau aproape în practică: poziție, unghiuri, control și corecții — fix când ai nevoie."
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            animate={assistantsInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp}>
              <GlassCard className="p-6 sm:p-7">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                  <div
                    className="relative w-20 h-20 sm:w-18 sm:h-18 rounded-2xl overflow-hidden border"
                    style={{ borderColor: "rgba(121,253,21,0.25)" }}
                  >
                    <Image
                      src={andreiiImage}
                      alt="Andrei — Asistent"
                      fill
                      className="object-cover object-[center_20%]"
                      priority
                    />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <div
                      className="font-stint-ultra-expanded text-xl"
                      style={{ color: ACCENT }}
                    >
                      ANDREI
                    </div>
                    <div className="mt-1 text-sm font-pontano-sans text-white/75">
                      Asistent tehnic • tehnici moderne
                    </div>
                    <p className="mt-3 text-sm font-pontano-sans text-white/80 leading-relaxed">
                      Te ajută să-ți stabilizezi mâna și să „simți” tranziția:
                      clipper control, pieptăn, verificări rapide și
                      micro-corecții care fac diferența.
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2 justify-center sm:justify-start">
                      <span
                        className="px-3 py-1 rounded-full text-xs font-pontano-sans border"
                        style={{
                          borderColor: "rgba(121,253,21,0.22)",
                          color: ACCENT,
                        }}
                      >
                        control
                      </span>
                      <span
                        className="px-3 py-1 rounded-full text-xs font-pontano-sans border"
                        style={{
                          borderColor: "rgba(121,253,21,0.22)",
                          color: ACCENT,
                        }}
                      >
                        ghidaj unghiuri
                      </span>
                      <span
                        className="px-3 py-1 rounded-full text-xs font-pontano-sans border"
                        style={{
                          borderColor: "rgba(121,253,21,0.22)",
                          color: ACCENT,
                        }}
                      >
                        practică
                      </span>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <GlassCard className="p-6 sm:p-7">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                  <div
                    className="relative w-20 h-20 sm:w-18 sm:h-18 rounded-2xl overflow-hidden border"
                    style={{ borderColor: "rgba(121,253,21,0.25)" }}
                  >
                    <Image
                      src={antonioImage}
                      alt="Antonio — Asistent"
                      fill
                      className="object-cover object-[center_15%]"
                      priority
                    />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <div
                      className="font-stint-ultra-expanded text-xl"
                      style={{ color: ACCENT }}
                    >
                      ANTONIO
                    </div>
                    <div className="mt-1 text-sm font-pontano-sans text-white/75">
                      Asistent tehnic • fundamente clasice
                    </div>
                    <p className="mt-3 text-sm font-pontano-sans text-white/80 leading-relaxed">
                      Te ține pe traseu: pași corecți, curățenie pe contur, ritm
                      de lucru și disciplină în execuție. Ideal când vrei să
                      fixezi baza.
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2 justify-center sm:justify-start">
                      <span
                        className="px-3 py-1 rounded-full text-xs font-pontano-sans border"
                        style={{
                          borderColor: "rgba(121,253,21,0.22)",
                          color: ACCENT,
                        }}
                      >
                        contur
                      </span>
                      <span
                        className="px-3 py-1 rounded-full text-xs font-pontano-sans border"
                        style={{
                          borderColor: "rgba(121,253,21,0.22)",
                          color: ACCENT,
                        }}
                      >
                        bază solidă
                      </span>
                      <span
                        className="px-3 py-1 rounded-full text-xs font-pontano-sans border"
                        style={{
                          borderColor: "rgba(121,253,21,0.22)",
                          color: ACCENT,
                        }}
                      >
                        finishing
                      </span>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* DETAILS */}
      <section ref={detailsRef} className="py-14 sm:py-16 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            kicker="Curriculum practic • pași clari • progres vizibil"
            title="Detalii curs"
            subtitle="Am făcut totul ușor de urmărit: ce înveți, cum exersezi, unde vii și ce îți trebuie."
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            animate={detailsInView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6"
          >
            <motion.div variants={fadeInUp} className="space-y-5">
              <GlassCard className="p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div
                      className="font-stint-ultra-expanded text-xl"
                      style={{ color: ACCENT }}
                    >
                      📅 Perioada cursului
                    </div>
                    <div className="mt-4 space-y-2 text-sm sm:text-base font-pontano-sans text-white/80">
                      <p>
                        <strong className="text-white">Perioada:</strong>{" "}
                        Aprilie – Iulie 2026
                      </p>
                      <p>
                        <strong className="text-white">Începere:</strong> 14
                        Aprilie 2026
                      </p>
                      <p>
                        <strong className="text-white">Durată:</strong> ~10
                        săptămâni
                      </p>
                      <p>
                        <strong className="text-white">Diplomă:</strong>{" "}
                        recunoscută național și internațional
                      </p>
                    </div>
                  </div>
                  <div
                    className="w-11 h-11 rounded-2xl border grid place-items-center"
                    style={{
                      borderColor: "rgba(121,253,21,0.22)",
                      background: "rgba(121,253,21,0.08)",
                    }}
                  >
                    <span style={{ color: ACCENT }}>⏱️</span>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div
                      className="font-stint-ultra-expanded text-xl"
                      style={{ color: ACCENT }}
                    >
                      ⏰ Program
                    </div>
                    <div className="mt-4 space-y-2 text-sm sm:text-base font-pontano-sans text-white/80">
                      <p>
                        <strong className="text-white">Teorie:</strong> 6
                        ore/săptămână (în funcție de grupe)
                      </p>
                      <p>
                        <strong className="text-white">Practică:</strong> 12:00
                        – 18:00
                      </p>
                      <p>
                        <strong className="text-white">Zile practică:</strong>{" "}
                        Luni – Joi
                      </p>
                      <p>
                        <strong className="text-white">
                          Locație practică:
                        </strong>{" "}
                        salonul nostru
                      </p>
                    </div>
                  </div>
                  <div
                    className="w-11 h-11 rounded-2xl border grid place-items-center"
                    style={{
                      borderColor: "rgba(121,253,21,0.22)",
                      background: "rgba(121,253,21,0.08)",
                    }}
                  >
                    <span style={{ color: ACCENT }}>📍</span>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div
                      className="font-stint-ultra-expanded text-xl"
                      style={{ color: ACCENT }}
                    >
                      🗺️ Locație
                    </div>
                    <div className="mt-4 text-sm sm:text-base font-pontano-sans text-white/80">
                      <p>
                        <strong className="text-white">
                          București, Sector 2
                        </strong>
                      </p>
                      <p>Șos. Pantelimon nr. 16</p>
                    </div>
                  </div>
                  <div
                    className="w-11 h-11 rounded-2xl border grid place-items-center"
                    style={{
                      borderColor: "rgba(121,253,21,0.22)",
                      background: "rgba(121,253,21,0.08)",
                    }}
                  >
                    <span style={{ color: ACCENT }}>🧭</span>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-5">
              <GlassCard className="p-6 sm:p-7">
                <div
                  className="font-stint-ultra-expanded text-xl"
                  style={{ color: ACCENT }}
                >
                  📚 Ce vei învăța
                </div>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base font-pontano-sans text-white/80">
                  {[
                    "Tunsori personalizate adaptate fizionomiei",
                    "Tehnici clasice (foarfecă + pieptăn)",
                    "Tunsori cu mașina de tuns",
                    "Clipper over comb",
                    "Skin fade + geometrie",
                    "Rasul bărbii cu briciul",
                    "Spălarea părului + îngrijirea scalpului",
                    "Styling și tehnici profesionale",
                    "Masaj facial și capilar",
                    "Noțiuni de geometrie aplicată",
                  ].map((x) => (
                    <div
                      key={x}
                      className="rounded-xl border px-4 py-3"
                      style={{
                        borderColor: "rgba(121,253,21,0.16)",
                        background: "rgba(255,255,255,0.03)",
                      }}
                    >
                      <span style={{ color: ACCENT }}>✔</span>{" "}
                      <span className="ml-2">{x}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>

              <GlassCard className="p-6 sm:p-7">
                <div
                  className="font-stint-ultra-expanded text-xl"
                  style={{ color: ACCENT }}
                >
                  🛠️ Echipamente
                </div>
                <div className="mt-4 space-y-2 text-sm sm:text-base font-pontano-sans text-white/80">
                  <p>
                    • Fiecare cursant are propriile ustensile (se pot
                    achiziționa cu reducere).
                  </p>
                  <p>• Academia are ustensile pentru practică în sală.</p>
                  <p>
                    • Practică pe cap de manechin + modele umane (când e
                    posibil).
                  </p>
                </div>
              </GlassCard>

              <GlassCard className="p-6 sm:p-7">
                <div
                  className="font-stint-ultra-expanded text-xl"
                  style={{ color: ACCENT }}
                >
                  📄 Acte necesare
                </div>
                <div className="mt-4 space-y-1 text-xs sm:text-sm font-pontano-sans text-white/80">
                  <p>• Copie certificat de naștere</p>
                  <p>• Copie carte de identitate</p>
                  <p>• Copie certificat de căsătorie (dacă este cazul)</p>
                  <p>• Copie diplomă de studii (minim 8 clase)</p>
                  <p>• Aviz medical pentru aptitudine</p>
                  <p className="mt-2 font-bold" style={{ color: ACCENT }}>
                    ⚠ Vârsta minimă: 16 ani
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PRICE & CONTACT */}
      <section
        id="pret-si-contact"
        ref={priceRef}
        className="py-14 sm:py-16 md:py-20 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            kicker="Transparent • simplu • fără surprize"
            title="Preț și contact"
            subtitle="Alege varianta potrivită (integral sau în rate) și rezervă-ți locul."
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            animate={priceInView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6"
          >
            {/* Price */}
            <motion.div variants={fadeInUp}>
              <div className="relative group">
                <BorderBeam className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <GlassCard className="p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div
                        className="font-stint-ultra-expanded text-2xl"
                        style={{ color: ACCENT }}
                      >
                        💰 Costuri și plăți
                      </div>
                      <div
                        className="mt-4 rounded-2xl p-5 border"
                        style={{
                          borderColor: "rgba(121,253,21,0.18)",
                          background: "rgba(255,255,255,0.03)",
                        }}
                      >
                        <div className="text-sm font-pontano-sans text-white/70">
                          Preț standard
                        </div>
                        <div
                          className="mt-1 font-stint-ultra-expanded text-4xl sm:text-5xl"
                          style={{ color: ACCENT }}
                        >
                          3500{" "}
                          <span className="text-white/85 text-2xl sm:text-3xl">
                            lei
                          </span>
                        </div>
                      </div>

                      <div className="mt-4">
                        <GlassCard accent className="p-5">
                          <div className="text-black">
                            <div className="text-sm font-pontano-sans text-black/70">
                              Reducere 10% (plată integrală)
                            </div>
                            <div className="mt-1 font-stint-ultra-expanded text-4xl">
                              3150{" "}
                              <span className="text-black/80 text-2xl">
                                lei
                              </span>
                            </div>
                          </div>
                        </GlassCard>
                      </div>

                      <div
                        className="mt-5 border-t pt-5"
                        style={{ borderColor: "rgba(121,253,21,0.14)" }}
                      >
                        <div className="font-bold font-pontano-sans">
                          Plată în rate:
                        </div>
                        <div className="mt-2 space-y-1 text-sm sm:text-base font-pontano-sans text-white/80">
                          <p>• 1.000 lei – rezervarea locului</p>
                          <p>• 1.500 lei – la începutul cursului</p>
                          <p>• 1.000 lei – la jumătatea cursului</p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="hidden sm:grid w-12 h-12 rounded-2xl border place-items-center"
                      style={{
                        borderColor: "rgba(121,253,21,0.22)",
                        background: "rgba(121,253,21,0.08)",
                      }}
                    >
                      <span style={{ color: ACCENT }}>💳</span>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div variants={fadeInUp} className="space-y-5">
              <GlassCard className="p-6 sm:p-7">
                <div
                  className="font-stint-ultra-expanded text-2xl"
                  style={{ color: ACCENT }}
                >
                  📞 Informații și înscrieri
                </div>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { tel: "0723403403", label: "0723 403 403" },
                    { tel: "0723705702", label: "0723 705 702" },
                    { tel: "0771418581", label: "0771 418 581" },
                  ].map((p) => (
                    <a
                      key={p.tel}
                      href={`tel:${p.tel}`}
                      className="rounded-2xl px-4 py-3 border text-center font-pontano-sans font-semibold transition-transform active:scale-[0.98]"
                      style={{
                        borderColor: "rgba(121,253,21,0.20)",
                        background: "rgba(255,255,255,0.03)",
                        color: "rgba(255,255,255,0.92)",
                      }}
                    >
                      <span style={{ color: ACCENT }}>📞</span> {p.label}
                    </a>
                  ))}
                </div>

                <div
                  className="mt-5 border-t pt-5"
                  style={{ borderColor: "rgba(121,253,21,0.14)" }}
                >
                  <div className="font-bold font-pontano-sans mb-2">
                    Cont bancar:
                  </div>
                  <div className="text-xs sm:text-sm font-pontano-sans text-white/80 space-y-1">
                    <p>
                      <strong className="text-white">Beneficiar:</strong> SC
                      Anto Perfect Style SRL
                    </p>
                    <p className="break-all">
                      <strong className="text-white">IBAN:</strong>{" "}
                      RO53BTRLRONCRT0P67302901
                    </p>
                  </div>
                </div>

                <div
                  className="mt-5 rounded-2xl border p-4"
                  style={{
                    borderColor: "rgba(121,253,21,0.18)",
                    background: "rgba(121,253,21,0.06)",
                  }}
                >
                  <p className="text-xs sm:text-sm font-pontano-sans text-white/80">
                    <span style={{ color: ACCENT, fontWeight: 700 }}>
                      ⚠ Politica de anulare:
                    </span>{" "}
                    cu două săptămâni înainte de începerea cursului, avansul nu
                    mai poate fi returnat.
                  </p>
                </div>
              </GlassCard>

              <GlassCard accent className="p-6 sm:p-7">
                <div className="text-black text-center">
                  <div className="font-stint-ultra-expanded text-2xl sm:text-3xl">
                    🎯 Locurile sunt limitate!
                  </div>
                  <p className="mt-3 font-pontano-sans text-black/80">
                    Rezervă-ți locul și începe-ți cariera cu o bază serioasă,
                    într-o școală care pune accent pe practică și standard.
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() =>
                      window.open("https://wa.me/40723403403", "_blank")
                    }
                    className="mt-5 w-full rounded-2xl px-6 py-3 font-pontano-sans font-bold bg-black text-white"
                  >
                    Rezervă acum
                  </motion.button>
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
