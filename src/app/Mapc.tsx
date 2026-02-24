"use client";

import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Mapc: React.FC = () => {
  return (
    <Box width="100vw" p={6}>
      {/* Heading Text */}
      <Text
        fontSize="2xl"
        fontWeight="thin"
        className="text-center font-stint-ultra-expanded"
        color="#79FD15"
        mb={2}
      >
        UNDE NE GASESTI
      </Text>

      {/* Map with Border, Shadow, and Rounded Corners */}
      <Box
        width="100%"
        height="40vh"
        className="rounded-3xl overflow-hidden"
        border="4px solid #79FD15"
        boxShadow="lg"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.996321854012!2d26.1318058!3d44.4465897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1f8d17bf528e5%3A0xc1f5a9ac02415215!2s%C8%98oseaua%20Pantelimon%2016%2C%20Bucure%C8%99ti!5e0!3m2!1sen!2sro!4v1692115699456!5m2!1sen!2sro"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </Box>
    </Box>
  );
};

export default Mapc;
