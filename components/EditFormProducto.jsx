import {
  Alert,
  AlertIcon,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { validarCat } from "../functions/validar";

const EditFormProducto = ({
  isOpen,
  onClose,
  addProducto,
  addCategoria,
  nombre,
  precio,
  descripcion,
  categoria,
  data,
  id,
  deleteProducto,
}) => {
  const { user } = useAuth();

  const userDest = user.email;

  console.log(nombre, precio, categoria, descripcion, id);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (producto) => {

    if (!validarCat(producto, data)) {
      deleteProducto(userDest, id, true);
      addProducto(userDest, producto);
    } else {
        alert("El nombre del producto ya existe");
    }
    onClose();
  };

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="full">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Editar producto</DrawerHeader>

        <DrawerBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack gap={5}>
              <FormControl>
                <FormLabel>Nombre</FormLabel>
                <Input
                  {...register("nombre", {
                    required: true,
                  })}
                  placeholder={nombre}
                />

                {errors.nombre?.type === "required" && (
                  <Alert status="error">
                    <AlertIcon />
                    Este Campo es obligatorio
                  </Alert>
                )}
              </FormControl>

              <FormControl>
                <FormLabel>Descripcion</FormLabel>
                <Textarea
                  {...register("descripcion")}
                  placeholder={descripcion}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Precio</FormLabel>
                <Input
                  type="number"
                  {...register("precio", {
                    required: true,
                  })}
                  placeholder={precio}
                />

                {errors.precio?.type === "required" && (
                  <Alert status="error">
                    <AlertIcon />
                    Este Campo es obligatorio
                  </Alert>
                )}
              </FormControl>

              <FormControl>
                <FormLabel>Categoria</FormLabel>
                <Input
                  {...register("categoria", { required: true })}
                  placeholder={categoria}
                />
                {errors.categoria?.type === "required" && (
                  <Alert status="error">
                    <AlertIcon />
                    Este Campo es obligatorio
                  </Alert>
                )}
              </FormControl>

              <Button type="submit">Editar el producto</Button>
            </Stack>
          </form>
        </DrawerBody>

        {/*  <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme="blue">Agregar</Button>
          </DrawerFooter> */}
      </DrawerContent>
    </Drawer>
  );
};

export default EditFormProducto;
