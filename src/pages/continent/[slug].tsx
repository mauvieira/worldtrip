import { GetStaticProps } from "next"
import { RichText } from "prismic-dom"
import Head from "next/head"
import { getPrismicClient } from "../../services/prismic"
import { Cities } from "../components/Cities"
import { Description } from "../components/Description"
import { Header } from "../components/Header"
import { Hero } from "../components/Hero"

type City = {
  name: string
  state: string
  url: string
  flag: string
}

type Continent = {
  slug: string
  title: string
  url: string
  description: string
  totalCities: number
  countries: number
  languages: number
  cities: City[]
}

interface ContinentProps {
  continent: Continent
}

export default function Continent({ continent }: ContinentProps) {
  const { url, title, countries, languages, totalCities, cities } = continent

  const description = {
    text: continent.description,
    countries,
    languages,
    totalCities
  }

  return (
    <>
      <Head>
        <title>worldtrip</title>
      </Head>
      <Header />
      <Hero url={url} title={title} />
      <Description description={description} />
      <Cities cities={cities} />
    </>
  )
}

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const prismic = getPrismicClient()

  const { slug } = params

  const response = await prismic.getByUID('continent', String(slug))

  const { title, description, countries, languages, cities, thumbnail, city } = response.data

  const continent = {
    slug: response.uid,
    title: RichText.asText(title),
    url: thumbnail.url,
    description: RichText.asText(description),
    countries,
    languages,
    totalCities: cities,
    cities: city.map(city => ({
      name: RichText.asText(city.city_name),
      state: RichText.asText(city.city_state),
      flag: city.city_flag.url,
      url: city.city_image.url,
    }))
  }

  return {
    props: {
      continent
    }
  }
}