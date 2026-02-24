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
    name: "Andreea Elena",
    message:
      "Este o Academie de Frizerie in adevaratul sens al cuvântului. Servicii de foarte buna calitate, pesonal amabil, igiena impecabila, doar produse de calitate si nu mai vorbesc de cursurile de frizerie acreditate internațional. Mult succes, băieți!",
  },
  {
    name: "Florin Rosca",
    message: "Cel mai bun profesor..! Va recomand Ciprian Ungureanu ..!",
  },
  {
    name: "Irimia Roxana",
    message: "Profesionalism...Artă....Dedicare",
  },
  {
    name: "Maria Antohi",
    message:
      "Un trainer de top the best un om foarte calm care nu numai ca iti pune bazele unei meserii atat de frumoase, insa te ajuta sa te dezvolti atat profesional cat si personal .. ordine și disciplina Recomand tuturor cu mare drag! Multumesc din suflet pentu tot și cu siguranța voi mai reveni !",
  },
  {
    name: "Gabriela Gafencu",
    message: "Clar, tehnic și precis! Multumesc",
  },
  {
    name: "Mîrzac Nadejda",
    message:
      "Recomand celor care pun accent pe professionalism organizare punctualitate .. Îi multumesc cu recunostinta dm Ciprian Ungureanu la seminariile la care am participat am învatat foarte multe .",
  },
  {
    name: "Ionut Ionut",
    message:
      "recomand Ciprian Ungureanu Salon & Academy, profesionist, mentor, pedagog, cel mai tare profesor! nota 10+ Va multumesc inca o data maestre pt tot, toata stima si respectul meu!",
  },
  {
    name: "Alex Vancea",
    message: "modul plăcut prin care explică cursanților și calitatea lucrării",
  },
  {
    name: "Tudorache Alexandru",
    message: "Profesionalism, acuratețe incomensurabila, locația ideala",
  },
  {
    name: "Apostol Aurel-ionut",
    message: "Recomand Ciprian Ungureanu........ The Best!",
  },
  {
    name: "Tzake Claudiu",
    message: "Un adevarat maestru ! 5 stele",
  },
  {
    name: "Georgiana Sabin Lazar",
    message:
      "Cel mai bun profesor ieri am fost la Seminar la dansul sunt foarte mulțumită de ce am învățat recomand CIPRIAN UNGUREANU !",
  },
  {
    name: "Maria Petco",
    message:
      "Sunteți o echipa de excepție! Făcând curent practica in salonul By Ciprian Ungureanu pot sa recomand cu cea mai mare încredere acest salon tuturor! Va iubesc",
  },
];

const RevB = () => {
  return <ReviewSect reviews={reviews} />;
};

export default RevB;
