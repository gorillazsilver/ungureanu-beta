"use client";

import React, { useState, useRef } from "react";
import { Box, Text, Flex, Icon, VStack, IconButton } from "@chakra-ui/react";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

interface ReviewProps {
  name: string;
  message: string;
}

const ReviewCard: React.FC<ReviewProps> = ({ name, message }) => {
  return (
    <Box
      background="#000000"
      p={6}
      borderRadius="lg"
      boxShadow="0 8px 16px rgba(0,0,0,0.25)"
      maxW="300px"
      w="100%"
      h="400px"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      border="2px solid #79FD15"
      position="relative"
      _after={{
        content: '""',
        position: "absolute",
        bottom: "-8px",
        left: "0",
        right: "0",
        height: "8px",
        background: "#79FD15",
        borderBottomLeftRadius: "lg",
        borderBottomRightRadius: "lg",
        opacity: "0.6",
      }}
    >
      <VStack align="start" spacing={3} height="100%">
        <Text
          fontWeight="bold"
          fontSize="lg"
          fontFamily="var(--font-familjen-grotesk)"
          color="#79FD15"
        >
          {name}
        </Text>
        <Flex>
          {[...Array(5)].map((_, i) => (
            <Icon key={i} as={FaStar} color="yellow.400" w={4} h={4} />
          ))}
        </Flex>
        <Box
          flex="1"
          width="100%"
          display="flex"
          alignItems="center"
          overflowY="auto"
          css={{
            "&::-webkit-scrollbar": {
              width: "4px",
            },
            "&::-webkit-scrollbar-track": {
              background: "#79FD15",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#79FD15",
              borderRadius: "2px",
            },
          }}
        >
          <Text
            fontSize="md"
            color="#79FD15"
            fontFamily="var(--font-pontano-sans)"
          >
            {message}
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};

interface ReviewSectionProps {
  reviews: ReviewProps[];
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ reviews }) => {
  const [hasStartedSwiping, setHasStartedSwiping] = useState(false);
  const swiperRef = useRef<SwiperType>();

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <Box w="100%" maxW="350px" mx="auto" py={8} px={4}>
      <Text
        textAlign="center"
        fontSize="2xl"
        fontFamily="stint-ultra-expanded"
        color="#79FD15"
        mb={2}
      >
        Recenzii
      </Text>
      <Text
        textAlign="center"
        fontSize="md"
        color="#79FD15"
        mb={6}
        fontFamily="var(--font-pontano-sans)"
      >
        Evaluari autentice furnizate de clienti{" "}
        <Text as="span" fontWeight="extrabold">
          reali
        </Text>
      </Text>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        style={{
          width: "300px",
          height: "400px",
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={() => {
          if (!hasStartedSwiping) {
            setHasStartedSwiping(true);
          }
        }}
        cardsEffect={{
          slideShadows: false,
          perSlideRotate: 4,
          perSlideOffset: 8,
        }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <ReviewCard name={review.name} message={review.message} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Flex justify="center" align="center" mt={4} color="#023d82" gap={3}>
        <AnimatePresence>
          {hasStartedSwiping && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <IconButton
                aria-label="Previous review"
                icon={<FaArrowLeft />}
                onClick={handlePrev}
                variant="ghost"
                color="#79FD15"
                _hover={{ bg: "rgba(2, 61, 130, 0.1)" }}
              />
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <IconButton
            aria-label="Next review"
            icon={<FaArrowRight />}
            onClick={handleNext}
            variant="ghost"
            color="#79FD15"
            _hover={{ bg: "rgba(2, 61, 130, 0.1)" }}
          />
        </motion.div>
      </Flex>
    </Box>
  );
};

export default ReviewSection;
