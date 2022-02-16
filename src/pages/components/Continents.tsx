import { Box, Flex, Text } from "@chakra-ui/react";
import { Slider } from "./Slider";

export function Continents() {
  return (
    <Box maxWidth={1160} px="6" mx="auto" mt="8">
      <Flex direction="column" align="center" fontSize="32">
        <Text>Vamos nessa?</Text>
        <Text>Então escolha seu continente</Text>
      </Flex>
      <Slider />
    </Box>
  )
} 