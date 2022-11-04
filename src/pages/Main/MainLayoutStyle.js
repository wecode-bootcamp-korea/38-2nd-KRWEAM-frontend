import styled from "styled-components";

export const MainLayoutContainer = styled.div`
  padding: 96px 0;
`;

export const JustDroppedContainer = styled.div`
  margin-top: 50px;
`;

export const MainJustDropText = styled.p`
  max-width: 1200px;
  margin: 0 auto;
  font-size: 20px;
  font-weight: 700;
`;

export const MainJustDropKorText = styled.p`
  max-width: 1200px;
  margin: 0 auto;
  color: #22222280;
  font-size: 14px;
`;

export const ItemComponentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 300px);
  max-width: 1200px;
  margin: auto;
`;

export const MainStylePick = styled.p`
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 30px;
  font-size: 24px;
  font-weight: 700;
`;

export const StylePickContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const MoreItemBtnContainer = styled.div`
  ${({ theme }) => theme.variables.flex("", "center", "center")}
`;

export const MoreItemBtn = styled.button`
  width: 100px;
  height: 42px;
  color: #222222cc;
  background-color: #fff;
  border: 1px solid #ebebeb;
  border-radius: 10px;
`;
