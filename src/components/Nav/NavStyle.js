import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.div`
  z-index: 999;
  position: fixed;
  background-color: white;
  width: 100%;
`;

export const NavTopbar = styled.div`
  ${({ theme }) => theme.variables.flex(null, "flex-end", null)}
  padding: 10px 40px;
`;
export const NavTopbarInner = styled.div`
  ${({ theme }) => theme.variables.flex(null, "space-between", "end")}
  font-size: 12px;
`;
export const NavTopbarInnerText = styled(Link)`
  margin-left: 30px;
  color: #6d6d6d;
  font-size: 12px;
  text-decoration: none;
  :hover {
    cursor: pointer;
  }
`;
export const NavTopbarInnerLogIn = styled.div`
  margin-left: 30px;
  color: #6d6d6d;
  font-size: 12px;
  text-decoration: none;
  :hover {
    cursor: pointer;
  }
`;
export const NavTopbarInnerLogOut = styled.div`
  margin-left: 30px;
  color: #6d6d6d;
  font-size: 12px;
  text-decoration: none;
  :hover {
    cursor: pointer;
  }
`;
export const NavMain = styled.div`
  ${({ theme }) => theme.variables.flex(null, "space-between", "center")}
  padding: 0 40px;
  height: 68px;
  min-width: 320px;
  border-top: 1px solid #e5e5e5;
`;
export const NavMainLogo = styled.h1`
  margin-left: 40px;
  font-weight: 900;
  font-style: italic;
  font-size: 30px;
  :hover {
    cursor: pointer;
  }
`;
export const NavMainTextContainer = styled.div`
  display: flex;
`;
export const NavMainText = styled(Link)`
  display: block;
  padding: 4px 20px;
  margin: 0 auto;
  /* margin-left: 50px; */
  color: ${({ theme }) => theme.style.warmGrey_8};
  font-weight: medium;
  box-sizing: border-box;
  text-align: center;
  text-decoration: none;

  :hover {
    cursor: pointer;
  }
`;
