"use client";

import React, { useEffect, useRef } from "react";
import {
  Grid,
  GridItem,
  Text,
  Box,
  Link,
  Icon,
  keyframes,
} from "@chakra-ui/react";
import { FaFacebook } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const shimmer = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

interface PriceContactProps {
  price: string;
  phoneNumber: string;
  location: string;
  facebookLink: string;
}

const PriceContact: React.FC<PriceContactProps> = ({
  price,
  phoneNumber,
  location,
  facebookLink,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const priceBoxRef = useRef<HTMLDivElement>(null);
  const contactBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [priceBoxRef.current, contactBoxRef.current],
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          stagger: 0.35,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const showNotification = (message: string) => {
    const alertBox = document.createElement("div");
    alertBox.style.position = "fixed";
    alertBox.style.top = "50%";
    alertBox.style.left = "50%";
    alertBox.style.transform = "translate(-50%, -50%)";
    alertBox.style.padding = "20px";
    alertBox.style.background = "linear-gradient(to right, #0461ab, #023d82)";
    alertBox.style.color = "#F9FBFB";
    alertBox.style.borderRadius = "10px";
    alertBox.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
    alertBox.style.zIndex = "1000";
    alertBox.style.display = "flex";
    alertBox.style.alignItems = "center";
    alertBox.style.gap = "10px";

    const iconElement = document.createElement("span");
    iconElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`;

    const textElement = document.createElement("span");
    textElement.textContent = message;

    alertBox.appendChild(iconElement);
    alertBox.appendChild(textElement);

    document.body.appendChild(alertBox);
    setTimeout(() => {
      alertBox.remove();
    }, 2000);
  };

  const handlePhoneClick = () => {
    navigator.clipboard.writeText(phoneNumber);
    showNotification("Număr de telefon copiat în clipboard!");
  };

  return (
    <Box className="overflow-hidden bg-[#cbdad4] py-7" ref={containerRef}>
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gap={6}
        className="w-full md:w-[68%] mx-auto"
        maxWidth="100%"
      >
        <GridItem>
          <Box
            ref={priceBoxRef}
            className="bg-gradient-to-r from-[#0461ab] to-[#023d82] rounded-2xl shadow-[0_8px_16px_rgba(0,0,0,0.25)] p-3 flex flex-col items-center justify-center border border-[#fa6529] relative overflow-hidden h-[85%]"
          >
            <Text className="font-pontano-sans text-xl text-center text-[#F9FBFB] mb-1">
              PRET
            </Text>
            <Text className="font-stint-ultra-expanded text-3xl font-bold text-[#F9FBFB]">
              {price} RON
            </Text>
          </Box>
        </GridItem>

        <GridItem>
          <Box
            ref={contactBoxRef}
            className="bg-gradient-to-r from-[#023d82] to-[#0461ab] rounded-2xl shadow-[0_8px_16px_rgba(0,0,0,0.25)] p-3 flex flex-col items-center justify-center border border-[#fa6529] relative overflow-hidden h-[85%]"
          >
            <Text className="font-pontano-sans text-xl text-center text-[#F9FBFB] mb-1">
              Ne gasesti aici:
            </Text>
            <Text
              className="font-stint-ultra-expanded text-lg font-bold text-[#F9FBFB] mb-1 cursor-pointer hover:bg-[#0461ab] transition-colors duration-300"
              border="2px solid #fa6529"
              borderRadius="md"
              px={2}
              py={1}
              onClick={handlePhoneClick}
              title="Click pentru a copia numărul de telefon"
            >
              {phoneNumber}
              <span className="block text-sm font-normal mt-1">
                (Apasă pentru a copia)
              </span>
            </Text>
            <Link
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                location
              )}`}
              isExternal
              className="font-pontano-sans text-md text-center text-[#F9FBFB] mb-1 hover:underline"
            >
              {location}
            </Link>
            <Link href={facebookLink} isExternal>
              <Icon as={FaFacebook} w={7} h={7} color="#F9FBFB" />
            </Link>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default PriceContact;
