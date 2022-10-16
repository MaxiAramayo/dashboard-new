import { db } from "../firebase/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Error404 from "./404";

import { Box, Grid, Spinner, Stack, Text } from "@chakra-ui/react";
import Navbar from "../components/tienda/NavBar";
import CardTiendaProducto from "../components/tienda/CardTiendaProducto";
import Head from "next/head";
import SpinnerCube from "../components/spinners/SpinnerCube";
import NotFound from "../components/tienda/NotFound";
const Tienda = () => {
  const router = useRouter();
  const { url } = router.query;

  const [notFound, setNotFound] = useState(false);

  const [comercio, setComercio] = useState({});

  useEffect(() => {
    const getComercio = async () => {
      const comercioRef = collection(db, "comercios");

      const q = query(comercioRef, where("url", "==", url));

      const comercioSnap = await getDocs(q);

      if (comercioSnap.docs[0]?.data() === undefined) {
        setNotFound(true);
        return;
      }

      const dataDB = comercioSnap.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      setComercio(dataDB);
    };

    getComercio();
  }, []);

  // console.log([comercio][0][0]);

  console.log(comercio);

  const obj = {};
  const arr = [];

  if ([comercio][0][0] !== undefined) {
    [comercio][0][0].productos.map((producto) => {
      if (obj[producto.categoria] === undefined) {
        obj[producto.categoria] = [];
      }

      obj[producto.categoria].push(producto);
    });

    for (const key in obj) {
      arr.push({
        categoria: key,
        productos: obj[key],
      });
    }
  }

  console.log(obj);

  const DatosTienda = [comercio][0][0];

  console.log(DatosTienda);

  if (notFound) {
    return <NotFound />;
  }

  if (!DatosTienda) {
    return (
      <Grid height="100vh" justifyContent="center" alignContent="center">
        <SpinnerCube />
      </Grid>
    );
  }

  return (
    <>
      <Head>
        <title>Tienda {DatosTienda?.nombre}</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Dosis:wght@400;600;700&family=Poppins:wght@300;400;600;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Box >
        <Navbar
          nombreNegocio={DatosTienda?.nombre}
          NavBarImage={DatosTienda?.NavBarImage}
          iconImage={DatosTienda?.iconImage}
          descripcion={DatosTienda?.descripcion}
          direccion={DatosTienda?.direccion}
          horario={DatosTienda?.horario}
          aclaracion={DatosTienda?.aclaracion}
        />

      
      </Box>
    </>
  );
};

export default Tienda;
