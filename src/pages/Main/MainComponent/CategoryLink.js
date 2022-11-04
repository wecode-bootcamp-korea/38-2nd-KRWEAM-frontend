import React from "react";
import * as S from "./CategoryLinkStyle";
import CATEGORY from "./categoryData";

const CategoryLink = () => {
  return (
    <S.GridContainer>
      {CATEGORY.map(categoryItem => (
        <S.CategoryContainer key={categoryItem.id}>
          <S.CategoryLink to={categoryItem.url}>
            <S.CategoryImg src={categoryItem.backgroundImg} />
            <S.CategoryText>{categoryItem.categoryname}</S.CategoryText>
          </S.CategoryLink>
        </S.CategoryContainer>
      ))}
    </S.GridContainer>
  );
};

export default CategoryLink;
