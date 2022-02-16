import { Box, Flex, Icon, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { FaCircle } from "react-icons/fa";

interface TravelTypeProps {
  imageURL: string;
  title: string;
}

export function TravelType({ imageURL, title }: TravelTypeProps) {

  const isWideScreen = useBreakpointValue({
    base: true,
    md: false,
    lg: false,
  })

  return (
    <Flex direction="column" align={["flex-start", "center"]} justify="center">
      {!isWideScreen && <Image src={imageURL} alt={title} />}
      <Flex align="center">
        {isWideScreen && <Icon as={FaCircle} fontSize="10" color="yellow.500" mr="2" />}
        <Text fontWeight="semibold" fontSize="20" mt={[0, 0, 2]}>{title}</Text>
      </Flex>
    </Flex>
  )
}