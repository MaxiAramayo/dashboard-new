import React from "react";
import {
  Link,
  Box,
  Flex,
  Text,
  Button,
  Stack,
  H1,
  Grid,
  GridItem,
  Heading,
  Center,
} from "@chakra-ui/react";

import Image from "next/image";

import iconF1 from "../images/Features/icon-Freature1.svg";
import iconF2 from "../images/Features/icon-Freature2.svg";
import iconF3 from "../images/Features/icon-Freature3.svg";
import iconF4 from "../images/Features/icon-Freature4.svg";
import iconF5 from "../images/Features/icon-Freature5.svg";
import iconF6 from "../images/Features/icon-Freature6.svg";

const Features = () => {
  return (
    <>
      <Stack textAlign="center" gap={{ lg: 36, base: 20 }}>
        <Stack gap={2}>
          <Heading>Caracteristicas de TuTienda</Heading>

          <Text
            width="95%"
            style={{
              margin: " 0 auto",
            }}
          >
            Estas son algunas de las caracteristicas que puedes encontrar en
            TuTienda para mejorar tus ventas.
          </Text>
        </Stack>

        <Grid
          gridTemplateColumns={{ md: "repeat(3,1fr)" }}
          gap={{ lg: "120px", base: 16 }}
        >
          <Stack gap={3}>
            <Image src={iconF1} alt="iconF1" />
            <Heading>Flexible</Heading>

            <Text
              width="80%"
              style={{
                margin: " 0 auto",
              }}
            >
              El programa es flexible y se adapta a las necesidades de tu
              negocio. Puedes cambiar el diseño de tu tienda, agregar productos,
              cambiar precios, etc.
            </Text>
          </Stack>

          <Stack gap={3}>
            <Image src={iconF2} alt="iconF1" />
            <Heading> Comodo y Accesible </Heading>

            <Text
              width="80%"
              style={{
                margin: " 0 auto",
              }}
            >
              El programa es intuitivo y fácil de usar. No necesitas
              conocimientos técnicos para manejarlo. Puedes hacerlo desde tu
              celular o computadora sin instalar nada.
            </Text>
          </Stack>

          <Stack gap={3}>
            <Image src={iconF3} alt="iconF2" />
            <Heading>Seguro</Heading>

            <Text
              width="80%"
              style={{
                margin: " 0 auto",
              }}
            >
              El programa es seguro y protege la información de tu negocio. Tus
              datos están protegidos y no se comparten con nadie.
            </Text>
          </Stack>

          <Stack gap={3}>
            <Image src={iconF4} alt="iconF3" />
            <Heading>Rapido</Heading>

            <Text
              width="80%"
              style={{
                margin: " 0 auto",
              }}
            >
              El programa te ayuda a ser rapido y eficiente a la hora de vender
              tus productos. Los clientes pueden ver tu inventario y comprar
              desde su celular.
            </Text>
          </Stack>

          <Stack gap={3}>
            <Image src={iconF5} alt="iconF3" />
            <Heading>Eficiente</Heading>

            <Text
              width="80%"
              style={{
                margin: " 0 auto",
              }}
            >
              El programa es eficiente y te permite administrar tu negocio de
              manera fácil y rápida. Puedes hacer Ventas, Administracion de
              inventario, etc.
            </Text>
          </Stack>

          <Stack gap={3}>
            <Image src={iconF6} alt="iconF3" />
            <Heading>Confiable</Heading>

            <Text
              width="80%"
              style={{
                margin: " 0 auto",
              }}
            >
              El programa es confiable y siempre tendra soporte. Si tienes
              alguna duda o problema, puedes contactarnos y te ayudaremos.
            </Text>
          </Stack>
        </Grid>
      </Stack>
    </>
  );
};

export default Features;
