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
  // Image,
} from "@chakra-ui/react";

import Image from "next/image";

import phone from "../images/home/phone.svg";
import iconvideo from "../images/home/icon-video.svg";

const Home = () => {
  // Landing page content
  return (
    <Box w={"full"} bg={"white"}>
      <Flex p="5%">
        <Box>
          <Box  ml="10%" mt={"10%"} mb="10%" h="30%" w="70%" >
            <Heading as="h1" size="4xl" mb={2}>
              Bienvenido a TuTienda
            </Heading>

            <Text fontSize='xl'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              ultricies
            </Text>
          </Box>

          <Box  ml="15%">
            <Button
              fontFamily="Poppins"
              variant="solid"
              size="lg"
              fontWeight="bold"
              _hover={{
                bg: "#7C3AED",
              }}
              mr={5}
            >
              Pruebalo Gratis
            </Button>

            <Button
              fontFamily="Poppins"

              variant="solid"
              size="lg"
              fontWeight="semi-bold"
              _hover={{
                bg: "#7C3AED",
              }}
            >
              Watch Video <Stack ml={"5px"}><Image  src={iconvideo} /></Stack>
            </Button>
          </Box>
        </Box>
        
        <Box mr={"200px"} ml="20rem">
          <Image src={phone} alt="Logo" />
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
