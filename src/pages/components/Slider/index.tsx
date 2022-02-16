import { Box } from "@chakra-ui/react"
import { Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { SliderItem } from "./SliderItem"
import { ContinentPageProps } from "../../types/Continent"

export function Slider({ continents }: ContinentPageProps) {
  return (
    <Box mt="10" mb="5">
      <Swiper
        slidesPerView={1}
        navigation
        pagination
        modules={[Navigation, Pagination]}
      >
        <SwiperSlide>
          {continents.map(({ slug, title, thumbnail, subtitle }) => (
            <SliderItem
              key={slug}
              title={title}
              description={subtitle}
              slug={slug}
              imageURL={thumbnail.url}
            />
          ))}

        </SwiperSlide>

      </Swiper>
    </Box>
  )
}