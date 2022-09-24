import Footer from "../components/landing/Footer";
import Home from "../components/landing/Home";
import Features from "../components/landing/Features";
import Layout from "../components/layouts/Layout";
import { useAuth } from "../context/AuthContext";
import Questions from "../components/landing/Questions";
import Pricings from "../components/landing/pricings/Pricings";
import { Box } from "@chakra-ui/react";

export default function Landing() {
  const { user } = useAuth();

  console.log(user);

  return (
    <Layout>
      <Home />
      <Features />
      <Questions />
      <Pricings />
      <Footer />
    </Layout>
  );
}
