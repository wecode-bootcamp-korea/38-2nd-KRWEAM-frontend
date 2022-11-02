import React from "react";
import S from "./Style";
import { APIKEY, REDIRECT_URI } from "../../config";
import { ImBubble } from "react-icons/im";

const LoginLayout = () => {
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${APIKEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const login = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <S.Container>
      <S.KreamTitle>KRWEAM</S.KreamTitle>
      <S.KreamText>KICKS RULE EVERYTHING AROUND ME</S.KreamText>
      <form>
        <S.LoginInputContainer>
          <S.LoginInputText>이메일주소</S.LoginInputText>
          <S.LoginInput type="email" placeholder="예) Kream@kream.co.kr" />
        </S.LoginInputContainer>
        <S.LoginInputContainer>
          <S.LoginInputText>비밀번호</S.LoginInputText>
          <S.LoginInput type="password" />
        </S.LoginInputContainer>
        <S.LoginBtnContainer>
          <S.LoginBtn>로그인</S.LoginBtn>
        </S.LoginBtnContainer>
      </form>
      <S.SignUpBtnContainer>
        <S.SignUpBtnLi>이메일 가입</S.SignUpBtnLi>
        <S.SignUpBtnLi>이메일 찾기</S.SignUpBtnLi>
        <S.SignUpBtnLi>비밀번호 찾기</S.SignUpBtnLi>
      </S.SignUpBtnContainer>
      <S.LoginBtnContainer>
        <S.SocialLoginBtn onClick={login}>
          <S.IconContainer>
            <ImBubble />
          </S.IconContainer>
          카카오로 로그인
        </S.SocialLoginBtn>
      </S.LoginBtnContainer>
    </S.Container>
  );
};
export default LoginLayout;
