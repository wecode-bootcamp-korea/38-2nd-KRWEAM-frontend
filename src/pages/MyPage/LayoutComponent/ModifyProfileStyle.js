import styled from "styled-components";

export const ModifyBackGround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(34, 34, 34, 0.5);
  z-index: 1010;
`;

export const ModifyProfileContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  padding: 30px 0;
  height: 400px;
  border-radius: 12px;
  background-color: #fff;
`;

export const ModifyTitleContainer = styled.div`
  border-bottom: 3px solid #222;
`;

export const ModifyTitle = styled.p`
  padding: 0 15px 15px 15px;
  font-size: 18px;
  font-weight: 700;
`;

export const ModifyContentsContainer = styled.div`
  padding: 15px;
`;

export const ModifyProfileText = styled.p`
  padding-bottom: 25px;
  font-size: 17px;
  font-weight: 700;
`;

export const ModifyEmailAndPW = styled.p`
  padding-bottom: 10px;
  font-size: 13px;
  color: #22222280;
`;

export const ModifyInput = styled.input`
  width: 360px;
  margin-bottom: 25px;
  border: none;
  border-bottom: 1px solid #ebebeb;
  color: #22222280;
  outline: none;
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => theme.variables.flex("", "center", "center")}
`;

export const SubmitBtn = styled.button`
  margin-left: 5px;
  width: 100px;
  height: 32px;
  background-color: #fff;
  border: 1px solid #ebebeb;
  border-radius: 12px;
`;
