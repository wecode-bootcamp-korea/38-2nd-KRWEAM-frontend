import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "./StyledProductBtn";

const ProductBtn = props => {
  const { num, sellPriceString, buyPriceString } = props;
  const navigate = useNavigate();
  const params = useParams();
  const productID = params.id;
  const clickBuy = () => {
    navigate(`/buy/${productID}`);
  };
  const clickSell = () => {
    navigate(`/sell/${productID}`);
  };

  return (
    <S.ProductBtnSet>
      <S.ProductBtn index="1" num={num} onClick={clickBuy}>
        <S.ProductBtnText index="1">구매</S.ProductBtnText>
        <div>
          <S.ProductBtninnerText1>{buyPriceString}</S.ProductBtninnerText1>
          <S.ProductBtninnerText2>즉시 구매가</S.ProductBtninnerText2>
        </div>
      </S.ProductBtn>
      <S.ProductBtn index="2" num={num} onClick={clickSell}>
        <S.ProductBtnText index="2">판매</S.ProductBtnText>
        <div>
          <S.ProductBtninnerText1>{sellPriceString}</S.ProductBtninnerText1>
          <S.ProductBtninnerText2>즉시 판매가</S.ProductBtninnerText2>
        </div>
      </S.ProductBtn>
    </S.ProductBtnSet>
  );
};
export default ProductBtn;
