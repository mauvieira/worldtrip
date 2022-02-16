import * as prismic from "@prismicio/client"

export function getPrismicClient() {

  const endpoint = process.env.PRISMIC_API_ENDPOINT

  const client = prismic.createClient(
    endpoint,
  )

  return client
}