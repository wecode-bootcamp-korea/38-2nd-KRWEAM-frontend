import React, { useState } from "react";
import MainWishModal from "./MainWishModal";
import * as S from "./MainItemComponentStyle";
import { GrBookmark } from "react-icons/gr";
import { BsFillBookmarkFill } from "react-icons/bs";

const ItemComponet = ({ data }) => {
  const [isClickWish, setIsClickWish] = useState(false);

  const clickWish = () => {
    setIsClickWish(prev => !prev);
    document.body.style.overflow = "hidden";
  };
  const priceToString = price => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <S.ProductContainer>
      <GrBookmark onClick={clickWish} className="scrapIcon" />
      <S.ProductImg src={data.productImage} />
      <S.ProductBrand>{data.brand}</S.ProductBrand>
      {data.productEngName === " " ? (
        <S.ProductName>{data.productKorName}</S.ProductName>
      ) : (
        <S.ProductName>{data.productEngName}</S.ProductName>
      )}
      {data.buyPrice === null ? (
        <S.ProductPrice> - </S.ProductPrice>
      ) : (
        <S.ProductPrice>
          {priceToString(parseInt(data.buyPrice))} 원
        </S.ProductPrice>
      )}
      <S.ProductBuyImmediately>즉시 구매가</S.ProductBuyImmediately>
      {isClickWish && (
        <MainWishModal data={data} setIsClickWish={setIsClickWish} />
      )}
    </S.ProductContainer>
  );
};

export default ItemComponet;
