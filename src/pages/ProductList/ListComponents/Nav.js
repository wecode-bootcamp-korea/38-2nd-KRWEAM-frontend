import React from "react";
import { HiOutlineFilter } from "react-icons/hi";
import * as S from "../styled.ProductList";

const Nav = ({ categories }) => {
  return (
    <S.Nav>
      <S.TopBox>
        <S.H1>SHOP</S.H1>
        <S.Filters>
          <S.Filter>
            <HiOutlineFilter />
          </S.Filter>
          {categories.map(({ subCategory, subCategoryId }) => {
            return (
              <S.Filter key={subCategoryId} id={subCategoryId}>
                {subCategory}
              </S.Filter>
            );
          })}
        </S.Filters>
      </S.TopBox>
    </S.Nav>
  );
};

export default Nav;
