import { Box } from "@chakra-ui/react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { SliderItem } from "./SliderItem";

export function Slider() {
  return (
    <Box mt="10">
      <Swiper
        slidesPerView={1}
        navigation
        pagination
        modules={[Navigation, Pagination]}
        color="#ABC200"
      >
        <SwiperSlide>
          <SliderItem
            title="Europa"
            description="O continente mais antigo."
            slug="europa"
            imageURL="https://images.unsplash.com/photo-1491557345352-5929e343eb89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          />
        </SwiperSlide>

        <SwiperSlide>
          <SliderItem
            title="Europa"
            description="O continente mais antigo."
            slug="europa"
            imageURL="https://images.unsplash.com/photo-1491557345352-5929e343eb89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          />
        </SwiperSlide>

        <SwiperSlide>
          <SliderItem
            title="Europa"
            description="O continente mais antigo."
            slug="europa"
            imageURL="https://images.unsplash.com/photo-1491557345352-5929e343eb89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          />
        </SwiperSlide>

      </Swiper>
    </Box>
  )
}