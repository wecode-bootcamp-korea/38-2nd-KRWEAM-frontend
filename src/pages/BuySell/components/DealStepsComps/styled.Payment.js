import styled from "styled-components";

export const Background = styled.div`
  ${({ theme }) => theme.variables.flex("column", null, "center")};
  position: relative;
  width: 100%;
  background-color: #fafafa;
`;

export const Container = styled.div`
  width: 700px;
  padding: 30px;
  margin: 10px 0 0px 0;
  background-color: white;
  box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 24px;
`;

export const Payment = styled(Container)`
  margin: 0px 0 150px 0;
`;

export const Div = styled.div`
  padding-bottom: 4px;
  letter-spacing: -0.05px;
`;

export const Title = styled(Div)`
  font-size: 16px;
  font-weight: 600;
`;

export const Input = styled.input.attrs(props => ({
  type: "number",
}))`
  width: 80%;
  height: 40px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid
    ${({ primary, theme }) => (primary ? "black" : theme.style.warmGrey_2)};
  margin: 15px 0 10px 0;
  &:focus {
    outline: none;
  }
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const PointBtn = styled.button`
  width: 100px;
  height: 38px;
  margin-left: 10px;
  border-radius: 10px;
  border: transparent;
  background-color: ${({ primary, theme }) =>
    primary ? theme.style.warmGrey_8 : theme.style.warmGrey_2};
  color: white;
  transition: 0.1s ease-in-out;
  cursor: ${({ primary }) => (primary ? "pointer" : "default")};
`;

export const SubDescription = styled.div`
  ${({ theme }) => theme.variables.flex("row", "space-between", "center")};
  margin: 10px 10px 0 0;
  color: ${({ theme }) => theme.style.warmGrey_8};
  .questionIcon {
    margin-left: 6px;
    font-size: 19px;
  }
`;

export const HavePoint = styled.div`
  font-size: 13px;
  font-weight: 700;
`;

export const SubTitle = styled.div`
  margin-top: 20px;
  font-size: 13px;
`;

export const Box = styled.div`
  ${({ theme }) => theme.variables.flex("row", null, "center")};
  width: 200px;
`;

export const PriceBox = styled.div`
  display: inline-block;
  width: 80%;
  height: 30px;
  padding: 10px 5px 23px 0;
  border-bottom: 1px solid ${({ theme }) => theme.style.warmGrey_2};
  margin-right: 10px;
  text-align: right;
  font-size: 18px;
`;

export const TableRow = styled.div`
  ${({ theme }) => theme.variables.flex("row", "space-between", null)};
  width: 100%;
  color: ${({ theme }) => theme.style.warmGrey_3};
`;

export const DefaultSmallText = styled.div`
  padding-top: 8px;
  font-size: 13px;
  line-height: 1.7;
  letter-spacing: -0.05px;
`;

export const TTitle = styled(DefaultSmallText)``;

export const TDescription = styled(DefaultSmallText)`
  padding-right: 10px;
`;

export const RadioInput = styled.input.attrs(props => ({
  type: "radio",
}))`
  width: 23px;
  height: 23px;
  vertical-align: middle;
  border: max(2px, 0.1em) solid gray;
  border-radius: 0%;
  appearance: none;
  transition: 0.1s ease-in-out;
  cursor: pointer;
  &:checked {
    border: 0.7em solid ${({ theme }) => theme.style.warmGrey_8};
  }
`;

export const FinalPayment = styled.button`
  width: 100%;
  padding: 15px 30px;
  border-radius: 10px;
  border: none;
  background-color: ${({ primary, theme, disabled }) =>
    disabled
      ? theme.style.warmGrey_2
      : primary
      ? theme.style.red_9
      : theme.style.green};
  color: white;
  transition: 0.1s ease-in-out;
  cursor: ${({ primary }) => (primary ? "pointer" : "default")};
`;

export const ListItem = styled.div`
  ${({ theme }) => theme.variables.flex("row", "space-between", null)};
  width: 100%;
  padding: 14px 0;
  border-bottom: 1px solid ${({ theme }) => theme.style.warmGrey_2};
  line-height: 20px;
`;

export const TextArea = styled.div`
  width: 84%;
`;

export const CheckDes = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

export const CheckSubDes = styled.span`
  color: ${({ theme }) => theme.style.warmGrey_3};
  font-size: 11px;
  font-weight: 300;
`;

export const TotalPayment = styled.div`
  ${({ theme }) => theme.variables.flex("row", "space-between", null)};
  width: 100%;
  padding-bottom: 20px;
`;

export const TotalPrice = styled.span`
  font-size: 20px;
  font-weight: 500;
  font-style: italic;
  padding-right: 10px;
  color: ${({ primary, theme }) =>
    primary ? theme.style.red_9 : theme.style.green};
`;

export const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 200vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Modal = styled.div`
  ${({ theme }) => theme.variables.flex("column", "space-between", "center")};
  position: absolute;
  box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 24px;
  top: 500px;
  bottom: 50%;
  left: 50%;
  margin-left: -200px;
  width: 400px;
  height: 190px;
  background-color: white;
  border-radius: 30px;
`;

export const Span = styled.span`
  font-weight: 700;
  font-size: 15px;
  padding-top: 60px;
`;

export const ModalClose = styled.button`
  width: 100%;
  height: 60px;
  background-color: transparent;
  border: none;
  border-top: 1px solid ${({ theme }) => theme.style.warmGrey_2};
`;
