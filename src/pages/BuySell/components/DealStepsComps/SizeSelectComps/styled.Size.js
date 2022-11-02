import styled from "styled-components";

export const GridBox = styled.ul`
  display: grid;
  width: 100%;
  height: 400px;
  margin: 20px 0;
  gap: 6px;
`;

export const FootSizeGrid = styled(GridBox)`
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 60px);
`;

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  padding: 13px 0;
  border-radius: 10px;
  align-items: center;
  user-select: none;
  transition: 0.1s ease-in-out;
  cursor: pointer;
`;

export const SizeButton = styled(Button)`
  border: 1px solid
    ${({ primary, theme }) => (primary ? "black" : theme.style.warmGrey_2)};
  background-color: white;
  font-weight: ${({ primary }) => (primary ? "700" : "300")}; ;
`;

export const Size = styled.span`
  font-size: 15px;
`;

export const Price = styled.span`
  font-size: 11px;
  color: ${({ primary, theme }) =>
    primary ? theme.style.red_9 : theme.style.green};
`;
