import React from "react";
import * as S from "./NavStyle";
import { BsSearch } from "react-icons/bs";

const Nav = () => {
  return (
    <>
      <S.NavTopbar>
        {NavInnerText.map(data => (
          <S.NavTopbarInner key={data.id}>
            <S.NavTopbarInnerText>{data.text}</S.NavTopbarInnerText>
          </S.NavTopbarInner>
        ))}
      </S.NavTopbar>
      <S.NavMain>
        <S.NavMainLogo>KRWEAM</S.NavMainLogo>

        <S.NavMainTextContainer>
          {NavMainText.map(data => (
            <S.NavMainText key={data.id}>{data.text}</S.NavMainText>
          ))}
          <S.NavMainText>
            <BsSearch className="search" />
          </S.NavMainText>
        </S.NavMainTextContainer>
      </S.NavMain>
    </>
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
  },
  {
    id: "3",
    text: "마이페이지",
  },
  {
    id: "4",
    text: "로그인",
  },
];

const NavMainText = [
  {
    id: "1",
    text: "STYLE",
  },
  {
    id: "2",
    text: "SHOP",
  },
  {
    id: "3",
    text: "ABOUT",
  },
];
