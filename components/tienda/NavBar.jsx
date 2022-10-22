import { Box, Text, Stack, Grid } from "@chakra-ui/react";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

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
      <Box
        bg="#FEF7E3"
        height={{ base: "270px", md: "360px", lg: "450px" }}
        borderBottomLeftRadius={"20px"}
        borderBottomRightRadius={"20px"}
        width={{ base: "100%", md: "100%", lg: "85%", xl: "70%" }}
        mx={{ lg: "auto" }}
      >
        <Box
          height="58.2%"
          backgroundImage={`url(${NavBarImage})`}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          _before={{
            content: '""',
            position: "absolute",
            top: 0,
            width: { base: "100%", md: "100%", lg: "85%", xl: "70%" },
            height: { base: "158px", md: "210px", lg: "262px" },
            backgroundColor: "rgba(0,0,0)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.5,
            zIndex: 1,
          }}
        >
          <Grid
            gridTemplateColumns={{
              base: "1.3fr 2fr",
            }}
            h={{ base: "100%" }}
          >
            <Box>
              <Box
                bg="#FFFFFF"
                h={{ base: "110px", md: "120px", lg: "140px", xl: "160px" }}
                w={{ base: "110px", md: "120px", lg: "140px", xl: "160px" }}
                rounded="full"
                position="absolute"
                top={{ base: "4.5rem", md: "7.5rem", lg: "10rem", xl: "9rem" }}
                left={{ base: "1rem", md: "4rem", lg: "10rem", xl: "23rem" }}
                justifyContent={{ lg: "center" }}
                alignItems={{ lg: "center" }}
                zIndex={2}
                shadow="md"
              >
                <Box
                  w={{ base: "88px", lg: "120px" }}
                  h={{ base: "88px", lg: "120px" }}
                  rounded="full"
                  mx="auto"
                  position="relative"
                  top={{ base: "9px", lg: "1rem" }}
                  backgroundImage={iconImage}
                  backgroundSize="cover"
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                ></Box>
              </Box>
            </Box>

            <Stack
              color="white"
              zIndex={1}
              position="relative"
              justifyContent="center"
              mt={{ base: "3rem", md: "3rem", lg: "5rem" }}
              left={{ lg: "5rem", xl: "10rem" }}
              w={{ lg: "400px", xl: "450px" }}
              fontFamily="Poppins"
            >
              <Text
                fontSize={{ base: "20", md: "28", lg: "2xl", xl: "3xl" }}
                fontWeight="bold"
              >
                {nombreNegocio}
              </Text>
              <Box>
                <Text
                  fontSize={{ base: "10", md: "18", lg: "lg", xl: "xl" }}
                  fontWeight="semibold"
                >
                  {descripcion}
                </Text>
                <Text
                  fontSize={{ base: "10", md: "18", lg: "md", xl: "lg" }}
                  fontWeight="light"
                >
                  {direccion}
                </Text>
              </Box>
            </Stack>
          </Grid>
        </Box>

        <Box height="41.8%">
          <Stack
            mt={{ base: "2.3rem", md: "3rem", lg: "4rem" }}
            px={{ base: "1rem", md: "2rem", lg: "3rem" }}
            flexDir="row"
            justifyContent="space-between"
          >
            <Stack
              justifyContent={{ base: "center" }}
              fontSize={{ base: "md", md: "lg", lg: "xl" }}
              w={{ base: "150px", md: "250px", lg: "50%" }}
            >
              <Text
                color="#F8D676"
                fontWeight="semibold"
                fontSize={{ base: "16" }}
              >
                {horario}
              </Text>
            </Stack>

            <Stack
              flexDir="row"
              style={{
                marginTop: "0",
              }}
              gap={3}
              alignItems="center"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" color="#F8D676" />
              <FontAwesomeIcon
                icon={faFacebook}
                size="2x"
                color="#F8D676"
                style={{ marginTop: "0" }}
              />
              <FontAwesomeIcon
                icon={faWhatsapp}
                size="2x"
                color="#F8D676"
                style={{
                  marginTop: "0",
                }}
              />
            </Stack>
          </Stack>

          <Text
            textAlign="center"
            fontSize="md"
            mt={{ md: "1.5rem", lg: "2rem" }}
            fontWeight="semibold"
            color="#F8D676"
          >
            {aclaracion}
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
