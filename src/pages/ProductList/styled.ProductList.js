import styled from "styled-components";

export const List = styled.div`
  ${({ theme }) => theme.variables.flex("column", "null", "center")};
  width: 100vw;
  height: 300vh;
`;

export const Nav = styled.nav`
  position: fixed;
  width: 100%;
  height: 120px;
  padding: 8px 40px 0 40px;
  border-bottom: 1px solid rgba(34, 34, 34, 0.08);
  background-color: white;
  text-align: center;
  z-index: 1;
`;

export const AdsContainer = styled.div`
  ${({ theme }) => theme.variables.flex("row", "center", "null")};
  width: 1280px;
  height: 150px;
  margin-top: 150px;
  margin-bottom: 10px;
  background-color: #615547;
`;

export const TopBox = styled.div`
  height: 111px;
`;

export const H1 = styled.h1`
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
  height: 300vh;
  margin-top: 30px;
  gap: 18px;
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
  grid-template-rows: repeat(5, 445px);
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
  height: 80px;
  margin: 10px 0 10px 0;
  border-bottom: 1px solid rgba(34, 34, 34, 0.08);

  .categoryOpenIcon {
    color: rgba(34, 34, 34, 0.5);
  }
`;

export const Div1 = styled.div`
  ${({ theme }) => theme.variables.flex("column", "space-between", "null")};
  width: 100px;
  height: 35px;
`;

export const Div2 = styled.div`
  color: ${({ theme }) => theme.style.warmGrey_9};
  font-size: 13px;
`;

export const Span1 = styled.span`
  color: rgba(34, 34, 34, 0.5);
`;

export const Span2 = styled.span`
  color: rgba(34, 34, 34, 0.5);
  font-weight: 400;
  font-size: 15px;
`;
