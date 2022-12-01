import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";
// import Layout from "../components/layouts/Layout";
import useFirebase from "../hooks/useFirebase";
import {
  Avatar,
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Link,
} from "@chakra-ui/react";
import Productos from "../components/Productos";
import Configuracion from "../components/Configuracion";

const Dashboard = () => {
  const router = useRouter();

  const { user, logout } = useAuth();

  const {
    addStore,
    data,
    loading,
    error,
    /* getStore, */
    addCategoria,
    addProducto,
    deleteProductosDeCategoria,
    deleteProducto,
    searchData,
    UpdateProductoConImagen,
    addFile,
  } = useFirebase();

  const [userMail, setUserMail] = useState("");

  useEffect(() => {
    searchData(user);
    setUserMail(user.email);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(data);

  return (
    <>
      {/* <Layout> */}
      <Stack
        justifyContent="space-between"
        flexDir="row"
        alignItems="center"
        width={{ base: "100%", md: "90%", lg: "75%", xl: "60%", "2xl": "60%" }}
        mx="auto"
        px={{ base: "2", md: "0" }}
      >
        <Box
          fontSize={{
            base: "lg",
            md: "xl",
            lg: "xl",
            xl: "xl",
            "2xl": "xl",
          }}
        >
          <Text
            fontFamily="Poppins"
            backgroundColor="white"
            p={2}
            fontWeight="semiBold"
          >
            Bienvenido
            <Text fontWeight="Bold">{data[0]?.nombre}</Text>
          </Text>
        </Box>

        <Button
          w="120px"
          h="40px"
          p={2}
          rounded="md"
          color={"white"}
          bg={"#7C3AED"}
          border="2px"
          transition="all 0.2s ease"
          _hover={{
            bg: "white",
            color: "#7C3AED",
            border: "2px",
            borderColor: "#7C3AED",
            boxSizing: "content-box",
          }}
          onClick={logout}
        >
          Cerrar Sesión
        </Button>
      </Stack>

      <Box
        width={{ base: "100%", md: "90%", lg: "75%", xl: "60%", "2xl": "60%" }}
        mx="auto"
        px={{ base: "2" }}
      >
        <Tabs isFitted variant="soft-rounded" colorScheme="green">
          <TabList
            backgroundColor="white"
            fontFamily="Poppins"
          >
            <Tab
              fontSize={{
                base: "lg",
                md: "xl",
                lg: "xl",
                xl: "xl",
                "2xl": "xl",
              }}
              fontWeight="bold"
            >
              Productos
            </Tab>
            <Tab
              fontSize={{
                base: "lg",
                md: "xl",
                lg: "xl",
                xl: "xl",
                "2xl": "xl",
              }}
              fontWeight="bold"
            >
              Configuracion
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Productos
                data={data}
                error={error}
                addCategoria={addCategoria}
                productos={data.productos}
                addProducto={addProducto}
                user={user.email}
                deleteProducto={deleteProducto}
                UpdateProductoConImagen={UpdateProductoConImagen}
                addFile={addFile}
              />
            </TabPanel>

            <TabPanel>
              <Configuracion
                user={userMail}
                data={data}
                error={error}
                deleteProductosDeCategoria={deleteProductosDeCategoria}
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      {/* </Layout> */}
    </>
  );
};

export default Dashboard;
