import {
  Avatar,
  Box,
  Text,
  Heading,
  Stack,
  Grid,
  ButtonGroup,
  IconButton,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";

import phone from "../images/contact/phone.svg";

import Image from "next/image";

const Navbar = ({
  nombreNegocio,
  NavBarImage,
  iconImage,
  descripcion,
  direccion,
  horario,
  aclaracion,
}) => {
  return (
    <>
      <Grid
        height={{ lg: "15rem", base: "10rem" }}
        backgroundImage={NavBarImage}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        shadow="xl"
        gridTemplateColumns={{ lg: "repeat(2, 1fr)", base: "1.5fr  2fr" }}
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: { lg: "15rem", base: "10rem" },

          bg: "rgba(0,0,0,0.5)",
        }}
      >
        <Box>
          <Box
            bg="white"
            h={{ lg: "180px", base: "120px" }}
            w={{ lg: "180px", base: "120px" }}
            rounded="full"
            position="relative"
            top={{ lg: "8.5rem", base: "5rem" }}
            left={{ lg: "15rem", base: "1rem" }}
          >
            <Box
              w={{ lg: "150px", base: "100px" }}
              h={{ lg: "150px", base: "100px" }}
              rounded="full"
              mx="auto"
              position="relative"
              mt={{ lg: "20px" }}
              top={{ lg: "15px", base: "9px" }}
              backgroundImage={iconImage}
              backgroundSize="cover"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
            ></Box>
          </Box>
        </Box>

        <Stack
          color="white"
          position="relative"
          h="full"
          justifyContent="center"
          top={{ base: "1.3rem" }}
        >
          <Heading
            size={{ lg: "xl", base: "lg" }}
            fontWeight={"extrabold"}
            fontFamily={"Poppins"}
          >
            {nombreNegocio}
          </Heading>
          <Box>
            <Text
              fontFamily={"Poppins"}
              fontWeight="semibold"
              fontSize={{ lg: "lg", base: "md" }}
            >
              {descripcion}
            </Text>
            <Text
              fontFamily={"Poppins"}
              fontWeight="light"
              fontSize={{ lg: "lg", base: "sm" }}
            >
              {direccion}
            </Text>
          </Box>
        </Stack>
      </Grid>

      <Box height="8rem" position="relative" zIndex={-1}>
        <Grid
          justify={"center"}
          position="relative"
          top="3rem"
          width="95%"
          mx="auto"
          templateColumns={"repeat(2, 1fr)"}
        >
          <Box>
            <Text fontSize={"md"}>Horarios: {horario}</Text>
          </Box>
            <Stack justifyContent={"center"}>
              <Button
              w={"50px"}
                as="a"
                href="https://www.instagram.com/"
                target="_blank"
                bgImage={phone}
              />
              <IconButton
              w={"50px"}
                as="a"
                href="#"
                aria-label="Instagram"
                icon={<FaInstagram fontSize="1.25rem" />}
              />
              <IconButton
              w={"50px"}
                as="a"
                href="#"
                aria-label="Facebook"
                icon={<FaFacebookF fontSize="1.25rem" />}
              />
          </Stack>
        </Grid>
      </Box>

      {aclaracion ? (
        <>
          <Box
            bg="#EAE3FE"
            height="40px"
            alignItems="center"
            display="flex"
            justifyContent="center"
          >
            <Text
              fontSize="lg"
              color={"#6F46E8"}
              fontFamily="Poppins"
              fontWeight="semibold"
              textAlign="center"
            >
              {aclaracion}
            </Text>
          </Box>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Navbar;
