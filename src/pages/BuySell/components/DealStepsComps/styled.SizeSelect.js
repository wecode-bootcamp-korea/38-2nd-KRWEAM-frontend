import styled from "styled-components";

export const Background = styled.div`
  ${({ theme }) => theme.variables.flex("column", null, "center")};
  width: 100%;
  padding-top: 130px;
  background-color: #fafafa;
`;

export const Container = styled.div`
  width: 700px;
  background-color: white;
  margin: 20px 0 150px 0;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 30px;
`;

export const Button = styled.button`
  ${({ theme }) => theme.variables.flex("column", "space-between", null)};
  width: 100%;
  height: 60px;
  padding: 13px 0;
  border-radius: 10px;
  align-items: center;
  user-select: none;
  transition: 0.1s ease-in-out;
  cursor: pointer;
`;

export const ShipButtons = styled.div`
  width: 100%;
  height: 60px;
  transition: 0.1s ease-in-out;
`;

export const ShipNormal = styled(Button)`
  border: transparent;
  padding-top: 20px;
  vertical-align: center;
  color: white;
  background-color: ${({ primary, theme }) =>
    primary ? theme.style.red_9 : theme.style.green};
`;
