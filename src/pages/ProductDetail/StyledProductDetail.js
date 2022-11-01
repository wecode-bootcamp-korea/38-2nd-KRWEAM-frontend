import styled from "styled-components";

export const DetailContainer = styled.div`
  overflow-x: hidden;
`;

export const DetailMainContainer = styled.div`
  display: flex;
  padding: 30px 40px 120px;
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;
`;

export const AnotherProducts = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1280px;
  padding: 30px 40px 120px;
`;
export const TitleConatiner = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const Name = styled.div`
  display: flex;
`;
export const BrandName = styled.div`
  display: flex;
  font-weight: bold;
`;
export const more = styled.div`
  display: flex;
  color: ${({ theme }) => theme.style.warmGrey_3};
`;
export const ImagesContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
