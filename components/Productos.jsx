import {
  Box,
  FormControl,
  Input,
  Select,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import FormProducto from "./FormProducto";
import Producto from "./Producto";

const Productos = ({
  addProducto,
  addCategoria,
  data,
  error,
  productos,
  user,
  deleteProducto,
  addFile,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const obj = {};

  data.map((item) => {
    {
      if (item.productos.length > 0) {
        item.productos.forEach((producto) => {
          const { categoria } = producto;
          obj[categoria] = obj[categoria]
            ? [...obj[categoria], producto]
            : [producto];
        });
      } else {
        return null;
      }
    }
  });

  return (
    <>
      <Box
        flexDirection="row"
        justifyContent="space-around"
        alignItems="center"
        display="flex"
        backgroundColor="white"
        p={2}
        rounded="xl"
        gap={3}
      >
        <Stack flexDirection="row" alignItems="center" gap="2px">
          <FormControl width="20">
            <Select placeholder="Categorias"></Select>
          </FormControl>

          <FormControl
            style={{
              marginTop: "0",
            }}
            width="70"
          >
            <Input type="text" placeholder="Buscar..." />
          </FormControl>
        </Stack>

        <FontAwesomeIcon
          style={{
            marginTop: "0",
          }}
          icon={faPlus}
          size="2x"
          onClick={onOpen}
        />
      </Box>

      <Stack marginTop={5}>
        {Object.keys(obj).map((key) => (
          <Box key={key}>
            <Text>{key}</Text>
            {obj[key].map((producto, index) => (
              <Producto
                key={index}
                producto={producto}
                user={user}
                deleteProducto={deleteProducto}
                addProducto={addProducto}
                addCategoria={addCategoria}
                data={data}
              />
            ))}
          </Box>
        ))}
      </Stack>

      {isOpen ? (
        <FormProducto
          addProducto={addProducto}
          addCategoria={addCategoria}
          isOpen={isOpen}
          onClose={onClose}
          data={data}
          addFile={addFile}
        />
      ) : null}
    </>
  );
};

export default Productos;
