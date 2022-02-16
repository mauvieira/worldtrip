import { Flex } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { Link } from "./Link"

export function Header() {

  const { asPath } = useRouter()

  const isNotHomePage = asPath !== '/'

  return (
    <Flex as="header" justify="center" align="center" py={4}>
      {isNotHomePage && <Link />}
      <Image src="/worldtrip.svg" alt="Worldtrip Logo" />
    </Flex>
  )
}