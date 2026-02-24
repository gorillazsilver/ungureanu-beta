"use client";

import React from "react";
import Image from "next/image";
import { Box, useBreakpointValue } from "@chakra-ui/react";

const Banner2: React.FC = () => {
  const bannerHeight = useBreakpointValue({ base: "17vh", lg: "42vh" });

  return (
    <Box
      position="relative"
      width="100%"
      height={bannerHeight}
      overflow="hidden"
    >
      <Image
        src="/images/alege-sig.svg"
        alt="Curs frizerie incepatori , curs frizer, frizer incepatori, frizer, barbershop, barbershop incepatori, barbershop incepatori Bucuresti, barbershop incepatori Timisoara, barbershop incepatori Cluj, barbershop incepatori Iasi"
        fill
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
        quality={100}
        priority
      />
    </Box>
  );
};

export default Banner2;
