"use client";

import React, { useEffect, useRef } from "react";
import { Grid, GridItem, Text, Box, Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Tryout: React.FC = () => {
  const router = useRouter();
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const priceRef = useRef<HTMLDivElement | null>(null);

  const showNotification = (message: string) => {
    const alertBox = document.createElement("div");
    alertBox.style.position = "fixed";
    alertBox.style.left = "50%";
    alertBox.style.bottom = "22px";
    alertBox.style.transform = "translateX(-50%)";
    alertBox.style.padding = "12px 14px";
    alertBox.style.background = "rgba(0,0,0,0.85)";
    alertBox.style.color = "#79FD15";
    alertBox.style.borderRadius = "999px";
    alertBox.style.border = "1px solid rgba(121,253,21,0.35)";
    alertBox.style.boxShadow = "0 18px 60px rgba(0,0,0,0.45)";
    alertBox.style.backdropFilter = "blur(10px)";
    alertBox.style.zIndex = "10000";
    alertBox.style.display = "flex";
    alertBox.style.alignItems = "center";
    alertBox.style.gap = "10px";
    alertBox.style.fontFamily = "Familjen Grotesk, sans-serif";
    alertBox.style.fontSize = "14px";

    const iconElement = document.createElement("span");
    iconElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#79FD15" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`;

    const textElement = document.createElement("span");
    textElement.textContent = message;

    alertBox.appendChild(iconElement);
    alertBox.appendChild(textElement);

    document.body.appendChild(alertBox);
    setTimeout(() => alertBox.remove(), 1800);
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const cards = cardRefs.current.filter(Boolean);

      gsap.set(cards, {
        opacity: 0,
        y: prefersReduced ? 0 : 16,
        filter: "blur(10px)",
      });

      gsap.to(cards, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.75,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          toggleActions: "play none none none",
        },
      });

      if (!prefersReduced) {
        gsap.to(".neon-float", {
          y: -10,
          duration: 3.2,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          stagger: 0.25,
        });

        gsap.to(".neon-scan", {
          backgroundPosition: "200% 0%",
          duration: 2.8,
          ease: "linear",
          repeat: -1,
        });

        if (priceRef.current) {
          gsap.to(priceRef.current, {
            boxShadow:
              "0 0 0 1px rgba(121,253,21,0.35), 0 26px 90px rgba(121,253,21,0.10)",
            duration: 1.6,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const cardShell =
    "relative overflow-hidden rounded-3xl border border-[#79FD15]/20 bg-black/70 backdrop-blur-xl shadow-[0_22px_90px_rgba(0,0,0,0.55)]";

  const gridGlow =
    "before:content-[''] before:absolute before:inset-0 before:opacity-[0.18] before:pointer-events-none before:bg-[linear-gradient(to_right,rgba(121,253,21,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(121,253,21,0.12)_1px,transparent_1px)] before:bg-[length:44px_44px]";

  const scanLine =
    "after:content-[''] after:absolute after:inset-0 after:pointer-events-none after:opacity-[0.20] after:bg-[linear-gradient(120deg,transparent,rgba(121,253,21,0.25),transparent)] after:bg-[length:200%_100%] after:bg-[position:0%_0%] neon-scan";

  const innerPad = "p-5 sm:p-6";

  return (
    <Box
      ref={sectionRef}
      className="relative overflow-hidden bg-black py-10 sm:py-12"
    >
      {/* Ambient background */}
      <Box className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#79FD15]/15 blur-3xl" />
        <div className="absolute -bottom-28 -right-24 h-[520px] w-[520px] rounded-full bg-[#79FD15]/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.10] bg-[radial-gradient(circle_at_50%_35%,rgba(121,253,21,0.14),transparent_55%)]" />
      </Box>

      <Box className="relative w-full mx-auto px-4 sm:px-6" maxW="900px">
        {/* Header */}
        <Box className="mb-6 sm:mb-8 text-center">
          <Text className="font-stint-ultra-expanded text-[#79FD15] text-3xl sm:text-4xl tracking-wide">
            PRETURI
          </Text>
          <Text className="font-pontano-sans text-white/75 text-sm sm:text-base mt-2">
            Totul clar. Totul premium. Fără surprize.
          </Text>
        </Box>

        {/* Mobile-first grid: single column on phones */}
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          gap={4}
          className="overflow-visible"
        >
          {/* 1) Curs frizerie incepatori */}
          <GridItem
            ref={(el) => {
              cardRefs.current[0] = el;
            }}
            className={`${cardShell} ${gridGlow} ${scanLine}`}
          >
            <Box className={`${innerPad} neon-float`}>
              <Box className="flex items-start justify-between gap-3">
                <Box>
                  <Text className="font-stint-ultra-expanded text-[#79FD15] text-lg sm:text-xl">
                    Curs frizerie incepatori
                  </Text>
                  <Text className="font-pontano-sans text-white/80 text-sm sm:text-base mt-1">
                    CIPRIAN UNGUREANU
                  </Text>
                </Box>

                <Box
                  ref={priceRef}
                  className="shrink-0 rounded-2xl border border-[#79FD15]/25 bg-[#79FD15]/10 px-4 py-2"
                >
                  <Text className="font-stint-ultra-expanded text-[#79FD15] text-xl sm:text-2xl">
                    6000 RON
                  </Text>
                </Box>
              </Box>

              <Box className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <Text className="font-pontano-sans text-white/80 text-sm sm:text-base">
                  Standardul #1 din România — tehnică + disciplină + rezultate.
                </Text>
              </Box>
            </Box>
          </GridItem>

          {/* 2) Button to curs secundar */}
          <GridItem
            ref={(el) => {
              cardRefs.current[1] = el;
            }}
            className={`${cardShell} ${gridGlow} ${scanLine}`}
          >
            <Box className={`${innerPad} neon-float`}>
              <Text className="font-stint-ultra-expanded text-[#79FD15] text-lg sm:text-xl text-center">
                Curs Profesori
              </Text>
              <Text className="font-pontano-sans text-white/75 text-sm sm:text-base text-center mt-1">
                Academie
              </Text>

              <Button
                onClick={() => router.push("/curs-secundar-frizerie")}
                w="100%"
                mt={5}
                borderRadius="999px"
                bg="#79FD15"
                color="#000000"
                className="font-stint-ultra-expanded"
                py={7}
                fontWeight="900"
                letterSpacing="0.02em"
                _hover={{
                  transform: "translateY(-2px)",
                  bg: "#6EFB03",
                  boxShadow: "0 18px 60px rgba(0,0,0,0.45)",
                }}
                _active={{
                  transform: "translateY(1px)",
                  bg: "#59d800",
                }}
                transition="all 0.2s"
                position="relative"
                overflow="hidden"
                sx={{
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(120deg, transparent, rgba(255,255,255,0.55), transparent)",
                    transform: "translateX(-120%)",
                    animation: "shimmer 2.4s infinite",
                  },
                  "@keyframes shimmer": {
                    "0%": { transform: "translateX(-120%)" },
                    "100%": { transform: "translateX(120%)" },
                  },
                }}
              >
                APASA AICI
              </Button>
            </Box>
          </GridItem>

          {/* 3) Rezervare loc */}
          <GridItem
            colSpan={{ base: 1, md: 2 }}
            ref={(el) => {
              cardRefs.current[2] = el;
            }}
            className={`${cardShell} ${gridGlow} ${scanLine}`}
          >
            <Box className={`${innerPad} neon-float`}>
              <Text className="font-stint-ultra-expanded text-[#79FD15] text-lg sm:text-2xl text-center">
                REZERVARE LOC CURS
              </Text>

              <Box className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Box className="rounded-2xl border border-[#79FD15]/18 bg-[#79FD15]/10 p-4">
                  <Text className="font-pontano-sans text-white/80 text-xs uppercase tracking-[0.18em]">
                    Rezervare
                  </Text>
                  <Text className="font-stint-ultra-expanded text-[#79FD15] text-xl mt-1">
                    2000 RON
                  </Text>
                  <Text className="font-pontano-sans text-white/75 text-sm mt-1">
                    Ciprian Ungureanu
                  </Text>
                </Box>

                <Box className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Text className="font-pontano-sans text-white/80 text-xs uppercase tracking-[0.18em]">
                    Rate
                  </Text>
                  <Text className="font-stint-ultra-expanded text-[#79FD15] text-base sm:text-lg mt-1">
                    Se poate achita in 3 rate.
                  </Text>
                  <Text className="font-pontano-sans text-white/75 text-sm mt-2 leading-relaxed">
                    1. Rezervare loc - 2000 RON <br />
                    2. Inceputul cursului - 2000 RON <br />
                    3. Jumatatea cursului - 2000 RON
                  </Text>
                </Box>
              </Box>
            </Box>
          </GridItem>

          {/* 4) Reducere */}
          <GridItem
            colSpan={{ base: 1, md: 2 }}
            ref={(el) => {
              cardRefs.current[3] = el;
            }}
            className={`${cardShell} ${gridGlow} ${scanLine}`}
          >
            <Box className={`${innerPad} neon-float text-center`}>
              <Text className="font-pontano-sans text-white/80 text-base sm:text-lg">
                Profita de{" "}
                <Text
                  as="span"
                  className="font-stint-ultra-expanded text-[#79FD15] text-xl sm:text-2xl"
                >
                  10% reducere
                </Text>
              </Text>

              <Box className="mt-4 rounded-2xl border border-[#79FD15]/18 bg-[#79FD15]/10 p-4">
                <Text className="font-pontano-sans text-white/80 text-sm sm:text-base">
                  5400 RON pret final pentru plata integrala a cursului frizerie
                  incepatori.
                </Text>
              </Box>
            </Box>
          </GridItem>

          {/* 5) Politica avans */}
          <GridItem
            colSpan={{ base: 1, md: 2 }}
            ref={(el) => {
              cardRefs.current[4] = el;
            }}
            className={`${cardShell} ${gridGlow} ${scanLine}`}
          >
            <Box className={`${innerPad} neon-float`}>
              <Text className="font-pontano-sans text-white/80 text-sm sm:text-base text-center leading-relaxed">
                Cu doua saptamani inainte de inceperea cursului, nu se mai
                returneaza avansul, in conditiile in care cursantii se
                razgandesc, pentru ca se depun documentele la{" "}
                <Text
                  as="span"
                  className="font-stint-ultra-expanded text-[#79FD15]"
                >
                  registratura A.N.C.
                </Text>
                .
              </Text>
            </Box>
          </GridItem>

          {/* 6) IBAN copy */}
          <GridItem
            colSpan={{ base: 1, md: 2 }}
            ref={(el) => {
              cardRefs.current[5] = el;
            }}
            className={`${cardShell} ${gridGlow} ${scanLine}`}
          >
            <Box className={`${innerPad} neon-float text-center`}>
              <Text className="font-stint-ultra-expanded text-[#79FD15] text-lg sm:text-xl">
                CONT BANCAR PENTRU REZERVARI
              </Text>

              <Box
                className="mt-4 rounded-2xl border border-[#79FD15]/25 bg-[#79FD15]/10 px-3 py-4 cursor-pointer select-none"
                onClick={() => {
                  navigator.clipboard.writeText("RO53BTRLRONCRT0P67302901");
                  showNotification("IBAN copiat în clipboard!");
                }}
                title="Click pentru a copia IBAN-ul"
                role="button"
              >
                <Text className="font-stint-ultra-expanded text-[#79FD15] text-lg sm:text-2xl break-all">
                  RO53BTRLRONCRT0P67302901
                </Text>
                <Text className="font-pontano-sans text-white/75 text-sm mt-2">
                  (Apasă pentru a copia)
                </Text>
              </Box>

              <Text className="font-pontano-sans text-white/80 text-sm sm:text-base mt-4">
                Titular Cont - Anto Perfect Style SRL
              </Text>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default Tryout;
