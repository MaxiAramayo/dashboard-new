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
import {
  Link,
  Box,
  Flex,
  Text,
  Button,
  Stack,
  Heading,
} from "@chakra-ui/react";
import Image from "next/image";
import Logo from "./Logo";

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
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
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

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
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
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/how">How It works </MenuItem>
        <MenuItem to="/faetures">Features </MenuItem>
        <MenuItem to="/pricing">Pricing </MenuItem>
        <MenuItem to="/signup" isLast>
          <Button
            size="md"
            rounded="md"
            color={"black"}
            bg={"#7C3AED"}
            _hover={{
              bg: ["primary.100", "primary.100", "primary.600", "primary.600"],
            }}
          >
            Create Account
          </Button>
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
