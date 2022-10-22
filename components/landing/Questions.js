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

import signoPregunta from "../images/question/questions.svg";

const Questions = () => {
  return (
    <>
      <Box
        height={{lg: "70rem", base: "100rem"}}
        display="flex"
        flexDirection="column"
        gap={10}
        justifyContent="center"
        mt={{base: "10rem", lg: "0"}}
      >
        <Box width="75%" mx="auto">
          <Heading fontWeight={"extrabold"}> Preguntas frecuentes </Heading>

          <Text fontSize="xl" fontWeight={"light"}>
            Estas son algunas preguntas de nuestros clientes
          </Text>
        </Box>

        <Grid
          gridTemplateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
          }}
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            gridTemplateColumns={{ md: "repeat(2,1fr)" }}
            width="75%"
            mx="auto"
            gap={5}
          >
            <GridItem>
              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem border="none">
                  <h2>
                    <AccordionButton
                      _hover={{
                        backgroundColor: "gray.50",
                      }}
                    >
                      <Heading
                        fontWeight={"bold"}
                        size="md"
                        flex="1"
                        fontFamily={"Poppins"}
                        textAlign="left"
                      >
                        ¿Como hago para adquirir el servicio?
                      </Heading>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    El servicio se adquiere a través del boton de Registro que
                    se encuentra en la parte superior derecha de la pagina. Una
                    vez registrado, se le enviará un correo electrónico con la
                    información necesaria para que pueda comenzar a utilizar el
                    servicio.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </GridItem>

            <GridItem>
              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem border="none">
                  <h2>
                    <AccordionButton
                      _hover={{
                        backgroundColor: "gray.50",
                      }}
                    >
                      <Heading
                        fontWeight={"bold"}
                        size="md"
                        flex="1"
                        fontFamily={"Poppins"}
                        textAlign="left"
                      >
                        ¿Como se que es confiable su servicio?
                      </Heading>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    El servicio le ofrece un mes de prueba totalmente gratis, si
                    no esta satisfecho con el servicio puede cancelar su
                    suscripción en cualquier momento. En caso contrario solo
                    debera pagar la mensualidad para conservar el servicio.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </GridItem>

            <GridItem>
              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem border="none">
                  <h2>
                    <AccordionButton
                      _hover={{
                        backgroundColor: "gray.50",
                      }}
                    >
                      <Heading
                        fontWeight={"bold"}
                        size="md"
                        flex="1"
                        fontFamily={"Poppins"}
                        textAlign="left"
                      >
                        ¿Como se abona?
                      </Heading>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    El servicio se abona a través de Mercado Pago, una
                    plataforma de pagos segura y confiable. Una vez que se
                    registre, se le enviará un correo electrónico con la
                    información necesaria para que pueda comenzar a utilizar el
                    servicio.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </GridItem>

            <GridItem>
              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem border="none">
                  <h2>
                    <AccordionButton
                      _hover={{
                        backgroundColor: "gray.50",
                      }}
                    >
                      <Heading
                        fontWeight={"bold"}
                        size="md"
                        flex="1"
                        fontFamily={"Poppins"}
                        textAlign="left"
                      >
                        ¿Cuenta con soporte al cliente?
                      </Heading>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Si, el servicio cuenta con soporte al cliente las 24 horas
                    del día, los 7 días de la semana. Si tiene alguna duda o
                    consulta, puede comunicarse con nosotros por esta misma
                    pagina justo debajo de los precios.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </GridItem>
          </Grid>
          <Box>
            <Image width="900px" src={signoPregunta} alt="signoPregunta" />
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default Questions;
