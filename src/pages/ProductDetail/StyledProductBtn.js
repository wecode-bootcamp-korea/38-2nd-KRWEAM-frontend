import styled from "styled-components";

export const ProductBtnSet = styled.div`
  display: flex;
  margin-top: ${props => (props.num === "1" ? "30px" : null)};
  border: none;
  :hover {
    cursor: pointer;
  }
`;
export const ProductBtn = styled.div`
  ${({ theme }) => theme.variables.flex(null, "space-evenly", "center")}
  background-color: ${props =>
    props.index === "1" ? props.theme.style.red_9 : props.theme.style.green};
  color: white;
  border-radius: 8px;
  width: ${props => (props.num === "1" ? "50%" : "170px")};
  height: ${props => (props.num === "1" ? "60px" : "50px")};
  margin-left: ${props => (props.index === "1" ? null : "10px")};
`;
export const ProductBtnText = styled.div`
  ${({ theme }) => theme.variables.flex(null, null, "center")}
  width: 55px;
  height: 100%;
  border-right: 0.3px solid
    ${props => (props.index === "1" ? "#D95B4E" : " #3FA96F")};
  font-size: 18px;
`;
export const ProductBtninnerText1 = styled.div`
  font-size: 16px;
  line-height: 20px;
`;
export const ProductBtninnerText2 = styled.div`
  font-size: 12px;
  font-weight: lighter;
`;
