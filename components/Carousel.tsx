import { Swiper as SwiperType } from "swiper";
import { Grid, Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Children, ReactNode, useRef, useState } from "react";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import { Box, Icon, IconButton } from "@chakra-ui/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { boxShadowLg, boxShadowMd } from "./ThemeProvider/colors";

const _buttonSize = { base: "2rem", lg: "3rem" };

const _paginationColor = "brand.banner.paginationColor";
const _arrowsColor = "brand.banner.arrowsColor";

type CarouselProps = {
  rows?: number;
  slideHeight: number | string;
  slidesPerView: number;
  spaceBetween?: number;
  children: ReactNode;
  onChange?: () => void;
};

export const Carousel = ({
  rows = 1,
  slideHeight,
  slidesPerView,
  spaceBetween = 0,
  children,
  onChange,
}: CarouselProps) => {
  const swiperRef = useRef<SwiperType>();

  return (
    <Box
      h="100vh"
      pos="relative"
      sx={{
        ".swiper-pagination .swiper-pagination-bullet-active": {
          backgroundColor: "white",
        },
        ".swiper-pagination": {
          // bottom: "-10px", // Ajusta el valor según necesites
        },
      }}
    >
      <Swiper
        slidesPerView={slidesPerView}
        grid={{
          rows,
        }}
        modules={[Grid, Navigation, Pagination, Autoplay]}
        style={{ height: `calc(${slideHeight} * ${rows}` }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={spaceBetween}
        onChange={onChange}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
        }}
      >
        {Children.map(children, (child, i) => (
          <SwiperSlide key={i} style={{ height: slideHeight }}>
            {child}
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
