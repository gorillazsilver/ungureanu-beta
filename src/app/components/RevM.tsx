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
    name: "Dani Modan",
    message:
      "Sunt super încântat, aici am găsit profesionalism,oameni minunați..Recomand cu mare drag !!! Nu veți regreta!",
  },
  {
    name: "Georgiana Falca",
    message:
      "Răbdare, pricepere, profesionalism, calitate ,într-un cuvânt oameni minunați și condiții pe măsură!!! Mă bucur că am avut privilegiul să vă cunosc!",
  },
  {
    name: "Alexandru Olteanu",
    message: "Recomand cu mare încredere",
  },
];

const RevM = () => {
  return <ReviewSect reviews={reviews} />;
};

export default RevM;
