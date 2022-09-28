import { ChakraProvider } from "@chakra-ui/react";
import ProtectedRoute from "../components/ProtectedRoute";
import { AuthContextProvider } from "../context/AuthContext";
import { useRouter } from "next/dist/client/router";
import { extendTheme } from "@chakra-ui/react";

const noAuthRequired = ["/", "/login", "/register", "/[url]"];

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        backgroundColor: "white",
      },
    }),
  },

  fonts: {
    Poppins: "Poppins, sans-serif",
    Dosis: "Dosis, sans-serif",
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
