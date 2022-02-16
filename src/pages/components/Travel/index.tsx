import { Box, Container, Flex, HStack, SimpleGrid, Stack } from "@chakra-ui/react";
import { TravelType } from "./TravelType";

export function Travel() {
  return (
    <Container as="section" maxWidth={1160} mx="auto" px="6" py="32">
      <SimpleGrid minChildWidth="215px">
        <TravelType imageURL="/icons/cocktail.svg" title="vida noturna" />
        <TravelType imageURL="/icons/surf.svg" title="praia" />
        <TravelType imageURL="/icons/building.svg" title="moderno" />
        <TravelType imageURL="/icons/museum.svg" title="clássico" />
        <TravelType imageURL="/icons/earth.svg" title="e mais..." />
      </SimpleGrid>
    </Container>
  )
}