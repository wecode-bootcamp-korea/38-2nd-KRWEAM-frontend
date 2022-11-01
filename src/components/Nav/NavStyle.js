import styled from "styled-components";

export const NavTopbar = styled.div`
  ${({ theme }) => theme.variables.flex(null, "flex-end", null)}
  padding: 8px 40px;
`;
export const NavTopbarInner = styled.div`
  ${({ theme }) => theme.variables.flex(null, "space-between", "end")}
  font-size: 12px;
`;
export const NavTopbarInnerText = styled.div`
  margin-left: 20px;
  color: ${({ theme }) => theme.styletextColor};
  font-weight: lighter;
  font-size: 12px;
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
  font-size: 20px;
`;
export const NavMainTextContainer = styled.div`
  display: flex;
  margin-right: 40px;
`;
export const NavMainText = styled.div`
  margin-left: 30px;
  color: ${({ theme }) => theme.styletextColor};
  font-weight: medium;
`;
