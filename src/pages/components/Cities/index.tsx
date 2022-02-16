import { Box, SimpleGrid, Text } from "@chakra-ui/react"
import { Card } from "./Card"

type City = {
  name: string
  state: string
  url: string
  flag: string
}

interface CitiesProps {
  cities: City[]
}

export function Cities({ cities }: CitiesProps) {
  return (

    <Box
      maxWidth={1160}
      mx="auto"
      py={[6, 8, 10]}
      as="section"
      px={[6]}
    >
      <Text fontSize="36">Cities</Text>

      <SimpleGrid minChildWidth={240} spacing={8} py={8} justifyContent="center" justifyItems="center">
        {cities.map(({ name, state, url, flag }) => (
          <Card
            key={name}
            name={name}
            state={state}
            flag={flag}
            url={url}
          />
        ))}
      </SimpleGrid>
    </Box>
  )
}