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

const FormProducto = ({ isOpen, onClose, addProducto, addCategoria, data }) => {
  const { user } = useAuth();

  const userDest = user.email;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (producto) => {
    if (!validarCat(producto, data)) {
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
        <DrawerHeader>Agregar producto</DrawerHeader>

        <DrawerBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack gap={5}>
              <FormControl>
                <FormLabel>Nombre</FormLabel>
                <Input
                  {...register("nombre", {
                    required: true,
                  })}
                  placeholder="Nombre"
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
                  placeholder="Descripcion"
                />
              </FormControl>

              <FormControl>
                <FormLabel>Precio</FormLabel>
                <Input
                  type="number"
                  {...register("precio", {
                    required: true,
                  })}
                  placeholder="Precio"
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
                  placeholder="Categoria"
                />
                {errors.categoria?.type === "required" && (
                  <Alert status="error">
                    <AlertIcon />
                    Este Campo es obligatorio
                  </Alert>
                )}
              </FormControl>

              <Button type="submit">Agregar producto</Button>
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

export default FormProducto;
