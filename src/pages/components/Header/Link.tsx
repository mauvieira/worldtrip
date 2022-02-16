import { Box, Icon } from "@chakra-ui/react";
import NextLink from "next/link";
import { RiArrowLeftSLine } from "react-icons/ri";

export function Link() {
  return (
    <NextLink href="/" passHref>
      <Box as="a" position="absolute" left={0} h="32px">
        <Icon as={RiArrowLeftSLine} fontSize="32px" />
      </Box>
    </NextLink>
  )
}