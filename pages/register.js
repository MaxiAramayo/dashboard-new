import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";

import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import useFirebase from "../hooks/useFirebase";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import image from "../components/images/register/register-image.svg";

import Image from "next/image";

const Register = () => {
  const { user, signUp } = useAuth();

  const router = useRouter();

  const { addStore, data, error, loading } = useFirebase();

  // const [store, setstore] = useState({
  //   nombre: "",
  //   nombreUsuario: "",
  //   whatsapp: "",
  //   email: "",
  //   password: "",
  // });

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  console.log(data);

  /*  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signUp(store.email, store.password);
      await addStore(store);
      router.push("/");

      console.log(store);
    } catch (error) {
      console.log(error);
    }
  }; */

  const onSubmit = async (store) => {
    try {
      await signUp(store.email, store.password);
      await addStore(store);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box>
      <Box
        mt="5"
        ml="5"
        w="max-content"
        role="button"
        onClick={() => router.push("/")}
      >
        <Heading
          fontFamily={"Poppins"}
          p="5"
        >
          TuTienda
        </Heading>
      </Box>

      <Grid templateColumns="repeat(2, 1fr)">
        <Box mx="auto" my="auto">
          <Image src={image}></Image>
        </Box>

        <Grid placeContent="center" mr="20" height="100vh">
          <Box
            backgroundColor="#7C3AED"
            p={5}
            rounded="xl"
            color="white"
            shadow="xl"
          >
            <Text textAlign="center" p={5} fontWeight="bold" fontSize="xl">
              Register
            </Text>

            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack gap={5}>
                <FormControl>
                  <FormLabel>Nombre de la Tienda</FormLabel>
                  <Input
                    type="text"
                    {...register("nombre", {
                      requered: true,
                    })}
                    // value={store.nombre}
                    // onChange={(e) =>
                    //   setstore({ ...store, nombre: e.target.value })
                    // }
                  />

                  {errors.nombre?.type === "required" && (
                    <p className="text-red">Este campo es Obligatorio</p>
                  )}
                </FormControl>

                <FormControl>
                  <FormLabel>Nombre de usuario</FormLabel>
                  <Input
                    type="text"
                    {...register("nombreUsuario", {
                      requered: true,
                    })}
                    // value={store.nombreUsuario}
                    // onChange={(e) =>
                    //   setstore({ ...store, nombreUsuario: e.target.value })
                    // }
                  />

                  {errors.nombreUsuario?.type === "required" && (
                    <p className="text-red">Este campo es Obligatorio</p>
                  )}
                </FormControl>

                <FormControl>
                  <FormLabel>Whatsapp al que recibiras los pedidos</FormLabel>
                  <Input
                    type="text"
                    {...register("whatsapp", {
                      requered: true,
                    })}

                    // value={store.whatsapp}
                    // onChange={(e) =>
                    //   setstore({ ...store, whatsapp: e.target.value })
                    // }
                  />

                  {errors.whatsapp?.type === "required" && (
                    <p className="text-red">Este campo es Obligatorio</p>
                  )}
                </FormControl>

                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    {...register("email", {
                      requered: true,
                    })}
                    // value={store.email}
                    // onChange={(e) =>
                    //   setstore({ ...store, email: e.target.value })
                    // }
                  />

                  {errors.email?.type === "required" && (
                    <p className="text-red">Este campo es Obligatorio</p>
                  )}
                </FormControl>
                <FormControl>
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    {...register("password", {
                      requered: true,
                    })}
                    // value={store.password}
                    // onChange={(e) =>
                    //   setstore({ ...store, password: e.target.value })
                    // }
                  />

                  {errors.password?.type === "required" && (
                    <p className="text-red">Este campo es Obligatorio</p>
                  )}
                </FormControl>

                <Button type="submit" color="black">
                  SignUp
                </Button>
              </Stack>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Register;
