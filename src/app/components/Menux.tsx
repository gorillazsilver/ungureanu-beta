"use client";

import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Box,
  Text,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";
import styled from "@emotion/styled";

// Styled MenuList
const StyledMenuList = styled(MenuList)`
  background: black;
  border-color: #00509d;
  box-shadow:
    0 4px 6px rgba(0, 0, 0, 0.1),
    inset 0 1px 1px rgba(255, 255, 255, 0.1),
    inset 0 -1px 1px rgba(0, 0, 0, 0.05);
  padding: 0.5rem;
  min-width: 220px;
  border-radius: 15px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.05' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
    pointer-events: none;
  }
`;

// Styled MenuItem
const StyledMenuItem = styled(MenuItem)`
  background: #79fd15;
  color: black;
  font-size: 1.2rem;
  font-family: "Familjen Grotesk", sans-serif;
  padding: 1rem 1.2rem;
  border-radius: 10px;
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow:
    0 2px 4px rgba(0, 0, 0, 0.1),
    inset 0 1px 1px rgba(255, 255, 255, 0.1);

  }


`;

const StyledMenuButton = styled(Button)`
  background: #79fd15;
  color: black;
  font-size: 1.2rem;
  font-family: "Familjen Grotesk", sans-serif;
  padding: 1rem 1.2rem;
  border-radius: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow:
    0 2px 4px rgba(0, 0, 0, 0.1),
    inset 0 1px 1px rgba(255, 255, 255, 0.1);
`;

const Menux: React.FC = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <Box position="fixed" top={4} right={6} zIndex={1000}>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon boxSize={24} />}
          variant="solid"
          bg="#79FD15"
          color="black"
          size="lg"
          borderRadius="30%"
          boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
        />
        <StyledMenuList>
          {/* Home */}
          <StyledMenuItem onClick={() => handleNavigation("/")}>
            <Text textAlign="center" className="font-stint-ultra-expanded">
              Acasa
            </Text>
          </StyledMenuItem>

          {/* Fade Academy Bucuresti with Submenu */}
          <Menu>
            <MenuButton as={StyledMenuButton} rightIcon={<ChevronDownIcon />}>
              <Text textAlign="center">
                <span className="font-stint-ultra-expanded">Fade Academy</span>
                <br />
                <span className="font-pontano-sans">Bucuresti</span>
              </Text>
            </MenuButton>
            <StyledMenuList>
              <StyledMenuItem
                onClick={() => handleNavigation("/curs-frizerie-bucuresti")}
              >
                Curs Ciprian Ungureanu
              </StyledMenuItem>
              <StyledMenuItem
                onClick={() => handleNavigation("/curs-secundar-frizerie")}
              >
                Curs Frizerie Secundar
              </StyledMenuItem>
              <StyledMenuItem onClick={() => handleNavigation("/curs-1-1")}>
                Curs 1 la 1
              </StyledMenuItem>
            </StyledMenuList>
          </Menu>

          {/* Other Locations */}
          <StyledMenuItem
            onClick={() => handleNavigation("/curs-frizerie-satu-mare")}
          >
            <Text textAlign="center">
              <span className="font-stint-ultra-expanded">Fade Academy</span>
              <br />
              <span className="font-pontano-sans">Satu Mare</span>
            </Text>
          </StyledMenuItem>

          <StyledMenuItem
            onClick={() => handleNavigation("/curs-frizerie-botosani")}
          >
            <Text textAlign="center">
              <span className="font-stint-ultra-expanded">Fade Academy</span>
              <br />
              <span className="font-pontano-sans">Botosani</span>
            </Text>
          </StyledMenuItem>

          {/* Evenimente */}
          <StyledMenuItem onClick={() => handleNavigation("/evenimente")}>
            <Text textAlign="center" className="font-stint-ultra-expanded">
              Evenimente & Sesiuni
            </Text>
          </StyledMenuItem>

          {/* Testimonials */}
          <StyledMenuItem onClick={() => handleNavigation("/testimoniale")}>
            <Text textAlign="center" className="font-stint-ultra-expanded">
              Testimoniale
            </Text>
          </StyledMenuItem>
        </StyledMenuList>
      </Menu>
    </Box>
  );
};

export default Menux;
