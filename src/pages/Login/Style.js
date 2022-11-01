import styled from "styled-components";

const S = {
  Container: styled.div`
    ${props => props.theme.variables.flex("column", "center", "center")}
    width: 400px;
    margin: 0 auto;
    padding: 60px 0 160px 0;
  `,

  KreamTitle: styled.p`
    font-size: 33px;
    font-weight: 900;
  `,

  KreamText: styled.p`
    padding-bottom: 50px;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 3px;
  `,

  LoginInputContainer: styled.div`
    padding: 10px 0 14px 0;
  `,

  LoginInputText: styled.p`
    font-size: 13px;
  `,

  LoginInput: styled.p`
    width: 400px;
    height: 30px;
    padding: 8px 30px 8px 0;
    border-bottom: 1px solid #ebebeb;
  `,

  LoginBtnContainer: styled.div`
    padding-top: 30px;
  `,

  LoginBtn: styled.button`
    width: 400px;
    height: 52px;
    color: #fff;
    background-color: #ebebeb;
    border: none;
    border-radius: 12px;
    vertical-align: middle;
    font-size: 16px;
  `,

  SignUpBtnContainer: styled.ul`
    ${props => props.theme.variables.flex("", "center", "center")}
    margin-top: 20px;
  `,

  SignUpBtnLi: styled.li`
    margin: 0 24px;
    padding: 0 10px;
    color: #222;
    font-size: 13px;
  `,

  SocialLoginBtn: styled.button`
    position: relative;
    width: 400px;
    height: 52px;
    color: #222;
    background-color: #fff;
    border: 1px solid #ebebeb;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 700;
  `,

  IconContainer: styled.div`
    position: absolute;
    left: 20px;
  `,
};

export default S;
