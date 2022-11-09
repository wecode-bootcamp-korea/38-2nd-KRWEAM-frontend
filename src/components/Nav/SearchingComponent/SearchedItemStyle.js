import styled from "styled-components";
import { Link } from "react-router-dom";

export const SearchedItemContainer = styled.div`
  ${({ theme }) => theme.variables.flex("row", "", "center")}
  width: 800px;
  padding: 10px;
  border-bottom: 1px solid #ebebeb;
`;

export const SearchedItemImg = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 10px;
`;

export const SearchedItemTextContainer = styled.div`
  padding-left: 10px;
  text-align: left;
`;

export const SearchedItemEngName = styled.p`
  font-size: 14px;
  line-height: 20px;
`;

export const SearchedItemKorName = styled.p`
  font-size: 12px;
  color: #22222280;
`;
