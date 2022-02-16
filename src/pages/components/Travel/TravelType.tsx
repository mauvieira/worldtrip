import { Flex, Image, Text } from "@chakra-ui/react";

interface TravelTypeProps {
  imageURL: string;
  title: string;
}

export function TravelType({ imageURL, title }: TravelTypeProps) {
  return (
    <Flex direction="column" align="center">
      <Image src={imageURL} alt={title} />
      <Text fontWeight="semibold" fontSize="20" mt="2">{title}</Text>
    </Flex>
  )
}