import styled from "styled-components";

export const ItemContainer = styled.div`
  ${({ theme }) => theme.variables.flex("column", null, null)};
  width: 250px;
  position: relative;
  height: 418px;
  padding: 0 10px;
  margin: 20px 0;
  color: ${({ theme }) => theme.style.warmGrey_9};
`;

export const ItemWrapper = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const ItemImageWrapper = styled.div`
  width: 230px;
  height: 230px;
  border-radius: 15px;
`;
export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  outline: none;
  border-radius: 15px;
  border-color: transparent;
  cursor: pointer;
`;
export const ProductInfo = styled.div`
  width: 100%;
  height: 126px;
  padding-top: 9px;
`;
export const InterestFigure = styled.div`
  ${({ theme }) => theme.variables.flex("row", "center", "center")};
  position: absolute;
  bottom: 15px;
  left: 2px;
  width: 60px;
  height: 30px;
  font-size: 20px;
`;
export const TotalWished = styled.span`
  font-size: 12.5px;
  margin-left: 6px;
  cursor: pointer;
`;
export const Brand = styled.p`
  display: block;
  width: 100%;
  height: 20px;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.21px;
  font-weight: 800;
  color: #333333;
  text-decoration: underline;
`;

export const ProductEngName = styled.p`
  width: 100%;
  padding-top: 4px;
  font-size: 13px;
  line-height: 16px;
`;
export const ProductKrName = styled.p`
  width: 100%;
  padding-top: 5px;
  color: ${({ theme }) => theme.style.warmGrey_3};
  font-size: 12px;
`;
export const BuyPrice = styled.p`
  padding-top: 10px;
  font-size: 15px;
  font-weight: 700;
`;
export const BuyNow = styled.p`
  width: 100%;
  padding-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.style.warmGrey_3};
  font-size: 12px;
`;
