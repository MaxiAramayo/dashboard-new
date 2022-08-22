import { ChakraProvider } from "@chakra-ui/react";
import ProtectedRoute from "../components/ProtectedRoute";
import { AuthContextProvider } from "../context/AuthContext";
import { useRouter } from "next/dist/client/router";
import { extendTheme } from "@chakra-ui/react";

const noAuthRequired = ["/", "/login", "/register"];

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        backgroundColor: "#D9D9D9",
      },
    }),
  },
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <AuthContextProvider>
      <ChakraProvider theme={theme}>
        {noAuthRequired.includes(router.pathname) ? (
          <Component {...pageProps} />
        ) : (
          <ProtectedRoute>
            <Component {...pageProps} />
          </ProtectedRoute>
        )}
      </ChakraProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
