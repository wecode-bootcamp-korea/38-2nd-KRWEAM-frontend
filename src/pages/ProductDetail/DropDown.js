import React, { useEffect, useState } from "react";
import * as S from "./StyledDropDown";
import { AiOutlineDown } from "react-icons/ai";

const DetailDropDown = () => {
  const [openList, setOpenList] = useState(false);
  const [selectDescription, setSelectDescription] = useState(0);
  const listWrap = [openList, selectDescription];
  const [dropDownData, setDropDownData] = useState([]);
  const onClick = id => {
    setSelectDescription(id);
    if (listWrap[1] === id) {
      setOpenList(prev => !prev);
    }
  };
  useEffect(() => {
    fetch("/data/dropDownData.json")
      .then(res => res.json())
      .then(data => setDropDownData(data));
  }, []);
  return (
    <S.ProductBuyingMustInfo>
      <S.ProductConfirmTitle>구매 전 꼭 확인해주세요!</S.ProductConfirmTitle>
      {dropDownData?.map(dropDownData => (
        <S.ProductDropDownTitle
          key={dropDownData.id}
          onClick={() => onClick(dropDownData.id)}
        >
          <S.DropDownTitle>
            {dropDownData.title}
            <AiOutlineDown />
          </S.DropDownTitle>
          {dropDownData.id === selectDescription &&
            dropDownData.text.map(textData => (
              <S.DropDownsubTitleSet isActive={openList} key={textData.id}>
                <S.DropDownsubTitle index={textData.id}>
                  {textData.subtitle}
                </S.DropDownsubTitle>
                <S.DropDowntext>{textData.text}</S.DropDowntext>
              </S.DropDownsubTitleSet>
            ))}
        </S.ProductDropDownTitle>
      ))}
    </S.ProductBuyingMustInfo>
  );
};
export default DetailDropDown;
