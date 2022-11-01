import styled from "styled-components";

export const DetailContentsContainer = styled.div`
  margin-top: 100px;
  float: right;
  position: relative;
  width: 50%;
  border-left: 1px solid ${({ theme }) => theme.style.warmGrey_2};
  position: static;
  padding-left: 3%;
`;

export const ProductDeliveryInfo = styled.div``;
export const DeilveryTitle = styled.div`
  display: flex;
  width: 100%;

  line-height: 17px;
  font-size: 14px;
`;

export const Fastshipping = styled.div``;
export const DeilveryTitleContainer = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.style.warmGrey_2};
  .icon {
    margin: 10px;
    margin-top: 20px;
  }
`;

export const ProductDetailContainer = styled.div`
  margin-top: 12px 0;
  padding: 5px 0;
`;

export const ShippingTitle = styled.div`
  display: flex;
  margin-top: 8px;
  line-height: 20px;
  font-size: 14px;
`;
export const ShippingText = styled.div`
  display: flex;
  padding-bottom: 10px;
  font-size: 14px;
`;

export const PriceInformation = styled.div`
  padding-top: 30px;
`;

export const PriceInfoTitle = styled.div`
  font-weight: bold;
  font-size: 18px;
`;

export const PrecautionsForPurchase = styled.div`
  margin-top: 20px;
  font-size: 12px;
  color: ${({ theme }) => theme.style.warmGrey_3};
`;
