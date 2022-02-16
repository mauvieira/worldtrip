import { Container, SimpleGrid } from "@chakra-ui/react";
import { TravelType } from "./TravelType";

export function Travel() {
  return (
    <Container as="section" maxWidth={1160} mx="auto" px="6" py={["18", "18", "24"]}>
      <SimpleGrid minChildWidth={["136px", "215px"]} gap={["8", "8", "8", "0"]} alignContent="center">
        <TravelType imageURL="/icons/cocktail.svg" title="vida noturna" />
        <TravelType imageURL="/icons/surf.svg" title="praia" />
        <TravelType imageURL="/icons/building.svg" title="moderno" />
        <TravelType imageURL="/icons/museum.svg" title="clássico" />
        <TravelType imageURL="/icons/earth.svg" title="e mais..." />
      </SimpleGrid>
    </Container>
  )
}