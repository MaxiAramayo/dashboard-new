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

import phone from "../images/contact/phone.svg";

import Image from "next/image";

import whatsAppIcon from "../images/icons/whatsapp.svg";
import facebookIcon from "../images/icons/facebook.svg";
import igIcon from "../images/contact/instagram.svg";
import Link from "next/link";

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
        height={{ lg: "360px", base: "10rem" }}
        backgroundImage={NavBarImage}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        shadow="xl"
        gridTemplateColumns={{ base: "1.5fr  2fr" }}
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: { lg: "360px", base: "10rem" },

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
            top={{ lg: "15rem", base: "5rem" }}
            left={{ lg: "10rem" ,base: "1rem" }}
            justifyContent={{lg: "center"}}
            alignItems={{lg: "center"}}
            
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
          position={{base: "relative"}}
          h="full"
          justifyContent={{base: "center"}}
          // gridColumn={{lg: "repeat(2, 1fr)"}}
          /* top={{ base: "1.3rem" }} */
          display={{ base: "flex" }}
          fontFamily="Dosis"
          gap={5}
        >
          <Heading
            size={{ lg: "3xl", base: "lg" }}
            fontWeight={"extrabold"}
            // fontFamily={"Poppins"}
          >
            {nombreNegocio}
          </Heading>
          <Stack >
            <Text
              // fontFamily={"Poppins"}
              fontWeight="semibold"
              fontSize={{ lg: "2xl", base: "md" }}

            >
              {descripcion}
            </Text>
            <Text
              // fontFamily={"Poppins"}
              fontWeight="light"
              fontSize={{ lg: "3xl", base: "sm" }}

            >
              {direccion}
            </Text>
          </Stack>
        </Stack>
        
      </Grid>

      <Box height={{base: "8rem", lg: "13rem"}} position="relative" zIndex={-1}>
        <Grid
          justify={"center"}
          position="relative"
          top={{base: "3rem", lg: "7rem"}}
          width="95%"
          mx="auto"
          templateColumns={"2fr 1fr"}
        >
          <Text
            fontSize={{ lg: "2xl", base: "md" }}
            fontFamily="Dosis"
            fontWeight="semibold"
            color="#6F46E8"
          >
            Horarios: {horario}
          </Text>
          <Box display="flex" justifyContent="space-evenly">
            <Image src={whatsAppIcon} width={30} height={30} />
            <Image src={facebookIcon} width={30} height={30} />
            <Image src={igIcon} width={30} height={30} />
          </Box>
        </Grid>
      </Box>

      {aclaracion ? (
        <>
          <Box
            bg="#EAE3FE"
            height={{ base: "37px", lg: "57px" }}
            alignItems="center"
            display="flex"
            justifyContent="center"
          >
            <Text
              fontSize={{ lg: "2xl", base: "md" }}
              color={"#6F46E8"}
              fontFamily="Dosis"
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
