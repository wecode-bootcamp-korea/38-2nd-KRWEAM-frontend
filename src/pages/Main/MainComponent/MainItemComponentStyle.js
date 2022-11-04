import styled from "styled-components";

export const ProductContainer = styled.div`
  position: relative;
  width: 280px;
  margin: 20px 0;
  .scrapIcon {
    position: absolute;
    top: 15px;
    right: 10px;
    width: 27px;
    height: 20px;
  }
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 280px;
  border-radius: 12px;
`;

export const ProductBrand = styled.p`
  color: #333;
  font-size: 14px;
  font-weight: 700;
  text-decoration: underline;
`;

export const ProductName = styled.p`
  margin: 8.5px 0 7px 0;
  color: #222;
  font-size: 14px;
`;

export const ProductPrice = styled.p`
  color: #222;
  font-size: 15px;
`;

export const ProductBuyImmediately = styled.p`
  color: #22222280;
  font-size: 11px;
`;
