import React, { useEffect, useState, useContext } from "react";
import { DealContext } from "../../../../context/DealContext.js";
import useDealType from "../../useDealType.js";
import ItemInfoContainer from "../shared/ItemInfoContainer.js";
import ComparePrice from "./BidComps/ComparePrice";
import Toggle from "./BidComps/Toggle";
import * as S from "./styled.Bid.js";

const Bid = () => {
  const {
    location,
    itemInfo,
    setSteps,
    wishPrice,
    setWishPrice,
    setUpdatedPrice,
  } = useContext(DealContext);
  const { state, dealType, paymentType, price } = useDealType(
    location,
    itemInfo
  );
  const priceExist = price ? "deal" : "bid";
  const numPrice = Math.floor(parseInt(price)).toLocaleString();

  const [isToggled, setIsToggled] = useState(priceExist);
  const [isActive, setisActive] = useState(false);

  const activeInput = e => {
    let wishPrice = e.target.value + "";
    wishPrice = wishPrice.replace(/\D|^0+/g, "");
    e.target.value.length && setisActive(true);
    setWishPrice(wishPrice);
  };

  const gapPrice = () => {
    const numberedPrice = parseInt(price);
    const numberedWishPrice = parseInt(wishPrice);

    if (state) {
      if (
        numberedPrice < numberedWishPrice ||
        numberedPrice === numberedWishPrice
      ) {
        setIsToggled(true);
        setWishPrice(price);
        setUpdatedPrice(numberedPrice);
        return;
      } else if (numberedPrice > numberedWishPrice) {
        setUpdatedPrice(wishPrice);
        return;
      }
      setUpdatedPrice(price);
    }
    if (state && !price) {
      setUpdatedPrice(wishPrice);
    }
  };

  const clickBid = e => {
    if (priceExist === "bid") {
      setIsToggled("bid");
      return;
    }
    setIsToggled(e.currentTarget.id);
  };

  useEffect(() => {
    state ? gapPrice() : setUpdatedPrice(wishPrice);
  }, [wishPrice]);

  useEffect(() => {
    !state && setUpdatedPrice(price);
  }, []);

  return (
    <S.Background>
      <S.Container1>
        <ItemInfoContainer />
        <ComparePrice />
        <S.ToggleWrapper>
          <Toggle
            clickBid={clickBid}
            location={location}
            price={price}
            isToggled={isToggled}
          />
        </S.ToggleWrapper>
        <S.Title1>
          {dealType} 희망가
          <S.WishedPriceWrapper>
            <S.WishedPriceInput
              placeholder={isToggled === "bid" ? "희망가 입력" : numPrice}
              onChange={activeInput}
              primary={isActive}
              value={isToggled === "bid" ? wishPrice : numPrice}
            />
            <S.Won>원</S.Won>
            <S.Description>
              총 {paymentType}금액은 다음 화면에서 계산됩니다.
            </S.Description>
          </S.WishedPriceWrapper>
        </S.Title1>
      </S.Container1>
      <S.Container2>
        <S.Title>입찰 마감 기한</S.Title>
      </S.Container2>
      <S.Container3>
        <S.Title>
          총 {paymentType} 금액
          <S.Button
            onClick={() => setSteps(current => current + 1)}
            primary={wishPrice || price}
          >
            즉시 {dealType} 계속
          </S.Button>
        </S.Title>
      </S.Container3>
    </S.Background>
  );
};

export default Bid;
