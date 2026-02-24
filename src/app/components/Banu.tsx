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
}

const formatorData = {
  andreiBanu: {
    imageSrc: "/images/testimoniale/banu2.webp",
    formatorName: "Andrei Banu",
    description: `Numele meu este Andrei Banu și am 25 de ani.
      Sunt o persoana sociabilă, ador perfecțiunea și tind sa fiu cea mai bună varianta a mea, pe zi ce trece.
      Îmi doresc sa mă perfecționez, prin învățarea de tehnici noi, în pas cu moda, pentru a deveni unul dintre cei mai buni frizeri. 
      Dl. Ciprian Ungureanu este cel mai important om din drumul meu, acesta m-a învățat intr-un timp foarte scurt, câteva tehnici pentru a învață rapid dar și corect frizeria! Datorită dânsului am prins încredere în mine, am reușit înțeleg multe nelămuriri și cu siguranță voi ajunge unde mi-am propus, avandu-l pe dânsul ca mentor!`,
  },
};

const FadeAcademySection: React.FC<FadeAcademySectionProps> = ({
  imageSrc,
  formatorName,
  description,
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
    <Box
      className="overflow-hidden bg-[#cbdad4]"
      ref={containerRef}
      minH={{ base: "120vh", md: "100vh" }}
      py={{ base: 12, md: 16, lg: 20 }}
    >
      <Grid
        templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
        gap={{ base: 8, lg: 12 }}
        className="w-full lg:w-[80%] mx-auto px-4"
        maxWidth="1400px"
        alignItems="center"
        minH={{ base: "auto", md: "80vh" }}
      >
        <GridItem colSpan={1} order={{ base: 1, lg: 2 }}>
          <Box
            className="w-full lg:w-3/4 mx-auto overflow-hidden"
            position="relative"
            paddingTop={{ base: "120%", lg: "100%" }}
          >
            <Image
              ref={imageRef}
              src={imageSrc}
              alt={formatorName}
              width="100%"
              height="100%"
              objectFit="cover"
              borderRadius="2xl"
              loading="lazy"
              position="absolute"
              top="0"
              left="0"
            />
          </Box>
        </GridItem>

        <GridItem colSpan={1} order={{ base: 2, lg: 1 }}>
          <Grid templateRows="repeat(2, auto)" gap={8} height="100%">
            <GridItem
              ref={formatorBoxRef}
              className="bg-gradient-to-r from-[#0461ab] to-[#023d82] rounded-2xl shadow-[0_8px_16px_rgba(0,0,0,0.25)]"
              p={8}
              display="flex"
              alignItems="center"
              justifyContent="center"
              border="1px solid #fa6529"
              maxWidth={{ base: "100%", lg: "80%" }}
              mx="auto"
              borderRadius="2xl"
              position="relative"
              overflow="hidden"
              opacity={0}
            >
              <Text className="font-pontano-sans text-center text-[#F9FBFB]">
                <Text
                  as="span"
                  className="block font-bold text-2xl md:text-3xl font-stint-ultra-expanded mb-2"
                >
                  {formatorName}
                </Text>
              </Text>
            </GridItem>

            <GridItem ref={descriptionRef} opacity={0}>
              <Text
                className="font-pontano-sans text-gray-700 font-semibold whitespace-pre-line"
                fontSize={{ base: "md", md: "lg" }}
                lineHeight="1.8"
                textAlign="left"
                py={4}
              >
                {description}
              </Text>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </Box>
  );
};

const BanuSection: React.FC = () => {
  return <FadeAcademySection {...formatorData.andreiBanu} />;
};

export default BanuSection;
