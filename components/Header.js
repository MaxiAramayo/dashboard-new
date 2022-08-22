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
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";

const Header = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  return (
    <>
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        p={5}
        backgroundColor="white"
        
      >
        <Text color="black" fontSize="xl" fontWeight="bold">
          <Link href="/">Logo</Link>
        </Text>
        {user ? (
          <Image
            onClick={logout}
            src="/img/exit.png"
            alt="exit img"
            width={20}
            height={20}
          />
        ) : (
          <Link href="/login">
            <Button>Login</Button>
          </Link>
        )}
      </Stack>
    </>
  );
};

export default Header;
