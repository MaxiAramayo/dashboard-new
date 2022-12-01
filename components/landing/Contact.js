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

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import Image from "next/image";

import phone from "../images/contact/phone.svg";
import Mail from "../images/icons/mail.svg";
import Instagram from "../images/icons/instagram.svg";

const Contact = () => {
  return (
    <>
      <Box bg="#C4B5FD" pb="10">
        <Grid
          gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          mx="auto"
          gridRowGap="50px"
        >
          <Stack
            bg="white"
            rounded="xl"
            shadow="xl"
            gap={10}
            mx="auto"
            px="8"
            py="2"
            width={{ base: "343px" }}
          >
            <Box>
              <Heading fontWeight="ligth">Contactanos</Heading>
              <Heading fontWeight="extrabold">Directamente</Heading>
            </Box>
            <Stack fontWeight="semibold" gap={10}>
              <HStack>
                <Box px="5px">
                  <Image
                    src={phone}
                    alt="phone"
                    _style={{
                      width: "40px",
                      height: "40px",
                      padding: "5px",
                    }}
                  />
                </Box>

                <Text fontSize={"xl"}> +54 4955402343 </Text>
              </HStack>

              <HStack>
                <Image
                  src={Mail}
                  alt="mail"
                  style={{
                    width: "40px",
                  }}
                ></Image>
                <Text fontSize={"xl"}> tutienda@ventas.com</Text>
              </HStack>

              <HStack>
                <Image
                  src={Instagram}
                  alt="instagram"
                  style={{
                    width: "40px",
                  }}
                ></Image>
                <Text fontSize={"xl"}> @tutienda</Text>
              </HStack>
            </Stack>

            <ButtonGroup variant="ghost">
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
            gap={5}
            shadow="xl"
            mx="auto"
            px="8"
            py="4"
            width={{ base: "343px" }}
          >
            <Box>
              <Heading fontWeight="ligth">Envianós Un</Heading>
              <Heading fontWeight="extrabold"> Mensaje </Heading>
            </Box>
            <Stack>
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
