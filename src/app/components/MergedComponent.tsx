"use client";

import React, { useRef, useEffect, useMemo } from "react";
import {
  Card,
  CardBody,
  Heading,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Box,
  Stack,
  List,
  ListItem,
  ListIcon,
  Icon,
  Divider,
  Badge,
} from "@chakra-ui/react";
import { PiScissors } from "react-icons/pi";
import { IoShareSocialOutline } from "react-icons/io5";
import {
  MdOutlineEmojiPeople,
  MdOutlineNotificationImportant,
} from "react-icons/md";
import { TbZoomQuestion } from "react-icons/tb";
import { GiTeacher } from "react-icons/gi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { FaGraduationCap, FaToolbox, FaExternalLinkAlt } from "react-icons/fa";
import faderImage from "@/images/foarfeci7.webp";
import Link from "next/link";

const MergedComponents: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const docsRef = useRef<HTMLDivElement>(null);

  const acteNecesare = useMemo(
    () => [
      {
        title: "Copie certificat naștere",
        note: "",
        accent: false,
      },
      {
        title: "Copie carte identitate",
        note: "",
        accent: false,
      },
      {
        title: "Copie certificat căsătorie",
        note: "Doar în cazul schimbării numelui",
        accent: false,
      },
      {
        title: "Copie după ultimul act de studii",
        note: "Minim 16 ani împliniți pentru a urma cursul. Minim diplomă 8 clase. Dacă ai studiat în afara țării, diploma trebuie echivalată și apostilată (Haga).",
        accent: true,
      },
      {
        title: "Adeverință medicală",
        note: "Cu mențiunea: Apt pentru curs",
        accent: false,
      },
    ],
    [],
  );

  const competenteDinImagine = useMemo(
    () => [
      "Lucrează cu substanțe chimice respectând normele de siguranță.",
      "Programarea clienților și organizarea programărilor (agenda/booking).",
      "Întreținerea echipamentelor și pregătirea postului de lucru.",
      "Menținerea documentației administrative.",
      "Menținerea relațiilor cu furnizorii.",
      "Păstrarea curățeniei în spațiul de lucru.",
      "Recomandarea produselor cosmetice potrivite clienților.",
      "Vânzarea produselor pentru îngrijirea părului și a scalpului.",
      "Întocmirea comenzilor de aprovizionare.",
      "Ținerea evidenței stocurilor și actualizarea acestora.",
      "A fi la curent cu tendințele de tuns și styling.",
      "Lucrează ținând cont de principii economice (consum, timp, costuri).",
      "Gestionarea programului de lucru (intervale, flux clienți).",
      "Asigurarea serviciilor pentru clienți (standard, consistență).",
      "Demonstrarea competențelor sociale (comunicare, atitudine).",
      "Oferirea de consultanță pentru alegerea tunsorii potrivite.",
      "Administrarea programărilor și a priorităților în salon.",
      "Aplicarea tratamentelor pentru îngrijirea părului.",
      "Utilizarea corectă a echipamentelor pentru îngrijirea părului.",
      "Ajutor oferit clienților cu probleme ale părului/scalpului.",
      "Efectuarea masajelor (capilar/facial) unde este cazul.",
      "Stăpânirea tehnicilor de tuns și realizarea frizurilor (styling/coafare).",
    ],
    [],
  );

  const competenteTextCopy = useMemo(() => {
    return competenteDinImagine.map((x) => `• ${x}`).join("\n");
  }, [competenteDinImagine]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { gsap } = require("gsap");
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { ScrollTrigger } = require("gsap/ScrollTrigger");
    gsap.registerPlugin(ScrollTrigger);

    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      // Card entrance
      if (cardRef.current) {
        gsap.fromTo(
          cardRef.current,
          { y: prefersReduced ? 0 : 18, opacity: 0, filter: "blur(10px)" },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { y: prefersReduced ? 0 : 10, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 82%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      if (docsRef.current) {
        gsap.fromTo(
          docsRef.current,
          { y: prefersReduced ? 0 : 16, opacity: 0, filter: "blur(8px)" },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: docsRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      if (listRef.current) {
        const listItems = Array.from(listRef.current.children);

        gsap.fromTo(
          listItems,
          { autoAlpha: 0, y: prefersReduced ? 0 : 12 },
          {
            duration: 0.75,
            autoAlpha: 1,
            y: 0,
            ease: "power2.out",
            stagger: 0.12,
            scrollTrigger: {
              trigger: listRef.current,
              start: "top 78%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      if (arrowRef.current && !prefersReduced) {
        gsap.to(arrowRef.current, {
          y: 10,
          duration: 1,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      }

      if (!prefersReduced) {
        gsap.to(".cta-glow", {
          boxShadow: "0 18px 60px rgba(0,0,0,0.35)",
          duration: 1.6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
    };
  }, []);

  return (
    <section className="relative w-full">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* LEFT: Futuristic CTA Card */}
        <Box className="flex-1 flex justify-center items-center px-4 sm:px-6 py-10 bg-black">
          <div ref={cardRef} className="w-full max-w-[420px]">
            <Card
              w="100%"
              borderRadius="30px"
              overflow="hidden"
              position="relative"
              boxShadow="0 30px 130px rgba(0,0,0,0.55)"
              border="1px solid rgba(255,255,255,0.10)"
              bg="rgba(255,255,255,0.04)"
              backdropFilter="blur(16px)"
            >
              {/* Image */}
              <Box
                position="absolute"
                inset={0}
                bgImage={`url(${faderImage.src})`}
                bgSize="cover"
                bgPosition="center"
                bgRepeat="no-repeat"
                filter="contrast(1.08) saturate(1.05)"
                transform="scale(1.04)"
              />

              {/* Overlays */}
              <Box
                position="absolute"
                inset={0}
                bgGradient="linear(to-b, rgba(0,0,0,0.10), rgba(0,0,0,0.88))"
              />
              <Box
                position="absolute"
                inset={0}
                opacity={0.95}
                bgGradient="radial(circle at 20% 20%, rgba(121,253,21,0.22), transparent 55%)"
              />
              <Box
                position="absolute"
                inset={0}
                opacity={0.8}
                bgGradient="radial(circle at 80% 25%, rgba(4,97,171,0.18), transparent 55%)"
              />

              {/* Subtle grid */}
              <Box
                position="absolute"
                inset={0}
                opacity={0.1}
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)",
                  backgroundSize: "44px 44px",
                }}
              />

              {/* Top badge (NO overlap) */}
              <Box position="absolute" top="14px" left="14px" zIndex={5}>
                <Badge
                  bg="rgba(0,0,0,0.55)"
                  color="#79FD15"
                  border="1px solid rgba(121,253,21,0.35)"
                  backdropFilter="blur(12px)"
                  px={4}
                  py={2}
                  borderRadius="999px"
                  className="font-stint-ultra-expanded"
                  fontSize="10px"
                  letterSpacing="0.14em"
                >
                  Detalii cursuri
                </Badge>
              </Box>

              {/* Arrow hint pointing DOWN */}
              <div
                ref={arrowRef}
                className="absolute bottom-[116px] left-1/2 -translate-x-1/2 z-10 text-center select-none"
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{
                    filter: "drop-shadow(0 2px 2px rgba(0,0,0,0.85))",
                  }}
                >
                  <path
                    d="M12 19V7"
                    stroke="#79FD15"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M7.5 9.5 12 5l4.5 4.5"
                    stroke="#79FD15"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <p className="mt-2 text-[#79FD15] font-stint-ultra-expanded drop-shadow-[0_2px_2px_rgba(0,0,0,0.85)] text-sm">
                  Apasă
                </p>
              </div>

              <CardBody
                position="relative"
                zIndex={3}
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                alignItems="center"
                px={{ base: 5, sm: 7 }}
                pt={{ base: 20, sm: 22 }} // space under badge
                pb={{ base: 10, sm: 12 }}
                minH={{ base: "560px", sm: "600px" }}
              >
                <Stack spacing={4} textAlign="center" color="#79FD15" w="100%">
                  <Heading
                    ref={titleRef as any}
                    size="lg"
                    className="font-stint-ultra-expanded"
                    lineHeight="1.10"
                    style={{
                      textShadow: "0 12px 40px rgba(0,0,0,0.65)",
                    }}
                  >
                    CURS FRIZERIE
                    <br />
                    ÎNCEPĂTORI
                  </Heading>

                  <Box className="font-pontano-sans text-white text-sm leading-relaxed">
                    Intră în liga PRO: tehnică, disciplină, rezultate.
                    <br />
                    <span className="text-[#79FD15] font-semibold">
                      Standardul #1 din România.
                    </span>
                  </Box>

                  <Divider borderColor="rgba(255,255,255,0.16)" />
                  <Box className="font-pontano-sans text-white/80 text-sm">
                    Apasă și vezi: ce înveți + program + certificare
                  </Box>
                </Stack>

                <Box mt={8} w="100%" display="flex" justifyContent="center">
                  <Button
                    onClick={onOpen}
                    ref={btnRef}
                    borderRadius="full"
                    px={8}
                    py={7}
                    fontWeight="900"
                    letterSpacing="0.02em"
                    className="font-stint-ultra-expanded cta-glow relative overflow-hidden"
                    bg="#79FD15"
                    color="#000000"
                    _hover={{ transform: "translateY(-2px)", bg: "#6EFB03" }}
                    _active={{ transform: "translateY(1px)", bg: "#59d800" }}
                    transition="all 0.2s"
                    w={{ base: "100%", sm: "auto" }}
                    maxW={{ base: "340px", sm: "unset" }}
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
                    Detalii curs
                  </Button>
                </Box>

                <Box
                  mt={6}
                  w="100%"
                  display="flex"
                  justifyContent="center"
                  gap={2}
                  flexWrap="wrap"
                >
                  {[
                    "Locuri limitate",
                    "Practica reală",
                    "Mentorat 1:1",
                    "Certificare",
                  ].map((t) => (
                    <Box
                      key={t}
                      px={3}
                      py={2}
                      borderRadius="999px"
                      bg="rgba(0,0,0,0.55)"
                      border="1px solid rgba(255,255,255,0.12)"
                      backdropFilter="blur(12px)"
                      className="font-pontano-sans text-xs text-white/90"
                    >
                      {t}
                    </Box>
                  ))}
                </Box>
              </CardBody>
            </Card>
          </div>
        </Box>

        {/* RIGHT: Acte list */}
        <Box className="flex-1 flex justify-center items-center px-4 sm:px-6 py-10 bg-[#6EFB03]">
          <div ref={docsRef} className="w-full max-w-[560px]">
            <Heading
              as="h2"
              size="xl"
              className="font-luxurious-script font-thin text-[#000000] text-center mb-5"
            >
              Acte necesare înscriere curs
            </Heading>

            <Box className="text-center font-pontano-sans text-black/80 text-sm mb-6">
              99% mobile friendly — listă clară, rapidă, fără stres.
            </Box>

            <List ref={listRef} spacing={3} className="font-pontano-sans">
              {acteNecesare.map((it) => (
                <ListItem
                  key={it.title}
                  className="text-[#000000]"
                  style={{
                    borderRadius: "18px",
                    background: it.accent
                      ? "rgba(0,0,0,0.12)"
                      : "rgba(0,0,0,0.08)",
                    border: it.accent
                      ? "1px solid rgba(0,0,0,0.26)"
                      : "1px solid rgba(0,0,0,0.16)",
                    padding: "14px 14px",
                  }}
                >
                  <ListIcon as={HiOutlineDocumentText} color="#FA5D02" />
                  <span className="text-base sm:text-lg">{it.title}</span>
                  {it.note ? (
                    <div
                      className={`mt-2 text-sm ${it.accent ? "text-black/75" : "text-black/70"}`}
                    >
                      {it.note}
                    </div>
                  ) : null}
                </ListItem>
              ))}
            </List>

            <Box className="mt-6 rounded-2xl border border-black/15 bg-black/10 px-5 py-4">
              <div className="font-stint-ultra-expanded text-black text-sm">
                Tip rapid:
              </div>
              <div className="mt-1 font-pontano-sans text-black/75 text-sm">
                Fă poze clare documentelor (scan) — te ajută la înscriere și
                organizare.
              </div>
            </Box>
          </div>
        </Box>

        {/* DRAWER (mobile: bottom, desktop: right) */}
        <Drawer
          isOpen={isOpen}
          placement={{ base: "bottom", md: "right" }}
          onClose={onClose}
          finalFocusRef={btnRef}
          size={{ base: "full", md: "xl" }}
        >
          <DrawerOverlay bg="rgba(0,0,0,0.65)" backdropFilter="blur(6px)" />
          <DrawerContent
            bg="radial-gradient(circle, #030507, #004054, #00807d, #00c171, #79fd15)"
            borderLeft={{
              base: "none",
              md: "1px solid rgba(255,255,255,0.10)",
            }}
            borderTop={{ base: "1px solid rgba(255,255,255,0.10)", md: "none" }}
          >
            {/* subtle grid */}
            <Box
              position="absolute"
              inset={0}
              opacity={0.1}
              pointerEvents="none"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)",
                backgroundSize: "44px 44px",
              }}
            />
            {/* glow */}
            <Box
              position="absolute"
              inset={0}
              opacity={0.9}
              pointerEvents="none"
              bgGradient="radial(circle at 20% 20%, rgba(121,253,21,0.16), transparent 55%)"
            />

            <DrawerCloseButton color="#ededed" zIndex={5} />
            <DrawerHeader
              className="font-stint-ultra-expanded text-[#000000]"
              zIndex={5}
            >
              Detalii curs nivel ELITĂ
            </DrawerHeader>

            <DrawerBody zIndex={5}>
              {/* SECTION: Ce vei invata (original list, upgraded styling) */}
              <Heading
                as="h3"
                size="md"
                mb={4}
                className="font-stint-ultra-expanded text-[#000000]"
              >
                Ce vei învăța?
              </Heading>

              <List spacing={3} className="font-pontano-sans">
                {[
                  "Tunsori personalizate adaptate fizionomiei feței și formei capului",
                  "Tehnici de tuns clasice cu foarfeca și pieptănul",
                  "Tunsori realizate cu mașina de tuns",
                  "Clipper over comb",
                  "Skin fade și geometria necesară pentru realizarea acestuia",
                  "Rasul bărbii cu briciul",
                  "Spălarea părului și îngrijirea scalpului",
                  "Styling și tehnici profesionale de uscare",
                  "Masaj facial și capilar",
                  "Noțiuni de geometrie aplicată în tunsori",
                ].map((t) => (
                  <ListItem
                    key={t}
                    color="#ededed"
                    bg="rgba(0,0,0,0.22)"
                    border="1px solid rgba(255,255,255,0.10)"
                    borderRadius="16px"
                    px={4}
                    py={3}
                  >
                    <ListIcon as={PiScissors} color="#79FD15" />
                    {t}
                  </ListItem>
                ))}

                <ListItem
                  color="#ededed"
                  bg="rgba(0,0,0,0.22)"
                  border="1px solid rgba(255,255,255,0.10)"
                  borderRadius="16px"
                  px={4}
                  py={3}
                >
                  <ListIcon as={IoShareSocialOutline} color="#79FD15" />
                  Brand & Imagine:
                  <br />
                  • Dezvoltarea prezenței în mediul online
                  <br />
                  • Identificarea valorilor cheie pentru brand-ul tău
                  <br />• Tehnologii folosite în industrie
                </ListItem>

                <ListItem
                  color="#ededed"
                  bg="rgba(0,0,0,0.22)"
                  border="1px solid rgba(255,255,255,0.10)"
                  borderRadius="16px"
                  px={4}
                  py={3}
                >
                  <ListIcon as={TbZoomQuestion} color="#79FD15" />
                  Fiecare cursant trebuie să aibă propriile ustensile. Reduceri
                  la parteneri:{" "}
                  <Link
                    href="https://barber-store.ro/?gad_source=1&gad_campaignid=17314553915&gclid=CjwKCAjwprjDBhBTEiwA1m1d0nEt-RhtNcAiISrAHJpHT5F8F1PXl1BUX_Ll2ySk7PUjtqfq12hR3RoCH8cQAvD_BwE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-[#ededed]"
                  >
                    Barber Store
                  </Link>
                </ListItem>
              </List>

              <Divider my={8} borderColor="rgba(255,255,255,0.12)" />

              {/* SECTION: Competente (from image) */}
              <Heading
                as="h3"
                size="md"
                mb={4}
                className="font-stint-ultra-expanded text-[#ededed]"
              >
                Competențe (ce vei stăpâni în practică)
              </Heading>

              <List spacing={3} className="font-pontano-sans">
                {competenteDinImagine.map((t) => (
                  <ListItem
                    key={t}
                    color="#ededed"
                    bg="rgba(0,0,0,0.18)"
                    border="1px solid rgba(121,253,21,0.18)"
                    borderRadius="16px"
                    px={4}
                    py={3}
                  >
                    <ListIcon as={MdOutlineEmojiPeople} color="#79FD15" />
                    {t}
                  </ListItem>
                ))}
              </List>

              <Divider my={8} borderColor="rgba(255,255,255,0.12)" />

              {/* SECTION: Program */}
              <Heading
                as="h3"
                size="md"
                mb={4}
                className="font-stint-ultra-expanded text-[#ededed]"
              >
                Program curs frizerie
              </Heading>

              <List spacing={3} className="font-pontano-sans">
                <ListItem
                  color="#ededed"
                  bg="rgba(0,0,0,0.22)"
                  border="1px solid rgba(255,255,255,0.10)"
                  borderRadius="16px"
                  px={4}
                  py={3}
                >
                  <ListIcon as={GiTeacher} color="#79FD15" />
                  Teorie: marți, miercuri și joi 10:00–15:30
                </ListItem>

                <ListItem
                  color="#ededed"
                  bg="rgba(0,0,0,0.22)"
                  border="1px solid rgba(255,255,255,0.10)"
                  borderRadius="16px"
                  px={4}
                  py={3}
                >
                  <ListIcon as={PiScissors} color="#79FD15" />
                  Practică: marți, miercuri, joi 16:00–18:00
                </ListItem>

                <ListItem
                  color="#ededed"
                  bg="rgba(0,0,0,0.22)"
                  border="1px solid rgba(255,255,255,0.10)"
                  borderRadius="16px"
                  px={4}
                  py={3}
                >
                  <ListIcon
                    as={MdOutlineNotificationImportant}
                    color="#79FD15"
                  />
                  Programul poate depăși numărul de ore pentru practică
                </ListItem>

                <ListItem
                  color="#ededed"
                  bg="rgba(0,0,0,0.22)"
                  border="1px solid rgba(255,255,255,0.10)"
                  borderRadius="16px"
                  px={4}
                  py={3}
                >
                  <ListIcon as={FaToolbox} color="#79FD15" />
                  Ustensile personale (reduceri parteneri){" "}
                  <Link
                    href="http://barber-store.ro/?affiliate=asociatia-frizer-art"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon as={FaExternalLinkAlt} mx="2px" />
                  </Link>
                </ListItem>
              </List>

              <Divider my={8} borderColor="rgba(255,255,255,0.12)" />

              {/* SECTION: Certificare */}
              <Heading
                as="h3"
                size="md"
                mb={4}
                className="font-stint-ultra-expanded text-[#ededed]"
              >
                Recunoscut național / internațional
              </Heading>

              <List spacing={3} className="font-pontano-sans">
                <ListItem
                  color="#ededed"
                  bg="rgba(0,0,0,0.22)"
                  border="1px solid rgba(255,255,255,0.10)"
                  borderRadius="16px"
                  px={4}
                  py={3}
                >
                  <ListIcon as={FaGraduationCap} color="#79FD15" />
                  Curs autorizat de Ministerul Muncii și Ministerul Educației.
                  La final primești certificat de absolvire (frizerie
                  începători).
                </ListItem>
              </List>

              <Divider my={8} borderColor="rgba(255,255,255,0.12)" />

              {/* SECTION: Text copy for you */}

              <Box
                as="pre"
                whiteSpace="pre-wrap"
                bg="rgba(0,0,0,0.35)"
                border="1px solid rgba(255,255,255,0.10)"
                borderRadius="18px"
                p={4}
                className="font-pontano-sans"
                color="#ededed"
                fontSize="14px"
                lineHeight="1.55"
              >
                {competenteTextCopy}
              </Box>
            </DrawerBody>

            <DrawerFooter zIndex={5}>
              <Button
                variant="solid"
                mr={3}
                onClick={onClose}
                color="#0b0b0b"
                bg="#79FD15"
                borderRadius="full"
                fontWeight="900"
                px={7}
                py={6}
                className="font-stint-ultra-expanded"
                _hover={{
                  bg: "#6EFB03",
                  transform: "translateY(-2px)",
                  boxShadow: "0 14px 35px rgba(0,0,0,0.30)",
                }}
                _active={{
                  bg: "#59d800",
                  transform: "translateY(1px)",
                  boxShadow: "inset 0 2px 10px rgba(0,0,0,0.25)",
                }}
                transition="all 0.2s"
              >
                Închide
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </section>
  );
};

export default MergedComponents;
