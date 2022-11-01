import React from "react";
import * as S from "./StyledImageContainer";
import { AiOutlineArrowRight } from "react-icons/ai";

const DetailImageContainer = props => {
  const imageSrc = props;
  return (
    <S.DetailImageContainer>
      <S.DetailImage>
        <S.ProductImage src={imageSrc.productImage} />
      </S.DetailImage>
      <S.DetailImageText_Icon>
        <S.DetailImageTextContainer>
          <S.DetailImageText1_2>
            <S.DetailImageText1>주의</S.DetailImageText1>
            <S.DetailImageText2>판매 거래 주의사항</S.DetailImageText2>
          </S.DetailImageText1_2>
          <S.DetailImageText3>
            반드시 보유한 상품만 판매하세요
          </S.DetailImageText3>
        </S.DetailImageTextContainer>
        <S.DetailImageIcon>
          <AiOutlineArrowRight className="arrowIcon" />
        </S.DetailImageIcon>
      </S.DetailImageText_Icon>
    </S.DetailImageContainer>
  );
};
export default DetailImageContainer;
