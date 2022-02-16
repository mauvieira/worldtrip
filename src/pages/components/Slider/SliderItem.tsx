import { Flex, Text } from "@chakra-ui/react"

interface SliderItemProps {
  imageURL: string;
  title: string;
  description: string;
  slug: string;
}

export function SliderItem({ title, description, slug, imageURL }: SliderItemProps) {
  return (
    <Flex
      // href={`/${slug}`}
      bg={`linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${imageURL})`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      py="48"
      color="gray.50"
      direction="column"
      align="center"
    >
      <Text as="h2" fontSize="48" fontWeight="bold">{title}</Text>
      <Text fontSize="24" fontWeight="semibold">{description}</Text>
    </Flex>
  )
}