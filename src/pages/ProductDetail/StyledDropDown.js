import styled from "styled-components";

export const ProductBuyingMustInfo = styled.div`
  margin-top: 20px;
  width: 100%;
`;
export const ProductConfirmTitle = styled.div`
  ${({ theme }) => theme.variables.flex(null, "space-between", null)}
  padding: 15px 0;
  border-bottom: 1px solid ${({ theme }) => theme.style.warmGrey_2};
  font-weight: bold;
  font-size: 18px;
`;

export const ProductDropDownTitle = styled.div`
  width: 100%;
  padding: 18px 0 17px;
  border-bottom: 1px solid ${({ theme }) => theme.style.warmGrey_2};
`;
export const DropDownsubTitleSet = styled.div`
  display: ${props => (props.isActive ? `block` : `none`)};
`;
export const DropDownsubTitle = styled.div`
  margin: 10px 0;
  margin-top: ${props => (props.index === "1" ? " 20px " : null)};
  padding-top: ${props => (props.index === "1" ? " 10px " : null)};
  font-weight: bold;
  font-size: 13px;
  border-top: ${props => (props.index === "1" ? "1px solid black" : null)};
  line-height: 20px;
`;

export const DropDownTitle = styled.div`
  ${({ theme }) => theme.variables.flex(null, "space-between", null)}
`;
export const DropDowntext = styled.div`
  margin: 2px 0;
  color: ${({ theme }) => theme.style.warmGrey_3};
  font-size: 13px;
`;
