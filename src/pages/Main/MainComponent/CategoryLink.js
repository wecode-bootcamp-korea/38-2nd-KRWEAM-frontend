import React from "react";
import S from "../Styled";

const CategoryLink = () => {
  return (
    <S.GridContainer>
      {CATEGORY.map(el => (
        <S.CategoryContainer key={el.id}>
          <S.CategoryImg src={el.backgroundImg} />
          <S.CategoryText>{el.categoryname}</S.CategoryText>
        </S.CategoryContainer>
      ))}
    </S.GridContainer>
  );
};

export default CategoryLink;

const CATEGORY = [
  {
    id: 0,
    backgroundImg:
      "https://github.com/HolyWatter/KREAMBANNER/blob/main/banner1.jpg?raw=true",
    categoryname: "셀럽픽",
  },
  {
    id: 1,
    backgroundImg:
      "https://github.com/HolyWatter/KREAMBANNER/blob/main/banner2.jpg?raw=true",
    categoryname: "남성추천",
  },
  {
    id: 2,
    backgroundImg:
      "https://github.com/HolyWatter/KREAMBANNER/blob/main/banner3.jpg?raw=true",
    categoryname: "여성추천",
  },
  {
    id: 3,
    backgroundImg:
      "https://github.com/HolyWatter/KREAMBANNER/blob/main/banner4.jpg?raw=true",
    categoryname: "럭키드로우",
  },
  {
    id: 4,
    backgroundImg:
      "https://github.com/HolyWatter/KREAMBANNER/blob/main/banner5.jpg?raw=true",
    categoryname: "브랜드관 오픈",
  },
  {
    id: 5,
    backgroundImg:
      "https://github.com/HolyWatter/KREAMBANNER/blob/main/banner6.jpg?raw=true",
    categoryname: "정가아래",
  },
  {
    id: 6,
    backgroundImg:
      "https://github.com/HolyWatter/KREAMBANNER/blob/main/banner7.jpg?raw=true",
    categoryname: "인기 럭셔리",
  },
  {
    id: 7,
    backgroundImg:
      "https://github.com/HolyWatter/KREAMBANNER/blob/main/banner8.jpg?raw=true",
    categoryname: "집꾸미기",
  },
  {
    id: 8,
    backgroundImg:
      "https://github.com/HolyWatter/KREAMBANNER/blob/main/banner9.jpg?raw=true",
    categoryname: "태그하면 포인트",
  },
  {
    id: 9,
    backgroundImg:
      "https://github.com/HolyWatter/KREAMBANNER/blob/main/banner10.jpg?raw=true",
    categoryname: "수수료 할인",
  },
];
