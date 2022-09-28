// import {
//   Avatar,
//   Box,
//   Button,
//   Menu,
//   MenuButton,
//   MenuItem,
//   MenuList,
//   Stack,
//   Text,
// } from "@chakra-ui/react";
// import Link from "next/link";
import React from "react";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/dist/client/router";
import { Box, Flex, Text, Stack, Heading } from "@chakra-ui/react";

import Link from "next/link";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Heading fontFamily={"Poppins"}>TuTienda</Heading>
      {/* <Logo
        w="100px"
        color={["white", "white", "primary.500", "primary.500"]}
      /> */}
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="black"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="black"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const MenuItem = ({ children, isLast, to = "#", ...rest }) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "column", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem>Home</MenuItem>
        <MenuItem>How It works </MenuItem>
        <MenuItem>Features </MenuItem>
        <MenuItem>Pricing </MenuItem>
        <MenuItem isLast>
          <Stack direction={{ md: "row" }}>
            <Box
              p={2}
              rounded="md"
              color={"white"}
              bg={"#7C3AED"}
              border="2px"
              transition="all 0.2s ease"
              _hover={{
                bg: "white",
                color: "#7C3AED",
                border: "2px",
                borderColor: "#7C3AED",
                boxSizing: "content-box",
              }}
            >
              <Link href="/login">Iniciar sesión</Link>
            </Box>
            <Box
              p={2}
              rounded="md"
              color={"white"}
              bg={"#7C3AED"}
              border="2px"
              transition="all 0.2s ease"
              _hover={{
                bg: "white",
                color: "#7C3AED",
                border: "2px",
                borderColor: "#7C3AED",
                boxSizing: "content-box",
              }}
            >
              <Link href="/login">Crear Cuenta</Link>
            </Box>
          </Stack>
        </MenuItem>
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      // mb={8}
      p={8}
      bg={"white"}
      color={["primary.700"]}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBar;

const Header = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  return (
    <>
      {/* <Stack
        flexDirection="row"
        justifyContent={"space-evenly"}
        alignItems="center"
        p={5}
        backgroundColor="whatsapp.500"
      >
        <Text color="black" fontSize="xl" fontWeight="bold">
          <Link href="/">Logo</Link>
        </Text>
        <Text color="black" fontSize="x0.5" fontWeight="bold">
          <Link href={"/"}>Contacto</Link>
        </Text>
        <Text color="black" fontSize="x0.5" fontWeight="bold">
          <Link href={"/"}>guia</Link>
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
          <>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-beatween",
              alignItems: "center",
              
            }}
          >
            <Link href="/register">
              <Button>Try For Free</Button>
            </Link>
            <Link href="/login">
              <Button>Login</Button>
            </Link>

          </div>

          </>
        )}
      </Stack>   */}
    </>
  );
};

// export default Header;
