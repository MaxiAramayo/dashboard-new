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
  Container,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

import Image from "next/image";

import comillas from "../images/question/comillas.svg";

const Questions = () => {
  return (
    <Box>
      <Box
        opacity="0.3"
        ml={"100px"}
        mt="150px"
        position={"absolute"}
        zIndex={1}
      >
        <Image src={comillas} alt="comillas" />
      </Box>
      <Flex p="10%" bg={"white"}>
        <Box p={"5%"}>
          <Box ml="7%" mb="10" position={"realative"}>
            <Heading as="h1" size="2xl" mb="3" zIndex={2}>
              Preguntas Frecuentes
            </Heading>

            <Text as={""}>
              Estas son algunas preguntas frecuentes que nos hacen nuestros
              Clientes.
            </Text>
          </Box>

          <Grid templateColumns="repeat(2, 1fr)" gap={20}>
            <GridItem
              h="auto"
              w={"auto"}
              p="2%"
              // borderWidth="3px"
              // border={"5px"}
              // rounded="md"
              // boxShadow="lg"
            >
              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                  <AccordionButton>
                    <Box flex="10" textAlign="center">
                      <Heading size="lg">
                        ¿Como hago para adquirir el Servicio?
                      </Heading>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>

                  <AccordionPanel pb={10}>
                    <Text fontSize="lg" fontFamily={"Poppins"}>
                      El servicio se adquiere a través del boton de Registro que
                      se encuentra en la parte superior derecha de la pagina.
                      Una vez registrado, se le enviará un correo electrónico
                      con la información necesaria para que pueda comenzar a
                      utilizar el servicio.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </GridItem>

            <GridItem
              h="auto"
              w={"auto"}
              p="2%"
              // borderWidth="3px"
              // border={"5px"}
              // rounded="md"
              // boxShadow="lg"
            >
              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                  <AccordionButton>
                    <Box flex="10" textAlign="center">
                      <Heading size="lg">
                        ¿Como se que es confiable su servicio?
                      </Heading>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>

                  <AccordionPanel pb={10}>
                    <Text fontSize="lg" fontFamily={"Poppins"}>
                      El servicio le ofrece un mes de prueba totalmente gratis,
                      si no esta satisfecho con el servicio puede cancelar su
                      suscripción en cualquier momento. En caso contrario solo
                      debera pagar la mensualidad para conservar el servicio.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </GridItem>

            <GridItem
              h="auto"
              w={"auto"}
              p="2%"
              // borderWidth="3px"
              // border={"5px"}
              // rounded="md"
              // boxShadow="lg"
            >
              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                  <AccordionButton>
                    <Box flex="10" textAlign="center">
                      <Heading size="lg">¿Como se Abona?</Heading>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>

                  <AccordionPanel pb={10}>
                    <Text fontSize="lg" fontFamily={"Poppins"}>
                      El servicio se abona a través de Mercado Pago, una
                      plataforma de pagos segura y confiable. Una vez que se
                      registre, se le enviará un correo electrónico con la
                      información necesaria para que pueda comenzar a utilizar
                      el servicio.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </GridItem>

            <GridItem
              h="auto"
              w={"auto"}
              p="2%"
              // borderWidth="3px"
              // border={"5px"}
              // rounded="md"
              // boxShadow="lg"
            >
              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                  <AccordionButton>
                    <Box flex="10" textAlign="center">
                      <Heading size="lg">
                        ¿Cuenta con Soporte al Cliente el servicio?
                      </Heading>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>

                  <AccordionPanel pb={10}>
                    <Text fontSize="lg" fontFamily={"Poppins"}>
                      Si, el servicio cuenta con soporte al cliente las 24 horas
                      del día, los 7 días de la semana. Si tiene alguna duda o
                      consulta, puede comunicarse con nosotros por esta misma
                      pagina justo debajo de los precios.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </GridItem>
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
};

export default Questions;
