import styled from "styled-components";

export const MiniModalBackground = styled.div`
  z-index: 998;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.style.warmGrey_3};
  overflow: unset;
`;
export const MiniModal = styled.div`
  top: 20%;
  left: 32%;
  z-index: 999;
  position: fixed;
  width: 480px;
  height: 514px;
  background-color: white;
  border-radius: 30px;
  overflow: unset;
  pointer-events: none;
`;

export const MiniModalContainer = styled.div`
  ${props => props.theme.variables.flex("column", "center", "center")}
  margin-top: 20px;
  pointer-events: none;
  .closedModal {
    position: absolute;
    top: 18px;
    right: 20px;
    pointer-events: auto;
  }
`;
export const MiniModalContentContainer = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
export const MiniModalContent = styled.div`
  ${props => props.theme.variables.flex("column", "center", "center")}
  height:50px;
  margin: 4px 10px;
  border: 2px solid ${({ isSelected }) => (isSelected ? "black" : "#ebebeb")};
  border-radius: 8px;
  font-weight: normal;
  pointer-events: auto;
`;
// export const NavSearchBar = styled.div``;
// export const NavSearchBar = styled.div``;
// export const NavSearchBar = styled.div``;
