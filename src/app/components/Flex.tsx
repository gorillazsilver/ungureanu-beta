"use client";

import React, { useRef } from "react";
import {
  Card,
  CardBody,
  Heading,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Box,
  Stack,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { PiScissors } from "react-icons/pi"; // Importing the new icon
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineEmojiPeople } from "react-icons/md";
import { TbZoomQuestion } from "react-icons/tb";
import { MdOutlineNotificationImportant } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";

const Flex: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="35vh"
      className="pt-10"
    >
      <Card
        maxW="sm"
        w="150%"
        h="150%"
        borderRadius="150px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        p={6}
      >
        <CardBody display="flex" justifyContent="center" alignItems="center">
          <Stack textAlign="center" color="white">
            <Heading size="lg" className="font-stint-ultra-expanded ">
              CURS FRIZERIE INCEPATORI <br />
              <br />
            </Heading>
          </Stack>
        </CardBody>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
          size={{ base: "xs", md: "md" }}
        >
          <DrawerOverlay />
          <DrawerContent maxW={{ base: "75%", md: "md" }}>
            <DrawerCloseButton />
            <DrawerHeader className="font-stint-ultra-expanded text-[#023d82]">
              TEME ABORDATE
            </DrawerHeader>
            <DrawerBody>
              <List spacing={3} className="font-pontano-sans text-[#000000]">
                <ListItem>
                  <ListIcon as={PiScissors} color="#023d82" />
                  Tunsori barbati personalizate
                </ListItem>
                <ListItem>
                  <ListIcon as={PiScissors} color="#023d82" />
                  Tunsori personalizate după fizionomia feței și forma capului
                </ListItem>
                <ListItem>
                  <ListIcon as={PiScissors} color="#023d82" />
                  Tehnici de tuns:<br></br> Treptele - Graduarea - Linia - etc.
                </ListItem>
                <ListItem>
                  <ListIcon as={PiScissors} color="#023d82" />
                  Tunsori barbati clasice
                </ListItem>

                <ListItem>
                  <ListIcon as={PiScissors} color="#023d82" />
                  Tuns:<br></br> - foarfeca și pieptan <br></br> - foarfeca si
                  masina de tuns
                </ListItem>

                <ListItem>
                  <ListIcon as={PiScissors} color="#023d82" />
                  Masina de tuns:<br></br> - Clipper over comb techniques
                </ListItem>
                <ListItem>
                  <ListIcon as={PiScissors} color="#023d82" />
                  Par facial / barba - barbierit cu brici - styling barba
                </ListItem>
                <ListItem>
                  <ListIcon as={PiScissors} color="#023d82" />
                  Samponat - Spalat - Masaj
                </ListItem>
                <ListItem>
                  <ListIcon as={PiScissors} color="#023d82" />
                  Masaj: -facial - capilar
                </ListItem>
                <ListItem>
                  <ListIcon as={PiScissors} color="#023d82" />
                  Styling - Special techniques
                </ListItem>
                <ListItem>
                  <ListIcon as={MdOutlineEmojiPeople} color="#023d82" />
                  Consultatie si abordare client
                </ListItem>
                <ListItem>
                  <ListIcon as={IoShareSocialOutline} color="#023d82" />
                  Brand & Imagine:<br></br>
                  -Dezvoltarea prezentei in mediul online<br></br>{" "}
                  -Identificarea valorilor cheie pentru brand-ul tau<br></br>{" "}
                  -Tehnologii folosite in industrie
                </ListItem>
                <ListItem>
                  <ListIcon as={TbZoomQuestion} color="#023d82" />
                  Identificarea uneltelor necesare pentru a oferi orice tip de
                  tunsoare si ethicheta la salon.
                </ListItem>
              </List>

              {/* New List with a Header */}
              <Heading
                as="h3"
                size="md"
                mt={8}
                mb={4}
                className="font-stint-ultra-expanded text-[#023d82]"
              >
                PROGRAM CURS FRIZERIE:
              </Heading>
              <List spacing={3} className="font-pontano-sans text-[#000000]">
                <ListItem>Cuprinde TEORIE & PRACTICA:</ListItem>
                <ListItem>
                  <ListIcon as={GiTeacher} color="#023d82" />
                  Teorie – 6 ore / saptamana<br></br> marti 12:00–18:00
                </ListItem>
                <ListItem>
                  <ListIcon as={PiScissors} color="#023d82" />
                  Practica – 6 ore / saptamana<br></br> marti, miercuri, joi
                  18:00-20:00
                </ListItem>
                <ListItem>
                  <ListIcon
                    as={MdOutlineNotificationImportant}
                    color="#023d82"
                  />
                  Programul poate depasi numarul de ore pentru practica
                </ListItem>
              </List>
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Inchide
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>

        <Button
          colorScheme="blue"
          onClick={onOpen}
          ref={btnRef}
          my={40}
          className="font-stint-ultra-expanded"
          borderRadius="full" // Rounded button
        >
          Detalii curs
        </Button>
      </Card>
    </Box>
  );
};

export default Flex;
