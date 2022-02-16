export type Continent = {
  slug: string;
  title: string;
  subtitle: string;
  thumbnail: {
    alt?: string;
    copyright?: string;
    url: string
  }
};

export interface ContinentPageProps {
  continents: Continent[]
}