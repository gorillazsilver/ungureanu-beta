"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  IconButton,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

interface BlackFridayPopupProps {
  priority?: boolean;
}

const BlackFridayPopup: React.FC<BlackFridayPopupProps> = ({
  priority = true, // Changed default to true
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
    // Small delay to ensure proper mounting
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleCallClick = () => {
    // Use international format for better compatibility
    window.location.href = "tel:+40723403403";
    handleClose();
  };

  const handleButtonClick = async () => {
    handleClose();

    await router.push("/curs-frizerie-bucuresti");

    setTimeout(() => {
      const element = document.getElementById("black-friday-special");
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });

        element.style.transition = "all 0.3s ease";
        element.style.boxShadow = "0 0 20px #fa6529";

        setTimeout(() => {
          element.style.boxShadow = "";
        }, 2000);
      }
    }, 500);
  };

  if (!isMounted) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      isCentered
      size="xl"
      closeOnOverlayClick={true}
    >
      <ModalOverlay
        bg="blackAlpha.700"
        backdropFilter="blur(5px)"
        onClick={handleClose}
      />
      <ModalContent
        bg="transparent"
        boxShadow="none"
        maxW={{ base: "110%", md: "600px" }}
        position="relative"
        overflow="hidden"
        p={2}
      >
        <IconButton
          aria-label="Close popup"
          icon={<CloseIcon />}
          position="absolute"
          right="5px"
          top="5px"
          zIndex={20}
          rounded="full"
          bg="white"
          color="gray.800"
          size="sm"
          onClick={handleClose}
          _hover={{
            bg: "gray.100",
            transform: "scale(1.1)",
          }}
          transition="all 0.2s"
        />

        <Box
          position="relative"
          width="100%"
          aspectRatio={{ base: "0.77", md: "1" }}
          borderRadius="xl"
          overflow="hidden"
        >
          <Image
            src="/images/merry.webp"
            alt="Black Friday Offer"
            fill
            style={{ objectFit: "contain" }}
            priority={true} // Set priority to true
          />
          <Button
            position="absolute"
            bottom="5%"
            left="50%"
            transform="translateX(-50%)"
            bg="linear-gradient(to right, #f0f5ff, #e0e9ff)"
            color="#d42426"
            px={8}
            py={4}
            fontSize={{ base: "lg", md: "xl" }}
            fontWeight="bold"
            borderRadius="full"
            _hover={{
              bg: "linear-gradient(to right, #e0e9ff, #f0f5ff)",
              transform: "translateX(-50%) scale(1.05)",
            }}
            transition="all 0.3s ease"
            onClick={handleButtonClick}
            boxShadow="0 4px 15px rgba(0,0,0,0.1)"
            className="font-stint-ultra-expanded"
          >
            REZERVA ACUM!
          </Button>
        </Box>
      </ModalContent>
    </Modal>
  );
};

export default BlackFridayPopup;
