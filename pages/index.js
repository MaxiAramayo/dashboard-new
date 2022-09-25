import Footer from "../components/landing/Footer";
import Home from "../components/landing/Home";
import Features from "../components/landing/Features";
import Layout from "../components/layouts/Layout";
import { useAuth } from "../context/AuthContext";
import Questions from "../components/landing/Questions";
import Pricings from "../components/landing/pricings/Pricings";
import { Box } from "@chakra-ui/react";
import Contact from "../components/landing/Contact";

export default function Landing() {
  return (
    <Layout>
      <Box width="85%" mx="auto">
        <Home />
        <Features />
      </Box>
      <Questions />
      <Pricings />
      <Contact />
      <Footer />
    </Layout>
  );
}
