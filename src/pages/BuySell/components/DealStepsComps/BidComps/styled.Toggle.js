import styled from "styled-components";

export const ToggleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  border-radius: 50px;
  border: 1px solid ${({ theme }) => theme.style.warmGrey_2};
  background-color: #f4f4f4;
`;

export const ToggleDefault = styled.div`
  width: 50%;
  height: 90%;
  margin: 2px;
  border-radius: 50px;
  text-align: center;
  padding-top: 15px;
  cursor: pointer;
`;

export const NotToggled = styled(ToggleDefault)`
  color: ${({ theme }) => theme.style.warmGrey_3};
`;

export const ToggledBg = styled(ToggleDefault)`
  color: white;
  font-weight: 600;
  background-color: ${({ primary, theme }) =>
    primary ? theme.style.red_9 : theme.style.green};
`;
