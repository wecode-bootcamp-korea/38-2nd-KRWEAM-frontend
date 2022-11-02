import React, { useContext, useState } from "react";
import useDealType from "../../../useDealType";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import * as S from "../styled.Payment";
import { DealContext } from "../../../../../context/DealContext";

const Point = ({ totalPrice }) => {
  const toLocaleString = number => {
    return parseInt(number).toLocaleString();
  };
  const { location, itemInfo, updatedPrice } = useContext(DealContext);
  const { paymentType, dealType, state } = useDealType(location, itemInfo);
  const { point } = itemInfo;

  const [userPoint, setUserPoint] = useState(toLocaleString(point));
  const [isBtnActive, setIsBtnActive] = useState(true);

  const calculatePoint = () => {
    if (state) {
      setUserPoint(toLocaleString(point / 1 - totalPrice));
      setIsBtnActive(false);
    } else {
      setUserPoint(toLocaleString(point / 1 + parseInt(totalPrice)));
      setIsBtnActive(false);
    }
  };

  return (
    <S.Container>
      <S.Title>보유 포인트로 {paymentType}</S.Title>
      <S.SubTitle>총 {paymentType}금액</S.SubTitle>
      <S.PriceBox>{toLocaleString(totalPrice)}원</S.PriceBox>
      <S.PointBtn onClick={calculatePoint} primary={isBtnActive}>
        포인트 사용
      </S.PointBtn>
      <S.SubDescription>
        <S.Box>
          <S.HavePoint>보유 포인트</S.HavePoint>
          <AiOutlineQuestionCircle className="questionIcon" />
        </S.Box>
        <S.HavePoint>{userPoint}원</S.HavePoint>
      </S.SubDescription>
      <S.TableRow>
        <S.TTitle>즉시 {dealType}가</S.TTitle>
        <S.TDescription>
          {updatedPrice ? toLocaleString(updatedPrice / 1) : totalPrice}원
        </S.TDescription>
      </S.TableRow>
      <S.TableRow>
        <S.TTitle>검수비</S.TTitle>
        <S.TDescription>무료</S.TDescription>
      </S.TableRow>
      <S.TableRow>
        <S.TTitle>배송비</S.TTitle>
        <S.TDescription>{state ? null : "-"}3,000원</S.TDescription>
      </S.TableRow>
    </S.Container>
  );
};

export default Point;
