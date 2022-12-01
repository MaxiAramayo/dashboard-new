import React, { useState } from "react";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  Grid,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
  Input,
  FormLabel,
  Select,
  Textarea,
  Badge,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";

import { validacionDelSelect } from "../../validators/validator";

const Checkout = ({ carrito, total }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const incluirDireccion = watch("FormaDeConsumir");
  const incluirPago = watch("FormaDePago");

  const onSubmit = (data) => {
    const {
      nombre,
      FormaDeConsumir,
      apellido,
      Direccion,
      FormaDePago,
      Aclaracion,
    } = data;

    let mensaje = "";

    if (FormaDeConsumir === "delivery") {
      mensaje = `*Hola Tienda: Aramayo*
    _Nombre: ${nombre} ${apellido}_
    Envio: *Por Delivery*
    ${carrito.map((item) => {
      return `
      *${item.nombre}* (${item.cantidad}) _$${item.precio}_
      -----------------------------------------------------
        `;
    })}
    direccion: *${Direccion}*
    ${Aclaracion ? `Aclaracion: ${Aclaracion}` : ""}
    *El costo del envio a cargo del restaurante/Cadete*
    pago: *${FormaDePago}*
    Total: _$${total}_
  `;
    } else {
      mensaje = `*Hola Tienda: Aramayo*
    _Nombre: ${nombre} ${apellido}_
    Envio: *Retira en Restaurante*
    ${carrito.map((item) => {
      return `
      *${item.nombre}* (${item.cantidad}) _$${item.precio}_
      -----------------------------------------------------
      `;
    })}
    ${Aclaracion ? `Aclaracion: ${Aclaracion}` : ""}
    pago: *${FormaDePago}*
    Total: _$${total}_`;
    }

    console.log(data);

    console.log(mensaje);

    window.open(
      `https://wa.me/+543854402944?text=${encodeURIComponent(mensaje)}`
    );
  };

  return (
    <>
      <Box fontFamily="Dosis">
        <Heading
          textAlign="center"
          fontSize={32}
          fontFamily="Dosis"
          fontWeight={"semibold"}
          color="#815EE8"
          py={5}
        >
          Checkout
        </Heading>

        <FormControl>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack>
              <Stack>
                <Input
                  type="text"
                  placeholder="Nombre"
                  {...register("nombre", {
                    required: true,
                  })}
                />

                {errors.nombre?.type === "required" && (
                  <Alert rounded="md" status="warning">
                    <AlertIcon />
                    Rellene el campo nombre
                  </Alert>
                )}

                <Input
                  type="text"
                  placeholder="Apellido"
                  {...register("apellido", {
                    required: true,
                  })}
                />

                {errors.apellido?.type === "required" && (
                  <Alert rounded="md" status="warning">
                    <AlertIcon />
                    Rellene el campo apellido
                  </Alert>
                )}
              </Stack>

              <Stack>
                <FormLabel fontWeight={"semibold"}>Forma de Consumir</FormLabel>

                <Select
                  {...register("FormaDeConsumir", {
                    validate: validacionDelSelect,
                  })}
                >
                  <option selected disabled value={""}>
                    Selecciona la forma de consumir
                  </option>
                  <option value="delivery">Delivery</option>
                  <option value="take">Retirar en el restaurante</option>
                </Select>

                {errors.FormaDeConsumir && (
                  <Alert rounded="md" status="warning">
                    <AlertIcon />
                    Seleccione una opcion
                  </Alert>
                )}

                {incluirDireccion === "delivery" ? (
                  <Stack>
                    <Textarea
                      type="text"
                      placeholder="Aclaracion de la direccion"
                      {...register("Direccion", { required: true })}
                    />
                    {errors.Direccion?.type === "required" && (
                      <Alert rounded="md" status="warning">
                        <AlertIcon />
                        La direccion es necesaria
                      </Alert>
                    )}
                  </Stack>
                ) : (
                  <></>
                )}

                {incluirDireccion === "take" && (
                  <Badge
                    fontSize={13}
                    p={2}
                    colorScheme="whatsapp"
                    rounded="md"
                  >
                    Retira en el local
                  </Badge>
                )}
              </Stack>

              <Stack>
                <FormLabel fontWeight={"semibold"}>Forma de Pago</FormLabel>
                <Select
                  {...register("FormaDePago", {
                    validate: validacionDelSelect,
                  })}
                >
                  <option selected disabled value={""}>
                    Selecciona la forma de Pago
                  </option>
                  <option value="efectivo">Efectivo</option>
                  <option value="tarjeta">Tarjeta</option>
                </Select>

                {errors.FormaDePago && (
                  <Alert rounded="md" status="warning">
                    <AlertIcon />
                    Seleccione un metodo de pago
                  </Alert>
                )}

                {incluirPago === "efectivo" ? (
                  <Stack>
                    <Badge
                      fontSize={13}
                      p={2}
                      colorScheme="whatsapp"
                      rounded="md"
                    >
                      Pago En Efectivo
                    </Badge>
                  </Stack>
                ) : (
                  <></>
                )}

                {incluirPago === "tarjeta" ? (
                  <Stack>
                    <Badge
                      fontSize={13}
                      p={2}
                      colorScheme="whatsapp"
                      rounded="md"
                    >
                      Pago Con Tarjeta
                    </Badge>
                  </Stack>
                ) : (
                  <></>
                )}

                <Textarea
                  placeholder="Aclaracion sobre el pedido"
                  {...register("Aclaracion", { required: false })}
                />
              </Stack>

              <Button type="submit" bg="#815EE8" color="white">
                Finalizar Compra
              </Button>
            </Stack>
          </form>
        </FormControl>
      </Box>
    </>
  );
};

export default Checkout;
