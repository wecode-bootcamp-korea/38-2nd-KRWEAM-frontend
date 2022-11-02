import styled from "styled-components";

export const LogComponentContainer = styled.div`
  ${({ theme }) => theme.variables.flex("row", "space-between", "center")}
  width: 1000px;
  padding: 12px 0;
  border-bottom: 1px solid #ebebeb;
`;

export const LogComponetImgAndText = styled.div`
  ${({ theme }) => theme.variables.flex("row", "", "center")}
`;

export const ComponentImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 10px;
`;

export const ItemTextContainer = styled.div`
  margin-left: 10px;
  text-align: left;
`;

export const ComponentEngName = styled.p`
  margin-top: 8px;
  color: #222;
  font-size: 13px;
`;

export const ComponentSizeText = styled.span`
  color: #222222cc;
  font-size: 13px;
  font-weight: 700;
`;

export const ComponentDateAndStatus = styled.div`
  ${({ theme }) => theme.variables.flex("row", "", "")}
`;

export const ComponentDateText = styled.p`
  margin-right: 50px;
  color: #22222280;
  font-size: 13;
`;

export const ComponentStatusText = styled.p`
  color: #222;
  font-size: 13;
`;
