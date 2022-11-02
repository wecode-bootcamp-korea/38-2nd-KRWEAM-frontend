import React from "react";
import * as S from "../styled.Payment";

const ShippingAddress = ({ address }) => {
  return (
    <S.Container>
      <S.Title>{address} 주소</S.Title>
    </S.Container>
  );
};

export default ShippingAddress;
