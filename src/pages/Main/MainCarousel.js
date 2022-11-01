import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import S from "./Styled";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const MainCarousel = () => {
  return (
    <S.CarouselContainer>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        loop={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {BANNER.map(el => (
          <SwiperSlide key={el.id}>
            <S.swiperImg src={el.backgroundImg} />
          </SwiperSlide>
        ))}
      </Swiper>
    </S.CarouselContainer>
  );
};

export default MainCarousel;

const BANNER = [
  {
    id: 0,
    backgroundImg:
      "https://github.com/HolyWatter/KREAMBANNER/blob/main/001.jpg?raw=true",
  },
  {
    id: 1,
    backgroundImg:
      "https://github.com/HolyWatter/KREAMBANNER/blob/main/002.jpg?raw=true",
  },
  {
    id: 2,
    backgroundImg:
      "https://github.com/HolyWatter/KREAMBANNER/blob/main/003.jpg?raw=true",
  },
  {
    id: 3,
    backgroundImg:
      "https://github.com/HolyWatter/KREAMBANNER/blob/main/004.jpg?raw=true",
  },
  {
    id: 4,
    backgroundImg:
      "https://github.com/HolyWatter/KREAMBANNER/blob/main/005.jpg?raw=true",
  },
];
