import React, { useEffect, useRef, useState } from "react";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { MdArrowDropDownCircle } from "react-icons/md";
import * as S from "./StyledAboutProduct";
import ProductBtn from "./ProductBtn";
import MiniModal from "./MiniModal";
import { useParams } from "react-router-dom";
import { api } from "../../config";

const AboutProduct = props => {
  const trigger = useRef(false);
  const [openContent, setOpenContent] = useState(false);
  const [bookmark, setBookmark] = useState(false);
  const [isMiniModal, setIsMiniModal] = useState(false);
  const [sizeControl, setSizeControl] = useState("모든 사이즈");
  const [bookmarkNum, setBookmarkNum] = useState("");
  const [bookmarkOk, setBookmarkOk] = useState("");
  const params = useParams();
  const token = localStorage.getItem("token");
  const {
    brandEngName,
    color,
    modelNumber,
    productEngName,
    productKrName,
    buyPrice,
    recentlyPrice,
    released_price,
    sellPrice,
    productImage,
    categoryId,
  } = props.props;

  const priceToString = price => {
    if (price !== undefined && price !== null) {
      return (
        price.slice(0, -3).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") +
        "원"
      );
    }
  };

  const priceToStringNull = price => {
    if (price === null && buyPrice === null) {
      return "-";
    } else if (price === null && sellPrice === null) {
      return "-";
    } else {
      return priceToString(price);
    }
  };

  const buyPriceString = priceToStringNull(buyPrice);
  const sellPriceString = priceToStringNull(sellPrice);
  const recentlyPriceString = priceToString(recentlyPrice);
  const releasedPriceString = priceToString(released_price);

  const obsHandler = () => {
    setOpenContent(prev => !prev);
  };
  useEffect(() => {
    fetch(`${api.products}/info/${params.id}`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    })
      .then(res => res.json())
      .then(data => setBookmarkNum(data.message[0]));
  }, []);

  const bookmarkChange = () => {
    if (bookmarkNum.LikedStatus === false) {
      fetch(`${api.wish}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          Authorization: token,
        },
        body: JSON.stringify({
          productId: params.id,
          sizeId: fetchSize,
        }),
      })
        .then(res => res.json())
        .then(data => setBookmarkOk(data));
    } else if (bookmarkNum.LikedStatus === true) {
      fetch(`${api.wish}/${params.id}`, {
        method: "DELETE",
        headers: { Authorization: token },
      });
    }
    setBookmark(prev => !prev);
  };
  const istrue = () => {
    setIsMiniModal(prev => !prev);
  };
  useEffect(() => {
    const observer = new IntersectionObserver(obsHandler, { threshold: 0.5 });
    if (trigger.current) observer.observe(trigger.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
  }, []);
  const SIZE = categoryId => {
    if (categoryId === undefined) return;
    if (categoryId == "1") {
      return SIZES[1];
    }
    if (categoryId == "2") {
      return SIZES[2];
    } else {
      return SIZES[0];
    }
  };

  const sizeId = () => {
    if (categoryId !== undefined)
      return SIZE(categoryId).find(a => a.size === sizeControl)?.id;
  };

  const selectSize = {
    1: sizeId(sizeControl),
    2: sizeId(sizeControl),
    3: 23,
    4: 24,
    5: 25,
  };

  const forFetchSize = () => {
    if (categoryId === undefined) return;
    else {
      return selectSize[categoryId];
    }
  };

  const fetchSize = forFetchSize(categoryId);
  return (
    <>
      <S.DetailTopContainer ref={trigger}>
        <S.DetailNames>
          <S.ProductDetailTitleH1>{brandEngName}</S.ProductDetailTitleH1>
          <S.ProductDetailNameEn>{productEngName}</S.ProductDetailNameEn>
          <S.ProductDetailNameKo>{productKrName}</S.ProductDetailNameKo>
        </S.DetailNames>
        <div>
          {categoryId !== undefined ? (
            <S.ProductDetail index="1">
              <S.DetailTexts1>사이즈</S.DetailTexts1>
              {Object.keys(SIZE(categoryId)).length === 1 && (
                <S.DetailTexts2 index="1">ONE SIZE</S.DetailTexts2>
              )}
              {Object.keys(SIZE(categoryId)).length > 1 && (
                <S.DetailTexts2 index="1" onClick={istrue}>
                  {sizeControl} <MdArrowDropDownCircle />
                  {isMiniModal && (
                    <MiniModal
                      setIsMiniModal={setIsMiniModal}
                      size={SIZE(categoryId)}
                      sizeControl={sizeControl}
                      setSizeControl={setSizeControl}
                    />
                  )}
                </S.DetailTexts2>
              )}
            </S.ProductDetail>
          ) : null}
          <S.ProductDetail index="2">
            <S.DetailTexts1>최근 거래가</S.DetailTexts1>
            <S.DetailTexts2 index="2">{recentlyPriceString}</S.DetailTexts2>
          </S.ProductDetail>
        </div>
        <div>
          <ProductBtn
            num="1"
            sellPriceString={sellPriceString}
            buyPriceString={buyPriceString}
          />
          <S.ProductInterestedItems index="1" onClick={bookmarkChange}>
            {bookmark === false ? (
              <BsBookmark className="bookmarkIcon" />
            ) : (
              <BsFillBookmarkFill className="bookmarkIcon" />
            )}
            관심상품 {bookmarkNum.totalWished > 0 ? bookmarkNum.totalWished : 0}
          </S.ProductInterestedItems>
        </div>
        <S.MiniContainer index={openContent}>
          <S.MiniProductBox>
            <S.MiniImage src={productImage} />
            <S.MiniTextBox>
              <S.MiniNameEn>{productEngName}</S.MiniNameEn>
              <S.MiniNameKo>{productKrName}</S.MiniNameKo>
            </S.MiniTextBox>
          </S.MiniProductBox>
          <S.BtnBox>
            <S.ProductInterestedItems index="2" onClick={bookmarkChange}>
              {bookmarkNum.LikedStatus === false ? (
                <BsBookmark className="bookmarkIcon" />
              ) : (
                <BsFillBookmarkFill className="bookmarkIcon" />
              )}
              {bookmarkNum.totalWished > 0 ? bookmarkNum.totalWished : 0}
            </S.ProductInterestedItems>
            <ProductBtn
              num="2"
              sellPriceString={sellPriceString}
              buyPriceString={buyPriceString}
            />
          </S.BtnBox>
        </S.MiniContainer>
      </S.DetailTopContainer>

      <S.ProductDetailTextContainer>
        <S.ProdcutInfo>상품 정보</S.ProdcutInfo>
        <S.ProductDetailInfo>
          <S.ProductDetailList index="1">
            <S.ProductDetailInfoTitle>모델정보</S.ProductDetailInfoTitle>
            <S.ProductDetailInfoText index="1">
              {modelNumber}
            </S.ProductDetailInfoText>
          </S.ProductDetailList>
          <S.ProductDetailList index="2">
            <S.ProductDetailInfoTitle>출시가격</S.ProductDetailInfoTitle>
            <S.ProductDetailInfoText index="2">
              {releasedPriceString}
            </S.ProductDetailInfoText>
          </S.ProductDetailList>
          <S.ProductDetailList index="3">
            <S.ProductDetailInfoTitle>컬러</S.ProductDetailInfoTitle>
            <S.ProductDetailInfoText index="3">{color}</S.ProductDetailInfoText>
          </S.ProductDetailList>
        </S.ProductDetailInfo>
      </S.ProductDetailTextContainer>
    </>
  );
};
export default AboutProduct;

const SIZES = [
  [{ id: 0, size: "모든 사이즈" }],
  [
    { id: 1, size: 230 },
    { id: 2, size: 235 },
    { id: 3, size: 240 },
    { id: 4, size: 245 },
    { id: 5, size: 250 },
    { id: 6, size: 255 },
    { id: 7, size: 260 },
    { id: 8, size: 265 },
    { id: 9, size: 270 },
    { id: 10, size: 275 },
    { id: 11, size: 280 },
    { id: 12, size: 285 },
    { id: 13, size: 290 },
    { id: 14, size: 295 },
    { id: 15, size: 300 },
  ],
  [
    { id: 17, size: "XXS" },
    { id: 18, size: "XS" },
    { id: 19, size: "S" },
    { id: 20, size: "M" },
    { id: 21, size: "L" },
    { id: 22, size: "XL" },
    { id: 23, size: "XXL" },
  ],
];
