import React from "react";
import * as S from "./StyledContentsContainer";
import { BsBoxSeam } from "react-icons/bs";
import { BsFillLightningFill } from "react-icons/bs";
import { TbBuildingWarehouse } from "react-icons/tb";
import DetailDropDown from "./DropDown";
import AboutProduct from "./AboutProduct";
import Rate from "./Rate";

const DetailContentsContainer = props => {
  const Day = new Date();
  const tomorrowDay = Day.getDate() + 1;
  const tomorrowMonth = Day.getMonth() + 1;
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const DayOfWeek = week[Day.getDay() + 1];
  return (
    <S.DetailContentsContainer>
      <AboutProduct props={props.productInfo} />
      <S.ProductDeliveryInfo>
        <S.DeilveryTitle>배송 정보 </S.DeilveryTitle>
        <S.Fastshipping>
          <S.DeilveryTitleContainer>
            <BsFillLightningFill className="icon" />
            <S.ProductDetailContainer>
              <S.ShippingTitle>빠른배송 5,000원</S.ShippingTitle>
              <S.ShippingText>
                지금 결제시 내일 {tomorrowMonth}/{tomorrowDay} {DayOfWeek} 도착
                예정
              </S.ShippingText>
            </S.ProductDetailContainer>
          </S.DeilveryTitleContainer>
          <S.DeilveryTitleContainer>
            <BsBoxSeam className="icon" />
            <S.ProductDetailContainer>
              <S.ShippingTitle>일반배송 3,000원 </S.ShippingTitle>
              <S.ShippingText>
                검수 후 배송 ・ 5-7일 내 도착 예정
              </S.ShippingText>
            </S.ProductDetailContainer>
          </S.DeilveryTitleContainer>

          <S.DeilveryTitleContainer>
            <TbBuildingWarehouse className="icon" />
            <S.ProductDetailContainer>
              <S.ShippingTitle>창고보관 첫 30일 무료</S.ShippingTitle>
              <S.ShippingText>
                배송 없이 창고에 보관 ・ 빠르게 판매 가능
              </S.ShippingText>
            </S.ProductDetailContainer>
          </S.DeilveryTitleContainer>
        </S.Fastshipping>
      </S.ProductDeliveryInfo>
      <S.PriceInformation>
        <S.PriceInfoTitle>시세</S.PriceInfoTitle>
        <Rate />
      </S.PriceInformation>
      <DetailDropDown />
      <S.PrecautionsForPurchase>
        KRWEAM는 통신판매 중개자로서 통신판매의 당사자가 아닙니다. 본 상품은
        개별판매자가 등록한 상품으로 상품, 상품정보, 거래에 관한 의무와 책임은
        각 판매자에게 있습니다. 단, 거래과정에서 검수하고 보증하는 내용에 대한
        책임은 KRWEAM에 있습니다.
      </S.PrecautionsForPurchase>
    </S.DetailContentsContainer>
  );
};
export default DetailContentsContainer;
