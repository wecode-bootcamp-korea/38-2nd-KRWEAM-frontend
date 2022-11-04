import React, { useState } from "react";
import * as S from "./MainWishModalStyle";
import CATEGORY_SIZE from "./modalSize";
import { api } from "../../../config";
import { GrBookmark } from "react-icons/gr";
import { BsFillBookmarkFill } from "react-icons/bs";

const MainWishModal = ({ setIsClickWish, data }) => {
  const [selectedSize, setSelectedSize] = useState("");

  const handleModalClose = e => {
    const clicked = e.target.closest(".wishModal");
    if (clicked === null) {
      setIsClickWish(false);
      document.body.style.overflow = "unset";
    }
  };

  const clickSelectBtn = e => {
    setSelectedSize(e.currentTarget.value);
  };

  const MESSAGE = {
    KEY_ERROR: "사이즈를 다시 선택하세요",
  };

  const clickConfirm = () => {
    fetch(`${api.wish}/${data.productId}/1/${selectedSize}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then(res => {
        if (!res.ok) {
          throw new Error("네트워크 응답이 올바르지 않습니다.");
        } else {
          return res.json();
        }
      })
      .then(data => {
        if (data.message === "KEY_ERROR") {
          alert(MESSAGE[data.message]);
        }
      });
    setIsClickWish(false);
    document.body.style.overflow = "unset";
  };

  return (
    <S.Background onClick={handleModalClose}>
      <S.AddWish className="wishModal">
        <S.AddWishText>관심상품추가</S.AddWishText>
        <S.AddWishProductInfo>
          <S.AddWishProductImg src={data.productImage} />
          <S.AddWishProductNameContainer>
            <S.ProductEngName>{data.productEngName}</S.ProductEngName>
            <S.ProductKorName>{data.productKorName}</S.ProductKorName>
          </S.AddWishProductNameContainer>
        </S.AddWishProductInfo>
        <S.SizeSelectBox>
          {CATEGORY_SIZE.map(size => (
            <S.SizeBtn
              primary={selectedSize === `${size.id}`}
              value={size.id}
              key={size.id}
              onClick={e => {
                clickSelectBtn(e);
              }}
            >
              <p value={size}>{size}</p>
              {selectedSize === `${size}` ? (
                <BsFillBookmarkFill />
              ) : (
                <GrBookmark />
              )}
            </S.SizeBtn>
          ))}
        </S.SizeSelectBox>
        <S.BtnContainer>
          <S.ConfirmBtn onClick={clickConfirm}>확인</S.ConfirmBtn>
        </S.BtnContainer>
      </S.AddWish>
    </S.Background>
  );
};

export default MainWishModal;
