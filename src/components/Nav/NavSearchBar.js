import React, { useState, useEffect } from "react";
import * as S from "./NavSearchBarStyle";
import { BsXLg } from "react-icons/bs";
import { Link } from "react-router-dom";

const NavSearchBar = props => {
  const { setModalOpen } = props;
  const [navData, setNavData] = useState([]);
  const [input, setInput] = useState("");
  const saveModalOpen = () => {
    setModalOpen(prev => !prev);
  };

  const saveInput = e => {
    setInput(e.target.value);
  };
  const length = input.length > 0;

  const deleteInput = () => {
    setInput("");
  };

  const Day = new Date();
  const todayDate = Day.getDate();
  const todayMonth = Day.getMonth() + 1;
  const thisTime = Day.getHours();
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  useEffect(() => {
    fetch("/data/navData.json")
      .then(response => response.json())
      .then(result => setNavData(result));
  }, []);
  return (
    <S.NavSearchBar>
      <BsXLg className="closedModal" onClick={saveModalOpen} />
      <>
        <S.SearchBarWrap>
          <S.InputBox>
            <input
              className="navInput"
              placeholder="브랜드명,모델명,모델번호 등"
              onChange={saveInput}
              value={input}
            />
            {length === true ? (
              <BsXLg className="inputIcon" onClick={deleteInput} />
            ) : null}
          </S.InputBox>
        </S.SearchBarWrap>
        <S.SearchBarContentWrap>
          <S.SuggestedSearchTermsBox>
            <S.SuggestedSearchTermsText>추천검색어</S.SuggestedSearchTermsText>
            <S.SuggestedSearchTermsContainer>
              {navData[0]?.map(data => (
                <S.RecommandSet key={data.id}>{data.text}</S.RecommandSet>
              ))}
            </S.SuggestedSearchTermsContainer>
          </S.SuggestedSearchTermsBox>
          <S.PopularSearchTermsBox>
            <S.PopularSearchTermsTitle>
              인기 검색어
              <S.PopularSearchTime>
                {todayMonth}.{todayDate} {thisTime}:00 기준
              </S.PopularSearchTime>
            </S.PopularSearchTermsTitle>
            <S.PopularSearchTermsMapContainer>
              <S.PopularSearchTermsMapBox>
                {navData[1]?.map(data => (
                  <S.PopularSearchTermsOl key={data.id}>
                    <S.PopularSearchTermsUlId>
                      {data.id}
                    </S.PopularSearchTermsUlId>
                    <S.PopularSearchTermsUlText>
                      {data.text}
                    </S.PopularSearchTermsUlText>
                  </S.PopularSearchTermsOl>
                ))}
              </S.PopularSearchTermsMapBox>
              <S.PopularSearchTermsMapBox>
                {navData[2]?.map(data => (
                  <S.PopularSearchTermsOl key={data.id}>
                    <S.PopularSearchTermsUlId>
                      {data.id}
                    </S.PopularSearchTermsUlId>
                    <S.PopularSearchTermsUlText>
                      {data.text}
                    </S.PopularSearchTermsUlText>
                  </S.PopularSearchTermsOl>
                ))}
              </S.PopularSearchTermsMapBox>
            </S.PopularSearchTermsMapContainer>
          </S.PopularSearchTermsBox>
          <S.NavCategoryBox>
            <S.NavCategoryTitle>카테고리</S.NavCategoryTitle>
            <S.NavCategoryContainer>
              {navData[3]?.map(data => (
                <div key={data.id}>
                  <Link to={data.url}>
                    <S.NavCategoryimg src={data.img} index={data.id} />
                  </Link>
                  <S.NavCategoryName to={data.url}>
                    {data.text}
                  </S.NavCategoryName>
                </div>
              ))}
            </S.NavCategoryContainer>
          </S.NavCategoryBox>
        </S.SearchBarContentWrap>
      </>
    </S.NavSearchBar>
  );
};
export default NavSearchBar;
