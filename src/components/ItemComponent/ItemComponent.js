import React from "react";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import * as S from "./styled.ItemComponent";

export default function ItemComponent({ productInfo, location, onClick }) {
  const navigate = useNavigate();
  const {
    brand,
    id,
    productEngName,
    productImage,
    productKrName,
    buyPrice,
    LikedStatus,
    totalWished,
  } = productInfo;

  return (
    <S.ItemContainer>
      <S.ItemWrapper>
        <S.ItemImageWrapper>
          <S.ProductImage
            src={productImage}
            onClick={() => navigate(`/detail/${id}`)}
          />
        </S.ItemImageWrapper>
        <S.ProductInfo>
          <S.Brand>{brand}</S.Brand>
          <S.ProductEngName onClick={() => navigate(`/detail/${id}`)}>
            {productEngName}
          </S.ProductEngName>
          <S.ProductKrName onClick={() => navigate(`/detail/${id}`)}>
            {productKrName}
          </S.ProductKrName>
          <S.BuyPrice>
            {buyPrice ? parseInt(buyPrice).toLocaleString() : " - "}원
          </S.BuyPrice>
          <S.BuyNow>즉시 구매가</S.BuyNow>
        </S.ProductInfo>
      </S.ItemWrapper>
      {location.includes("product") ? (
        <S.InterestFigure>
          {LikedStatus ? (
            <BsFillBookmarkFill className="bookmark" />
          ) : (
            <BsBookmark className="bookmark" />
          )}
          <S.TotalWished>{totalWished ? totalWished : "0"}</S.TotalWished>
        </S.InterestFigure>
      ) : null}
    </S.ItemContainer>
  );
}
