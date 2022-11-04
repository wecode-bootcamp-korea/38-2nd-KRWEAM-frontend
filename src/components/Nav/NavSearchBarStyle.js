import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavSearchBar = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  overflow: unset;
  .closedModal {
    position: absolute;
    top: 18px;
    right: 20px;
  }
`;
export const SearchBarWrap = styled.div`
  padding: 60px 20% 0;
`;
export const InputBox = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 3px solid black;
  .navInput {
    width: 100%;
    border: none;
    padding-bottom: 20px;
    font-size: 20px;
  }
  .navInput:focus {
    outline: none;
  }
  .inputIcon {
    margin-top: 3px;
  }
`;
export const SearchBarContentWrap = styled.div`
  padding: 10px 20%;
`;
export const SuggestedSearchTermsBox = styled.div`
  margin: 10px 0;
`;
export const SuggestedSearchTermsText = styled.div`
  display: flex;
  font-weight: bold;
`;
export const SuggestedSearchTermsContainer = styled.div`
  display: flex;
  margin: 10px 0;
`;
export const RecommandSet = styled.div`
  ${({ theme }) => theme.variables.flex(null, "center", "center")}
  padding: 8px 12px;
  margin: 0 5px;
  color: ${({ theme }) => theme.style.warmGrey_3};
  background-color: #f4f4f4;
  border: 1px solid ${({ theme }) => theme.style.warmGrey_2};
  border-radius: 30px;
  font-size: 14px;
`;
export const PopularSearchTermsBox = styled.div`
  margin: 40px 0 20px;
`;

export const PopularSearchTermsTitle = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 12px;
`;
export const PopularSearchTime = styled.div`
  display: flex;
  margin: 03px 10px;
  font-weight: normal;
  font-size: 13px;
`;
export const PopularSearchTermsMapContainer = styled.div`
  display: flex;
`;
export const PopularSearchTermsMapBox = styled.div`
  padding: 4px 0 16px;
  width: 50%;
  line-height: 17px;
  font-size: 14px;
`;
export const PopularSearchTermsOl = styled.ol`
  display: flex;
  padding: 4px 0 16px;
`;
export const PopularSearchTermsUlId = styled.ul`
  font-weight: bold;
`;
export const PopularSearchTermsUlText = styled.ul`
  margin: 0 10px;
`;
export const NavCategoryBox = styled.div`
  width: 800px;
  margin: 40px 0 20px;
`;
export const NavCategoryTitle = styled.div`
  margin-bottom: 20px;
  text-align: start;
  font-weight: bold;
`;
export const NavCategoryContainer = styled.div`
  display: flex;
`;

export const NavCategoryimg = styled.img`
  width: 150px;
  height: 104px;
  margin: 0 ${props => (props.index === "1" ? 0 : "5px")};
  border: 1px solid ${({ theme }) => theme.style.warmGrey_2};
  border-radius: 8px;
`;
export const NavCategoryName = styled(Link)`
  color: black;
  text-decoration: none;
`;
