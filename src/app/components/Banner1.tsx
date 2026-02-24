"use client";

import React from "react";
import Image from "next/image";
import { Box } from "@chakra-ui/react";

interface Banner1Props {
  imageSrc: string;
  altText: string;
}

const Banner1: React.FC<Banner1Props> = ({ imageSrc, altText }) => {
  return (
    <Box
      position="relative"
      width="100%"
      height={{ base: "20vh", lg: "70vh" }}
      minHeight={{ base: "200px", lg: "250px" }}
    >
      <Image
        src={imageSrc}
        alt={altText}
        fill
        style={{
          objectFit: "cover",
        }}
        quality={100}
        priority
      />
    </Box>
  );
};

export default Banner1;
