import styled from "styled-components";
import { Link } from "react-router-dom";

export const WishItemContainer = styled.div`
  ${({ theme }) => theme.variables.flex("row", "space-between", "center")}
  width: 960px;
  margin: 0 auto;
  padding: 10px 0;
  border-bottom: 1px solid #ebebeb;
`;

export const WishItemLeft = styled.div`
  ${({ theme }) => theme.variables.flex("row", "", "center")}
`;

export const ComponentImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 10px;
`;

export const ItemTextContainer = styled.div`
  margin-left: 15px;
  text-align: left;
`;

export const WishItemBrand = styled.span`
  color: #333;
  border-bottom: 1px solid #222;
  font-size: 14px;
  font-weight: 700;
`;

export const ComponentEngName = styled.p`
  margin-top: 8px;
  color: #222;
  font-size: 13pxp;
`;

export const WishItemSize = styled.p`
  margin-top: 25px;
  font-size: 13px;
  font-weight: 700;
`;

export const WishItemBtnContainer = styled.div`
  text-align: right;
`;

export const WishItemPurchaseBtn = styled.button`
  ${({ theme }) => theme.variables.flex("row", "", "center")}
  height: 60px;
  margin-bottom: 10px;
  padding: 0 15px;
  background-color: #ef6253;
  border: none;
  border-radius: 10px;
`;

export const WishItemPurchaseBtnTitle = styled.p`
  ${({ theme }) => theme.variables.flex("row", "", "center")}
  height: 100%;
  padding-right: 10px;
  color: #fff;
  border-right: 1px solid #d95b4e;
  font-size: 18px;
`;

export const WishItemBtnRight = styled.div`
  ${({ theme }) => theme.variables.flex("column", "center", "flex-end")}
  height: 100%;
  padding-left: 15px;
`;

export const WishItemPrice = styled.p`
  color: #fff;
  font-size: 15px;
  line-height: 15px;
  letter-spacing: 1px;
`;

export const WishItemBtnBuyImmediately = styled.p`
  color: hsla(0, 0%, 100%, 0.8);
  font-size: 11px;
  text-align: left;
`;

export const WishItemDeleteBtn = styled.span`
  border-bottom: 1px solid #333;
  color: #222222cc;
  font-size: 12px;
`;

export const StyledLink = styled(Link)`
  color: #222;
  text-decoration: none;
`;
