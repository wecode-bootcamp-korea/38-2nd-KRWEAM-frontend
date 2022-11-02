import styled from "styled-components";

export const Background = styled.div`
  ${({ theme }) => theme.variables.flex("column", null, "center")};
  width: 100%;
  background-color: #fafafa;
`;

export const Container = styled.div`
  width: 700px;
  background-color: white;
  padding: 30px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
export const Container1 = styled(Container)`
  margin: 20px 0 0px 0;
`;

export const Div = styled.div`
  padding-bottom: 4px;
  letter-spacing: -0.05px;
`;

export const Title = styled(Div)`
  font-size: 13.5px;
  font-weight: 600;
`;
export const Title1 = styled(Title)`
  margin-top: 30px;
`;

export const ToggleWrapper = styled.div`
  width: 100%;
  height: 50px;
`;

export const WishedPriceWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  margin-top: 30px;
`;

export const Won = styled.span`
  position: absolute;
  bottom: 22px;
  right: 10px;
  font-size: 16px;
  font-weight: 600;
`;

export const WishedPriceInput = styled.input.attrs(props => ({
  type: "number",
}))`
  width: 100%;
  height: 40px;
  outline: none;
  border: none;
  border-bottom: 1px solid
    ${({ primary, theme }) => (primary ? "#000000" : theme.style.warmGrey_2)};
  padding: 0 30px 0 0;
  margin: 0;
  text-align: right;
  font-size: 16px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Description = styled.span`
  display: block;
  margin-top: 10px;
  color: ${({ theme }) => theme.style.warmGrey_3};
  font-size: 12px;
  font-weight: 400;
`;

export const Container2 = styled(Container)`
  margin: 5px 0 0px 0;
`;

export const Container3 = styled(Container)`
  margin: 5px 0 150px 0;
`;

export const Button = styled.button`
  ${({ theme }) => theme.variables.flex("column", "space-between", "center")};
  width: 100%;
  height: 50px;
  padding: 16px 0;
  border-radius: 10px;
  border: transparent;
  margin-top: 20px;
  background-color: ${({ primary, theme }) =>
    primary ? theme.style.warmGrey_8 : theme.style.warmGrey_2};
  color: white;
  font-size: 16px;
  cursor: ${({ primary }) => (primary ? "pointer" : "default")};
  transition: 0.1s ease-in-out;
  user-select: none;
`;
