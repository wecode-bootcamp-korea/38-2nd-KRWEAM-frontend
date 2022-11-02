import styled from "styled-components";

export const MyPageMainContainer = styled.div`
  ${({ theme }) =>
    theme.variables.flex("column", "space-between", "flex-start")}
`;
export const MypageProfileContainer = styled.div`
  ${({ theme }) => theme.variables.flex("row", "space-between", "center")}
  width: 1000px;
  height: 150px;
  padding: 23px;
  border: 1px solid #ebebeb;
  border-radius: 10px;
`;

export const UserInfoContainer = styled.div`
  ${({ theme }) => theme.variables.flex("row", "", "center")}
`;

export const UserThumnail = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 20px;
  border-radius: 50%;
`;

export const MypageBoldFont = styled.p`
  font-size: 18px;
  font-weight: 700;
`;

export const UserEmail = styled.p`
  color: #22222280;
  font-size: 14px;
`;

export const UserProfileBtn = styled.button`
  width: 85px;
  height: 35px;
  margin: 12px 7px 0 0;
  color: #222222cc;
  background-color: #fff;
  border: 1px solid #e3e3e3;
  border-radius: 10px;
  font-size: 12px;
`;

export const UserInfoGrade = styled.div`
  ${({ theme }) => theme.variables.flex("column", "center", "center")}
  width: 156px;
  height: 100px;
  border-right: 1px solid #ebebeb;
  text-align: center;
`;

export const UserInfoSubTilte = styled.p`
  color: #222;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
`;

export const UserInfoText = styled.p`
  color: #22222280;
  font-size: 13px;
  line-height: 19px;
`;

export const UserInfoPoint = styled.div`
  width: 156px;
  text-align: center;
`;

export const KeepingLogContainer = styled.div`
  margin-top: 42px;
`;

export const KeepingLogItemContainer = styled.div`
  ${({ theme }) => theme.variables.flex("row", "space-between", "center")}
  width: 1000px;
  height: 96px;
  margin-top: 16px;
  background-color: #f2f9f6;
  border: none;
  border-radius: 10px;
`;

export const LogBoxItemContainer = styled.div`
  width: 250px;
  text-align: center;
`;

export const LogBoxItemText = styled.p`
  color: #222222cc;
  font-size: 13px;
`;

export const LogBoxTotalFont = styled.p`
  color: #f15746;
  font-size: 18px;
  font-weight: 700;
`;

export const KeepingBtn = styled.div`
  ${({ theme }) => theme.variables.flex("row", "space-between", "center")}
  width: 1000px;
  height: 60px;
  margin-top: 10px;
  padding: 0 15px 0 15px;
  background-color: #222222cc;
  border-radius: 10px;

  .rightIcon {
    color: #fff;
  }
`;

export const KeepingContainer = styled.div`
  ${({ theme }) => theme.variables.flex("row", "center", "center")}
`;

export const IconContainer = styled.div`
  width: 33px;
  height: 33px;
  margin-right: 14px;
  padding: 5px 0px 0px 7px;
  background-color: #19ce60;
  border-radius: 50%;

  .boxIcon {
    width: 20px;
    height: 20px;
    color: #fff;
  }
`;

export const KeepingSignText = styled.p`
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  line-height: 19px;
`;

export const KeepingSignSubText = styled.p`
  color: #ffffffcc;
  font-size: 12px;
  line-height: 19px;
`;

export const WishList = styled.div`
  width: 1000px;
  margin: 30px 0;
  padding: 5px 0 0 0;
  background-color: #fafafa;
  border-radius: 10px;
  text-align: center;
`;

export const InfoText = styled.p`
  color: #22222280;
  font-size: 12px;
`;
