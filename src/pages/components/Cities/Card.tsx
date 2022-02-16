import { Avatar, Box, Flex, Image, Text, VStack } from "@chakra-ui/react"

interface CardProps {
  name: string
  url: string
  state: string
  flag: string
}

export function Card({ name, state, flag, url }: CardProps) {
  return (
    <Box
      maxWidth={240}
      borderRadius="8px"
      border='1px'
      borderColor='yellow.500'
    >
      <Box height="173px">
        <Image
          height="100%"
          objectFit="cover"
          borderRadius="8px 8px 0 0"
          src={`${url}`} />
      </Box>
      <Flex p="18px" align="center" justify="space-between">
        <VStack spacing={2} align="flex-start">
          <Text fontSize="20" fontWeight="semibold">{name}</Text>
          <Text>{state}</Text>
        </VStack>
        <Avatar name={name} src={flag} />
      </Flex>
    </Box>
  )
}