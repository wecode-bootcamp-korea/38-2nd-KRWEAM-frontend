import React from "react";
import S from "../Styled";
import { GrBookmark } from "react-icons/gr";

const ItemComponet = ({ data }) => {
  return (
    <S.ProductContainer>
      <GrBookmark className="scrapIcon" />
      <S.ProductImg src={data.productImage} />
      <S.ProductBrand>{data.brand}</S.ProductBrand>
      <S.ProductName>{data.productEngName}</S.ProductName>
      <S.ProductPrice>{data.buyPrice}</S.ProductPrice>
      <S.ProductBuyImmediately>즉시 구매가</S.ProductBuyImmediately>
    </S.ProductContainer>
  );
};

export default ItemComponet;
