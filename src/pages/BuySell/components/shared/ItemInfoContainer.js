import React, { useContext } from "react";
import { DealContext } from "../../../../context/DealContext";
import * as S from "./styled.itemInfoContainer";

const ItemInfoContainer = () => {
  const { itemInfo, clickedBtn, SIZES } = useContext(DealContext);
  const {
    productEngName,
    productImage,
    productKrName,
    modelNumber,
    categoryId,
  } = itemInfo;
  const sizes = categoryId === 1 ? SIZES[1] : SIZES[2];

  return (
    <S.ItemInfoContainer>
      <S.ProductImage src={productImage} alt={productKrName} />
      <S.ItemInfo>
        <S.ModelNumber>{modelNumber}</S.ModelNumber>
        <S.ProductEngName>{productEngName}</S.ProductEngName>
        <S.ProductKrName>{productKrName}</S.ProductKrName>
        <S.Size>
          {clickedBtn &&
            (categoryId === 1
              ? sizes[clickedBtn - 1].size
              : categoryId === 2
              ? sizes[clickedBtn - 15].size
              : "ONE SIZE")}
        </S.Size>
      </S.ItemInfo>
    </S.ItemInfoContainer>
  );
};

export default ItemInfoContainer;
