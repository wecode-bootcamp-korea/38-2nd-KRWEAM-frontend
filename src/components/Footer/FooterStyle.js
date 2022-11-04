import styled from "styled-components";

export const FooterAll = styled.div`
  padding: 50px 40px;
  margin-top: 30px;
  background-color: white;
  border-top: 1px solid #ebebeb;
`;
export const FooterServiceArea = styled.div`
  ${({ theme }) => theme.variables.flex(null, "space-between", null)}
  padding-bottom: 56px;
  border-bottom: 1px solid #ebebeb;
`;
export const FooterServiceTextContainer = styled.div`
  ${({ theme }) => theme.variables.flex(null, "space-between", null)}
  width: 320px;
`;
export const FooterServiceTextStrong = styled.div`
  width: 100%;
  font-weight: bold;
`;
export const FooterText = styled.li`
  margin-top: 16px;
  color: ${({ theme }) => theme.style.warmGrey_3};
  font-size: 14px;
`;
export const FooterServicebtn = styled.button`
  width: 120px;
  height: 34px;
  margin-top: 10px;
  color: #fafafa;
  background-color: black;
  font-size: 12px;
  border: none;
`;
export const FooterTermContainer = styled.div`
  ${({ theme }) => theme.variables.flex(null, "space-between", null)}
  padding-bottom: 16px;
  margin-top: 20px;
`;
export const FooterTerm = styled.div`
  display: flex;
  margin-top: 10px;
`;
export const FooterSelf = styled.div`
  margin-left: 10px;
  font-weight: bold;
`;
export const FooterIcons = styled.div`
  ${({ theme }) => theme.variables.flex(null, "space-around", null)}
  width: 150px;
  .icon {
    font-size: 24px;
  }
`;
export const FooterBusiness = styled.div`
  width: 651px;
  line-height: 20px;
  font-size: 13px;
  color: ${({ theme }) => theme.style.warmGrey_3};
`;
export const FooterNotice = styled.div`
  display: flex;
  margin-top: 30px;
`;
export const FooterNoticeText = styled.div`
  width: 620px;
  font-size: 12px;
  color: ${({ theme }) => theme.style.warmGrey_3};
`;
export const FooterCopy = styled.div`
  margin-left: auto;
  font-size: 12px;
`;
