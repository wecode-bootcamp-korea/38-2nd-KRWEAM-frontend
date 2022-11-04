import styled from "styled-components";

export const StylePickContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
export const SwiperContainer = styled.div`
  margin-bottom: 50px;
  .swiper-button-prev,
  .swiper-button-next,
  .swiper-button-prev::after,
  .swiper-button-next::after {
    opacity: 0;
  }

  &:hover {
    .swiper-button-prev {
      opacity: 0.7;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: #fff;
      background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA4MCA4MCI+PHBhdGggc3Ryb2tlPSIjQkJCIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTUwIDYwTDMwIDQwbDIwLTIwIi8+PC9zdmc+");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
    }

    .swiper-button-next {
      opacity: 0.7;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: #fff;
      background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA4MCA4MCI+PHBhdGggc3Ryb2tlPSIjQkJCIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTMwIDIwbDIwIDIwLTIwIDIwIi8+PC9zdmc+");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
    }

    .swiper-button-prev::after,
    .swiper-button-next::after {
      display: none;
    }
  }
`;

export const ProfileBackGround = styled.span`
  display: inline-block;
  position: absolute;
  top: 8px;
  left: 5px;
  width: 36px;
  height: 36px;
  background-color: #fff;
  border-radius: 50%;
`;

export const UserProfile = styled.img`
  position: absolute;
  top: 10px;
  left: 7px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export const StylePickItem = styled.img`
  width: 185px;
  height: 245px;
  border: none;
  border-radius: 10px;
`;

export const UserNickname = styled.p`
  position: absolute;
  bottom: 5px;
  left: 5px;
  color: #fff;
  font-size: 13px;
`;
