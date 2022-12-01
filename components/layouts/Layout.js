/* eslint-disable @next/next/no-page-custom-font */
import { Box } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Mi tienda</title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Dosis:wght@400;600;700&family=Poppins:wght@300;400;600;700;900&display=swap"
          rel="stylesheet"
        />

        <meta name="description" content="Mi tienda" />
      </Head>
      <Header />
      {children}
    </>
  );
};

export default Layout;
