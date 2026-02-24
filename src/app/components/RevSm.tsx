"use client";

import React from "react";
import { Box, Text, Flex, Icon, VStack } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import ReviewSect from "./ReviewSect";

import "swiper/css";
import "swiper/css/effect-cards";

const reviews = [
  {
    name: "Zsolt Nagy",
    message:
      "Fery ,un om deosebit si un profesionist dedicat maxim!Echipa este de nota 10!",
  },
  {
    name: "Frizeria Petrea Style",
    message:
      "Cei mai buni din oraș … profesioniști in adevăratul sens al cuvântului… recomand cu sinceritate",
  },
  {
    name: "Bogdan Cernat",
    message:
      "O experienta de neuitat. Baietii sunt niste profesionisti dedicati , atenti la toate detaliile. Salonul te intampina cu atmosfera pozitiva. Recomand cu toata increderea!",
  },
];

const RevSm = () => {
  return <ReviewSect reviews={reviews} />;
};

export default RevSm;
