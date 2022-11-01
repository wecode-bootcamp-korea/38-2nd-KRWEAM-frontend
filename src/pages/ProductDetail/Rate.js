import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RateLibery from "./RateLibery";
import * as S from "./StyledRate";
import { api } from "../../config";

const Rate = () => {
  const [currentTab, setCurrentTab] = useState({ id: "1", title: "체결 거래" });
  const [rateData, setRateData] = useState([]);
  const params = useParams();
  useEffect(() => {
    fetch(
      `
      ${api.products}/graph/${params.id}`,
      {
        method: "GET",
      }
    )
      .then(res => res.json())
      .then(data => setRateData(data.message[0]));
  }, []);
  const dash = "-";
  const rateDateReplace = data =>
    data.replace(dash, "/").replace(dash, "/").substring(2, 10);
  const data = rateData.complete?.map(item => {
    return { x: item.date, y: item.price };
  });
  const reReRateData = [{ id: "ja", data }];
  console.log(rateData);

  return (
    <>
      {data === undefined ? null : <RateLibery reReRateData={reReRateData} />}
      <S.RateTitleUl>
        {tab.map(tab => (
          <S.RateTitleLi
            key={tab.id}
            value={tab.id}
            onClick={() => setCurrentTab(tab)}
            index={currentTab}
          >
            {tab.title}
          </S.RateTitleLi>
        ))}
      </S.RateTitleUl>
      <S.RateTable>
        <S.RateTableThead>
          <tr>
            <S.RateTableTd>
              {currentTab.id === "1" && "거래가"}
              {currentTab.id === "2" && "판매 희망가"}
              {currentTab.id === "3" && "구매 희망가"}
            </S.RateTableTd>
            <S.RateTableTd>거래일</S.RateTableTd>
          </tr>
        </S.RateTableThead>
        {currentTab.id === "1" &&
          rateData.complete?.slice(0, 5).map((data, index) => (
            <tbody key={index}>
              <tr index={data.id}>
                <S.RateTableTd>{data.price}원</S.RateTableTd>
                <S.RateTableTd>{rateDateReplace(data.date)}</S.RateTableTd>
              </tr>
            </tbody>
          ))}
        {currentTab.id === "2" &&
          rateData.buy?.slice(0, 5).map((data, index) => (
            <tbody key={index}>
              <tr index={data.id}>
                <S.RateTableTd>{data.price}</S.RateTableTd>
                <S.RateTableTd>{rateDateReplace(data.date)}</S.RateTableTd>
              </tr>
            </tbody>
          ))}
        {currentTab.id === "3" &&
          rateData.sell?.slice(0, 5).map((data, index) => (
            <tbody key={index}>
              <tr index={data.id}>
                <S.RateTableTd>{data.price}</S.RateTableTd>
                <S.RateTableTd>{rateDateReplace(data.date)}</S.RateTableTd>
              </tr>
            </tbody>
          ))}
      </S.RateTable>
    </>
  );
};
export default Rate;
const tab = [
  {
    id: "1",
    title: "체결 거래",
    tapTitle: "거래가",
    mapid: "complete",
  },
  {
    id: "2",
    title: "판매 입찰",
    tapTitle: "판매 희망가",
    mapid: "buy",
  },
  {
    id: "3",
    title: "구매 입찰",
    tapTitle: "구매 희망가",
    mapid: "sell",
  },
];
