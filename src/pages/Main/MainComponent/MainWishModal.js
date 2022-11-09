import React, { useState } from "react";
import * as S from "./MainWishModalStyle";
import CATEGORY_SIZE from "./modalSize";
import { api } from "../../../config";
import { GrBookmark } from "react-icons/gr";
import { BsFillBookmarkFill } from "react-icons/bs";

const MainWishModal = ({ setIsClickWish, data, setIsClickConfirm }) => {
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

  const STATUS = {
    201: "위시리스트에 상품이 담겼습니다.",
    500: "네트워크와의 연결이 원활하지 않습니다.",
  };

  const clickConfirm = () => {
    fetch(`${api.wish}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        productId: data.productId,
        sizeId: selectedSize,
      }),
    }).then(res => alert(STATUS[res.status]));
    data.LikedStatus = true;
    setIsClickWish(false);
    setIsClickConfirm(true);
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
            <S.ProductKorName>{data.productKrName}</S.ProductKorName>
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
              <p>{size.size}</p>
              {selectedSize === `${size.id}` ? (
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
