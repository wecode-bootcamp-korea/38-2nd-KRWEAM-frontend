import styled from "styled-components";

export const ComparePrice = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 90px;
`;

export const CompareBox = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 25px;
  background-color: white;
`;

export const CompareText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 40px;
`;

export const CompareText2 = styled(CompareText)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 40px;
  border-left: 1px solid ${({ theme }) => theme.style.warmGrey_2};
`;
