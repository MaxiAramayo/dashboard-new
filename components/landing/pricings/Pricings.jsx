import { Box, SimpleGrid, useColorModeValue, Stack, Heading, Text } from "@chakra-ui/react";
import * as React from "react";
import { SiHive, SiMarketo, SiMicrosoft } from "react-icons/si";
import { ActionButton } from "./ActionButton";
import { PricingCard } from "./PricingCard";

const Pricings = () => {
  return (
    <Box
      as="section"
      padding={{
        base: "10",
        md: "40",
      }}
      bg={"#C4B5FD"}
      py="14"
      px={{
        base: "4",
        md: "8",
      }}
    >

      <Stack gap={2} mb="50" width={{ lg: "90%", md: "80%", xl: "63%" }}>
          <Heading
            fontWeight="extrabold"
            size={{ lg: "2xl", base: "xl" }}
            ml={{ lg: "150" }}
          >
            Elige el Plan que mejor se Adapte a tu empresa
          </Heading>

          <Text
            width={{ lg: "90%", base: "100%", xl: "70%", md: "80%" }}
            style={{
              margin: " 0 auto",
            }}
            fontSize="xl"
            fontWeight="inherit"
          >
            Todos los planes son por mes y puedes cancelar en cualquier momento.
          </Text>
        </Stack>

      <SimpleGrid
        columns={{
          base: 1,
          lg: 3,
        }}
        spacing={{
          base: "8",
          lg: "5",
        }}
        maxW="7xl"
        mx="auto"
        justifyItems="center"
        alignItems="center"
      >
        <PricingCard
          data={{
            price: "$29",
            name: "Application UI",
            features: [
              "All application UI components",
              "Lifetime access",
              "Use on unlimited projects",
              "Free Updates",
            ],
          }}
          icon={SiMicrosoft}
          button={
            <ActionButton color="#7C3AED" variant="outline" borderWidth="2px">
              Buy now
            </ActionButton>
          }
        />
        <PricingCard
          zIndex={1}
          isPopular
          transform={{
            lg: "scale(1.05)",
          }}
          bg="#1E1E1E"
          color={"white"}
          data={{
            price: "$49",
            name: "Bundle",
            features: [
              "All application UI components",
              "Lifetime access",
              "Use on unlimited projects",
              "Use on unlimited projects",
              "Free Updates",
            ],
          }}
          icon={SiHive}
          button={<ActionButton bg="#7C3AED">Buy now</ActionButton>}
        />
        <PricingCard
          data={{
            price: "$29",
            name: "Marketing UI",
            features: [
              "All application UI components",
              "Lifetime access",
              "Use on unlimited projects",
              "Free Updates",
            ],
          }}
          icon={SiMarketo}
          button={
            <ActionButton variant="outline" borderWidth="2px" color="#7C3AED">
              Buy now
            </ActionButton>
          }
        />
      </SimpleGrid>
    </Box>
  );
};

export default Pricings;
