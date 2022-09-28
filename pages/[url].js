import { db } from "../firebase/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Error404 from "./404";

import { Box, Grid, Stack, Text } from "@chakra-ui/react";
import Navbar from "../components/tienda/NavBar";
import CardTiendaProducto from "../components/tienda/CardTiendaProducto";
import Head from "next/head";

const Tienda = () => {
  const router = useRouter();
  const { url } = router.query;

  const [comercio, setComercio] = useState({});

  useEffect(() => {
    const getComercio = async () => {
      const comercioRef = collection(db, "comercios");

      const q = query(comercioRef, where("url", "==", url));

      const comercioSnap = await getDocs(q);

      if (comercioSnap.docs[0]?.data() === undefined) {
        // router.push("/errorPage");
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

  // [comercio][0].map((item) => {
  //   {
  //     if (item.productos.length > 0) {
  //       item.productos.forEach((producto) => {
  //         const { categoria } = producto;
  //         obj[categoria] = obj[categoria]
  //           ? [...obj[categoria], producto]
  //           : [producto];
  //       });
  //     } else {
  //       return null;
  //     }
  //   }
  // });

  console.log(obj);

  const DatosTienda = [comercio][0][0];

  console.log(DatosTienda);

  return (
    <>
      <Head>
        <title>Tienda {DatosTienda?.nombre}</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Dosis:wght@400;600;700&family=Poppins:wght@300;400;600;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Box>
        <Navbar
          nombreNegocio={DatosTienda?.nombre}
          NavBarImage={DatosTienda?.NavBarImage}
          iconImage={DatosTienda?.iconImage}
          descripcion={DatosTienda?.descripcion}
          direccion={DatosTienda?.direccion}
          horario={DatosTienda?.horario}
          aclaracion={DatosTienda?.aclaracion}
        />

        <Box bg="#D9D9D9">
          <CardTiendaProducto producto={arr} />
        </Box>
      </Box>
    </>
  );
};

export default Tienda;
