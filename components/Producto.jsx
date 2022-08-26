import { Box, Grid, Text, Stack, Image, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faRemove } from "@fortawesome/free-solid-svg-icons";
import EditFormProducto from "./EditFormProducto";

const Producto = ({
  producto,
  user,
  deleteProducto,
  addProducto,
  addCategoria,
  data,
  addFile,
}) => {
  const { nombre, precio, id, categoria, descripcion, urlImage } = producto;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const eliminarImagen = () => {
    if (urlImage === false) {
      deleteProducto(user, id, false);
      console.log("se elimina un producto sin imagen");
    } else {
      deleteProducto(user, id, true);
      console.log("se elimina un producto con imagen");
    }
    
  };

  return (
    <Stack
      backgroundColor="white"
      justifyContent="space-between"
      flexDirection="row"
      p={2}
      alignItems="center"
      rounded="md"
    >
      <Box display="flex" alignItems="center" gap={2} width="70%">
        <Image
          src={producto.urlImage ? producto.urlImage : "/img/noimagen.jpg"}
          alt={producto.nombre}
          width="70px"
          height="70px"
          rounded="md"
          objectFit="cover"
        />

        <Stack gap={2} fontFamily="Dosis">
          <Text fontWeight="bold">{nombre}</Text>
          <Text fontWeight="semibold">${precio}</Text>
        </Stack>
      </Box>

      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        width="20%"
      >
        <FontAwesomeIcon
          onClick={onOpen}
          icon={faEdit}
          size="xl"
          style={{
            cursor: "pointer",
          }}
        />
        <FontAwesomeIcon
          onClick={() => eliminarImagen()}
          icon={faRemove}
          size="xl"
          style={{
            cursor: "pointer",
          }}
        />
      </Box>

      {isOpen ? (
        <EditFormProducto
          addProducto={addProducto}
          // addCategoria={addCategoria}
          isOpen={isOpen}
          onClose={onClose}
          nombre={nombre}
          precio={precio}
          descripcion={descripcion}
          categoria={categoria}
          data={data}
          urlImage={urlImage}
          id={id}
          producto={producto}
          deleteProducto={deleteProducto}
          addFile={addFile}
        />
      ) : null}
    </Stack>
  );
};

export default Producto;
