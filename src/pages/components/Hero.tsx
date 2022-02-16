import { Box, Text } from "@chakra-ui/react";

interface HeroProps {
  url: string;
  title: string;
}

export function Hero({ url, title }: HeroProps) {
  return (
    <Box
      bg={`linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${url})`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      py="48"
      color="gray.50"
      pt={64}
      pb={8}
      as="main"
    >
      <Box
        maxWidth={1160}
        mx="auto"
        px={6}

      >
        <Text as="h1" fontSize="48" fontWeight="semibold">
          {title}
        </Text>
      </Box>
    </Box>
  )
}