import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
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
} from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";
import plusCircle from "../images/cart/plus.svg";
import restCircle from "../images/cart/rest.svg";
import noImagen from "../../public/img/noimagen.jpg";
import Checkout from "./Checkout";

const Cart = ({ isOpen, onClose, setOpenCart, carrito, setCarrito }) => {
  const editarCantidad = (id, opcion) => {
    let productos = carrito.map((producto) => {
      if (producto.id === id) {
        if (opcion === "aumentar") {
          producto.cantidad++;
        } else if (opcion === "restar") {
          if (producto.cantidad > 1) {
            producto.cantidad--;
          } else {
            producto.cantidad = 0;
          }
        }
      }
      return producto;
    });

    carrito.map((item) => {
      if (item.id === id) {
        if (item.cantidad === 0) {
          productos = eliminarCarrito(id);
        }
      }
    });

    setCarrito(productos);
  };

  const eliminarCarrito = (id) => {
    const productoNuevo = carrito.filter((item) => item.id !== id);
    return productoNuevo;
  };

  const total = carrito.reduce(
    (actual, producto) => actual + producto.precio * producto.cantidad,
    0
  );

  //--------------------------------------------------------------------------------

  const [checkout, setcheckout] = useState(false);

  return (
    <>
      <Drawer onClose={onClose} isOpen={isOpen} size="full">
        <DrawerOverlay />
        <DrawerContent fontFamily="Dosis">
          <DrawerCloseButton onClick={() => setOpenCart(false)} />
          <DrawerHeader fontWeight={"bold"} color="#696969">
            {checkout ? "" : "CARRITO"}
          </DrawerHeader>
          <DrawerBody>
            {checkout ? (
              <Checkout carrito={carrito} total={total} />
            ) : (
              <Stack justifyContent="space-between" h="97%">
                <Stack>
                  {carrito.map((item) => (
                    <Grid
                      gridTemplateColumns="1fr 2fr"
                      bg="#F7F7F7"
                      rounded="xl"
                      gap={3}
                    >
                      <Image
                        src={item.urlImage === false ? noImagen : item.urlImage}
                        width={"105px"}
                        height={"107px"}
                        style={{
                          borderTopLeftRadius: "10px",
                          borderBottomLeftRadius: "10px",
                          objectFit: "cover",
                        }}
                      />

                      <Grid templateColumns="repeat(2, 1fr)">
                        <Stack justifyContent="center">
                          <Text fontSize={18} fontWeight="bold" color="#696969">
                            {item.nombre}
                          </Text>
                          <Text
                            color="#815EE8"
                            fontSize={"xl"}
                            fontWeight="bold"
                          >
                            ${item.precio}
                          </Text>
                        </Stack>

                        <Stack
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Image
                            src={restCircle}
                            width={"30px"}
                            height={"30px"}
                            style={{ objectFit: "cover" }}
                            onClick={() => editarCantidad(item.id, "restar")}
                          />
                          <Box
                            width="30px"
                            textAlign="center"
                            style={{
                              margin: "0",
                            }}
                          >
                            <Text
                              fontSize={22}
                              fontWeight="bold"
                              color="#696969"
                            >
                              {item.cantidad}
                            </Text>
                          </Box>
                          <Image
                            src={plusCircle}
                            width={"30px"}
                            height={"30px"}
                            style={{ objectFit: "cover" }}
                            onClick={() => editarCantidad(item.id, "aumentar")}
                          />
                        </Stack>
                      </Grid>
                    </Grid>
                  ))}
                </Stack>

                <Stack>
                  <Stack direction="row" alignItems="center">
                    <Heading
                      size="xl"
                      fontWeight={"bold"}
                      color="#696969"
                      fontFamily="Poppins"
                    >
                      Total:
                    </Heading>
                    <Text fontSize="2xl" fontWeight="semibold" color="#696969">
                      ${total}
                    </Text>
                  </Stack>

                  <Button
                    bg="#815EE8"
                    color="white"
                    fontSize={18}
                    w="100%"
                    p="3"
                    onClick={() => setcheckout(true)}
                  >
                    Checkout
                  </Button>
                </Stack>
              </Stack>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Cart;
