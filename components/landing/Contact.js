import React from "react";
import {
  Box,
  Text,
  Button,
  Stack,
  Grid,
  Heading,
  FormLabel,
  FormControl,
  Input,
  Textarea,
  ButtonGroup,
  IconButton,
  Icon,
  HStack,
} from "@chakra-ui/react";

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  //   AiOutlinePhone,
  //   FiMail,
  //   BsInstagram,
} from "react-icons/fa";

import Image from "next/image";

import phone from "../images/contact/phone.svg";
import mail from "../images/contact/mail.svg";
import instagram from "../images/contact/instagram.svg";

const Contact = () => {
  return (
    <>
      <Box bg="#C4B5FD" height={{ md: "40rem" }}>
        <Grid
          gridTemplateColumns={{ md: "1fr 2fr" }}
          gap={5}
          width={{ md: "85%" }}
          mx="auto"
        >
          <Stack
            bg="white"
            rounded="xl"
            height={{ md: "35rem" }}
            p={5}
            shadow="xl"
            gap={10}
          >
            <Box textAlign={"center"}>
              <Heading fontWeight="ligth">Contactanos</Heading>
              <Heading fontWeight="extrabold">Directamente</Heading>
            </Box>
            <Stack
              fontWeight="semibold"
              gap={10}
              width={{ lg: "50%" }}
              style={{ marginLeft: "140px" }}
            >
              <HStack>
                <Image src={phone} alt="phone" />
                <Text fontSize={"xl"}> +54 4955402343 </Text>
              </HStack>

              <HStack>
                <Image src={mail} alt="mail" />
                <Text fontSize={"xl"}> tutienda@ventas.com</Text>
              </HStack>

              <HStack>
                <Image src={instagram} alt="instagram" />
                <Text fontSize={"xl"}> @tutienda</Text>
              </HStack>
            </Stack>

            <ButtonGroup variant="ghost" style={{ marginLeft: "140px" }}>
              <IconButton
                as="a"
                href="#"
                aria-label="LinkedIn"
                icon={<FaLinkedin fontSize="1.25rem" />}
              />
              <IconButton
                as="a"
                href="#"
                aria-label="GitHub"
                icon={<FaGithub fontSize="1.25rem" />}
              />
              <IconButton
                as="a"
                href="#"
                aria-label="Twitter"
                icon={<FaTwitter fontSize="1.25rem" />}
              />
            </ButtonGroup>
          </Stack>

          <Stack
            bg="white"
            rounded="xl"
            p={5}
            gap={5}
            alignItems="center"
            shadow="xl"
          >
            <Box textAlign={"center"}>
              <Heading fontWeight="ligth">Envianós Un</Heading>
              <Heading fontWeight="extrabold"> Mensaje </Heading>
            </Box>

            <Stack width={{ md: "70%" }}>
              <FormControl
                display="flex"
                flexDirection="column"
                justifyContent="center"
                gap={8}
              >
                <Box>
                  <FormLabel fontFamily={"Poppins"}>
                    Ingrese su Nombre
                  </FormLabel>
                  <Input
                    type="text"
                    placeholder="Escriba su nombre completo"
                    name="name"
                  />
                </Box>

                <Box>
                  <FormLabel fontFamily={"Poppins"}>Ingrese su Email</FormLabel>
                  <Input
                    type="text"
                    placeholder="Escriba su email"
                    name="email"
                  />
                </Box>

                <Box>
                  <FormLabel fontFamily={"Poppins"}>
                    Ingrese el mensaje
                  </FormLabel>
                  <Textarea
                    type="text"
                    placeholder="Hola Tutienda, les escribo para..."
                    name="message"
                  />
                </Box>

                <Button
                  type="submit"
                  bg="#C4B5FD"
                  color="white"
                  _hover={{ bg: "#A78BFA" }}
                  _active={{ bg: "#A78BFA" }}
                  _focus={{ bg: "#A78BFA" }}
                >
                  Enviar Mensaje
                </Button>
              </FormControl>
            </Stack>
          </Stack>
        </Grid>
      </Box>
    </>
  );
};

export default Contact;
