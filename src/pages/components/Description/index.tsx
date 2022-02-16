import { Box, Flex, Text } from "@chakra-ui/react"
import { Summary } from "./Summary"

type Description = {
  text: string
  countries: number
  languages: number
  totalCities: number
}

interface DescriptionProps {
  description: Description
}

export function Description({ description }: DescriptionProps) {

  const { countries, languages, totalCities } = description

  return (
    <Box
      maxWidth={1160}
      mx="auto"
      py={[6, 8, 10, 20]}
      as="section"
      px={6}
    >
      <Flex justifyContent="space-between" align="center" direction={["column", "column", "column", "row"]}>
        <Text textAlign="justify" maxWidth={600} fontSize={21}>
          {description.text}
        </Text>

        <Summary countries={countries} languages={languages} cities={totalCities} />
      </Flex>
    </Box>
  )
}