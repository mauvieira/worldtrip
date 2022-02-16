import { Box, Flex, Text } from "@chakra-ui/react"
import { Slider } from "./Slider"
import { ContinentPageProps } from "../types/Continent"

export function CallToAction({ continents }: ContinentPageProps) {
  return (
    <Box maxWidth={1160} px={["0", "6"]} mx="auto" mt="8">
      <Flex direction="column" align="center" textAlign="center" fontSize={["24", "32"]}>
        <Box px={["4", "0"]}>
          <Text>Here we go?</Text>
          <Text>So choose your continent</Text>
        </Box>
      </Flex>
      <Slider continents={continents} />
    </Box>
  )
}