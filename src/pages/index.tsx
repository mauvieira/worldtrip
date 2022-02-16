import { Box, Flex, Text } from "@chakra-ui/react";
import Head from "next/head";
import { Header } from "./components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>worldtrip</title>
      </Head>
      <Header />
      <Flex backgroundImage="/background.png" h="335">
        <Text as="h1">
          5 Continentes, infinitas possibilidades.
        </Text>
      </Flex>
    </>
  )
}
