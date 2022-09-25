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
} from "@chakra-ui/react";

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  //   AiOutlinePhone,
  //   FiMail,
  //   BsInstagram,
} from "react-icons/fa";

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
            <Box>
              <Heading fontWeight="extrabold">Contactanos</Heading>
              <Heading fontWeight="ligth">Directamente</Heading>
            </Box>
            <Stack fontWeight="semibold" gap={10}>
              <Box>
                {/* <AiOutlinePhone /> */}

                <Text fontSize={"xl"}> +54 4955402343 </Text>
              </Box>

              <Box>
                {/* <FiMail /> */}
                <Text fontSize={"xl"} > tutienda@ventas.com</Text>
              </Box>

              <Box>
                {/* <BsInstagram /> */}
                <Text fontSize={"xl"} > @tutienda</Text>
              </Box>
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
            p={5}
            gap={10}
            alignItems="center"
            shadow="xl"
          >
            <Box textAlign={"center"}>
              <Heading fontWeight="extrabold">Envianos</Heading>
              <Heading fontWeight="ligth">Un Mensaje </Heading>
            </Box>

            <Stack width={{ md: "70%" }}>
              <FormControl
                display="flex"
                flexDirection="column"
                justifyContent="center"
                gap={2}
              >
                <FormLabel>Ingrese su Nombre</FormLabel>
                <Input
                  type="text"
                  placeholder="Escriba su nombre completo"
                  name="name"
                />

                <FormLabel>Ingrese su Email</FormLabel>
                <Input
                  type="text"
                  placeholder="Escriba su email"
                  name="email"
                />

                <FormLabel>Ingrese el mensaje</FormLabel>
                <Textarea
                  type="text"
                  placeholder="Hola Tutienda, les escribo para..."
                  name="message"
                />

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
