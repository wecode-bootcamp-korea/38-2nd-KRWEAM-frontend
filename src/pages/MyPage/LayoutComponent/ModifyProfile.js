import React, { useState } from "react";
import { api } from "../../../config";
import * as S from "./ModifyProfileStyle";

const ModifyProfile = ({ setIsClickedModify }) => {
  const emailRegex =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const handleInput = event => {
    const { name, value } = event.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const STATUS = {
    200: "회원정보가 수정되었습니다.",
    400: "입력하신 값을 다시 확인해 주세요.",
    404: "페이지를 찾을 수 없습니다.",
    500: "네트워크 응답이 올바르지 않습니다.",
  };

  const SubmitModifyInfo = () => {
    if (emailRegex.test(userInfo.email)) {
      fetch(`${api.login}/users/info`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify({
          email: userInfo.email,
          password: userInfo.password,
        }),
      })
        .then(res => alert(STATUS[res.status]))
        .then(() => {
          setIsClickedModify(false);
          document.body.style.overflow = "unset";
        });
    } else {
      alert("이메일 형식을 확인해 주세요");
    }
  };

  const handleModalClose = e => {
    const clicked = e.target.closest(".modalBackGround");
    if (clicked === null) {
      setIsClickedModify(false);
      document.body.style.overflow = "unset";
    }
  };

  const clickClose = () => {
    setIsClickedModify(false);
    document.body.style.overflow = "unset";
  };

  return (
    <S.ModifyBackGround onClick={handleModalClose}>
      <S.ModifyProfileContainer className="modalBackGround">
        <S.ModifyTitleContainer>
          <S.ModifyTitle>프로필 정보 수정</S.ModifyTitle>
        </S.ModifyTitleContainer>
        <S.ModifyContentsContainer>
          <S.ModifyProfileText>회원 정보 수정</S.ModifyProfileText>
          <S.ModifyEmailAndPW>이메일 주소</S.ModifyEmailAndPW>
          <S.ModifyInput
            onChange={handleInput}
            type="email"
            name="email"
            required
          />
          <S.ModifyEmailAndPW>비밀번호</S.ModifyEmailAndPW>
          <S.ModifyInput
            onChange={handleInput}
            type="password"
            name="password"
            required
          />
        </S.ModifyContentsContainer>
        <S.ButtonContainer>
          <S.SubmitBtn onClick={SubmitModifyInfo}>수정하기</S.SubmitBtn>
          <S.SubmitBtn onClick={clickClose}>닫기</S.SubmitBtn>
        </S.ButtonContainer>
      </S.ModifyProfileContainer>
    </S.ModifyBackGround>
  );
};

export default ModifyProfile;
