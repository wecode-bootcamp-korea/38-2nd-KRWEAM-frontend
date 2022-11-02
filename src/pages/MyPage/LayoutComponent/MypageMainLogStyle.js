import styled from "styled-components";

export const LogContainer = styled.div`
  margin-top: 42px;
`;

export const MypageBoldFont = styled.p`
  font-size: 18px;
  font-weight: 700;
`;

export const LogBoxContainer = styled.div`
  ${({ theme }) => theme.variables.flex("row", "space-between", "center")}
  width: 1000px;
  height: 96px;
  margin-top: 20px;
  background-color: #fafafa;
  border: none;
  border-radius: 10px;
`;
export const LogBoxItemContainer = styled.div`
  width: 250px;
  text-align: center;
`;

export const LogBoxItemText = styled.p`
  color: #222222cc;
  font-size: 13px;
`;

export const LogBoxTotalFont = styled.p`
  color: #f15746;
  font-size: 18px;
  font-weight: 700;
`;

export const TradeLog = styled.div`
  padding: 20px 0;
  text-align: center;
`;
export const InfoText = styled.p`
  padding: 80px 0;
  color: #22222280;
  font-size: 12px;
`;
