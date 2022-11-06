import styled from "styled-components";

export const AccodionContainer = styled.div`
  overflow: hidden;
  width: 100%;
  border-radius: 1px;
  background-color: transparent;
  color: red;
`;

export const Inner = styled.div`
  position: absolute;
  padding: 1rem;
  color: black;
`;

export const Header = styled.button`
  ${({ theme }) => theme.variables.flex("row", "space-between", "center")};
  width: 100%;
  height: 4rem;
  padding: 0 1rem;
  border: none;
  margin: 10px 0 10px 0;
  color: ${({ theme }) => theme.style.warmGrey_8};
  background: white;
  text-align: left;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  outline: none;
  border-bottom: 1px solid rgba(34, 34, 34, 0.08);
  user-select: none;
  ::selection {
    background: white;
  }
  .categoryOpenIcon {
    color: rgba(34, 34, 34, 0.5);
  }
`;

export const Content1 = styled.div`
  position: relative;
  overflow: hidden;
  height: ${props => {
    const inner = document.getElementById(props.itemName);
    return `${props.isActive && inner ? 200 : 0}px`;
  }};
  transition: height 0.35x;
`;

export const AccordionContent = styled.div`
  width: 100%;
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

export const Div = styled.div`
  margin: 10px 0 0px 15px;
  font-size: 13.5px;
  color: ${({ theme }) => theme.style.warmGrey_9};
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

export const Span2 = styled.span`
  color: rgba(34, 34, 34, 0.5);
  font-weight: 400;
  font-size: 15px;
  cursor: pointer;
`;
