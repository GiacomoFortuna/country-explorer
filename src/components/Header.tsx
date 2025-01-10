import { Box, Flex, Text, Link as ChakraLink } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import React, { forwardRef } from "react";

// Crea un wrapper per ChakraLink con RouterLink
const CustomChakraLink = forwardRef((props: any, ref: React.Ref<any>) => (
  <ChakraLink as={RouterLink} ref={ref} {...props} />
));

const Header = () => {
  return (
    <Box bg="teal.500" p={4} color="white">
      <Flex justify="space-between" align="center">
        <Text fontSize="xl" fontWeight="bold">
          Country Explorer
        </Text>
        <Flex gap={4}>
          <CustomChakraLink to="/" fontWeight="semibold">
            Home
          </CustomChakraLink>
          {/* Aggiungi altre pagine se necessario */}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;


