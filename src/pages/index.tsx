import Head from "next/head";
import { Banner } from "./components/Banner";
import { Header } from "./components/Header";
import { Travel } from "./components/Travel";

export default function Home() {
  return (
    <>
      <Head>
        <title>worldtrip</title>
      </Head>
      <Header />
      <Banner />
      <Travel />
    </>
  )
}
