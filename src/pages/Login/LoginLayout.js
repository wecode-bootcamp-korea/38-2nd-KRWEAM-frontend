import React from "react";
import S from "./Style";
import { ImBubble } from "react-icons/im";

const LoginLayout = () => {
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
        <S.SocialLoginBtn>
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
