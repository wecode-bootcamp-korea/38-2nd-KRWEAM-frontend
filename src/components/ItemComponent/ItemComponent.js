import React from "react";
import { VscBookmark } from "react-icons/vsc";
import * as S from "./styled.ItemComponent";

export default function ItemComponent({ productInfo }) {
  const {
    brand,
    productEngName,
    productImage,
    productKrName,
    buyPrice,
    totalWished,
  } = productInfo;
  return (
    <S.ItemContainer>
      <S.ItemWrapper>
        <S.ItemImageWrapper>
          <S.ProductImage src={productImage} />
        </S.ItemImageWrapper>
        <S.ProductInfo>
          <S.Brand>{brand}</S.Brand>
          <S.ProductEngName>{productEngName}</S.ProductEngName>
          <S.ProductKrName> {productKrName}</S.ProductKrName>
          <S.BuyPrice> {parseInt(buyPrice).toLocaleString()}원</S.BuyPrice>
          <S.BuyNow>즉시 구매가</S.BuyNow>
        </S.ProductInfo>
      </S.ItemWrapper>
      <S.InterestFigure>
        <VscBookmark /> <S.TotalWished>{totalWished}</S.TotalWished>
      </S.InterestFigure>
    </S.ItemContainer>
  );
}
