import {
  Box,
  ButtonGroup,
  Container,
  Grid,
  Heading,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <Grid
      bg="#1E1E1E"
      h="15rem"
      color="white"
      p={10}
      gridTemplateColumns={{ md: "repeat(2,1fr)" }}
    >
      <Stack width={{ lg: "85%" }} mx="auto" gap={4}>
        <Stack>
          <Heading fontWeight={"extrabold"}>TuTienda</Heading>

          <Text>
            TuTienda es una plataforma de comercio electronico que te permite
            vender tus productos en linea.
          </Text>
        </Stack>

        <Text>
          &copy; {new Date().getFullYear()} TuTienda. Todos los derechos
          reservados.
        </Text>

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

      <Stack justifySelf="center" fontWeight="semibold">
        <Text>Home</Text>
        <Text>Features</Text>
        <Text>Questions</Text>
        <Text>Pricings</Text>
      </Stack>
    </Grid>
  );
};

export default Footer;
