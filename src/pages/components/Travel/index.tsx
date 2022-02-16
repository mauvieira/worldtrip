import { Container, SimpleGrid } from "@chakra-ui/react"
import { TravelType } from "./TravelType"

export function Travel() {
  return (
    <Container as="section" maxWidth={1160} mx="auto" px="6" py={["18", "18", "24"]}>
      <SimpleGrid minChildWidth={["136px", "215px"]} gap={["8", "8", "8", "0"]} justifyItems="center">
        <TravelType imageURL="/icons/cocktail.svg" title="night life" />
        <TravelType imageURL="/icons/surf.svg" title="beach" />
        <TravelType imageURL="/icons/building.svg" title="modern" />
        <TravelType imageURL="/icons/museum.svg" title="classic" />
        <TravelType imageURL="/icons/earth.svg" title="and more..." />
      </SimpleGrid>
    </Container>
  )
}