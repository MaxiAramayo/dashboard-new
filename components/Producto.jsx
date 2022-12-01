import { Box, Grid, Text, Stack, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faRemove } from "@fortawesome/free-solid-svg-icons";
import EditFormProducto from "./EditFormProducto";
import Edit from "../components/images/dashboard/edit.svg";
import Delete from "../components/images/dashboard/delete.svg";
import Image from "next/image";

const Producto = ({
  producto,
  user,
  deleteProducto,
  addProducto,
  addCategoria,
  data,
  UpdateProductoConImagen,
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
      backgroundColor="gray.100"
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
          style={{
            borderRadius: "10px",
          }}
          objectFit="cover"
        />

        <Stack gap={2} fontFamily="Dosis">
          <Text fontWeight="bold" fontSize={{base: "sm",md: "md"}}>{nombre}</Text>
          <Text fontWeight="semibold" fontSize={{base: "sm",md: "md"}}>${precio}</Text>
        </Stack>
      </Box>

      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        width="30%"
        gap={{base: "2"}}
      >

          <Image
          onClick={onOpen}
          src={Edit}
          width="30px"
          style={{
            margin: 0,
            cursor: "pointer",
          }}
        />

        <Image
        src={Delete}
        onClick={() => eliminarImagen()}
        width="30px"
        style={{
          margin: 0,
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
          UpdateProductoConImagen={UpdateProductoConImagen}
          addFile={addFile}
        />
      ) : null}
    </Stack>
  );
};

export default Producto;
