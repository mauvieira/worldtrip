import { Divider as ChakraDivider, Flex } from "@chakra-ui/react";

export function Divider() {
  return (
    <Flex justify="center">
      <ChakraDivider w="60px" bg="gray.500" h="2px" />
    </Flex>
  )
}