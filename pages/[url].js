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
          <Grid
            gridTemplateColumns={{ base: "repeat(2, 140px)" }}
            gap={5}
            justifyContent="center"
          >
            {DatosTienda?.productos?.map((producto) => (
              <CardTiendaProducto key={producto.id} producto={producto} />
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  ); 
};

export default Tienda;
