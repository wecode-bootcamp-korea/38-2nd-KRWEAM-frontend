import styled from "styled-components";

export const DetailImageContainer = styled.div`
  ${({ theme }) => theme.variables.flex("column", "center", "center")};
  position: sticky;
  float: left;
  width: 50%;
  height: 100%;
  top: 0px;
  top: 130px;
`;

export const DetailImage = styled.div`
  ${({ theme }) => theme.variables.flex(null, "center", "center")};
  width: 90%;
`;
export const ProductImage = styled.img`
  width: 60%;
`;
export const DetailImageText_Icon = styled.div`
  ${({ theme }) => theme.variables.flex(null, "space-between", null)};
  width: 90%;
  padding: 10px;
  margin-top: 20px;
  border: 1px solid ${({ theme }) => theme.style.warmGrey_2};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.style.warmGrey_2};
  box-shadow: ${({ theme }) => theme.style.warmGrey_3};
`;
export const DetailImageTextContainer = styled.div``;

export const DetailImageText1_2 = styled.div`
  display: flex;
`;

export const DetailImageText1 = styled.div`
  padding: 3px;
  border-radius: 3px;
  background-color: orange;
  color: white;
  font-size: 12px;
`;

export const DetailImageText2 = styled.div`
  margin-left: 3px;
  font-size: 12px;
  font-weight: bold;
  margin-top: 3px;
`;

export const DetailImageText3 = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.style.warmGrey_3};
  margin-top: 4px;
`;
export const DetailImageIcon = styled.div`
  display: flex;
  .arrowIcon {
    size: 30px;
  }
`;
