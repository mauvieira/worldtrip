import { Divider, Flex, Image, Stack, Text, useBreakpointValue } from "@chakra-ui/react"

export function Banner() {

  const isMobileScreen = useBreakpointValue({
    base: true,
    md: false,
  })

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
            5 continents, <Divider opacity="0" />
            infinite possibilities.
          </Text>
          <Text as="span" fontSize="20">
            The time has come to take the trip you've always dreamed of.
          </Text>
        </Stack>

        {!isMobileScreen &&
          <Flex flex="1" justify="flex-end" mt="32">
            <Image src="/airplane.svg" alt="Airplane" />
          </Flex>}

      </Flex>
    </Flex>
  )
}