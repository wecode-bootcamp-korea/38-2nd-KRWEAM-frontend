import React, { useState, useEffect } from "react";
import * as S from "./MyPageMainStyle";
import MyPageMainLog from "./MyPageMainLog";
import WishItem from "./WishItem";
import ModifyProfile from "./ModifyProfile";
import { api } from "../../../config";
import { BsChevronCompactRight, BsFillInboxesFill } from "react-icons/bs";

const MyPageMain = () => {
  const [myPagePurchaseItem, setMyPagePurchaseItem] = useState(null);
  const [myPageSellItem, setMyPageSellItem] = useState(null);
  const [userInfo, setUserInfo] = useState();
  const [wishItem, setWishItem] = useState(null);
  const [isClickedModify, setIsClickedModify] = useState(false);

  useEffect(() => {
    fetch(`${api.dealhistories}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then(res => res.json())
      .then(data => {
        setMyPagePurchaseItem(data.message[0].buy);
        setMyPageSellItem(data.message[0].sell);
      });
    fetch(`${api.wish}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then(res => res.json())
      .then(data => setWishItem(data.message));
    fetch(`${api.search}/users/info`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then(res => res.json())
      .then(data => setUserInfo(data.message[0]));
  }, []);

  const onRemove = id => {
    setWishItem(wishItem.filter(item => item.productId !== id));
  };

  const clickModify = () => {
    setIsClickedModify(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <S.MyPageMainContainer>
      <S.MypageProfileContainer>
        {userInfo && (
          <>
            <S.UserInfoContainer>
              <S.UserThumnail src="https://github.com/HolyWatter/KREAMBANNER/blob/main/userProfile.png?raw=true" />
              <div>
                <S.MypageBoldFont>{userInfo.nickname}</S.MypageBoldFont>
                <S.UserEmail>{userInfo.email}</S.UserEmail>
                <div>
                  <S.UserProfileBtn onClick={clickModify}>
                    프로필 수정
                  </S.UserProfileBtn>
                  <S.UserProfileBtn>내 스타일</S.UserProfileBtn>
                </div>
              </div>
            </S.UserInfoContainer>
            <S.UserInfoContainer>
              <S.UserInfoGrade>
                <S.UserInfoSubTilte>일반회원</S.UserInfoSubTilte>
                <S.UserInfoText>회원등급</S.UserInfoText>
              </S.UserInfoGrade>
              <S.UserInfoPoint>
                <S.UserInfoSubTilte>
                  {parseInt(userInfo.point)}p
                </S.UserInfoSubTilte>
                <S.UserInfoText>포인트</S.UserInfoText>
              </S.UserInfoPoint>
            </S.UserInfoContainer>
          </>
        )}
      </S.MypageProfileContainer>
      <S.KeepingLogContainer>
        <S.MypageBoldFont>보관 판매 내역</S.MypageBoldFont>
        <S.KeepingLogItemContainer>
          <S.LogBoxItemContainer>
            <S.LogBoxItemText>전체</S.LogBoxItemText>
            <S.LogBoxTotalFont>0</S.LogBoxTotalFont>
          </S.LogBoxItemContainer>
          <S.LogBoxItemContainer>
            <S.LogBoxItemText>입찰 중</S.LogBoxItemText>
            <S.MypageBoldFont>0</S.MypageBoldFont>
          </S.LogBoxItemContainer>
          <S.LogBoxItemContainer>
            <S.LogBoxItemText>진행 중</S.LogBoxItemText>
            <S.MypageBoldFont>0</S.MypageBoldFont>
          </S.LogBoxItemContainer>
          <S.LogBoxItemContainer>
            <S.LogBoxItemText>종료</S.LogBoxItemText>
            <S.MypageBoldFont>0</S.MypageBoldFont>
          </S.LogBoxItemContainer>
        </S.KeepingLogItemContainer>
        <S.KeepingBtn>
          <S.KeepingContainer>
            <S.IconContainer>
              <BsFillInboxesFill className="boxIcon" />
            </S.IconContainer>
            <div>
              <S.KeepingSignText>보관 신청하기</S.KeepingSignText>
              <S.KeepingSignSubText>
                한 번에 신청하고 한 번에 발송하세요.
              </S.KeepingSignSubText>
            </div>
          </S.KeepingContainer>
          <BsChevronCompactRight className="rightIcon" />
        </S.KeepingBtn>
      </S.KeepingLogContainer>
      <MyPageMainLog logName="구매 내역" logItem={myPagePurchaseItem} />
      <MyPageMainLog logName="판매 내역" logItem={myPageSellItem} />
      <S.MypageBoldFont>관심 상품</S.MypageBoldFont>
      {wishItem && (
        <S.WishList>
          {wishItem.length === 0 ? (
            <S.InfoText>추가하신 관심 상품이 없습니다.</S.InfoText>
          ) : (
            wishItem.map(el => (
              <WishItem
                id={el.productId}
                key={el.productId}
                wishItem={el}
                onRemove={onRemove}
              />
            ))
          )}
        </S.WishList>
      )}
      {isClickedModify && (
        <ModifyProfile setIsClickedModify={setIsClickedModify} />
      )}
    </S.MyPageMainContainer>
  );
};

export default MyPageMain;
