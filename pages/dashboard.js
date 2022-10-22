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
} from "@chakra-ui/react";
import Productos from "../components/Productos";
import Configuracion from "../components/Configuracion";

const Dashboard = () => {
  const router = useRouter();

  const { user } = useAuth();

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
        <Text
          fontFamily="Poppins"
          backgroundColor="white"
          textAlign="center"
          p={2}
          fontSize="2xl"
          fontWeight="semiBold"
        >
          Bienvenido
          <Text fontWeight="Bold">{data[0]?.nombre}</Text>
        </Text>
        <Box>
          <Tabs isFitted>
            <TabList
              backgroundColor="white"
              fontFamily="Poppins"
              color={"black"}
              onSelect={"black"}
            >
              <Tab fontSize="2xl" fontWeight="bold">
                Productos
              </Tab>
              <Tab fontSize="2xl" fontWeight="bold">
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
