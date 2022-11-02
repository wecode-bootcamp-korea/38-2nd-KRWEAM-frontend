import React from "react";
import * as S from "./LogItemComponentStyle";

const LogItemComponent = ({ itemData, status }) => {
  return (
    <S.LogComponentContainer>
      <S.LogComponetImgAndText>
        <S.ComponentImg src={itemData.productImage} />
        <S.ItemTextContainer>
          <S.ComponentEngName>{itemData.productEngName}</S.ComponentEngName>
          <S.ComponentSizeText>{itemData.sizeId}</S.ComponentSizeText>
        </S.ItemTextContainer>
      </S.LogComponetImgAndText>
      <S.ComponentDateAndStatus>
        <S.ComponentDateText>
          {itemData.created.split("T")[0]}
        </S.ComponentDateText>
        <S.ComponentStatusText>{status}</S.ComponentStatusText>
      </S.ComponentDateAndStatus>
    </S.LogComponentContainer>
  );
};

export default LogItemComponent;
