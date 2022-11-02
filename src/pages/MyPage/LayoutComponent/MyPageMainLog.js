import React from "react";
import LogItemComponent from "./LogItemComponent";
import * as S from "./MypageMainLogStyle";

const MyPageMainLog = ({ logItem, logName }) => {
  return (
    <S.LogContainer>
      <S.MypageBoldFont>{logName}</S.MypageBoldFont>
      <S.LogBoxContainer>
        <S.LogBoxItemContainer>
          <S.LogBoxItemText>전체</S.LogBoxItemText>
          <S.LogBoxTotalFont>
            {logItem &&
              logItem[0].productList.length + logItem[2].productList.length}
          </S.LogBoxTotalFont>
        </S.LogBoxItemContainer>
        {logItem?.map((el, idx) => (
          <S.LogBoxItemContainer key={idx}>
            <S.LogBoxItemText>{el.status}</S.LogBoxItemText>
            {idx === 1 ? (
              <S.MypageBoldFont>0</S.MypageBoldFont>
            ) : (
              <S.MypageBoldFont>{el.productList.length}</S.MypageBoldFont>
            )}
          </S.LogBoxItemContainer>
        ))}
      </S.LogBoxContainer>
      {logItem && (
        <S.TradeLog>
          {logItem[0].productList.length === 0 &&
          logItem[2].productList.length === 0 ? (
            <S.InfoText>거래내역이 없습니다.</S.InfoText>
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
        </S.TradeLog>
      )}
    </S.LogContainer>
  );
};

export default MyPageMainLog;
