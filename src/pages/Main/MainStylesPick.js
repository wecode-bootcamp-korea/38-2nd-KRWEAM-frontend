import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import USERDATA from "./userdata";
import * as S from "./MainStylesPickStyle";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const MainStylesPick = () => {
  return (
    <S.SwiperContainer>
      <Swiper
        slidesPerView={6}
        spaceBetween={20}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {USERDATA.map(stylePick => (
          <SwiperSlide key={stylePick.id}>
            <S.StylePickContainer>
              <S.ProfileBackGround />
              <S.UserProfile src={stylePick.userProfileImg} />
              <S.StylePickItem src={stylePick.userPhotoImg} />
              <S.UserNickname>@{stylePick.userId}</S.UserNickname>
            </S.StylePickContainer>
          </SwiperSlide>
        ))}
      </Swiper>
    </S.SwiperContainer>
  );
};

export default MainStylesPick;
