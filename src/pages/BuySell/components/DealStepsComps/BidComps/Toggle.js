import React from "react";
import useDealType from "../../../useDealType";
import * as S from "./styled.Toggle";

const Toggle = ({ clickBid, location, isToggled }) => {
  const { state, dealType } = useDealType(location);

  return (
    <S.ToggleWrapper>
      {isToggled === "bid" ? (
        <>
          <S.ToggledBg id="bid" onClick={clickBid} primary={state}>
            {dealType} 입찰
          </S.ToggledBg>
          <S.NotToggled id="deal" onClick={clickBid}>
            즉시 {dealType}
          </S.NotToggled>
        </>
      ) : (
        <>
          <S.NotToggled id="bid" onClick={clickBid}>
            {dealType} 입찰
          </S.NotToggled>
          <S.ToggledBg id="deal" onClick={clickBid} primary={state}>
            즉시 {dealType}
          </S.ToggledBg>
        </>
      )}
    </S.ToggleWrapper>
  );
};
export default Toggle;
