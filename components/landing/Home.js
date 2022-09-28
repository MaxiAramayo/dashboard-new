import React from "react";
import {
  Link,
  Box,
  Flex,
  Text,
  Button,
  Stack,
  Heading,
  Spacer,
  Center,
  Grid,
  // Image,
} from "@chakra-ui/react";
import Image from "next/image";
import phone from "../images/home/phone.svg";
import iconvideo from "../images/home/icon-video.svg";

const Home = () => {
  // Landing page content
  return (
    <Grid
      gridTemplateColumns={{ lg: "repeat(2,1fr)" }}
      height={{ lg: "100vh" }}
      gap={{base: 5}}
    >
      <Stack gap={3} mt={{ lg: 200 }} width="80%" mx="auto">
        <Box >
          <Heading as="h1" size={{ base: "2xl", md: "4xl" }} mb={2}>
            Bienvenido a TuTienda
          </Heading>

          <Text fontSize="xl" >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            ultricies
          </Text>
        </Box>

        <Stack direction={{ sm: "row", base: "column" }} gap={2}>
          <Button
            fontFamily="Poppins"
            variant="solid"
            fontWeight="bold"
            transition={"all .3s ease-in-out"}
            _hover={{
              bg: "#7C3AED",
              color: "white",
            }}
          >
            Pruebalo Gratis
          </Button>

          <Button
            fontFamily="Poppins"
            variant="solid"
            fontWeight="semi-bold"
            transition={"all .3s ease-in-out"}
            _hover={{
              bg: "#7C3AED",
              color: "white",
            }}
          >
            Ver Video{" "}
            <Stack ml={3}>
              <Image src={iconvideo} alt="iconVideo" />
            </Stack>
          </Button>
        </Stack>
      </Stack>

      <Stack
        justifyContent="center"
        mx={{ base: "auto" }}
        maxWidth={{ base: "250px", md: "400px" }}
      >
        <Image src={phone} alt="Logo" />
      </Stack>
    </Grid>
  );
};

export default Home;
