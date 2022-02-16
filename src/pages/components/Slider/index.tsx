import { Box } from "@chakra-ui/react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { SliderItem } from "./SliderItem";

export function Slider() {
  return (
    <Box mt="10" mb="5">
      <Swiper
        slidesPerView={1}
        navigation
        pagination
        modules={[Navigation, Pagination]}
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
            title="América do Norte"
            description="A parte norte do continente americano."
            slug="america_do_norte"
            imageURL="https://images.unsplash.com/photo-1490623970972-ae8bb3da443e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
          />
        </SwiperSlide>

        <SwiperSlide>
          <SliderItem
            title="Ásia"
            description="O maior dos continentes"
            slug="asia"
            imageURL="https://images.unsplash.com/photo-1535139262971-c51845709a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          />
        </SwiperSlide>

        <SwiperSlide>
          <SliderItem
            title="África"
            description="O terceiro continente mais extenso"
            slug="africa"
            imageURL="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          />
        </SwiperSlide>

        <SwiperSlide>
          <SliderItem
            title="América do Sul"
            description="O subcontinente do continente americano."
            slug="america_do_sul"
            imageURL="https://images.unsplash.com/photo-1591533985302-42123fa9240b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          />
        </SwiperSlide>

        <SwiperSlide>
          <SliderItem
            title="Oceania"
            description="Situado entre o Índico e o Pacífico"
            slug="oceania"
            imageURL="https://images.unsplash.com/photo-1588001400947-6385aef4ab0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          />
        </SwiperSlide>

      </Swiper>
    </Box>
  )
}