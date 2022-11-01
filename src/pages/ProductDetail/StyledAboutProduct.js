import styled from "styled-components";

export const DetailTopContainer = styled.div``;
export const DetailNames = styled.div`
  ${({ theme }) => theme.variables.flex("column", null, null)}
`;
export const ProductDetailTitleH1 = styled.div`
  display: flex;
  text-decoration: underline;
  font-weight: 900;
  margin-bottom: 9px;
  margin-top: 4px;
  font-size: 18px;
  :hover {
    cursor: pointer;
  }
`;
export const ProductDetailNameEn = styled.div`
  display: flex;
  margin-bottom: 4px;
  font-size: 18px;
`;
export const ProductDetailNameKo = styled.div`
  display: flex;
  line-height: 17px;
  font-size: 14px;
  color: ${({ theme }) => theme.style.warmGrey_3};
`;
export const ProductDetail = styled.div`
  ${({ theme }) => theme.variables.flex(null, "space-between", null)}
  border-bottom: 
  ${props => (props.index === "1" ? `1px solid #ebebeb` : null)};
  padding-top: 19px;
  padding-bottom: 12px;
`;
export const DetailTexts1 = styled.div`
  font-size: 14px;
`;
export const DetailTexts2 = styled.div`
  font-weight: bold;
  font-size: ${props => (props.index === "1" ? null : "20px")};
  :hover {
    cursor: pointer;
  }
`;

export const ProductInterestedItems = styled.div`
  ${({ theme }) => theme.variables.flex(null, "center", "center")}
  width: ${({ index }) => (index === "1" ? null : "120px")};
  height: ${({ index }) => (index === "1" ? "60px" : "50px")};
  line-height: ${({ index }) => (index === "1" ? "58px" : null)};
  margin: ${({ index }) => (index === "1" ? " 15px 0" : " 0 10px")};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.style.warmGrey_2};
  .bookmarkIcon {
    margin-right: 10px;
  }
  :hover {
    cursor: pointer;
  }
`;

export const MiniContainer = styled.div`
  display: ${props => (props.index === false ? "flex" : "none")};
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 200;
  top: 96px;
  left: 0;
  right: 0;
  padding: 10px 40px;
  background-color: #fff;
  border-bottom: 1px solid ${({ theme }) => theme.style.warmGrey_2};
`;

export const MiniProductBox = styled.div`
  display: flex;
`;
export const MiniImage = styled.img`
  object-fit: cover;
  width: 64px;
  height: 64px;
  margin: 0 10px;
`;
export const MiniTextBox = styled.div`
  ${({ theme }) => theme.variables.flex("column", "center", null)}
`;
export const MiniNameEn = styled.div``;
export const MiniNameKo = styled.div`
  color: ${({ theme }) => theme.style.warmGrey_3};
  font-size: 12px;
  line-height: 20px;
`;
export const BtnBox = styled.div`
  ${({ theme }) => theme.variables.flex(null, null, "center")}
`;

export const ProductDetailTextContainer = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;
export const ProdcutInfo = styled.div`
  display: flex;
  width: 100%;
  margin-top: 35px;
  margin-bottom: 10px;
  font-weight: bold;
`;
export const ProductDetailInfo = styled.div`
  ${({ theme }) => theme.variables.flex(null, "space-between", null)}
  border-top: 1px solid ${({ theme }) => theme.style.warmGrey_2};
  border-bottom: 1px solid ${({ theme }) => theme.style.warmGrey_2};
  padding: 20px 0;
`;
export const ProductDetailList = styled.div`
  border-left: ${props => (props.index === "1" ? null : "1px solid #ededed")};
  padding-left: 10px;
`;

export const ProductDetailInfoTitle = styled.div`
  display: flex;
  line-height: 14px;
  font-size: 12px;
`;

export const ProductDetailInfoText = styled.div`
  display: flex;
  min-width: 100px;
  font-weight: ${props => (props.index === "1" ? "bold" : null)};
  margin-top: 4px;
  line-height: 17px;
  font-size: 14px;
`;
