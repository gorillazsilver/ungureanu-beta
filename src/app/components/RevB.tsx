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
    name: "Silviu Cristescu",
    message:
      "Scriu aceasta recenzie ca proaspat absolvent al cursulu Fade Academy, profesor Andi Tucaliuc. Iti sunt extrem de recunascator pentru tot ce mai invatat, pentru sfaturi si pentru rabdare. Am avut noroc sa fac parte dintr-o grupa de oameni faini, ambitiosi si care m-au ajutat sa progresez. Recomand cu incredere cursul de incepatori cat si salonul in sine. O echipa de baieti tineri, cu multe seminare la activ si care au facut din frizer o arta. Lucrarile lor vorbesc de la sine!",
  },
  {
    name: "Dany Danyela",
    message: "Recomand cei mai de treaba si foarte mult calm",
  },
  {
    name: "Enache Vlad-Cosmin",
    message: "Recomand cu toata increderea!",
  },
];

const RevB = () => {
  return <ReviewSect reviews={reviews} />;
};

export default RevB;
