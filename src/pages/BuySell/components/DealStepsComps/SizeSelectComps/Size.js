import React, { useContext } from "react";
import { DealContext } from "../../../../../context/DealContext";
import useDealType from "../../../useDealType";
import * as S from "./styled.Size";

const Size = ({ clickSizeBtn }) => {
  const { location, itemInfo, clickedBtn, SIZES } = useContext(DealContext);
  const { state, price, dealType } = useDealType(location, itemInfo);
  const { categoryId } = itemInfo;
  const sizes = categoryId === 1 ? SIZES[1] : SIZES[2];

  return (
    <S.FootSizeGrid>
      {sizes.map(({ id, size }) => (
        <li key={id}>
          <S.SizeButton
            id={id}
            onClick={e => {
              clickSizeBtn(e);
            }}
            primary={clickedBtn / 1 === id}
          >
            <S.Size primary={state}>{size}</S.Size>
            <S.Price primary={state}>
              {price ? parseInt(price).toLocaleString() : dealType + " 입찰"}
            </S.Price>
          </S.SizeButton>
        </li>
      ))}
    </S.FootSizeGrid>
  );
};

export default Size;
