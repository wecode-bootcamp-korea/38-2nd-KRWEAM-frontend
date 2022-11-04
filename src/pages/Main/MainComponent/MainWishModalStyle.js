import styled from "styled-components";

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(34, 34, 34, 0.5);
  z-index: 3;
`;

export const AddWish = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 440px;
  height: 530px;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 10px 0 rgb(0 0 0 / 10%);
`;

export const AddWishText = styled.p`
  height: 60px;
  padding: 18px 50px 20px 18px;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
`;

export const AddWishProductInfo = styled.div`
  ${({ theme }) => theme.variables.flex("row", "flex-start", "center")}
  padding : 10px 32px;
`;

export const AddWishProductImg = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 10px;
`;

export const ProductEngName = styled.p`
  font-size: 15px;
  letter-spacing: -0.15px;
  line-height: 20px;
`;

export const ProductKorName = styled.p`
  font-size: 11px;
  color: #22222280;
`;

export const AddWishProductNameContainer = styled.div`
  padding-left: 15px;
`;

export const SizeSelectBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 130px);
  grid-template-rows: 60px 60px 60px 60px;
  height: 290px;
  padding: 8px 28px;
  border-top: 1px solid #ebebeb;
  overflow-y: auto;
`;

export const SizeBtn = styled.button`
  width: 120px;
  height: 52px;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid ${({ primary }) => (primary ? "#222" : "#ebebeb")};
`;

export const BtnContainer = styled.div`
  ${({ theme }) => theme.variables.flex("row", "center", "center")}
`;

export const ConfirmBtn = styled.button`
  left: 50%;
  width: 120px;
  height: 42px;
  margin-top: 15px;
  background-color: #fff;
  border: 1px solid #ebebeb;
  border-radius: 10px;
  color: #222222cc;
`;
