import React, { useEffect, useState } from "react";
import AdsContainer from "./ListComponents/AdsContainer";
import Content from "./ListComponents/Content";
import Nav from "./ListComponents/Nav";
import * as S from "./styled.ProductList";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const setProductList = () =>
    fetch(`/data/productList.json`)
      .then(res => res.json())
      .then(result => {
        setProducts(result);
      });

  useEffect(() => {
    setProductList();
  }, []);

  return (
    <S.List>
      <Nav categories={FILTER[0].subCategories} />
      <AdsContainer />
      <Content categories={FILTER} products={products} />
    </S.List>
  );
};

export default ProductList;

const FILTER = [
  {
    categoryId: 1,
    filter: "카테고리",
    subCategories: [
      { subCategoryId: 1, subCategory: "신발" },
      { subCategoryId: 2, subCategory: "의류" },
      { subCategoryId: 3, subCategory: "패션잡화" },
      { subCategoryId: 4, subCategory: "라이프" },
      { subCategoryId: 5, subCategory: "테크" },
    ],
  },
  {
    categoryId: 2,
    filter: "브랜드",
    subCategories: [
      { subCategoryId: 1, subCategory: "pineapple" },
      { subCategoryId: 2, subCategory: "Wecode Studio" },
      { subCategoryId: 3, subCategory: "Wermes" },
      { subCategoryId: 4, subCategory: "Github Island" },
      { subCategoryId: 5, subCategory: "Another Error" },
    ],
  },
  {
    categoryId: 3,
    filter: "성별",
    subCategories: [
      { subCategoryId: 1, subCategory: "남성" },
      { subCategoryId: 2, subCategory: "여성" },
      { subCategoryId: 3, subCategory: "공통" },
    ],
  },
  {
    categoryId: 4,
    filter: "가격",
    subCategories: [
      { subCategoryId: 1, subCategory: "10만원 이하" },
      { subCategoryId: 2, subCategory: "10만원 - 30만원 이하" },
      { subCategoryId: 3, subCategory: "30만원 - 50만원 이하" },
      { subCategoryId: 4, subCategory: "50만원 이상" },
    ],
  },
];
