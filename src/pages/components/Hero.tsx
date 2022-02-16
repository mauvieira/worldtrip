import { Box, Text } from "@chakra-ui/react";

export function Hero() {
  return (
    <Box
      bg={`linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1420&q=80)`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      py="48"
      color="gray.50"
      px={6}
      pt={64}
      pb={8}
    >
      <Box
        maxWidth={1160}
        mx="auto"
      >
        <Text as="h1" fontSize="48" fontWeight="semibold">
          Europa
        </Text>
      </Box>
    </Box>
  )
}