import {
  Flex,
  Heading,
  Icon,
  List,
  ListIcon,
  ListItem,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import * as React from "react";
import { HiCheckCircle } from "react-icons/hi";
import { Card } from "./Card";

export const PricingCard = (props) => {
  const { data, icon, button, ...rest } = props;
  const { features, price, name } = data;

  return (
    <Card
      rounded={{
        sm: "xl",
        base: "xl",
      }}
      {...rest}
    >
      <VStack spacing={6}>
        <Icon aria-hidden as={icon} fontSize="4xl" color={"#7C3AED"} />
        <Heading size="md" fontWeight="extrabold">
          {name}
        </Heading>
      </VStack>
      <Flex
        align="flex-end"
        justify="center"
        fontWeight="extrabold"
        color={"#7C3AED"}
        my="8"
      >
        <Heading size="3xl" fontWeight="inherit" lineHeight="0.9em">
          {price}
        </Heading>
        <Text fontWeight="inherit" fontSize="2xl">
          / arg
        </Text>
      </Flex>
      <List spacing="4" mb="8" maxW="28ch" mx="auto">
        {features.map((feature, index) => (
          <ListItem fontWeight="medium" key={index}>
            <ListIcon
              fontSize="xl"
              as={HiCheckCircle}
              marginEnd={2}
              color={"#7C3AED"}
            />
            {feature}
          </ListItem>
        ))}
      </List>
      {button}
    </Card>
  );
};
