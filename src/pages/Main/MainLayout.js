import React, { useEffect, useState } from "react";
import MainCarousel from "./MainCarousel";
import ItemComponet from "./MainComponent/MainItemComponent";
import CategoryLink from "./MainComponent/CategoryLink";
import MainStylesPick from "./MainStylesPick";
import { api } from "../../config";
import * as S from "./MainLayoutStyle";

const MainLayout = () => {
  const [justDropItem, setJustDropItem] = useState(null);
  const [pagenationBtn, setPagenationBtn] = useState(1);

  useEffect(() => {
    fetch(`${api.products}?offset=0&limit=${pagenationBtn * 4}`, {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then(res => res.json())
      .then(data => setJustDropItem(data.data));
  }, [pagenationBtn]);
  const clickPagenation = () => {
    setPagenationBtn(prev => prev + 1);
  };
  return (
    <S.MainLayoutContainer>
      <MainCarousel />
      <CategoryLink />
      <S.JustDroppedContainer>
        <S.MainJustDropText>Just Dropped</S.MainJustDropText>
        <S.MainJustDropKorText>발매상품</S.MainJustDropKorText>
        {justDropItem && (
          <S.ItemComponentContainer>
            {justDropItem.map(justDropItem => (
              <ItemComponet key={justDropItem.productId} data={justDropItem} />
            ))}
          </S.ItemComponentContainer>
        )}
        <S.MoreItemBtnContainer>
          {pagenationBtn < 4 && (
            <S.MoreItemBtn onClick={clickPagenation}>더 보기</S.MoreItemBtn>
          )}
        </S.MoreItemBtnContainer>
        <S.MainStylePick>Style Picks!</S.MainStylePick>
        <S.StylePickContainer>
          <MainStylesPick />
        </S.StylePickContainer>
      </S.JustDroppedContainer>
    </S.MainLayoutContainer>
  );
};

export default MainLayout;
