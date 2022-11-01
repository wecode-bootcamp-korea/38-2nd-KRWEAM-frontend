import React, { useEffect } from "react";
import * as S from "./StyledMiniModal";
import { BsXLg } from "react-icons/bs";

const MiniModal = props => {
  const { setIsMiniModal, size, sizeControl, setSizeControl } = props;
  const closedModal = () => {
    setIsMiniModal(true);
  };
  const clickSize = sizeData => {
    setSizeControl(sizeData);
  };

  useEffect(() => {
    document.body.style.cssText = `
          position: fixed; 
          top: -${window.scrollY}px;
          overflow-y: scroll;
          width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);
  return (
    <S.MiniModalBackground>
      <S.MiniModal>
        <S.MiniModalContainer>
          사이즈
          <BsXLg className="closedModal" onClick={closedModal} />
        </S.MiniModalContainer>
        <S.MiniModalContentContainer>
          {size.map(sizeData => {
            const isSelected = sizeData.size === sizeControl;
            return (
              <S.MiniModalContent
                onClick={() => clickSize(sizeData.size)}
                key={sizeData.sizeId}
                setSizesizeData={sizeData.size}
                isSelected={isSelected}
              >
                {sizeData.size}
              </S.MiniModalContent>
            );
          })}
        </S.MiniModalContentContainer>
      </S.MiniModal>
    </S.MiniModalBackground>
  );
};
export default MiniModal;
