import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import useDealType from "../../useDealType";
import { api } from "../../../../config";
import { DealContext } from "../../../../context/DealContext";
import ItemInfoContainer from "../shared/ItemInfoContainer";
import Checklist from "../DealStepsComps/PaymentComps/Checklist";
import Point from "../DealStepsComps/PaymentComps/Point";
import * as S from "./styled.Payment";

const Payment = ({ productId }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const { location, itemInfo, clickedBtn, updatedPrice } =
    useContext(DealContext);
  const { state, paymentType, sell, endpoint, dealType } = useDealType(
    location,
    itemInfo
  );
  const totalPrice = state ? updatedPrice / 1 + 3000 : updatedPrice / 1 - 3000;

  const [isFullfilled, setIsFullfilled] = useState(true);
  const { categoryId } = itemInfo;
  const selectedSize = categoryId < 3 ? clickedBtn : 23;
  const [isPaid, setIsPaid] = useState(false);

  const clickFinalPayment = () => {
    fetch(`${api.deal}/${endpoint}`, {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productId: productId,
        price: updatedPrice,
        sizeId: selectedSize,
        totalPrice: totalPrice,
      }),
    });
    setIsPaid(true);
    document.body.style.overflow = "hidden";
  };

  const clickModalClose = () => {
    navigate("/mypage/main");
    document.body.style.removeProperty("overflow");
  };

  return (
    <>
      <S.Background>
        <S.Container>
          <ItemInfoContainer />
        </S.Container>
        <Point totalPrice={totalPrice} />
        <Checklist state={state} setIsFullfilled={setIsFullfilled} />
        <S.Payment>
          <S.TotalPayment>
            <S.Title>총 {paymentType}금액</S.Title>
            <S.TotalPrice primary={state}>
              {totalPrice.toLocaleString()}원
            </S.TotalPrice>
          </S.TotalPayment>
          <S.FinalPayment
            disabled={isFullfilled}
            primary={state}
            onClick={clickFinalPayment}
          >
            {state ? paymentType : sell}하기
          </S.FinalPayment>
        </S.Payment>
      </S.Background>
      {isPaid && (
        <S.ModalBackground>
          <S.Modal>
            <S.Span>{dealType}가 완료되었습니다.</S.Span>
            <S.ModalClose onClick={clickModalClose}>
              마이페이지로 이동하기
            </S.ModalClose>
          </S.Modal>
        </S.ModalBackground>
      )}
    </>
  );
};

export default Payment;
