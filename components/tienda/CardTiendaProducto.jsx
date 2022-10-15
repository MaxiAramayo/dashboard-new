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
import React, { useEffect, useState } from "react";
import noImagen from "../../public/img/noimagen.jpg";

import Image from "next/image";
import Cart from "./Cart";
import ModalProducto from "./ModalProducto";

const CardTiendaProducto = ({ producto }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [openCart, setOpenCart] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [productoModal, setProductoModal] = useState({});
  // const [carrito, setCarrito] = useState([]);

  const [carrito, setCarrito] = useState(
    localStorage.getItem("carrito")
      ? JSON.parse(localStorage.getItem("carrito"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const handleOpenCart = () => {
    setOpenModal(false);
    setOpenCart(true);
    onOpen();
  };

  const handleOpenModal = (produ) => {
    setOpenModal(true);
    onOpen();
    setProductoModal(produ);
  };

  console.log(carrito);

  return (
    <>
      {openCart && (
        <Cart
          isOpen={isOpen}
          onClose={onClose}
          setOpenCart={setOpenCart}
          carrito={carrito}
          setCarrito={setCarrito}
        />
      )}

      {openModal && (
        <ModalProducto
          isOpen={isOpen}
          setOpenModal={setOpenModal}
          onClose={onClose}
          productoModal={productoModal}
          setCarrito={setCarrito}
          carrito={carrito}
        />
      )}

      <Grid
        gridTemplateColumns={"repeat(1,1fr)"}
        width={{ base: "95%" }}
        mx="auto"
      >
        {producto?.map((item, index) => (
          <>
            <Box key={index} p={3} fontFamily="Dosis">
              <Heading color={"#ACACAC"} ml="20px" my={5} fontFamily="Dosis">
                {item.categoria}
              </Heading>

              <Grid
                gridTemplateColumns={{ base: "repeat(2,1fr)" }}
                rowGap={{ base: "37px" }}
                justifyItems="center"
              >
                {item.productos.map((produ) => (
                  <Box
                    key={produ.id}
                    bg="#F8F8F8"
                    rounded="xl"
                    w={{ base: "150px" }}
                    onClick={() => handleOpenModal(produ)}
                  >
                    <Image
                      src={produ.urlImage === false ? noImagen : produ.urlImage}
                      alt={produ.nombre}
                      width="150px"
                      height="140px"
                      style={{
                        borderTopLeftRadius: "10px",
                        borderTopRightRadius: "10px",
                        objectFit: "cover",
                      }}
                    />

                    <Stack p={2}>
                      <Text fontSize={"md"} fontWeight="bold" color="#696969">
                        {produ.nombre}
                      </Text>
                      <Text color="#815EE8" fontWeight="extrabold">
                        $ {produ.precio}
                      </Text>
                    </Stack>
                  </Box>
                ))}
              </Grid>
            </Box>

            <Stack
              // mt={"20px"}
              w={"full"}
              h="9px"
              bg="#D4D4D4"
            ></Stack>
          </>
        ))}
      </Grid>
      {/*  CARRITO */}
      <Box bg="black" width="100%" position="fixed" h="53px">
        <Box
          bg="#6F46E8"
          width="120px"
          h="45px"
          left={{ base: "35%", md: "45%", lg: "48%" }}
          style={{
            position: "fixed",
            bottom: "0",
            right: "0",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            // left: "35%",
            fontSize: "15px",
            fontWeight: "bold",
            color: "white",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            cursor: "pointer",
          }}
          onClick={() => handleOpenCart()}
        >
          <Text>Ver Carrito</Text>
        </Box>
      </Box>
    </>
  );
};

export default CardTiendaProducto;
