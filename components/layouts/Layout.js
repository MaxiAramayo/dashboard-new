import Head from "next/head";
import React from "react";

import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Mi tienda</title>

        <meta name="description" content="Mi tienda" />
      </Head>
      <Header />
      <main>{children}</main>{" "}
    </>
  );
};

export default Layout;
