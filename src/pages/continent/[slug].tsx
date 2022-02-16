import Head from "next/head";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";

export default function Continent() {
  return (
    <>
      <Head>
        <title>worldtrip</title>
      </Head>
      <Header />
      <Hero />
    </>
  )
} 