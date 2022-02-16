import { Flex, HStack, Text } from "@chakra-ui/react"

interface SummaryProps {
  countries: number
  languages: number
  cities: number
}

export function Summary({ countries, languages, cities }: SummaryProps) {
  return (
    <HStack spacing={[0, 8]} px={6} mt={[6, 6, 6, 0]} flexDirection={["column", "row"]}>
      <Flex direction="column" align="center" fontWeight="semibold">
        <Text fontSize="48" color="yellow.500">{countries}</Text>
        <Text fontSize="24">countries</Text>
      </Flex>

      <Flex direction="column" align="center" fontWeight="semibold">
        <Text fontSize="48" color="yellow.500">{languages}</Text>
        <Text fontSize="24">languages</Text>
      </Flex>

      <Flex direction="column" align="center" fontWeight="semibold">
        <Text fontSize="48" color="yellow.500">{cities}</Text>
        <Text fontSize="24">cities</Text>
      </Flex>
    </HStack>
  )
}