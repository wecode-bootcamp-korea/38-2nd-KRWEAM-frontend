import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi";
import ItemComponent from "../../../components/ItemComponent/ItemComponent";

import * as S from "../styled.ProductList";

const Content = ({ products, categories }) => {
  const navigate = useNavigate();
  const [isToggled, setIsToggled] = useState(false);

  const toggleCategory = () => {
    setIsToggled(!isToggled);
  };

  return (
    <S.Content>
      <S.DetailFilters>
        <S.Div>필터</S.Div>
        {categories.map(({ categoryId, filter, subCategories }) => {
          return (
            <S.Detail key={categoryId} id={categoryId} onClick={toggleCategory}>
              <S.Div1>
                <S.Div2>{filter}</S.Div2>
                <S.Span2>모든 {filter}</S.Span2>
              </S.Div1>
              {isToggled ? (
                <HiOutlineMinus className="categoryOpenIcon" />
              ) : (
                <HiOutlinePlus className="categoryOpenIcon" />
              )}
            </S.Detail>
          );
        })}
      </S.DetailFilters>
      <S.Items>
        <S.Button>빠른배송</S.Button>
        <S.Button>브랜드배송</S.Button>
        <S.Grid>
          {products.map(product => (
            <div key={product.productId}>
              <ItemComponent productInfo={product} onClick={() => navigate()} />
            </div>
          ))}
        </S.Grid>
      </S.Items>
    </S.Content>
  );
};

export default Content;
