import { Divider, Flex, Image, Stack, Text } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex
      as="main"
      backgroundImage="/background.png"
      backgroundSize="cover"
      backgroundPosition="center"
      h="335"
      align="center"
      px="6"
    >
      <Flex
        maxWidth={1160}
        mx="auto"
        align="center"
        justify="space-between"
      >
        <Stack color="gray.50" spacing={4} flex="1">
          <Text as="h1" fontSize="36">
            5 Continentes, <Divider opacity="0" />
            infinitas possibilidades.
          </Text>
          <Text as="span" fontSize="20">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Stack>
        <Flex flex="1" justify="flex-end" mt="32">
          <Image src="/airplane.svg" alt="Airplane" />
        </Flex>
      </Flex>
    </Flex>
  )
}