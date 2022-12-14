import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";
import Layout from "../components/layouts/Layout";
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
    searchData
  } = useFirebase();

  useEffect(() => {
    searchData(user);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(data)

  return (
    <>
      <Layout>
        <Box>
          <Tabs isFitted>
            <TabList backgroundColor="white">
              <Tab>Productos</Tab>
              <Tab>Configuracion</Tab>
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

                />
              </TabPanel>
              <TabPanel>
                <Text>CONFIG</Text>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Layout>
    </>
  );
};

export default Dashboard;
