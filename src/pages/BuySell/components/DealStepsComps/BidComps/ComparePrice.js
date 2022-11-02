import React, { useContext } from "react";
import { DealContext } from "../../../../../context/DealContext";
import useDealType from "../../../useDealType";
import * as S from "./styled.ComparePrice";

const ComparePrice = () => {
  const { location, itemInfo } = useContext(DealContext);
  const { dealType, subDealType, price, subPrice } = useDealType(
    location,
    itemInfo
  );

  return (
    <S.ComparePrice>
      <S.CompareBox>
        <S.CompareText>
          <div>즉시 {dealType}가</div>
          {price ? parseInt(price).toLocaleString() : "-"}
        </S.CompareText>
      </S.CompareBox>
      <S.CompareBox>
        <S.CompareText2>
          <div>즉시 {subDealType}가</div>
          {subPrice ? parseInt(subPrice).toLocaleString() : "-"}
        </S.CompareText2>
      </S.CompareBox>
    </S.ComparePrice>
  );
};

export default ComparePrice;
