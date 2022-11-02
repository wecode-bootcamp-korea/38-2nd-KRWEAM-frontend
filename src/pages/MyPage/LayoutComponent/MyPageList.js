import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LogItemComponent from "./LogItemComponent";
import { api } from "../../../config";
import * as S from "./MyPageListStyle";

const MyPageList = () => {
  const params = useParams();
  const [logItem, setLogItem] = useState(null);
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
        params.log === "buying"
          ? setLogItem(data.message[0].buy)
          : setLogItem(data.message[0].sell);
      });
  }, [params]);

  return (
    <S.BoxContainer>
      {logItem && (
        <S.MyPageListContainer>
          <div>
            {params.log === "buying" ? (
              <S.MainLog>구매 내역</S.MainLog>
            ) : (
              <S.MainLog>판매 내역</S.MainLog>
            )}
          </div>
          <S.SelectButtonContainer>
            <S.SelectButton>
              <S.ButtonTextNum>{logItem[0].productList.length}</S.ButtonTextNum>
              <S.ButtonText>판매 입찰</S.ButtonText>
            </S.SelectButton>
            <S.SelectButton>
              <S.ButtonTextNum>0</S.ButtonTextNum>
              <S.ButtonText>진행 중</S.ButtonText>
            </S.SelectButton>
            <S.SelectButton>
              <S.ButtonTextNum>
                {logItem[2]?.productList.length}
              </S.ButtonTextNum>
              <S.ButtonText>종료</S.ButtonText>
            </S.SelectButton>
          </S.SelectButtonContainer>
          <S.DateSelectContainer>
            <S.DateSelectButton>최근 2개월</S.DateSelectButton>
            <S.DateSelectButton>4개월</S.DateSelectButton>
            <S.DateSelectButton>6개월</S.DateSelectButton>
            {/*FIX ME : DAYPICKER로 달력구현 */}
            <S.Input />
            <p> ~ </p>
            <S.Input />
            <S.LookUpButton>조회</S.LookUpButton>
          </S.DateSelectContainer>
          <S.InfoTextContainer>
            <S.InfoText>
              · 한 번에 조회 가능한 기간은 최대 6개월입니다.
            </S.InfoText>
            <S.InfoText>
              · 기간별 조회 결과는 입찰일 기준으로 노출됩니다.
            </S.InfoText>
          </S.InfoTextContainer>
          <S.PurchaseHead>
            <S.PurchaseSearchBtn>전체</S.PurchaseSearchBtn>
            <S.PurchaseSearchFilter>
              <p>판매 희망가</p>
              <p>만료일</p>
            </S.PurchaseSearchFilter>
          </S.PurchaseHead>
          <S.Bidlog>
            {logItem[0].productList.length === 0 &&
            logItem[2].productList.length === 0 ? (
              <S.InfoText>판매 입찰 내역이 없습니다.</S.InfoText>
            ) : (
              <>
                {logItem[0].productList?.map(el => (
                  <LogItemComponent
                    key={el.productId}
                    itemData={el}
                    status="입찰 중"
                  />
                ))}
                {logItem[2].productList?.map(el => (
                  <LogItemComponent
                    key={el.productId}
                    itemData={el}
                    status="거래 완료"
                  />
                ))}
              </>
            )}
          </S.Bidlog>
        </S.MyPageListContainer>
      )}
    </S.BoxContainer>
  );
};

export default MyPageList;
