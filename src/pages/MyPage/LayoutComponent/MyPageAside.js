import React from "react";
import SHOPPINGINFO from "./shoppinginfo";
import * as S from "./MyPageAsiedStyle";

const MyPageAside = () => {
  return (
    <S.MyPageAsideContainer>
      <div>
        <S.MyPageAsideTitle>마이 페이지</S.MyPageAsideTitle>
      </div>
      <S.StyledLink to="/mypage/main">
        <S.MyPageAsideSubTitle>쇼핑 정보</S.MyPageAsideSubTitle>
      </S.StyledLink>
      <div>
        {SHOPPINGINFO.map(el => (
          <S.StyledLink to={el.url} key={el.id}>
            <S.MyPageText>{el.title}</S.MyPageText>
          </S.StyledLink>
        ))}
      </div>
      <div>
        <S.MyPageAsideSubTitle>내 정보</S.MyPageAsideSubTitle>
      </div>
      <div>
        <S.MyPageText>프로필정보</S.MyPageText>
      </div>
    </S.MyPageAsideContainer>
  );
};

export default MyPageAside;
