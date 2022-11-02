import React, { useContext } from "react";
import useDealType from "../../useDealType";
import { DealContext } from "../../../../context/DealContext";
import ItemInfoContainer from "../shared/ItemInfoContainer";
import OneSize from "./SizeSelectComps/OneSize";
import Size from "./SizeSelectComps/Size";
import * as S from "./styled.SizeSelect.js";

const SizeSelect = () => {
  const { location, itemInfo, setSteps, clickedBtn, setClickedBtn, SIZES } =
    useContext(DealContext);
  const { categoryId } = itemInfo;
  const { state, dealType, price, shipType } = useDealType(location, itemInfo);
  const sizes =
    categoryId < 3 ? SIZES[categoryId] : { id: 23, size: "ONE SIZE" };

  const clickSizeBtn = e => {
    categoryId < 3 ? setClickedBtn(e.currentTarget.id) : setClickedBtn("23");
    filterClickedBtn();
  };

  const filterClickedBtn = () => {
    const filtered = sizes.filter(button => button.id !== clickedBtn);
    return filtered;
  };

  const shipBtnClick = () => {
    setSteps(current => current + 1);
  };

  return (
    <S.Background>
      <S.Container>
        <ItemInfoContainer />
        {categoryId < 3 ? (
          <Size clickSizeBtn={clickSizeBtn} />
        ) : (
          <OneSize clickSizeBtn={clickSizeBtn} />
        )}
        {clickedBtn && (
          <S.ShipButtons>
            <S.ShipNormal onClick={shipBtnClick} primary={state}>
              {price ? shipType : dealType + " 입찰"}
            </S.ShipNormal>
          </S.ShipButtons>
        )}
      </S.Container>
    </S.Background>
  );
};

export default SizeSelect;
