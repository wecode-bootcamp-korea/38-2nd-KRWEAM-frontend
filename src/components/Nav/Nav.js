import React, { useState } from "react";
import * as S from "./NavStyle";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import NavSearchBar from "./NavSearchBar";
import { BsXLg } from "react-icons/bs";

const Nav = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const saveModalOpen = () => {
    setModalOpen(prev => !prev);
  };
  const navigate = useNavigate();
  const gotomain = () => {
    navigate(`/`);
  };
  const goLogin = () => {
    navigate(`/login`);
  };
  const tokenDiscard = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <S.NavContainer>
      <S.NavTopbar>
        {NavInnerText.map(data => (
          <S.NavTopbarInner key={data.id}>
            <S.NavTopbarInnerText to={data.url}>
              {data.text}
            </S.NavTopbarInnerText>
          </S.NavTopbarInner>
        ))}
        {localStorage.token ? (
          <S.NavTopbarInnerLogOut onClick={tokenDiscard}>
            로그아웃
          </S.NavTopbarInnerLogOut>
        ) : (
          <S.NavTopbarInnerLogIn onClick={goLogin}>
            로그인
          </S.NavTopbarInnerLogIn>
        )}
      </S.NavTopbar>
      <S.NavMain>
        <S.NavMainLogo onClick={gotomain}>KRWEAM</S.NavMainLogo>

        <S.NavMainTextContainer>
          {NavMainText.map(data => (
            <div key={data.id}>
              <S.NavMainText to={data.url}>{data.text}</S.NavMainText>
            </div>
          ))}
          <S.NavMainText>
            {modalOpen === false ? (
              <BsSearch className="search" onClick={saveModalOpen} />
            ) : (
              <BsXLg className="search" onClick={saveModalOpen} />
            )}
            {modalOpen && <NavSearchBar setModalOpen={setModalOpen} />}
          </S.NavMainText>
        </S.NavMainTextContainer>
      </S.NavMain>
    </S.NavContainer>
  );
};

export default Nav;

const NavInnerText = [
  {
    id: "1",
    text: "고객센터 ",
  },
  {
    id: "2",
    text: "관심상품",
    url: "/mypage/wish",
  },
  {
    id: "3",
    text: "마이페이지",
    url: "/mypage/main",
  },
];

const NavMainText = [
  {
    id: "1",
    text: "STYLE",
    url: "/style",
  },
  {
    id: "2",
    text: "SHOP",
    url: "/product",
  },
  {
    id: "3",
    text: "ABOUT",
  },
];
