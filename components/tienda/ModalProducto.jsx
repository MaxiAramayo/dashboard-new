import React, { useEffect } from "react";
import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";

import Image from "next/image";
import noImagen from "../../public/img/noimagen.jpg";

const ModalProducto = ({
  isOpen,
  setOpenModal,
  onClose,
  productoModal,
  setCarrito,
  carrito,
}) => {
    
  const agregarAlCarrito = () => {
      setCarrito([...carrito, { ...productoModal, cantidad: 1 }]);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent fontFamily="Dosis">
        <ModalCloseButton onClick={() => setOpenModal(false)} />
        <ModalBody py={16}>
          <Stack direction="row" gap={5}>
            <Image
              src={
                productoModal.urlImage === false
                  ? noImagen
                  : productoModal.urlImage
              }
              width={"170px"}
              height={"170px"}
              style={{ borderRadius: "10px", objectFit: "cover" }}
            />
            <Stack justifyContent="space-between">
              <Text fontSize={"xl"} fontWeight="bold" color="#696969">
                {productoModal.nombre}
              </Text>

              <Text color="#815EE8" fontSize={"xl"} fontWeight="bold">
                ${productoModal.precio}
              </Text>
            </Stack>
          </Stack>

          <Stack mt={5} fontWeight="semibold" fontSize={20}>
            <Text>{productoModal.descripcion}</Text>
          </Stack>
        </ModalBody>
        <ModalFooter justifyContent="center">
          <Button
            disabled={
              carrito.find((item) => item.id === productoModal.id)
                ? true
                : false
            }
            bg="#815EE8"
            color="white"
            fontSize={18}
            onClick={() => agregarAlCarrito(productoModal.id)}
          >
            {carrito.find((item) => item.id === productoModal.id)
              ? "En el carrito"
              : "Agregar al carrito"}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalProducto;
