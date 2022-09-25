import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";

import Image from "next/image";

const CardTiendaProducto = ({ producto }) => {
  return (
    <>
      <Box bg="white" w={{ base: "140px" }} mt={10} rounded="xl">
        <Box>
          <Image
            style={{
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
              objectFit: "cover",
            }}
            src={producto.urlImage}
            alt={producto.nombre}
            width="140px"
            height="130px"
          />
        </Box>

        <Stack p={2}>
          <Text fontWeight="bold" color="#696969">
            {producto.nombre}
          </Text>
          <Text fontWeight="semibold" color="#815EE8">
            ${producto.precio}
          </Text>
        </Stack>
      </Box>
    </>
  );
};

export default CardTiendaProducto;
