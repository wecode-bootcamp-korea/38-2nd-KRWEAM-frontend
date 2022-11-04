import styled from "styled-components";

export const SwiperWrapper = styled.div`
  .swiper-button-prev {
    width: 80px;
    height: 80px;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA4MCA4MCI+PHBhdGggc3Ryb2tlPSIjQkJCIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTUwIDYwTDMwIDQwbDIwLTIwIi8+PC9zdmc+");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }

  .swiper-button-next {
    width: 80px;
    height: 80px;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA4MCA4MCI+PHBhdGggc3Ryb2tlPSIjQkJCIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTMwIDIwbDIwIDIwLTIwIDIwIi8+PC9zdmc+");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    display: none;
  }
`;

export const CarouselContainer = styled.div`
  margin-bottom: 50px;
`;

export const swiperImg = styled.img`
  width: 100%;
  height: 480px;
  border: none;
`;
