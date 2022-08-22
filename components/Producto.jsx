import { Box, Grid, Text, Stack, Image, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faRemove } from "@fortawesome/free-solid-svg-icons";
import EditFormProducto from "./EditFormProducto";

const Producto = ({ producto, user, deleteProducto, addProducto, addCategoria, data, addFile }) => {
  const { nombre, precio, id, categoria, descripcion } = producto;
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Stack
      backgroundColor="white"
      justifyContent="space-between"
      flexDirection="row"
      p={2}
      alignItems="center"
      rounded="md"
    >
      <Box >
        <Stack gap={2}>
          <Text>{nombre}</Text>
          <Text>${precio}</Text>
        </Stack>

          <Image
          src={producto.urlImage ? producto.urlImage : "/img/no-image.png"}
          alt={producto.nombre}
        />
      </Box>

      <Box display="flex" gap={2}>
        <FontAwesomeIcon onClick={onOpen} icon={faEdit} size="lg" />
        <FontAwesomeIcon
          onClick={() => deleteProducto(user, id, true)}
          icon={faRemove}
          size="lg"
        />
      </Box>

      {isOpen ? (
        <EditFormProducto
          addProducto={addProducto}
          addCategoria={addCategoria}
          isOpen={isOpen}
          onClose={onClose}
          nombre={nombre}
          precio={precio}
          descripcion={descripcion}
          categoria={categoria}
          data={data}
          id={id}
          deleteProducto={deleteProducto}
          addFile={addFile}
        />
      ) : null}
    </Stack>
  );
};

export default Producto;
