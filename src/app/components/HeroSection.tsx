"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import Typed from "typed.js";
import logoImg from "@/images/logo.png";
import ScrollButton from "./Buxt";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const logoRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  const ciprianRef = useRef<HTMLDivElement>(null);
  const ungureanuRef = useRef<HTMLDivElement>(null);

  const fadeAcademyRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLSpanElement>(null);

  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  const chipsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const typedRef = useRef<HTMLSpanElement>(null);

  /* ---------------- TYPED EFFECT ---------------- */
  useEffect(() => {
    if (!typedRef.current) return;

    const el = typedRef.current;

    Object.assign(el.style, {
      display: "inline-block",
      minWidth: "7ch",
      backgroundColor: "#000000",
      color: "#79FD15",
      padding: "0.18em 0.6em",
      borderRadius: "999px",
      boxShadow: "0 14px 45px rgba(0,0,0,0.25)",
      border: "1px solid rgba(0,0,0,0.22)",
      lineHeight: "1.1",
      transform: "translateZ(0)",
      whiteSpace: "nowrap",
    });

    const typed = new Typed(el, {
      strings: ["2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026"],
      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
      showCursor: false,
      preStringTyped: () => {
        el.style.fontFamily = "'Stint Ultra Expanded', cursive";
        el.style.letterSpacing = "0.12em";
      },
    });

    return () => typed.destroy();
  }, []);

  /* ---------------- GSAP ---------------- */
  useEffect(() => {
    if (!containerRef.current) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Initial states (avoid overlap jump on load)
      gsap.set(
        [
          logoRef.current,
          badgeRef.current,
          ciprianRef.current,
          ungureanuRef.current,
          fadeAcademyRef.current,
          educationRef.current,
          subtitleRef.current,
          descRef.current,
          chipsRef.current,
          ctaRef.current,
        ],
        { opacity: 0 },
      );

      // Logo + badge
      tl.fromTo(
        logoRef.current,
        { y: -12, opacity: 0, rotate: -8, scale: 0.92 },
        {
          y: 0,
          opacity: 1,
          rotate: 0,
          scale: 1,
          duration: 0.9,
          ease: "elastic.out(1,0.6)",
        },
      ).fromTo(
        badgeRef.current,
        { y: -10, opacity: 0, scale: 0.98 },
        { y: 0, opacity: 1, scale: 1, duration: 0.55 },
        "-=0.35",
      );

      // Name
      tl.fromTo(
        ciprianRef.current,
        { y: -18, opacity: 0, rotate: -1.3 },
        { y: 0, opacity: 1, rotate: 0, duration: 0.65 },
        "-=0.1",
      ).fromTo(
        ungureanuRef.current,
        { y: -18, opacity: 0, rotate: 1.3 },
        { y: 0, opacity: 1, rotate: 0, duration: 0.65 },
        "-=0.4",
      );

      // Hero title
      tl.fromTo(
        fadeAcademyRef.current,
        { y: 18, opacity: 0, filter: "blur(10px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.9 },
        "-=0.1",
      ).fromTo(
        educationRef.current,
        { y: 16, opacity: 0, filter: "blur(8px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.75 },
        "-=0.6",
      );

      // Subtitle + desc + chips + CTA
      tl.fromTo(
        subtitleRef.current,
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.55 },
        "-=0.2",
      )
        .fromTo(
          descRef.current,
          { y: 10, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.55 },
          "-=0.35",
        )
        .fromTo(
          chipsRef.current,
          { y: 12, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.55 },
          "-=0.35",
        )
        .fromTo(
          ctaRef.current,
          { y: 14, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.65 },
          "-=0.25",
        );

      // Micro-float accents (subtle, premium)
      if (!prefersReduced) {
        gsap.to(".hero-float", {
          y: -10,
          duration: 3.8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: 0.35,
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  /* ---------------- SCROLL ---------------- */
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden"
      aria-label="Fade Academy Hero"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[#79FD15]" />

        {/* premium vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_20%,rgba(255,255,255,0.28),transparent_45%),radial-gradient(900px_circle_at_80%_30%,rgba(0,0,0,0.18),transparent_55%),radial-gradient(900px_circle_at_60%_90%,rgba(0,0,0,0.22),transparent_55%)]" />

        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.28) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.28) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        {/* futuristic streaks */}
        <div className="absolute -top-40 left-1/2 h-[520px] w-[980px] -translate-x-1/2 rotate-6 bg-gradient-to-r from-transparent via-black/25 to-transparent blur-2xl opacity-40" />
        <div className="absolute -bottom-48 left-1/2 h-[520px] w-[980px] -translate-x-1/2 -rotate-6 bg-gradient-to-r from-transparent via-black/25 to-transparent blur-2xl opacity-35" />
      </div>

      {/* CONTENT */}
      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-14">
        {/* TOP BAR */}
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div ref={logoRef} className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-black/10 blur-xl" />
            <div className="relative rounded-3xl border border-black/15 bg-white/10 p-2.5 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.22)]">
              <Image
                src={logoImg}
                alt="Fade Academy logo"
                width={220}
                height={220}
                className="h-auto w-20 sm:w-24 lg:w-28"
                priority
              />
            </div>
          </div>

          {/* Badge */}
          <div
            ref={badgeRef}
            className="hidden sm:flex items-center gap-2 rounded-full border border-black/20 bg-black/10 px-4 py-2 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.16)]"
          >
            <span className="relative inline-flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black/70 opacity-25" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-black/75" />
            </span>
            <span className="font-pontano-sans text-sm text-black/85">
              #1 Barber Education • România
            </span>
          </div>
        </div>

        {/* HERO GRID */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center flex-1">
          {/* LEFT */}
          <div className="relative">
            {/* Name */}
            <div className="flex flex-wrap items-end gap-x-7 gap-y-2">
              <div ref={ciprianRef} className="flex items-end">
                <span className="passions-conflict-regular text-[5.6rem] sm:text-[6.6rem] leading-[0.72] text-black">
                  C
                </span>
                <span className="font-familjen-grotesk text-xl sm:text-3xl -translate-y-1 text-black/85">
                  iprian
                </span>
              </div>

              <div ref={ungureanuRef} className="flex items-end">
                <span className="passions-conflict-regular text-[4.8rem] sm:text-[6.6rem] leading-[0.74] text-black">
                  U
                </span>
                <span className="font-familjen-grotesk text-xl sm:text-3xl -translate-y-1 text-black/85">
                  ngureanu
                </span>
              </div>
            </div>

            {/* Big statement (mobile-first, no overlap) */}
            <div className="mt-6">
              <div ref={fadeAcademyRef} className="leading-[0.84] text-black">
                <div className="passions-conflict-regular text-[4.3rem] sm:text-[5.4rem] md:text-[6.2rem] lg:text-[7.2rem]">
                  Fade Academy
                </div>
                <div className="mt-1">
                  <span
                    ref={educationRef}
                    className="passions-conflict-regular text-[3.4rem] sm:text-[4.6rem] md:text-[5.3rem] lg:text-[6.4rem] text-black/90"
                  >
                    Education
                  </span>
                </div>
              </div>

              {/* power underline */}
              <div className="mt-5 h-[3px] w-40 sm:w-56 rounded-full bg-black/80 shadow-[0_10px_30px_rgba(0,0,0,0.18)]" />
            </div>

            {/* Subtitle */}
            <h2
              ref={subtitleRef}
              className="mt-6 font-pontano-sans text-base sm:text-lg text-black/85 leading-relaxed"
            >
              <span className="font-stint-ultra-expanded text-black text-lg sm:text-2xl">
                Cea mai bună școală de frizerie din țară
              </span>
              <br />
              <span className="text-black/80">
                Recunoscută pentru rezultate, disciplină și tehnică.
              </span>
              <br />
              <span className="inline-flex items-center gap-2 mt-2">
                <span className="font-stint-ultra-expanded text-black/90 text-sm sm:text-base">
                  6 ani consecutivi
                </span>
                <span ref={typedRef} />
              </span>
            </h2>

            {/* Description */}
            <p
              ref={descRef}
              className="mt-5 font-pontano-sans text-sm sm:text-base text-black/85 max-w-xl leading-relaxed"
            >
              Înveți de la zero, ieși pregătit să lucrezi: fade-uri curate,
              control pe formă, consultanță și rutină profesională — cu un
              mentor cu recunoaștere internațională.
            </p>

            {/* Proof chips */}
            <div ref={chipsRef} className="mt-6 flex flex-wrap gap-2.5">
              <div className="hero-float inline-flex items-center gap-2 rounded-full border border-black/20 bg-white/10 px-3.5 py-2 backdrop-blur-md shadow-[0_18px_55px_rgba(0,0,0,0.18)]">
                <span className="h-2 w-2 rounded-full bg-black/80" />
                <span className="font-pontano-sans text-xs sm:text-sm text-black/85">
                  Program intensiv • practică reală
                </span>
              </div>

              <div className="hero-float inline-flex items-center gap-2 rounded-full border border-black/20 bg-white/10 px-3.5 py-2 backdrop-blur-md shadow-[0_18px_55px_rgba(0,0,0,0.18)]">
                <span className="h-2 w-2 rounded-full bg-black/80" />
                <span className="font-pontano-sans text-xs sm:text-sm text-black/85">
                  Mentorat + feedback 1:1
                </span>
              </div>

              <div className="hero-float inline-flex items-center gap-2 rounded-full border border-black/20 bg-white/10 px-3.5 py-2 backdrop-blur-md shadow-[0_18px_55px_rgba(0,0,0,0.18)]">
                <span className="h-2 w-2 rounded-full bg-black/80" />
                <span className="font-pontano-sans text-xs sm:text-sm text-black/85">
                  Standard premium • rezultate rapide
                </span>
              </div>
            </div>

            {/* CTA (no overlap, future-safe spacing) */}
            <div
              ref={ctaRef}
              className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4"
            >
              <div className="w-full sm:w-auto">
                <ScrollButton onClick={handleScroll}>
                  Informatii necesare inscriere curs
                </ScrollButton>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-black/20 bg-black/10 px-4 py-2 backdrop-blur-md shadow-[0_18px_55px_rgba(0,0,0,0.16)]">
                <span className="relative inline-flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black/70 opacity-25" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-black/75" />
                </span>
                <span className="font-pontano-sans text-xs sm:text-sm text-black/85">
                  Înscrieri deschise • locuri limitate
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: premium proof card */}
          <div className="relative lg:justify-self-end w-full">
            <div className="relative overflow-hidden rounded-[28px] border border-black/20 bg-black/10 backdrop-blur-xl shadow-[0_24px_90px_rgba(0,0,0,0.28)]">
              {/* glass shine */}
              <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[720px] -translate-x-1/2 rotate-6 bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-[0.18] blur-2xl" />

              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-stint-ultra-expanded text-black text-xs sm:text-sm tracking-wide">
                      ELITĂ. DISCIPLINĂ. TEHNICĂ.
                    </div>
                    <div className="mt-2 font-familjen-grotesk text-black text-2xl sm:text-3xl leading-tight">
                      Standardul care face diferența.
                    </div>
                    <div className="mt-2 font-pontano-sans text-black/80 text-sm sm:text-base">
                      Curs construit ca într-un studio profesionist — nu ca
                      “școală”.
                    </div>
                  </div>

                  <div className="shrink-0 rounded-2xl border border-black/20 bg-white/10 px-3 py-2 text-center">
                    <div className="passions-conflict-regular text-4xl leading-none text-black">
                      #1
                    </div>
                    <div className="font-pontano-sans text-[11px] text-black/80 -mt-1">
                      România
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="rounded-2xl border border-black/20 bg-white/10 p-4">
                    <div className="text-[11px] uppercase tracking-[0.18em] text-black/65 font-pontano-sans">
                      Practică
                    </div>
                    <div className="mt-1 font-familjen-grotesk text-black text-lg sm:text-xl">
                      Intensivă
                    </div>
                    <div className="mt-1 font-pontano-sans text-black/75 text-xs sm:text-sm">
                      Mâna ta lucrează zilnic.
                    </div>
                  </div>

                  <div className="rounded-2xl border border-black/20 bg-white/10 p-4">
                    <div className="text-[11px] uppercase tracking-[0.18em] text-black/65 font-pontano-sans">
                      Tehnică
                    </div>
                    <div className="mt-1 font-familjen-grotesk text-black text-lg sm:text-xl">
                      Fade-uri curate
                    </div>
                    <div className="mt-1 font-pontano-sans text-black/75 text-xs sm:text-sm">
                      Formă + control + finisaj.
                    </div>
                  </div>

                  <div className="rounded-2xl border border-black/20 bg-white/10 p-4">
                    <div className="text-[11px] uppercase tracking-[0.18em] text-black/65 font-pontano-sans">
                      Mentor
                    </div>
                    <div className="mt-1 font-familjen-grotesk text-black text-lg sm:text-xl">
                      Feedback 1:1
                    </div>
                    <div className="mt-1 font-pontano-sans text-black/75 text-xs sm:text-sm">
                      Corectezi rapid, crești sigur.
                    </div>
                  </div>

                  <div className="rounded-2xl border border-black/20 bg-white/10 p-4">
                    <div className="text-[11px] uppercase tracking-[0.18em] text-black/65 font-pontano-sans">
                      Carieră
                    </div>
                    <div className="mt-1 font-familjen-grotesk text-black text-lg sm:text-xl">
                      Start pro
                    </div>
                    <div className="mt-1 font-pontano-sans text-black/75 text-xs sm:text-sm">
                      Ești gata să lucrezi după curs.
                    </div>
                  </div>
                </div>

                {/* bottom punchline */}
                <div className="mt-6 rounded-2xl border border-black/20 bg-black/10 px-5 py-4">
                  <div className="font-stint-ultra-expanded text-black text-sm sm:text-base">
                    “BEST BARBER SCHOOL IN THE COUNTRY”
                  </div>
                  <div className="mt-1 font-pontano-sans text-black/80 text-xs sm:text-sm">
                    Nu e o promisiune. E standardul pe care îl livrăm.
                  </div>
                </div>
              </div>

              <div className="h-12 bg-gradient-to-b from-transparent to-black/10" />
            </div>

            {/* floating glows */}
            <div className="pointer-events-none absolute -z-10 -left-10 -bottom-10 h-48 w-48 rounded-full bg-white/30 blur-3xl opacity-60" />
            <div className="pointer-events-none absolute -z-10 -right-10 -top-10 h-56 w-56 rounded-full bg-black/25 blur-3xl opacity-55" />
          </div>
        </div>

        {/* MOBILE badge */}
        <div className="sm:hidden mt-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/20 bg-black/10 px-4 py-2 backdrop-blur-md shadow-[0_18px_55px_rgba(0,0,0,0.16)]">
            <span className="relative inline-flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black/70 opacity-25" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-black/75" />
            </span>
            <span className="font-pontano-sans text-xs text-black/85">
              #1 Barber Education • România
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
