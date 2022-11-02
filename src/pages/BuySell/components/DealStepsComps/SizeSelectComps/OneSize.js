import React, { useContext } from "react";
import { DealContext } from "../../../../../context/DealContext";
import useDealType from "../../../useDealType";
import * as S from "./styled.OneSize";

const OneSize = ({ clickSizeBtn }) => {
  const { location, itemInfo, clickedBtn } = useContext(DealContext);
  const { state, price, dealType } = useDealType(location, itemInfo);
  return (
    <S.OneSize>
      <S.SizeButton
        id="23"
        onClick={e => {
          clickSizeBtn(e);
        }}
        primary={clickedBtn.includes("23")}
      >
        <S.Size>OneSize</S.Size>
        <S.Price primary={state}>
          {price ? parseInt(price).toLocaleString() : dealType + " 입찰"}
        </S.Price>
      </S.SizeButton>
    </S.OneSize>
  );
};

export default OneSize;
