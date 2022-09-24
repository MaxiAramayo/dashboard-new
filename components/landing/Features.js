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
    <Box bg={"white"} p="2%">
      {/* <Flex> */}
        <Box mb={"10"}>
          <Center>
            <Box w="60%">
              <Center mb={3}>
                <Heading size="2xl">Caracteristicas de TuTienda</Heading>
              </Center>
              <Center mb={10}>
                <Text fontSize='xl' >
                  Estas son algunas de las caracteristicas que puedes encontrar en
                  TuTienda para mejorar tus ventas.
                </Text>
              </Center>
            </Box>
          </Center>

          <Center>
            <Grid templateColumns="repeat(3, 5fr)" gap={20}>
              {/* Caracteristicas */}
              <GridItem  p={"10%"} >

                <Center>
                  <Box>
                    <Image src={iconF1} alt="iconF1" />
                  </Box>
                </Center>
                
                <Center>
                <Heading>Flexible</Heading></Center>
                <Center>
                <Text>
                  El programa es flexible y se adapta a las necesidades de tu
                  negocio. Puedes cambiar el diseño de tu tienda, agregar
                  productos, cambiar precios, etc.
                </Text></Center>
              </GridItem>

              <GridItem  p={"10%"}  >

              <Center>
                  <Box>
                    <Image src={iconF2} alt="iconF1" />
                  </Box>
                </Center>

                <Center>
                <Heading> Comodo y Accesible </Heading>
                </Center>
                <Center>
                <Text>
                  El programa es intuitivo y fácil de usar. No necesitas
                  conocimientos técnicos para manejarlo. Puedes hacerlo desde tu
                  celular o computadora sin instalar nada.
                </Text></Center>
              </GridItem>

              <GridItem  p={"10%"}  >

              <Center>
                  <Box>
                    <Image src={iconF3} alt="iconF1" />
                  </Box>
                </Center>

                <Center>
                <Heading>Seguro</Heading></Center>
                <Center>
                <Text>
                  El programa es seguro y protege la información de tu negocio.
                  Tus datos están protegidos y no se comparten con nadie.
                </Text></Center>
              </GridItem>

              <GridItem p={"10%"}  >

              <Center>
                  <Box>
                    <Image src={iconF4} alt="iconF1" />
                  </Box>
                </Center>

                <Center>
                <Heading>Eficiente</Heading></Center>
                <Center>
                <Text>
                  El programa es eficiente y te permite administrar tu negocio
                  de manera fácil y rápida. Puedes hacer Ventas, Administracion 
                  de inventario, etc.
                </Text></Center>
              </GridItem>

              <GridItem  p={"10%"}  >

              <Center>
                  <Box>
                    <Image src={iconF5} alt="iconF1" />
                  </Box>
                </Center>

                <Center>
                <Heading>Rapido</Heading></Center>
                <Center>
                <Text>
                  El programa te ayuda a ser rapido y eficiente a la hora de vender 
                  tus productos. Los clientes pueden ver tu inventario y comprar
                  desde su celular.
                </Text></Center>
              </GridItem>

              <GridItem  p={"10%"}  >

              <Center>
                  <Box>
                    <Image src={iconF6} alt="iconF1" />
                  </Box>
                </Center>

                <Center>
                <Heading>Confiable</Heading></Center>
                <Center>
                <Text>
                  El programa es confiable y siempre tendra soporte. Si tienes
                  alguna duda o problema, puedes contactarnos y te ayudaremos.
                </Text></Center>
              </GridItem>
            </Grid>
          </Center>
        </Box>
      {/* </Flex> */}
    </Box>
  );
};

export default Features;
