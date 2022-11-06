import styled from "styled-components";

export const List = styled.div`
  ${({ theme }) => theme.variables.flex("column", "null", "center")};
  width: 100vw;
  padding-top: 96px;
`;

export const Nav = styled.nav`
  position: fixed;
  width: 100%;
  height: 120px;
  padding: 0px 40px 0 40px;
  border-bottom: 1px solid rgba(34, 34, 34, 0.08);
  background-color: white;
  text-align: center;
  z-index: 1;
`;

export const AdsContainer = styled.div`
  ${({ theme }) => theme.variables.flex("row", "center", "null")};
  position: relative;
  width: 1280px;
  height: 150px;
  margin-top: 150px;
  margin-bottom: 10px;
  background-color: #f8f9fb;
`;

export const Img = styled.div`
  background-image: url("https://raw.githubusercontent.com/c0zyb1ue/KRWEAM-DataAutoInputer/main/KRWEAM%20%EC%82%AC%EC%A7%84/shoe1.png");
  background-size: 200px;
  position: absolute;
  bottom: 0px;
  left: 300px;
  width: 200px;
  height: 150px;
`;

export const AdsText = styled.div`
  position: absolute;
  width: 100%;
  top: 55px;
  left: 570px;
  color: black;
  font-size: 34px;
  font-style: italic;
`;
export const AdsText2 = styled.div`
  position: absolute;
  width: 100%;
  top: 93px;
  left: 895px;
  color: black;
  font-weight: 800;
  font-size: 17px;
`;

export const TopBox = styled.div`
  height: 111px;
`;

export const H1 = styled.h1`
  margin-top: 10px;
  margin-bottom: 30px;
  font-size: 28px;
  font-weight: 600;
`;

export const Filters = styled.div`
  ${({ theme }) => theme.variables.flex("row", "flex-start", "null")};
  width: 1200px;
  padding: 0 45px;
  padding-bottom: 16px;
`;
export const Filter = styled.button`
  display: inline-block;
  height: 38px;
  padding: 10px 12px;
  border: none;
  border-radius: 12px;
  margin-right: 8px;
  outline: none;
  box-shadow: none;
  font-size: 15px;
  letter-spacing: -0.15px;
  vertical-align: top;
  cursor: pointer;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 210px 1fr;
  width: 1280px;
  margin-top: 30px;
  gap: 18px;
  ::selection {
    background: white;
  }
`;

export const Items = styled.div`
  width: 230px;
`;

export const Button = styled.button`
  height: 30px;
  padding: 0 10px;
  border: 1px solid rgba(34, 34, 34, 0.08);
  border-radius: 25px;
  margin-left: 10px;
  background-color: transparent;
  font-size: 10px;
  cursor: pointer;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 250px);
  grid-template-rows: repeat(2, 445px);
  gap: 30px 17px;
`;

export const DetailFilters = styled.div`
  font-size: 15px;
  font-weight: 700;
`;

export const Div = styled.div`
  margin: 4px 0 15px 0;
`;

export const Detail = styled.div`
  ${({ theme }) => theme.variables.flex("row", "space-between", "center")};
  margin: 10px 0 10px 0;
  border-bottom: 1px solid rgba(34, 34, 34, 0.08);
  user-select: none;
  ::selection {
    background: white;
  }
  .categoryOpenIcon {
    color: rgba(34, 34, 34, 0.5);
  }
`;

export const SubCategories = styled.div`
  list-style: none;
`;

export const SubCategory = styled.div`
  ${({ theme }) => theme.variables.flex("row", null, "center")};
`;

export const CheckInput = styled.input.attrs(props => ({ type: "checkbox" }))`
  margin-right: 10px;
`;

export const SubLi = styled.li`
  color: ${({ theme }) => theme.style.warmGrey_9};
  font-size: 13px;
  font-weight: 400;
  margin: 10px 0;
`;

export const Div1 = styled.div`
  width: 100%;
  padding: 10px 0;
`;

export const Div2 = styled.div`
  ${({ theme }) => theme.variables.flex("row", "space-between", "null")};
  color: ${({ theme }) => theme.style.warmGrey_9};
  font-size: 13px;
  ::selection {
    background: white;
  }
  cursor: pointer;
`;

export const MainFilter = styled.div`
  width: 100%;
  padding-bottom: 10px;
  cursor: pointer;
`;

export const Span1 = styled.span`
  color: rgba(34, 34, 34, 0.5);
`;

export const Span2 = styled.span`
  color: rgba(34, 34, 34, 0.5);
  font-weight: 400;
  font-size: 15px;
  cursor: pointer;
`;
