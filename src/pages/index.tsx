import { GetStaticProps } from "next";
import Head from "next/head";
import { getPrismicClient } from "../services/prismic";
import { RichText } from "prismic-dom";
import { Banner } from "./components/Banner";
import { CallToAction } from "./components/CallToAction";
import { Divider } from "./components/Divider";
import { Header } from "./components/Header";
import { Travel } from "./components/Travel";
import { ContinentPageProps } from "../pages/types/Continent";


export default function Home({ continents }: ContinentPageProps) {
  return (
    <>
      <Head>
        <title>worldtrip</title>
      </Head>
      <Header />
      <Banner />
      <Travel />
      <Divider />
      <CallToAction continents={continents} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();
  const response = await prismic.getAllByType('continent');

  const continents = response.map(continent => ({
    slug: continent.uid,
    title: RichText.asText(continent.data.title),
    thumbnail: continent.data.thumbnail,
    subtitle: RichText.asText(continent.data.subtitle)
  }))

  return {
    props: {
      continents
    }
  }
}