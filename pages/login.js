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
    <Grid placeContent="center" height="100vh">
      <Box
        backgroundColor="whatsapp.500"
        p={5}
        rounded="xl"
        color="white"
        shadow="xl"
      >
        <Text textAlign="center">Login</Text>

        <form onSubmit={handleSubmit}>
          <Stack gap={5}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
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
