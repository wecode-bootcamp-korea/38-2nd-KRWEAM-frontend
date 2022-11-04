import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import BANNER from "./carouselBanner";
import * as S from "./MainCarouselStyle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const MainCarousel = () => {
  return (
    <S.SwiperWrapper>
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
          {BANNER.map(banner => (
            <SwiperSlide key={banner.id}>
              <S.swiperImg src={banner.backgroundImg} />
            </SwiperSlide>
          ))}
        </Swiper>
      </S.CarouselContainer>
    </S.SwiperWrapper>
  );
};

export default MainCarousel;
