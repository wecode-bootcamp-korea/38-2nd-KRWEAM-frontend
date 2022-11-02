import styled from "styled-components";

export const MyPageContainer = styled.div`
  ${({ theme }) => theme.variables.flex("row", "center", "flex-start")};
  max-width: 1200px;
  margin: 0 auto;
  padding: 110px 0;
`;
