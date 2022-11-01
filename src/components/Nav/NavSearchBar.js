import React, { useState, useEffect } from "react";
import * as S from "./NavSearchBarStyle";
import SearchedItem from "./SearchingComponent/SearchedItem";
import { BsXLg } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../config";

const NavSearchBar = props => {
  const { setModalOpen } = props;
  const [navData, setNavData] = useState([]);
  const [searchedItem, setSearchedItem] = useState(null);
  const [searchingValue, setSearchingValue] = useState("");
  const navigate = useNavigate();
  const changingValue = e => {
    setSearchingValue(e.target.value);
  };
  const clickLink = () => {
    setModalOpen(false);
  };
  useEffect(() => {
    fetch(`${api.search}?keyword=${searchingValue}`, {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then(res => res.json())
      .then(data => {
        if (data.message !== "KEY_ERROR") {
          setSearchedItem(data.message);
        }
      });
  }, [searchingValue]);

  const saveModalOpen = () => {
    setModalOpen(prev => !prev);
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

  const submitSearching = e => {
    e.preventDefault();
    navigate(`/product?keyword=${searchingValue}`);
    setModalOpen(false);
  };

  return (
    <S.NavSearchBar>
      <BsXLg className="closedModal" onClick={saveModalOpen} />
      <>
        <S.SearchBarWrap>
          <form onSubmit={submitSearching}>
            <S.InputBox>
              <input
                className="navInput"
                placeholder="브랜드명,모델명,모델번호 등"
                value={searchingValue}
                onChange={changingValue}
              />
            </S.InputBox>
          </form>
        </S.SearchBarWrap>
        <S.SearchBarContentWrap>
          {searchedItem && searchingValue !== "" ? (
            searchedItem.map(item => (
              <S.NavCategoryName
                to={`/detail/${item.id}`}
                key={item.id}
                onClick={clickLink}
              >
                <SearchedItem item={item} />
              </S.NavCategoryName>
            ))
          ) : (
            <>
              <S.SuggestedSearchTermsBox>
                <S.SuggestedSearchTermsText>
                  추천검색어
                </S.SuggestedSearchTermsText>
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
            </>
          )}
        </S.SearchBarContentWrap>
      </>
    </S.NavSearchBar>
  );
};
export default NavSearchBar;
