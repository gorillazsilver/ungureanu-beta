"use client";

import React, { useEffect, useRef } from "react";
import { Grid, GridItem, Text, Box, Image } from "@chakra-ui/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FadeAcademySectionProps {
  imageSrc: string;
  formatorName: string;
  description: string;
  achievements: string;
}

const formatorData = {
  alinCiucas: {
    imageSrc: "/images/testimoniale/ciucas2.webp",
    formatorName: "Alin Ciucas",
    description: `
      **DE FOAME.** Da, ați citit bine: FOAMEA este cea care mi-a descoperit PASIUNEA pentru tuns.<br><br>
      
      La vârsta de 35 de ani, după 17 ani dedicați domeniului vânzărilor, am rămas fără job. Eram ASM la o firmă mare și vizibilă pe piață. Salariu mare… și, dintr-odată, a doua zi: ZERO.<br><br>
      
      Un magazin chinezesc în centru, două mașini de tuns, un set de piepteni, o pelerină, un scaun cu sondă din Leroy Merlin… și m-am apucat de treabă.<br><br>
      
      Toți ne naștem cu un talent ascuns, dar de multe ori greutățile, nevoile sau dorința părinților noștri de a ne face "astronauți" ne împiedică să ne descoperim adevărata chemare.<br><br>
      
      Când am realizat că tunsul este drumul meu, am făcut tot ce era necesar să evoluez. Am plecat de acasă, lăsând familia, nevoile financiare și prietenii pe plan secund pentru a participa la fiecare seminar, curs sau workshop care mă propulsa înainte.<br><br>
      
      Azi culeg ROADELE. Dacă există o persoană căreia trebuie să îi mulțumesc toată viața, acela este Ciprian Ungureanu, omul care a văzut în mine ceea ce eu nu vedeam!<br><br>
      
      Nevoia de supraviețuire mi-a descoperit pasiunea pentru TUNS, pe care am transformat-o în carieră cu 90% muncă și 10% talent.<br><br>
      
      Acum, la 43 de ani, iubesc această meserie. Ea îmi oferă stabilitate materială și spirituală, iar prin ea sunt înconjurat de oameni frumoși. Poate mulți dintre voi vă veți regăsi în această poveste, iar pentru cei care nu au rămas corijenți la viață, mă bucur din suflet pentru voi.<br><br>
      
      Luv ya ♥️💈
    `,
    achievements: `
      Din 2016, nu cred că am ratat mai mult de 10 concursuri organizate fizic sau online.<br><br>
      
      În noiembrie 2018, am fost nominalizat BEST BARBER pe cel mai mare grup de frizerie din România, "Frizuri, Coafuri și Tunsori de Top", și am câștigat unul dintre cele mai râvnite trofee ale vremii!<br><br>
      
      Am profitat din plin de cunoștințele și publicitatea gratuită pe care le oferă mediul online și am investit în imaginea mea. Am participat la peste 20 de concursuri, în care am reușit să urc pe podium.<br><br>
      
      În perioada pandemiei, am reușit să țin unită comunitatea frizerilor printr-un proiect unic: BARBER LA MICROFON. Împreună cu Ciprian Ungureanu, am adus în prim-plan cei mai buni frizeri din România prin live-uri pe grupul menționat mai sus.<br><br>
      
      În 2023, am creat propriul eveniment/concurs, THEBARBERPOST ROMANIA, împreună cu Ciprian Ungureanu. La eveniment au fost prezenți iconii industriei, iar concursul a adunat 60 de participanți, câștigătorii primind cele mai mari premii oferite vreodată în România!<br><br>
      
      Astăzi fac parte cu onoare din Fade Academy, unde sunt asistent-educator, ajutând la formarea tinerilor care aleg această frumoasă meserie.<br><br>
    `,
  },
};

const FadeAcademySection: React.FC<FadeAcademySectionProps> = ({
  imageSrc,
  formatorName,
  description,
  achievements,
}) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const formatorBoxRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: gsap.Context;

    if (
      containerRef.current &&
      formatorBoxRef.current &&
      descriptionRef.current
    ) {
      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        });

        tl.fromTo(
          [formatorBoxRef.current, descriptionRef.current],
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            stagger: 0.2,
          }
        );
      });
    }

    return () => ctx?.revert();
  }, []);

  return (
    <Box className="overflow-hidden bg-[#cbdad4] py-7" ref={containerRef}>
      <Grid
        templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
        gap={6}
        className="w-full lg:w-[80%] mx-auto px-6 lg:px-12"
        maxWidth="100%"
      >
        <GridItem colSpan={1} order={{ base: 1, lg: 2 }}>
          <Box className="lg:w-3/4 lg:mx-auto overflow-hidden">
            <Image
              ref={imageRef}
              src={imageSrc}
              alt={formatorName}
              width="100%"
              height="auto"
              objectFit="cover"
              borderRadius="2xl"
              loading="lazy"
            />
          </Box>
        </GridItem>

        <GridItem colSpan={1} order={{ base: 2, lg: 1 }}>
          <Grid templateRows="repeat(3, auto)" gap={6} height="100%">
            <GridItem
              ref={formatorBoxRef}
              className="bg-gradient-to-r from-[#0461ab] to-[#023d82] rounded-2xl shadow-[0_8px_16px_rgba(0,0,0,0.25)]"
              p={4}
              display="flex"
              alignItems="center"
              justifyContent="center"
              border="1px solid #fa6529"
              maxWidth={{ base: "100%", lg: "50%" }}
              borderRadius="2xl"
              position="relative"
              overflow="hidden"
              opacity={0}
            >
              <Text className="font-pontano-sans text-lg text-[#F9FBFB] text-center">
                <Text
                  as="span"
                  className="font-bold text-xl font-stint-ultra-expanded"
                >
                  {formatorName}
                </Text>
              </Text>
            </GridItem>

            <GridItem ref={descriptionRef} opacity={0}>
              <Text
                className="font-pontano-sans text-gray-700 font-semibold"
                fontSize={{ base: "md", md: "lg" }}
                lineHeight="1.8"
                textAlign="left"
                dangerouslySetInnerHTML={{ __html: description }}
              />
              <Text
                className="font-pontano-sans text-gray-700 font-semibold mt-8"
                fontSize={{ base: "md", md: "lg" }}
                lineHeight="1.8"
                textAlign="left"
                dangerouslySetInnerHTML={{ __html: achievements }}
              />
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </Box>
  );
};

const AlinCiucasSection: React.FC = () => {
  return <FadeAcademySection {...formatorData.alinCiucas} />;
};

export default AlinCiucasSection;
