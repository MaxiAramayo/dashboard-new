import { db } from "../firebase/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Error404 from "./404";

import { Box, Grid, Stack, Text } from "@chakra-ui/react";
import Navbar from "../components/tienda/NavBar";
import CardTiendaProducto from "../components/tienda/CardTiendaProducto";

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

  console.log(comercio);

  const obj = {};

  comercio.map((item) => {
    {
      if (item.productos.length > 0) {
        item.productos.forEach((producto) => {
          const { categoria } = producto;
          obj[categoria] = obj[categoria]
            ? [...obj[categoria], producto]
            : [producto];
        });
      } else {
        return null;
      }
    }
  });

  console.log(obj);

  /*  return (
    <>
      <Box>
        <Navbar
          nombreNegocio={comercio.nombre}
          NavBarImage={comercio.NavBarImage}
          iconImage={comercio.iconImage}
          descripcion={comercio.descripcion}
          direccion={comercio.direccion}
          horario={comercio.horario}
          aclaracion={comercio.aclaracion}
        />

        <Box bg="#D9D9D9">
          <Grid
            gridTemplateColumns={{ base: "repeat(2, 140px)" }}
            gap={5}
            justifyContent="center"
          >
            {comercio.productos?.map((producto) => (
              <CardTiendaProducto key={producto.id} producto={producto} />
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  ); */
};

export default Tienda;
