import styled from "styled-components";

export const RateTitleUl = styled.ul`
  ${({ theme }) => theme.variables.flex(null, "space-between", "center")}
  background-color:#e7e7e7;
  border-radius: 10px;
`;
export const RateTitleLi = styled.li`
  text-align: center;
  width: 100%;
  background-color: ${props =>
    props.index.id === props.value ? "white" : null};
  border-radius: 10px;
  margin: 2px;
  font-size: 12px;
  font-weight: ${props => (props.index.id === props.value ? "bold" : null)};
  color: ${props => (props.index.id === props.value ? "black" : "#585858")};
  line-height: 30px;
`;

export const RateTable = styled.table`
  margin: 20px 0;
  width: 100%;
  height: 160px;
`;
export const RateTableThead = styled.thead`
  line-height: 14px;
  padding-bottom: 9px;
  border-bottom: 1px solid #ebebeb;
  font-size: 12px;
  color: rgba(34, 34, 34, 0.5);
  font-weight: 400;
  text-align: left;
`;
export const RateTableTd = styled.th`
  text-align: center;
  line-height: 17px;
  padding-top: 9px;
  font-size: 14px;
`;
