import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 1000px;
`;

export const MyPageListContainer = styled.div`
  ${({ theme }) => theme.variables.flex("column", "", "flex-start")}
  margin-bottom: 100px;
`;

export const MainLog = styled.p`
  width: 1000px;
  font-size: 24px;
  font-weight: 700;
`;

export const SelectButtonContainer = styled.div`
  ${({ theme }) => theme.variables.flex("row", "center", "center")}
  width : 1000px;
`;
export const SelectButton = styled.button`
  width: 250px;
  height: 65px;
  background-color: #fff;
  border: none;
`;

export const ButtonTextNum = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

export const ButtonText = styled.p`
  color: #22222280;
  font-size: 13px;
`;

export const DateSelectContainer = styled.div`
  ${({ theme }) => theme.variables.flex("row", "center", "center")}
  width: 100%;
  height: 70px;
  background-color: #fafafa;
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
`;

export const DateSelectButton = styled.button`
  margin-right: 5px;
  padding: 8px;
  color: #222222cc;
  background-color: #fff;
  border: 1px solid #ebebeb;
`;

export const LookUpButton = styled.button`
  margin-left: 10px;
  padding: 8px;
  color: #fff;
  background-color: #222;
  border: none;
`;

export const InfoTextContainer = styled.div`
  margin: 13px 0 20px 0;
`;

export const InfoText = styled.p`
  padding: 5px 0;
  color: #22222280;
  font-size: 12px;
`;

export const PurchaseHead = styled.div`
  ${({ theme }) => theme.variables.flex("row", "space-between", "center")}
  width: 1000px;
  padding: 15px;
  border-bottom: 1px solid #ebebeb;
`;

export const PurchaseSearchBtn = styled.button`
  width: 120px;
  height: 36px;
  background-color: #fff;
  border: 1px solid #d3d3d3;
  border-radius: 10px;
`;

export const PurchaseSearchFilter = styled.div`
  ${({ theme }) => theme.variables.flex("row", "", "center")}
`;

export const Bidlog = styled.div`
  width: 1000px;
  padding: 20px 0;
  text-align: center;
`;

export const Input = styled.input`
  height: 33px;
`;
