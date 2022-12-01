import { Box, Button, Grid, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Error from "../images/404/404NotFoundLindo.svg";

const NotFound = () => {
  return (
    <>
      <Grid
        height="100vh"
        alignContent="center"
        justifyContent="center"
        fontFamily="Dosis"
        bg={"#8565E4"}
      >
        <Box
          height={{ base: "400px", md: "620px" }}
          width={{ base: "360px", md: "600px" }}
          backgroundColor="#FAFAFA"
          shadow={"2xl"}
          rounded="xl"
          transition={"all .2s ease-in-out"}
        >
          <Stack gap={10} align="center" justify="center" height="100%">
            <Image src={Error} width={300} height={180} />
            <Text fontWeight="extra-bold" fontSize={{ md: "3xl", base: "xl" }}>
              No se encontro la tienda
            </Text>
            <Box>
              <Button
                size={{ base: "md", md: "lg" }}
                color="white"
                backgroundColor="#6F46E8"
                as="a"
                href="/"
              >
                Volver
              </Button>
            </Box>
          </Stack>
        </Box>
      </Grid>
    </>
  );
};

export default NotFound;
