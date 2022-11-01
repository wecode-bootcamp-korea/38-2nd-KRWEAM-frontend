import React from "react";
import { api } from "../../../config";
import * as S from "./WishItemStyle";

const WishItem = ({ wishItem, onRemove }) => {
  const handleDelete = () => {
    clickDelete();
    onRemove(wishItem.productId);
  };

  const STATUS = {
    204: "위시리스트에서 삭제되었습니다.",
    400: "위시리스트에서 삭제되었습니다.",
    404: "페이지를 찾을 수 없습니다.",
    500: "네트워크 응답이 올바르지 않습니다.",
  };

  const clickDelete = () => {
    fetch(`${api.wish}/${wishItem.productId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    }).then(res => {
      alert(STATUS[res.status]);
    });
  };

  return (
    <S.WishItemContainer>
      <S.WishItemLeft>
        <S.ComponentImg src={wishItem.productImage} />
        <S.ItemTextContainer>
          <S.WishItemBrand>{wishItem.brandName}</S.WishItemBrand>
          <S.ComponentEngName>{wishItem.productName}</S.ComponentEngName>
          <S.WishItemSize>{wishItem.sizeId}</S.WishItemSize>
        </S.ItemTextContainer>
      </S.WishItemLeft>
      <S.WishItemBtnContainer>
        <S.WishItemPurchaseBtn>
          <S.StyledLink to={`/buy/${wishItem.productId}`}>
            <S.WishItemPurchaseBtnTitle>구매</S.WishItemPurchaseBtnTitle>
            <S.WishItemBtnRight>
              <S.WishItemPrice>
                {wishItem.buyPrice === "" ? "-" : wishItem.buyPrice}원
              </S.WishItemPrice>
              <S.WishItemBtnBuyImmediately>
                즉시 구매가
              </S.WishItemBtnBuyImmediately>
            </S.WishItemBtnRight>
          </S.StyledLink>
        </S.WishItemPurchaseBtn>
        <S.WishItemDeleteBtn onClick={handleDelete}>삭제</S.WishItemDeleteBtn>
      </S.WishItemBtnContainer>
    </S.WishItemContainer>
  );
};

export default WishItem;
