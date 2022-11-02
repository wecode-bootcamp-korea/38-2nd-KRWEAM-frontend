import styled from "styled-components";

export const Background = styled.div`
  ${({ theme }) => theme.variables.flex("column", null, "center")};
  width: 100%;
  background-color: #fafafa;
`;

export const Container = styled.div`
  width: 700px;
  background-color: white;
  margin: 20px 0 150px 0;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 30px;
`;

export const ItemInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.style.warmGrey_2};
`;

export const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const ItemInfo = styled.div`
  width: 100%;
  margin-left: 16px;
  margin-bottom: 20px;
`;

export const Size = styled.p`
  font-size: 13px;
  font-weight: 700;
  padding-top: 10px;
`;

export const Div = styled.div`
  padding-bottom: 4px;
  letter-spacing: -0.05px;
`;

export const ModelNumber = styled(Div)`
  color: black;
  font-size: 14px;
  font-weight: 700;
`;

export const ProductKrName = styled(Div)`
  color: ${({ theme }) => theme.style.warmGrey_3};
  font-size: 13px;
  font-weight: 400;
`;

export const ProductEngName = styled(Div)`
  color: black;
  font-size: 13px;
`;
