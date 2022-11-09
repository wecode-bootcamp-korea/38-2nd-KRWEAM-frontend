import React, { useState } from "react";
import MainWishModal from "./MainWishModal";
import * as S from "./MainItemComponentStyle";
import { GrBookmark } from "react-icons/gr";
import { BsFillBookmarkFill } from "react-icons/bs";
import { api } from "../../../config";

const ItemComponet = ({ data }) => {
  const [isClickWish, setIsClickWish] = useState(false);
  const [isClickConfirm, setIsClickConfirm] = useState(false);

  const clickWish = () => {
    setIsClickWish(prev => !prev);
    document.body.style.overflow = "hidden";
  };

  const priceToString = price => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const STATUS = {
    204: "위시리스트에서 삭제되었습니다.",
    404: "페이지를 찾을 수 없습니다,",
    500: "네트워크의 응답이 올바르지 않습니다.",
  };

  const clickDeleteWish = () => {
    fetch(`${api.wish}/${data.productId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    }).then(res => {
      alert(STATUS[res.status]);
    });
    data.LikedStatus = false;
    setIsClickConfirm(false);
  };
  return (
    <S.ProductContainer>
      {data.LikedStatus ? (
        <BsFillBookmarkFill onClick={clickDeleteWish} className="scrapIcon" />
      ) : (
        <GrBookmark onClick={clickWish} className="scrapIcon" />
      )}
      <S.ProductImg src={data.productImage} />
      <S.ProductBrand>{data.brand}</S.ProductBrand>
      {data.productEngName === " " ? (
        <S.ProductName>{data.productKrName}</S.ProductName>
      ) : (
        <S.ProductName>{data.productEngName}</S.ProductName>
      )}
      {data.buyPrice === null ? (
        <S.ProductPrice> - </S.ProductPrice>
      ) : (
        <S.ProductPrice>
          {priceToString(parseInt(data.buyPrice))} 원
        </S.ProductPrice>
      )}
      <S.ProductBuyImmediately>즉시 구매가</S.ProductBuyImmediately>
      {isClickWish && (
        <MainWishModal
          data={data}
          setIsClickWish={setIsClickWish}
          setIsClickConfirm={setIsClickConfirm}
        />
      )}
    </S.ProductContainer>
  );
};

export default ItemComponet;
