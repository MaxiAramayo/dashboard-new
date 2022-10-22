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

  console.log(producto);

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
        width={{ base: "95%", lg: "85%", xl: "70%", "2xl": "70%" }}
        mx="auto"
        justifyItems="center"
      >
        {producto?.map((item, index) => (
          <>
            <Box key={index} p={3} width="100%" fontFamily="Dosis">
              <Heading
                color={"#ACACAC"}
                fontWeight="bold"
                ml="10px"
                my={5}
                fontFamily="Dosis"
                fontSize={{
                  base: "20",
                  md: "25",
                  lg: "30",
                  xl: "30",
                  "2xl": "35",
                }}
              >
                {item.categoria}
              </Heading>

              <Grid
                gridTemplateColumns={{
                  base: "repeat(1,1fr)",
                  md: "repeat(2,1fr)",
                  lg: "repeat(2,1fr)",
                  xl: "repeat(3,1fr)",
                  "2xl": "repeat(4,1fr)",
                }}
                gap={3}
                style={{
                  width: "100%",
                }}
                justifyContent="center"
              >
                {item.productos.map((produ) => (
                  <>
                    <Box
                      width="100%"
                      display="flex"
                      flexDirection="row"
                      justifyContent="space-between"
                      bg="#EFEFEF"
                      onClick={() => handleOpenModal(produ)}
                      rounded="xl"
                      shadow="sm"
                    >
                      <Stack width="60%" p={{ base: "2", lg: 4, "2xl": 5 }}>
                        <Text
                          fontSize={{ base: "15" }}
                          fontWeight="bold"
                          color="#696969"
                        >
                          {produ.nombre}
                        </Text>

                        <Text
                          fontSize={{ base: "12" }}
                          fontWeight="light"
                          color="#B3B3B3"
                        >
                          {produ.descripcion}
                        </Text>

                        <Text
                          fontSize={{ base: "18" }}
                          color="#F8D676"
                          fontWeight="extrabold"
                        >
                          $ {produ.precio}
                        </Text>
                      </Stack>

                      <Box
                        bgImage={produ.urlImage}
                        bgPosition="center"
                        bgRepeat="no-repeat"
                        bgSize="cover"
                        width="40%"
                        height="100%"
                        borderBottomRightRadius="10px"
                        borderTopRightRadius="10px"
                      ></Box>
                    </Box>
                  </>
                ))}
              </Grid>
            </Box>
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

//   {produ.urlImage != false ? (

//                         <Image
//                           src={produ.urlImage}
//                           alt={produ.nombre}
//                           width="120px"
//                           height="120px"
//                           style={{

//                             objectFit: "cover",
//                           }}
//                         />
//                       ) : (
//                         <></>
//                       )}

// <Stack
//                     key={produ.id}
//                     bg="#F8F8F8"
//                     rounded="xl"
//                     width={{ base: "100%", lg: "100%" }}
//                     onClick={() => handleOpenModal(produ)}
//                   >
//                     <Box
//                       backgroundImage={produ.urlImage}
//                       backgroundPosition="center"
//                       backgroundRepeat="no-repeat"
//                       backgroundSize="cover"
//                       width="120px"
//                       h="auto"
//                       // justifySelf="right"
//                     >

//                     </Box>

//                    <Stack p={2} ml="15px">
//                       <Text
//                         fontSize={{ base: "15" }}
//                         fontWeight="bold"
//                         color="#696969"
//                       >
//                         {produ.nombre}
//                       </Text>

//                       <Text
//                         fontSize={{ base: "12" }}
//                         fontWeight="light"
//                         color="#B3B3B3"
//                       >
//                         {produ.descripcion}
//                       </Text>

//                       <Text
//                         fontSize={{ base: "18" }}
//                         color="#F8D676"
//                         fontWeight="extrabold"
//                       >
//                         $ {produ.precio}
//                       </Text>
//                     </Stack>
//                    </Stack>
//
