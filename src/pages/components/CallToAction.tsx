import { Box, Flex, Text } from "@chakra-ui/react";
import { Slider } from "./Slider";

export function CallToAction() {
  return (
    <Box maxWidth={1160} px={["0", "6"]} mx="auto" mt="8">
      <Flex direction="column" align="center" textAlign="center" fontSize={["24", "32"]}>
        <Box px={["4", "0"]}>
          <Text>Vamos nessa?</Text>
          <Text>Então escolha seu continente</Text>
        </Box>
      </Flex>
      <Slider />
    </Box>
  )
} 