import React, { useContext } from "react";
import { HiOutlineFilter } from "react-icons/hi";
import { ListContext } from "../../../context/ListContext";
import * as S from "../styled.ProductList";

const Nav = ({ keyword }) => {
  const { FILTER, clickSubCategory } = useContext(ListContext);
  const categories = FILTER[0].subCategories;

  return (
    <S.Nav>
      <S.TopBox>
        <S.H1>{keyword}</S.H1>
        <S.Filters>
          <S.Filter>
            <HiOutlineFilter />
          </S.Filter>
          {categories.map(({ subCategory, subCategoryId }) => {
            return (
              <S.Filter
                key={subCategoryId}
                id={subCategoryId}
                onClick={e => {
                  clickSubCategory(e, 1);
                }}
              >
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
