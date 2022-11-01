import React from "react";
import MainCarousel from "./MainCarousel";
import ItemComponet from "./MainComponent/MainItemComponent";
import CategoryLink from "./MainComponent/CategoryLink";
import MainStylesPick from "./MainStylesPick";
import S from "./Styled";

const MainLayout = ({ justDropItem }) => {
  return (
    <>
      <MainCarousel />
      <CategoryLink />
      <S.JustDroppedContainer>
        <S.MainJustDropText>Just Dropped</S.MainJustDropText>
        <S.MainJustDropKorText>발매상품</S.MainJustDropKorText>
        <S.ItemComponentContainer>
          {justDropItem?.map(data => (
            <ItemComponet key={data.productId} data={data} />
          ))}
        </S.ItemComponentContainer>
        <S.MainStylePick>Style Picks!</S.MainStylePick>
        <S.StylePickContainer>
          <MainStylesPick />
        </S.StylePickContainer>
      </S.JustDroppedContainer>
    </>
  );
};

export default MainLayout;
