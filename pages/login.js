import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import ImageLogin from "../components/images/login/login-background.jpg";
import Image from "next/image";

const Login = () => {
  const { user, loginUser } = useAuth();

  const router = useRouter();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await loginUser(data.email, data.password);

      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Grid placeContent="center" height="100vh" bg="blue.400">
      <Box
        backgroundColor="#7C3AED"
        p={5}
        rounded="xl"
        color="white"
        shadow="xl"
      >
        <Text textAlign="center">Inicio de Sesion</Text>

        <form onSubmit={handleSubmit}>
          <Stack gap={5}>
            <FormControl>
              <FormLabel>Correo</FormLabel>
              <Input
                type="email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Contraseña</FormLabel>
              <Input
                type="password"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
            </FormControl>

            <Button type="submit" color="black">
              Login
            </Button>
          </Stack>
        </form>
      </Box>
    </Grid>
  );
};

export default Login;
